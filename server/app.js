import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Ensure data directory exists (safely supports serverless environment like Vercel)
const isVercel = Boolean(process.env.VERCEL);
const dataDir = isVercel ? path.join('/tmp', 'khtn-data') : path.join(__dirname, 'data');
try {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
} catch (err) {
  console.warn('Warning creating data directory:', err);
}

const matricesFilePath = path.join(dataDir, 'matrices.json');
const examsFilePath = path.join(dataDir, 'exams.json');

const readJsonFile = (filePath, defaultVal = []) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultVal;
};

const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
};

// Health Check
app.get('/api/health', (req, res) => {
  const envKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(envKey && envKey.trim().length > 0),
    subject: 'Khoa học tự nhiên THCS (Lớp 6, 7, 8, 9)',
    timestamp: Date.now()
  });
});

// API endpoint to generate exam via Gemini
app.post('/api/generate-exam', async (req, res) => {
  try {
    const { grade, topics, details, sectionCounts, existingMatrix, modelName } = req.body;
    const reqApiKey = req.headers['x-gemini-api-key'] || req.body.apiKey;
    const apiKey = reqApiKey || process.env.GEMINI_API_KEY || process.env.API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        success: false,
        error: 'Chưa có Google Gemini API Key. Vui lòng cung cấp API Key qua giao diện hoặc file .env!'
      });
    }

    if (!topics || !Array.isArray(topics) || topics.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Vui lòng chọn ít nhất một chương/chủ đề học!'
      });
    }

    const sc = sectionCounts || {
      part1Count: 16,
      part2Count: 3,
      part3Count: 2,
      part4Count: 2
    };

    const ai = new GoogleGenAI({ apiKey });
    const selectedModel = modelName || 'gemini-3.8-flash';
    const topicStr = topics.join(', ');

    const systemInstruction = `
Bạn là chuyên gia khảo thí và biên soạn đề kiểm tra môn Khoa học tự nhiên (KHTN) cấp THCS (Lớp 6, 7, 8, 9) theo Chương trình Giáo dục phổ thông 2018 (Công văn 7991/BGDĐT-GDTrH và Thông tư 22/2021/TT-BGDĐT).
Nhiệm vụ của bạn: Biên soạn đề kiểm tra chất lượng cao bám sát 100% Ma trận và Bản đặc tả cho KHỐI ${grade} với các chương/chủ đề: "${topicStr}".

CẤU TRÚC ĐỀ THI LUÔN THEO 4 PHẦN CHUẨN:
1. PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN:
   - Gồm đúng ${sc.part1Count} câu hỏi (mỗi câu 4 phương án A, B, C, D, chỉ 1 phương án đúng).
   - Mỗi câu trả lời đúng được 0,25 điểm. Tổng điểm: ${(sc.part1Count * 0.25).toFixed(2)} điểm.
   - Phân bổ: 60% mức độ Nhận biết, 40% mức độ Thông hiểu. Cân đối giữa các phân môn Vật lí, Hoá học, Sinh học theo các chương đã chọn.

2. PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI:
   - Gồm đúng ${sc.part2Count} câu hỏi (mỗi câu gồm 1 ngữ cảnh khoa học/thực nghiệm/đời sống và 4 lệnh hỏi a, b, c, d).
   - Mỗi câu tối đa 1,0 điểm (quy tắc chuẩn Bộ GD&ĐT: Đúng 1 lệnh = 0,1đ; Đúng 2 lệnh = 0,25đ; Đúng 3 lệnh = 0,5đ; Đúng cả 4 lệnh = 1,0đ).
   - Ngữ cảnh phải gắn liền với thực nghiệm, quy trình thí nghiệm, bảng số liệu, hiện tượng tự nhiên hoặc ứng dụng đời sống.

3. PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN:
   - Gồm đúng ${sc.part3Count} câu hỏi.
   - Học sinh tự tính toán hoặc suy luận để điền con số kết quả (hoặc thuật ngữ ngắn gọn), không có gợi ý phương án.
   - Rất thích hợp cho các bài toán: tính nồng độ dung dịch (C%, CM), khối lượng, tốc độ, quãng đường, thời gian, nhiệt lượng, công, công suất, áp suất, khối lượng riêng, số lượng nucleotide, tỉ lệ kiểu gen/kiểu hình...

4. PHẦN IV. TỰ LUẬN:
   - Gồm đúng ${sc.part4Count} câu hỏi (Mức độ Vận dụng và Vận dụng cao).
   - Tổng điểm: ${(10.0 - (sc.part1Count * 0.25 + sc.part2Count * 1.0 + sc.part3Count * 0.5)).toFixed(2)} điểm.
   - Dành cho: Viết PTHH và giải thích hiện tượng thực tế; vẽ sơ đồ đường truyền ánh sáng / sơ đồ mạch điện; giải bài tập lai di truyền; phân tích tác động môi trường hoặc đề xuất giải pháp bảo vệ sức khoẻ/môi trường.
   - BẮT BUỘC: Cung cấp hướng dẫn chấm chi tiết từng bước kèm biểu điểm cụ thể trong trường 'solution'.

YÊU CẦU ĐẶC BIỆT VỀ NỘI DUNG VÀ THỰC TIỄN:
- TẤT CẢ các câu hỏi, bối cảnh, tình huống PHẢI GẮN LIỀN VỚI THỰC TIỄN CUỘC SỐNG, gần gũi với lứa tuổi học sinh THCS.
- Ngôn ngữ: Toàn bộ viết bằng Tiếng Việt chuẩn mực, danh pháp hoá học theo chuẩn GDPT 2018 (IUPAC: ví dụ Oxygen, Hydrogen, Copper, Iron(III) oxide...).
- Điền đầy đủ explanation (lời giải thích/hướng dẫn giải) cho từng câu.
`;

    const examSchema = {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        grade: { type: Type.STRING },
        examType: { type: Type.STRING },
        part1: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctIndex: { type: Type.INTEGER },
              domain: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctIndex"]
          }
        },
        part2: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              context: { type: Type.STRING },
              statements: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING },
                    isTrue: { type: Type.BOOLEAN },
                    explanation: { type: Type.STRING }
                  },
                  required: ["text", "isTrue"]
                }
              },
              domain: { type: Type.STRING }
            },
            required: ["context", "statements"]
          }
        },
        part3: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              answer: { type: Type.STRING },
              domain: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["question", "answer"]
          }
        },
        part4: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              points: { type: Type.NUMBER },
              domain: { type: Type.STRING },
              solution: { type: Type.STRING }
            },
            required: ["question", "points", "solution"]
          }
        },
        matrix: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              domain: { type: Type.STRING },
              recognition: { type: Type.INTEGER },
              understanding: { type: Type.INTEGER },
              application: { type: Type.INTEGER },
              highApplication: { type: Type.INTEGER }
            },
            required: ["topic", "recognition", "understanding", "application", "highApplication"]
          }
        }
      },
      required: ["title", "grade", "part1", "part2", "part3", "part4", "matrix"]
    };

    let userPrompt = `Hãy tạo Đề kiểm tra KHTN ${grade} gồm đúng ${sc.part1Count} câu Phần I, ${sc.part2Count} câu Phần II, ${sc.part3Count} câu Phần III, và ${sc.part4Count} câu Phần IV.
Các chương/chủ đề được chọn: ${topicStr}.
${details || ''}
${existingMatrix ? `\nMa trận phân bổ tham chiếu: ${JSON.stringify(existingMatrix)}` : ''}
`;

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: examSchema,
        temperature: 0.2
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Không nhận được phản hồi từ AI");
    }

    const examData = JSON.parse(text);
    examData.id = `exam_${Date.now()}`;
    examData.createdAt = Date.now();
    examData.sectionCounts = sc;

    // Save to server database
    const existingExams = readJsonFile(examsFilePath, []);
    existingExams.unshift(examData);
    writeJsonFile(examsFilePath, existingExams.slice(0, 100));

    res.json({
      success: true,
      data: examData
    });
  } catch (error) {
    console.error("Lỗi tạo đề AI:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Đã xảy ra lỗi trong quá trình tạo đề kiểm tra."
    });
  }
});

