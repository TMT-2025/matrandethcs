# -*- coding: utf-8 -*-
"""
Script tạo file docx: Hệ thống đề mục SGK Khoa học tự nhiên 6 (Kết nối tri thức với cuộc sống)
dùng để lập ma trận đề kiểm tra thường xuyên và kiểm tra định kì.
"""
import docx, sys
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

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

# Dữ liệu 55 bài của 10 Chương
chapters_data = [
    {
        "chapter_num": "I",
        "chapter_title": "MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
        "domain": "Phương pháp và kĩ năng khoa học",
        "lessons": [
            {
                "id": 1,
                "title": "Giới thiệu về Khoa học tự nhiên",
                "pages": "7 - 10",
                "headings": [
                    ("I. Khái niệm Khoa học tự nhiên", ["Khoa học tự nhiên nghiên cứu các hiện tượng tự nhiên, tìm ra các tính chất, các quy luật của tự nhiên."]),
                    ("II. Vật sống và vật không sống", ["Đặc điểm phân biệt vật sống (sinh vật) và vật không sống qua các dấu hiệu sống: trao đổi chất, sinh trưởng, phát triển, sinh sản, cảm ứng."]),
                    ("III. Các lĩnh vực chính của Khoa học tự nhiên", ["Vật lí học, Hoá học, Sinh học, Khoa học Trái Đất, Thiên văn học."]),
                    ("IV. Khoa học tự nhiên với công nghệ và đời sống", ["Vai trò của KHTN trong hoạt động thực tiễn, ứng dụng công nghệ, phát triển sản xuất và bảo vệ môi trường."])
                ],
                "matrix_focus": "Nhận biết khái niệm KHTN, các lĩnh vực chính, phân biệt vật sống/vật không sống. Thông hiểu vai trò KHTN đối với đời sống."
            },
            {
                "id": 2,
                "title": "An toàn trong phòng thực hành",
                "pages": "11 - 12",
                "headings": [
                    ("I. Một số kí hiệu cảnh báo trong phòng thực hành", ["Biển cảnh báo chất độc, chất dễ cháy, chất ăn mòn, nguy hiểm điện, đeo kính bảo hộ..."]),
                    ("II. Một số quy định an toàn trong phòng thực hành", ["Quy tắc an toàn khi làm thí nghiệm, sử dụng hoá chất, thiết bị điện, xử lí sự cố cháy nổ/hoá chất."])
                ],
                "matrix_focus": "Nhận biết và giải thích ý nghĩa các biển cảnh báo trong phòng thực hành; tuân thủ và vận dụng các quy tắc an toàn."
            },
            {
                "id": 3,
                "title": "Sử dụng kính lúp",
                "pages": "13 - 14",
                "headings": [
                    ("I. Tìm hiểu về kính lúp", ["Cấu tạo kính lúp (khung, tay cầm, mặt kính lúp dày ở giữa - thấu kính hội tụ). Độ phóng đại."]),
                    ("II. Sử dụng và bảo quản kính lúp", [
                        "1. Sử dụng (Đặt mặt kính gần vật mẫu, điều chỉnh khoảng cách để nhìn rõ chi tiết).",
                        "2. Bảo quản (Lau kính bằng khăn mềm, để nơi khô ráo, tránh va đập xước kính)."
                    ])
                ],
                "matrix_focus": "Nêu cấu tạo, công dụng của kính lúp; thực hiện đúng thao tác sử dụng và bảo quản kính lúp cầm tay."
            },
            {
                "id": 4,
                "title": "Sử dụng kính hiển vi quang học",
                "pages": "15 - 16",
                "headings": [
                    ("I. Tìm hiểu về kính hiển vi quang học", ["Hệ thống giá đỡ, hệ thống phóng đại (thị kính, vật kính), hệ thống chiếu sáng (gương/đèn), hệ thống điều chỉnh (ốc to, ốc nhỏ)."]),
                    ("II. Sử dụng kính hiển vi quang học", ["Các bước lấy ánh sáng, đặt tiêu bản, điều chỉnh ốc to và ốc nhỏ để lấy nét quan sát."]),
                    ("III. Bảo quản kính hiển vi quang học", ["Cách cầm nâng kính, lau ống kính bằng giấy chuyên dụng, che bụi sau khi dùng."])
                ],
                "matrix_focus": "Nhận biết các bộ phận chính của kính hiển vi quang học; trình bày đúng các bước thao tác quan sát mẫu vật và quy tắc bảo quản."
            },
            {
                "id": 5,
                "title": "Đo chiều dài",
                "pages": "17 - 19",
                "headings": [
                    ("I. Đơn vị độ dài", ["Đơn vị chuẩn trong hệ SI là mét (m); các bội số và ước số (km, dm, cm, mm), đơn vị khác (inch, dặm)."]),
                    ("II. Dụng cụ đo chiều dài", ["Các loại thước (thước thẳng, thước dây, thước cuộn, thước kẹp); Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN)."]),
                    ("III. Cách đo chiều dài", ["5 bước đo: Ước lượng chiều dài; chọn thước phù hợp; đặt thước đúng cách; đặt mắt nhìn vuông góc; đọc và ghi kết quả theo ĐCNN."]),
                    ("IV. Vận dụng cách đo chiều dài vào đo thể tích", ["Đơn vị đo thể tích (m³, lít, mL); Cách đo thể tích vật rắn không thấm nước bằng bình chia độ và bình tràn."])
                ],
                "matrix_focus": "Xác định GHĐ và ĐCNN của thước; thực hiện đúng quy trình đo chiều dài; vận dụng đo thể tích bằng bình chia độ/bình tràn; xử lí sai số."
            },
            {
                "id": 6,
                "title": "Đo khối lượng",
                "pages": "20 - 21",
                "headings": [
                    ("I. Đơn vị khối lượng", ["Khái niệm khối lượng (số đo lượng chất); đơn vị hợp pháp là kilôgam (kg); gam (g), miligam (mg), tạ, tấn."]),
                    ("II. Dụng cụ đo khối lượng", ["Các loại cân: cân Rô-béc-van, cân đòn, cân đồng hồ, cân y tế, cân điện tử."]),
                    ("III. Cách đo khối lượng", [
                        "1. Dùng cân đồng hồ (Ước lượng, hiệu chỉnh kim số 0, đặt vật lên đĩa, đặt mắt, đọc kết quả).",
                        "2. Dùng cân điện tử (Bật nguồn, chọn đơn vị, trừ bì/reset về 0, đặt vật, đọc chỉ số hiển thị)."
                    ])
                ],
                "matrix_focus": "Phân biệt khối lượng và trọng lượng; nhận biết đơn vị và dụng cụ cân; trình bày các bước đo khối lượng bằng cân đồng hồ/cân điện tử."
            },
            {
                "id": 7,
                "title": "Đo thời gian",
                "pages": "22 - 23",
                "headings": [
                    ("I. Đơn vị thời gian", ["Đơn vị cơ bản trong hệ SI là giây (s); phút (min), giờ (h), ngày, tháng, năm."]),
                    ("II. Dụng cụ đo thời gian", ["Đồng hồ đeo tay, đồng hồ treo tường, đồng hồ quả lắc, đồng hồ cát, đồng hồ bấm giây (cơ học và điện tử)."]),
                    ("Cách sử dụng đồng hồ bấm giây & ước lượng thời gian", ["Thao tác Reset/Start/Stop trên đồng hồ bấm giây; ước lượng khoảng thời gian trong thực tế."])
                ],
                "matrix_focus": "Nhận biết đơn vị, dụng cụ đo thời gian; sử dụng thành thạo đồng hồ bấm giây để đo thời gian diễn ra một sự kiện hoặc chuyển động."
            },
            {
                "id": 8,
                "title": "Đo nhiệt độ",
                "pages": "24 - 27",
                "headings": [
                    ("I. Đo nhiệt độ (Thang nhiệt độ Xen-xi-út)", ["Nhiệt độ là số đo độ nóng, lạnh của vật; thang Xen-xi-út (°C), thang Fa-ren-hai (°F)."]),
                    ("II. Dụng cụ đo nhiệt độ", [
                        "1. Sự nở vì nhiệt của chất lỏng (Chất lỏng nở ra khi nóng lên, co lại khi lạnh đi làm cơ sở chế tạo nhiệt kế).",
                        "2. Các loại nhiệt kế (Nhiệt kế thuỷ ngân, nhiệt kế rượu, nhiệt kế kim loại, nhiệt kế điện tử, hồng ngoại)."
                    ]),
                    ("III. Sử dụng nhiệt kế y tế", [
                        "1. Nhiệt kế y tế thuỷ ngân (Cấu tạo chỗ thắt ở ống quản, thao tác vẩy trước khi đo, đọc kết quả, an toàn khi vỡ).",
                        "2. Nhiệt kế y tế điện tử (Thao tác bấm nguồn, đo, đọc kết quả hiển thị)."
                    ])
                ],
                "matrix_focus": "Trình bày nguyên lí nhiệt kế chất lỏng; thang nhiệt độ °C; lựa chọn và thao tác đo nhiệt độ cơ thể bằng nhiệt kế y tế đúng cách, an toàn."
            }
        ]
    },
    {
        "chapter_num": "II",
        "chapter_title": "CHẤT QUANH TA",
        "domain": "Chất và sự biến đổi của chất (Hóa học)",
        "lessons": [
            {
                "id": 9,
                "title": "Sự đa dạng của chất",
                "pages": "28 - 29",
                "headings": [
                    ("I. Chất quanh ta", ["Vật thể tự nhiên, vật thể nhân tạo; vật không sống, vật sống; một vật thể có thể tạo từ nhiều chất, một chất có thể tạo nên nhiều vật thể."]),
                    ("II. Một số tính chất của chất", [
                        "Tính chất vật lí (thể, màu sắc, mùi vị, nhiệt độ nóng chảy, nhiệt độ sôi, tính tan, tính dẫn điện, dẫn nhiệt...).",
                        "Tính chất hoá học (khả năng biến đổi thành chất khác: tính cháy, bị phân huỷ...)."
                    ])
                ],
                "matrix_focus": "Phân biệt vật thể và chất; phân biệt tính chất vật lí và tính chất hoá học của chất qua các ví dụ thực tế."
            },
            {
                "id": 10,
                "title": "Các thể của chất và sự chuyển thể",
                "pages": "30 - 35",
                "headings": [
                    ("I. Các thể của chất: thể rắn, thể lỏng và thể khí", ["Đặc điểm về hình dạng, thể tích, khoảng cách giữa các hạt, khả năng nén và lan truyền của chất ở thể rắn, lỏng, khí."]),
                    ("II. Sự chuyển thể của chất", [
                        "1. Sự nóng chảy và sự đông đặc (Nhiệt độ nóng chảy/đông đặc, sự thu nhiệt/toả nhiệt).",
                        "2. Sự hoá hơi và sự ngưng tụ (Sự bay hơi xảy ra ở bề mặt chất lỏng; sự sôi xảy ra ở cả bề mặt và trong lòng khối chất lỏng tại nhiệt độ sôi; vòng tuần hoàn của nước)."
                    ])
                ],
                "matrix_focus": "So sánh đặc điểm 3 thể của chất; xác định và mô tả các hiện tượng chuyển thể (nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi) trong tự nhiên."
            },
            {
                "id": 11,
                "title": "Oxygen. Không khí",
                "pages": "36 - 41",
                "headings": [
                    ("I. Tính chất vật lí và tầm quan trọng của oxygen", [
                        "1. Tính chất vật lí của oxygen (Khí không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí).",
                        "2. Tầm quan trọng của oxygen (Duy trì sự sống, duy trì sự cháy, ứng dụng y tế và sản xuất)."
                    ]),
                    ("II. Thành phần của không khí", ["Thành phần % thể tích: 78% nitrogen, 21% oxygen, 1% carbon dioxide, hơi nước và các khí khác; thí nghiệm xác định % oxygen."]),
                    ("III. Vai trò của không khí", ["Cung cấp khí thở, bảo vệ Trái Đất, điều hòa khí hậu, phục vụ đời sống."]),
                    ("IV. Sự ô nhiễm không khí", [
                        "1. Nguyên nhân và hậu quả của ô nhiễm không khí (Khói bụi, khí thải độc hại CO, SO2, NOx; mưa acid, hiệu ứng nhà kính).",
                        "2. Bảo vệ môi trường không khí (Các biện pháp giảm thiểu ô nhiễm, trồng cây, dùng năng lượng sạch)."
                    ])
                ],
                "matrix_focus": "Nêu tính chất vật lí và vai trò của oxygen; trình bày thành phần không khí; nguyên nhân, hậu quả và giải pháp chống ô nhiễm không khí."
            }
        ]
    },
    {
        "chapter_num": "III",
        "chapter_title": "MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
        "domain": "Chất và sự biến đổi của chất (Hóa học ứng dụng)",
        "lessons": [
            {
                "id": 12,
                "title": "Một số vật liệu",
                "pages": "42 - 45",
                "headings": [
                    ("I. Vật liệu", ["Khái niệm vật liệu (chất hoặc hỗn hợp các chất dùng làm nguyên liệu đầu vào để sản xuất ra các đồ dùng, công trình)."]),
                    ("II. Tính chất và ứng dụng của vật liệu", ["Kim loại, thuỷ tinh, nhựa, gốm sứ, cao su, gỗ; tính dẫn điện, dẫn nhiệt, tính đàn hồi, độ cứng, tính bền."]),
                    ("III. Thu gom rác thải và tái sử dụng đồ dùng trong gia đình", ["Mô hình 3R: Reduce (Giảm thiểu), Reuse (Tái sử dụng), Recycle (Tái chế); phân loại rác thải tại nguồn."])
                ],
                "matrix_focus": "Nêu được tính chất và ứng dụng của các vật liệu thông dụng; vận dụng mô hình 3R để bảo vệ môi trường và sử dụng an toàn vật liệu."
            },
            {
                "id": 13,
                "title": "Một số nguyên liệu",
                "pages": "46 - 49",
                "headings": [
                    ("I. Các loại nguyên liệu", ["Khái niệm nguyên liệu tự nhiên và nhân tạo (đất, đá, quặng, cát, dầu mỏ...)."]),
                    ("II. Đá vôi", ["Thành phần chính CaCO3; tính chất (tác dụng với acid sủi bọt, nung tạo vôi sống); ứng dụng xây dựng, sản xuất xi măng, vôi; tác động khai thác tới môi trường."]),
                    ("III. Quặng", ["Khái niệm quặng (đất đá chứa khoáng vật có hàm lượng kim loại/phi kim có giá trị); quặng sắt, quặng bauxite, quặng đồng; khai thác bền vững."])
                ],
                "matrix_focus": "Trình bày tính chất, ứng dụng của đá vôi và quặng; nêu được tác động của việc khai thác tài nguyên khoáng sản đến môi trường và giải pháp."
            },
            {
                "id": 14,
                "title": "Một số nhiên liệu",
                "pages": "50 - 51",
                "headings": [
                    ("I. Các loại nhiên liệu", ["Khái niệm nhiên liệu (chất cháy được và toả nhiều nhiệt khi cháy); phân loại: thể rắn (than đá, củi), lỏng (xăng, dầu), khí (gas, khí thiên nhiên)."]),
                    ("II. Nguồn nhiên liệu, tính chất và cách sử dụng nhiên liệu", ["Nhiên liệu hoá thạch (than, dầu mỏ); cách sử dụng an toàn, tiết kiệm, hiệu quả (cung cấp đủ oxygen, tăng diện tích tiếp xúc)."]),
                    ("III. Sơ lược về an ninh năng lượng", ["Khái niệm an ninh năng lượng; nguy cơ cạn kiệt nhiên liệu hoá thạch; xu hướng chuyển dịch sang năng lượng tái tạo."])
                ],
                "matrix_focus": "Phân loại các dạng nhiên liệu; biện pháp sử dụng nhiên liệu an toàn, hiệu quả, tiết kiệm; hiểu khái niệm an ninh năng lượng."
            },
            {
                "id": 15,
                "title": "Một số lương thực, thực phẩm",
                "pages": "52 - 55",
                "headings": [
                    ("I. Vai trò của lương thực, thực phẩm", ["Cung cấp năng lượng và các chất dinh dưỡng thiết yếu cho sự sống, sinh trưởng và phát triển của cơ thể."]),
                    ("II. Các nhóm chất dinh dưỡng trong lương thực, thực phẩm", [
                        "1. Carbohydrate: nguồn năng lượng chính (gạo, ngô, khoai, sắn...).",
                        "2. Các chất dinh dưỡng khác: a) Protein (chất đạm); b) Lipid (chất béo); c) Chất khoáng và vitamin."
                    ]),
                    ("III. Sức khoẻ và chế độ dinh dưỡng", ["Chế độ dinh dưỡng cân đối, hợp lí; bảo quản lương thực thực phẩm chống ôi thiu, nấm mốc; vệ sinh an toàn thực phẩm."])
                ],
                "matrix_focus": "Nhận biết 4 nhóm chất dinh dưỡng chính; phân tích vai trò từng nhóm; đề xuất biện pháp bảo quản thực phẩm và xây dựng khẩu phần ăn hợp lí."
            }
        ]
    },
    {
        "chapter_num": "IV",
        "chapter_title": "HỖN HỢP. TÁCH CHẤT RA KHỎI HỖN HỢP",
        "domain": "Chất và sự biến đổi của chất (Hóa học)",
        "lessons": [
            {
                "id": 16,
                "title": "Hỗn hợp các chất",
                "pages": "56 - 59",
                "headings": [
                    ("I. Chất tinh khiết và hỗn hợp", ["Chất tinh khiết chỉ gồm một chất, có tính chất xác định; hỗn hợp gồm từ hai chất trở lên trộn lẫn, có tính chất thay đổi."]),
                    ("II. Dung dịch", ["Dung dịch là hỗn hợp đồng nhất giữa dung môi và chất tan."]),
                    ("III. Huyền phù và nhũ tương", ["Huyền phù (chất rắn lơ lửng trong chất lỏng); Nhũ tương (chất lỏng lơ lửng trong chất lỏng khác không tan vào nhau)."]),
                    ("IV. Sự hoà tan các chất", [
                        "1. Khả năng tan của các chất (Chất tan nhiều, tan ít, không tan trong nước; chất rắn, lỏng, khí).",
                        "2. Ảnh hưởng của nhiệt độ tới sự hoà tan (Nhiệt độ, khuấy, nghiền nhỏ hạt làm tăng tốc độ hoà tan chất rắn)."
                    ])
                ],
                "matrix_focus": "Phân biệt chất tinh khiết - hỗn hợp; dung dịch - huyền phù - nhũ tương; các yếu tố ảnh hưởng đến độ tan và tốc độ hoà tan của chất rắn."
            },
            {
                "id": 17,
                "title": "Tách chất khỏi hỗn hợp",
                "pages": "60 - 63",
                "headings": [
                    ("I. Nguyên tắc tách chất", ["Dựa vào sự khác nhau về tính chất vật lí giữa các chất trong hỗn hợp (kích thước hạt, độ tan, nhiệt độ sôi, khối lượng riêng...)."]),
                    ("II. Một số cách tách chất", [
                        "1. Lắng, gạn và lọc (Tách chất rắn không tan ra khỏi chất lỏng).",
                        "2. Cô cạn (Tách chất rắn tan ra khỏi dung dịch).",
                        "3. Chiết (Tách hai chất lỏng không hoà tan vào nhau bằng phễu chiết)."
                    ])
                ],
                "matrix_focus": "Trình bày nguyên tắc và lựa chọn phương pháp tách chất phù hợp (lọc, cô cạn, chiết) cho từng loại hỗn hợp cụ thể trong đời sống."
            }
        ]
    },
    {
        "chapter_num": "V",
        "chapter_title": "TẾ BÀO",
        "domain": "Vật sống (Sinh học tế bào)",
        "lessons": [
            {
                "id": 18,
                "title": "Tế bào – Đơn vị cơ bản của sự sống",
                "pages": "64 - 66",
                "headings": [
                    ("I. Tế bào là gì?", ["Tế bào là đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sống; thực hiện đầy đủ các quá trình sống cơ bản."]),
                    ("II. Hình dạng và kích thước tế bào", [
                        "1. Hình dạng tế bào (Hình cầu, hình đĩa, hình sợi, hình sao, hình nhiều cạnh...).",
                        "2. Kích thước tế bào (Phần lớn có kích thước hiển vi từ 1 - 100 µm, cần kính hiển vi; số ít thấy bằng mắt thường như tép cam, trứng cá)."
                    ])
                ],
                "matrix_focus": "Nêu khái niệm tế bào; nhận biết sự đa dạng về hình dạng, kích thước của tế bào; giải thích vì sao phần lớn tế bào có kích thước hiển vi."
            },
            {
                "id": 19,
                "title": "Cấu tạo và chức năng các thành phần của tế bào",
                "pages": "67 - 69",
                "headings": [
                    ("I. Cấu tạo của tế bào", ["3 thành phần chính: Màng tế bào (bảo vệ, kiểm soát trao đổi chất), Tế bào chất (nơi diễn ra các hoạt động sống), Nhân hoặc Vùng nhân (chứa vật chất di truyền, điều khiển mọi hoạt động)."]),
                    ("II. Tế bào nhân sơ và tế bào nhân thực", ["Tế bào nhân sơ (chưa có nhân hoàn chỉnh, chỉ có vùng nhân, không có màng nhân - vi khuẩn); Tế bào nhân thực (có nhân hoàn chỉnh với màng nhân bao bọc)."]),
                    ("III. Tế bào động vật và tế bào thực vật", ["Tế bào thực vật có thành tế bào (cellulose), lục lạp (quang hợp), không bào trung tâm lớn; tế bào động vật không có thành tế bào và lục lạp."])
                ],
                "matrix_focus": "Nêu chức năng 3 thành phần chính của tế bào; phân biệt tế bào nhân sơ - nhân thực; so sánh cấu tạo tế bào thực vật và động vật."
            },
            {
                "id": 20,
                "title": "Sự lớn lên và sinh sản của tế bào",
                "pages": "70 - 72",
                "headings": [
                    ("I. Sự lớn lên của tế bào", ["Tế bào non trao đổi chất để tăng dần kích thước và khối lượng thành tế bào trưởng thành."]),
                    ("II. Sự sinh sản (phân chia) của tế bào", ["Tế bào trưởng thành phân chia thành 2 tế bào con (1 phân chia thành 2, 2 thành 4, sau n lần tạo 2^n tế bào con)."]),
                    ("III. Ý nghĩa sự lớn lên và sinh sản của tế bào", ["Giúp cơ thể sinh vật lớn lên, thay thế các tế bào già, tổn thương hoặc chết; chữa lành vết thương."])
                ],
                "matrix_focus": "Mô tả quá trình lớn lên và phân chia tế bào; tính số tế bào tạo thành sau phân chia; nêu ý nghĩa sinh học đối với sự phát triển của cơ thể."
            },
            {
                "id": 21,
                "title": "Thực hành: Quan sát và phân biệt một số loại tế bào",
                "pages": "73 - 74",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính hiển vi, lam kính, lamen, kim mũi mác, đĩa petri, giấy thấm...); 2. Mẫu vật (Củ hành tây, trứng cá)."]),
                    ("II. Cách tiến hành", [
                        "1. Làm tiêu bản, quan sát và vẽ tế bào biểu bì hành tây (Tách lớp vảy mỏng, nhỏ giọt nước, đậy lamen, quan sát ở vật kính 10x, 40x).",
                        "2. Quan sát và vẽ tế bào trứng cá (Dùng kính lúp hoặc mắt thường quan sát kích thước, hình dạng)."
                    ]),
                    ("III. Thu hoạch", ["Vẽ hình ảnh tế bào quan sát được, chú thích thành phần quan sát thấy (màng, tế bào chất, nhân, thành tế bào) và trả lời câu hỏi."])
                ],
                "matrix_focus": "Kĩ năng làm tiêu bản tạm thời tế bào thực vật; kĩ năng thao tác kính hiển vi, nhận diện và vẽ hình tế bào biểu bì vảy hành, tế bào trứng cá."
            }
        ]
    },
    {
        "chapter_num": "VI",
        "chapter_title": "TỪ TẾ BÀO ĐẾN CƠ THỂ",
        "domain": "Vật sống (Sinh học cơ thể)",
        "lessons": [
            {
                "id": 22,
                "title": "Cơ thể sinh vật",
                "pages": "75 - 78",
                "headings": [
                    ("I. Cơ thể là gì?", ["Cơ thể là một thể thống nhất thực hiện đầy đủ các quá trình sống: cảm ứng & vận động, dinh dưỡng, hô hấp, sinh trưởng, sinh sản, bài tiết."]),
                    ("II. Cơ thể đơn bào và cơ thể đa bào", [
                        "Cơ thể đơn bào: cấu tạo từ 1 tế bào duy nhất thực hiện mọi chức năng sống (trùng biến hình, vi khuẩn, trùng roi, nấm men...).",
                        "Cơ thể đa bào: cấu tạo từ nhiều tế bào phân hoá thành các mô, cơ quan phối hợp nhau (thực vật, động vật, con người...)."
                    ])
                ],
                "matrix_focus": "Nêu các dấu hiệu sống cơ bản của một cơ thể; phân biệt cơ thể đơn bào và cơ thể đa bào qua ví dụ cụ thể."
            },
            {
                "id": 23,
                "title": "Tổ chức cơ thể đa bào",
                "pages": "79 - 82",
                "headings": [
                    ("I. Các cấp tổ chức của cơ thể đa bào", ["Sơ đồ trật tự từ thấp đến cao: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể."]),
                    ("II. Từ tế bào tạo thành mô", ["Khái niệm mô (tập hợp các tế bào có cùng hình dạng, cấu tạo và chức năng); mô ở thực vật (biểu bì, mô giậu, mạch rây, mạch gỗ); mô ở động vật (biểu bì, cơ, liên kết, thần kinh)."]),
                    ("III. Từ mô tạo thành cơ quan", ["Khái niệm cơ quan (tập hợp các mô cùng thực hiện một chức năng); cơ quan thực vật (rễ, thân, lá, hoa, quả, hạt); cơ quan động vật (tim, phổi, dạ dày, não, thận...)."]),
                    ("IV. Từ cơ quan tạo thành hệ cơ quan", ["Khái niệm hệ cơ quan (tập hợp các cơ quan phối hợp hoạt động); hệ hô hấp, tiêu hoá, tuần hoàn, thần kinh... ở động vật; hệ chồi và hệ rễ ở thực vật."])
                ],
                "matrix_focus": "Xác định đúng các cấp độ tổ chức cơ thể đa bào; lấy ví dụ và mô tả chức năng của mô, cơ quan, hệ cơ quan ở động vật và thực vật."
            },
            {
                "id": 24,
                "title": "Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào",
                "pages": "83 - 85",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính hiển vi, lam kính, lamen, ống nhỏ giọt...); 2. Mẫu vật (Nước ao hồ/môi trường nuôi cấy sinh vật; mô hình/tranh ảnh cơ thể người và cây xanh)."]),
                    ("II. Cách tiến hành", [
                        "1. Làm tiêu bản và quan sát cơ thể đơn bào trong nước ao (hồ) (Trùng giày, trùng roi, trùng biến hình...).",
                        "2. Quan sát mô hình hoặc tranh ảnh một số hệ cơ quan của cơ thể người (Hệ tiêu hoá, tuần hoàn, thần kinh).",
                        "3. Quan sát các cơ quan của thực vật (Rễ, thân, lá, hoa)."
                    ]),
                    ("III. Thu hoạch", ["Ghi chép, vẽ hình dạng sinh vật đơn bào quan sát được; hoàn thiện bảng mô tả các hệ cơ quan của người và các cơ quan của cây."])
                ],
                "matrix_focus": "Rèn luyện kĩ năng quan sát vi sinh vật đơn bào trong mẫu nước; kĩ năng mô tả cấu trúc các cơ quan, hệ cơ quan trên tranh/mô hình."
            }
        ]
    },
    {
        "chapter_num": "VII",
        "chapter_title": "ĐA DẠNG THẾ GIỚI SỐNG",
        "domain": "Vật sống (Đa dạng sinh học và Phân loại học)",
        "lessons": [
            {
                "id": 25,
                "title": "Hệ thống phân loại sinh vật",
                "pages": "86 - 89",
                "headings": [
                    ("I. Sự phân loại thế giới sống", ["Mục đích, ý nghĩa của việc phân loại sinh vật học (sắp xếp theo trật tự dựa trên đặc điểm chung)."]),
                    ("II. Hệ thống phân loại sinh vật", [
                        "Các đơn vị phân loại từ lớn đến nhỏ: Giới (Kingdom) → Ngành (Phylum) → Lớp (Class) → Bộ (Order) → Họ (Family) → Chi/Giống (Genus) → Loài (Species).",
                        "Tên khoa học của loài gồm tên Chi/Giống (viết hoa) + tên loài (viết thường), in nghiêng (theo danh pháp nhị vị Linnaeus)."
                    ]),
                    ("III. Giới và hệ thống phân loại năm giới", ["Hệ thống 5 giới (Whittaker, 1969): Giới Khởi sinh (Monera), Giới Nguyên sinh (Protista), Giới Nấm (Fungi), Giới Thực vật (Plantae), Giới Động vật (Animalia)."])
                ],
                "matrix_focus": "Trình bày các bậc phân loại từ loài đến giới; cách gọi tên khoa học; đặc điểm phân biệt 5 giới sinh vật."
            },
            {
                "id": 26,
                "title": "Khoá lưỡng phân",
                "pages": "90 - 91",
                "headings": [
                    ("I. Khoá lưỡng phân là gì?", ["Nguyên tắc: phân chia một tập hợp sinh vật ban đầu thành 2 nhóm dựa trên một cặp đặc điểm đối lập ở mỗi bước."]),
                    ("II. Xây dựng khoá lưỡng phân", ["Quy trình xây dựng khoá lưỡng phân để phân loại các đối tượng sinh vật qua các bước cụ thể; vẽ sơ đồ phân nhánh khoá lưỡng phân."])
                ],
                "matrix_focus": "Hiểu nguyên tắc khoá lưỡng phân; vận dụng xây dựng khoá lưỡng phân đơn giản để phân loại một nhóm sinh vật cho trước."
            },
            {
                "id": 27,
                "title": "Vi khuẩn",
                "pages": "92 - 95",
                "headings": [
                    ("I. Đa dạng vi khuẩn", ["Kích thước hiển vi (1 - vài µm); hình dạng phong phú (hình que/trực khuẩn, hình cầu/cầu khuẩn, hình xoắn/xoắn khuẩn, phẩy khuẩn)."]),
                    ("II. Cấu tạo của vi khuẩn", ["Cơ thể đơn bào, nhân sơ; gồm màng tế bào, tế bào chất, vùng nhân (chưa có màng nhân), thành tế bào; một số có vỏ nhầy, lông, roi."]),
                    ("III. Vai trò của vi khuẩn", ["Trong tự nhiên (phân huỷ xác hữu cơ, chu trình nitrogen); trong đời sống con người (lên men thực phẩm như sữa chua, dưa muối; làm dược phẩm)."]),
                    ("IV. Một số bệnh do vi khuẩn", ["Bệnh tả, bệnh lao phổi, nhiễm khuẩn da, uốn ván... Con đường lây truyền và biện pháp phòng tránh (ăn chín uống sôi, giữ vệ sinh)."])
                ],
                "matrix_focus": "Mô tả cấu tạo tế bào vi khuẩn (nhân sơ); phân tích vai trò có lợi và tác hại gây bệnh của vi khuẩn; nêu biện pháp phòng bệnh do vi khuẩn."
            },
            {
                "id": 28,
                "title": "Thực hành: Làm sữa chua và quan sát vi khuẩn",
                "pages": "96 - 97",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính hiển vi, lam kính, lamen, nhiệt kế, que cấy/ống hút, ấm đun...); 2. Nguyên liệu, mẫu vật (Sữa đặc có đường, sữa chua làm men cái, nước ấm ~50°C)."]),
                    ("II. Cách tiến hành", [
                        "1. Quan sát tế bào vi khuẩn trong sữa chua (Pha loãng sữa chua, làm tiêu bản, quan sát ở vật kính 10x, 40x thấy vi khuẩn lactic hình que/hình hạt).",
                        "2. Làm sữa chua (Pha sữa đặc với nước ấm ~50°C, cho sữa chua men cái, trộn đều, rót vào lọ, ủ ấm 10-12 giờ rồi để tủ lạnh)."
                    ]),
                    ("III. Thu hoạch", ["Vẽ hình ảnh vi khuẩn lactic quan sát được; giải thích hiện tượng đông tụ sữa và vị chua do vi khuẩn lactic lên men chuyển hoá đường thành acid lactic."])
                ],
                "matrix_focus": "Quy trình làm sữa chua tại nhà; giải thích cơ chế lên men lactic; kĩ năng quan sát vi khuẩn lactic trên kính hiển vi."
            },
            {
                "id": 29,
                "title": "Virus",
                "pages": "98 - 101",
                "headings": [
                    ("I. Đa dạng virus", ["Kích thước siêu hiển vi (20 - 300 nm); chưa có cấu tạo tế bào; 3 dạng hình học chính: dạng xoắn (Ebola, cúm), dạng khối (HIV, bại liệt), dạng hỗn hợp (thể thực khuẩn T4)."]),
                    ("II. Cấu tạo của virus", ["Chưa có cấu tạo tế bào, là dạng sống kí sinh nội bào bắt buộc; gồm vỏ protein (capsid) và lõi vật chất di truyền (DNA hoặc RNA); một số có vỏ ngoài và gai glycoprotein."]),
                    ("III. Vai trò và ứng dụng của virus", ["Sản xuất chế phẩm sinh học, thuốc trừ sâu sinh học, nghiên cứu di truyền và y học."]),
                    ("IV. Một số bệnh do virus và cách phòng bệnh", [
                        "1. Một số bệnh do virus (COVID-19, sởi, thuỷ đậu, sốt xuất huyết Dengue, cúm, dại, lở mồm long móng ở gia súc...).",
                        "2. Phòng bệnh do virus (Tiêm vaccine phòng bệnh, giữ vệ sinh, chế độ dinh dưỡng nâng cao miễn dịch; phân biệt kháng sinh không diệt được virus)."
                    ])
                ],
                "matrix_focus": "Mô tả cấu tạo virus; phân biệt virus và vi khuẩn; vai trò của vaccine và các biện pháp phòng chống dịch bệnh do virus gây ra."
            },
            {
                "id": 30,
                "title": "Nguyên sinh vật",
                "pages": "102 - 105",
                "headings": [
                    ("I. Đa dạng nguyên sinh vật", ["Nhóm sinh vật nhân thực, phần lớn đơn bào, kích thước hiển vi; đại diện: trùng roi xanh, trùng giày, trùng biến hình, tảo lục đơn bào, tảo silic..."]),
                    ("II. Vai trò của nguyên sinh vật", [
                        "1. Vai trò trong tự nhiên (Khởi đầu chuỗi thức ăn dưới nước, tảo quang hợp cung cấp O2 cho thuỷ sinh).",
                        "2. Vai trò đối với con người (Thực phẩm bổ sung - tảo xoắn Spirulina, xử lí môi trường nước, chế biến công nghiệp)."
                    ]),
                    ("III. Một số bệnh do nguyên sinh vật", [
                        "1. Bệnh sốt rét (Do trùng sốt rét Plasmodium lây qua muỗi Anophen truyền vào máu phá huỷ hồng cầu).",
                        "2. Bệnh kiết lị (Do trùng kiết lị Entamoeba lây qua đường ăn uống gây tổn thương ruột)."
                    ])
                ],
                "matrix_focus": "Nêu đặc điểm nguyên sinh vật; vai trò của tảo trong tự nhiên; phân tích con đường truyền bệnh, triệu chứng và phòng chống bệnh sốt rét, kiết lị."
            },
            {
                "id": 31,
                "title": "Thực hành: Quan sát nguyên sinh vật",
                "pages": "106 - 107",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính hiển vi, lam kính, lamen, ống nhỏ giọt, giấy thấm, cốc thuỷ tinh); 2. Mẫu vật (Nước ao hồ, rãnh nước đục hoặc dịch nuôi cấy cỏ rơm)."]),
                    ("II. Cách tiến hành", ["Lấy 1 giọt mẫu nước ao/dịch nuôi, đặt lên lam kính, đậy lamen, thấm nước thừa; quan sát ở vật kính 10x rồi chuyển 40x để tìm trùng roi, trùng giày."]),
                    ("III. Thu hoạch", ["Vẽ hình dáng trùng roi, trùng giày; mô tả cách di chuyển (bằng roi, bằng lông bơi, chân giả) và cấu tạo quan sát được."])
                ],
                "matrix_focus": "Kĩ năng lấy mẫu và làm tiêu bản giọt ép quan sát nguyên sinh vật; nhận biết trùng roi và trùng giày dưới kính hiển vi."
            },
            {
                "id": 32,
                "title": "Nấm",
                "pages": "108 - 111",
                "headings": [
                    ("I. Đa dạng nấm", ["Nấm là sinh vật nhân thực, đơn bào (nấm men) hoặc đa bào (nấm mốc, nấm lớn); cấu tạo sợi nấm; nấm đảm (nấm rơm, sò), nấm túi (nấm mốc, nấm men)."]),
                    ("II. Vai trò của nấm", ["Phân giải chất hữu cơ trong đất; làm thực phẩm (nấm rơm, mộc nhĩ, nấm hương); dược liệu (nấm linh chi, đông trùng hạ thảo); công nghiệp lên men (bia, rượu, tương, làm nở bánh mì)."]),
                    ("III. Một số bệnh do nấm", ["Gây bệnh ở người (hắc lào, lang ben, nấm lưỡi, nấm da); gây mốc thối hỏng thực phẩm; ngộ độc nấm độc ngoài tự nhiên (cách nhận biết nấm độc có vòng cuống, bao gốc, sặc sỡ)."])
                ],
                "matrix_focus": "Phân loại nấm; phân tích vai trò có lợi trong đời sống và sản xuất; tác hại gây bệnh; dấu hiệu nhận biết nấm độc và phòng ngộ độc nấm."
            },
            {
                "id": 33,
                "title": "Thực hành: Quan sát các loại nấm",
                "pages": "112 - 114",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính hiển vi, kính lúp, panh, dao mổ, lam kính, lamen, găng tay, khẩu trang); 2. Mẫu vật (Bánh mì/cơm nguội bị mốc; nấm rơm, nấm sò, mộc nhĩ tươi)."]),
                    ("II. Cách tiến hành", [
                        "1. Quan sát các loại nấm mốc (Quan sát đám mốc bằng mắt và kính lúp; làm tiêu bản sợi nấm mốc quan sát dưới kính hiển vi).",
                        "2. Quan sát một số loại nấm thường gặp (Bổ dọc thân nấm lớn, đối chiếu các bộ phận: mũ nấm, phiến nấm, cuống nấm, vòng cuống, bao gốc, sợi nấm)."
                    ]),
                    ("III. Thu hoạch", ["Hoàn thành bảng so sánh nấm mốc và nấm lớn; vẽ sơ đồ cấu tạo thể quả của nấm đảm (nấm rơm/nấm sò) và chú thích đầy đủ các bộ phận."])
                ],
                "matrix_focus": "Kĩ năng thao tác quan sát nấm mốc dưới kính hiển vi; nhận diện và phân tích các bộ phận cấu tạo thể quả của nấm đảm."
            },
            {
                "id": 34,
                "title": "Thực vật",
                "pages": "115 - 122",
                "headings": [
                    ("I. Đa dạng thực vật", ["Số lượng loài phong phú, đa dạng về kích thước, môi trường sống (dưới nước, trên cạn, đầm lầy, sa mạc...)."]),
                    ("II. Các nhóm thực vật", [
                        "1. Thực vật không có mạch: Ngành Rêu (rễ giả, thân và lá chưa có mạch dẫn, sinh sản bằng bào tử, sống nơi ẩm ướt).",
                        "2. Thực vật có mạch: a) Ngành Dương xỉ (có rễ thật, thân, lá có mạch dẫn, sinh sản bằng bào tử); b) Ngành Hạt trần (đã có hạt nhưng hạt nằm lộ trên lá noãn hở/nón, chưa có hoa quả - thông, vạn tuế); c) Ngành Hạt kín (cơ quan sinh dưỡng phát triển đa dạng có mạch dẫn hoàn thiện, cơ quan sinh sản là hoa, quả, hạt nằm trong quả)."
                    ]),
                    ("III. Vai trò của thực vật", [
                        "1. Vai trò đối với môi trường (Quang hợp giải phóng O2, hấp thụ CO2, điều hoà khí hậu, giữ đất, giữ nước, chống xói mòn sạt lở lũ quét).",
                        "2. Vai trò đối với động vật và con người (Cung cấp thức ăn, nơi ở; cung cấp lương thực, thực phẩm, gỗ, dược liệu, làm cảnh; một số cây có độc tính cần lưu ý)."
                    ])
                ],
                "matrix_focus": "Đặc điểm phân biệt 4 ngành thực vật (Rêu, Dương xỉ, Hạt trần, Hạt kín); vai trò to lớn của thực vật đối với môi trường và đời sống con người."
            },
            {
                "id": 35,
                "title": "Thực hành: Quan sát và phân biệt một số nhóm thực vật",
                "pages": "123 - 124",
                "headings": [
                    ("I. Chuẩn bị", ["1. Thiết bị, dụng cụ (Kính lúp, panh, dao mổ, khay men); 2. Mẫu vật (Cây rêu tường, cây dương xỉ có túi bào tử, cành thông mang nón, cây hạt kín có hoa quả)."]),
                    ("II. Cách tiến hành", [
                        "1. Quan sát đại diện thực vật không có mạch (Cây rêu: rễ giả, thân, lá, túi bào tử).",
                        "2. Quan sát đại diện ngành Dương xỉ (Mặt dưới lá có các ổ túi bào tử, lá non cuộn tròn đầu).",
                        "3. Quan sát đại diện ngành Hạt trần (Nón đực, nón cái, vảy nón mang hạt thông).",
                        "4. Quan sát đại diện ngành Hạt kín (Rễ cọc/chùm, gân lá song song/hình mạng, cấu tạo hoa, quả, hạt)."
                    ]),
                    ("III. Thu hoạch", ["Phân loại các mẫu vật vào đúng ngành thực vật; lập bảng so sánh đặc điểm hình thái cơ quan sinh dưỡng và cơ quan sinh sản giữa 4 ngành."])
                ],
                "matrix_focus": "Kĩ năng quan sát hình thái, phân tích cơ quan sinh dưỡng và sinh sản để xếp các mẫu vật thực vật vào đúng 4 ngành."
            },
            {
                "id": 36,
                "title": "Động vật",
                "pages": "125 - 132",
                "headings": [
                    ("I. Đa dạng động vật", ["Đa dạng về loài, môi trường sống, kích thước, tập tính dinh dưỡng và vận động."]),
                    ("II. Các nhóm động vật", [
                        "1. Động vật không xương sống (Không có cột sống bên trong): Ngành Ruột khoang (thuỷ tức, sứa, san hô); Ngành Giun dẹp (sán lá gan, sán dây); Ngành Giun tròn (giun đũa, giun kim); Ngành Giun đốt (giun đất, đỉa); Ngành Thân mềm (trai, ốc, mực, bạch tuộc); Ngành Chân khớp (tôm, cua, nhện, côn trùng).",
                        "2. Động vật có xương sống (Có bộ xương trong với cột sống): Lớp Cá (cá chép, cá nhám); Lớp Lưỡng cư (ếch đồng, cóc); Lớp Bò sát (thằn lằn, cá sấu, rắn); Lớp Chim (bồ câu, gà); Lớp Động vật có vú/Thú (thỏ, mèo, voi, người)."
                    ]),
                    ("III. Vai trò của động vật", [
                        "1. Vai trò đối với tự nhiên (Mắt xích thức ăn duy trì cân bằng sinh thái, thụ phấn cho cây, phát tán hạt).",
                        "2. Vai trò đối với con người (Cung cấp thực phẩm, dược liệu, nguyên liệu sản xuất, sức kéo, giải trí, bảo vệ an ninh)."
                    ]),
                    ("IV. Tác hại của động vật", ["Động vật truyền bệnh (muỗi, chuột), kí sinh gây bệnh (giun sán), phá hại mùa màng (sâu bọ, ốc bươu vàng); biện pháp phòng tránh bệnh giun sán."])
                ],
                "matrix_focus": "Phân biệt ĐVKXS và ĐVCXS; đặc điểm nhận biết các ngành ĐVKXS và các lớp ĐVCXS; phân tích vai trò và tác hại của động vật đối với con người."
            },
            {
                "id": 37,
                "title": "Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên",
                "pages": "133 - 134",
                "headings": [
                    ("I. Chuẩn bị", ["1. Địa điểm (Vườn trường, công viên, khu sinh thái an toàn); 2. Dụng cụ (Ống nhòm, kính lúp, máy ảnh/điện thoại, vở ghi chép); 3. Yêu cầu (Kỉ luật, an toàn, bảo vệ sinh vật)."]),
                    ("II. Cách tiến hành", ["Quan sát động vật ở các tầng tán cây, mặt đất, bờ rào, nguồn nước; ghi nhận đặc điểm hình thái, cơ quan di chuyển, môi trường sống và chụp ảnh mẫu vật."]),
                    ("III. Thu hoạch", ["Hoàn thành bảng thống kê tên động vật, môi trường sống, đặc điểm nổi bật, phân nhóm phân loại; nhận xét mối liên hệ giữa hình thái và lối sống."])
                ],
                "matrix_focus": "Kĩ năng quan sát, nhận diện động vật ngoài tự nhiên; phân loại động vật theo môi trường sống và nhóm phân loại lớn."
            },
            {
                "id": 38,
                "title": "Đa dạng sinh học",
                "pages": "135 - 138",
                "headings": [
                    ("I. Đa dạng sinh học là gì?", ["Khái niệm đa dạng sinh học (đa dạng về nguồn gene, đa dạng loài và đa dạng hệ sinh thái trên Trái Đất)."]),
                    ("II. Vai trò của đa dạng sinh học", [
                        "1. Vai trò của đa dạng sinh học trong tự nhiên (Duy trì cân bằng sinh thái, điều hoà khí hậu, bảo vệ đất và nguồn nước).",
                        "2. Vai trò của đa dạng sinh học đối với con người (Cung cấp lương thực, thực phẩm, dược liệu, vật liệu xây dựng, du lịch sinh thái)."
                    ]),
                    ("III. Nguyên nhân gây suy giảm đa dạng sinh học và hậu quả", [
                        "1. Nguyên nhân (Phá rừng, săn bắt buôn bán động vật hoang dã, ô nhiễm môi trường, biến đổi khí hậu).",
                        "2. Hậu quả (Mất cân bằng sinh thái, gia tăng thiên tai lũ lụt hạn hán, tuyệt chủng các loài sinh vật quý hiếm)."
                    ]),
                    ("IV. Bảo vệ đa dạng sinh học", ["Trồng và bảo vệ rừng; thành lập vườn quốc gia, khu bảo tồn; nghiêm cấm săn bắt, buôn bán động vật hoang dã; tuyên truyền thực thi Luật Bảo vệ môi trường."])
                ],
                "matrix_focus": "Nêu khái niệm và vai trò của đa dạng sinh học; phân tích nguyên nhân và hậu quả của suy giảm ĐDSH; đề xuất hành động cụ thể để bảo vệ ĐDSH."
            },
            {
                "id": 39,
                "title": "Tìm hiểu sinh vật ngoài thiên nhiên",
                "pages": "139 - 143",
                "headings": [
                    ("I. Chuẩn bị", ["1. Địa điểm (Vườn trường, thảo cầm viên, khu bảo tồn thiên nhiên); 2. Dụng cụ (Vợt bắt bướm, vợt thuỷ sinh, panh kẹp, kính lúp, ống nhòm, lọ mẫu, tài liệu nhận diện); 3. Yêu cầu (Tuyệt đối tuân thủ hướng dẫn an toàn)."]),
                    ("II. Cách tiến hành", [
                        "1. Hướng dẫn chung (Quan sát không phá huỷ sinh cảnh, đếm số lượng, chụp ảnh mẫu vật, làm bộ sưu tập ảnh).",
                        "2. Tìm hiểu về thực vật và động vật (Cách quan sát cơ quan sinh dưỡng và sinh sản thực vật; cách bắt, thả an toàn mẫu động vật không xương sống)."
                    ]),
                    ("III. Thu hoạch", ["Trưng bày mẫu vật và bộ ảnh; hoàn thành Phiếu học tập số 1 (đặc điểm thực vật) và Phiếu học tập số 2 (đặc điểm động vật); nhận xét về độ đa dạng của khu vực quan sát."])
                ],
                "matrix_focus": "Phương pháp nghiên cứu thực địa; thu thập dữ liệu về động thực vật ngoài tự nhiên; lập báo cáo đánh giá mức độ đa dạng sinh vật địa phương."
            }
        ]
    },
    {
        "chapter_num": "VIII",
        "chapter_title": "LỰC TRONG ĐỜI SỐNG",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Cơ học)",
        "lessons": [
            {
                "id": 40,
                "title": "Lực là gì?",
                "pages": "144 - 146",
                "headings": [
                    ("I. Lực và sự đẩy, kéo", ["Khái niệm lực (tác dụng đẩy hoặc kéo của vật này lên vật khác); khi vật A đẩy hoặc kéo vật B ta nói vật A tác dụng lực lên vật B."]),
                    ("II. Tác dụng của lực", [
                        "1. Lực và chuyển động của vật (Lực làm vật bắt đầu chuyển động, chuyển động nhanh dần, chậm dần, dừng lại, đổi hướng chuyển động).",
                        "2. Lực và hình dạng của vật (Lực làm vật bị biến dạng; có thể vừa làm thay đổi chuyển động vừa biến dạng)."
                    ]),
                    ("III. Lực tiếp xúc và lực không tiếp xúc", ["Lực tiếp xúc xuất hiện khi có sự chạm/tiếp xúc giữa các vật; Lực không tiếp xúc xuất hiện không cần có sự tiếp xúc trực tiếp (lực từ của nam châm, lực hút Trái Đất)."])
                ],
                "matrix_focus": "Nêu định nghĩa lực; nhận biết các tác dụng của lực (thay đổi chuyển động, biến dạng); phân biệt lực tiếp xúc và lực không tiếp xúc qua ví dụ."
            },
            {
                "id": 41,
                "title": "Biểu diễn lực",
                "pages": "147 - 150",
                "headings": [
                    ("I. Các đặc trưng của lực", [
                        "1. Độ lớn của lực (Mức độ mạnh hay yếu của lực tác dụng).",
                        "2. Đơn vị lực và dụng cụ đo lực (Đơn vị là niuton, kí hiệu N; dụng cụ đo là lực kế; các bước dùng lực kế).",
                        "3. Phương và chiều của lực (Phương thẳng đứng/ngang/xiên; chiều từ trên xuống/dưới lên/trái sang phải...)."
                    ]),
                    ("II. Biểu diễn lực", ["Lực là một đại lượng vectơ được biểu diễn bằng một mũi tên: Gốc (điểm đặt lực), Hướng (phương và chiều), Độ dài (tỉ lệ với độ lớn theo tỉ xích quy ước)."])
                ],
                "matrix_focus": "Xác định các yếu tố của lực (điểm đặt, phương, chiều, độ lớn); vẽ hình biểu diễn lực theo tỉ xích cho trước; đọc các thông số từ hình biểu diễn lực."
            },
            {
                "id": 42,
                "title": "Biến dạng của lò xo",
                "pages": "151 - 153",
                "headings": [
                    ("I. Hiện tượng biến dạng của lò xo", ["Lò xo thay đổi chiều dài (dãn ra hoặc nén lại) khi chịu lực tác dụng; trở lại hình dạng ban đầu khi thôi tác dụng lực (biến dạng đàn hồi)."]),
                    ("II. Đặc điểm biến dạng của lò xo", ["Độ dãn của lò xo treo thẳng đứng: Δl = l - l0; độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo (hoặc độ lớn của lực kéo tác dụng lên lò xo)."])
                ],
                "matrix_focus": "Tính độ dãn của lò xo (Δl); vận dụng mối quan hệ tỉ lệ thuận giữa độ dãn lò xo và khối lượng vật treo để giải bài tập; nguyên lí lực kế."
            },
            {
                "id": 43,
                "title": "Trọng lượng, lực hấp dẫn",
                "pages": "154 - 156",
                "headings": [
                    ("I. Lực hút của Trái Đất", ["Trái Đất tác dụng lực hút lên mọi vật xung quanh nó; lực này có phương thẳng đứng, chiều hướng về phía tâm Trái Đất (từ trên xuống dưới)."]),
                    ("II. Trọng lượng và khối lượng", ["Trọng lượng là độ lớn lực hút của Trái Đất tác dụng lên vật (kí hiệu P, đơn vị N); Khối lượng là lượng chất của vật (m, đơn vị kg); Công thức liên hệ gần đúng trên Trái Đất: P = 10 x m."]),
                    ("III. Lực hấp dẫn", ["Mọi vật có khối lượng trong vũ trụ đều hút nhau bằng lực hấp dẫn; trọng lực là trường hợp riêng của lực hấp dẫn."])
                ],
                "matrix_focus": "Phân biệt rạch ròi giữa trọng lượng (N) và khối lượng (kg); vận dụng công thức P = 10 x m; giải thích các hiện tượng liên quan đến trọng lực."
            },
            {
                "id": 44,
                "title": "Lực ma sát",
                "pages": "157 - 159",
                "headings": [
                    ("I. Lực ma sát là gì?", ["Lực cản trở chuyển động xuất hiện tại bề mặt tiếp xúc giữa hai vật."]),
                    ("II. Lực ma sát nghỉ và lực ma sát trượt", [
                        "1. Lực ma sát nghỉ (Giữ cho vật đứng yên khi có lực đẩy/kéo tác dụng lên vật).",
                        "2. Lực ma sát trượt (Xuất hiện khi một vật trượt trên bề mặt của vật khác, cản trở chuyển động trượt)."
                    ]),
                    ("III. Tác dụng của lực ma sát đối với chuyển động", ["Ma sát có ích (giúp người đi lại không trượt ngã, xe phanh dừng, cầm nắm đồ vật); Ma sát có hại (làm mòn chi tiết máy, cản trở chuyển động xe cộ)."]),
                    ("IV. Ma sát trong an toàn giao thông", ["Khía rãnh trên lốp xe tăng ma sát; nguy cơ trượt ngã khi đường trơn ướt; quy định tốc độ an toàn khi trời mưa."])
                ],
                "matrix_focus": "Phân biệt ma sát nghỉ và ma sát trượt; phân tích vai trò có lợi / có hại của ma sát trong đời sống; biện pháp tăng giảm ma sát hợp lí."
            },
            {
                "id": 45,
                "title": "Lực cản của nước",
                "pages": "160 - 161",
                "headings": [
                    ("I. Thí nghiệm về lực cản của nước", ["Vật chuyển động trong nước luôn chịu lực cản của nước cản trở chuyển động của vật."]),
                    ("II. Lực cản của nước phụ thuộc yếu tố nào?", ["Lực cản của nước (và không khí) phụ thuộc vào diện tích mặt cản và hình dạng của vật; hình dạng thuôn khí động học (cá, tàu ngầm, máy bay) giúp giảm lực cản."])
                ],
                "matrix_focus": "Giải thích hiện tượng lực cản của chất lưu (nước, không khí); ứng dụng hình dạng khí động học để giảm lực cản trong chế tạo phương tiện."
            }
        ]
    },
    {
        "chapter_num": "IX",
        "chapter_title": "NĂNG LƯỢNG",
        "domain": "Năng lượng và sự biến đổi (Vật lí - Năng lượng)",
        "lessons": [
            {
                "id": 46,
                "title": "Năng lượng và sự truyền năng lượng",
                "pages": "162 - 164",
                "headings": [
                    ("I. Năng lượng", ["Mọi vật xung quanh đều có năng lượng; khi vật có năng lượng thì có thể tác dụng lực hoặc truyền nhiệt."]),
                    ("II. Năng lượng và tác dụng lực", ["Năng lượng đặc trưng cho khả năng tác dụng lực; vật có năng lượng càng lớn thì khả năng tác dụng lực càng mạnh."]),
                    ("III. Sự truyền năng lượng", ["Năng lượng có thể truyền từ vật này sang vật khác qua 2 cách: qua tác dụng lực (gió thổi cánh quạt) hoặc qua truyền nhiệt (bếp truyền nhiệt cho nước)."])
                ],
                "matrix_focus": "Hiểu khái niệm năng lượng; mối liên hệ giữa năng lượng và khả năng tác dụng lực; nhận biết 2 con đường truyền năng lượng trong thực tế."
            },
            {
                "id": 47,
                "title": "Một số dạng năng lượng",
                "pages": "165 - 167",
                "headings": [
                    ("I. Nhận biết năng lượng", ["Nhận biết năng lượng thông qua các biểu hiện phát ra ánh sáng, nhiệt độ, âm thanh, chuyển động."]),
                    ("II. Các dạng năng lượng", ["Động năng (năng lượng chuyển động), Thế năng hấp dẫn (năng lượng lưu trữ do ở độ cao), Hoá năng (năng lượng hoá học lưu trữ trong thức ăn, pin, nhiên liệu), Điện năng, Quang năng (năng lượng ánh sáng), Năng lượng âm, Nhiệt năng."])
                ],
                "matrix_focus": "Phân loại và gọi tên đúng 7 dạng năng lượng thông dụng; xác định dạng năng lượng chủ yếu trong các tình huống thực tiễn."
            },
            {
                "id": 48,
                "title": "Sự chuyển hoá năng lượng",
                "pages": "168 - 170",
                "headings": [
                    ("I. Chuyển hoá năng lượng", ["Năng lượng có thể chuyển hoá từ dạng này sang dạng khác (ví dụ: hoá năng → động năng, điện năng → nhiệt năng và quang năng). Sơ đồ dòng năng lượng."]),
                    ("II. Định luật bảo toàn năng lượng", ["Phát biểu: Năng lượng không tự sinh ra cũng không tự mất đi mà chỉ chuyển hoá từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác."])
                ],
                "matrix_focus": "Viết và phân tích sơ đồ chuyển hoá năng lượng trong các thiết bị; phát biểu và vận dụng định luật bảo toàn năng lượng giải thích hiện tượng."
            },
            {
                "id": 49,
                "title": "Năng lượng hao phí",
                "pages": "171 - 172",
                "headings": [
                    ("I. Năng lượng hữu ích", ["Phần năng lượng ban đầu chuyển thành dạng năng lượng phục vụ đúng mục đích sử dụng."]),
                    ("II. Năng lượng hao phí", [
                        "Phần năng lượng chuyển thành dạng năng lượng không mong muốn (thường toả ra dưới dạng nhiệt năng hoặc âm thanh).",
                        "1. Năng lượng hao phí khi đi xe đạp (ma sát, nhiệt toả ra).",
                        "2. Năng lượng hao phí khi ô tô chạy (nhiệt động cơ, ma sát, khói thải)."
                    ])
                ],
                "matrix_focus": "Phân biệt năng lượng hữu ích và năng lượng hao phí trong các quá trình sử dụng năng lượng; so sánh hiệu suất bóng đèn sợi đốt, compact và LED."
            },
            {
                "id": 50,
                "title": "Năng lượng tái tạo",
                "pages": "173 - 175",
                "headings": [
                    ("I. Nguồn năng lượng trong tự nhiên", ["Nguồn năng lượng không tái tạo (than đá, dầu mỏ, khí tự nhiên, urani - sẽ cạn kiệt); Nguồn năng lượng tái tạo (liên tục được bổ sung từ các quá trình tự nhiên)."]),
                    ("II. Nguồn năng lượng tái tạo", ["Năng lượng mặt trời, năng lượng gió, năng lượng nước (thuỷ điện), năng lượng sinh khối, năng lượng địa nhiệt; ưu điểm sạch, bảo vệ môi trường."])
                ],
                "matrix_focus": "Phân biệt nguồn năng lượng tái tạo và không tái tạo; nêu ưu - nhược điểm của các nguồn năng lượng tái tạo; ý nghĩa trong phát triển bền vững."
            },
            {
                "id": 51,
                "title": "Tiết kiệm năng lượng",
                "pages": "176 - 178",
                "headings": [
                    ("I. Tại sao cần tiết kiệm năng lượng?", ["Tiết kiệm chi phí, bảo tồn nguồn tài nguyên hữu hạn, giảm ô nhiễm môi trường và giảm phát thải khí nhà kính."]),
                    ("II. Một số biện pháp tiết kiệm năng lượng", ["Tắt thiết bị khi không dùng, sử dụng thiết bị tiết kiệm điện (đèn LED, biến tần), đi bộ/xe đạp/phương tiện công cộng, tận dụng gió và ánh sáng tự nhiên."])
                ],
                "matrix_focus": "Giải thích tính cấp bách của tiết kiệm năng lượng; đề xuất các hành động cụ thể để tiết kiệm điện, nước, nhiên liệu ở trường học và gia đình."
            }
        ]
    },
    {
        "chapter_num": "X",
        "chapter_title": "TRÁI ĐẤT VÀ BẦU TRỜI",
        "domain": "Trái Đất và bầu trời (Thiên văn học)",
        "lessons": [
            {
                "id": 52,
                "title": "Chuyển động nhìn thấy của Mặt Trời. Thiên thể",
                "pages": "179 - 182",
                "headings": [
                    ("I. Chuyển động nhìn thấy của Mặt Trời", [
                        "1. Mặt Trời mọc và lặn (Ban ngày thấy Mặt Trời mọc ở hướng đông, lặn ở hướng tây).",
                        "2. Giải thích chuyển động của Mặt Trời nhìn từ Trái Đất (Chuyển động nhìn thấy là do Trái Đất tự quay quanh trục của nó theo chiều từ tây sang đông)."
                    ]),
                    ("II. Phân biệt các thiên thể", ["Sao (thiên thể tự phát sáng, ví dụ: Mặt Trời); Hành tinh (thiên thể không tự phát sáng quay quanh sao); Vệ tinh (quay quanh hành tinh, ví dụ: Mặt Trăng); Sao chổi, chòm sao."])
                ],
                "matrix_focus": "Giải thích hiện tượng ngày và đêm, chuyển động nhìn thấy của Mặt Trời dựa trên chuyển động tự quay của Trái Đất; phân biệt sao, hành tinh, vệ tinh."
            },
            {
                "id": 53,
                "title": "Mặt Trăng",
                "pages": "183 - 186",
                "headings": [
                    ("I. Mặt Trăng và các hình dạng nhìn thấy của Mặt Trăng", [
                        "1. Mặt Trăng (Là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời).",
                        "2. Hình dạng nhìn thấy của Mặt Trăng (Không Trăng/Trăng non, Trăng khuyết đầu tháng, Bán nguyệt đầu tháng, Trăng tròn, Bán nguyệt cuối tháng, Trăng khuyết cuối tháng)."
                    ]),
                    ("II. Giải thích sự khác nhau về hình dạng nhìn thấy của Mặt Trăng (các pha của Mặt Trăng)", ["Do vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng thay đổi khi Mặt Trăng quay quanh Trái Đất, người quan sát trên Trái Đất thấy các phần diện tích được chiếu sáng khác nhau."])
                ],
                "matrix_focus": "Nêu đặc điểm của Mặt Trăng; giải thích nguyên nhân hình thành các pha (hình dạng nhìn thấy) của Mặt Trăng và mối liên hệ với lịch âm."
            },
            {
                "id": 54,
                "title": "Hệ Mặt Trời",
                "pages": "187 - 189",
                "headings": [
                    ("I. Hệ Mặt Trời", ["Gồm Mặt Trời ở trung tâm và 8 hành tinh quay quanh cùng các tiểu hành tinh, sao chổi, thiên thạch; Lực hấp dẫn giữ các hành tinh chuyển động quanh Mặt Trời."]),
                    ("II. Các hành tinh của Hệ Mặt Trời", [
                        "1. Các hành tinh vòng trong (Hành tinh đất đá, gần Mặt Trời): Thuỷ tinh (Mercury), Kim tinh (Venus), Trái Đất (Earth), Hoả tinh (Mars).",
                        "2. Các hành tinh vòng ngoài (Hành tinh khí khổng lồ, xa Mặt Trời): Mộc tinh (Jupiter), Thổ tinh (Saturn), Thiên Vương tinh (Uranus), Hải Vương tinh (Neptune)."
                    ])
                ],
                "matrix_focus": "Kể tên và sắp xếp đúng thứ tự khoảng cách 8 hành tinh tính từ Mặt Trời; phân biệt các hành tinh vòng trong và vòng ngoài."
            },
            {
                "id": 55,
                "title": "Ngân Hà",
                "pages": "190 - 192",
                "headings": [
                    ("I. Ngân Hà là gì?", ["Dải Ngân Hà trên bầu trời đêm; Bản chất Ngân Hà là một thiên hà (Milky Way) hình xoắn ốc chứa hàng trăm tỉ ngôi sao, khí và bụi vũ trụ."]),
                    ("II. Ngân Hà và Hệ Mặt Trời", ["Hệ Mặt Trời chỉ là một bộ phận rất nhỏ nằm ở một nhánh xoắn ốc của Ngân Hà (cách tâm Ngân Hà khoảng 26.000 năm ánh sáng); Ngân Hà tự quay quanh tâm."])
                ],
                "matrix_focus": "Mô tả hình dạng và cấu trúc cơ bản của Ngân Hà; xác định vị trí của Hệ Mặt Trời trong Ngân Hà; mở rộng nhận thức về không gian vũ trụ."
            }
        ]
    }
]

