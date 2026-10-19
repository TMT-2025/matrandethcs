import React, { useState, useEffect, useRef } from 'react';
import { CURRICULUM, GRADE_TOPICS } from '../../constants/curriculum';
import { ExamData, AppStatus, GradeLevel, ExamMatrixRow } from '../../types/exam';
import { SectionCountsConfig, DEFAULT_SECTION_COUNTS } from '../../types/matrix';
import { generateExam } from '../../services/geminiService';
import { saveExamData } from '../../services/storageService';
import { ExamRenderer } from './ExamRenderer';
import { MatrixRenderer } from './MatrixRenderer';
import { 
  Sparkles, RefreshCw, AlertCircle, Image as ImageIcon, 
  X, CheckCircle, Info, ChevronRight, Layers, Cpu, ArrowLeft, Sliders
} from 'lucide-react';
import { BridgeResult } from '../../services/bridgeService';

interface ExamCreatorProps {
  bridgeData: BridgeResult | null;
  onClearBridge: () => void;
  onSwitchToMatrixTab: () => void;
  onTransferToMixer?: (exam: ExamData) => void;
}

export const ExamCreator: React.FC<ExamCreatorProps> = ({ 
  bridgeData, 
  onClearBridge,
  onSwitchToMatrixTab,
  onTransferToMixer
}) => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [exam, setExam] = useState<ExamData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(1);
  const [statusText, setStatusText] = useState('');

  const [grade, setGrade] = useState<GradeLevel>('6');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [details, setDetails] = useState('');
  const [modelName, setModelName] = useState('gemini-3.8-flash');
  const [sectionCounts, setSectionCounts] = useState<SectionCountsConfig>(DEFAULT_SECTION_COUNTS);

  // Matrix image upload
  const [matrixImage, setMatrixImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // If bridgeData arrives from Tab 1, initialize form with it
  useEffect(() => {
    if (bridgeData) {
      setGrade(bridgeData.grade);
      setSelectedTopics(bridgeData.topics);
      setDetails(bridgeData.extraDetailsPrompt);
      if (bridgeData.sectionCounts) {
        setSectionCounts(bridgeData.sectionCounts);
      }
      setExam(null);
      setStatus(AppStatus.IDLE);
    }
  }, [bridgeData]);

  // When grade changes manually (and no active bridge), reset topics
  const handleGradeChange = (newGrade: GradeLevel) => {
    if (bridgeData) {
      onClearBridge();
    }
    setGrade(newGrade);
    setSelectedTopics([]);
    setMatrixImage(null);
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const handleSelectAllTopics = () => {
    setSelectedTopics(GRADE_TOPICS[grade] || []);
  };

  const handleDeselectAllTopics = () => {
    setSelectedTopics([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        setMatrixImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (selectedTopics.length === 0 && !matrixImage) {
      alert("Vui lòng chọn ít nhất một chương học hoặc tải lên ảnh ma trận!");
      return;
    }

    setStatus(AppStatus.GENERATING);
    setError(null);
    setAttempt(1);
    setStatusText('Đang kết nối Gemini và phân tích ma trận KHTN...');

    const matrixToUse = bridgeData?.examMatrix;
    const maxRetries = 2;
    let currentAttempt = 1;

    const progressMessages = [
      'Đang phân tích ma trận và bản đặc tả KHTN THCS (Công văn 7991)...',
      'Đang biên soạn các câu hỏi Trắc nghiệm 4 lựa chọn (Phần I: 60% Biết, 40% Hiểu)...',
      'Đang xây dựng các ngữ cảnh thực nghiệm và hiện tượng thực tiễn Đúng/Sai (Phần II)...',
      'Đang tạo các câu hỏi tính toán và điền thuật ngữ khoa học (Phần III)...',
      'Đang biên soạn câu hỏi Tự luận, hướng dẫn giải và thang điểm chi tiết (Phần IV)...',
      'Đang kiểm duyệt tính chính xác khoa học và tổng hợp toàn bộ đề thi...'
    ];

    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % progressMessages.length;
      setStatusText(progressMessages[msgIndex]);
    }, 3500);

    while (currentAttempt <= maxRetries) {
      try {
        setAttempt(currentAttempt);
        const data = await generateExam(
          grade, 
          selectedTopics.length > 0 ? selectedTopics : ['Khoa học tự nhiên THCS'], 
          details, 
          sectionCounts,
          matrixToUse, 
          matrixImage || undefined,
          modelName
        );

        clearInterval(msgInterval);
        setExam(data);
        setStatus(AppStatus.COMPLETED);
        saveExamData(data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      } catch (err: any) {
        console.error(`Attempt ${currentAttempt} failed:`, err);
        if (currentAttempt === maxRetries) {
          clearInterval(msgInterval);
          setError(err.message || 'Lỗi khi tạo đề thi. Vui lòng kiểm tra API Key hoặc thử lại.');
          setStatus(AppStatus.ERROR);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        currentAttempt++;
      }
    }
  };

  const handleSaveCurrentExam = () => {
    if (!exam) return;
    saveExamData(exam);
    alert('Đã lưu đề kiểm tra thành công vào kho lưu trữ!');
  };

  const p1Score = sectionCounts.part1Count * 0.25;
  const p2Score = sectionCounts.part2Count * 1.0;
  const p3Score = sectionCounts.part3Count * 0.5;
  const p4Score = Math.max(0.5, Math.round((10.0 - (p1Score + p2Score + p3Score)) * 100) / 100);

  return (
    <div className="space-y-8">
      
      {/* Active Bridge Alert Banner */}
      {bridgeData && (
        <div className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 text-slate-950 p-4 rounded-2xl shadow-lg border border-teal-300 flex flex-col md:flex-row items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-950 text-teal-400 rounded-xl shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-950 text-teal-300">
                  Cầu Nối Ma Trận Đang Hoạt Động
                </span>
                <span className="text-xs font-bold text-slate-900">
                  KHTN Lớp {bridgeData.grade} • {bridgeData.topics.length} chương/chủ đề
                </span>
              </div>
              <p className="text-sm font-bold text-slate-950 mt-0.5">
                {bridgeData.summaryText}
              </p>
              <p className="text-xs text-slate-800 font-medium">
                Cấu hình: Phần I ({bridgeData.sectionCounts?.part1Count || 16} câu) • Phần II ({bridgeData.sectionCounts?.part2Count || 3} câu) • Phần III ({bridgeData.sectionCounts?.part3Count || 2} câu) • Phần IV ({bridgeData.sectionCounts?.part4Count || 2} câu tự luận).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onSwitchToMatrixTab}
              className="px-3 py-1.5 rounded-xl bg-slate-950/10 hover:bg-slate-950/20 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Xem lại ma trận</span>
            </button>
            <button
              onClick={onClearBridge}
              className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Hủy liên kết
            </button>
          </div>
        </div>
      )}

      {/* Main Configuration Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden no-print">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-600 rounded-xl shadow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                Ra Đề Kiểm Tra Khoa Học Tự Nhiên AI (GDPT 2018)
              </h2>
              <p className="text-xs text-teal-300">
                Tự động sinh đề thi bám sát 100% Ma trận & Bản đặc tả theo 4 phần chuẩn Bộ GD&ĐT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 rounded-xl border border-slate-700 text-xs">
              <Cpu className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-slate-400">Mô hình AI:</span>
              <select
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
              >
                <option value="gemini-3.8-flash" className="bg-slate-900">Gemini 3.8 Flash (Khuyên dùng)</option>
                <option value="gemini-2.5-flash" className="bg-slate-900">Gemini 2.5 Flash</option>
                <option value="gemini-2.5-pro" className="bg-slate-900">Gemini 2.5 Pro (Sâu sắc nhất)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          
          {/* 1. Grade Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Khối Lớp Học (KHTN THCS)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(['6', '7', '8', '9'] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  onClick={() => handleGradeChange(g)}
                  className={`p-3.5 rounded-xl border text-center transition-all font-bold ${
                    grade === g
                      ? 'border-teal-600 bg-teal-50/80 text-teal-900 shadow-md ring-2 ring-teal-500/20'
                      : 'border-slate-200 hover:border-teal-300 text-slate-700 bg-white'
                  }`}
                >
                  <div className="text-lg font-extrabold text-teal-600">Lớp {g}</div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                    {GRADE_TOPICS[g]?.length || 0} chương sách
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Cấu hình số câu hỏi 4 phần bằng Dropdown / Select box */}
          <div className="bg-gradient-to-br from-slate-50 to-teal-50/50 p-4 rounded-xl border border-teal-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-700" />
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  2. Cấu hình số câu hỏi 4 phần (Select box)
                </label>
              </div>
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                Tổng: 10,0 điểm
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-700 mb-1">Phần I: 4 lựa chọn (0,25đ/câu)</span>
                <select
                  value={sectionCounts.part1Count}
                  onChange={(e) => setSectionCounts(prev => ({ ...prev, part1Count: Number(e.target.value) }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800"
                >
                  {[16, 17, 18, 19, 20].map(cnt => (
                    <option key={cnt} value={cnt}>{cnt} câu ({(cnt * 0.25).toFixed(2)}đ)</option>
                  ))}
                </select>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-700 mb-1">Phần II: Đúng/Sai (1,0đ/câu)</span>
                <select
                  value={sectionCounts.part2Count}
                  onChange={(e) => setSectionCounts(prev => ({ ...prev, part2Count: Number(e.target.value) }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800"
                >
                  {[2, 3, 4].map(cnt => (
                    <option key={cnt} value={cnt}>{cnt} câu ({(cnt * 1.0).toFixed(2)}đ)</option>
                  ))}
                </select>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-700 mb-1">Phần III: Trả lời ngắn (0,5đ/câu)</span>
                <select
                  value={sectionCounts.part3Count}
                  onChange={(e) => setSectionCounts(prev => ({ ...prev, part3Count: Number(e.target.value) }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800"
                >
                  {[2, 3, 4].map(cnt => (
                    <option key={cnt} value={cnt}>{cnt} câu ({(cnt * 0.5).toFixed(2)}đ)</option>
                  ))}
                </select>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-700 mb-1">Phần IV: Tự luận (Vận dụng)</span>
                <select
                  value={sectionCounts.part4Count}
                  onChange={(e) => setSectionCounts(prev => ({ ...prev, part4Count: Number(e.target.value) }))}
                  className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-xs font-bold text-slate-800"
                >
                  {[1, 2, 3].map(cnt => (
                    <option key={cnt} value={cnt}>{cnt} câu ({p4Score.toFixed(2)}đ)</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 3. Topics Selection */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                3. Chọn các chương học ({selectedTopics.length} đã chọn)
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelectAllTopics}
                  className="text-xs font-semibold text-teal-700 hover:text-teal-900"
                >
                  Chọn tất cả
                </button>
                <span className="text-slate-300">|</span>
                <button
                  onClick={handleDeselectAllTopics}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                >
                  Bỏ chọn tất cả
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[280px] overflow-y-auto p-1 border border-slate-100 rounded-xl bg-slate-50/50">
              {(GRADE_TOPICS[grade] || []).map((t, idx) => {
                const isSelected = selectedTopics.includes(t);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleTopic(t)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/80 text-teal-950 font-bold shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs leading-snug">{t}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. Extra Prompt Details */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              4. Yêu cầu chi tiết cho đề thi (Bối cảnh thực tiễn, thí nghiệm, mức độ phân hoá...)
            </label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Nhập các yêu cầu cụ thể: bối cảnh môi trường địa phương, phân tích biểu đồ thí nghiệm, cân bằng phản ứng, sơ đồ mạch điện..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Action Generate Button */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Đề thi luôn gồm 4 phần: Trắc nghiệm 4 lựa chọn, Đúng/Sai, Trả lời ngắn & Tự luận kèm đáp án chi tiết.
            </div>

            <button
              onClick={handleGenerate}
              disabled={status === AppStatus.GENERATING}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              {status === AppStatus.GENERATING ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{statusText || 'Đang tạo đề kiểm tra...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>🚀 Bắt Đầu Tạo Đề Kiểm Tra AI</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Error Message */}
      {status === AppStatus.ERROR && error && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-3 text-rose-800 text-xs">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Đã xảy ra lỗi khi tạo đề thi:</p>
            <p className="mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Render Generated Exam & Matrix */}
      {status === AppStatus.COMPLETED && exam && (
        <div className="space-y-6">
          <ExamRenderer
            data={exam}
            onSaveExam={handleSaveCurrentExam}
            onTransferToMixer={onTransferToMixer}
          />

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm no-print">
            <h3 className="font-bold text-sm text-slate-800 uppercase mb-4">
              Ma Trận Câu Hỏi Khảo Thí Của Đề Thi Này
            </h3>
            <MatrixRenderer rows={exam.matrix} />
          </div>
        </div>
      )}

    </div>
  );
};
