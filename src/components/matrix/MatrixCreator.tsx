import React, { useState, useEffect } from 'react';
import { CURRICULUM, sortChaptersByCurriculum, sortLessonsByNumber } from '../../constants/curriculum';
import { 
  Grade, Chapter, MatrixData, Lesson, ExamType, SavedConfig, 
  SectionCountsConfig, DEFAULT_SECTION_COUNTS,
  SubjectRatioConfig, getDefaultSubjectRatio 
} from '../../types/matrix';
import { generateMatrix, distribute } from '../../services/matrixService';
import { MatrixDisplay } from './MatrixDisplay';
import { 
  Layout, Plus, CheckCircle, Trash2, Save, 
  ChevronDown, ChevronUp, AlertTriangle, Settings2, RefreshCw, 
  Check, FileText, ChevronRight, Sparkles, Layers, ListFilter,
  Edit3, X, CheckCircle2, RotateCcw, Sliders, BookOpen,
  FlaskConical, Atom, Dna, Calculator, SlidersHorizontal
} from 'lucide-react';
import { saveMatrixConfig } from '../../services/storageService';

interface MatrixCreatorProps {
  onTransferToExam: (matrixData: MatrixData) => void;
  initialMatrixData?: MatrixData | null;
  loadedConfig?: SavedConfig | null;
  onClearLoadedConfig?: () => void;
}

const restoreLessonsWithPart2Hosts = (lessons: Lesson[], matrix?: MatrixData | null, targetHosts: number = 3): Lesson[] => {
  if (!lessons || lessons.length === 0) return [];

  let normalizedLessons: Lesson[] = lessons.map(l => ({
    ...l,
    subItems: l.subItems && l.subItems.length > 0 ? [...l.subItems] : ['Khái niệm cơ bản & hiện tượng', 'Ứng dụng & bài tập thực tiễn'],
    part2Hosts: l.part2Hosts ? [...l.part2Hosts] : []
  }));

  const currentTotalHosts = normalizedLessons.reduce((acc, l) => acc + (l.part2Hosts?.length || 0), 0);
  if (currentTotalHosts >= targetHosts) {
    return sortLessonsByNumber(normalizedLessons);
  }

  if (matrix && matrix.rows && matrix.rows.length > 0) {
    const p2Rows = matrix.rows.filter(r => r.part2 && (r.part2.know > 0 || r.part2.understand > 0 || r.part2.apply > 0));
    if (p2Rows.length > 0) {
      normalizedLessons = normalizedLessons.map(lesson => {
        const matchingDetailNames = p2Rows
          .filter(r => r.lessonName === lesson.name)
          .map(r => r.detailName);

        if (matchingDetailNames.length === 0) return lesson;

        const currentHosts = new Set(lesson.part2Hosts || []);
        matchingDetailNames.forEach(detail => currentHosts.add(detail));

        const currentSubItems = new Set(lesson.subItems || []);
        matchingDetailNames.forEach(detail => currentSubItems.add(detail));

        return {
          ...lesson,
          subItems: Array.from(currentSubItems),
          part2Hosts: Array.from(currentHosts)
        };
      });
    }
  }

  return sortLessonsByNumber(normalizedLessons);
};

const syncLessonsWithChapters = (
  currentLessons: Lesson[], 
  chapters: Chapter[], 
  isCustom: boolean,
  grade: Grade | null
): Lesson[] => {
  if (isCustom) return sortLessonsByNumber(currentLessons);
  if (chapters.length === 0) {
    return sortLessonsByNumber(currentLessons.filter(l => l.id.startsWith('custom_')));
  }

  const sortedChapters = sortChaptersByCurriculum(chapters, grade);
  const result: Lesson[] = [];

  sortedChapters.forEach(chapter => {
    (chapter.lessons || []).forEach(cl => {
      const existing = currentLessons.find(l => l.id === cl.id);
      if (existing) {
        result.push(existing);
      } else {
        result.push({
          ...cl,
          subItems: cl.subItems && cl.subItems.length > 0 
            ? cl.subItems 
            : ['Khái niệm cơ bản & hiện tượng', 'Ứng dụng & bài tập thực tiễn'],
          part2Hosts: []
        });
      }
    });
  });

  const customLessons = currentLessons.filter(l => l.id.startsWith('custom_'));
  result.push(...customLessons);

  return sortLessonsByNumber(result);
};

const getDefaultSubItemsForLesson = (lessonId: string): string[] | null => {
  for (const grade of [6, 7, 8, 9]) {
    const chapters = CURRICULUM[grade] || [];
    for (const chap of chapters) {
      const found = (chap.lessons || []).find(l => l.id === lessonId);
      if (found && found.subItems && found.subItems.length > 0) {
        return found.subItems;
      }
    }
  }
  return null;
};

const getDomainBadge = (domain?: string) => {
  if (!domain) return null;
  if (domain.includes('Vật sống')) {
    return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Sinh học</span>;
  }
  if (domain.includes('Chất và sự biến đổi')) {
    return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-300">Hoá học</span>;
  }
  if (domain.includes('Năng lượng')) {
    return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">Vật lí</span>;
  }
  if (domain.includes('Trái Đất')) {
    return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">Trái Đất & Bầu trời</span>;
  }
  return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300">Phương pháp & Kĩ năng</span>;
};