def generate_document():
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
    
    run_subject = p_header.add_run("MÔN: KHOA HỌC TỰ NHIÊN 6 (BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)")
    run_subject.font.size = Pt(11)
    run_subject.font.bold = True
    run_subject.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

    # Dòng phân cách ngang
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(8)
    p_title.paragraph_format.space_after = Pt(4)
    run_title = p_title.add_run("HỆ THỐNG ĐỀ MỤC KIẾN THỨC CỐT LÕI VÀ MA TRẬN NỘI DUNG\nPHỤC VỤ KIỂM TRA THƯỜNG XUYÊN VÀ ĐỊNH KÌ LỚP 6")
    run_title.font.size = Pt(16)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(0x8B, 0x00, 0x00) # Đỏ sẫm giáo dục

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.paragraph_format.space_after = Pt(14)
    run_sub = p_sub.add_run("(Tổng hợp toàn bộ 10 Chương – 55 Bài học theo chuẩn SGK Khoa học tự nhiên 6 – NXB Giáo dục Việt Nam)")
    run_sub.font.size = Pt(10.5)
    run_sub.font.italic = True
    run_sub.font.color.rgb = RGBColor(0x55, 0x55, 0x55)

    # 2. HỘP THÔNG TIN MỤC ĐÍCH SỬ DỤNG
    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_after = Pt(10)
    p_intro.paragraph_format.line_spacing = 1.15
    run_intro_title = p_intro.add_run("MỤC ĐÍCH SỬ DỤNG VÀ HƯỚNG DẪN XÂY DỰNG MA TRẬN ĐỀ KIỂM TRA:\n")
    run_intro_title.bold = True
    run_intro_title.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)
    
    intro_text = (
        "1. Xây dựng đề kiểm tra thường xuyên: Sử dụng các đề mục I, II, III... và tiểu mục 1, 2, 3... của từng bài học "
        "làm đơn vị kiến thức (chuẩn kiến thức, kĩ năng) để ra câu hỏi trắc nghiệm khách quan hoặc câu hỏi tự luận ngắn.\n"
        "2. Xây dựng ma trận & bản đặc tả đề kiểm tra định kì (Giữa kì I, Cuối kì I, Giữa kì II, Cuối kì II): "
        "Căn cứ vào bảng đề mục chi tiết dưới đây để phân bổ tỉ lệ % điểm số và số lượng câu hỏi theo 4 mức độ đánh giá: "
        "Nhận biết (40%), Thông hiểu (30%), Vận dụng (20%), Vận dụng cao (10%) theo hướng dẫn của Bộ Giáo dục và Đào tạo.\n"
        "3. Tích hợp liên môn KHTN: Dễ dàng phân chia tỉ lệ điểm giữa 3 mạch nội dung: Vật lí (Cơ học, Năng lượng), "
        "Hoá học (Chất và sự biến đổi của chất), Sinh học (Tế bào, Cơ thể, Đa dạng thế giới sống) và Thiên văn học."
    )
    p_intro.add_run(intro_text)

    # 3. BẢNG TỔNG HỢP CÁC CHƯƠNG VÀ ĐỊNH HƯỚNG KIỂM TRA ĐỊNH KÌ
    p_tbl_ov = doc.add_paragraph()
    p_tbl_ov.paragraph_format.space_before = Pt(8)
    p_tbl_ov.paragraph_format.space_after = Pt(4)
    run_tov = p_tbl_ov.add_run("BẢNG 1: TỔNG QUAN PHÂN PHỐI CHƯƠNG TRÌNH VÀ PHẠM VI KIỂM TRA ĐỊNH KÌ")
    run_tov.bold = True
    run_tov.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

    tbl_ov = doc.add_table(rows=1, cols=5)
    tbl_ov.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_ov.autofit = False
    set_table_borders(tbl_ov, "B0C4DE")

    hdr_cells = tbl_ov.rows[0].cells
    hdr_titles = ["Chương", "Tên Chương", "Số Bài", "Trang SGK", "Phạm vi kiểm tra định kì khuyến nghị"]
    hdr_widths = [Inches(0.8), Inches(2.2), Inches(0.7), Inches(0.9), Inches(2.1)]
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
        ("Chương I", "Mở đầu về Khoa học tự nhiên", "Bài 1 - 8 (8 bài)", "Tr. 7 - 27", "Kiểm tra Giữa kì I"),
        ("Chương II", "Chất quanh ta", "Bài 9 - 11 (3 bài)", "Tr. 28 - 41", "Kiểm tra Giữa kì I & Cuối kì I"),
        ("Chương III", "Một số vật liệu, nhiên liệu, thực phẩm", "Bài 12 - 15 (4 bài)", "Tr. 42 - 55", "Kiểm tra Cuối kì I"),
        ("Chương IV", "Hỗn hợp. Tách chất ra khỏi hỗn hợp", "Bài 16 - 17 (2 bài)", "Tr. 56 - 63", "Kiểm tra Cuối kì I"),
        ("Chương V", "Tế bào – Đơn vị cơ bản của sự sống", "Bài 18 - 21 (4 bài)", "Tr. 64 - 74", "Kiểm tra Cuối kì I"),
        ("Chương VI", "Từ tế bào đến cơ thể", "Bài 22 - 24 (3 bài)", "Tr. 75 - 85", "Kiểm tra Cuối kì I & Giữa kì II"),
        ("Chương VII", "Đa dạng thế giới sống", "Bài 25 - 39 (15 bài)", "Tr. 86 - 143", "Kiểm tra Giữa kì II & Cuối kì II"),
        ("Chương VIII", "Lực trong đời sống", "Bài 40 - 45 (6 bài)", "Tr. 144 - 161", "Kiểm tra Giữa kì II & Cuối kì II"),
        ("Chương IX", "Năng lượng", "Bài 46 - 51 (6 bài)", "Tr. 171 - 178", "Kiểm tra Cuối kì II"),
        ("Chương X", "Trái Đất và bầu trời", "Bài 52 - 55 (4 bài)", "Tr. 179 - 192", "Kiểm tra Cuối kì II")
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

    # 4. BẢNG CHI TIẾT 55 BÀI VÀ HỆ THỐNG ĐỀ MỤC I, II, III...
    doc.add_page_break()

    p_tbl_det = doc.add_paragraph()
    p_tbl_det.paragraph_format.space_before = Pt(8)
    p_tbl_det.paragraph_format.space_after = Pt(6)
    run_tdet = p_tbl_det.add_run("BẢNG 2: DANH MỤC CHI TIẾT ĐỀ MỤC I, II, III... TRONG 55 BÀI HỌC SGK KHTN 6\n(DÙNG LÀM ĐỀ MỤC KIẾN THỨC TẠO MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ & THƯỜNG XUYÊN)")
    run_tdet.bold = True
    run_tdet.font.size = Pt(12)
    run_tdet.font.color.rgb = RGBColor(0x8B, 0x00, 0x00)

    for ch_data in chapters_data:
        # Tiêu đề Chương
        p_ch = doc.add_paragraph()
        p_ch.paragraph_format.space_before = Pt(14)
        p_ch.paragraph_format.space_after = Pt(4)
        p_ch.paragraph_format.keep_with_next = True
        run_ch = p_ch.add_run(f"CHƯƠNG {ch_data['chapter_num']}: {ch_data['chapter_title'].upper()}")
        run_ch.bold = True
        run_ch.font.size = Pt(12)
        run_ch.font.color.rgb = RGBColor(0x1B, 0x36, 0x5D)

        run_dom = p_ch.add_run(f"  [Mạch kiến thức: {ch_data['domain']}]")
        run_dom.font.size = Pt(10)
        run_dom.font.italic = True
        run_dom.font.color.rgb = RGBColor(0x66, 0x66, 0x66)

        # Tạo bảng cho từng chương
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

    # 5. PHẦN HƯỚNG DẪN LẬP BẢN ĐẶC TẢ VÀ MA TRẬN ĐỀ KIỂM TRA
    doc.add_page_break()
    p_guide_title = doc.add_paragraph()
    p_guide_title.paragraph_format.space_before = Pt(8)
    p_guide_title.paragraph_format.space_after = Pt(6)
    r_gt = p_guide_title.add_run("PHỤ LỤC: MẪU KHUNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ KHTN 6\n(THEO CÔNG VĂN HƯỚNG DẪN CỦA BỘ GIÁO DỤC VÀ ĐÀO TẠO)")
    r_gt.bold = True
    r_gt.font.size = Pt(13)
    r_gt.font.color.rgb = RGBColor(0x8B, 0x00, 0x00)

    p_guide_desc = doc.add_paragraph()
    p_guide_desc.paragraph_format.space_after = Pt(8)
    p_guide_desc.add_run(
        "Giáo viên khi thiết lập ma trận đề kiểm tra giữa kì hoặc cuối kì có thể sao chép trực tiếp các đề mục I, II, III... "
        "ở Bảng 2 vào cột 'Chủ đề / Đơn vị kiến thức', sau đó phân bố số câu hỏi theo 4 mức độ nhận thức như khung chuẩn sau:"
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
        ("1", "Mở đầu KHTN", "Bài 1: Khái niệm KHTN, vật sống & không sống", "1 TN", "1 TN", "0", "0", "2", "5%"),
        ("2", "An toàn PTH & Dụng cụ", "Bài 2, 3, 4: Kí hiệu an toàn, Kính lúp, Kính hiển vi", "2 TN", "1 TN", "0", "0", "3", "7.5%"),
        ("3", "Các phép đo", "Bài 5, 6, 7, 8: Đo chiều dài, khối lượng, thời gian, nhiệt độ", "3 TN", "2 TN", "1 TL (0.5đ)", "0", "6", "17.5%"),
        ("4", "Chất quanh ta", "Bài 9, 10, 11: Sự đa dạng của chất, các thể, Oxygen & Không khí", "3 TN", "2 TN", "1 TL (1.0đ)", "0", "6", "22.5%"),
        ("5", "Vật liệu, nhiên liệu", "Bài 12, 13, 14, 15: Vật liệu, nguyên liệu, nhiên liệu, thực phẩm", "2 TN", "2 TN", "1 TL (0.5đ)", "0", "5", "15%"),
        ("6", "Hỗn hợp & Tách chất", "Bài 16, 17: Dung dịch, huyền phù, phương pháp tách chất", "2 TN", "1 TN", "1 TL (0.5đ)", "0", "4", "12.5%"),
        ("7", "Tế bào", "Bài 18, 19, 20: Cấu tạo tế bào, lớn lên và sinh sản", "3 TN", "2 TN", "1 TL (0.5đ)", "1 TL (0.5đ)", "7", "20%"),
        ("TỔNG", "", "Toàn bộ ma trận đề Giữa kì / Cuối kì", "16 TN (4.0đ)", "11 TN (2.75đ)", "4 TL (2.25đ)", "1 TL (1.0đ)", "32", "100%")
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
    r_ft = p_ft.add_run("Tài liệu được chuẩn hóa và biên soạn chuyên sâu phục vụ công tác khảo thí môn KHTN 6.")
    r_ft.font.size = Pt(9)
    r_ft.font.italic = True
    r_ft.font.color.rgb = RGBColor(0x77, 0x77, 0x77)

    output_path = "He_thong_de_muc_KHTN_6_Tao_Ma_tran_Kiem_tra.docx"
    doc.save(output_path)
    print(f"Đã tạo thành công file Word: {output_path}")

if __name__ == "__main__":
    generate_document()
