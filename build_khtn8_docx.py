# -*- coding: utf-8 -*-
"""
Script tạo file docx: Hệ thống đề mục SGK Khoa học tự nhiên 8 (Kết nối tri thức với cuộc sống)
dùng để lập ma trận đề kiểm tra thường xuyên và kiểm tra định kì lớp 8.
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

# Dữ liệu 47 bài học thuộc 8 Chương + Phần Mở đầu KHTN 8
chapters_data_khtn8 = [
    {
        "chapter_num": "MỞ ĐẦU",
        "chapter_title": "SỬ DỤNG MỘT SỐ HOÁ CHẤT, THIẾT BỊ CƠ BẢN TRONG PHÒNG THÍ NGHIỆM",
        "domain": "Phương pháp và kĩ năng khoa học",
        "lessons": [
            {
                "id": 1,
                "title": "Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm",
                "pages": "6 – 10",
                "headings": [
                    ("I. Nhận biết hoá chất và quy tắc sử dụng hoá chất an toàn trong phòng thí nghiệm", [
                        "1. Nhận biết hoá chất (nhãn hoá chất, công thức, độ tinh khiết, cảnh báo an toàn).",
                        "2. Quy tắc sử dụng hoá chất an toàn trong phòng thí nghiệm (lấy hoá chất rắn, hoá chất lỏng, hoá chất thừa, an toàn khi xảy ra sự cố)."
                    ]),
                    ("II. Giới thiệu một số dụng cụ thí nghiệm và cách sử dụng", [
                        "1. Một số dụng cụ thí nghiệm thông dụng (ống nghiệm, cốc thuỷ tinh, bình tam giác, phễu lọc, ống đong, ống hút nhỏ giọt, kẹp gỗ...).",
                        "2. Cách sử dụng một số dụng cụ thí nghiệm: a) Ống nghiệm (cách cầm, đun nóng hoá chất); b) Ống hút nhỏ giọt (cách hút và nhỏ giọt dung dịch)."
                    ]),
                    ("III. Giới thiệu một số thiết bị và cách sử dụng", [
                        "1. Thiết bị đo pH (máy đo pH, bút đo pH và cách xác định pH mẫu nước, nước quả...).",
                        "2. Huyết áp kế (huyết áp kế đồng hồ, cấu tạo và cách đo huyết áp bằng bao cao su, quả bóp).",
                        "3. Thiết bị điện và cách sử dụng: a) Thiết bị cung cấp điện (pin, bộ nguồn); b) Biến áp nguồn (chuyển đổi AC 220V sang AC/DC điện áp thấp an toàn); c) Thiết bị đo điện (ampe kế, vôn kế); d) Joulemeter (đo điện năng, công suất, điện áp); e) Thiết bị sử dụng điện (biến trở, điốt phát quang LED, bóng đèn); g) Thiết bị điện hỗ trợ (công tắc, cầu chì ống, dây nối)."
                    ])
                ],
                "matrix_focus": "Nhận biết quy tắc an toàn hoá chất; cách lấy hoá chất rắn/lỏng; sử dụng ống nghiệm, ống hút nhỏ giọt; sử dụng bút đo pH, huyết áp kế, ampe kế, vôn kế, joulemeter và các thiết bị điện an toàn."
            }
        ]
    },
    {
        "chapter_num": "I",
        "chapter_title": "PHẢN ỨNG HOÁ HỌC",
        "domain": "Chất và sự biến đổi của chất (Hoá học)",
        "lessons": [
            {
                "id": 2,
                "title": "Phản ứng hoá học",
                "pages": "11 – 15",
                "headings": [
                    ("I. Biến đổi vật lí và biến đổi hoá học", [
                        "1. Biến đổi vật lí: hiện tượng chất biến đổi về trạng thái, hình dạng nhưng vẫn giữ nguyên là chất ban đầu.",
                        "2. Biến đổi hoá học: hiện tượng chất có sự biến đổi tạo thành chất mới."
                    ]),
                    ("II. Phản ứng hoá học", [
                        "1. Khái niệm (chất phản ứng, chất sản phẩm, phương trình chữ).",
                        "2. Diễn biến của phản ứng hoá học (sự phá vỡ liên kết cũ, hình thành liên kết mới; số nguyên tử mỗi nguyên tố được bảo toàn).",
                        "3. Hiện tượng kèm theo phản ứng hoá học (thay đổi màu sắc, xuất hiện chất kết tủa, sinh chất khí, toả nhiệt hoặc phát sáng)."
                    ]),
                    ("III. Năng lượng của phản ứng hoá học", [
                        "1. Phản ứng toả nhiệt và phản ứng thu nhiệt (khái niệm và ví dụ minh hoạ).",
                        "2. Ứng dụng của phản ứng toả nhiệt (nguồn cung cấp nhiệt lượng trong đời sống và sản xuất: đốt cháy than, xăng dầu, gas)."
                    ])
                ],
                "matrix_focus": "Phân biệt biến đổi vật lí và biến đổi hoá học; giải thích diễn biến phản ứng hoá học ở cấp độ nguyên tử; nhận biết dấu hiệu phản ứng và phân biệt phản ứng toả nhiệt với phản ứng thu nhiệt."
            },
            {
                "id": 3,
                "title": "Mol và tỉ khối chất khí",
                "pages": "16 – 19",
                "headings": [
                    ("I. Mol", [
                        "1. Khái niệm mol: lượng chất chứa $N_A$ ($6,022 \\times 10^{23}$) nguyên tử hoặc phân tử của chất đó.",
                        "2. Khối lượng mol ($M$): khối lượng tính bằng gam của 1 mol chất, có trị số bằng nguyên tử khối hoặc phân tử khối (đơn vị g/mol).",
                        "3. Thể tích mol của chất khí: thể tích chiếm bởi 1 mol chất khí ($V = 24,79$ L ở $25^\\circ\\text{C}, 1\\text{ bar}$)."
                    ]),
                    ("II. Tỉ khối của chất khí", [
                        "1. Tỉ khối của chất khí A đối với chất khí B ($d_{A/B} = M_A / M_B$).",
                        "2. Tỉ khối của chất khí A đối với không khí ($d_{A/kk} = M_A / 29$)."
                    ])
                ],
                "matrix_focus": "Tính số mol từ khối lượng ($n = m/M$) và từ thể tích khí ($n = V/24,79$); tính khối lượng mol; tính tỉ khối chất khí để so sánh độ nặng nhẹ giữa các chất khí hoặc với không khí."
            },
            {
                "id": 4,
                "title": "Dung dịch và nồng độ",
                "pages": "20 – 23",
                "headings": [
                    ("I. Dung dịch, chất tan và dung môi", [
                        "Dung môi (chất có khả năng hoà tan chất khác); Chất tan (chất bị hoà tan trong dung môi); Dung dịch (hỗn hợp đồng nhất giữa dung môi và chất tan).",
                        "Dung dịch chưa bão hoà và dung dịch bão hoà ở nhiệt độ xác định."
                    ]),
                    ("II. Độ tan", [
                        "Khái niệm độ tan ($S$): số gam chất đó tan được trong 100 gam nước để tạo thành dung dịch bão hoà ở một nhiệt độ xác định.",
                        "Ảnh hưởng của nhiệt độ đến độ tan của chất rắn và chất khí."
                    ]),
                    ("III. Nồng độ dung dịch", [
                        "1. Nồng độ phần trăm ($C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\%$ với $m_{dd} = m_{ct} + m_{dm}$).",
                        "2. Nồng độ mol ($C_M = \\frac{n}{V}$ với $V$ tính bằng lít)."
                    ]),
                    ("IV. Thực hành pha chế dung dịch theo một nồng độ cho trước", [
                        "1. Tính toán lượng chất tan và lượng dung môi cần lấy.",
                        "2. Các bước tiến hành pha chế dung dịch có nồng độ phần trăm hoặc nồng độ mol cho trước."
                    ])
                ],
                "matrix_focus": "Phân biệt dung môi, chất tan, dung dịch, dung dịch bão hoà; tính nồng độ phần trăm ($C\\%$) và nồng độ mol ($C_M$); giải bài tập pha trộn hoặc tính toán pha chế dung dịch."
            },
            {
                "id": 5,
                "title": "Định luật bảo toàn khối lượng và phương trình hoá học",
                "pages": "24 – 27",
                "headings": [
                    ("I. Định luật bảo toàn khối lượng", [
                        "1. Nội dung định luật: Trong một phản ứng hoá học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng ($m_A + m_B = m_C + m_D$).",
                        "2. Áp dụng định luật: tính khối lượng của một chất khi biết khối lượng của các chất còn lại trong phản ứng."
                    ]),
                    ("II. Phương trình hoá học", [
                        "1. Lập phương trình hoá học (3 bước: viết sơ đồ phản ứng, cân bằng số nguyên tử mỗi nguyên tố, viết phương trình hoá học).",
                        "2. Ý nghĩa của phương trình hoá học: cho biết tỉ lệ số nguyên tử, số phân tử giữa các chất trong phản ứng."
                    ])
                ],
                "matrix_focus": "Phát biểu và vận dụng định luật bảo toàn khối lượng để tính khối lượng chất; lập thành thạo phương trình hoá học bằng phương pháp chẵn - lẻ hoặc cân bằng số nguyên tử; nêu ý nghĩa tỉ lệ hạt."
            },
            {
                "id": 6,
                "title": "Tính theo phương trình hoá học",
                "pages": "28 – 30",
                "headings": [
                    ("I. Tính lượng chất trong phương trình hoá học", [
                        "1. Tính lượng chất phản ứng và lượng chất sinh ra theo số mol.",
                        "2. Tính khối lượng hoặc thể tích chất khí ở điều kiện chuẩn ($25^\\circ\\text{C}, 1\\text{ bar}$) tham gia hoặc tạo thành sau phản ứng."
                    ]),
                    ("II. Hiệu suất phản ứng", [
                        "1. Khái niệm hiệu suất phản ứng: tỉ lệ phần trăm giữa lượng sản phẩm thực tế thu được so với lượng sản phẩm tính theo lí thuyết ($H = \\frac{m_{tt}}{m_{lt}} \\times 100\\%$ hoặc $H = \\frac{n_{tt}}{n_{lt}} \\times 100\\%$).",
                        "2. Tính hiệu suất phản ứng và tính lượng chất tham gia/sản phẩm có tính đến hiệu suất."
                    ])
                ],
                "matrix_focus": "Các bước tính theo phương trình hoá học (đổi dữ kiện ra mol -> đặt tỉ lệ -> tính lượng chất cần tìm); tính hiệu suất phản ứng và bài toán chất dư - chất hết."
            },
            {
                "id": 7,
                "title": "Tốc độ phản ứng và chất xúc tác",
                "pages": "31 – 34",
                "headings": [
                    ("I. Khái niệm tốc độ phản ứng", [
                        "Định nghĩa tốc độ phản ứng: đại lượng đặc trưng cho sự nhanh hay chậm của một phản ứng hoá học xảy ra theo thời gian."
                    ]),
                    ("II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng", [
                        "1. Ảnh hưởng của nồng độ (nồng độ chất phản ứng tăng làm tăng tốc độ phản ứng).",
                        "2. Ảnh hưởng của nhiệt độ (nhiệt độ tăng làm tăng tốc độ phản ứng).",
                        "3. Ảnh hưởng của diện tích bề mặt tiếp xúc (diện tích tiếp xúc tăng làm tăng tốc độ phản ứng của chất rắn).",
                        "4. Ảnh hưởng của chất xúc tác (chất làm tăng tốc độ phản ứng nhưng không bị biến đổi về lượng và chất sau phản ứng).",
                        "5. Vận dụng các yếu tố ảnh hưởng tốc độ phản ứng trong thực tiễn đời sống và sản xuất."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm tốc độ phản ứng và chất xúc tác; giải thích các hiện tượng thực tế dựa trên 4 yếu tố ảnh hưởng (nồng độ, nhiệt độ, diện tích bề mặt, chất xúc tác) như bảo quản thực phẩm, đập nhỏ than khi đốt..."
            }
        ]
    },
    {
        "chapter_num": "II",
        "chapter_title": "MỘT SỐ HỢP CHẤT THÔNG DỤNG",
        "domain": "Chất và sự biến đổi của chất (Hoá học)",
        "lessons": [
            {
                "id": 8,
                "title": "Acid",
                "pages": "35 – 38",
                "headings": [
                    ("I. Khái niệm acid", [
                        "Định nghĩa: Phân tử acid gồm có một hay nhiều nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước, acid tạo ra ion $H^+$. Công thức tổng quát $H_nA$."
                    ]),
                    ("II. Tính chất hoá học của acid", [
                        "1. Làm đổi màu chất chỉ thị: làm giấy quỳ tím chuyển sang màu đỏ.",
                        "2. Tác dụng với kim loại (đứng trước hydrogen) tạo thành muối và giải phóng khí hydrogen ($H_2$)."
                    ]),
                    ("III. Một số acid thông dụng", [
                        "1. Sulfuric acid ($H_2SO_4$): tính chất, ứng dụng công nghiệp, lưu ý an toàn khi pha loãng dung dịch acid đặc (rót từ từ acid vào nước).",
                        "2. Hydrochloric acid ($HCl$): tính chất, ứng dụng tẩy gỉ thép, sản xuất hợp chất vô cơ/hữu cơ.",
                        "3. Acetic acid ($CH_3COOH$): tính chất, thành phần của giấm ăn, ứng dụng trong công nghiệp thực phẩm."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và công thức chung của acid; tính chất làm đổi màu quỳ tím và tác dụng với kim loại (Fe, Zn, Mg, Al); nhận biết ứng dụng và quy tắc pha loãng acid $H_2SO_4$ đặc an toàn."
            },
            {
                "id": 9,
                "title": "Base. Thang pH",
                "pages": "39 – 43",
                "headings": [
                    ("I. Khái niệm base", [
                        "Định nghĩa: Phân tử base gồm có một nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide ($-OH$). Khi tan trong nước, base tạo ra ion $OH^-$. Công thức tổng quát $M(OH)_n$.",
                        "Tên gọi của base: Tên kim loại (kèm hoá trị nếu nhiều hoá trị) + hydroxide."
                    ]),
                    ("II. Tính chất hoá học của base", [
                        "1. Làm đổi màu chất chỉ thị: Dung dịch kiềm làm quỳ tím chuyển sang màu xanh, làm phenolphthalein không màu chuyển sang màu hồng.",
                        "2. Tác dụng với acid: Tạo thành muối và nước (phản ứng trung hoà)."
                    ]),
                    ("III. Thang pH", [
                        "1. Ý nghĩa của thang pH (độ acid hoặc base của dung dịch từ 1 đến 14): pH < 7 (môi trường acid), pH = 7 (môi trường trung tính), pH > 7 (môi trường base/kiềm).",
                        "2. Xác định pH bằng giấy chỉ thị pH hoặc thiết bị đo pH; ứng dụng pH trong kiểm tra đất trồng trọt, nước sinh hoạt, sức khoẻ con người."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm, công thức và quy tắc gọi tên base; phân biệt base tan (kiềm: NaOH, KOH, $Ca(OH)_2$, $Ba(OH)_2$) và base không tan; tính chất hoá học (chỉ thị màu, phản ứng trung hoà); đọc giá trị và ý nghĩa thang pH."
            },
            {
                "id": 10,
                "title": "Oxide",
                "pages": "44 – 47",
                "headings": [
                    ("I. Khái niệm oxide", [
                        "1. Định nghĩa: Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen.",
                        "2. Phân loại oxide: 4 loại gồm oxide acid, oxide base, oxide lưỡng tính và oxide trung tính.",
                        "3. Tên gọi oxide: Tên nguyên tố (kèm hoá trị đối với kim loại/tiền tố chỉ số nguyên tử đối với phi kim) + oxide."
                    ]),
                    ("II. Tính chất hoá học của oxide", [
                        "1. Oxide acid: Tác dụng với nước tạo acid; tác dụng với dung dịch base tạo muối và nước.",
                        "2. Oxide base: Tác dụng với acid tạo muối và nước; một số oxide base tác dụng với nước tạo dung dịch kiềm.",
                        "3. Oxide lưỡng tính ($Al_2O_3, ZnO$): Tác dụng được với cả dung dịch acid và dung dịch kiềm.",
                        "4. Oxide trung tính ($CO, NO$): Không tác dụng với acid, base, nước ở điều kiện thường."
                    ])
                ],
                "matrix_focus": "Nêu định nghĩa và phân loại 4 nhóm oxide; đọc tên gọi theo IUPAC; viết phương trình hoá học minh hoạ tính chất hoá học của oxide acid và oxide base."
            },
            {
                "id": 11,
                "title": "Muối",
                "pages": "48 – 52",
                "headings": [
                    ("I. Khái niệm muối", [
                        "1. Định nghĩa: Muối là hợp chất gồm một hay nhiều nguyên tử kim loại (hoặc nhóm $NH_4^+$) liên kết với một hay nhiều gốc acid.",
                        "2. Tên gọi của muối: Tên kim loại (kèm hoá trị nếu kim loại nhiều hoá trị) + Tên gốc acid."
                    ]),
                    ("II. Tính tan của muối", [
                        "Tra cứu bảng tính tan: nhận biết muối tan tốt, muối ít tan và muối không tan (kết tủa như $BaSO_4, AgCl, CaCO_3$)."
                    ]),
                    ("III. Tính chất hoá học của muối", [
                        "1. Tác dụng với kim loại: Kim loại tự do đẩy kim loại yếu hơn ra khỏi dung dịch muối.",
                        "2. Tác dụng với acid: Tạo thành muối mới và acid mới.",
                        "3. Tác dụng với dung dịch base: Tạo thành muối mới và base mới.",
                        "4. Tác dụng với dung dịch muối khác: Tạo thành hai muối mới.",
                        "Phản ứng trao đổi trong dung dịch và điều kiện xảy ra (sản phẩm có chất kết tủa hoặc chất bay hơi hoặc nước)."
                    ]),
                    ("IV. Điều chế muối", [
                        "Các phương pháp điều chế: acid + base, acid + oxide base, acid + muối, oxide acid + base, dung dịch muối + dung dịch muối; khai thác từ tự nhiên (muối mỏ, nước biển)."
                    ]),
                    ("V. Mối quan hệ giữa các hợp chất vô cơ", [
                        "Sơ đồ chuyển hoá qua lại giữa kim loại, phi kim, oxide base, oxide acid, base, acid và muối."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và gọi tên muối; điều kiện xảy ra phản ứng trao đổi; viết phương trình hoá học thể hiện tính chất hoá học và phương pháp điều chế muối; hoàn thành chuỗi chuyển hoá các hợp chất vô cơ."
            },
            {
                "id": 12,
                "title": "Phân bón hoá học",
                "pages": "53 – 55",
                "headings": [
                    ("I. Vai trò của các nguyên tố hoá học đối với sự phát triển của cây trồng", [
                        "1. Lí do cần bổ sung nguyên tố dinh dưỡng cho cây trồng.",
                        "2. Nhóm nguyên tố đa lượng (N, P, K), trung lượng (Ca, Mg, S) và vi lượng (Fe, Zn, Cu, B, Mn...)."
                    ]),
                    ("II. Một số loại phân bón thông thường", [
                        "1. Phân đạm (chứa N: kích thích sinh trưởng cành lá, tạo chất diệp lục).",
                        "2. Phân lân (chứa P: thúc đẩy phát triển bộ rễ, phân hoá mầm hoa).",
                        "3. Phân kali (chứa K: tăng tích luỹ tinh bột, đường, tăng sức đề kháng).",
                        "4. Phân hỗn hợp NPK (chứa cả 3 nguyên tố N, P, K theo tỉ lệ thích hợp)."
                    ]),
                    ("III. Cách sử dụng phân bón", [
                        "Nguyên tắc sử dụng phân bón hiệu quả và an toàn (quy tắc 4 đúng: đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp).",
                        "Tác hại của việc lạm dụng phân bón hoá học (gây chua đất, ô nhiễm nguồn nước ngầm, ảnh hưởng sức khoẻ con người)."
                    ])
                ],
                "matrix_focus": "Nêu vai trò của các nguyên tố dinh dưỡng N, P, K; nhận biết thành phần các loại phân đạm, lân, kali, NPK; trình bày nguyên tắc 4 đúng khi bón phân và tác hại của ô nhiễm phân bón."
            }
        ]
    },
    {
        "chapter_num": "III",
        "chapter_title": "KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 13,
                "title": "Khối lượng riêng",
                "pages": "56 – 58",
                "headings": [
                    ("I. Thí nghiệm", [
                        "Khảo sát tỉ số giữa khối lượng và thể tích ($m/V$) của các khối vật thể cùng chất hoặc khác chất."
                    ]),
                    ("II. Khối lượng riêng, đơn vị khối lượng riêng", [
                        "1. Khái niệm khối lượng riêng: khối lượng của một mét khối ($1\\text{ m}^3$) một chất ($D = \\frac{m}{V}$).",
                        "2. Đơn vị đo: $\\text{kg/m}^3$ hoặc $\\text{g/cm}^3$ ($1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$).",
                        "3. Ý nghĩa khối lượng riêng của các chất rắn, lỏng, khí."
                    ])
                ],
                "matrix_focus": "Định nghĩa khối lượng riêng; công thức $D = m/V$ và cách chuyển đổi đơn vị; tính khối lượng hoặc thể tích của vật khi biết khối lượng riêng."
            },
            {
                "id": 14,
                "title": "Thực hành xác định khối lượng riêng",
                "pages": "59 – 63",
                "headings": [
                    ("I. Xác định khối lượng riêng của một vật hình hộp chữ nhật", [
                        "1. Chuẩn bị (cân điện tử, thước đo chiều dài).",
                        "2. Cách tiến hành (đo kích thước $a, b, c \\rightarrow V = a \\times b \\times c$; cân khối lượng $m \\rightarrow D = m/V$).",
                        "3. Kết quả đo và tính toán sai số."
                    ]),
                    ("II. Xác định khối lượng riêng của một lượng nước", [
                        "1. Chuẩn bị (cân, ống đong hoặc cốc chia độ).",
                        "2. Cách tiến hành (xác định khối lượng cốc rỗng $m_1$, khối lượng cốc chứa nước $m_2 \\rightarrow m = m_2 - m_1$; đọc thể tích $V \\rightarrow D = m/V$).",
                        "3. Kết quả đo."
                    ]),
                    ("III. Xác định khối lượng riêng của một vật có hình dạng bất kì", [
                        "1. Chuẩn bị (vật rắn không thấm nước, cân, ống đong chứa nước).",
                        "2. Cách tiến hành (đo thể tích vật bằng phương pháp bình chia độ chênh lệch mức nước $V = V_2 - V_1$, cân khối lượng $m \\rightarrow D = m/V$).",
                        "3. Báo cáo thực hành và nhận xét kết quả."
                    ])
                ],
                "matrix_focus": "Các bước thực hành xác định khối lượng riêng của vật hình học đều, chất lỏng và vật rắn bất kì chìm trong nước; xử lí bảng số liệu thực hành."
            },
            {
                "id": 15,
                "title": "Áp suất trên một bề mặt",
                "pages": "64 – 66",
                "headings": [
                    ("I. Áp lực là gì?", [
                        "Khái niệm: Áp lực là lực ép có phương vuông góc với mặt bị ép."
                    ]),
                    ("II. Áp suất", [
                        "1. Thí nghiệm về tác dụng của áp lực phụ thuộc vào độ lớn áp lực và diện tích bị ép.",
                        "2. Công thức tính áp suất: $p = \\frac{F}{s}$ (trong đó $F$ là áp lực tính bằng N, $s$ là diện tích bị ép tính bằng $\\text{m}^2$).",
                        "3. Đơn vị đo áp suất: Pascal (Pa), $1\\text{ Pa} = 1\\text{ N/m}^2$, $\\text{N/cm}^2$, Bar, Atm.",
                        "4. Công dụng của việc làm tăng, giảm áp suất trong đời sống và kĩ thuật (làm sắc lưỡi dao, bản xích xe tăng, móng nhà rộng...)."
                    ])
                ],
                "matrix_focus": "Phân biệt áp lực và lực thông thường; vận dụng công thức $p = F/s$; giải thích các biện pháp làm tăng áp suất (tăng $F$, giảm $s$) hoặc giảm áp suất (tăng $s$, giảm $F$) trong thực tiễn."
            },
            {
                "id": 16,
                "title": "Áp suất chất lỏng. Áp suất khí quyển",
                "pages": "67 – 72",
                "headings": [
                    ("I. Áp suất chất lỏng", [
                        "1. Tác dụng của áp suất chất lỏng: chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật nhúng trong lòng nó; áp suất tăng theo độ sâu.",
                        "2. Sự truyền áp suất chất lỏng: Áp suất tác dụng vào chất lỏng được truyền nguyên vẹn theo mọi hướng (Nguyên lí Pascal). Ứng dụng trong máy nén thuỷ lực ($F_2/F_1 = S_2/S_1$), phanh dầu ô tô."
                    ]),
                    ("II. Áp suất khí quyển", [
                        "1. Sự tồn tại của áp suất khí quyển: Trái Đất được bao bọc bởi lớp khí quyển; không khí có trọng lượng nên gây áp suất lên mọi vật trên bề mặt Trái Đất theo mọi phương.",
                        "2. Một số ảnh hưởng và ứng dụng của áp suất khí quyển (ống giác hút chân không, bình xịt, hút nước bằng ống hút, bơm tiêm, áp kế đo độ cao)."
                    ])
                ],
                "matrix_focus": "Nêu đặc điểm áp suất chất lỏng và sự truyền áp suất (máy nén thuỷ lực); chứng minh sự tồn tại của áp suất khí quyển qua các hiện tượng thực tế và ứng dụng."
            },
            {
                "id": 17,
                "title": "Lực đẩy Archimedes",
                "pages": "73 – 75",
                "headings": [
                    ("I. Lực đẩy tác dụng lên vật đặt trong chất lỏng", [
                        "1. Hiện tượng: Vật nhúng trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng thẳng đứng từ dưới lên trên.",
                        "2. Điều kiện chìm, nổi của vật: So sánh độ lớn giữa trọng lực $P$ và lực đẩy Archimedes $F_A$ (vật chìm khi $P > F_A$, lơ lửng khi $P = F_A$, nổi khi $P < F_A$) hoặc so sánh trọng lượng riêng $d_{vật}$ và $d_{lỏng}$."
                    ]),
                    ("II. Độ lớn của lực đẩy Archimedes", [
                        "1. Thí nghiệm đo độ lớn lực đẩy Archimedes.",
                        "2. Định luật Archimedes: Lực đẩy Archimedes có độ lớn bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ: $F_A = d \\times V$ (trong đó $d$ là trọng lượng riêng chất lỏng $\\text{N/m}^3$, $V$ là thể tích phần chất lỏng bị vật chiếm chỗ $\\text{m}^3$)."
                    ])
                ],
                "matrix_focus": "Phát biểu định luật Archimedes; công thức $F_A = d \\cdot V$; giải thích điều kiện vật chìm, vật nổi, vật lơ lửng; tính toán độ lớn lực đẩy Archimedes."
            }
        ]
    },
    {
        "chapter_num": "IV",
        "chapter_title": "TÁC DỤNG LÀM QUAY CỦA LỰC",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 18,
                "title": "Tác dụng làm quay của lực. Moment lực",
                "pages": "76 – 78",
                "headings": [
                    ("I. Lực có thể làm quay vật", [
                        "Hiện tượng lực tác dụng vào vật có trục quay cố định làm vật quay quanh trục (mở cánh cửa sổ, vặn bu lông bằng cờ lê, tay lái xe)."
                    ]),
                    ("II. Moment lực", [
                        "1. Khái niệm moment lực: đại lượng đặc trưng cho tác dụng làm quay của lực quanh một trục hoặc một điểm.",
                        "2. Các yếu tố ảnh hưởng: Tác dụng làm quay càng lớn khi độ lớn của lực càng lớn và giá của lực càng cách xa trục quay."
                    ])
                ],
                "matrix_focus": "Nhận biết tác dụng làm quay của lực; định nghĩa moment lực; giải thích vì sao tay nắm cửa đặt xa bản lề, cờ lê cán dài dễ vặn bu lông hơn."
            },
            {
                "id": 19,
                "title": "Đòn bẩy và ứng dụng",
                "pages": "79 – 83",
                "headings": [
                    ("I. Tác dụng của đòn bẩy", [
                        "1. Điểm tựa ($O$), điểm tác dụng của lực nâng ($O_1$) và lực cản ($O_2$).",
                        "2. Tác dụng làm đổi hướng lực và cho lợi về lực khi khoảng cách từ điểm tựa đến giá của lực nâng lớn hơn khoảng cách đến giá của lực cản ($OO_1 > OO_2$)."
                    ]),
                    ("II. Các loại đòn bẩy", [
                        "1. Đòn bẩy loại 1: Điểm tựa $O$ nằm giữa điểm tác dụng hai lực (kéo cắt giấy, bập bênh, xà beng).",
                        "2. Đòn bẩy loại 2: Điểm tác dụng lực cản nằm giữa điểm tựa và điểm tác dụng lực nâng (xe rùa, kẹp hạt dẻ).",
                        "3. Đòn bẩy loại 3: Điểm tác dụng lực nâng nằm giữa điểm tựa và điểm tác dụng lực cản (đũa gắp, kẹp nhíp, cần câu cá)."
                    ]),
                    ("III. Ứng dụng của đòn bẩy", [
                        "1. Bơm nước bằng tay.",
                        "2. Đòn bẩy trong cơ thể người (khớp đầu - cổ, cánh tay gập, cẳng chân).",
                        "3. Đòn bẩy trong các bộ phận xe đạp (bàn đạp, phanh tay)."
                    ])
                ],
                "matrix_focus": "Xác định điểm tựa và các cánh tay đòn; phân loại 3 loại đòn bẩy; giải thích các ứng dụng thực tế của đòn bẩy trong đời sống, kĩ thuật và hệ vận động ở người."
            }
        ]
    },
    {
        "chapter_num": "V",
        "chapter_title": "ĐIỆN",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 20,
                "title": "Hiện tượng nhiễm điện do cọ xát",
                "pages": "84 – 87",
                "headings": [
                    ("I. Vật nhiễm điện", [
                        "1. Vật nhiễm điện (vật mang điện tích) có khả năng hút các vật khác nhẹ hoặc phóng tia lửa điện.",
                        "2. Hai loại điện tích: điện tích dương ($+$) và điện tích âm ($-$). Các điện tích cùng loại thì đẩy nhau, khác loại thì hút nhau."
                    ]),
                    ("II. Giải thích sơ lược về sự nhiễm điện do cọ xát", [
                        "1. Cấu tạo nguyên tử: hạt nhân mang điện dương, electron mang điện âm.",
                        "2. Sự dịch chuyển của electron: do cọ xát, electron có thể dịch chuyển từ vật này sang vật khác (vật nhận thêm electron nhiễm điện âm, vật mất bớt electron nhiễm điện dương).",
                        "3. Các hiện tượng thực tế: sấm sét khi trời mưa dông, điện nghiệm kiểm tra nhiễm điện, cánh quạt bám bụi."
                    ])
                ],
                "matrix_focus": "Mô tả hiện tượng nhiễm điện do cọ xát; nêu hai loại điện tích và tương tác hút - đẩy; giải thích cơ chế nhiễm điện dựa trên sự dịch chuyển electron."
            },
            {
                "id": 21,
                "title": "Dòng điện, nguồn điện",
                "pages": "88 – 90",
                "headings": [
                    ("I. Dòng điện và nguồn điện", [
                        "1. Khái niệm dòng điện: Dòng điện là dòng các điện tích dịch chuyển có hướng.",
                        "2. Nguồn điện: Thiết bị có khả năng cung cấp năng lượng điện để tạo ra và duy trì dòng điện trong mạch. Nguồn điện có hai cực: cực dương ($+$) và cực âm ($-$) (pin, acquy, máy phát điện)."
                    ]),
                    ("II. Vật dẫn điện và vật không dẫn điện", [
                        "1. Vật dẫn điện (chất dẫn điện): Cho dòng điện chạy qua, có nhiều hạt mang điện tự do (kim loại: đồng, nhôm, sắt; than chì; dung dịch muối, acid, base).",
                        "2. Vật không dẫn điện (vật cách điện / chất cách điện): Không cho dòng điện chạy qua, có rất ít hạt mang điện tự do (cao su, sứ, nhựa, thuỷ tinh, gỗ khô)."
                    ])
                ],
                "matrix_focus": "Nêu định nghĩa dòng điện, nguồn điện; phân biệt vật dẫn điện và vật cách điện trong các thiết bị thực tế (ruột dây điện, vỏ nhựa cách điện...)."
            },
            {
                "id": 22,
                "title": "Mạch điện đơn giản",
                "pages": "91 – 94",
                "headings": [
                    ("I. Mạch điện và các bộ phận của mạch điện", [
                        "1. Mạch điện gồm nguồn điện, dây nối, thiết bị tiêu thụ điện và công tắc (khoá K).",
                        "2. Quy ước chiều dòng điện: Chiều từ cực dương qua dây nối và các thiết bị điện tới cực âm của nguồn điện.",
                        "3. Kí hiệu các bộ phận và vẽ sơ đồ mạch điện (nguồn điện, bóng đèn, công tắc đóng/mở, ampe kế, vôn kế, điện trở, biến trở, chuông điện)."
                    ]),
                    ("II. Công dụng của cầu chì, cầu dao tự động, rơle, chuông điện", [
                        "1. Cầu chì và cầu dao tự động (Aptomat): Tự động ngắt mạch khi dòng điện quá tải hoặc chập mạch để bảo vệ an toàn cháy nổ.",
                        "2. Rơle (Relay): Thiết bị đóng ngắt mạch điện tự động nhờ tác dụng từ của dòng điện.",
                        "3. Chuông điện: Thiết bị phát ra âm thanh báo hiệu khi có dòng điện chạy qua."
                    ])
                ],
                "matrix_focus": "Quy ước chiều dòng điện; nhận biết và vẽ đúng sơ đồ mạch điện từ mạch thực tế hoặc ngược lại; nêu vai trò bảo vệ của cầu chì, aptomat, rơle."
            },
            {
                "id": 23,
                "title": "Tác dụng của dòng điện",
                "pages": "95 – 98",
                "headings": [
                    ("I. Tác dụng nhiệt", [
                        "Dòng điện đi qua mọi vật dẫn thông thường đều làm vật dẫn nóng lên (bàn là, nồi cơm điện, bếp điện, mỏ hàn, dây tóc bóng đèn)."
                    ]),
                    ("II. Tác dụng phát sáng", [
                        "Dòng điện có thể làm phát sáng đèn sợi đốt, đèn huỳnh quang, đèn LED, bút thử điện."
                    ]),
                    ("III. Tác dụng hoá học", [
                        "Dòng điện chạy qua dung dịch chất điện phân làm xảy ra phản ứng hoá học phân huỷ hoặc mạ kim loại (mạ đồng, mạ vàng, luyện nhôm, nạp điện cho acquy)."
                    ]),
                    ("IV. Tác dụng sinh lí", [
                        "Dòng điện chạy qua cơ thể người và động vật gây co giật các cơ, ngưng thở, nghẽn tim; ứng dụng trong y học (máy sốc tim, châm cứu điện) và các biện pháp phòng chống điện giật an toàn."
                    ])
                ],
                "matrix_focus": "Nhận biết 4 tác dụng chính của dòng điện (nhiệt, phát sáng, hoá học, sinh lí); lấy ví dụ minh hoạ ứng dụng thực tế và nêu quy tắc an toàn điện tránh tai nạn sinh lí."
            },
            {
                "id": 24,
                "title": "Cường độ dòng điện và hiệu điện thế",
                "pages": "99 – 101",
                "headings": [
                    ("I. Cường độ dòng điện", [
                        "1. Thí nghiệm về độ sáng bóng đèn tương ứng mức độ mạnh yếu của dòng điện.",
                        "2. Khái niệm cường độ dòng điện ($I$): đặc trưng cho độ mạnh yếu của dòng điện. Đơn vị đo là ampe (A) hoặc miliampe (mA). Dụng cụ đo là ampe kế (mắc nối tiếp)."
                    ]),
                    ("II. Hiệu điện thế", [
                        "1. Thí nghiệm về khả năng sinh ra dòng điện của nguồn điện.",
                        "2. Khái niệm hiệu điện thế ($U$): đặc trưng cho khả năng sinh ra dòng điện giữa hai điểm trong mạch điện. Đơn vị đo là vôn (V), milivôn (mV), kilovôn (kV). Dụng cụ đo là vôn kế (mắc song song)."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và đơn vị đo của cường độ dòng điện ($I$) và hiệu điện thế ($U$); cách sử dụng và quy tắc mắc ampe kế (nối tiếp), vôn kế (song song) đúng cực."
            },
            {
                "id": 25,
                "title": "Thực hành đo cường độ dòng điện và hiệu điện thế",
                "pages": "102 – 104",
                "headings": [
                    ("I. Chuẩn bị", [
                        "Bộ thí nghiệm điện: nguồn điện (pin), bóng đèn, ampe kế, vôn kế, công tắc, dây nối."
                    ]),
                    ("II. Cách tiến hành", [
                        "1. Đo cường độ dòng điện: mắc ampe kế nối tiếp với bóng đèn, đóng khoá K, đọc số chỉ trên các thang đo.",
                        "2. Đo hiệu điện thế: mắc vôn kế song song với hai đầu bóng đèn hoặc hai cực của nguồn điện, đọc và ghi kết quả.",
                        "3. Báo cáo thực hành: nhận xét cường độ dòng điện tại các vị trí trong đoạn mạch nối tiếp và hiệu điện thế giữa hai đầu bóng đèn."
                    ])
                ],
                "matrix_focus": "Thao tác mắc mạch đo cường độ dòng điện và hiệu điện thế; đọc thang đo thiết bị đo; nhận xét đặc điểm mạch nối tiếp."
            }
        ]
    },
    {
        "chapter_num": "VI",
        "chapter_title": "NHIỆT",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 26,
                "title": "Năng lượng nhiệt và nội năng",
                "pages": "105 – 108",
                "headings": [
                    ("I. Một số tính chất của phân tử, nguyên tử", [
                        "1. Các chất cấu tạo từ các nguyên tử, phân tử chuyển động không ngừng; nhiệt độ càng cao các phân tử chuyển động càng nhanh.",
                        "2. Giữa các nguyên tử, phân tử có lực hút và lực đẩy tương tác."
                    ]),
                    ("II. Khái niệm năng lượng nhiệt", [
                        "Năng lượng nhiệt của một vật là tổng động năng của các phân tử cấu tạo nên vật."
                    ]),
                    ("III. Khái niệm nội năng", [
                        "1. Động năng và thế năng của phân tử, nguyên tử.",
                        "2. Nội năng: tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.",
                        "3. Sự tăng, giảm nội năng: làm thay đổi nội năng bằng hai cách (thực hiện công hoặc truyền nhiệt)."
                    ])
                ],
                "matrix_focus": "Mối quan hệ giữa nhiệt độ và chuyển động nhiệt của phân tử; phân biệt năng lượng nhiệt và nội năng; hai cách làm thay đổi nội năng (truyền nhiệt, thực hiện công)."
            },
            {
                "id": 27,
                "title": "Thực hành đo năng lượng nhiệt bằng joulemeter",
                "pages": "109 – 111",
                "headings": [
                    ("I. Chuẩn bị", [
                        "Nhiệt lượng kế, nhiệt kế, joulemeter, dây điện trở nhiệt, nguồn điện, nước."
                    ]),
                    ("II. Cách tiến hành", [
                        "1. Mắc mạch điện và cài đặt joulemeter ở chế độ đo năng lượng (J).",
                        "2. Đun nóng lượng nước xác định, ghi nhận độ tăng nhiệt độ $\\Delta t$ tương ứng năng lượng nhiệt hiển thị trên joulemeter.",
                        "3. Xử lí số liệu và viết báo cáo thực hành."
                    ])
                ],
                "matrix_focus": "Các bước lắp ráp thí nghiệm đo năng lượng nhiệt; vận hành joulemeter; tính toán năng lượng nhiệt cần thiết để làm nóng một lượng nước."
            },
            {
                "id": 28,
                "title": "Sự truyền nhiệt",
                "pages": "112 – 117",
                "headings": [
                    ("I. Dẫn nhiệt", [
                        "1. Hiện tượng dẫn nhiệt: sự truyền nhiệt năng từ phần này sang phần khác của một vật hoặc giữa hai vật tiếp xúc.",
                        "2. Vật dẫn nhiệt tốt (kim loại: bạc, đồng, nhôm) và vật cách nhiệt tốt / dẫn nhiệt kém (gỗ, xốp, không khí, thuỷ tinh)."
                    ]),
                    ("II. Đối lưu", [
                        "1. Thí nghiệm về dòng đối lưu trong chất lỏng và chất khí.",
                        "2. Sự truyền nhiệt bằng đối lưu: sự truyền nhiệt bằng các dòng chất lỏng hoặc chất khí chuyển động đối lưu (dòng chất nóng đi lên, dòng chất lạnh chìm xuống)."
                    ]),
                    ("III. Bức xạ nhiệt", [
                        "1. Thí nghiệm về sự truyền nhiệt trong chân không.",
                        "2. Sự truyền nhiệt bằng bức xạ nhiệt: sự truyền nhiệt bằng các tia nhiệt đi thẳng; có thể truyền trong chân không; vật có bề mặt đen, xù xì hấp thụ bức xạ nhiệt tốt hơn bề mặt trắng, nhẵn.",
                        "3. Hiệu ứng nhà kính: cơ chế giữ nhiệt của khí quyển Trái Đất và tác động của biến đổi khí hậu toàn cầu."
                    ])
                ],
                "matrix_focus": "Phân biệt 3 hình thức truyền nhiệt (dẫn nhiệt ở chất rắn, đối lưu ở chất lỏng/khí, bức xạ nhiệt truyền được trong chân không); giải thích cấu tạo phích nước (bình thuỷ) và hiệu ứng nhà kính."
            },
            {
                "id": 29,
                "title": "Sự nở vì nhiệt",
                "pages": "118 – 122",
                "headings": [
                    ("I. Sự nở vì nhiệt của chất rắn", [
                        "Chất rắn nở ra khi nóng lên, co lại khi lạnh đi; các chất rắn khác nhau nở vì nhiệt khác nhau (nhôm > đồng > sắt)."
                    ]),
                    ("II. Sự nở vì nhiệt của chất lỏng", [
                        "Chất lỏng nở ra khi nóng lên, co lại khi lạnh đi; các chất lỏng khác nhau nở vì nhiệt khác nhau."
                    ]),
                    ("III. Sự nở vì nhiệt của chất khí", [
                        "Chất khí nở ra khi nóng lên, co lại khi lạnh đi; các chất khí khác nhau nở vì nhiệt giống nhau. So sánh độ nở vì nhiệt: Chất khí > Chất lỏng > Chất rắn."
                    ]),
                    ("IV. Công dụng và tác hại của sự nở vì nhiệt", [
                        "1. Công dụng: Hoạt động của nhiệt kế, rơle nhiệt sử dụng băng kép (hai thanh kim loại có độ giãn nở nhiệt khác nhau ghép chặt).",
                        "2. Tác hại: Tạo ra lực rất lớn làm biến dạng đường ray xe lửa, nứt cầu cống, nổ vỏ lốp xe khi trời nắng nóng; biện pháp khắc phục (khe hở co giãn ở nhịp cầu, đường ray)."
                    ])
                ],
                "matrix_focus": "So sánh sự nở vì nhiệt giữa rắn, lỏng, khí; nguyên lí hoạt động của băng kép; giải thích các hiện tượng thực tế và biện pháp khắc phục tác hại sự nở vì nhiệt (khe co giãn đường ray, gối đỡ cầu)."
            }
        ]
    },
    {
        "chapter_num": "VII",
        "chapter_title": "SINH HỌC CƠ THỂ NGƯỜI",
        "domain": "Vật sống (Sinh học)",
        "lessons": [
            {
                "id": 30,
                "title": "Khái quát về cơ thể người",
                "pages": "123 – 124",
                "headings": [
                    ("I. Khái quát về cơ thể người", [
                        "Cấu tạo cơ thể người gồm 3 phần: đầu, thân và các chi (tay, chân).",
                        "Các khoang cơ thể: khoang ngực và khoang bụng ngăn cách bởi cơ hoành."
                    ]),
                    ("II. Vai trò của các cơ quan và hệ cơ quan trong cơ thể người", [
                        "Các hệ cơ quan chính: hệ vận động, hệ tiêu hoá, hệ tuần hoàn, hệ hô hấp, hệ bài tiết, hệ thần kinh, hệ nội tiết, hệ sinh dục.",
                        "Mối quan hệ phối hợp hoạt động nhịp nhàng giữa các hệ cơ quan dưới sự điều khiển của hệ thần kinh và hệ nội tiết."
                    ])
                ],
                "matrix_focus": "Nhận biết các phần và khoang cơ thể; kể tên các hệ cơ quan chính và nêu vai trò khái quát đảm bảo tính thống nhất của cơ thể người."
            },
            {
                "id": 31,
                "title": "Hệ vận động ở người",
                "pages": "125 – 127",
                "headings": [
                    ("I. Cấu tạo và chức năng của hệ vận động", [
                        "1. Cấu tạo của hệ vận động: bộ xương (xương đầu, xương thân, xương chi; các khớp xương: khớp bất động, khớp bán động, khớp động) và hệ cơ (cơ bắp bám xương, cơ chế co duỗi cơ đối kháng).",
                        "2. Chức năng của hệ vận động: tạo bộ khung nâng đỡ, bảo vệ các nội quan và thực hiện cử động, di chuyển."
                    ]),
                    ("II. Một số bệnh, tật liên quan đến hệ vận động", [
                        "1. Tật cong vẹo cột sống (nguyên nhân do tư thế ngồi sai, mang vác lệch; biện pháp phòng tránh).",
                        "2. Bệnh loãng xương (nguyên nhân do thiếu hụt calcium, vitamin D, lão hoá; cách phòng chống)."
                    ]),
                    ("III. Ý nghĩa của tập thể dục, thể thao", [
                        "Ý nghĩa tăng cường lưu thông máu, phát triển cơ bắp, tăng độ dẻo dai của xương khớp và lựa chọn phương pháp tập luyện phù hợp lứa tuổi."
                    ]),
                    ("IV. Thực hành: Sơ cứu và băng bó khi người khác bị gãy xương", [
                        "1. Mục tiêu và chuẩn bị (nẹp gỗ/tre, băng gạc, dây buộc rộng bản).",
                        "2. Các bước tiến hành sơ cứu gãy xương cẳng tay.",
                        "3. Những lưu ý an toàn khi cố định nẹp và chăm sóc nạn nhân."
                    ])
                ],
                "matrix_focus": "Mô tả cấu tạo bộ xương và hệ cơ; nguyên nhân và cách phòng chống tật cong vẹo cột sống, loãng xương; quy trình sơ cứu băng bó cố định gãy xương."
            },
            {
                "id": 32,
                "title": "Dinh dưỡng và tiêu hoá ở người",
                "pages": "128 – 134",
                "headings": [
                    ("I. Khái niệm chất dinh dưỡng và dinh dưỡng", [
                        "Phân biệt chất dinh dưỡng (cacbohydrate, lipid, protein, vitamin, chất khoáng, nước) và dinh dưỡng (quá trình thu nhận, biến đổi và sử dụng chất dinh dưỡng)."
                    ]),
                    ("II. Tiêu hoá ở người", [
                        "1. Cấu tạo và chức năng của hệ tiêu hoá: ống tiêu hoá (khoang miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn) và tuyến tiêu hoá (tuyến nước bọt, tuyến gan, tuyến mật, tuyến tuỵ, tuyến ruột).",
                        "2. Quá trình tiêu hoá ở người: biến đổi cơ học (nhai, đảo trộn, nghiền) và biến đổi hoá học (nhờ enzyme tiêu hoá phân giải chất phức tạp thành chất đơn giản hấp thụ tại ruột non)."
                    ]),
                    ("III. Một số bệnh về đường tiêu hoá", [
                        "1. Bệnh sâu răng (cơ chế hình thành mảng bám vi khuẩn tạo acid phá huỷ men răng, ngà răng; cách chăm sóc răng miệng).",
                        "2. Bệnh viêm loét dạ dày – tá tràng (nguyên nhân do vi khuẩn Helicobacter pylori, stress, chế độ ăn uống không điều độ; cách phòng tránh)."
                    ]),
                    ("IV. Chế độ dinh dưỡng ở người", [
                        "1. Khái niệm khẩu phần ăn hợp lí: đủ năng lượng và cân đối 4 nhóm chất dinh dưỡng.",
                        "2. Xây dựng khẩu phần ăn theo nhu cầu lứa tuổi học sinh THCS."
                    ]),
                    ("V. An toàn vệ sinh thực phẩm", [
                        "Khái niệm an toàn thực phẩm; ngộ độc thực phẩm; nguyên nhân gây mất an toàn (hoá chất độc hại, vi sinh vật, bảo quản sai cách); biện pháp bảo quản và chế biến thực phẩm an toàn."
                    ]),
                    ("VI. Dự án: Điều tra một số bệnh đường tiêu hoá và vệ sinh an toàn thực phẩm", [
                        "Mục tiêu, lập phiếu điều tra, thu thập số liệu và đề xuất giải pháp tại trường học hoặc địa phương."
                    ])
                ],
                "matrix_focus": "Cấu tạo ống và tuyến tiêu hoá; phân biệt tiêu hoá cơ học và tiêu hoá hoá học; hấp thụ chất dinh dưỡng ở ruột non; nguyên nhân bệnh sâu răng, viêm loét dạ dày; nguyên tắc xây dựng khẩu phần ăn và an toàn vệ sinh thực phẩm."
            },
            {
                "id": 33,
                "title": "Máu và hệ tuần hoàn của cơ thể người",
                "pages": "135 – 141",
                "headings": [
                    ("I. Máu", [
                        "1. Các thành phần của máu: Huyết tương (chiếm 55%, vận chuyển chất dinh dưỡng, hormone, chất thải) và Tế bào máu (chiếm 45% gồm hồng cầu vận chuyển $O_2$ và $CO_2$, bạch cầu bảo vệ cơ thể, tiểu cầu tham gia đông máu).",
                        "2. Miễn dịch và vaccine: Cơ chế miễn dịch tự nhiên và nhân tạo; vai trò tiêm chủng vaccine kích thích tạo kháng thể đặc hiệu.",
                        "3. Nhóm máu và truyền máu: Hệ nhóm máu ABO (A, B, AB, O); kháng nguyên trên hồng cầu và kháng thể trong huyết tương; nguyên tắc truyền máu an toàn (tránh hiện tượng ngưng kết hồng cầu)."
                    ]),
                    ("II. Hệ tuần hoàn", [
                        "1. Cấu tạo của hệ tuần hoàn: Tim (4 ngăn: 2 tâm nhĩ, 2 tâm thất) và Hệ mạch (động mạch, mao mạch, tĩnh mạch).",
                        "2. Vòng tuần hoàn lớn (vận chuyển máu giàu $O_2$ nuôi cơ thể) và Vòng tuần hoàn nhỏ (vận chuyển máu lên phổi trao đổi khí)."
                    ]),
                    ("III. Một số bệnh về máu và tim mạch", [
                        "Bệnh thiếu máu, bệnh huyết áp cao, bệnh xơ vữa động mạch (nguyên nhân, triệu chứng và biện pháp phòng tránh)."
                    ]),
                    ("IV. Thực hành: Sơ cứu người bị chảy máu, đột quỵ", [
                        "Kĩ thuật băng ép cầm máu tĩnh mạch/mao mạch; kĩ thuật garô cầm máu động mạch; nhận biết dấu hiệu đột quỵ (FAST) và xử trí ban đầu."
                    ]),
                    ("V. Dự án: Điều tra bệnh về máu, tim mạch và phong trào hiến máu nhân đạo", [
                        "Tìm hiểu ý nghĩa nhân văn và điều kiện tham gia phong trào hiến máu nhân đạo."
                    ])
                ],
                "matrix_focus": "Nêu thành phần chức năng của máu; cơ chế miễn dịch và vaccine; sơ đồ truyền máu ABO; cấu tạo tim và đường đi của 2 vòng tuần hoàn; nguyên nhân huyết áp cao, xơ vữa động mạch; kĩ năng sơ cứu cầm máu."
            },
            {
                "id": 34,
                "title": "Hệ hô hấp ở người",
                "pages": "142 – 145",
                "headings": [
                    ("I. Cấu tạo và chức năng của hệ hô hấp", [
                        "1. Cấu tạo của hệ hô hấp: Đường dẫn khí (mũi, họng, thanh quản, khí quản, phế quản) làm ấm, làm ẩm, sạch không khí và Hai lá phổi (chứa hàng triệu phế nang bao bọc bởi mạng mao mạch dày đặc).",
                        "2. Chức năng của hệ hô hấp: Thông khí ở phổi (hít vào - thở ra nhờ sự co dãn cơ liên sườn và cơ hoành) và Trao đổi khí (tại phế nang và tại tế bào theo cơ chế khuếch tán)."
                    ]),
                    ("II. Một số bệnh về phổi, đường hô hấp", [
                        "1. Viêm đường hô hấp (viêm họng, viêm phế quản do virus, vi khuẩn).",
                        "2. Bệnh viêm phổi và bệnh lao phổi (triệu chứng, con đường lây truyền và cách phòng chống)."
                    ]),
                    ("III. Thuốc lá và tác hại của khói thuốc lá", [
                        "Thành phần khói thuốc (nicotine, khí CO, hắc ín/tar); tác hại gây ung thư phổi, bệnh phổi tắc nghẽn mạn tính (COPD), xơ vữa mạch máu đối với người hút chủ động và thụ động."
                    ]),
                    ("IV. Thực hành: Hô hấp nhân tạo, cấp cứu người đuối nước", [
                        "1. Phương pháp hà hơi thổi ngạt.",
                        "2. Phương pháp ép tim ngoài lồng ngực kết hợp thổi ngạt theo chu kì 30 lần ép : 2 lần thổi."
                    ])
                ],
                "matrix_focus": "Cấu tạo đường dẫn khí và phế nang; cơ chế trao đổi khí ở phổi và tế bào; tác hại của khói thuốc lá; quy trình cấp cứu đuối nước và hô hấp nhân tạo."
            },
            {
                "id": 35,
                "title": "Hệ bài tiết ở người",
                "pages": "146 – 149",
                "headings": [
                    ("I. Cấu tạo và chức năng của hệ bài tiết", [
                        "1. Khái niệm bài tiết: Quá trình lọc và thải các chất cặn bã, chất độc hại ra khỏi cơ thể (qua phổi, da, thận).",
                        "2. Cấu tạo của hệ bài tiết nước tiểu: Hai quả thận, hai ống dẫn nước tiểu, bóng đái (bàng quang) và ống đái.",
                        "3. Đơn vị chức năng của thận (nephron): Cầu thận, nang cầu thận và ống thận; quá trình tạo thành nước tiểu (lọc máu ở cầu thận, hấp thụ lại và bài tiết tiếp ở ống thận)."
                    ]),
                    ("II. Một số bệnh về hệ bài tiết", [
                        "1. Bệnh sỏi thận (nguyên nhân do lắng đọng muối khoáng calcium, oxalate do uống ít nước, ăn mặn).",
                        "2. Bệnh viêm cầu thận và suy thận (nguyên nhân, hậu quả đối với cơ thể)."
                    ]),
                    ("III. Một số thành tựu ghép thận, chạy thận nhân tạo", [
                        "1. Ghép thận: Phẫu thuật thay thế thận suy bằng thận lành từ người hiến tặng.",
                        "2. Chạy thận nhân tạo: Sử dụng máy lọc máu ngoài cơ thể để loại bỏ chất độc khi thận mất chức năng; ý nghĩa nhân đạo của hiến tạng."
                    ]),
                    ("IV. Dự án: Điều tra một số bệnh về thận trong trường học hoặc địa phương", [
                        "Tìm hiểu thói quen uống nước, nhịn tiểu và các biện pháp bảo vệ hệ bài tiết nước tiểu."
                    ])
                ],
                "matrix_focus": "Cấu tạo nephron và cơ chế tạo thành nước tiểu; nguyên nhân gây sỏi thận, suy thận; nguyên tắc bảo vệ hệ bài tiết (uống đủ nước, không ăn mặn, không nhịn tiểu); thành tựu ghép thận, chạy thận nhân tạo."
            },
            {
                "id": 36,
                "title": "Điều hoà môi trường trong của cơ thể người",
                "pages": "150 – 151",
                "headings": [
                    ("I. Môi trường trong của cơ thể", [
                        "Thành phần môi trường trong: Máu, nước mô (dịch mô) và bạch huyết; vai trò giúp tế bào trao đổi chất thường xuyên với môi trường ngoài."
                    ]),
                    ("II. Cân bằng môi trường trong của cơ thể", [
                        "1. Khái niệm cân bằng nội môi: Duy trì sự ổn định các điều kiện lí - hoá của môi trường trong cơ thể (nhiệt độ, huyết áp, pH, nồng độ glucose, nồng độ muối khoáng...).",
                        "2. Cơ chế điều hoà cân bằng nội môi: Bộ phận tiếp nhận kích thích -> Bộ phận điều khiển (thần kinh, nội tiết) -> Bộ phận thực hiện (gan, thận, tim, phổi...).",
                        "3. Hậu quả khi mất cân bằng môi trường trong (bệnh tiểu đường khi glucose máu tăng cao, rối loạn huyết áp, mất nước...)."
                    ])
                ],
                "matrix_focus": "Nêu các thành phần môi trường trong cơ thể; định nghĩa cân bằng nội môi; sơ đồ cơ chế điều hoà và vai trò của gan, thận trong duy trì áp suất thẩm thấu, đường huyết."
            },
            {
                "id": 37,
                "title": "Hệ thần kinh và các giác quan ở người",
                "pages": "152 – 156",
                "headings": [
                    ("I. Hệ thần kinh", [
                        "1. Cấu tạo và chức năng của hệ thần kinh: Bộ phận trung ương (não bộ gồm đại não, não trung gian, tiểu não, trụ não và tuỷ sống) và Bộ phận ngoại biên (các dây thần kinh và hạch thần kinh).",
                        "Phân chia theo chức năng: Hệ thần kinh vận động (điều khiển cơ vân có ý thức) và Hệ thần kinh sinh dưỡng (điều khiển cơ trơn, cơ tim, nội quan không theo ý thức).",
                        "2. Một số bệnh về thần kinh và chất gây nghiện: Bệnh mất ngủ, Parkinson, tai biến mạch máu não; tác hại của rượu bia, ma tuý, thuốc lắc làm thoái hoá neuron thần kinh, huỷ hoại nhân cách."
                    ]),
                    ("II. Các giác quan", [
                        "1. Thị giác: Cấu tạo mắt (màng cứng, màng mạch, màng lưới/võng mạc chứa tế bào thụ cảm thị giác, thể thuỷ tinh); cơ chế tạo ảnh trên màng lưới; tật khúc xạ (cận thị, viễn thị, loạn thị) và bệnh về mắt (đau mắt đỏ, đục thuỷ tinh thể); vệ sinh thị giác học đường.",
                        "2. Thính giác: Cấu tạo tai (tai ngoài: vành tai, ống tai; tai giữa: màng nhĩ, chuỗi xương tai, vòi tai; tai trong: ốc tai chứa tế bào thụ cảm thính giác); đường truyền âm thanh; vệ sinh tai và bảo vệ thính giác chống ô nhiễm tiếng ồn."
                    ])
                ],
                "matrix_focus": "Cấu tạo hệ thần kinh trung ương và ngoại biên; chức năng điều khiển của não bộ; cấu tạo mắt, cơ chế tạo ảnh và cách khắc phục cận thị/viễn thị; cấu tạo tai và cơ chế nghe; tác hại của chất gây nghiện đối với hệ thần kinh."
            },
            {
                "id": 38,
                "title": "Hệ nội tiết ở người",
                "pages": "157 – 159",
                "headings": [
                    ("I. Các tuyến nội tiết trong cơ thể người", [
                        "Đặc điểm tuyến nội tiết: không có ống dẫn, chất tiết là hormone ngấm thẳng vào máu đến cơ quan đích.",
                        "Các tuyến nội tiết chính: 1. Tuyến yên (tuyến chủ đạo điều hoà hoạt động các tuyến khác); 2. Tuyến giáp (tiết thyroxine điều hoà trao đổi chất và sinh trưởng); 3. Tuyến tuỵ (tuyến pha: tiết insulin làm giảm glucose máu và glucagon làm tăng glucose máu); 4. Tuyến trên thận (tiết adrenaline điều hoà tim mạch, huyết áp trong trạng thái khẩn cấp); 5. Tuyến sinh dục (tinh hoàn tiết testosterone ở nam, buồng trứng tiết estrogen ở nữ)."
                    ]),
                    ("II. Một số bệnh liên quan đến hệ nội tiết", [
                        "1. Bệnh đái tháo đường (nguyên nhân do thiếu hụt hoặc giảm hiệu lực insulin dẫn đến đường huyết tăng cao; triệu chứng và cách kiểm soát).",
                        "2. Bệnh bướu cổ do thiếu iodine (nguyên nhân do thiếu hụt iodine trong khẩu phần ăn làm tuyến giáp phì đại; biện pháp dùng muối iod)."
                    ])
                ],
                "matrix_focus": "Phân biệt tuyến nội tiết và tuyến ngoại tiết; kể tên và nêu vai trò các tuyến nội tiết chính (tuyến yên, tuyến giáp, tuyến tuỵ, tuyến sinh dục); cơ chế điều hoà đường huyết của insulin và glucagon; nguyên nhân bệnh tiểu đường, bướu cổ."
            },
            {
                "id": 39,
                "title": "Da và điều hoà thân nhiệt ở người",
                "pages": "160 – 164",
                "headings": [
                    ("I. Da người", [
                        "1. Cấu tạo của da: 3 lớp gồm Lớp biểu bì (tầng sừng, tầng tế bào sống chứa hạt sắc tố melanin), Lớp bì (thụ quan, tuyến mồ hôi, tuyến nhờn, cơ co chân lông, mạch máu, sợi mô liên kết) và Lớp mỡ dưới da (cách nhiệt, đệm cơ học).",
                        "2. Chức năng của da: Bảo vệ cơ thể, điều hoà thân nhiệt, tiếp nhận kích thích xúc giác, bài tiết và dự trữ mỡ.",
                        "3. Bệnh về da và bảo vệ da: Bệnh mụn trứng cá, hắc lào, lang ben, bỏng da; biện pháp giữ gìn vệ sinh da, trang điểm an toàn và thành tựu ghép da y học."
                    ]),
                    ("II. Điều hoà thân nhiệt ở người", [
                        "1. Khái niệm thân nhiệt: Nhiệt độ cơ thể người bình thường ổn định quanh mức $36,5^\\circ\\text{C} - 37^\\circ\\text{C}$; ý nghĩa và cách đo thân nhiệt.",
                        "2. Vai trò và cơ chế duy trì thân nhiệt: Sự cân bằng giữa quá trình sinh nhiệt (chuyển hoá ở cơ, gan) và toả nhiệt (qua da, toát mồ hôi, dãn/co mạch máu, hô hấp); vai trò trung tâm điều nhiệt ở não.",
                        "3. Phương pháp phòng chống nóng, lạnh: Chống say nắng, chống cảm lạnh, giữ ấm mùa đông, mặc đồ thoáng mát mùa hè, cung cấp đủ nước."
                    ])
                ],
                "matrix_focus": "Mô tả 3 lớp cấu tạo và chức năng của da; cơ chế điều hoà thân nhiệt khi trời nóng (toát mồ hôi, dãn mạch máu) và trời lạnh (co mạch, run sinh nhiệt); phương pháp xử trí khi bị sốt, cảm lạnh, say nắng."
            },
            {
                "id": 40,
                "title": "Sinh sản ở người",
                "pages": "165 – 169",
                "headings": [
                    ("I. Hệ sinh dục", [
                        "1. Cơ quan sinh dục nam: Tinh hoàn (sản xuất tinh trùng và tiết testosterone), mào tinh, ống dẫn tinh, túi tinh, tuyến tiền liệt, dương vật.",
                        "2. Cơ quan sinh dục nữ: Buồng trứng (sản xuất trứng và tiết estrogen, progesterone), ống dẫn trứng (vòi fallop), tử cung (nơi thai làm tổ), âm đạo."
                    ]),
                    ("II. Thụ tinh và thụ thai", [
                        "1. Thụ tinh: Quá trình tinh trùng kết hợp với tế bào trứng tạo thành hợp tử, thường diễn ra tại $1/3$ phía ngoài ống dẫn trứng.",
                        "2. Thụ thai: Hợp tử di chuyển về tử cung, phân chia thành phôi và bám vào lớp niêm mạc tử cung để làm tổ và phát triển thành thai nhi."
                    ]),
                    ("III. Hiện tượng kinh nguyệt và các biện pháp tránh thai", [
                        "1. Hiện tượng kinh nguyệt: Chu kì rụng trứng (khoảng 28 - 30 ngày); khi trứng không thụ tinh thì thể vàng teo, lớp niêm mạc tử cung bong ra kèm máu thoát ra ngoài.",
                        "2. Các biện pháp tránh thai: Sử dụng bao cao su, thuốc tránh thai, đặt vòng, tính ngày rụng trứng, triệt sản; ý nghĩa của việc tránh mang thai ngoài ý muốn ở lứa tuổi vị thành niên."
                    ]),
                    ("IV. Một số bệnh lây truyền qua đường sinh dục và bảo vệ sức khoẻ sinh sản", [
                        "1. Bệnh lây qua đường tình dục (STDs): HIV/AIDS, giang mai, lậu, viêm gan B (con đường lây truyền và cách phòng tránh).",
                        "2. Bảo vệ sức khoẻ sinh sản vị thành niên: Chăm sóc vệ sinh tuổi dậy thì, trang bị kĩ năng sống, kiến thức giới tính an toàn, phòng chống xâm hại tình dục."
                    ])
                ],
                "matrix_focus": "Cấu tạo chức năng hệ sinh dục nam/nữ; phân biệt thụ tinh và thụ thai; giải thích hiện tượng kinh nguyệt; kể tên và nêu cơ chế các biện pháp tránh thai an toàn; phòng tránh các bệnh lây truyền qua đường tình dục."
            }
        ]
    },
    {
        "chapter_num": "VIII",
        "chapter_title": "SINH VẬT VÀ MÔI TRƯỜNG",
        "domain": "Trái Đất và bầu trời / Vật sống (Sinh thái học)",
        "lessons": [
            {
                "id": 41,
                "title": "Môi trường và các nhân tố sinh thái",
                "pages": "170 – 173",
                "headings": [
                    ("I. Môi trường sống", [
                        "1. Khái niệm môi trường sống: Nơi sinh sống của sinh vật bao gồm tất cả những gì bao quanh sinh vật có tác động trực tiếp hoặc gián tiếp đến sự tồn tại của chúng.",
                        "2. Các loại môi trường sống chủ yếu: Môi trường cạn (trên cạn), môi trường nước (nước ngọt, nước mặn, nước lợ), môi trường đất và môi trường sinh vật."
                    ]),
                    ("II. Nhân tố sinh thái", [
                        "1. Khái niệm: Các nhân tố môi trường có tác động đến sinh vật.",
                        "2. Phân loại nhân tố sinh thái: Nhân tố vô sinh (ánh sáng, nhiệt độ, độ ẩm, đất, nước...) và Nhân tố hữu sinh (thực vật, động vật, vi sinh vật và nhân tố con người tác động có ý thức).",
                        "3. Ảnh hưởng của nhân tố sinh thái (ánh sáng, nhiệt độ) đến hình thái, sinh lí và tập tính của sinh vật (cây ưa sáng, cây ưa bóng, động vật hằng nhiệt, biến nhiệt)."
                    ]),
                    ("III. Giới hạn sinh thái", [
                        "Khái niệm giới hạn sinh thái: Khoảng giá trị của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển ổn định (điểm cực thuận, giới hạn dưới, giới hạn trên, khoảng chống chịu)."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và phân loại 4 loại môi trường sống; phân biệt nhân tố vô sinh và hữu sinh; đọc đồ thị giới hạn sinh thái và xác định khoảng thuận lợi, khoảng chống chịu của loài."
            },
            {
                "id": 42,
                "title": "Quần thể sinh vật",
                "pages": "174 – 176",
                "headings": [
                    ("I. Khái niệm quần thể sinh vật", [
                        "Định nghĩa: Tập hợp các cá thể cùng loài, cùng sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo ra thế hệ mới hữu thụ."
                    ]),
                    ("II. Các đặc trưng cơ bản của quần thể", [
                        "1. Kích thước quần thể (số lượng cá thể hoặc khối lượng, năng lượng tích luỹ trong quần thể).",
                        "2. Mật độ cá thể trong quần thể (số lượng cá thể trên một đơn vị diện tích hoặc thể tích sống; đặc trưng quan trọng nhất).",
                        "3. Tỉ lệ giới tính (tỉ lệ giữa số cá thể đực và cá thể cái).",
                        "4. Nhóm tuổi (nhóm trước sinh sản, nhóm sinh sản, nhóm sau sinh sản).",
                        "5. Phân bố cá thể trong quần thể: Phân bố theo nhóm (phổ biến nhất), phân bố đồng đều và phân bố ngẫu nhiên."
                    ]),
                    ("III. Biện pháp bảo vệ quần thể", [
                        "Bảo vệ nơi sống của quần thể, khai thác hợp lí động thực vật quý hiếm, xây dựng khu bảo tồn thiên nhiên, vườn quốc gia."
                    ])
                ],
                "matrix_focus": "Định nghĩa và lấy ví dụ đúng về quần thể sinh vật; phân tích 5 đặc trưng cơ bản của quần thể (mật độ, tỉ lệ đực/cái, nhóm tuổi, phân bố, kích thước); đề xuất biện pháp bảo vệ quần thể có nguy cơ tuyệt chủng."
            },
            {
                "id": 43,
                "title": "Quần xã sinh vật",
                "pages": "177 – 179",
                "headings": [
                    ("I. Khái niệm quần xã sinh vật", [
                        "Định nghĩa: Tập hợp các quần thể sinh vật thuộc nhiều loài khác nhau, cùng sống trong một không gian và thời gian xác định, có mối quan hệ gắn bó hữu cơ với nhau như một thể thống nhất."
                    ]),
                    ("II. Một số đặc trưng cơ bản của quần xã", [
                        "1. Độ phong phú về loài (độ đa dạng về số lượng loài và số cá thể của mỗi loài trong quần xã).",
                        "2. Thành phần loài: Loài ưu thế (loài đóng vai trò quan trọng, số lượng cá thể lớn, sinh khối cao) và Loài đặc trưng (loài chỉ có ở một quần xã hoặc có số lượng nhiều hơn hẳn các loài khác)."
                    ]),
                    ("III. Bảo vệ đa dạng sinh học trong quần xã", [
                        "1. Bảo vệ môi trường sống của các loài sinh vật.",
                        "2. Cấm săn bắt buôn bán động vật hoang dã nguy cấp.",
                        "3. Trồng rừng ngập mặn ven biển, phòng chống cháy rừng.",
                        "4. Nâng cao ý thức cộng đồng về bảo tồn đa dạng sinh học."
                    ])
                ],
                "matrix_focus": "Phân biệt quần thể và quần xã sinh vật; nêu đặc trưng về thành phần loài (loài ưu thế, loài đặc trưng) và độ phong phú; trình bày các biện pháp bảo vệ đa dạng sinh học trong quần xã."
            },
            {
                "id": 44,
                "title": "Hệ sinh thái",
                "pages": "180 – 184",
                "headings": [
                    ("I. Hệ sinh thái", [
                        "1. Khái niệm hệ sinh thái: Hệ thống hoàn chỉnh gồm quần xã sinh vật và sinh cảnh (môi trường vô sinh nơi quần xã sống), trong đó các sinh vật tương tác lẫn nhau và tác động qua lại với sinh cảnh.",
                        "2. Thành phần cấu trúc của hệ sinh thái: Thành phần vô sinh (khí hậu, đất, nước, xác sinh vật) và Thành phần hữu sinh (Sinh vật sản xuất: thực vật, tảo; Sinh vật tiêu thụ: động vật ăn thực vật, động vật ăn thịt; Sinh vật phân giải: vi khuẩn, nấm, giun đất).",
                        "3. Các kiểu hệ sinh thái: Hệ sinh thái tự nhiên (trên cạn: rừng nhiệt đới, sa mạc; dưới nước: nước ngọt, biển) và Hệ sinh thái nhân tạo (đồng ruộng, đô thị, hồ cá)."
                    ]),
                    ("II. Trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái", [
                        "1. Chuỗi thức ăn: Dãy gồm nhiều loài sinh vật có mối quan hệ dinh dưỡng với nhau, mỗi loài là một mắt xích (thức ăn của mắt xích phía sau và ăn mắt xích phía trước).",
                        "2. Lưới thức ăn: Tập hợp các chuỗi thức ăn có các mắt xích chung trong một hệ sinh thái.",
                        "3. Tháp sinh thái (tháp số lượng, tháp sinh khối, tháp năng lượng) và dòng năng lượng một chiều trong hệ sinh thái."
                    ]),
                    ("III. Bảo vệ các hệ sinh thái", [
                        "Bảo vệ các hệ sinh thái rừng, hệ sinh thái biển, hệ sinh thái nông nghiệp tại Việt Nam."
                    ]),
                    ("IV. Thực hành: Điều tra thành phần quần xã sinh vật trong một hệ sinh thái", [
                        "Quan sát, ghi chép thành phần loài, lập chuỗi và lưới thức ăn trong hệ sinh thái tại địa phương."
                    ])
                ],
                "matrix_focus": "Nêu cấu trúc 2 thành phần của hệ sinh thái; phân biệt 3 nhóm sinh vật (sản xuất, tiêu thụ, phân giải); vẽ chuỗi và lưới thức ăn từ dữ liệu cho trước; nêu quy luật tháp sinh thái và bảo vệ hệ sinh thái."
            },
            {
                "id": 45,
                "title": "Sinh quyển",
                "pages": "185 – 187",
                "headings": [
                    ("I. Khái niệm sinh quyển", [
                        "Định nghĩa: Toàn bộ sinh vật sống trên Trái Đất cùng với các nhân tố vô sinh của môi trường tạo nên sinh quyển.",
                        "Giới hạn sinh quyển: Bao gồm toàn bộ tầng đối lưu của khí quyển, thuỷ quyển và phần trên thạch quyển (lớp đất đá bề mặt)."
                    ]),
                    ("II. Các khu sinh học chủ yếu", [
                        "1. Khu sinh học trên cạn: Đồng rêu hàn đới (tundra), rừng lá kim phương Bắc (taiga), rừng rụng lá ôn đới, thảo nguyên ôn đới, xavan đồng cỏ nhiệt đới, rừng nhiệt đới ẩm, sa mạc và bán sa mạc.",
                        "2. Khu sinh học nước ngọt: Vùng nước đứng (ao, hồ, đầm lầy) và Vùng nước chảy (sông, suối).",
                        "3. Khu sinh học biển: Vùng ven bờ (rạn san hô, rừng ngập mặn) và Vùng khơi (tầng mặt, tầng giữa, tầng đáy biển sâu)."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm và phạm vi giới hạn của sinh quyển; nhận biết các khu sinh học trên cạn (tundra, taiga, rừng rụng lá, xavan, rừng nhiệt đới) và khu sinh học dưới nước."
            },
            {
                "id": 46,
                "title": "Cân bằng tự nhiên",
                "pages": "188 – 190",
                "headings": [
                    ("I. Khái niệm cân bằng tự nhiên", [
                        "1. Trạng thái cân bằng của quần thể: Số lượng cá thể dao động quanh mức cân bằng phù hợp với khả năng cung cấp nguồn sống của môi trường.",
                        "2. Khống chế sinh học trong quần xã: Hiện tượng số lượng cá thể của một loài bị khống chế ở mức nhất định do mối quan hệ sinh thái (vật ăn thịt - con mồi, vật kí sinh - vật chủ); ứng dụng thiên địch phòng trừ sâu hại.",
                        "3. Cân bằng tự nhiên trong hệ sinh thái: Sự ổn định về cấu trúc loài, tỉ lệ sinh khối và chu trình tuần hoàn vật chất."
                    ]),
                    ("II. Nguyên nhân mất cân bằng tự nhiên và các biện pháp bảo vệ, duy trì cân bằng tự nhiên", [
                        "1. Nguyên nhân: Tác động tự nhiên (núi lửa, động đất, lũ lụt, cháy rừng) và Hoạt động của con người (phá rừng, săn bắt quá mức, ô nhiễm môi trường, đưa sinh vật ngoại lai xâm hại).",
                        "2. Biện pháp duy trì cân bằng tự nhiên: Trồng cây gây rừng, sử dụng hợp lí tài nguyên, bảo vệ đa dạng sinh học, kiểm soát sinh vật ngoại lai, ứng dụng biện pháp sinh học trong nông nghiệp."
                    ])
                ],
                "matrix_focus": "Định nghĩa cân bằng tự nhiên và hiện tượng khống chế sinh học; phân tích nguyên nhân gây mất cân bằng tự nhiên; đề xuất biện pháp duy trì cân bằng sinh thái."
            },
            {
                "id": 47,
                "title": "Bảo vệ môi trường",
                "pages": "191 – 194",
                "headings": [
                    ("I. Tác động của con người đối với môi trường qua các thời kì", [
                        "1. Thời kì nguyên thuỷ (săn bắt, hái lượm, biết dùng lửa tác động cục bộ).",
                        "2. Thời kì xã hội nông nghiệp (trồng trọt, chăn nuôi, khai phá đất rừng làm nương rẫy).",
                        "3. Thời kì xã hội công nghiệp và hậu công nghiệp (khai thác cạn kiệt khoáng sản, nhiên liệu hoá thạch, đô thị hoá, xả thải công nghiệp quy mô toàn cầu)."
                    ]),
                    ("II. Ô nhiễm môi trường", [
                        "1. Khái niệm ô nhiễm môi trường: Hiện tượng môi trường bị thay đổi tính chất vật lí, hoá học, sinh học gây hại cho sức khoẻ con người và sinh vật.",
                        "2. Các nguyên nhân gây ô nhiễm: Ô nhiễm do chất thải sinh hoạt và công nghiệp; ô nhiễm do hoá chất bảo vệ thực vật; ô nhiễm do phóng xạ; ô nhiễm do tác nhân sinh học.",
                        "3. Biện pháp hạn chế ô nhiễm: Xử lí rác thải, nước thải trước khi xả ra môi trường; phát triển năng lượng sạch (gió, mặt trời); tái chế rác thải; hạn chế sử dụng đồ nhựa một lần."
                    ]),
                    ("III. Biến đổi khí hậu", [
                        "1. Khái niệm và biểu hiện: Nhiệt độ Trái Đất ấm lên, nước biển dâng, gia tăng thiên tai cực đoan (bão lũ, hạn hán).",
                        "2. Các biện pháp thích ứng và giảm nhẹ biến đổi khí hậu (tiết kiệm năng lượng, trồng rừng, chuyển đổi cơ cấu cây trồng chịu mặn/hạn)."
                    ]),
                    ("IV. Bảo vệ động vật hoang dã", [
                        "Ý nghĩa và các hành động bảo vệ động vật hoang dã có nguy cơ tuyệt chủng (cấm buôn bán ngà voi, tê tê, nuôi nhốt gấu trái phép)."
                    ])
                ],
                "matrix_focus": "Phân tích tác động của con người qua các thời kì; nhận biết các dạng ô nhiễm môi trường và nguyên nhân; nêu biểu hiện biến đổi khí hậu; đề xuất các hành động cụ thể của học sinh trong việc bảo vệ môi trường và động vật hoang dã."
            }
        ]
    }
]

def build_docx():
    doc = docx.Document()
    
    # Thiết lập lề trang giấy chuẩn văn bản TCVN (Top: 2cm, Bottom: 2cm, Left: 2.5cm, Right: 2cm)
    for section in doc.sections:
        section.top_margin = Inches(0.79)
        section.bottom_margin = Inches(0.79)
        section.left_margin = Inches(0.98)
        section.right_margin = Inches(0.79)
        section.different_first_page_header_footer = False
        
        # Header / Footer
        header = section.header
        hp = header.paragraphs[0]
        hp.text = "SGK KHOA HỌC TỰ NHIÊN 8 – HỆ THỐNG ĐỀ MỤC TẠO MA TRẬN ĐỀ KIỂM TRA THƯỜNG XUYÊN & ĐỊNH KÌ"
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hp.style.font.name = "Times New Roman"
        hp.style.font.size = Pt(8.5)
        hp.style.font.color.rgb = RGBColor(120, 120, 120)
        
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.text = "Bộ sách Kết nối tri thức với cuộc sống – Phục vụ xây dựng Ma trận & Bản đặc tả đề kiểm tra môn KHTN lớp 8"
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        fp.style.font.name = "Times New Roman"
        fp.style.font.size = Pt(8.5)
        fp.style.font.color.rgb = RGBColor(120, 120, 120)

    # Tiêu đề chính
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(4)
    run_sub = p_title.add_run("BỘ GIÁO DỤC VÀ ĐÀO TẠO – CHƯƠNG TRÌNH GDPT 2018\n")
    run_sub.font.name = "Times New Roman"
    run_sub.font.size = Pt(11)
    run_sub.font.bold = True
    run_sub.font.color.rgb = RGBColor(80, 80, 80)

    run_main = p_title.add_run("BẢNG TỔNG HỢP HỆ THỐNG ĐỀ MỤC KIẾN THỨC BÀI HỌC\nSGK KHOA HỌC TỰ NHIÊN 8 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)\n")
    run_main.font.name = "Times New Roman"
    run_main.font.size = Pt(15)
    run_main.font.bold = True
    run_main.font.color.rgb = RGBColor(16, 75, 140) # Màu xanh lam đậm giáo dục

    run_desc = p_title.add_run("MỤC ĐÍCH: XÂY DỰNG MA TRẬN & BẢN ĐẶC TẢ ĐỀ KIỂM TRA THƯỜNG XUYÊN VÀ ĐỊNH KÌ LỚP 8\n(THEO CÁC MỨC ĐỘ NHẬN THỨC: NHẬN BIẾT – THÔNG HIỂU – VẬN DỤNG – VẬN DỤNG CAO)")
    run_desc.font.name = "Times New Roman"
    run_desc.font.size = Pt(10.5)
    run_desc.font.italic = True
    run_desc.font.bold = True
    run_desc.font.color.rgb = RGBColor(180, 40, 20)

    doc.add_paragraph().paragraph_format.space_after = Pt(2)

    # Phần 1: LỜI MỞ ĐẦU & HƯỚNG DẪN SỬ DỤNG
    p_hd_h = doc.add_heading(level=1)
    p_hd_h.paragraph_format.space_before = Pt(6)
    p_hd_h.paragraph_format.space_after = Pt(4)
    r_hd_h = p_hd_h.add_run("PHẦN 1. HƯỚNG DẪN SỬ DỤNG ĐỀ MỤC ĐỂ THIẾT KẾ MA TRẬN ĐỀ KIỂM TRA")
    r_hd_h.font.name = "Times New Roman"
    r_hd_h.font.size = Pt(12.5)
    r_hd_h.font.bold = True
    r_hd_h.font.color.rgb = RGBColor(16, 75, 140)

    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_after = Pt(4)
    p_intro.paragraph_format.line_spacing = 1.15
    r_in = p_intro.add_run(
        "Tài liệu này được biên soạn độc quyền phục vụ cho đội ngũ Giáo viên giảng dạy môn Khoa học tự nhiên 8 (KHTN 8), "
        "tổ chuyên môn Khoa học tự nhiên, cán bộ quản lí chuyên môn nhà trường trong việc xây dựng Ma trận đề kiểm tra, Bản đặc tả đề kiểm tra thường xuyên "
        "và kiểm tra định kì (Kiểm tra giữa kì I, Cuối kì I, Giữa kì II, Cuối kì II) theo quy định của Bộ Giáo dục và Đào tạo (Thông tư 22/2021/TT-BGDĐT và các Công văn hướng dẫn chuyên môn).\n\n"
        "Toàn bộ dữ liệu đề mục I, II, III... và các tiểu mục 1, 2, 3... được trích xuất, đối soát chuẩn xác 100% theo từng bài học trong sách giáo khoa "
        "Khoa học tự nhiên 8 – Bộ sách Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam, gồm 47 Bài học thuộc 8 Chương và 1 Bài mở đầu, trải dài 199 trang).\n\n"
        "Quy tắc phân bổ 4 mức độ nhận thức khi lập ma trận đề kiểm tra KHTN 8:\n"
        " • Nhận biết (khoảng 40%): Tái hiện định nghĩa, khái niệm, công thức, quy tắc, cấu tạo cơ quan, hiện tượng khoa học đã học.\n"
        " • Thông hiểu (khoảng 30%): Giải thích hiện tượng, so sánh, phân biệt, giải thích cơ chế, tính chất, chuyển đổi đơn vị, cân bằng phương trình.\n"
        " • Vận dụng (khoảng 20%): Vận dụng định luật, công thức tính toán lượng chất, áp suất, khối lượng riêng, nồng độ, giải thích hiện tượng đời sống thực tế.\n"
        " • Vận dụng cao (khoảng 10%): Giải bài tập tổng hợp định lượng, bài toán thực tiễn phức hợp, thiết kế phương án thí nghiệm, đề xuất giải pháp bảo vệ sức khoẻ, cân bằng môi trường sinh thái."
    )
    r_in.font.name = "Times New Roman"
    r_in.font.size = Pt(10.5)

    # Bảng tổng quan phân phối chương trình
    p_tb_h = doc.add_heading(level=1)
    p_tb_h.paragraph_format.space_before = Pt(8)
    p_tb_h.paragraph_format.space_after = Pt(4)
    r_tb_h = p_tb_h.add_run("PHẦN 2. BẢNG PHÂN BỐ CẤU TRÚC CHƯƠNG TRÌNH KHTN 8 PHỤC VỤ RA ĐỀ")
    r_tb_h.font.name = "Times New Roman"
    r_tb_h.font.size = Pt(12.5)
    r_tb_h.font.bold = True
    r_tb_h.font.color.rgb = RGBColor(16, 75, 140)

    overview_table = doc.add_table(rows=1, cols=6)
    overview_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(overview_table)
    
    headers = ["Chương", "Tên Chương / Phân môn", "Số bài", "Trang SGK", "Tỉ lệ KT gợi ý", "Phạm vi kiểm tra trọng tâm"]
    hdr_cells = overview_table.rows[0].cells
    for i, h_text in enumerate(headers):
        hdr_cells[i].text = h_text
        set_cell_background(hdr_cells[i], "1F497D")
        set_cell_margins(hdr_cells[i], top=100, bottom=100, left=120, right=120)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(9.5)
            r.font.bold = True
            r.font.color.rgb = RGBColor(255, 255, 255)

    overview_data = [
        ("Mở đầu", "Sử dụng hoá chất, thiết bị cơ bản phòng thí nghiệm", "Bài 1", "6 – 10", "5%", "Kiểm tra thường xuyên đầu năm"),
        ("Chương I", "Phản ứng hoá học (Hoá học)", "Bài 2 – 7 (6 bài)", "11 – 34", "15 – 20%", "Giữa kì I & Cuối kì I"),
        ("Chương II", "Một số hợp chất thông dụng (Hoá học)", "Bài 8 – 12 (5 bài)", "35 – 55", "15 – 20%", "Cuối kì I & Đánh giá định kì"),
        ("Chương III", "Khối lượng riêng và áp suất (Vật lí)", "Bài 13 – 17 (5 bài)", "56 – 75", "10 – 15%", "Giữa kì I / Cuối kì I"),
        ("Chương IV", "Tác dụng làm quay của lực (Vật lí)", "Bài 18 – 19 (2 bài)", "76 – 83", "5 – 10%", "Cuối kì I / Giữa kì II"),
        ("Chương V", "Điện (Vật lí)", "Bài 20 – 25 (6 bài)", "84 – 104", "10 – 15%", "Giữa kì II"),
        ("Chương VI", "Nhiệt (Vật lí)", "Bài 26 – 29 (4 bài)", "105 – 122", "10%", "Giữa kì II / Cuối kì II"),
        ("Chương VII", "Sinh học cơ thể người (Sinh học)", "Bài 30 – 40 (11 bài)", "123 – 169", "25 – 30%", "Xuyên suốt Kì I & Kì II"),
        ("Chương VIII", "Sinh vật và môi trường (Sinh thái học)", "Bài 41 – 47 (7 bài)", "170 – 194", "15 – 20%", "Cuối kì II"),
        ("TỔNG CỘNG", "Toàn bộ chương trình KHTN lớp 8", "47 Bài học", "6 – 194", "100%", "Chuẩn kiến thức kĩ năng cả năm")
    ]

    for row_idx, data_row in enumerate(overview_data):
        row = overview_table.add_row()
        cells = row.cells
        bg_color = "F2F2F2" if row_idx % 2 == 1 else "FFFFFF"
        if row_idx == len(overview_data) - 1:
            bg_color = "DCE6F1" # Dòng tổng cộng nổi bật
        for c_idx, val in enumerate(data_row):
            cells[c_idx].text = val
            set_cell_background(cells[c_idx], bg_color)
            set_cell_margins(cells[c_idx], top=80, bottom=80, left=100, right=100)
            p = cells[c_idx].paragraphs[0]
            if c_idx in [0, 2, 3, 4]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9.5)
                if row_idx == len(overview_data) - 1 or c_idx == 0:
                    r.font.bold = True

    # Phần 3: BẢNG CHI TIẾT ĐỀ MỤC TỪNG CHƯƠNG VÀ ĐẶC TẢ MA TRẬN
    p_sec3_h = doc.add_heading(level=1)
    p_sec3_h.paragraph_format.space_before = Pt(14)
    p_sec3_h.paragraph_format.space_after = Pt(4)
    r_sec3 = p_sec3_h.add_run("PHẦN 3. BẢNG CHI TIẾT ĐỀ MỤC KIẾN THỨC THEO BÀI VÀ GỢI Ý MA TRẬN ĐỀ KIỂM TRA")
    r_sec3.font.name = "Times New Roman"
    r_sec3.font.size = Pt(13)
    r_sec3.font.bold = True
    r_sec3.font.color.rgb = RGBColor(16, 75, 140)

    # Duyệt qua từng chương trong KHTN 8
    for ch_idx, ch in enumerate(chapters_data_khtn8):
        p_ch = doc.add_paragraph()
        p_ch.paragraph_format.space_before = Pt(12)
        p_ch.paragraph_format.space_after = Pt(3)
        p_ch.paragraph_format.keep_with_next = True
        
        prefix = f"CHƯƠNG {ch['chapter_num']}: " if ch['chapter_num'] != "MỞ ĐẦU" else "PHẦN "
        r_ch_title = p_ch.add_run(f"{prefix}{ch['chapter_title']}")
        r_ch_title.font.name = "Times New Roman"
        r_ch_title.font.size = Pt(11.5)
        r_ch_title.font.bold = True
        r_ch_title.font.color.rgb = RGBColor(192, 57, 43)

        r_ch_domain = p_ch.add_run(f"  [{ch['domain']}]")
        r_ch_domain.font.name = "Times New Roman"
        r_ch_domain.font.size = Pt(10)
        r_ch_domain.font.italic = True
        r_ch_domain.font.color.rgb = RGBColor(50, 100, 150)

        # Tạo bảng cho chương
        table = doc.add_table(rows=1, cols=4)
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        set_table_borders(table)

        col_widths = [Inches(1.5), Inches(2.6), Inches(1.8), Inches(1.6)]
        
        # Header của bảng chương
        ch_headers = [
            "Tên Bài học & Số trang",
            "Hệ thống Đề mục kiến thức\n(I, II, III...; 1, 2, 3...)",
            "Nội dung trọng tâm ra đề kiểm tra",
            "Mức độ nhận thức định hướng ra đề"
        ]
        hdr_row = table.rows[0]
        for c_i, h_txt in enumerate(ch_headers):
            cell = hdr_row.cells[c_i]
            cell.text = h_txt
            set_cell_background(cell, "244061")
            set_cell_margins(cell, top=100, bottom=100, left=100, right=100)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9.5)
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)

        # Thêm các bài học vào bảng
        for l_idx, lesson in enumerate(ch["lessons"]):
            row = table.add_row()
            cells = row.cells
            bg_color = "F9FAFB" if l_idx % 2 == 1 else "FFFFFF"

            # Cột 1: Tên bài & số trang
            cell_0 = cells[0]
            set_cell_background(cell_0, bg_color)
            set_cell_margins(cell_0, top=90, bottom=90, left=100, right=100)
            p0 = cell_0.paragraphs[0]
            p0.alignment = WD_ALIGN_PARAGRAPH.LEFT
            r0_b = p0.add_run(f"Bài {lesson['id']}:\n{lesson['title']}\n")
            r0_b.font.name = "Times New Roman"
            r0_b.font.size = Pt(9.5)
            r0_b.font.bold = True
            r0_b.font.color.rgb = RGBColor(20, 40, 80)
            r0_p = p0.add_run(f"(Trang {lesson['pages']})")
            r0_p.font.name = "Times New Roman"
            r0_p.font.size = Pt(8.5)
            r0_p.font.italic = True
            r0_p.font.color.rgb = RGBColor(120, 120, 120)

            # Cột 2: Hệ thống đề mục I, II, III...
            cell_1 = cells[1]
            set_cell_background(cell_1, bg_color)
            set_cell_margins(cell_1, top=90, bottom=90, left=100, right=100)
            p1 = cell_1.paragraphs[0]
            p1.alignment = WD_ALIGN_PARAGRAPH.LEFT
            
            for h_idx, (h_title, subheadings) in enumerate(lesson["headings"]):
                if h_idx > 0:
                    p1_h = cell_1.add_paragraph()
                else:
                    p1_h = p1
                p1_h.paragraph_format.space_before = Pt(3) if h_idx > 0 else Pt(0)
                p1_h.paragraph_format.space_after = Pt(1)
                p1_h.paragraph_format.line_spacing = 1.15
                rh = p1_h.add_run(h_title)
                rh.font.name = "Times New Roman"
                rh.font.size = Pt(9.5)
                rh.font.bold = True
                rh.font.color.rgb = RGBColor(16, 75, 140)

                for sub in subheadings:
                    p1_sub = cell_1.add_paragraph()
                    p1_sub.paragraph_format.space_before = Pt(0)
                    p1_sub.paragraph_format.space_after = Pt(1)
                    p1_sub.paragraph_format.line_spacing = 1.1
                    r_sub = p1_sub.add_run(f" • {sub}")
                    r_sub.font.name = "Times New Roman"
                    r_sub.font.size = Pt(9)
                    r_sub.font.color.rgb = RGBColor(40, 40, 40)

            # Cột 3: Trọng tâm ra đề kiểm tra
            cell_2 = cells[2]
            set_cell_background(cell_2, bg_color)
            set_cell_margins(cell_2, top=90, bottom=90, left=100, right=100)
            p2 = cell_2.paragraphs[0]
            p2.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p2.paragraph_format.line_spacing = 1.15
            r2 = p2.add_run(lesson["matrix_focus"])
            r2.font.name = "Times New Roman"
            r2.font.size = Pt(9)
            r2.font.color.rgb = RGBColor(30, 30, 30)

            # Cột 4: Mức độ nhận thức định hướng
            cell_3 = cells[3]
            set_cell_background(cell_3, bg_color)
            set_cell_margins(cell_3, top=90, bottom=90, left=100, right=100)
            p3 = cell_3.paragraphs[0]
            p3.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p3.paragraph_format.line_spacing = 1.15
            
            r3_nb = p3.add_run("• Nhận biết: ")
            r3_nb.font.name = "Times New Roman"
            r3_nb.font.size = Pt(8.5)
            r3_nb.font.bold = True
            r3_nb.font.color.rgb = RGBColor(0, 102, 204)
            r3_nb_t = p3.add_run("Khái niệm, định nghĩa, nhận diện hiện tượng.\n")
            r3_nb_t.font.name = "Times New Roman"
            r3_nb_t.font.size = Pt(8.5)

            r3_th = p3.add_run("• Thông hiểu: ")
            r3_th.font.name = "Times New Roman"
            r3_th.font.size = Pt(8.5)
            r3_th.font.bold = True
            r3_th.font.color.rgb = RGBColor(0, 153, 76)
            r3_th_t = p3.add_run("Giải thích cơ chế, tính chất, phân loại, so sánh.\n")
            r3_th_t.font.name = "Times New Roman"
            r3_th_t.font.size = Pt(8.5)

            r3_vd = p3.add_run("• Vận dụng: ")
            r3_vd.font.name = "Times New Roman"
            r3_vd.font.size = Pt(8.5)
            r3_vd.font.bold = True
            r3_vd.font.color.rgb = RGBColor(204, 102, 0)
            r3_vd_t = p3.add_run("Tính toán công thức, giải thích tình huống thực tế.\n")
            r3_vd_t.font.name = "Times New Roman"
            r3_vd_t.font.size = Pt(8.5)

            r3_vdc = p3.add_run("• Vận dụng cao: ")
            r3_vdc.font.name = "Times New Roman"
            r3_vdc.font.size = Pt(8.5)
            r3_vdc.font.bold = True
            r3_vdc.font.color.rgb = RGBColor(178, 34, 34)
            r3_vdc_t = p3.add_run("Bài toán thực nghiệm, tích hợp liên môn, giải pháp sáng tạo.")
            r3_vdc_t.font.name = "Times New Roman"
            r3_vdc_t.font.size = Pt(8.5)

    # PHẦN 4: PHỤ LỤC KHUNG MA TRẬN ĐỀ KIỂM TRA MẪU (CHUẨN BỘ GIÁO DỤC)
    p_sec4_h = doc.add_heading(level=1)
    p_sec4_h.paragraph_format.space_before = Pt(14)
    p_sec4_h.paragraph_format.space_after = Pt(4)
    r_sec4 = p_sec4_h.add_run("PHẦN 4. PHỤ LỤC: KHUNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN KHTN 8 MẪU")
    r_sec4.font.name = "Times New Roman"
    r_sec4.font.size = Pt(13)
    r_sec4.font.bold = True
    r_sec4.font.color.rgb = RGBColor(16, 75, 140)

    p_guide_matrix = doc.add_paragraph()
    p_guide_matrix.paragraph_format.space_after = Pt(4)
    r_gm = p_guide_matrix.add_run(
        "Khung ma trận đề kiểm tra định kì (Giữa kì hoặc Cuối kì) môn Khoa học tự nhiên 8 dưới đây được xây dựng kết hợp "
        "giữa hình thức Trắc nghiệm khách quan (Nhiều phương án lựa chọn, Đúng/Sai, Trả lời ngắn) và Tự luận theo định hướng phát triển năng lực."
    )
    r_gm.font.name = "Times New Roman"
    r_gm.font.size = Pt(10)
    r_gm.font.italic = True

    matrix_table = doc.add_table(rows=1, cols=9)
    matrix_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(matrix_table)

    m_headers = [
        "TT", "Chủ đề / Chương", "Mạch nội dung",
        "Nhận biết\n(TNKQ / TL)", "Thông hiểu\n(TNKQ / TL)", "Vận dụng\n(TNKQ / TL)", "Vận dụng cao\n(TNKQ / TL)",
        "Tổng số câu", "Tỉ lệ %"
    ]
    m_hdr_cells = matrix_table.rows[0].cells
    for i, h_t in enumerate(m_headers):
        m_hdr_cells[i].text = h_t
        set_cell_background(m_hdr_cells[i], "1F497D")
        set_cell_margins(m_hdr_cells[i], top=80, bottom=80, left=60, right=60)
        p = m_hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(8.5)
            r.font.bold = True
            r.font.color.rgb = RGBColor(255, 255, 255)

    sample_matrix_rows = [
        ("1", "Chất & Biến đổi", "Chương I: Phản ứng hoá học", "4 TN", "2 TN + 1 TL", "1 TN + 1 TL", "1 TL (VDC)", "8 câu", "25%"),
        ("2", "Chất & Biến đổi", "Chương II: Hợp chất thông dụng", "3 TN", "2 TN + 1 TL", "1 TN + 1 TL", "0,5 TL", "7,5 câu", "20%"),
        ("3", "Năng lượng & Biến đổi", "Chương III: KL riêng & Áp suất", "3 TN", "2 TN", "1 TL", "0,5 TL", "6,5 câu", "15%"),
        ("4", "Năng lượng & Biến đổi", "Chương IV, V: Quay của lực & Điện", "3 TN", "2 TN", "1 TN + 1 TL", "0,5 TL", "6,5 câu", "15%"),
        ("5", "Vật sống", "Chương VII: Sinh học cơ thể người", "3 TN", "2 TN + 1 TL", "1 TL", "0,5 TL", "6,5 câu", "15%"),
        ("6", "Sinh vật & Môi trường", "Chương VIII: Sinh vật & Môi trường", "2 TN", "1 TN + 1 TL", "1 TN", "0,5 TL", "4,5 câu", "10%"),
        ("", "TỔNG CỘNG", "Định lượng toàn bài kiểm tra", "18 TN (4,5đ)", "11 TN + 4 TL (3,0đ)", "4 TN + 4 TL (1,5đ)", "3 TL (1,0đ)", "36 câu", "100%")
    ]

    for r_i, s_row in enumerate(sample_matrix_rows):
        row = matrix_table.add_row()
        cells = row.cells
        bg_col = "FFFFFF" if r_i % 2 == 0 else "F2F2F2"
        if r_i == len(sample_matrix_rows) - 1:
            bg_col = "DCE6F1"
        for c_i, val in enumerate(s_row):
            cells[c_i].text = val
            set_cell_background(cells[c_i], bg_col)
            set_cell_margins(cells[c_i], top=60, bottom=60, left=60, right=60)
            p = cells[c_i].paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if c_i in [0, 3, 4, 5, 6, 7, 8] else WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)
                if r_i == len(sample_matrix_rows) - 1 or c_i in [0, 1]:
                    r.font.bold = True

    doc_path = "He_thong_de_muc_KHTN_8_Tao_Ma_tran_Kiem_tra.docx"
    doc.save(doc_path)
    print(f"Đã tạo thành công file Word: {doc_path}")

if __name__ == "__main__":
    build_docx()