// Định hướng chuyên môn từ file De_xuat_Ti_le_Phan_mon_Li_Hoa_Sinh_KHTN_THCS.docx
export const getSubjectRatioRationale = (grade: Grade | null, examType: ExamType): string => {
  const g = typeof grade === 'number' ? grade : 8;
  if (g === 6) {
    if (examType === ExamType.MID_TERM_1) return 'Kiểm tra kĩ năng đo lường, quy tắc an toàn (Lí 3,5đ), thể của chất (Hoá 3,5đ), cấu tạo sơ lược tế bào (Sinh 3,0đ).';
    if (examType === ExamType.END_TERM_1) return 'Trọng tâm HK1 là Tế bào và Đa dạng thế giới sống (Sinh 5,0đ) cùng mạch Chất và biến đổi chất (Hoá 3,0đ), ôn tập đo lường (Lí 2,0đ).';
    if (examType === ExamType.MID_TERM_2) return 'Trọng tâm là Đa dạng thực vật, động vật (Sinh 5,5đ), Biểu diễn lực, biến dạng lò xo (Lí 3,0đ) và tích hợp Hoá (1,5đ).';
    if (examType === ExamType.END_TERM_2) return 'Vật lí chiếm tỉ trọng lớn (Lí 4,5đ) do học dồn toàn bộ mạch Lực, Năng lượng và Trái Đất - Bầu trời, kết hợp Sinh học (4,0đ) và Hoá (1,5đ).';
  } else if (g === 7) {
    if (examType === ExamType.MID_TERM_1) return 'Kiểm tra mô hình nguyên tử, BTH hoá học (Hoá 3,5đ), đồ thị s-t, tính tốc độ (Lí 3,0đ) và quá trình quang hợp (Sinh 3,5đ).';
    if (examType === ExamType.END_TERM_1) return 'Cả 3 phân môn có thời lượng tích luỹ tương đương nhau ở HK1: Âm, Sáng (Lí 3,5đ) - Hoá trị, CTHH (Hoá 3,0đ) - Hô hấp, TĐC (Sinh 3,5đ).';
    if (examType === ExamType.MID_TERM_2) return 'Sinh học chiếm ưu thế lớn (Sinh 5,5đ: Trao đổi nước, Cảm ứng, Tập tính) kết hợp Từ trường (Lí 3,5đ) và Hoá học (1,0đ).';
    if (examType === ExamType.END_TERM_2) return 'Sinh học lớp 7 tập trung ở nửa cuối năm (Sinh 5,5đ: Sinh trưởng, Sinh sản) kết hợp tổng hợp Vật lí (3,0đ) và Hoá học (1,5đ).';
  } else if (g === 8) {
    if (examType === ExamType.MID_TERM_1) return 'Lớp 8 có sự phân bổ 3 phân môn đồng đều nhất: PƯHH, Mol, Nồng độ (Hoá 3,5đ) - KL riêng, Áp suất (Lí 3,5đ) - Tiêu hoá, Vận động (Sinh 3,0đ).';
    if (examType === ExamType.END_TERM_1) return 'Ba phân môn chia đều tỉ lệ ~ 3,0 – 3,5đ: Acid, Base, PTHH (Hoá 3,5đ) - Áp suất chất lỏng, Đòn bẩy (Lí 3,0đ) - Tuần hoàn, Hô hấp (Sinh 3,5đ).';
    if (examType === ExamType.MID_TERM_2) return 'Kiểm tra tính chất Oxide, Muối (Hoá 3,0đ) - Dòng điện, Mạch điện (Lí 3,5đ) - Cân bằng nội môi, Thần kinh, Nội tiết (Sinh 3,5đ).';
    if (examType === ExamType.END_TERM_2) return 'Sinh học cuối kì 8 có thêm mạch Sinh thái học và môi trường (Sinh 4,0đ) - Nhiệt học & Điện (Lí 3,5đ) - Hợp chất vô cơ (Hoá 2,5đ).';
  } else if (g === 9) {
    if (examType === ExamType.MID_TERM_1) return 'Kiểm tra cơ năng, bảo toàn cơ năng, khúc xạ (Lí 3,5đ) - Dãy hoạt động hoá học kim loại (Hoá 3,0đ) - Quy luật di truyền Mendel (Sinh 3,5đ).';
    if (examType === ExamType.END_TERM_1) return 'Trọng tâm thấu kính, định luật Ohm (Lí 3,5đ) - Tách kim loại, Hữu cơ (Hoá 3,0đ) - Cơ chế di truyền phân tử DNA, Gene, Đột biến (Sinh 3,5đ).';
    if (examType === ExamType.MID_TERM_2) return 'Hoá học chiếm tỉ trọng cao nhất (Hoá 4,0đ: Hydrocarbon, Cồn, Giấm) - Mạch điện, Cảm ứng điện từ (Lí 3,0đ) - Di truyền NST (Sinh 3,0đ).';
    if (examType === ExamType.END_TERM_2) return 'Đề Cuối kì 2 lớp 9 đồng thời bám sát cấu trúc thi tuyển sinh vào lớp 10 THPT: Tổng hợp Lí (3,0đ) - Hoá hữu cơ (3,5đ) - Di truyền & Tiến hoá (3,5đ).';
  }
  return 'Phân bổ cân đối giữa các phân môn Lí, Hoá, Sinh theo kế hoạch giáo dục của tổ chuyên môn.';
};

