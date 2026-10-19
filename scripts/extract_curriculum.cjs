const fs = require('fs');
const path = require('path');

function parsePythonData(content, varName) {
  const marker = varName + ' = [';
  const startIdx = content.indexOf(marker);
  if (startIdx === -1) throw new Error('Cannot find ' + varName);

  // Extract from '[' until matching ']'
  const openBracket = content.indexOf('[', startIdx);
  let depth = 0;
  let inString = false;
  let strQuote = '';
  let escape = false;
  let endIdx = -1;

  for (let i = openBracket; i < content.length; i++) {
    const ch = content[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (ch === '\\') {
      escape = true;
      continue;
    }
    if (inString) {
      if (ch === strQuote) {
        inString = false;
      }
    } else {
      if (ch === '"' || ch === "'") {
        inString = true;
        strQuote = ch;
      } else if (ch === '[') {
        depth++;
      } else if (ch === ']') {
        depth--;
        if (depth === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
  }

  let code = content.slice(openBracket, endIdx);

  // Transform Python syntax to JSON/JS syntax:
  // 1. Replace tuples ("Heading", [...]) with [ "Heading", [...] ]
  // Notice: ( "..." , [ ... ] ) -> [ "..." , [ ... ] ]
  // Also True -> true, False -> false, None -> null
  code = code
    .replace(/\bTrue\b/g, 'true')
    .replace(/\bFalse\b/g, 'false')
    .replace(/\bNone\b/g, 'null');

  // Replace tuples:
  // A tuple begins with '(' followed by optional whitespace and a string
  // and ends with ']' followed by optional whitespace and ')'
  // Let's do a state-machine or regex replace:
  // Replace: ( "...", [...] ) with [ "...", [...] ]
  // In our python files, headings is always: [ ( "title", [ "sub1", ... ] ), ... ]
  let converted = '';
  let inParenTuple = false;
  for (let i = 0; i < code.length; i++) {
    const ch = code[i];
    // check for ( "
    if (ch === '(' && !inString) {
      converted += '[';
    } else if (ch === ')' && !inString) {
      converted += ']';
    } else {
      converted += ch;
    }
  }

  // Now evaluate as JS
  try {
    const fn = new Function('return ' + converted);
    return fn();
  } catch (err) {
    console.error('Eval error for ' + varName + ':', err.message);
    fs.writeFileSync('debug_' + varName + '.js', 'module.exports = ' + converted);
    throw err;
  }
}

function processAll() {
  const grades = [
    { grade: 6, file: 'build_khtn6_docx.py', varName: 'chapters_data' },
    { grade: 7, file: 'build_khtn7_docx.py', varName: 'chapters_data_khtn7' },
    { grade: 8, file: 'build_khtn8_docx.py', varName: 'chapters_data_khtn8' },
    { grade: 9, file: 'build_khtn9_docx.py', varName: 'chapters_data_khtn9' },
  ];

  const curriculum = {};
  const learningOutcomes = {};

  for (const g of grades) {
    const content = fs.readFileSync(g.file, 'utf8');
    const rawChapters = parsePythonData(content, g.varName);
    console.log(`Grade ${g.grade}: parsed ${rawChapters.length} chapters.`);

    const chapters = [];
    learningOutcomes[g.grade] = [];

    rawChapters.forEach((ch, cIdx) => {
      const chapterId = `${g.grade}_c${cIdx + 1}`;
      const chapterName = (ch.chapter_num ? `Chương ${ch.chapter_num}: ` : '') + ch.chapter_title;
      const domain = ch.domain || '';

      const lessons = [];

      ch.lessons.forEach((les, lIdx) => {
        const lessonId = `${chapterId}_l${les.id || (lIdx + 1)}`;
        const lessonName = `Bài ${les.id || (lIdx + 1)}: ${les.title}`;
        
        // Build subItems from headings
        const subItems = [];
        if (les.headings && Array.isArray(les.headings)) {
          les.headings.forEach(h => {
            const headingTitle = h[0] || '';
            const details = h[1] || [];
            if (details.length === 0) {
              subItems.push(headingTitle);
            } else {
              details.forEach(d => {
                subItems.push(`${headingTitle} - ${d}`);
              });
            }
          });
        }

        if (subItems.length === 0) {
          subItems.push('Khái niệm cơ bản & hiện tượng', 'Ứng dụng & bài tập thực tiễn');
        }

        lessons.push({
          id: lessonId,
          name: lessonName,
          domain: domain,
          pages: les.pages || '',
          subItems: subItems,
          part2Hosts: []
        });

        // Generate Learning Outcomes for this lesson
        // Parse matrix_focus if available, else derive sensible YCCĐ
        let matrixFocus = les.matrix_focus || '';
        let recognition = [];
        let understanding = [];
        let application = [];

        if (matrixFocus) {
          // Extract recognition, understanding, application
          const parts = matrixFocus.split(/\.\s*/);
          parts.forEach(p => {
            p = p.trim();
            if (!p) return;
            if (/Nhận biết/i.test(p)) {
              recognition.push(p);
            } else if (/Thông hiểu/i.test(p)) {
              understanding.push(p);
            } else if (/Vận dụng/i.test(p)) {
              application.push(p);
            } else {
              understanding.push(p);
            }
          });
        }

        if (recognition.length === 0) {
          recognition.push(`Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về ${les.title}.`);
        }
        if (understanding.length === 0) {
          understanding.push(`Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến ${les.title}.`);
        }
        if (application.length === 0) {
          application.push(`Vận dụng kiến thức ${les.title} để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống.`);
        }

        learningOutcomes[g.grade].push({
          lessonName: lessonName,
          chapterName: chapterName,
          domain: domain,
          outcomes: {
            recognition,
            understanding,
            application
          }
        });
      });

      chapters.push({
        id: chapterId,
        name: chapterName,
        domain: domain,
        lessons: lessons
      });
    });

    curriculum[g.grade] = chapters;
  }

  // Ensure src/constants exists
  fs.mkdirSync('src/constants', { recursive: true });

  // 1. Write src/constants/curriculum.ts
  const curriculumTs = `// CSDL Phân phối chương trình SGK Khoa học tự nhiên THCS (Lớp 6, 7, 8, 9 - KNTT)
import { Chapter, Grade, Lesson } from '../types/matrix';

export interface KHTNChapter extends Chapter {
  domain?: string;
}

export const CURRICULUM: Record<number, KHTNChapter[]> = ${JSON.stringify(curriculum, null, 2)};

export const sortChaptersByCurriculum = (chapters: Chapter[], grade: Grade | null): Chapter[] => {
  if (!grade || grade === 'Tự do') return chapters;
  const gradeChapters = CURRICULUM[grade as number] || [];
  return [...chapters].sort((a, b) => {
    const idxA = gradeChapters.findIndex(gc => gc.id === a.id);
    const idxB = gradeChapters.findIndex(gc => gc.id === b.id);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    return a.name.localeCompare(b.name, 'vi', { numeric: true });
  });
};

export const sortLessonsByNumber = (lessons: Lesson[]): Lesson[] => {
  return [...lessons].sort((a, b) => {
    const numA = parseInt(a.name.match(/Bài\\s+(\\d+)/i)?.[1] || '999', 10);
    const numB = parseInt(b.name.match(/Bài\\s+(\\d+)/i)?.[1] || '999', 10);
    if (numA !== numB) return numA - numB;
    return a.name.localeCompare(b.name, 'vi', { numeric: true });
  });
};
`;

  fs.writeFileSync('src/constants/curriculum.ts', curriculumTs, 'utf8');
  console.log('Successfully wrote src/constants/curriculum.ts');

  // 2. Write src/constants/learningOutcomes.ts
  const outcomesTs = `// Bảng Yêu cầu cần đạt chuẩn CV 7991/BGDĐT-GDTrH cho KHTN 6, 7, 8, 9
export interface LearningOutcomeDetail {
  recognition: string[];
  understanding: string[];
  application: string[];
}

export interface LessonOutcomeItem {
  lessonName: string;
  chapterName: string;
  domain?: string;
  outcomes: LearningOutcomeDetail;
}

export const LEARNING_OUTCOMES_DB: Record<number, LessonOutcomeItem[]> = ${JSON.stringify(learningOutcomes, null, 2)};

export function findLearningOutcome(
  grade: number,
  lessonName: string,
  chapterName?: string
): LearningOutcomeDetail | null {
  const list = LEARNING_OUTCOMES_DB[grade];
  if (!list) return null;

  // Exact match
  const found = list.find(item => item.lessonName.trim() === lessonName.trim());
  if (found) return found.outcomes;

  // Match by lesson number
  const lessonNumMatch = lessonName.match(/Bài\\s*(\\d+)/i);
  if (lessonNumMatch) {
    const targetNum = lessonNumMatch[1];
    const matchByNum = list.find(item => {
      const m = item.lessonName.match(/Bài\\s*(\\d+)/i);
      return m && m[1] === targetNum;
    });
    if (matchByNum) return matchByNum.outcomes;
  }

  // Fallback match by substring
  const fuzzy = list.find(item => item.lessonName.includes(lessonName) || lessonName.includes(item.lessonName));
  return fuzzy ? fuzzy.outcomes : null;
}
`;

  fs.writeFileSync('src/constants/learningOutcomes.ts', outcomesTs, 'utf8');
  console.log('Successfully wrote src/constants/learningOutcomes.ts');
}

processAll();