// Storage APIs: Matrices
app.get('/api/matrices', (req, res) => {
  const data = readJsonFile(matricesFilePath, []);
  res.json(data);
});

app.post('/api/matrices', (req, res) => {
  try {
    const matrix = req.body;
    if (!matrix || !matrix.id) {
      return res.status(400).json({ error: 'Dữ liệu ma trận không hợp lệ' });
    }
    const list = readJsonFile(matricesFilePath, []);
    const idx = list.findIndex(m => m.id === matrix.id);
    if (idx !== -1) {
      list[idx] = matrix;
    } else {
      list.unshift(matrix);
    }
    writeJsonFile(matricesFilePath, list.slice(0, 100));
    res.json({ success: true, id: matrix.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/matrices/:id', (req, res) => {
  const { id } = req.params;
  const list = readJsonFile(matricesFilePath, []);
  const filtered = list.filter(m => m.id !== id);
  writeJsonFile(matricesFilePath, filtered);
  res.json({ success: true });
});

// Storage APIs: Exams
app.get('/api/exams', (req, res) => {
  const data = readJsonFile(examsFilePath, []);
  res.json(data);
});

app.post('/api/exams', (req, res) => {
  try {
    const exam = req.body;
    if (!exam || !exam.id) {
      return res.status(400).json({ error: 'Dữ liệu đề kiểm tra không hợp lệ' });
    }
    const list = readJsonFile(examsFilePath, []);
    const idx = list.findIndex(e => e.id === exam.id);
    if (idx !== -1) {
      list[idx] = exam;
    } else {
      list.unshift(exam);
    }
    writeJsonFile(examsFilePath, list.slice(0, 100));
    res.json({ success: true, id: exam.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/exams/:id', (req, res) => {
  const { id } = req.params;
  const list = readJsonFile(examsFilePath, []);
  const filtered = list.filter(e => e.id !== id);
  writeJsonFile(examsFilePath, filtered);
  res.json({ success: true });
});

export default app;