export const MatrixCreator: React.FC<MatrixCreatorProps> = ({ 
  onTransferToExam,
  initialMatrixData,
  loadedConfig,
  onClearLoadedConfig
}) => {
  const [activeGrade, setActiveGrade] = useState<Grade | null>(() => {
    if (loadedConfig?.grade !== undefined) return loadedConfig.grade;
    return 6;
  });

  const [isCustomMode, setIsCustomMode] = useState<boolean>(() => {
    return loadedConfig?.isCustomMode || false;
  });

  const [customChapterName, setCustomChapterName] = useState<string>(() => {
    return loadedConfig?.customChapterName || 'Chủ đề tự do';
  });

  const [examType, setExamType] = useState<ExamType>(() => {
    return loadedConfig?.examType || ExamType.MID_TERM_1;
  });

  const [sectionCounts, setSectionCounts] = useState<SectionCountsConfig>(() => {
    return loadedConfig?.sectionCounts || DEFAULT_SECTION_COUNTS;
  });

  const [subjectRatio, setSubjectRatio] = useState<SubjectRatioConfig>(() => {
    if (loadedConfig?.subjectRatio) return loadedConfig.subjectRatio;
    const g = loadedConfig?.grade ?? 6;
    const et = loadedConfig?.examType ?? ExamType.MID_TERM_1;
    return getDefaultSubjectRatio(g, et);
  });

  const [selectedChapters, setSelectedChapters] = useState<Chapter[]>(() => {
    if (loadedConfig?.selectedChapters && loadedConfig.selectedChapters.length > 0) {
      return sortChaptersByCurriculum(loadedConfig.selectedChapters, loadedConfig.grade);
    }
    const grade = loadedConfig?.grade ?? 6;
    if (grade !== 'Tự do' && CURRICULUM[grade as number]?.length > 0) {
      return [CURRICULUM[grade as number][0]];
    }
    return [];
  });

  const [editableLessons, setEditableLessons] = useState<Lesson[]>(() => {
    if (loadedConfig?.editableLessons && loadedConfig.editableLessons.length > 0) {
      return sortLessonsByNumber(restoreLessonsWithPart2Hosts(loadedConfig.editableLessons, loadedConfig.generatedMatrix, loadedConfig.sectionCounts?.part2Count || 3));
    }
    const grade = loadedConfig?.grade ?? 6;
    if (grade !== 'Tự do' && CURRICULUM[grade as number]?.length > 0) {
      const defaultChapter = CURRICULUM[grade as number][0];
      return sortLessonsByNumber(defaultChapter.lessons.map(cl => ({
        ...cl,
        subItems: cl.subItems && cl.subItems.length > 0 ? [...cl.subItems] : ['Khái niệm cơ bản & hiện tượng', 'Ứng dụng & bài tập thực tiễn'],
        part2Hosts: []
      })));
    }
    return [];
  });

  const [newLessonName, setNewLessonName] = useState('');
  const [extraRequirements, setExtraRequirements] = useState<string>(() => {
    return loadedConfig?.extraRequirements || '';
  });

  const [matrixData, setMatrixData] = useState<MatrixData | null>(() => {
    return loadedConfig?.generatedMatrix || initialMatrixData || null;
  });

  const [editingConfigId, setEditingConfigId] = useState<string | null>(() => {
    return loadedConfig?.id || null;
  });

  const [editingConfigName, setEditingConfigName] = useState<string | null>(() => {
    return loadedConfig?.name || null;
  });

  const [currentStep, setCurrentStep] = useState<1 | 2>(() => {
    return loadedConfig ? 2 : 1;
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [showEditor, setShowEditor] = useState<boolean>(true);
  const [expandAllLessons, setExpandAllLessons] = useState<boolean>(() => Boolean(loadedConfig));
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);

  const [deletedSubItemsHistory, setDeletedSubItemsHistory] = useState<Record<string, { item: string; index: number; wasHost?: boolean }[]>>({});

  const targetP2Hosts = sectionCounts.part2Count;

  // Tính toán điểm số trực quan cho 4 phần
  const p1Score = sectionCounts.part1Count * 0.25;
  const p2Score = sectionCounts.part2Count * 1.0;
  const p3Score = sectionCounts.part3Count * 0.5;
  const p4Score = Math.max(0.5, Math.round((10.0 - (p1Score + p2Score + p3Score)) * 100) / 100);

  // Tự động thu gọn số bối cảnh nếu vượt quá targetP2Hosts
  useEffect(() => {
    const currentHostsCount = editableLessons.reduce((acc, l) => acc + (l.part2Hosts?.length || 0), 0);
    if (currentHostsCount > targetP2Hosts) {
      let excess = currentHostsCount - targetP2Hosts;
      setEditableLessons(prev => prev.map(l => {
        if (!l.part2Hosts || l.part2Hosts.length === 0 || excess <= 0) return l;
        const keepCount = Math.max(0, l.part2Hosts.length - excess);
        excess -= (l.part2Hosts.length - keepCount);
        return {
          ...l,
          part2Hosts: l.part2Hosts.slice(0, keepCount)
        };
      }));
    }
  }, [targetP2Hosts]);

  const handleGradeSelect = (grade: Grade) => {
    setIsCustomMode(false);
    setActiveGrade(grade);
    const defaultChaps = CURRICULUM[grade as number] || [];
    const newSelected = defaultChaps.length > 0 ? [defaultChaps[0]] : [];
    setSelectedChapters(newSelected);
    
    const newLessons = newSelected.flatMap(ch => ch.lessons.map(l => ({
      ...l,
      subItems: l.subItems && l.subItems.length > 0 ? [...l.subItems] : ['Khái niệm cơ bản & hiện tượng', 'Ứng dụng & bài tập thực tiễn'],
      part2Hosts: []
    })));
    setEditableLessons(sortLessonsByNumber(newLessons));

    setExamType(ExamType.MID_TERM_1);
    setSubjectRatio(getDefaultSubjectRatio(grade, ExamType.MID_TERM_1));
    setMatrixData(null);
    setShowEditor(true);
    setCurrentStep(1);
    setEditingConfigId(null);
    setEditingConfigName(null);
    if (onClearLoadedConfig) onClearLoadedConfig();
  };

  const handleSubjectPercentChange = (subject: 'physics' | 'chemistry' | 'biology', val: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(val)));
    const act = subjectRatio.activeSubjects;
    const activeKeys = (['physics', 'chemistry', 'biology'] as const).filter(k => act[k]);
    if (activeKeys.length <= 1) return;

    if (activeKeys.length === 2) {
      const otherKey = activeKeys.find(k => k !== subject)!;
      const otherVal = Math.max(0, 100 - clamped);
      setSubjectRatio(prev => ({
        ...prev,
        [subject]: clamped,
        [otherKey]: otherVal,
        autoBalanceSubject: otherKey
      }));
      return;
    }

    // Khi có cả 3 môn hoạt động:
    let targetAuto = subjectRatio.autoBalanceSubject || 'biology';
    if (targetAuto === subject) {
      targetAuto = subject === 'biology' ? 'chemistry' : 'biology';
    }

    const thirdKey = activeKeys.find(k => k !== subject && k !== targetAuto)!;
    const thirdVal = subjectRatio[thirdKey];
    const newTargetVal = Math.max(0, 100 - clamped - thirdVal);

    setSubjectRatio(prev => ({
      ...prev,
      [subject]: clamped,
      [targetAuto]: newTargetVal,
      autoBalanceSubject: targetAuto
    }));
  };

  const handleToggleSubject = (subject: 'physics' | 'chemistry' | 'biology') => {
    const act = { ...subjectRatio.activeSubjects };
    const currentActiveCount = (['physics', 'chemistry', 'biology'] as const).filter(k => act[k]).length;
    
    if (act[subject]) {
      if (currentActiveCount <= 2) {
        alert("Đề kiểm tra định kì phải bao gồm từ 2 đến 3 phân môn (Lí, Hoá, Sinh)!");
        return;
      }
      act[subject] = false;
      const remainingKeys = (['physics', 'chemistry', 'biology'] as const).filter(k => act[k]);
      setSubjectRatio(prev => ({
        ...prev,
        activeSubjects: act,
        [subject]: 0,
        [remainingKeys[0]]: 50,
        [remainingKeys[1]]: 50,
        autoBalanceSubject: remainingKeys[1]
      }));
    } else {
      act[subject] = true;
      const def = getDefaultSubjectRatio(activeGrade || 6, examType);
      setSubjectRatio({
        ...def,
        activeSubjects: act
      });
    }
  };

  const handleResetSubjectRatio = () => {
    setSubjectRatio(getDefaultSubjectRatio(activeGrade || 6, examType));
  };

  const handleSetAutoBalanceTarget = (subject: 'physics' | 'chemistry' | 'biology') => {
    setSubjectRatio(prev => ({
      ...prev,
      autoBalanceSubject: subject
    }));
  };

  const handleCustomModeSelect = () => {
    setIsCustomMode(true);
    setActiveGrade('Tự do');
    setExamType(ExamType.CUSTOM);
    setCustomChapterName('Chủ đề tự do');
    setSelectedChapters([{
      id: 'custom_main',
      name: 'Chủ đề tự do',
      lessons: []
    }]);
    setEditableLessons([]);
    setMatrixData(null);
    setShowEditor(true);
    setCurrentStep(2);
    setEditingConfigId(null);
    setEditingConfigName(null);
    if (onClearLoadedConfig) onClearLoadedConfig();
  };

  const toggleChapter = (chapter: Chapter) => {
    const isMultiple = true;

    setSelectedChapters(prev => {
      let nextChapters: Chapter[];
      const exists = prev.find(c => c.id === chapter.id);
      if (exists) {
        nextChapters = prev.filter(c => c.id !== chapter.id);
      } else {
        nextChapters = isMultiple ? [...prev, chapter] : [chapter];
      }
      if (!isCustomMode && activeGrade && activeGrade !== 'Tự do') {
        nextChapters = sortChaptersByCurriculum(nextChapters, activeGrade);
      }
      setEditableLessons(prevLessons => syncLessonsWithChapters(prevLessons, nextChapters, isCustomMode, activeGrade));
      return nextChapters;
    });
  };

  const handleSelectAllChapters = () => {
    if (activeGrade && activeGrade !== 'Tự do') {
      const allChapters = CURRICULUM[activeGrade as number] || [];
      setSelectedChapters(allChapters);
      setEditableLessons(prevLessons => syncLessonsWithChapters(prevLessons, allChapters, isCustomMode, activeGrade));
    }
  };

  const handleDeselectAllChapters = () => {
    setSelectedChapters([]);
    setEditableLessons(prevLessons => syncLessonsWithChapters(prevLessons, [], isCustomMode, activeGrade));
  };

  const handleAddLesson = () => {
    if (!newLessonName.trim()) return;
    const newLesson: Lesson = {
      id: `custom_${Date.now()}`,
      name: newLessonName.trim(),
      subItems: ['Khái niệm cơ bản & hiện tượng', 'Bài tập vận dụng thực tiễn'],
      part2Hosts: []
    };
    setEditableLessons(sortLessonsByNumber([...editableLessons, newLesson]));
    setNewLessonName('');
    setExpandedLessonId(newLesson.id);
  };

  const handleRemoveLesson = (id: string) => {
    setEditableLessons(editableLessons.filter(l => l.id !== id));
  };

  const handleAddSubItem = (lessonId: string, itemName: string) => {
    if (!itemName.trim()) return;
    const items = itemName.split(/[,;]/).map(i => i.trim()).filter(i => i.length > 0);
    
    setEditableLessons(prev => prev.map(l => {
      if (l.id === lessonId) {
        const currentItems = l.subItems || [];
        const newItems = [...currentItems];
        for (const item of items) {
          if (!newItems.includes(item)) {
            newItems.push(item);
          }
        }
        return { ...l, subItems: newItems };
      }
      return l;
    }));
  };

  const handleRemoveSubItem = (lessonId: string, index: number) => {
    setEditableLessons(prev => prev.map(l => {
      if (l.id === lessonId) {
        const currentItems = l.subItems || [];
        const itemName = currentItems[index];
        if (!itemName) return l;

        const wasHost = (l.part2Hosts || []).includes(itemName);
        const newHosts = (l.part2Hosts || []).filter(h => h !== itemName);

        setDeletedSubItemsHistory(history => {
          const prevList = history[lessonId] || [];
          return {
            ...history,
            [lessonId]: [...prevList, { item: itemName, index, wasHost }]
          };
        });

        return { 
          ...l, 
          subItems: currentItems.filter((_, i) => i !== index),
          part2Hosts: newHosts
        };
      }
      return l;
    }));
  };

  const handleRestoreDefaultSubItems = (lessonId: string) => {
    const defaultItems = getDefaultSubItemsForLesson(lessonId);
    if (!defaultItems) return;

    setEditableLessons(prev => prev.map(l => {
      if (l.id === lessonId) {
        return {
          ...l,
          subItems: [...defaultItems]
        };
      }
      return l;
    }));
  };

  const togglePart2Host = (lessonId: string, itemName: string) => {
    const totalSelected = editableLessons.reduce((acc, l) => acc + (l.part2Hosts?.length || 0), 0);
    
    setEditableLessons(prev => prev.map(l => {
      if (l.id === lessonId) {
        const currentHosts = l.part2Hosts || [];
        if (currentHosts.includes(itemName)) {
          return { ...l, part2Hosts: currentHosts.filter(h => h !== itemName) };
        } else {
          if (totalSelected >= targetP2Hosts) {
            alert(`Bạn đã chọn đủ ${targetP2Hosts} bối cảnh cho Phần II (Đúng/Sai). Vui lòng bỏ chọn bớt một bối cảnh nếu muốn chọn mục này!`);
            return l; 
          }
          return { ...l, part2Hosts: [...currentHosts, itemName] };
        }
      }
      return l;
    }));
  };

  const totalPart2Selected = editableLessons.reduce((acc, l) => acc + (l.part2Hosts?.length || 0), 0);

  const selectedPart2Items = sortLessonsByNumber(editableLessons).flatMap(l => 
    (l.part2Hosts || []).map(item => ({
      lessonId: l.id,
      lessonName: l.name,
      item
    }))
  );

  const autoDistributeHostsAcrossChapters = (
    currentLessons: Lesson[], 
    chapters: Chapter[], 
    grade: Grade | null,
    targetHosts: number = targetP2Hosts
  ): Lesson[] => {
    const sortedChaps = sortChaptersByCurriculum(chapters, grade);
    const numChaps = sortedChaps.length;
    if (numChaps === 0) return currentLessons;

    const p2TargetPerChap = distribute(targetHosts, numChaps);
    let lessonsCopy: Lesson[] = currentLessons.map(l => ({
      ...l,
      part2Hosts: [] as string[]
    }));

    let totalAllocated = 0;

    sortedChaps.forEach((chap, cIdx) => {
      const targetForChap = p2TargetPerChap[cIdx];
      let chapAllocated = 0;
      const chapLessons = lessonsCopy.filter(l => 
        (chap.lessons || []).some(cl => cl.id === l.id) || l.id.startsWith('custom_')
      );

      for (const lesson of chapLessons) {
        if (chapAllocated >= targetForChap || totalAllocated >= targetHosts) break;
        if (!lesson.subItems || lesson.subItems.length === 0) continue;

        for (const sub of lesson.subItems) {
          if (!lesson.part2Hosts.includes(sub)) {
            lesson.part2Hosts.push(sub);
            chapAllocated++;
            totalAllocated++;
            break;
          }
        }
      }
    });

    if (totalAllocated < targetHosts) {
      for (const lesson of lessonsCopy) {
        if (totalAllocated >= targetHosts) break;
        if (!lesson.subItems) continue;
        for (const sub of lesson.subItems) {
          if (totalAllocated >= targetHosts) break;
          if (!lesson.part2Hosts.includes(sub)) {
            lesson.part2Hosts.push(sub);
            totalAllocated++;
          }
        }
      }
    }

    return lessonsCopy;
  };

  const handleAutoSelectHosts = () => {
    const newLessons = autoDistributeHostsAcrossChapters(editableLessons, selectedChapters, activeGrade, targetP2Hosts);
    setEditableLessons(newLessons);
    return newLessons;
  };

  const handleGenerate = () => {
    if (!activeGrade || selectedChapters.length === 0 || editableLessons.length === 0) {
      alert("Vui lòng chọn ít nhất một chương và có bài học!");
      return;
    }
    
    let lessonsToUse = editableLessons;
    if (totalPart2Selected < targetP2Hosts) {
      const confirmAuto = confirm(`Bạn mới chọn ${totalPart2Selected}/${targetP2Hosts} bối cảnh cho Phần II. Bạn có muốn hệ thống tự động phân bổ đều ${targetP2Hosts} bối cảnh cho các chương không?`);
      if (confirmAuto) {
        lessonsToUse = handleAutoSelectHosts();
      } else {
        return;
      }
    }

    setIsGenerating(true);

    const sortedChapters = sortChaptersByCurriculum(selectedChapters, activeGrade);
    const customChapters = isCustomMode 
      ? [{
          id: 'custom_main',
          name: customChapterName,
          lessons: sortLessonsByNumber(lessonsToUse)
        }]
      : sortedChapters.map(chapter => ({
          ...chapter,
          lessons: sortLessonsByNumber(lessonsToUse.filter(l => 
            (chapter.lessons || []).some(cl => cl.id === l.id) || l.id.startsWith('custom_')
          ))
        })).filter(c => c.lessons.length > 0);

    const generated = generateMatrix(activeGrade, customChapters, examType, sectionCounts, subjectRatio);
    generated.extraRequirements = extraRequirements;

    setMatrixData(generated);
    setIsGenerating(false);
    setShowEditor(false);
  };

  const handleSaveConfig = () => {
    if (!activeGrade || !matrixData) return;
    const name = editingConfigName || prompt("Nhập tên cho cấu hình ma trận này:", `Ma trận KHTN ${activeGrade} - ${examType} (${new Date().toLocaleDateString('vi-VN')})`);
    if (!name) return;

    const config: SavedConfig = {
      id: editingConfigId || `matrix_${Date.now()}`,
      name,
      timestamp: Date.now(),
      grade: activeGrade,
      selectedChapters: isCustomMode 
        ? [{ id: 'custom_main', name: customChapterName, lessons: editableLessons }] 
        : selectedChapters,
      examType,
      sectionCounts,
      subjectRatio,
      editableLessons,
      extraRequirements,
      isCustomMode,
      customChapterName,
      generatedMatrix: matrixData
    };

    saveMatrixConfig(config);
    setEditingConfigId(config.id);
    setEditingConfigName(config.name);
    alert("Đã lưu ma trận vào kho lưu trữ thành công!");
  };

  const handleCancelEditing = () => {
    setEditingConfigId(null);
    setEditingConfigName(null);
    if (onClearLoadedConfig) onClearLoadedConfig();
  };

  return (
    <div className="space-y-6">
      
      {/* Editing Mode Banner */}
      {editingConfigId && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 p-4 rounded-2xl shadow-lg border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-950 text-amber-400 rounded-xl shadow-md">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-950 text-amber-300">
                  Đang Chỉnh Sửa Ma Trận Đã Lưu
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {activeGrade === 'Tự do' ? 'Tự do' : `KHTN Lớp ${activeGrade}`} • {examType}
                </span>
              </div>
              <p className="text-base font-black text-slate-950 mt-0.5">
                {editingConfigName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCancelEditing}
              className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Hủy chỉnh sửa (Tạo mới)
            </button>
          </div>
        </div>
      )}

      {/* Editor Panel */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden no-print">
        
        {/* Step Indicator Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-600 rounded-xl shadow">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                {editingConfigId ? `Chỉnh Sửa Ma Trận: ${editingConfigName}` : 'Thiết Lập Ma Trận & Bản Đặc Tả KHTN THCS (GDPT 2018)'}
              </h2>
              <p className="text-xs text-teal-300">
                Định dạng 4 phần chuẩn: Trắc nghiệm 4 lựa chọn, Đúng/Sai, Trả lời ngắn & Tự luận • Tổng 10,0 điểm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {matrixData && (
              <button
                onClick={() => setShowEditor(!showEditor)}
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>{showEditor ? 'Thu gọn bảng chọn' : 'Mở bảng chỉnh sửa'}</span>
              </button>
            )}

            <div className="flex items-center bg-slate-800/80 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setCurrentStep(1)}
                className={`px-3 py-1 rounded-lg transition-colors ${currentStep === 1 ? 'bg-teal-600 text-white shadow' : 'text-slate-400'}`}
              >
                Bước 1: Phạm vi & Cấu hình số câu
              </button>
              <button
                onClick={() => setCurrentStep(2)}
                className={`px-3 py-1 rounded-lg transition-colors ${currentStep === 2 ? 'bg-teal-600 text-white shadow' : 'text-slate-400'}`}
              >
                Bước 2: Phân bổ bối cảnh Đúng/Sai
              </button>
            </div>
          </div>
        </div>

        {/* Content Body */}
        {showEditor && (
          <div className="p-6 space-y-6">
            
            {/* STEP 1: Grade, ExamType, Section Counts, Chapters */}
            {currentStep === 1 && (
              <div className="space-y-6">
                
                {/* 1. Grade Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. Chọn Khối Lớp Học (KHTN THCS)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {[6, 7, 8, 9].map((g) => (
                      <button
                        key={g}
                        onClick={() => handleGradeSelect(g as Grade)}
                        className={`p-4 rounded-xl border text-center transition-all font-bold ${
                          activeGrade === g && !isCustomMode
                            ? 'border-teal-600 bg-teal-50/80 text-teal-900 shadow-md ring-2 ring-teal-500/20'
                            : 'border-slate-200 hover:border-teal-300 text-slate-700 bg-white'
                        }`}
                      >
                        <div className="text-xl font-extrabold text-teal-600">Lớp {g}</div>
                        <div className="text-[11px] font-medium text-slate-500 mt-1">
                          {CURRICULUM[g]?.length || 0} chương sách
                        </div>
                      </button>
                    ))}

                    <button
                      onClick={handleCustomModeSelect}
                      className={`p-4 rounded-xl border text-center transition-all font-bold ${
                        isCustomMode
                          ? 'border-teal-600 bg-teal-50/80 text-teal-900 shadow-md ring-2 ring-teal-500/20'
                          : 'border-slate-200 hover:border-teal-300 text-slate-700 bg-white'
                      }`}
                    >
                      <div className="text-xl font-extrabold text-amber-600">Tự do</div>
                      <div className="text-[11px] font-medium text-slate-500 mt-1">Tự nhập nội dung</div>
                    </button>
                  </div>
                </div>

                {/* 2. Exam Type Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Hình thức kiểm tra
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {Object.values(ExamType).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setExamType(type);
                          setMatrixData(null);
                          if (activeGrade) {
                            setSubjectRatio(getDefaultSubjectRatio(activeGrade, type));
                          }
                        }}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                          examType === type
                            ? 'border-teal-600 bg-teal-600 text-white shadow'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Drop-down Cấu hình số lượng câu hỏi từng phần (Yêu cầu đặc biệt của người dùng) */}
                <div className="bg-gradient-to-br from-slate-50 to-teal-50/50 p-5 rounded-2xl border border-teal-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-teal-700" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        3. Cấu hình số câu hỏi 4 phần (Chọn bằng Drop-down / Select box)
                      </h4>
                    </div>
                    <span className="text-xs text-teal-700 font-semibold bg-teal-100/70 px-2.5 py-0.5 rounded-full border border-teal-300">
                      Cân bằng tự động = 10,0 điểm
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Phần I */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        PHẦN I: Trắc nghiệm 4 lựa chọn
                      </label>
                      <p className="text-[10px] text-slate-500 mb-2">0,25 đ/câu • 60% Biết, 40% Hiểu</p>
                      <div className="flex items-center gap-2">
                        <select
                          value={sectionCounts.part1Count}
                          onChange={(e) => setSectionCounts(prev => ({ ...prev, part1Count: Number(e.target.value) }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        >
                          {[16, 17, 18, 19, 20].map(cnt => (
                            <option key={cnt} value={cnt}>{cnt} câu ({ (cnt * 0.25).toFixed(2) } điểm)</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Phần II */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        PHẦN II: Trắc nghiệm Đúng/Sai
                      </label>
                      <p className="text-[10px] text-slate-500 mb-2">1,0 đ/câu (4 lệnh a, b, c, d)</p>
                      <div className="flex items-center gap-2">
                        <select
                          value={sectionCounts.part2Count}
                          onChange={(e) => setSectionCounts(prev => ({ ...prev, part2Count: Number(e.target.value) }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        >
                          {[2, 3, 4].map(cnt => (
                            <option key={cnt} value={cnt}>{cnt} câu ({ (cnt * 1.0).toFixed(2) } điểm - {cnt * 4} lệnh)</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Phần III */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        PHẦN III: Trắc nghiệm Trả lời ngắn
                      </label>
                      <p className="text-[10px] text-slate-500 mb-2">0,5 đ/câu (Điền số / thuật ngữ)</p>
                      <div className="flex items-center gap-2">
                        <select
                          value={sectionCounts.part3Count}
                          onChange={(e) => setSectionCounts(prev => ({ ...prev, part3Count: Number(e.target.value) }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        >
                          {[2, 3, 4].map(cnt => (
                            <option key={cnt} value={cnt}>{cnt} câu ({ (cnt * 0.5).toFixed(2) } điểm)</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Phần IV */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm">
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        PHẦN IV: Tự luận (Vận dụng cao)
                      </label>
                      <p className="text-[10px] text-slate-500 mb-2">Giải thích, PTHH, sơ đồ, di truyền</p>
                      <div className="flex items-center gap-2">
                        <select
                          value={sectionCounts.part4Count}
                          onChange={(e) => setSectionCounts(prev => ({ ...prev, part4Count: Number(e.target.value) }))}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        >
                          {[1, 2, 3].map(cnt => (
                            <option key={cnt} value={cnt}>{cnt} câu ({ p4Score.toFixed(2) } điểm)</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Thẻ tóm tắt thang điểm */}
                  <div className="mt-3.5 pt-3 border-t border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-700">
                    <div className="flex flex-wrap items-center gap-3">
                      <span>Phần I: <b className="text-teal-700">{p1Score.toFixed(2)}đ</b> ({Math.round(p1Score*10)}%)</span>
                      <span>•</span>
                      <span>Phần II: <b className="text-teal-700">{p2Score.toFixed(2)}đ</b> ({Math.round(p2Score*10)}%)</span>
                      <span>•</span>
                      <span>Phần III: <b className="text-teal-700">{p3Score.toFixed(2)}đ</b> ({Math.round(p3Score*10)}%)</span>
                      <span>•</span>
                      <span>Phần IV: <b className="text-teal-700">{p4Score.toFixed(2)}đ</b> ({Math.round(p4Score*10)}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-[11px]">
                        Tỉ lệ chuẩn: 40% Biết (4,0đ) - 30% Hiểu (3,0đ) - 30% Vận dụng (3,0đ)
                      </span>
                      <span className="font-black text-teal-900 text-xs">
                        TỔNG: 10,0 ĐIỂM
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Tỉ lệ Phân môn Lí - Hoá - Sinh (Theo file đề xuất & Tự ấn định, Tự động tính % còn lại) */}
                <div className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 p-5 rounded-2xl border border-indigo-200/90 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-indigo-100">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-indigo-600 text-white rounded-lg shadow-xs">
                        <FlaskConical className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-950 flex items-center gap-2">
                          4. Phân chia tỉ lệ nội dung phân môn Lí - Hoá - Sinh
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-bold lowercase">
                            tự động tính % còn lại
                          </span>
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          Mặc định bám sát file <span className="font-semibold text-slate-700">"De_xuat_Ti_le_Phan_mon_Li_Hoa_Sinh_KHTN_THCS.docx"</span> cho Khối {activeGrade} - {examType}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetSubjectRatio}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-indigo-50 text-indigo-900 border border-indigo-200 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                        title="Khôi phục lại tỉ lệ đề xuất từ file De_xuat_Ti_le_Phan_mon_Li_Hoa_Sinh_KHTN_THCS.docx"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Khôi phục đề xuất mặc định</span>
                      </button>
                    </div>
                  </div>

                  {/* Định hướng chuyên môn theo kì thi */}
                  <div className="p-3 bg-indigo-50/70 border border-indigo-200/70 rounded-xl text-xs text-indigo-950 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <strong className="text-indigo-900">Khuyến nghị chuyên môn: </strong>
                      {getSubjectRatioRationale(activeGrade, examType)}
                    </div>
                  </div>

                  {/* Lựa chọn số môn tham gia (2 hoặc 3 môn) */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <span className="font-bold text-slate-700">Phân môn tham gia đề thi:</span>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-sky-950 select-none">
                        <input
                          type="checkbox"
                          checked={subjectRatio.activeSubjects.physics}
                          onChange={() => handleToggleSubject('physics')}
                          className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 cursor-pointer"
                        />
                        <Atom className="w-3.5 h-3.5 text-sky-600" />
                        <span>Vật lí</span>
                      </label>

                      <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-purple-950 select-none">
                        <input
                          type="checkbox"
                          checked={subjectRatio.activeSubjects.chemistry}
                          onChange={() => handleToggleSubject('chemistry')}
                          className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300 cursor-pointer"
                        />
                        <FlaskConical className="w-3.5 h-3.5 text-purple-600" />
                        <span>Hoá học</span>
                      </label>

                      <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-emerald-950 select-none">
                        <input
                          type="checkbox"
                          checked={subjectRatio.activeSubjects.biology}
                          onChange={() => handleToggleSubject('biology')}
                          className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                        />
                        <Dna className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Sinh học</span>
                      </label>
                    </div>
                  </div>

                  {/* 3 Thẻ điều chỉnh tỉ lệ phân môn */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {/* VẬT LÍ */}
                    <div className={`p-4 rounded-xl border transition-all ${
                      subjectRatio.activeSubjects.physics 
                        ? 'bg-sky-50/60 border-sky-300 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 opacity-50 pointer-events-none'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <Atom className="w-4 h-4 text-sky-600" />
                          <span className="font-extrabold text-xs text-sky-950 uppercase">VẬT LÍ</span>
                        </div>
                        {subjectRatio.autoBalanceSubject === 'physics' ? (
                          <span className="px-2 py-0.5 rounded-full bg-sky-200/90 text-sky-900 text-[10px] font-black tracking-wide">
                            TỰ ĐỘNG TÍNH
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSetAutoBalanceTarget('physics')}
                            className="text-[10px] text-sky-700 hover:text-sky-900 hover:underline cursor-pointer"
                          >
                            Chọn tự động tính
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="5"
                            value={subjectRatio.physics}
                            disabled={!subjectRatio.activeSubjects.physics}
                            onChange={(e) => handleSubjectPercentChange('physics', Number(e.target.value))}
                            className="w-full bg-white border border-sky-300 rounded-lg px-3 py-1.5 text-sm font-black text-sky-950 text-right pr-8 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                          />
                          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-sky-700 pointer-events-none">%</span>
                        </div>
                        <div className="px-3 py-1.5 bg-sky-100/80 rounded-lg text-xs font-black text-sky-900 shrink-0">
                          {((subjectRatio.physics / 100) * 10).toFixed(1).replace('.', ',')} đ
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={subjectRatio.physics}
                        disabled={!subjectRatio.activeSubjects.physics}
                        onChange={(e) => handleSubjectPercentChange('physics', Number(e.target.value))}
                        className="w-full accent-sky-600 cursor-pointer"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Cơ học, Áp suất, Điện, Quang, Âm, Từ, Bầu trời</p>
                    </div>

                    {/* HOÁ HỌC */}
                    <div className={`p-4 rounded-xl border transition-all ${
                      subjectRatio.activeSubjects.chemistry 
                        ? 'bg-purple-50/60 border-purple-300 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 opacity-50 pointer-events-none'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <FlaskConical className="w-4 h-4 text-purple-600" />
                          <span className="font-extrabold text-xs text-purple-950 uppercase">HOÁ HỌC</span>
                        </div>
                        {subjectRatio.autoBalanceSubject === 'chemistry' ? (
                          <span className="px-2 py-0.5 rounded-full bg-purple-200/90 text-purple-900 text-[10px] font-black tracking-wide">
                            TỰ ĐỘNG TÍNH
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSetAutoBalanceTarget('chemistry')}
                            className="text-[10px] text-purple-700 hover:text-purple-900 hover:underline cursor-pointer"
                          >
                            Chọn tự động tính
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="5"
                            value={subjectRatio.chemistry}
                            disabled={!subjectRatio.activeSubjects.chemistry}
                            onChange={(e) => handleSubjectPercentChange('chemistry', Number(e.target.value))}
                            className="w-full bg-white border border-purple-300 rounded-lg px-3 py-1.5 text-sm font-black text-purple-950 text-right pr-8 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                          />
                          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-700 pointer-events-none">%</span>
                        </div>
                        <div className="px-3 py-1.5 bg-purple-100/80 rounded-lg text-xs font-black text-purple-900 shrink-0">
                          {((subjectRatio.chemistry / 100) * 10).toFixed(1).replace('.', ',')} đ
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={subjectRatio.chemistry}
                        disabled={!subjectRatio.activeSubjects.chemistry}
                        onChange={(e) => handleSubjectPercentChange('chemistry', Number(e.target.value))}
                        className="w-full accent-purple-600 cursor-pointer"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Chất, Nguyên tử, PƯHH, Acid, Base, Hữu cơ</p>
                    </div>

                    {/* SINH HỌC */}
                    <div className={`p-4 rounded-xl border transition-all ${
                      subjectRatio.activeSubjects.biology 
                        ? 'bg-emerald-50/60 border-emerald-300 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 opacity-50 pointer-events-none'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <Dna className="w-4 h-4 text-emerald-600" />
                          <span className="font-extrabold text-xs text-emerald-950 uppercase">SINH HỌC</span>
                        </div>
                        {subjectRatio.autoBalanceSubject === 'biology' ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-200/90 text-emerald-900 text-[10px] font-black tracking-wide">
                            TỰ ĐỘNG TÍNH
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSetAutoBalanceTarget('biology')}
                            className="text-[10px] text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                          >
                            Chọn tự động tính
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            step="5"
                            value={subjectRatio.biology}
                            disabled={!subjectRatio.activeSubjects.biology}
                            onChange={(e) => handleSubjectPercentChange('biology', Number(e.target.value))}
                            className="w-full bg-white border border-emerald-300 rounded-lg px-3 py-1.5 text-sm font-black text-emerald-950 text-right pr-8 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                          />
                          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-700 pointer-events-none">%</span>
                        </div>
                        <div className="px-3 py-1.5 bg-emerald-100/80 rounded-lg text-xs font-black text-emerald-900 shrink-0">
                          {((subjectRatio.biology / 100) * 10).toFixed(1).replace('.', ',')} đ
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={subjectRatio.biology}
                        disabled={!subjectRatio.activeSubjects.biology}
                        onChange={(e) => handleSubjectPercentChange('biology', Number(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">Tế bào, Đa dạng sinh vật, Cơ thể người, Di truyền</p>
                    </div>
                  </div>

                  {/* Thanh tỷ lệ trực quan (Stacked Progress Bar) */}
                  <div>
                    <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                      {subjectRatio.activeSubjects.physics && subjectRatio.physics > 0 && (
                        <div 
                          style={{ width: `${subjectRatio.physics}%` }}
                          className="bg-sky-500 h-full transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white"
                          title={`Vật lí: ${subjectRatio.physics}%`}
                        >
                          {subjectRatio.physics >= 15 ? `Lí ${subjectRatio.physics}%` : ''}
                        </div>
                      )}
                      {subjectRatio.activeSubjects.chemistry && subjectRatio.chemistry > 0 && (
                        <div 
                          style={{ width: `${subjectRatio.chemistry}%` }}
                          className="bg-purple-500 h-full transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white"
                          title={`Hóa học: ${subjectRatio.chemistry}%`}
                        >
                          {subjectRatio.chemistry >= 15 ? `Hoá ${subjectRatio.chemistry}%` : ''}
                        </div>
                      )}
                      {subjectRatio.activeSubjects.biology && subjectRatio.biology > 0 && (
                        <div 
                          style={{ width: `${subjectRatio.biology}%` }}
                          className="bg-emerald-500 h-full transition-all duration-300 flex items-center justify-center text-[10px] font-black text-white"
                          title={`Sinh học: ${subjectRatio.biology}%`}
                        >
                          {subjectRatio.biology >= 15 ? `Sinh ${subjectRatio.biology}%` : ''}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs mt-2 font-bold">
                      <div className="flex flex-wrap items-center gap-3 text-[11px]">
                        <span className="flex items-center gap-1 text-sky-800">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
                          Vật lí: {subjectRatio.physics}% ({((subjectRatio.physics / 100) * 10).toFixed(1).replace('.', ',')}đ)
                        </span>
                        <span className="flex items-center gap-1 text-purple-800">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block"></span>
                          Hoá học: {subjectRatio.chemistry}% ({((subjectRatio.chemistry / 100) * 10).toFixed(1).replace('.', ',')}đ)
                        </span>
                        <span className="flex items-center gap-1 text-emerald-800">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                          Sinh học: {subjectRatio.biology}% ({((subjectRatio.biology / 100) * 10).toFixed(1).replace('.', ',')}đ)
                        </span>
                      </div>

                      <div className={`px-2.5 py-0.5 rounded-full font-black text-xs ${
                        (subjectRatio.physics + subjectRatio.chemistry + subjectRatio.biology === 100)
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-red-100 text-red-900 border border-red-300 animate-pulse'
                      }`}>
                        TỔNG: {subjectRatio.physics + subjectRatio.chemistry + subjectRatio.biology}% (10,0 ĐIỂM)
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Chapter Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      5. Chọn các chương / chủ đề kiểm tra
                    </label>
                    {!isCustomMode && activeGrade && activeGrade !== 'Tự do' && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleSelectAllChapters}
                          className="text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                        >
                          Chọn tất cả ({CURRICULUM[activeGrade as number]?.length || 0} chương)
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                          onClick={handleDeselectAllChapters}
                          className="text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
                        >
                          Bỏ chọn tất cả
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto p-1">
                    {(CURRICULUM[activeGrade as number] || []).map((ch) => {
                      const isSelected = selectedChapters.some(c => c.id === ch.id);
                      return (
                        <div
                          key={ch.id}
                          onClick={() => toggleChapter(ch)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'border-teal-600 bg-teal-50/60 shadow-sm ring-1 ring-teal-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900">{ch.name}</span>
                              {getDomainBadge(ch.domain)}
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              {ch.lessons?.length || 0} bài học trong chương
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    disabled={selectedChapters.length === 0}
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow flex items-center gap-2"
                  >
                    <span>Tiếp tục: Phân bổ bối cảnh Phần II</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: Lesson subItems & Part II Hosts selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                
                {/* Part II Summary Banner */}
                <div className="bg-gradient-to-r from-teal-50 via-emerald-50 to-teal-50 p-4 rounded-xl border border-teal-200 flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-600 text-white rounded-lg shadow">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase">
                        Bối Cảnh Cho Phần II (Trắc Nghiệm Đúng/Sai)
                      </h4>
                      <p className="text-xs text-slate-600">
                        Đã chọn: <b className="text-teal-700 font-extrabold">{totalPart2Selected} / {targetP2Hosts}</b> bối cảnh thực tiễn. Mỗi câu có 4 lệnh hỏi (a, b, c, d).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleAutoSelectHosts}
                      className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Tự động phân bổ đều {targetP2Hosts} bối cảnh</span>
                    </button>
                  </div>
                </div>

                {/* Selected Hosts Chips */}
                {selectedPart2Items.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Các bối cảnh đã chọn:</span>
                    {selectedPart2Items.map((host, idx) => (
                      <span
                        key={`${host.lessonId}_${idx}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-teal-100 text-teal-900 border border-teal-300"
                      >
                        <span><b>Câu {idx + 1}:</b> {host.lessonName} ({host.item.slice(0, 35)}...)</span>
                        <button
                          onClick={() => togglePart2Host(host.lessonId, host.item)}
                          className="hover:text-rose-600 ml-0.5"
                          title="Bỏ chọn bối cảnh này"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {/* Lessons & SubItems List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Danh sách bài học & Chi tiết đề mục ({editableLessons.length} bài)
                    </label>
                    <button
                      onClick={() => setExpandAllLessons(!expandAllLessons)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900"
                    >
                      {expandAllLessons ? 'Thu gọn tất cả' : 'Mở rộng tất cả'}
                    </button>
                  </div>

                  <div className="space-y-3 max-h-[500px] overflow-y-auto p-1">
                    {editableLessons.map((lesson) => {
                      const isExpanded = expandAllLessons || expandedLessonId === lesson.id;
                      const hasPart2 = (lesson.part2Hosts || []).length > 0;

                      return (
                        <div
                          key={lesson.id}
                          className={`rounded-xl border transition-all ${
                            hasPart2
                              ? 'border-teal-400 bg-teal-50/20 shadow-sm'
                              : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div
                            onClick={() => setExpandedLessonId(isExpanded ? null : lesson.id)}
                            className="p-3.5 flex items-center justify-between cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="font-bold text-xs text-slate-900">{lesson.name}</span>
                              {getDomainBadge(lesson.domain)}
                              {hasPart2 && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-600 text-white">
                                  Bối cảnh P.II ({lesson.part2Hosts?.length})
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <span className="text-[11px] font-medium">{lesson.subItems?.length || 0} mục</span>
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="p-3.5 pt-0 border-t border-slate-100 space-y-2">
                              <div className="grid grid-cols-1 gap-1.5 mt-2">
                                {(lesson.subItems || []).map((sub, sIdx) => {
                                  const isHost = (lesson.part2Hosts || []).includes(sub);
                                  return (
                                    <div
                                      key={sIdx}
                                      className={`p-2 rounded-lg border text-xs flex items-center justify-between gap-2 transition-all ${
                                        isHost
                                          ? 'border-teal-500 bg-teal-50 text-teal-900 font-semibold'
                                          : 'border-slate-100 bg-slate-50/60 text-slate-700 hover:bg-slate-100'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 flex-1">
                                        <button
                                          type="button"
                                          onClick={() => togglePart2Host(lesson.id, sub)}
                                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                            isHost ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white hover:border-teal-500'
                                          }`}
                                          title={isHost ? 'Bỏ chọn làm bối cảnh Phần II' : 'Chọn mục này làm bối cảnh Phần II'}
                                        >
                                          {isHost && <Check className="w-3 h-3 stroke-[3]" />}
                                        </button>
                                        <span className="leading-snug">{sub}</span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Extra Requirements Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Ghi chú / Yêu cầu bổ sung của giáo viên (tùy chọn)
                  </label>
                  <input
                    type="text"
                    value={extraRequirements}
                    onChange={(e) => setExtraRequirements(e.target.value)}
                    placeholder="Ví dụ: Tăng cường các câu hỏi ứng dụng đời sống, bảo vệ môi trường, hoặc bài tập thực hành..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {/* Actions: Generate Matrix */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Quay lại Bước 1
                  </button>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || editableLessons.length === 0}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Đang tính toán ma trận...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>{matrixData ? 'Cập nhật Ma Trận & Bản Đặc Tả' : '🚀 Sinh Ma Trận & Bản Đặc Tả Chuẩn'}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* Render Generated Matrix & Specification Tables */}
      {matrixData && (
        <MatrixDisplay
          data={matrixData}
          onTransferToExam={onTransferToExam}
          onSaveConfig={handleSaveConfig}
          onEditMatrix={() => setShowEditor(true)}
          onUpdateMatrixData={(updated) => setMatrixData(updated)}
        />
      )}

    </div>
  );
};
