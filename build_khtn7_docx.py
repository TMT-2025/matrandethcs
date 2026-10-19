# -*- coding: utf-8 -*-
"""
Script tạo file docx: Hệ thống đề mục SGK Khoa học tự nhiên 7 (Kết nối tri thức với cuộc sống)
dùng để lập ma trận đề kiểm tra thường xuyên và kiểm tra định kì lớp 7.
"""
import docx, sys
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

sys.stdout.reconfigure(encoding='utf-8')

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def set_table_borders(table, color="D3D3D3"):
    tblPr = table._tbl.tblPr
    borders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'<w:top w:val="single" w:sz="6" w:space="0" w:color="{color}"/>'
        f'<w:bottom w:val="single" w:sz="6" w:space="0" w:color="{color}"/>'
        f'<w:left w:val="none"/>'
        f'<w:right w:val="none"/>'
        f'<w:insideH w:val="single" w:sz="4" w:space="0" w:color="{color}"/>'
        f'<w:insideV w:val="single" w:sz="4" w:space="0" w:color="{color}"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(borders)

# Dữ liệu đầy đủ 42 bài học thuộc 10 Chương KHTN 7
chapters_data_khtn7 = [
    {
        "chapter_num": "MỞ ĐẦU",
        "chapter_title": "PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP MÔN KHOA HỌC TỰ NHIÊN",
        "domain": "Phương pháp và kĩ năng khoa học",
        "lessons": [
            {
                "id": 1,
                "title": "Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
                "pages": "6 – 13",
                "headings": [
                    ("I. Phương pháp tìm hiểu tự nhiên", [
                        "5 bước nghiên cứu khoa học: 1. Đề xuất câu hỏi; 2. Đưa ra dự đoán khoa học; 3. Lập kế hoạch kiểm tra dự đoán; 4. Thực hiện kế hoạch; 5. Viết báo cáo và thảo luận."
                    ]),
                    ("II. Một số kĩ năng tiến trình học tập môn Khoa học tự nhiên", [
                        "1. Kĩ năng quan sát, phân loại (thu thập dữ liệu và phân nhóm).",
                        "2. Kĩ năng liên kết (kết nối tri thức các phân môn).",
                        "3. Kĩ năng đo (chọn dụng cụ, thực hiện phép đo, xử lí số liệu).",
                        "4. Kĩ năng dự báo (suy luận kết quả dựa trên bằng chứng)."
                    ]),
                    ("III. Sử dụng các dụng cụ đo trong nội dung môn Khoa học tự nhiên 7", [
                        "1. Cổng quang điện (cảm biến thu nhận tín hiệu chắn sáng).",
                        "2. Đồng hồ đo thời gian hiện số (các nút chức năng, thang đo, chế độ làm việc A ↔ B)."
                    ]),
                    ("IV. Báo cáo thực hành", [
                        "1. Viết báo cáo thực hành (Mục đích, Chuẩn bị, Các bước tiến hành, Kết quả, Thảo luận).",
                        "2. Viết và trình bày báo cáo, thuyết trình."
                    ])
                ],
                "matrix_focus": "Nhận biết 5 bước phương pháp tìm hiểu tự nhiên; vận dụng các kĩ năng tiến trình; sử dụng cổng quang điện và đồng hồ đo thời gian hiện số."
            }
        ]
    },
    {
        "chapter_num": "I",
        "chapter_title": "NGUYÊN TỬ – SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC",
        "domain": "Chất và sự biến đổi của chất (Hóa học)",
        "lessons": [
            {
                "id": 2,
                "title": "Nguyên tử",
                "pages": "14 – 18",
                "headings": [
                    ("I. Quan niệm ban đầu về nguyên tử", ["Quan niệm của Đê-mô-crit (Democritus), Đan-tơn (Dalton) về hạt không thể phân chia nhỏ hơn."]),
                    ("II. Mô hình nguyên tử của Rơ-dơ-pho – Bo", ["Mô hình hành tinh nguyên tử: hạt nhân ở tâm, các electron quay xung quanh theo các quỹ đạo/lớp electron xác định."]),
                    ("III. Cấu tạo nguyên tử", [
                        "1. Hạt nhân nguyên tử: gồm proton (p, mang điện tích +1) và neutron (n, không mang điện). Điện tích hạt nhân = + số p.",
                        "2. Vỏ nguyên tử: gồm các electron (e, mang điện tích -1) sắp xếp thành từng lớp. Nguyên tử trung hoà về điện: Số p = Số e."
                    ]),
                    ("IV. Khối lượng nguyên tử", ["Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân (khối lượng e rất nhỏ không đáng kể); đơn vị khối lượng nguyên tử amu (1 amu ≈ khối lượng 1 proton/neutron)."])
                ],
                "matrix_focus": "Mô tả cấu tạo nguyên tử (hạt nhân, vỏ electron); xác định số p, số e, số n, điện tích hạt nhân và tính khối lượng nguyên tử theo đơn vị amu."
            },
            {
                "id": 3,
                "title": "Nguyên tố hoá học",
                "pages": "19 – 22",
                "headings": [
                    ("I. Nguyên tố hoá học", ["Định nghĩa: Nguyên tố hoá học là tập hợp các nguyên tử cùng loại, có cùng số proton trong hạt nhân."]),
                    ("II. Tên gọi và kí hiệu của nguyên tố hoá học", [
                        "1. Tên gọi của nguyên tố hoá học: theo danh pháp quốc tế IUPAC.",
                        "2. Kí hiệu của nguyên tố hoá học: gồm một hoặc hai chữ cái (chữ cái đầu viết hoa, chữ thứ hai viết thường).",
                        "Ghi nhớ tên và kí hiệu của 20 nguyên tố đầu tiên trong bảng tuần hoàn."
                    ])
                ],
                "matrix_focus": "Nêu định nghĩa nguyên tố hoá học; nhận biết, đọc tên chuẩn quốc tế IUPAC và viết đúng kí hiệu hoá học của 20 nguyên tố đầu tiên."
            },
            {
                "id": 4,
                "title": "Sơ lược về bảng tuần hoàn các nguyên tố hoá học",
                "pages": "23 – 31",
                "headings": [
                    ("I. Nguyên tắc sắp xếp các nguyên tố hoá học trong bảng tuần hoàn", [
                        "1. Sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
                        "2. Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp vào cùng một hàng (chu kì).",
                        "3. Các nguyên tố có tính chất hoá học tương tự nhau được xếp vào cùng một cột (nhóm)."
                    ]),
                    ("II. Cấu tạo bảng tuần hoàn các nguyên tố hoá học", [
                        "1. Ô nguyên tố (cho biết Số hiệu nguyên tử = số p = số e = số thứ tự ô, Kí hiệu, Tên nguyên tố, Khối lượng nguyên tử).",
                        "2. Chu kì: Bảng tuần hoàn gồm 7 chu kì (chu kì 1, 2, 3 là chu kì nhỏ; chu kì 4, 5, 6, 7 là chu kì lớn). Số thứ tự chu kì = số lớp electron.",
                        "3. Nhóm: Gồm 8 nhóm A (đánh số IA đến VIIIA) và 8 nhóm B. Số thứ tự nhóm A = số electron lớp ngoài cùng."
                    ]),
                    ("III. Vị trí các nhóm nguyên tố kim loại, phi kim và khí hiếm trong bảng tuần hoàn", [
                        "1. Các nguyên tố kim loại (chiếm đa số, nằm ở góc dưới bên trái bảng, các nhóm IA, IIA, IIIA trừ H, B và toàn bộ nhóm B).",
                        "2. Các nguyên tố phi kim (nằm ở góc trên bên phải bảng, các nhóm IVA, VA, VIA, VIIA và hydrogen).",
                        "3. Các nguyên tố khí hiếm (thuộc nhóm VIIIA, có 8 e lớp ngoài cùng bền vững, riêng He có 2 e)."
                    ])
                ],
                "matrix_focus": "Nêu nguyên tắc sắp xếp BTH; đọc và tra cứu thông tin từ ô, chu kì, nhóm; xác định vị trí kim loại, phi kim, khí hiếm trong bảng tuần hoàn."
            }
        ]
    },
    {
        "chapter_num": "II",
        "chapter_title": "PHÂN TỬ – LIÊN KẾT HOÁ HỌC",
        "domain": "Chất và sự biến đổi của chất (Hóa học)",
        "lessons": [
            {
                "id": 5,
                "title": "Phân tử – Đơn chất – Hợp chất",
                "pages": "32 – 35",
                "headings": [
                    ("I. Đơn chất và hợp chất", [
                        "1. Đơn chất: chất tạo nên từ một nguyên tố hoá học (đơn chất kim loại: Cu, Fe, Al; đơn chất phi kim: O2, N2, H2; khí hiếm: He, Ne).",
                        "2. Hợp chất: chất tạo nên từ hai hay nhiều nguyên tố hoá học (H2O, CO2, NaCl, CaCO3...)."
                    ]),
                    ("II. Phân tử", [
                        "1. Khái niệm phân tử: hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.",
                        "2. Khối lượng phân tử: bằng tổng khối lượng của các nguyên tử trong phân tử (tính theo amu)."
                    ])
                ],
                "matrix_focus": "Phân biệt đơn chất và hợp chất; nêu khái niệm phân tử; tính khối lượng phân tử (amu) của các đơn chất và hợp chất đơn giản."
            },
            {
                "id": 6,
                "title": "Giới thiệu về liên kết hoá học",
                "pages": "36 – 39",
                "headings": [
                    ("I. Cấu trúc electron bền vững của khí hiếm", ["Khí hiếm có lớp electron ngoài cùng bão hoà (8 e, riêng He có 2 e) nên rất bền vững, không tham gia liên kết."]),
                    ("II. Liên kết ion", [
                        "Sự hình thành liên kết ion giữa kim loại điển hình và phi kim điển hình.",
                        "Kim loại nhường e tạo ion dương (cation); phi kim nhận e tạo ion âm (anion); hai ion mang điện tích trái dấu hút nhau tạo hợp chất ion (ví dụ: NaCl, MgO)."
                    ]),
                    ("III. Liên kết cộng hoá trị", [
                        "1. Liên kết cộng hoá trị trong phân tử đơn chất (các nguyên tử dùng chung electron, ví dụ: H2, Cl2, N2, O2).",
                        "2. Liên kết cộng hoá trị trong phân tử hợp chất (ví dụ: H2O, CH4, CO2, NH3).",
                        "So sánh tính chất của chất ion (nhiệt độ nóng chảy/sôi cao, tan tốt trong nước) và chất cộng hoá trị."
                    ])
                ],
                "matrix_focus": "Giải thích quy tắc octet; mô tả bản chất liên kết ion (cho/nhận e) và liên kết cộng hoá trị (dùng chung e) qua sơ đồ hình thành liên kết."
            },
            {
                "id": 7,
                "title": "Hoá trị và công thức hoá học",
                "pages": "40 – 44",
                "headings": [
                    ("I. Công thức hoá học", [
                        "Cách viết CTHH của đơn chất (A hoặc Ax) và hợp chất (AxBy hoặc AxByCz).",
                        "Ý nghĩa CTHH: cho biết thành phần nguyên tố, số nguyên tử mỗi nguyên tố, khối lượng phân tử; tính % khối lượng các nguyên tố trong hợp chất."
                    ]),
                    ("II. Hoá trị", [
                        "1. Khái niệm hoá trị: con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác (lấy H hoá trị I, O hoá trị II làm chuẩn).",
                        "2. Quy tắc hoá trị: Trong hợp chất AxBy, a.x = b.y (tích chỉ số và hoá trị của nguyên tố này bằng tích chỉ số và hoá trị của nguyên tố kia)."
                    ]),
                    ("III. Lập công thức hoá học của hợp chất", [
                        "1. Lập công thức hoá học của hợp chất khi biết hoá trị (áp dụng quy tắc hoá trị x/y = b/a).",
                        "2. Lập công thức hoá học của hợp chất theo phần trăm khối lượng các nguyên tố."
                    ])
                ],
                "matrix_focus": "Vận dụng quy tắc hoá trị xác định hoá trị của nguyên tố; lập CTHH khi biết hoá trị hoặc % khối lượng nguyên tố; tính % nguyên tố từ CTHH."
            }
        ]
    },
    {
        "chapter_num": "III",
        "chapter_title": "TỐC ĐỘ",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Cơ học)",
        "lessons": [
            {
                "id": 8,
                "title": "Tốc độ chuyển động",
                "pages": "45 – 48",
                "headings": [
                    ("I. Khái niệm tốc độ", ["Tốc độ là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật, đo bằng quãng đường đi được trong một đơn vị thời gian: v = s / t."]),
                    ("II. Đơn vị đo tốc độ", ["Đơn vị chuẩn trong hệ SI là mét trên giây (m/s) và kilômét trên giờ (km/h); quy đổi: 1 m/s = 3,6 km/h."]),
                    ("III. Bài tập vận dụng công thức tính tốc độ", ["Giải bài toán tìm quãng đường (s = v.t), thời gian (t = s / v) và tốc độ trung bình."])
                ],
                "matrix_focus": "Nêu ý nghĩa tốc độ; đổi đơn vị m/s và km/h; áp dụng công thức v = s / t giải các bài toán chuyển động đều và so sánh tốc độ."
            },
            {
                "id": 9,
                "title": "Đo tốc độ",
                "pages": "49 – 52",
                "headings": [
                    ("I. Đo tốc độ dùng đồng hồ bấm giây", [
                        "1. Dụng cụ đo (thước đo quãng đường s, đồng hồ bấm giây đo thời gian t).",
                        "2. Cách đo (xác định vạch xuất phát và đích, bấm thời gian, tính v = s / t).",
                        "3. Ví dụ thực hành."
                    ]),
                    ("II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ", [
                        "1. Dụng cụ đo (đồng hồ đo thời gian hiện số, cổng quang điện A và B, máng trượt, viên bi/xe lăn).",
                        "2. Cách đo (chắn cổng quang điện kích hoạt và ngắt đồng hồ tự động giúp đo chính xác thời gian)."
                    ]),
                    ("III. Thiết bị bắn tốc độ", ["Nguyên lí hoạt động của súng bắn tốc độ trong giám sát trật tự an toàn giao thông."])
                ],
                "matrix_focus": "Mô tả phương pháp đo tốc độ bằng đồng hồ bấm giây và bằng cổng quang điện; so sánh độ chính xác; hiểu nguyên lí súng bắn tốc độ."
            },
            {
                "id": 10,
                "title": "Đồ thị quãng đường – thời gian",
                "pages": "53 – 55",
                "headings": [
                    ("I. Vẽ đồ thị quãng đường – thời gian cho chuyển động thẳng", [
                        "1. Lập bảng ghi quãng đường đi được theo thời gian.",
                        "2. Các bước vẽ đồ thị s - t trên hệ trục toạ độ (trục hoành Ot, trục tung Os)."
                    ]),
                    ("II. Sử dụng đồ thị quãng đường – thời gian", [
                        "Xác định quãng đường vật đi được sau khoảng thời gian t.",
                        "Xác định thời gian cần thiết để đi được quãng đường s.",
                        "Xác định trạng thái: đường nghiêng (chuyển động thẳng đều), đường nằm ngang (vật đứng yên); tính tốc độ v từ độ dốc của đồ thị."
                    ])
                ],
                "matrix_focus": "Vẽ đồ thị s - t từ bảng số liệu; đọc đồ thị để xác định vị trí, thời điểm, tốc độ và mô tả trạng thái chuyển động của vật."
            },
            {
                "id": 11,
                "title": "Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
                "pages": "56 – 59",
                "headings": [
                    ("I. Yêu cầu", ["Tìm hiểu mối quan hệ giữa tốc độ chuyển động, khoảng cách an toàn và nguy cơ xảy ra tai nạn giao thông."]),
                    ("II. Nguồn tư liệu", [
                        "1. Sưu tầm tư liệu (thống kê tai nạn giao thông, các quy định pháp luật).",
                        "2. Một số ví dụ về tư liệu cần sưu tầm (Quy chuẩn biển báo tốc độ, Bảng quy định khoảng cách an toàn tối thiểu theo tốc độ xe chạy)."
                    ]),
                    ("III. Thảo luận", ["Phân tích nguyên nhân tai nạn do vi phạm tốc độ; đề xuất giải pháp và cam kết tuân thủ luật an toàn giao thông."])
                ],
                "matrix_focus": "Phân tích ảnh hưởng của tốc độ đến khoảng cách phanh dừng xe an toàn; giải thích ý nghĩa biển báo tốc độ; liên hệ giáo dục ý thức an toàn giao thông."
            }
        ]
    },
    {
        "chapter_num": "IV",
        "chapter_title": "ÂM THANH",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Sóng âm)",
        "lessons": [
            {
                "id": 12,
                "title": "Sóng âm",
                "pages": "60 – 63",
                "headings": [
                    ("I. Dao động và sóng", [
                        "1. Dao động (chuyển động qua lại quanh một vị trí cân bằng).",
                        "2. Sóng (sự lan truyền dao động trong môi trường)."
                    ]),
                    ("II. Nguồn âm", ["Vật phát ra âm gọi là nguồn âm; mọi nguồn âm khi phát ra âm đều dao động."]),
                    ("III. Sóng âm", ["Dao động từ nguồn âm lan truyền trong môi trường tạo thành sóng âm."]),
                    ("IV. Các môi trường truyền âm", ["Sóng âm truyền được trong chất rắn, chất lỏng, chất khí; không truyền được trong chân không. Tốc độ truyền âm: v_rắn > v_lỏng > v_khí."])
                ],
                "matrix_focus": "Nêu đặc điểm của nguồn âm (dao động); môi trường truyền âm và tốc độ truyền âm trong các môi trường khác nhau; âm không truyền trong chân không."
            },
            {
                "id": 13,
                "title": "Độ to và độ cao của âm",
                "pages": "64 – 67",
                "headings": [
                    ("I. Độ to và biên độ của sóng âm", [
                        "1. Biên độ dao động của nguồn âm, sóng âm (độ lệch lớn nhất của vật so với vị trí cân bằng).",
                        "2. Độ to của âm: Biên độ dao động càng lớn thì âm phát ra càng to (đơn vị đo độ to là đêxiben, dB)."
                    ]),
                    ("II. Độ cao và tần số của sóng âm", [
                        "1. Tần số: số dao động thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
                        "2. Độ cao của âm: Tần số dao động càng lớn thì âm phát ra càng cao (càng bổng); tần số dao động càng nhỏ thì âm phát ra càng thấp (càng trầm)."
                    ])
                ],
                "matrix_focus": "Phân biệt biên độ (quyết định độ to) và tần số (quyết định độ cao của âm); tính tần số dao động; liên hệ thực tế giọng nói, nhạc cụ."
            },
            {
                "id": 14,
                "title": "Phản xạ âm, chống ô nhiễm tiếng ồn",
                "pages": "68 – 71",
                "headings": [
                    ("I. Phản xạ âm", ["Hiện tượng âm dội ngược lại khi gặp mặt chắn; Tiếng vang xuất hiện khi âm phản xạ nghe được cách âm trực tiếp ít nhất 1/15 giây."]),
                    ("II. Vật phản xạ âm tốt, vật phản xạ âm kém", [
                        "Vật phản xạ âm tốt (hấp thụ âm kém): vật cứng có bề mặt nhẵn bóng (kính, tường gạch men, kim loại).",
                        "Vật phản xạ âm kém (hấp thụ âm tốt): vật mềm, xốp, có bề mặt gồ ghề (rèm nhung, xốp bọt biển, dạ, gỗ ép xốp)."
                    ]),
                    ("III. Chống ô nhiễm tiếng ồn", [
                        "1. Tiếng ồn: tiếng ồn to, kéo dài gây hại cho sức khoẻ và thính giác con người.",
                        "2. Các biện pháp chống ô nhiễm tiếng ồn: Hạn chế nguồn gây tiếng ồn; Phân tán tiếng ồn trên đường truyền (trồng cây xanh); Ngăn cản đường truyền âm (dùng vật liệu cách âm)."
                    ])
                ],
                "matrix_focus": "Giải thích hiện tượng phản xạ âm và tiếng vang; phân loại vật liệu cách âm/tiêu âm; đề xuất các biện pháp giảm thiểu ô nhiễm tiếng ồn."
            }
        ]
    },
    {
        "chapter_num": "V",
        "chapter_title": "ÁNH SÁNG",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Quang học)",
        "lessons": [
            {
                "id": 15,
                "title": "Năng lượng ánh sáng. Tia sáng, vùng tối",
                "pages": "72 – 77",
                "headings": [
                    ("I. Ánh sáng là một dạng của năng lượng", ["Ánh sáng có mang năng lượng (quang năng có thể chuyển hoá thành nhiệt năng, điện năng trong pin mặt trời, hoá năng trong quang hợp)."]),
                    ("II. Chùm sáng và tia sáng", [
                        "1. Chùm sáng: gồm nhiều tia sáng hợp thành; 3 loại chùm sáng: chùm song song, chùm hội tụ, chùm phân kì.",
                        "2. Tia sáng: đường truyền của ánh sáng biểu diễn bằng một đường thẳng có mũi tên chỉ chiều truyền."
                    ]),
                    ("III. Vùng tối", [
                        "1. Vùng tối do nguồn sáng hẹp (phía sau vật cản chỉ có vùng tối rõ nét).",
                        "2. Vùng tối do nguồn sáng rộng (phía sau vật cản có vùng tối hoàn toàn và vùng tối không hoàn toàn/vùng nửa tối).",
                        "Giải thích hiện tượng nhật thực (Mặt Trăng chắn ánh sáng Mặt Trời tới Trái Đất) và nguyệt thực."
                    ])
                ],
                "matrix_focus": "Chứng minh ánh sáng là một dạng năng lượng; phân loại 3 dạng chùm sáng; biểu diễn tia sáng; giải thích sự tạo bóng, hiện tượng nhật thực và nguyệt thực."
            },
            {
                "id": 16,
                "title": "Sự phản xạ ánh sáng",
                "pages": "78 – 81",
                "headings": [
                    ("I. Hiện tượng phản xạ ánh sáng", ["Ánh sáng bị hắt trở lại môi trường cũ khi gặp một bề mặt nhẵn bóng. Các quy ước: Gương phẳng (G), Điểm tới (I), Tia tới (SI), Tia phản xạ (IR), Pháp tuyến (IN), Góc tới (i = SIN), Góc phản xạ (i' = NIR), Mặt phẳng tới."]),
                    ("II. Định luật phản xạ ánh sáng", [
                        "1. Thí nghiệm đo góc tới và góc phản xạ.",
                        "2. Nội dung định luật: a) Tia sáng phản xạ nằm trong mặt phẳng tới; b) Góc phản xạ bằng góc tới (i' = i)."
                    ]),
                    ("III. Phản xạ và phản xạ khuếch tán", [
                        "Phản xạ gương: xảy ra trên bề mặt nhẵn bóng, các tia sáng tới song song cho các tia phản xạ song song theo một hướng.",
                        "Phản xạ khuếch tán (tán xạ): xảy ra trên bề mặt gồ ghề, nhám; các tia sáng bị hắt trở lại theo mọi hướng khác nhau."
                    ])
                ],
                "matrix_focus": "Phát biểu và vẽ hình minh hoạ định luật phản xạ ánh sáng; áp dụng tính góc tới, góc phản xạ (i' = i); phân biệt phản xạ gương và phản xạ khuếch tán."
            },
            {
                "id": 17,
                "title": "Ảnh của vật qua gương phẳng",
                "pages": "82 – 85",
                "headings": [
                    ("I. Ảnh của vật qua gương phẳng", ["Hình ảnh nhìn thấy trong gương phẳng gọi là ảnh của vật qua gương phẳng."]),
                    ("II. Tính chất của ảnh qua gương phẳng", [
                        "1. Dự đoán về tính chất ảnh.",
                        "2. Thí nghiệm kiểm tra: a) Ảnh ảo không hứng được trên màn chắn; b) Độ lớn của ảnh bằng độ lớn của vật; c) Khoảng cách từ một điểm của vật đến gương bằng khoảng cách từ ảnh của điểm đó đến gương (đối xứng)."
                    ]),
                    ("III. Dựng ảnh của vật qua gương phẳng", [
                        "1. Dựng ảnh của một điểm sáng S (dựa vào định luật phản xạ hoặc tính chất đối xứng).",
                        "2. Dựng ảnh của một vật sáng AB (dựng ảnh của các điểm đầu mút rồi nối lại, vẽ bằng nét đứt)."
                    ])
                ],
                "matrix_focus": "Nêu 3 tính chất ảnh qua gương phẳng; vận dụng định luật phản xạ và tính chất đối xứng để dựng ảnh của điểm sáng S và vật sáng AB qua gương phẳng."
            }
        ]
    },
    {
        "chapter_num": "VI",
        "chapter_title": "TỪ",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Từ học)",
        "lessons": [
            {
                "id": 18,
                "title": "Nam châm",
                "pages": "86 – 89",
                "headings": [
                    ("I. Nam châm là gì?", ["Vật có từ tính, có khả năng hút các vật bằng sắt hoặc các vật liệu từ."]),
                    ("II. Tính chất từ của nam châm", [
                        "Hút các vật liệu có tính chất từ (sắt, thép, niken, coban...); không hút đồng, nhôm, gỗ, nhựa...",
                        "Mỗi nam châm có hai cực từ: cực Bắc (North, sơn đỏ hoặc chữ N) và cực Nam (South, sơn xanh/trắng hoặc chữ S). Nơi từ tính mạnh nhất là ở hai đầu cực."
                    ]),
                    ("III. Tương tác giữa hai nam châm", ["Đặt hai nam châm gần nhau: các cực cùng tên thì đẩy nhau, các cực khác tên thì hút nhau."]),
                    ("IV. Định hướng của một kim nam châm tự do", ["Khi để tự do, kim nam châm luôn định hướng theo trục Bắc - Nam địa lí."])
                ],
                "matrix_focus": "Nêu tính chất từ của nam châm; xác định hai cực từ; quy tắc tương tác giữa hai cực nam châm (cùng đẩy, khác hút); vật liệu từ và không từ."
            },
            {
                "id": 19,
                "title": "Từ trường",
                "pages": "90 – 95",
                "headings": [
                    ("I. Từ trường", ["Không gian xung quanh nam châm (hoặc dòng điện) tồn tại từ trường; tác dụng lực từ lên kim nam châm đặt trong nó."]),
                    ("II. Từ phổ", ["Hình ảnh các đường mạt sắt sắp xếp xung quanh nam châm tạo thành từ phổ."]),
                    ("III. Đường sức từ", [
                        "1. Khái niệm và hình ảnh đường sức từ.",
                        "2. Chiều của đường sức từ: tuân theo quy ước 'Vào Nam - Ra Bắc' (đi ra từ cực Bắc và đi vào cực Nam của nam châm)."
                    ]),
                    ("IV. Từ trường của Trái Đất", ["Trái Đất là một nam châm khổng lồ có địa từ trường; cực từ Bắc nằm ở vùng cực nam địa lí, cực từ Nam nằm ở vùng cực bắc địa lí."]),
                    ("V. La bàn", [
                        "1. Cấu tạo la bàn (kim nam châm, mặt số chia độ).",
                        "2. Cách sử dụng la bàn xác định hướng địa lí."
                    ])
                ],
                "matrix_focus": "Nhận biết sự tồn tại của từ trường; vẽ đường sức từ và xác định chiều 'Ra Bắc Vào Nam'; hiểu từ trường Trái Đất và cách sử dụng la bàn."
            },
            {
                "id": 20,
                "title": "Chế tạo nam châm điện đơn giản",
                "pages": "96 – 98",
                "headings": [
                    ("I. Nam châm điện", ["Cấu tạo gồm một cuộn dây dẫn quấn quanh một lõi sắt non; khi có dòng điện chạy qua cuộn dây, lõi sắt bị nhiễm từ và trở thành nam châm điện; ngắt điện thì mất từ tính."]),
                    ("II. Chế tạo nam châm điện đơn giản", [
                        "Các bước chế tạo dùng đinh sắt, dây đồng bọc cách điện và pin.",
                        "Các yếu tố ảnh hưởng đến độ mạnh của nam châm điện: tăng cường độ dòng điện (số pin) hoặc tăng số vòng dây.",
                        "Ứng dụng nam châm điện: cần cẩu điện dọn rác kim loại, rơle điện từ, chuông điện."
                    ])
                ],
                "matrix_focus": "Mô tả cấu tạo và hoạt động của nam châm điện; phân tích ưu điểm so với nam châm vĩnh cửu; cách làm tăng từ tính của nam châm điện."
            }
        ]
    },
    {
        "chapter_num": "VII",
        "chapter_title": "TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
        "domain": "Vật sống (Sinh học cơ thể)",
        "lessons": [
            {
                "id": 21,
                "title": "Khái quát về trao đổi chất và chuyển hoá năng lượng",
                "pages": "99 – 100",
                "headings": [
                    ("I. Trao đổi chất và chuyển hoá năng lượng", [
                        "Trao đổi chất: quá trình cơ thể lấy các chất từ môi trường ngoài và thải các chất cặn bã ra môi trường.",
                        "Chuyển hoá năng lượng: quá trình biến đổi năng lượng từ dạng này sang dạng khác (quang năng → hoá năng, hoá năng → nhiệt năng/cơ năng)."
                    ]),
                    ("II. Vai trò của trao đổi chất và chuyển hoá năng lượng", ["Cung cấp nguyên liệu cấu tạo tế bào; cung cấp năng lượng cho mọi hoạt động sống; duy trì sự tồn tại và phát triển của sinh vật."])
                ],
                "matrix_focus": "Nêu định nghĩa và phân biệt trao đổi chất với chuyển hoá năng lượng; phân tích vai trò thiết yếu của 2 quá trình đối với sinh vật."
            },
            {
                "id": 22,
                "title": "Quang hợp ở thực vật",
                "pages": "101 – 103",
                "headings": [
                    ("I. Khái quát về quang hợp", [
                        "1. Khái niệm quang hợp: quá trình lá cây sử dụng năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ (glucose/tinh bột) từ nước và carbon dioxide, đồng thời giải phóng oxygen.",
                        "2. Phương trình tổng quát: Nước + Carbon dioxide --(Ánh sáng, Diệp lục)--> Glucose + Oxygen.",
                        "3. Mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng trong quang hợp: Hấp thụ năng lượng ánh sáng và tích luỹ thành hoá năng trong hợp chất hữu cơ."
                    ]),
                    ("II. Vai trò của lá cây với chức năng quang hợp", ["Cấu tạo phiến lá rộng, mỏng; lớp biểu bì có khí khổng trao đổi khí và thoát hơi nước; mô giậu chứa nhiều lục lạp mang diệp lục; gân lá có mạch dẫn."])
                ],
                "matrix_focus": "Viết phương trình quang hợp; nêu bản chất chuyển hoá năng lượng (quang năng → hoá năng); giải thích đặc điểm lá cây thích nghi với quang hợp."
            },
            {
                "id": 23,
                "title": "Một số yếu tố ảnh hưởng đến quang hợp",
                "pages": "104 – 107",
                "headings": [
                    ("I. Một số yếu tố ảnh hưởng đến quang hợp", [
                        "1. Ánh sáng (cường độ và thành phần quang phổ). Cây ưa sáng và cây ưa bóng.",
                        "2. Nước (nguyên liệu quang hợp và điều tiết khí khổng).",
                        "3. Khí carbon dioxide (nguyên liệu trực tiếp tổng hợp carbohydrate).",
                        "4. Nhiệt độ (ảnh hưởng đến hoạt tính của enzyme quang hợp, tối ưu 25 - 35°C)."
                    ]),
                    ("II. Vận dụng những hiểu biết về quang hợp trong việc trồng và bảo vệ cây xanh", [
                        "Mật độ gieo trồng hợp lí, tỉa cành bấm ngọn, tưới tiêu và bón phân đúng thời vụ.",
                        "Vai trò của việc trồng cây xanh điều hoà không khí, giảm hiệu ứng nhà kính và bảo vệ môi trường."
                    ])
                ],
                "matrix_focus": "Phân tích tác động của 4 yếu tố (ánh sáng, nước, CO2, nhiệt độ) đến quang hợp; vận dụng kiến thức quang hợp vào kĩ thuật trồng trọt và bảo vệ cây xanh."
            },
            {
                "id": 24,
                "title": "Thực hành: Chứng minh quang hợp ở cây xanh",
                "pages": "108 – 110",
                "headings": [
                    ("I. Chuẩn bị", ["1. Dụng cụ (Cốc thuỷ tinh, đèn cồn, ống nghiệm, đĩa petri, panh, băng giấy đen); 2. Mẫu vật, hoá chất (Chậu cây khoai lang/dâm bụt, cành rong đuôi chó, cồn 90°, dung dịch thuốc thử iodine)."]),
                    ("II. Cách tiến hành", [
                        "1. Thí nghiệm chứng minh tinh bột được tạo thành trong quang hợp (Dùng băng giấy đen bịt một phần lá, chiếu sáng, tẩy diệp lục bằng cồn sôi, nhỏ dung dịch iodine; phần lá chiếu sáng chuyển màu xanh tím).",
                        "2. Thí nghiệm chứng minh quang hợp giải phóng khí oxygen (Cắm cành rong đuôi chó trong phễu ngập nước chiếu sáng, thu khí vào ống nghiệm, dùng que đóm còn tàn đỏ thấy bùng cháy)."
                    ]),
                    ("III. Kết quả", ["Giải thích hiện tượng đổi màu xanh tím đặc trưng của tinh bột với iodine; giải thích hiện tượng que đóm bùng cháy do O2 duy trì sự cháy."])
                ],
                "matrix_focus": "Trình bày các bước tiến hành 2 thí nghiệm chứng minh quang hợp; giải thích vai trò của hoá chất (cồn, iodine) và ý nghĩa kết quả quan sát được."
            },
            {
                "id": 25,
                "title": "Hô hấp tế bào",
                "pages": "111 – 112",
                "headings": [
                    ("I. Hô hấp tế bào", [
                        "Khái niệm: quá trình phân giải chất hữu cơ (chủ yếu là glucose) giải phóng năng lượng ATP cung cấp cho các hoạt động sống của tế bào và toả nhiệt.",
                        "Nơi diễn ra: bào quan ty thể.",
                        "Phương trình tổng quát: Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng (ATP + Nhiệt)."
                    ]),
                    ("II. Mối quan hệ giữa tổng hợp và phân giải chất hữu cơ ở tế bào", ["Quang hợp (tổng hợp chất hữu cơ, tích luỹ năng lượng) và hô hấp (phân giải chất hữu cơ, giải phóng năng lượng) là hai quá trình trái ngược nhau nhưng gắn bó mật thiết, thống nhất."])
                ],
                "matrix_focus": "Viết phương trình hô hấp tế bào; nêu vị trí diễn ra và vai trò của ATP; phân tích mối quan hệ biện chứng giữa quang hợp và hô hấp tế bào."
            },
            {
                "id": 26,
                "title": "Một số yếu tố ảnh hưởng đến hô hấp tế bào",
                "pages": "113 – 115",
                "headings": [
                    ("I. Một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào", [
                        "1. Nước (hàm lượng nước tỉ lệ thuận với cường độ hô hấp).",
                        "2. Nồng độ khí oxygen (nồng độ O2 giảm dưới 5% thì hô hấp tế bào giảm mạnh).",
                        "3. Nồng độ khí carbon dioxide (nồng độ CO2 cao ức chế hô hấp).",
                        "4. Nhiệt độ (nhiệt độ tối ưu 30 - 35°C; nhiệt độ quá thấp hoặc quá cao đều ức chế hô hấp)."
                    ]),
                    ("II. Vận dụng hiểu biết về hô hấp tế bào vào thực tiễn", [
                        "1. Hô hấp tế bào và vấn đề bảo quản nông sản (Hô hấp làm tiêu hao chất hữu cơ, sinh nhiệt ẩm làm hỏng nông sản).",
                        "2. Các biện pháp bảo quản nông sản: Bảo quản khô (phơi, sấy lúa hạt); Bảo quản lạnh (rau quả tươi); Bảo quản trong điều kiện nồng độ CO2 cao hoặc hút chân không."
                    ])
                ],
                "matrix_focus": "Nêu các yếu tố ảnh hưởng đến hô hấp; giải thích cơ sở khoa học của các phương pháp bảo quản nông sản (phơi khô, bảo quản lạnh, hút chân không)."
            },
            {
                "id": 27,
                "title": "Thực hành: Hô hấp ở thực vật",
                "pages": "116 – 117",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Bình thuỷ tinh kín, nút cao su, ống dẫn khí, cốc đong, nhiệt kế); 2. Mẫu vật, hoá chất (Hạt đỗ/ngô đang nảy mầm, nước vôi trong Ca(OH)2)."]),
                    ("II. Cách tiến hành", [
                        "Thí nghiệm 1: Chứng minh hô hấp thải khí CO2 (Dẫn khí từ bình hạt nảy mầm qua cốc nước vôi trong làm vẩn đục).",
                        "Thí nghiệm 2: Chứng minh hô hấp toả nhiệt (Nhiệt kế cắm vào bình hạt nảy mầm chỉ nhiệt độ tăng)."
                    ]),
                    ("III. Kết quả", ["Giải thích hiện tượng nước vôi trong bị đục do phản ứng tạo kết tủa CaCO3; giải thích hiện tượng tăng nhiệt độ do năng lượng nhiệt toả ra từ hô hấp."])
                ],
                "matrix_focus": "Mô tả các bước thực hành thí nghiệm hô hấp ở thực vật; giải thích hiện tượng nước vôi trong vẩn đục và nhiệt kế tăng nhiệt độ."
            },
            {
                "id": 28,
                "title": "Trao đổi khí ở sinh vật",
                "pages": "118 – 121",
                "headings": [
                    ("I. Trao đổi khí ở sinh vật", ["Cơ chế trao đổi khí: khuếch tán thụ động từ nơi có nồng độ cao đến nơi có nồng độ thấp qua bề mặt trao đổi khí."]),
                    ("II. Trao đổi khí ở thực vật", [
                        "1. Cấu tạo của khí khổng (hai tế bào hình hạt đậu có mép trong dày mép ngoài mỏng tạo lỗ khí).",
                        "2. Chức năng của khí khổng trong trao đổi khí O2 và CO2 giữa lá cây và môi trường."
                    ]),
                    ("III. Trao đổi khí ở động vật", [
                        "1. Các cơ quan trao đổi khí ở động vật: qua bề mặt cơ thể (giun đất), qua hệ thống ống khí (côn trùng), qua mang (cá, tôm), qua phổi (bò sát, chim, thú, người).",
                        "2. Quá trình trao đổi khí ở người (Đường dẫn khí và phổi; sự trao đổi khí ở phế nang và ở tế bào)."
                    ])
                ],
                "matrix_focus": "Nêu cơ chế khuếch tán khí; mô tả cấu tạo và hoạt động đóng mở khí khổng; kể tên các cơ quan trao đổi khí ở động vật; mô tả đường đi của khí ở người."
            },
            {
                "id": 29,
                "title": "Vai trò của nước và chất dinh dưỡng đối với sinh vật",
                "pages": "122 – 126",
                "headings": [
                    ("I. Thành phần hoá học, cấu trúc và tính chất của nước", ["Phân tử H2O gồm 2 nguyên tử H liên kết cộng hoá trị phân cực với 1 nguyên tử O; có tính phân cực cao; là dung môi hoà tan nhiều chất."]),
                    ("II. Vai trò của nước đối với sinh vật", ["Thành phần cấu tạo chủ yếu của tế bào và cơ thể (chiếm 70 - 90%); dung môi hoà tan; môi trường phản ứng sinh hoá; điều hoà thân nhiệt; phương tiện vận chuyển các chất."]),
                    ("III. Vai trò của chất dinh dưỡng đối với sinh vật", [
                        "1. Vai trò của chất dinh dưỡng đối với thực vật (nguyên tố khoáng đa lượng N, P, K và vi lượng Fe, Zn... tham gia cấu tạo tế bào và xúc tác enzyme).",
                        "2. Vai trò của chất dinh dưỡng đối với động vật (protein, lipid, carbohydrate cung cấp năng lượng và xây dựng tế bào; vitamin và khoáng chất điều hoà chuyển hoá)."
                    ])
                ],
                "matrix_focus": "Nêu tính chất phân cực của nước; phân tích vai trò của nước và các nhóm chất dinh dưỡng đối với thực vật và động vật; biểu hiện khi cơ thể thiếu nước/khoáng."
            },
            {
                "id": 30,
                "title": "Trao đổi nước và chất dinh dưỡng ở thực vật",
                "pages": "127 – 130",
                "headings": [
                    ("I. Sự hấp thụ nước và chất khoáng từ môi trường ngoài vào rễ", ["Lông hút ở rễ là cơ quan chuyên trách hấp thụ nước và khoáng theo cơ chế thẩm thấu và khuếch tán."]),
                    ("II. Sự vận chuyển các chất trong cây", [
                        "Dòng mạch gỗ (vận chuyển nước và muối khoáng một chiều từ rễ lên thân và lá).",
                        "Dòng mạch rây (vận chuyển chất hữu cơ hai chiều từ lá đến các cơ quan dự trữ và rễ)."
                    ]),
                    ("III. Quá trình thoát hơi nước ở lá", [
                        "1. Hoạt động đóng, mở khí khổng (điều tiết lượng nước thoát ra).",
                        "2. Ý nghĩa của sự thoát hơi nước (tạo lực hút kéo dòng mạch gỗ đi lên, hạ nhiệt độ bề mặt lá, giúp khí khổng mở để hấp thụ CO2)."
                    ]),
                    ("IV. Một số yếu tố chủ yếu ảnh hưởng đến trao đổi nước và chất dinh dưỡng ở thực vật", ["Ánh sáng, nhiệt độ, độ ẩm không khí, độ ẩm và tính chất của đất."]),
                    ("V. Vận dụng hiểu biết về trao đổi chất và chuyển hoá năng lượng vào thực tiễn", ["Kĩ thuật tưới tiêu hợp lí, bón phân cân đối, bảo vệ bộ rễ cây khi bứng trồng."])
                ],
                "matrix_focus": "Mô tả con đường hấp thụ nước ở rễ; phân biệt dòng mạch gỗ và dòng mạch rây; nêu cơ chế và ý nghĩa thoát hơi nước ở lá; vận dụng tưới tiêu hợp lí."
            },
            {
                "id": 31,
                "title": "Trao đổi nước và chất dinh dưỡng ở động vật",
                "pages": "131 – 135",
                "headings": [
                    ("I. Con đường thu nhận và tiêu hoá thức ăn trong ống tiêu hoá ở người", ["Miệng (nhai, đảo trộn, biến đổi tinh bột chín) → Thực quản → Dạ dày (tiêu hoá cơ học, tiêu hoá protein) → Ruột non (tiêu hoá triệt để và hấp thụ chất dinh dưỡng) → Ruột già (hấp thụ nước, tạo phân) → Hậu môn."]),
                    ("II. Nhu cầu dùng nước và con đường trao đổi nước ở động vật", ["Nhu cầu nước ở các loài; con đường thu nhận nước (uống, thức ăn) và đào thải nước (nước tiểu, mồ hôi, hơi thở, phân)."]),
                    ("III. Sự vận chuyển các chất ở động vật", ["Hệ tuần hoàn máu: Tim co bóp đẩy máu; Vòng tuần hoàn nhỏ (trao đổi khí ở phổi); Vòng tuần hoàn lớn (vận chuyển O2 và dinh dưỡng đến tế bào, nhận CO2 và chất thải)."]),
                    ("IV. Vận dụng hiểu biết về trao đổi chất và chuyển hoá năng lượng vào thực tiễn", [
                        "1. Những nguy cơ khi thiếu hoặc thừa dinh dưỡng (suy dinh dưỡng, béo phì, bệnh tim mạch).",
                        "2. Vệ sinh ăn uống và xây dựng tháp dinh dưỡng hợp lí."
                    ])
                ],
                "matrix_focus": "Mô tả các giai đoạn tiêu hoá thức ăn trong ống tiêu hoá ở người; con đường vận chuyển các chất qua 2 vòng tuần hoàn; xây dựng chế độ dinh dưỡng hợp lí."
            },
            {
                "id": 32,
                "title": "Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước",
                "pages": "136 – 137",
                "headings": [
                    ("I. Chuẩn bị", ["1. Dụng cụ (Dao lam, cốc thuỷ tinh, kính lúp, túi nylon trong suốt, dây buộc); 2. Mẫu vật, hoá chất (Cành hoa trắng - cúc/huệ, cành cây có lá, nước pha mực đỏ)."]),
                    ("II. Cách tiến hành", [
                        "1. Thí nghiệm chứng minh thân vận chuyển nước (Cắm cành hoa trắng vào cốc nước màu đỏ, sau một thời gian cánh hoa chuyển sang màu đỏ; cắt ngang thân quan sát mạch gỗ nhuộm đỏ).",
                        "2. Thí nghiệm chứng minh lá thoát hơi nước (Trùm túi nylon kín cành cây có lá và cành đã ngắt hết lá; sau một thời gian túi trùm cành có lá xuất hiện mờ sương và giọt nước đọng)."
                    ]),
                    ("III. Kết quả", ["Giải thích hiện tượng cánh hoa đổi màu do mạch gỗ vận chuyển nước màu lên; giải thích giọt nước đọng trong túi nylon do lá thoát hơi nước."])
                ],
                "matrix_focus": "Quy trình thực hiện thí nghiệm chứng minh dòng mạch gỗ và thoát hơi nước ở lá; giải thích hiện tượng và kết luận về chức năng của thân và lá."
            }
        ]
    },
    {
        "chapter_num": "VIII",
        "chapter_title": "CẢM ỨNG Ở SINH VẬT",
        "domain": "Vật sống (Sinh học cơ thể)",
        "lessons": [
            {
                "id": 33,
                "title": "Cảm ứng ở sinh vật và tập tính ở động vật",
                "pages": "138 – 140",
                "headings": [
                    ("I. Cảm ứng và vai trò của cảm ứng ở sinh vật", [
                        "1. Cảm ứng ở sinh vật là gì? (Khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường để thích nghi).",
                        "2. Vai trò của cảm ứng ở sinh vật (Giúp sinh vật thích nghi với môi trường sống, tồn tại và phát triển)."
                    ]),
                    ("II. Tập tính ở động vật", [
                        "1. Tập tính là gì? Chuỗi phản ứng trả lời kích thích. Phân loại: Tập tính bẩm sinh (sinh ra đã có, mang tính bản năng di truyền) và Tập tính học được (hình thành qua trải nghiệm, học tập).",
                        "2. Vai trò của tập tính (Kiếm ăn, tự vệ, sinh sản, di cư, thích nghi sinh tồn)."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm cảm ứng; phân biệt tập tính bẩm sinh và tập tính học được ở động vật qua các ví dụ; phân tích vai trò của tập tính đối với đời sống động vật."
            },
            {
                "id": 34,
                "title": "Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn",
                "pages": "141 – 144",
                "headings": [
                    ("I. Ứng dụng hiện tượng cảm ứng ở sinh vật trong trồng trọt", ["Ứng dụng tính hướng sáng (tỉa cành, trồng thưa), hướng nước và hướng hoá (tưới nước và bón phân tập trung dưới rễ), hướng tiếp xúc (làm giàn cho bầu, bí, mướp, nho)."]),
                    ("II. Ứng dụng hiện tượng cảm ứng ở sinh vật trong chăn nuôi", ["Huấn luyện động vật nghe khẩu lệnh, âm thanh chuông để về chuồng ăn, đi vệ sinh đúng chỗ; chó nghiệp vụ phát hiện ma tuý."]),
                    ("III. Ứng dụng hiện tượng cảm ứng ở sinh vật trong học tập và đời sống", ["Hình thành các thói quen tốt (tập thể dục buổi sáng, đọc sách, đúng giờ); loại bỏ các thói quen xấu (ngủ muộn, lười vận động) dựa trên cơ chế thành lập phản xạ."])
                ],
                "matrix_focus": "Nêu các hình thức cảm ứng ứng dụng trong trồng trọt (hướng sáng, hướng tiếp xúc, hướng đất); vận dụng tập tính huấn luyện vật nuôi và rèn luyện thói quen tốt."
            },
            {
                "id": 35,
                "title": "Thực hành: Cảm ứng ở sinh vật",
                "pages": "145 – 147",
                "headings": [
                    ("I. Chuẩn bị", ["1. Dụng cụ (Hộp carton khoét lỗ, chậu trồng cây, chậu xốp có lỗ, giá đỡ); 2. Mẫu vật (Hạt đỗ/ngô nảy mầm, cây trinh nữ, giun đất)."]),
                    ("II. Cách tiến hành", [
                        "1. Thí nghiệm chứng minh tính hướng nước của cây (Rễ cây cong về phía nguồn nước).",
                        "2. Thí nghiệm chứng minh tính hướng sáng của cây (Ngọn cây mọc cong về phía có ánh sáng chiếu qua lỗ hộp).",
                        "3. Quan sát tính hướng tiếp xúc của cây (Tua cuốn cây mướp/đỗ cuộn quanh cọc bám; phản ứng cụp lá của cây trinh nữ khi va chạm).",
                        "4. Quan sát một số tập tính của động vật (Tập tính giun đất chui vào nơi ẩm tối)."
                    ]),
                    ("III. Kết quả", ["Hoàn thành phiếu quan sát; giải thích cơ chế sinh trưởng dãn dài không đều của tế bào dẫn đến tính hướng sáng và hướng nước."])
                ],
                "matrix_focus": "Kĩ năng bố trí thí nghiệm chứng minh tính hướng nước, hướng sáng, hướng tiếp xúc ở thực vật; quan sát và mô tả phản ứng cảm ứng của sinh vật."
            }
        ]
    },
    {
        "chapter_num": "IX",
        "chapter_title": "SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT",
        "domain": "Vật sống (Sinh học cơ thể)",
        "lessons": [
            {
                "id": 36,
                "title": "Khái quát về sinh trưởng và phát triển ở sinh vật",
                "pages": "148 – 150",
                "headings": [
                    ("I. Sinh trưởng và phát triển ở sinh vật", [
                        "1. Khái niệm: Sinh trưởng (sự tăng về kích thước và khối lượng của cơ thể do tăng số lượng và kích thước tế bào); Phát triển (sự biến đổi về cấu trúc và chức năng, phân hoá tế bào, phát sinh hình thái cơ quan mới).",
                        "2. Các giai đoạn sinh trưởng và phát triển ở thực vật và động vật; Mối quan hệ mật thiết giữa sinh trưởng và phát triển."
                    ]),
                    ("II. Mô phân sinh và chức năng của mô phân sinh", [
                        "Khái niệm mô phân sinh: nhóm tế bào chưa phân hoá, có khả năng phân chia liên tục tạo tế bào mới.",
                        "Vị trí và chức năng: Mô phân sinh đỉnh (ở đỉnh chồi, chóp rễ giúp cây dài ra); Mô phân sinh bên (ở thân cây hai lá mầm giúp thân to ra)."
                    ])
                ],
                "matrix_focus": "Phân biệt sinh trưởng và phát triển; xác định vị trí và chức năng của mô phân sinh đỉnh và mô phân sinh bên ở thực vật."
            },
            {
                "id": 37,
                "title": "Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn",
                "pages": "151 – 155",
                "headings": [
                    ("I. Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển ở sinh vật", [
                        "1. Nhiệt độ (mỗi loài có khoảng nhiệt độ tối ưu).",
                        "2. Ánh sáng (ảnh hưởng đến quang hợp, chuyển hoá vitamin D ở động vật).",
                        "3. Nước (nguyên liệu, môi trường hoà tan).",
                        "4. Chất dinh dưỡng (cung cấp vật chất xây dựng tế bào)."
                    ]),
                    ("II. Vận dụng sinh trưởng và phát triển trong thực tiễn", [
                        "1. Ứng dụng trong trồng trọt (Bấm ngọn, tỉa cành, điều khiển chiếu sáng kích thích ra hoa trái vụ như thanh long, cúc).",
                        "2. Ứng dụng trong chăn nuôi (Tối ưu chế độ dinh dưỡng, nhiệt độ chuồng trại, chiếu sáng tăng trọng, tăng đẻ trứng).",
                        "3. Ứng dụng trong phòng trừ sinh vật gây hại (Hiểu vòng đời để diệt trừ ở giai đoạn mẫn cảm nhất, ví dụ diệt bọ gậy của muỗi, diệt sâu non của bướm)."
                    ])
                ],
                "matrix_focus": "Phân tích các nhân tố môi trường ảnh hưởng đến sinh trưởng, phát triển; giải thích cơ sở khoa học các biện pháp bấm ngọn, tỉa cành, diệt muỗi bọ gậy."
            },
            {
                "id": 38,
                "title": "Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật",
                "pages": "156 – 157",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Thước đo, chậu, đất ẩm, bông gòn, nhiệt kế); 2. Mẫu vật (Hạt đỗ xanh nảy mầm, tranh ảnh/video vòng đời của muỗi, ếch, bướm, gà)."]),
                    ("II. Cách tiến hành", [
                        "1. Thí nghiệm chứng minh cây có sự sinh trưởng và thực hành quan sát, mô tả sự sinh trưởng của hạt đỗ xanh qua các ngày.",
                        "2. Quan sát, mô tả sinh trưởng và phát triển ở một số động vật (Mô tả các giai đoạn phát triển qua biến thái hoàn toàn ở bướm/muỗi, qua biến thái ở ếch)."
                    ]),
                    ("III. Kết quả", ["Lập bảng theo dõi chiều cao thân, số lá cây đỗ; vẽ sơ đồ vòng đời của bướm (Trứng → Sâu non → Nhộng → Bướm trưởng thành)."])
                ],
                "matrix_focus": "Kĩ năng theo dõi đo đạc sự sinh trưởng của cây trồng; mô tả và vẽ sơ đồ vòng đời của sinh vật (thực vật hạt kín, côn trùng, lưỡng cư)."
            }
        ]
    },
    {
        "chapter_num": "X",
        "chapter_title": "SINH SẢN Ở SINH VẬT",
        "domain": "Vật sống (Sinh học cơ thể)",
        "lessons": [
            {
                "id": 39,
                "title": "Sinh sản vô tính ở sinh vật",
                "pages": "158 – 163",
                "headings": [
                    ("I. Sinh sản là gì?", ["Khái niệm sinh sản: quá trình tạo ra cá thể mới, bảo đảm sự phát triển liên tục của loài."]),
                    ("II. Sinh sản vô tính", [
                        "1. Khái niệm sinh sản vô tính: hình thức sinh sản không có sự kết hợp của giao tử đực và giao tử cái; con non tạo ra giống hệt mẹ.",
                        "2. Các hình thức sinh sản vô tính ở thực vật: Sinh sản sinh dưỡng (tạo cây con từ rễ củ, thân bò, thân rễ, lá...).",
                        "3. Các hình thức sinh sản vô tính ở động vật: Phân đôi (trùng roi), mọc chồi (thuỷ tức), tái sinh (sao biển), trinh sinh (ong).",
                        "4. Vai trò và ứng dụng của sinh sản vô tính: Nhân giống cây trồng nhanh bằng giâm cành, chiết cành, ghép cành, nuôi cấy mô tế bào; bảo tồn loài quý hiếm."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và đặc điểm sinh sản vô tính; phân biệt các hình thức sinh sản vô tính ở thực vật và động vật; cơ sở khoa học của giâm, chiết, ghép cành."
            },
            {
                "id": 40,
                "title": "Sinh sản hữu tính ở sinh vật",
                "pages": "164 – 168",
                "headings": [
                    ("I. Khái niệm sinh sản hữu tính", ["Hình thức sinh sản có sự kết hợp giữa giao tử đực (tinh trùng) và giao tử cái (trứng) tạo thành hợp tử, hợp tử phát triển thành cơ thể mới."]),
                    ("II. Sinh sản hữu tính ở thực vật có hoa", [
                        "1. Cơ quan sinh sản là hoa (Hoa lưỡng tính có cả nhị và nhuỵ; Hoa đơn tính chỉ có nhị hoặc nhuỵ). Cấu tạo nhị (hạt phấn) và nhuỵ (noãn).",
                        "2. Quá trình sinh sản: Thụ phấn (chuyển hạt phấn đến đầu nhuỵ) → Thụ tinh (tinh tử kết hợp với noãn tạo hợp tử) → Hình thành quả (từ bầu nhuỵ) và hạt (từ noãn)."
                    ]),
                    ("III. Sinh sản hữu tính ở động vật", [
                        "Các giai đoạn: Hình thành giao tử đực và cái → Thụ tinh (thụ tinh ngoài ở cá/ếch; thụ tinh trong ở bò sát/chim/thú) → Phát triển phôi.",
                        "Hình thức sinh sản: Đẻ trứng và đẻ con (ưu thế nuôi dưỡng phôi trong cơ thể mẹ ở thú)."
                    ]),
                    ("IV. Vai trò và ứng dụng của sinh sản hữu tính ở sinh vật", ["Tạo ra nguồn biến dị tổ hợp phong phú giúp sinh vật thích nghi; ứng dụng lai tạo giống cây trồng, vật nuôi mới có năng suất cao."])
                ],
                "matrix_focus": "Nêu bản chất sinh sản hữu tính; cấu tạo hoa lưỡng tính/đơn tính; phân biệt thụ phấn và thụ tinh; so sánh sinh sản vô tính và hữu tính; thụ tinh ngoài và thụ tinh trong."
            },
            {
                "id": 41,
                "title": "Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật",
                "pages": "169 – 172",
                "headings": [
                    ("I. Một số yếu tố ảnh hưởng đến sinh sản ở sinh vật", [
                        "1. Các yếu tố bên trong (yếu tố di truyền, hormone sinh dục).",
                        "2. Các yếu tố bên ngoài (ánh sáng, nhiệt độ, chế độ dinh dưỡng, độ ẩm)."
                    ]),
                    ("II. Điều hoà, điều khiển sinh sản ở sinh vật", [
                        "1. Điều hoà sinh sản ở sinh vật (cơ chế điều hoà bằng hormone).",
                        "2. Điều khiển sinh sản ở sinh vật (điều chỉnh số lượng con, giới tính con non, mùa vụ sinh sản)."
                    ]),
                    ("III. Vận dụng những hiểu biết về sinh sản hữu tính trong thực tiễn", [
                        "1. Trong trồng trọt (Thụ phấn nhân tạo cho ngô/thanh long; tạo quả không hạt; điều khiển thời điểm ra hoa).",
                        "2. Trong chăn nuôi (Thụ tinh nhân tạo; nuôi cấy phôi; điều khiển giới tính ở tằm, gà, cá rô phi)."
                    ])
                ],
                "matrix_focus": "Phân tích các nhân tố ảnh hưởng đến sinh sản; giải thích ứng dụng thụ phấn bổ sung, thụ tinh nhân tạo và điều khiển giới tính trong nông nghiệp."
            },
            {
                "id": 42,
                "title": "Cơ thể sinh vật là một thể thống nhất",
                "pages": "173 – 174",
                "headings": [
                    ("I. Mối quan hệ giữa tế bào, cơ thể sinh vật và môi trường", ["Tế bào là đơn vị cấu trúc và chức năng của cơ thể; cơ thể là một hệ thống mở thường xuyên trao đổi vật chất và năng lượng với môi trường ngoài."]),
                    ("II. Mối quan hệ giữa các hoạt động sống trong cơ thể sinh vật", ["Các hoạt động sống (trao đổi chất, chuyển hoá năng lượng, cảm ứng, sinh trưởng, phát triển, sinh sản) có mối liên hệ mật thiết, tác động qua lại, đảm bảo cơ thể tồn tại và phát triển như một thể thống nhất."])
                ],
                "matrix_focus": "Chứng minh cơ thể sinh vật là một thể thống nhất; giải thích mối liên hệ phụ thuộc lẫn nhau giữa các quá trình sống (dinh dưỡng, hô hấp, tuần hoàn, bài tiết, cảm ứng, sinh sản)."
            }
        ]
    }
]

def generate_document_khtn7():
    doc = docx.Document()

    # Cấu hình lề trang TCVN chuẩn: Top 2cm, Bottom 2cm, Left 2.5cm, Right 2cm
    for section in doc.sections:
        section.top_margin = Inches(0.79)     # 2.0 cm
        section.bottom_margin = Inches(0.79)  # 2.0 cm
        section.left_margin = Inches(0.98)    # 2.5 cm
        section.right_margin = Inches(0.79)   # 2.0 cm

    # Cấu hình Style mặc định
    style_normal = doc.styles['Normal']
    font = style_normal.font
    font.name = 'Times New Roman'
    font.size = Pt(11)
    font.color.rgb = RGBColor(0x33, 0x33, 0x33)

    # 1. TIÊU ĐỀ TRÊN CÙNG
    p_header = doc.add_paragraph()
    p_header.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_header.paragraph_format.space_before = Pt(0)
    p_header.paragraph_format.space_after = Pt(4)
    run_org = p_header.add_run("BỘ GIÁO DỤC VÀ ĐÀO TẠO — CHƯƠNG TRÌNH GDPT 2018\n")
    run_org.font.size = Pt(10)
    run_org.font.bold = True
    run_org.font.color.rgb = RGBColor(0x55, 0x55, 0x55)
    
    run_subject = p_header.add_run("MÔN: KHOA HỌC TỰ NHIÊN 7 (BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)")
    run_subject.font.size = Pt(11)
    run_subject.font.bold = True
    run_subject.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(8)
    p_title.paragraph_format.space_after = Pt(4)
    run_title = p_title.add_run("HỆ THỐNG ĐỀ MỤC KIẾN THỨC CỐT LÕI VÀ MA TRẬN NỘI DUNG\nPHỤC VỤ KIỂM TRA THƯỜNG XUYÊN VÀ ĐỊNH KÌ LỚP 7")
    run_title.font.size = Pt(16)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(0x8B, 0x00, 0x00) # Đỏ sẫm giáo dục

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(14)
    run_sub = p_sub.add_run("(Tổng hợp toàn bộ 10 Chương – 42 Bài học theo chuẩn SGK Khoa học tự nhiên 7 – NXB Giáo dục Việt Nam)")
    run_sub.font.size = Pt(10.5)
    run_sub.font.italic = True
    run_sub.font.color.rgb = RGBColor(0x55, 0x55, 0x55)

    # 2. HỘP THÔNG TIN HƯỚNG DẪN SỬ DỤNG
    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_after = Pt(10)
    p_intro.paragraph_format.line_spacing = 1.15
    run_intro_title = p_intro.add_run("MỤC ĐÍCH SỬ DỤNG VÀ HƯỚNG DẪN THIẾT KẾ MA TRẬN ĐỀ KIỂM TRA MÔN KHTN 7:\n")
    run_intro_title.bold = True
    run_intro_title.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)
    
    intro_text = (
        "1. Lập đề kiểm tra thường xuyên: Sử dụng trực tiếp hệ thống đề mục I, II, III... và tiểu mục 1, 2, 3... "
        "để xây dựng ngân hàng câu hỏi kiểm tra đánh giá thường xuyên (15 phút, hỏi đáp đầu giờ, bài tập trắc nghiệm ngắn).\n"
        "2. Xây dựng ma trận & bản đặc tả đề kiểm tra định kì (Giữa kì I, Cuối kì I, Giữa kì II, Cuối kì II): "
        "Căn cứ vào danh mục đề mục kiến thức chuẩn bên dưới để phân bổ câu hỏi theo 4 mức độ nhận thức: "
        "Nhận biết (40%), Thông hiểu (30%), Vận dụng (20%), Vận dụng cao (10%) theo khung ma trận của Bộ GD&ĐT.\n"
        "3. Tỉ lệ nội dung tích hợp liên môn KHTN 7: Phân bố cân đối giữa 3 phân môn: Hoá học (Nguyên tử, Bảng tuần hoàn, Phân tử, Liên kết hoá học - Chương I, II), "
        "Vật lí (Tốc độ, Âm thanh, Ánh sáng, Từ - Chương III, IV, V, VI), và Sinh học (Trao đổi chất, Cảm ứng, Sinh trưởng & Phát triển, Sinh sản - Chương VII, VIII, IX, X)."
    )
    p_intro.add_run(intro_text)

    # 3. BẢNG TỔNG HỢP PHÂN PHỐI CHƯƠNG TRÌNH & PHẠM VI KIỂM TRA ĐỊNH KÌ
    p_tbl_ov = doc.add_paragraph()
    p_tbl_ov.paragraph_format.space_before = Pt(8)
    p_tbl_ov.paragraph_format.space_after = Pt(4)
    run_tov = p_tbl_ov.add_run("BẢNG 1: TỔNG QUAN PHÂN PHỐI CHƯƠNG TRÌNH VÀ PHẠM VI KIỂM TRA ĐỊNH KÌ KHTN 7")
    run_tov.bold = True
    run_tov.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

    tbl_ov = doc.add_table(rows=1, cols=5)
    tbl_ov.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_ov.autofit = False
    set_table_borders(tbl_ov, "B0C4DE")

    hdr_cells = tbl_ov.rows[0].cells
    hdr_titles = ["Chương", "Tên Chương", "Số Bài", "Trang SGK", "Phạm vi kiểm tra định kì khuyến nghị"]
    hdr_widths = [Inches(0.9), Inches(2.2), Inches(0.7), Inches(0.9), Inches(2.0)]
    for i, title in enumerate(hdr_titles):
        hdr_cells[i].width = hdr_widths[i]
        set_cell_background(hdr_cells[i], "1B365D")
        set_cell_margins(hdr_cells[i], top=120, bottom=120, left=100, right=100)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(title)
        run.bold = True
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

    ov_rows = [
        ("Mở đầu", "Phương pháp & Kĩ năng học tập KHTN", "Bài 1 (1 bài)", "Tr. 6 – 13", "Kiểm tra Giữa kì I"),
        ("Chương I", "Nguyên tử – Sơ lược Bảng tuần hoàn", "Bài 2 – 4 (3 bài)", "Tr. 14 – 31", "Kiểm tra Giữa kì I"),
        ("Chương II", "Phân tử – Liên kết hoá học", "Bài 5 – 7 (3 bài)", "Tr. 32 – 44", "Kiểm tra Giữa kì I & Cuối kì I"),
        ("Chương III", "Tốc độ", "Bài 8 – 11 (4 bài)", "Tr. 45 – 59", "Kiểm tra Cuối kì I"),
        ("Chương IV", "Âm thanh", "Bài 12 – 14 (3 bài)", "Tr. 60 – 71", "Kiểm tra Cuối kì I"),
        ("Chương V", "Ánh sáng", "Bài 15 – 17 (3 bài)", "Tr. 72 – 85", "Kiểm tra Cuối kì I"),
        ("Chương VI", "Từ", "Bài 18 – 20 (3 bài)", "Tr. 86 – 98", "Kiểm tra Cuối kì I & Giữa kì II"),
        ("Chương VII", "Trao đổi chất & Chuyển hoá năng lượng", "Bài 21 – 32 (12 bài)", "Tr. 99 – 137", "Kiểm tra Giữa kì II"),
        ("Chương VIII", "Cảm ứng ở sinh vật", "Bài 33 – 35 (3 bài)", "Tr. 138 – 147", "Kiểm tra Giữa kì II & Cuối kì II"),
        ("Chương IX", "Sinh trưởng và phát triển ở sinh vật", "Bài 36 – 38 (3 bài)", "Tr. 148 – 157", "Kiểm tra Cuối kì II"),
        ("Chương X", "Sinh sản ở sinh vật", "Bài 39 – 42 (4 bài)", "Tr. 158 – 174", "Kiểm tra Cuối kì II")
    ]

    for r_idx, (c_id, c_name, c_cnt, c_p, c_exam) in enumerate(ov_rows):
        row = tbl_ov.add_row()
        cells = row.cells
        bg_col = "F8F9FA" if r_idx % 2 == 1 else "FFFFFF"
        for i, val in enumerate([c_id, c_name, c_cnt, c_p, c_exam]):
            cells[i].width = hdr_widths[i]
            set_cell_background(cells[i], bg_col)
            set_cell_margins(cells[i], top=90, bottom=90, left=100, right=100)
            p = cells[i].paragraphs[0]
            if i in [0, 2, 3]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            run = p.add_run(val)
            run.font.size = Pt(9.5)
            if i == 0:
                run.bold = True

    # 4. BẢNG CHI TIẾT 42 BÀI VÀ HỆ THỐNG ĐỀ MỤC I, II, III...
    doc.add_page_break()

    p_tbl_det = doc.add_paragraph()
    p_tbl_det.paragraph_format.space_before = Pt(8)
    p_tbl_det.paragraph_format.space_after = Pt(6)
    run_tdet = p_tbl_det.add_run("BẢNG 2: DANH MỤC CHI TIẾT ĐỀ MỤC I, II, III... TRONG 42 BÀI HỌC SGK KHTN 7\n(DÙNG LÀM ĐỀ MỤC KIẾN THỨC TẠO MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ & THƯỜNG XUYÊN)")
    run_tdet.bold = True
    run_tdet.font.size = Pt(12)
    run_tdet.font.color.rgb = RGBColor(0x8B, 0x00, 0x00)

    for ch_data in chapters_data_khtn7:
        p_ch = doc.add_paragraph()
        p_ch.paragraph_format.space_before = Pt(14)
        p_ch.paragraph_format.space_after = Pt(4)
        p_ch.paragraph_format.keep_with_next = True
        if ch_data['chapter_num'] == "MỞ ĐẦU":
            run_ch = p_ch.add_run(f"PHẦN MỞ ĐẦU: {ch_data['chapter_title']}")
        else:
            run_ch = p_ch.add_run(f"CHƯƠNG {ch_data['chapter_num']}: {ch_data['chapter_title']}")
        run_ch.bold = True
        run_ch.font.size = Pt(12)
        run_ch.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

        run_dom = p_ch.add_run(f"  [Mạch kiến thức: {ch_data['domain']}]")
        run_dom.font.size = Pt(10)
        run_dom.font.italic = True
        run_dom.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

        table = doc.add_table(rows=1, cols=4)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        table.autofit = False
        set_table_borders(table, "CBD5E1")

        hdr = table.rows[0].cells
        hdr_w = [Inches(0.6), Inches(1.8), Inches(2.9), Inches(1.7)]
        hdr_labels = ["Bài", "Tên bài học & Trang", "Hệ thống Đề mục I, II, III... & Tiểu mục", "Nội dung trọng tâm tạo ma trận đề"]
        for j, lab in enumerate(hdr_labels):
            hdr[j].width = hdr_w[j]
            set_cell_background(hdr[j], "2A4B7C")
            set_cell_margins(hdr[j], top=100, bottom=100, left=90, right=90)
            p = hdr[j].paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run = p.add_run(lab)
            run.bold = True
            run.font.size = Pt(9.5)
            run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

        for l_idx, lesson in enumerate(ch_data["lessons"]):
            row = table.add_row()
            cells = row.cells
            bg_col = "F8FAFC" if l_idx % 2 == 1 else "FFFFFF"

            # Cột 1: STT Bài
            cells[0].width = hdr_w[0]
            set_cell_background(cells[0], bg_col)
            set_cell_margins(cells[0], top=80, bottom=80, left=60, right=60)
            p0 = cells[0].paragraphs[0]
            p0.alignment = WD_ALIGN_PARAGRAPH.CENTER
            r0 = p0.add_run(f"Bài {lesson['id']}")
            r0.bold = True
            r0.font.size = Pt(9.5)

            # Cột 2: Tên bài & Trang
            cells[1].width = hdr_w[1]
            set_cell_background(cells[1], bg_col)
            set_cell_margins(cells[1], top=80, bottom=80, left=80, right=80)
            p1 = cells[1].paragraphs[0]
            p1.alignment = WD_ALIGN_PARAGRAPH.LEFT
            r1 = p1.add_run(lesson['title'] + "\n")
            r1.bold = True
            r1.font.size = Pt(9.5)
            r1_sub = p1.add_run(f"(Trang {lesson['pages']})")
            r1_sub.font.size = Pt(8.5)
            r1_sub.font.italic = True
            r1_sub.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

            # Cột 3: Hệ thống đề mục I, II, III...
            cells[2].width = hdr_w[2]
            set_cell_background(cells[2], bg_col)
            set_cell_margins(cells[2], top=80, bottom=80, left=80, right=80)
            p2 = cells[2].paragraphs[0]
            p2.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for h_idx, (h_title, h_subs) in enumerate(lesson['headings']):
                if h_idx > 0:
                    p2 = cells[2].add_paragraph()
                    p2.paragraph_format.space_before = Pt(3)
                    p2.paragraph_format.space_after = Pt(1)
                else:
                    p2.paragraph_format.space_before = Pt(0)
                    p2.paragraph_format.space_after = Pt(1)
                
                r_h = p2.add_run(h_title)
                r_h.bold = True
                r_h.font.size = Pt(9.5)
                r_h.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

                for sub in h_subs:
                    p_sub = cells[2].add_paragraph()
                    p_sub.paragraph_format.space_before = Pt(0)
                    p_sub.paragraph_format.space_after = Pt(1)
                    p_sub.paragraph_format.left_indent = Inches(0.15)
                    r_s = p_sub.add_run(f"• {sub}")
                    r_s.font.size = Pt(8.5)
                    r_s.font.color.rgb = RGBColor(0x44, 0x44, 0x44)

            # Cột 4: Trọng tâm ma trận đề kiểm tra
            cells[3].width = hdr_w[3]
            set_cell_background(cells[3], bg_col)
            set_cell_margins(cells[3], top=80, bottom=80, left=80, right=80)
            p3 = cells[3].paragraphs[0]
            p3.alignment = WD_ALIGN_PARAGRAPH.LEFT
            r3 = p3.add_run(lesson['matrix_focus'])
            r3.font.size = Pt(8.5)
            r3.font.color.rgb = RGBColor(0x22, 0x22, 0x22)

    # 5. KHUNG MA TRẬN MẪU
    doc.add_page_break()
    p_guide_title = doc.add_paragraph()
    p_guide_title.paragraph_format.space_before = Pt(8)
    p_guide_title.paragraph_format.space_after = Pt(6)
    r_gt = p_guide_title.add_run("PHỤ LỤC: MẪU KHUNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ KHTN 7\n(THEO CÔNG VĂN HƯỚNG DẪN CỦA BỘ GIÁO DỤC VÀ ĐÀO TẠO)")
    r_gt.bold = True
    r_gt.font.size = Pt(13)
    r_gt.font.color.rgb = RGBColor(0x8B, 0x00, 0x00)

    p_guide_desc = doc.add_paragraph()
    p_guide_desc.paragraph_format.space_after = Pt(8)
    p_guide_desc.add_run(
        "Mẫu ma trận minh hoạ cho đề kiểm tra Cuối kì I hoặc Giữa kì, tích hợp đầy đủ 3 phân môn "
        "(Hoá học, Vật lí, Sinh học) với các đơn vị kiến thức tương ứng các đề mục trong SGK KHTN 7:"
    )

    tbl_matrix = doc.add_table(rows=1, cols=9)
    tbl_matrix.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_matrix.autofit = False
    set_table_borders(tbl_matrix, "94A3B8")

    m_hdr = tbl_matrix.rows[0].cells
    m_widths = [Inches(0.4), Inches(1.5), Inches(1.7), Inches(0.6), Inches(0.6), Inches(0.6), Inches(0.6), Inches(0.5), Inches(0.5)]
    m_labels = ["STT", "Chủ đề", "Đơn vị kiến thức (Đề mục)", "Nhận biết", "Thông hiểu", "Vận dụng", "Vận dụng cao", "Tổng số câu", "% Điểm"]
    for k, lab in enumerate(m_labels):
        m_hdr[k].width = m_widths[k]
        set_cell_background(m_hdr[k], "1E293B")
        set_cell_margins(m_hdr[k], top=100, bottom=100, left=60, right=60)
        p = m_hdr[k].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(lab)
        run.bold = True
        run.font.size = Pt(9)
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

    sample_matrix_rows = [
        ("1", "Nguyên tử & BTH", "Bài 2, 3, 4: Cấu tạo nguyên tử, Bảng tuần hoàn", "3 TN", "2 TN", "0", "0", "5", "12.5%"),
        ("2", "Phân tử & Liên kết", "Bài 5, 6, 7: Đơn chất, hợp chất, liên kết, hoá trị", "3 TN", "2 TN", "1 TL (1.0đ)", "0", "6", "22.5%"),
        ("3", "Tốc độ", "Bài 8, 9, 10, 11: Công thức tốc độ, đo tốc độ, đồ thị s - t", "3 TN", "2 TN", "1 TL (0.5đ)", "0", "6", "17.5%"),
        ("4", "Âm thanh", "Bài 12, 13, 14: Sóng âm, độ to, độ cao, phản xạ âm", "3 TN", "2 TN", "1 TL (0.5đ)", "0", "6", "17.5%"),
        ("5", "Ánh sáng", "Bài 15, 16, 17: Năng lượng ánh sáng, phản xạ, gương phẳng", "2 TN", "1 TN", "1 TL (0.5đ)", "1 TL (0.5đ)", "5", "17.5%"),
        ("6", "Từ học", "Bài 18, 19, 20: Nam châm, từ trường, nam châm điện", "2 TN", "2 TN", "0", "0", "4", "12.5%"),
        ("TỔNG", "", "Toàn bộ ma trận đề Kiểm tra Định kì", "16 TN (4.0đ)", "11 TN (2.75đ)", "4 TL (2.25đ)", "1 TL (1.0đ)", "32", "100%")
    ]

    for m_idx, row_data in enumerate(sample_matrix_rows):
        m_row = tbl_matrix.add_row()
        m_cells = m_row.cells
        is_total = (m_idx == len(sample_matrix_rows) - 1)
        bg = "E2E8F0" if is_total else ("F8FAFC" if m_idx % 2 == 1 else "FFFFFF")
        for k, val in enumerate(row_data):
            m_cells[k].width = m_widths[k]
            set_cell_background(m_cells[k], bg)
            set_cell_margins(m_cells[k], top=80, bottom=80, left=60, right=60)
            p = m_cells[k].paragraphs[0]
            if k in [0, 3, 4, 5, 6, 7, 8]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            r = p.add_run(val)
            r.font.size = Pt(8.5)
            if is_total or k == 0:
                r.bold = True

    # Cuối tài liệu: Footer ghi chú
    p_ft = doc.add_paragraph()
    p_ft.paragraph_format.space_before = Pt(16)
    p_ft.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r_ft = p_ft.add_run("Tài liệu được chuẩn hóa và biên soạn chuyên sâu phục vụ công tác khảo thí môn KHTN 7.")
    r_ft.font.size = Pt(9)
    r_ft.font.italic = True
    r_ft.font.color.rgb = RGBColor(0x77, 0x77, 0x77)

    output_path = "He_thong_de_muc_KHTN_7_Tao_Ma_tran_Kiem_tra.docx"
    doc.save(output_path)
    print(f"Đã tạo thành công file Word: {output_path}")

if __name__ == "__main__":
    generate_document_khtn7()
