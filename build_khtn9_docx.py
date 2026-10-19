# -*- coding: utf-8 -*-
"""
Script tạo file docx: Hệ thống đề mục SGK Khoa học tự nhiên 9 (Kết nối tri thức với cuộc sống)
dùng để lập ma trận đề kiểm tra thường xuyên và kiểm tra định kì lớp 9.
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

# Dữ liệu 51 bài học thuộc 14 Chương + Phần Mở đầu KHTN 9
chapters_data_khtn9 = [
    {
        "chapter_num": "MỞ ĐẦU",
        "chapter_title": "NHẬN BIẾT MỘT SỐ DỤNG CỤ, HOÁ CHẤT. THUYẾT TRÌNH MỘT VẤN ĐỀ KHOA HỌC",
        "domain": "Phương pháp và kĩ năng khoa học",
        "lessons": [
            {
                "id": 1,
                "title": "Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học",
                "pages": "6 – 14",
                "headings": [
                    ("I. Giới thiệu một số dụng cụ và cách sử dụng", [
                        "1. Một số dụng cụ thí nghiệm quang học: Nguồn sáng (đèn sợi đốt 12V, đèn laser), Bản bán trụ và bảng chia độ, Bộ dụng cụ tìm hiểu tính chất ảnh qua thấu kính (thấu kính hội tụ, thấu kính phân kì, màn chắn, vật F, giá quang học).",
                        "2. Một số dụng cụ thí nghiệm điện từ: Điện kế (phát hiện dòng điện cảm ứng), Đồng hồ đo điện đa năng (đo $I, U, R$), Cuộn dây dẫn kín có hai đèn LED song song ngược cực.",
                        "3. Một số dụng cụ thí nghiệm tìm hiểu chất và biến đổi chất (ống nghiệm chịu nhiệt, ống sinh hàn, phễu chiết...).",
                        "4. Dụng cụ dùng trong quan sát nhiễm sắc thể (kính hiển vi quang học, lam kính, lamen, kim mũi mác)."
                    ]),
                    ("II. Một số hoá chất cơ bản trong phòng thí nghiệm", [
                        "Các hoá chất thường dùng trong KHTN 9 (kim loại, phi kim, acid, base, muối, hợp chất hữu cơ) và quy tắc an toàn khi sử dụng."
                    ]),
                    ("III. Viết và trình bày báo cáo một vấn đề khoa học", [
                        "1. Cấu trúc báo cáo khoa học (Giới thiệu, Phương pháp, Kết quả, Thảo luận, Kết luận, Kiến nghị).",
                        "2. Báo cáo treo tường (Poster khoa học: bố cục, hình ảnh, biểu đồ, kích thước chữ)."
                    ]),
                    ("IV. Bài thuyết trình một vấn đề khoa học", [
                        "1. Thuyết trình trên các phần mềm trình chiếu (PowerPoint, Canva...).",
                        "2. Kĩ năng thuyết trình và phản biện khoa học trước tập thể."
                    ])
                ],
                "matrix_focus": "Nhận biết các dụng cụ quang học, điện từ, hoá chất cơ bản; sử dụng an toàn thiết bị thí nghiệm; các bước viết báo cáo khoa học và trình bày bài thuyết trình/poster."
            }
        ]
    },
    {
        "chapter_num": "I",
        "chapter_title": "NĂNG LƯỢNG CƠ HỌC",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 2,
                "title": "Động năng. Thế năng",
                "pages": "15 – 17",
                "headings": [
                    ("I. Động năng", [
                        "1. Khái niệm: Dạng năng lượng mà một vật có được do nó đang chuyển động gọi là động năng.",
                        "2. Các yếu tố ảnh hưởng đến động năng: Động năng của vật phụ thuộc vào khối lượng ($m$) và tốc độ ($v$) của vật (vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn)."
                    ]),
                    ("II. Thế năng", [
                        "1. Thế năng trọng trường: Dạng năng lượng vật có được khi ở một độ cao so với mặt đất (hoặc vật mốc); phụ thuộc vào khối lượng và độ cao của vật.",
                        "2. Thế năng đàn hồi: Dạng năng lượng vật có được khi bị biến dạng đàn hồi (lò xo bị nén hoặc kéo dãn, cung tên giương căng)."
                    ])
                ],
                "matrix_focus": "Nêu định nghĩa động năng, thế năng trọng trường, thế năng đàn hồi; phân tích các yếu tố ảnh hưởng đến động năng ($m, v$) và thế năng trọng trường ($m, h$); so sánh năng lượng của các vật trong tình huống thực tế."
            },
            {
                "id": 3,
                "title": "Cơ năng",
                "pages": "18 – 20",
                "headings": [
                    ("I. Cơ năng", [
                        "Định nghĩa: Cơ năng là tổng động năng và thế năng của vật ($W = W_đ + W_t$)."
                    ]),
                    ("II. Sự chuyển hoá năng lượng", [
                        "1. Sự chuyển hoá qua lại giữa động năng và thế năng trong chuyển động của vật (con lắc đơn, vật rơi tự do, bóng ném lên cao).",
                        "2. Định luật bảo toàn cơ năng (khi bỏ qua lực cản/ma sát): Trong quá trình chuyển động, cơ năng của vật được bảo toàn (thế năng giảm thì động năng tăng và ngược lại)."
                    ])
                ],
                "matrix_focus": "Khái niệm cơ năng; sự chuyển hoá giữa động năng và thế năng; vận dụng định luật bảo toàn cơ năng để giải thích chuyển động của tàu lượn siêu tốc, con lắc, thác nước."
            },
            {
                "id": 4,
                "title": "Công và công suất",
                "pages": "21 – 24",
                "headings": [
                    ("I. Công cơ học", [
                        "1. Điều kiện có công cơ học: Khi có lực tác dụng vào vật và làm vật dịch chuyển theo phương không vuông góc với lực.",
                        "2. Công thức tính công: $A = F \\times s$ (trong đó $F$ là lực tác dụng tính bằng N, $s$ là quãng đường dịch chuyển theo hướng của lực tính bằng m).",
                        "3. Đơn vị đo công: Jun (J), $1\\text{ J} = 1\\text{ N} \\times 1\\text{ m}$; kilôjun (kJ)."
                    ]),
                    ("II. Công suất", [
                        "1. Khái niệm công suất: Đại lượng đặc trưng cho tốc độ thực hiện công, được tính bằng công thực hiện trong một đơn vị thời gian ($P = \\frac{A}{t}$).",
                        "2. Đơn vị đo công suất: Oát (W), $1\\text{ W} = 1\\text{ J/s}$; kilôoát (kW), mã lực (HP)."
                    ])
                ],
                "matrix_focus": "Nhận biết trường hợp có công cơ học và công bằng 0; áp dụng công thức $A = F \\cdot s$ và $P = A/t$; so sánh công suất của các máy móc, động cơ."
            }
        ]
    },
    {
        "chapter_num": "II",
        "chapter_title": "ÁNH SÁNG",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 5,
                "title": "Khúc xạ ánh sáng",
                "pages": "25 – 29",
                "headings": [
                    ("I. Hiện tượng khúc xạ ánh sáng", [
                        "Hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác."
                    ]),
                    ("II. Định luật khúc xạ ánh sáng", [
                        "1. Tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới.",
                        "2. Chiết suất môi trường và góc tới - góc khúc xạ: Khi tia sáng truyền từ không khí vào nước/thuỷ tinh thì góc khúc xạ nhỏ hơn góc tới ($r < i$); khi truyền từ nước/thuỷ tinh ra không khí thì $r > i$."
                    ])
                ],
                "matrix_focus": "Nhận biết hiện tượng khúc xạ ánh sáng; phân biệt góc tới ($i$) và góc khúc xạ ($r$); vẽ đường truyền tia sáng qua mặt phân cách hai môi trường; giải thích hiện tượng nhìn thấy đáy chậu nước nông hơn thực tế."
            },
            {
                "id": 6,
                "title": "Phản xạ toàn phần",
                "pages": "30 – 33",
                "headings": [
                    ("I. Sự truyền ánh sáng từ môi trường chiết quang hơn sang môi trường chiết quang kém", [
                        "Khảo sát góc khúc xạ $r$ tăng dần theo góc tới $i$ cho đến khi $r = 90^\\circ$."
                    ]),
                    ("II. Hiện tượng phản xạ toàn phần", [
                        "1. Định nghĩa: Hiện tượng toàn bộ tia sáng tới bị phản xạ ngược trở lại môi trường trong suốt ban đầu tại mặt phân cách.",
                        "2. Góc tới giới hạn ($i_{gh}$): $\\sin(i_{gh}) = n_2 / n_1$.",
                        "3. Điều kiện xảy ra phản xạ toàn phần: Ánh sáng truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém ($n_1 > n_2$) và góc tới lớn hơn hoặc bằng góc giới hạn ($i \\ge i_{gh}$).",
                        "4. Ứng dụng: Cáp quang truyền dẫn thông tin internet, nội soi y học, giải thích hiện tượng ảo ảnh trên sa mạc hoặc mặt đường nhựa nắng nóng."
                    ])
                ],
                "matrix_focus": "Nêu định nghĩa và điều kiện để xảy ra phản xạ toàn phần; tính góc tới giới hạn; giải thích nguyên lí hoạt động của sợi quang học (cáp quang) và hiện tượng ảo tượng."
            },
            {
                "id": 7,
                "title": "Lăng kính",
                "pages": "34 – 39",
                "headings": [
                    ("I. Cấu tạo của lăng kính", [
                        "Lăng kính là khối chất trong suốt, đồng tính, thường có dạng lăng trụ tam giác (tiết diện thẳng là tam giác; đỉnh, đáy, cạnh, các mặt bên)."
                    ]),
                    ("II. Hiện tượng tán sắc ánh sáng", [
                        "Hiện tượng chùm ánh sáng trắng khi đi qua lăng kính bị phân tách thành dải màu biến đổi liên tục từ đỏ đến tím (Đỏ, da cam, vàng, lục, lam, chàm, tím).",
                        "Tia đỏ bị lệch ít nhất, tia tím bị lệch nhiều nhất."
                    ]),
                    ("III. Sự truyền ánh sáng đơn sắc qua lăng kính", [
                        "Ánh sáng đơn sắc là ánh sáng có một màu nhất định và không bị tán sắc khi đi qua lăng kính; tia sáng luôn bị lệch về phía đáy của lăng kính."
                    ]),
                    ("IV. Màu sắc của vật", [
                        "Màu sắc của vật được nhìn thấy phụ thuộc vào màu của ánh sáng mà vật đó phản xạ hoặc tán xạ vào mắt người (vật màu đỏ phản xạ ánh sáng đỏ, hấp thụ các màu khác; vật màu trắng phản xạ tất cả; vật màu đen hấp thụ tất cả)."
                    ])
                ],
                "matrix_focus": "Mô tả cấu tạo lăng kính; giải thích hiện tượng tán sắc ánh sáng qua lăng kính và sự tạo thành cầu vồng; giải thích màu sắc của các vật dưới ánh sáng mặt trời và ánh sáng màu."
            },
            {
                "id": 8,
                "title": "Thấu kính",
                "pages": "40 – 46",
                "headings": [
                    ("I. Cấu tạo thấu kính và phân loại", [
                        "1. Thấu kính hội tụ (rìa mỏng): Chùm sáng song song qua thấu kính cho chùm khúc xạ hội tụ tại một điểm.",
                        "2. Thấu kính phân kì (rìa dày): Chùm sáng song song qua thấu kính cho chùm khúc xạ phân kì."
                    ]),
                    ("II. Trục chính, quang tâm, tiêu điểm chính và tiêu cự của thấu kính", [
                        "Trục chính ($\Delta$), quang tâm ($O$), tiêu điểm chính ($F$ và $F'$ đối xứng qua $O$), tiêu cự ($f = OF = OF'$)."
                    ]),
                    ("III. Đường truyền của các tia sáng đặc biệt qua thấu kính", [
                        "1. Tia tới qua quang tâm $O$ truyền thẳng.",
                        "2. Tia tới song song với trục chính cho tia khúc xạ (hoặc đường kéo dài) đi qua tiêu điểm chính $F'$.",
                        "3. Tia tới qua tiêu điểm chính $F$ cho tia khúc xạ song song với trục chính."
                    ]),
                    ("IV. Sự tạo ảnh của một vật qua thấu kính", [
                        "1. Dựng ảnh của một điểm sáng $S$ và vật sáng nhỏ $AB$ vuông góc với trục chính.",
                        "2. Đặc điểm ảnh tạo bởi thấu kính hội tụ (ảnh thật ngược chiều hoặc ảnh ảo cùng chiều lớn hơn vật).",
                        "3. Đặc điểm ảnh tạo bởi thấu kính phân kì (luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật)."
                    ])
                ],
                "matrix_focus": "Phân biệt thấu kính hội tụ và phân kì; vẽ chính xác đường truyền 3 tia sáng đặc biệt; dựng ảnh $A'B'$ của vật qua thấu kính hội tụ/phân kì; xác định tính chất ảnh (thật/ảo, chiều, độ lớn so với vật)."
            },
            {
                "id": 9,
                "title": "Thực hành đo tiêu cự của thấu kính hội tụ",
                "pages": "47 – 49",
                "headings": [
                    ("I. Chuẩn bị", [
                        "Nguồn sáng (đèn chiếu), vật F, thấu kính hội tụ, màn chắn, giá quang học đồng trục có chia vạch mm."
                    ]),
                    ("II. Cách tiến hành", [
                        "1. Phương pháp đo tiêu cự theo phương pháp Silbermann: Dịch chuyển vật và màn chắn sao cho thu được ảnh thật rõ nét trên màn có kích thước bằng vật ($d = d' = 2f \\rightarrow f = \\frac{d + d'}{4}$).",
                        "2. Đo đạc, ghi số liệu bảng thực hành và tính toán giá trị trung bình tiêu cự $\\bar{f}$."
                    ])
                ],
                "matrix_focus": "Các bước tiến hành thí nghiệm đo tiêu cự thấu kính hội tụ; công thức tính $f = (d + d')/4$; xử lí bảng số liệu thực hành và sai số."
            },
            {
                "id": 10,
                "title": "Kính lúp. Bài tập thấu kính",
                "pages": "50 – 52",
                "headings": [
                    ("I. Cấu tạo kính lúp", [
                        "Kính lúp là thấu kính hội tụ có tiêu cự ngắn ($f < 25\\text{ cm}$), dùng để quan sát các vật nhỏ; số bội giác $G = 25/f$."
                    ]),
                    ("II. Cách quan sát một vật nhỏ qua kính lúp", [
                        "Đặt vật trong khoảng tiêu cự của kính lúp ($d < f$) để thu được ảnh ảo, cùng chiều, lớn hơn vật nằm trong giới hạn nhìn rõ của mắt."
                    ]),
                    ("III. Bài tập về thấu kính", [
                        "Vận dụng công thức hình học tam giác đồng dạng hoặc hệ thức thấu kính $\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d'}$ để tính vị trí ảnh, tiêu cự, chiều cao ảnh."
                    ])
                ],
                "matrix_focus": "Cấu tạo và công dụng của kính lúp; điều kiện đặt vật để quan sát qua kính lúp; giải bài toán quang hình học tính $d, d', f, h'$ bằng hình học tam giác đồng dạng."
            }
        ]
    },
    {
        "chapter_num": "III",
        "chapter_title": "ĐIỆN",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 11,
                "title": "Điện trở. Định luật Ohm",
                "pages": "53 – 59",
                "headings": [
                    ("I. Điện trở", [
                        "1. Khái niệm điện trở: Đại lượng biểu thị mức độ cản trở dòng điện của vật dẫn.",
                        "2. Kí hiệu và đơn vị điện trở: Ôm ($\\Omega$), kilôôm ($\\text{k}\\Omega$), mêgaôm ($\\text{M}\\Omega$)."
                    ]),
                    ("II. Sự phụ thuộc của cường độ dòng điện vào hiệu điện thế", [
                        "Cường độ dòng điện chạy qua một dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn đó ($I \\sim U$)."
                    ]),
                    ("III. Định luật Ohm", [
                        "Nội dung định luật: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: $I = \\frac{U}{R}$."
                    ]),
                    ("IV. Điện trở của dây dẫn phụ thuộc vào kích thước và bản chất của dây dẫn", [
                        "1. Sự phụ thuộc của điện trở vào chiều dài dây ($R \\sim l$).",
                        "2. Sự phụ thuộc của điện trở vào tiết diện dây ($R \\sim 1/S$).",
                        "3. Sự phụ thuộc của điện trở vào vật liệu làm dây (điện trở suất $\\rho$).",
                        "4. Công thức tính điện trở: $R = \\rho \\frac{l}{S}$."
                    ])
                ],
                "matrix_focus": "Phát biểu và viết biểu thức định luật Ohm ($I = U/R$); ý nghĩa của điện trở; áp dụng công thức $R = \\rho \\cdot l / S$ để tính điện trở dây dẫn; đọc đồ thị biểu diễn mối quan hệ $I - U$."
            },
            {
                "id": 12,
                "title": "Đoạn mạch nối tiếp, song song",
                "pages": "60 – 63",
                "headings": [
                    ("I. Đoạn mạch nối tiếp", [
                        "1. Đặc điểm: $I = I_1 = I_2 = \\dots = I_n$; $U = U_1 + U_2 + \\dots + U_n$.",
                        "2. Điện trở tương đương của đoạn mạch nối tiếp: $R_{tđ} = R_1 + R_2 + \\dots + R_n$ ($R_{tđ}$ luôn lớn hơn từng điện trở thành phần)."
                    ]),
                    ("II. Đoạn mạch song song", [
                        "1. Đặc điểm: $U = U_1 = U_2 = \\dots = U_n$; $I = I_1 + I_2 + \\dots + I_n$.",
                        "2. Điện trở tương đương của đoạn mạch song song: $\\frac{1}{R_{tđ}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$ (đối với hai điện trở: $R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}$, $R_{tđ}$ luôn nhỏ hơn từng điện trở thành phần)."
                    ])
                ],
                "matrix_focus": "Các quy tắc về $I, U, R_{tđ}$ trong mạch nối tiếp và song song; tính toán điện trở tương đương và cường độ dòng điện qua các nhánh trong mạch hỗn hợp cơ bản."
            },
            {
                "id": 13,
                "title": "Năng lượng của dòng điện và công suất điện",
                "pages": "64 – 66",
                "headings": [
                    ("I. Năng lượng điện (Điện năng)", [
                        "1. Khái niệm: Năng lượng của dòng điện (điện năng) có thể chuyển hoá thành các dạng năng lượng khác (nhiệt năng, quang năng, cơ năng...).",
                        "2. Công thức tính năng lượng điện tiêu thụ: $A = W = U \\cdot I \\cdot t$ (trong đó $U$ tính bằng V, $I$ tính bằng A, $t$ tính bằng giây; $A$ tính bằng Jun (J) hoặc kWh, $1\\text{ kWh} = 3,6 \\times 10^6\\text{ J}$).",
                        "3. Công tơ điện: Dụng cụ đo lượng điện năng tiêu thụ trong gia đình."
                    ]),
                    ("II. Công suất điện", [
                        "1. Khái niệm: Đại lượng đặc trưng cho tốc độ tiêu thụ điện năng ($P = \\frac{A}{t} = U \\cdot I$).",
                        "2. Đơn vị: Oát (W), kilôoát (kW)."
                    ]),
                    ("III. Công suất điện định mức", [
                        "Số vôn và số oát ghi trên thiết bị điện ($U_{đm}, P_{đm}$); ý nghĩa hoạt động bình thường của thiết bị ở hiệu điện thế định mức; tính tiền điện gia đình."
                    ])
                ],
                "matrix_focus": "Công thức tính điện năng tiêu thụ $A = UIt = Pt$; công suất điện $P = UI$; ý nghĩa số ghi trên đồ dùng điện; bài toán tính lượng điện tiêu thụ và hoá đơn tiền điện thực tế."
            }
        ]
    },
    {
        "chapter_num": "IV",
        "chapter_title": "ĐIỆN TỪ",
        "domain": "Năng lượng và sự biến đổi (Vật lí)",
        "lessons": [
            {
                "id": 14,
                "title": "Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều",
                "pages": "67 – 71",
                "headings": [
                    ("I. Dòng điện cảm ứng", [
                        "Thí nghiệm tạo dòng điện trong cuộn dây dẫn kín khi đưa nam châm lại gần hoặc ra xa cuộn dây."
                    ]),
                    ("II. Hiện tượng cảm ứng điện từ", [
                        "1. Điều kiện xuất hiện dòng điện cảm ứng: Khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên (tăng hoặc giảm).",
                        "2. Nguyên tắc tạo ra dòng điện xoay chiều: Cho cuộn dây quay trong từ trường hoặc cho nam châm quay trước cuộn dây dẫn kín làm số đường sức từ luân phiên tăng giảm, tạo ra dòng điện có chiều luân phiên thay đổi (dòng điện xoay chiều AC).",
                        "3. Cấu tạo và hoạt động của máy phát điện xoay chiều (nam châm - phần cảm, cuộn dây - phần ứng)."
                    ])
                ],
                "matrix_focus": "Nhận biết hiện tượng cảm ứng điện từ; nêu điều kiện làm xuất hiện dòng điện cảm ứng; nguyên tắc hoạt động của máy phát điện xoay chiều trong thực tế (nhà máy thuỷ điện, nhiệt điện, dynamo xe đạp)."
            },
            {
                "id": 15,
                "title": "Tác dụng của dòng điện xoay chiều",
                "pages": "72 – 74",
                "headings": [
                    ("I. Tác dụng nhiệt", [
                        "Dòng điện xoay chiều chạy qua vật dẫn làm vật dẫn nóng lên (ấm điện, bàn là, nồi chiên không dầu)."
                    ]),
                    ("II. Tác dụng phát sáng", [
                        "Làm phát sáng đèn dây tóc, đèn huỳnh quang, đèn LED."
                    ]),
                    ("III. Tác dụng từ", [
                        "Dòng điện xoay chiều chạy qua cuộn dây hút đinh sắt, làm quay kim nam châm; lực từ đổi chiều khi dòng điện đổi chiều."
                    ]),
                    ("IV. Tác dụng sinh lí", [
                        "Dòng điện xoay chiều gây co giật cơ, có thể làm ngưng tim, ngạt thở nếu bị giật điện; các biện pháp phòng tránh tai nạn điện gia đình."
                    ])
                ],
                "matrix_focus": "Kể tên và phân tích 4 tác dụng chính của dòng điện xoay chiều; giải thích vì sao tác dụng từ của dòng điện xoay chiều có tính chất đổi chiều liên tục; an toàn sử dụng mạng điện sinh hoạt 220V."
            }
        ]
    },
    {
        "chapter_num": "V",
        "chapter_title": "NĂNG LƯỢNG VỚI CUỘC SỐNG",
        "domain": "Trái Đất và bầu trời / Vật lí",
        "lessons": [
            {
                "id": 16,
                "title": "Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch",
                "pages": "75 – 79",
                "headings": [
                    ("I. Vòng năng lượng trên Trái Đất", [
                        "Năng lượng Mặt Trời là nguồn năng lượng sơ cấp chủ yếu; sự chuyển hoá năng lượng mặt trời thành hoá năng trong quang hợp, tạo gió, vòng tuần hoàn nước."
                    ]),
                    ("II. Năng lượng hoá thạch", [
                        "1. Các loại nhiên liệu hoá thạch chính: Than đá, dầu mỏ, khí thiên nhiên (được hình thành qua hàng triệu năm từ xác sinh vật cổ đại).",
                        "2. Tình trạng cạn kiệt nguồn năng lượng hoá thạch và tác động ô nhiễm môi trường (khí thải $CO_2, SO_2$, bụi mịn gây hiệu ứng nhà kính và mưa acid)."
                    ])
                ],
                "matrix_focus": "Mô tả vòng năng lượng trên Trái Đất; kể tên các dạng năng lượng hoá thạch; phân tích nguy cơ cạn kiệt và tác động xấu đến môi trường do đốt cháy nhiên liệu hoá thạch."
            },
            {
                "id": 17,
                "title": "Một số dạng năng lượng tái tạo",
                "pages": "80 – 86",
                "headings": [
                    ("I. Năng lượng tái tạo", [
                        "Khái niệm: Năng lượng tái tạo là năng lượng từ các nguồn tự nhiên liên tục được bổ sung hoặc không bị cạn kiệt (năng lượng mặt trời, năng lượng gió, thuỷ triều, địa nhiệt, sinh khối)."
                    ]),
                    ("II. Ưu điểm và nhược điểm của một số dạng năng lượng tái tạo", [
                        "1. Năng lượng mặt trời (ưu điểm: dồi dào, sạch; nhược điểm: phụ thuộc thời tiết, chi phí pin mặt trời).",
                        "2. Năng lượng gió (ưu điểm: vô tận, không khí thải; nhược điểm: chiếm diện tích, tiếng ồn, ảnh hưởng chim chóc).",
                        "3. Năng lượng thuỷ triều và sóng biển.",
                        "4. Năng lượng sinh khối (biomass / biogas)."
                    ]),
                    ("III. Một số biện pháp sử dụng hiệu quả năng lượng và bảo vệ môi trường", [
                        "Tiết kiệm điện năng, sử dụng thiết bị dán nhãn năng lượng, chuyển dịch cơ cấu sang năng lượng xanh, bảo vệ khí hậu toàn cầu."
                    ])
                ],
                "matrix_focus": "Phân biệt năng lượng tái tạo và năng lượng không tái tạo; so sánh ưu - nhược điểm của các dạng năng lượng tái tạo; đề xuất các hành động tiết kiệm và sử dụng năng lượng hiệu quả."
            }
        ]
    },
    {
        "chapter_num": "VI",
        "chapter_title": "KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
        "domain": "Chất và sự biến đổi của chất (Hoá học)",
        "lessons": [
            {
                "id": 18,
                "title": "Tính chất chung của kim loại",
                "pages": "87 – 91",
                "headings": [
                    ("I. Tính chất vật lí của kim loại", [
                        "1. Tính dẻo (rèn, dát mỏng, kéo sợi: vàng, nhôm, đồng).",
                        "2. Tính dẫn điện (bạc > đồng > vàng > nhôm > sắt).",
                        "3. Tính dẫn nhiệt.",
                        "4. Ánh kim (chế tạo đồ trang sức, gương soi).",
                        "5. Nhiệt độ nóng chảy và khối lượng riêng (kim loại nhẹ, kim loại nặng, kim loại vonfam chịu nhiệt làm dây tóc bóng đèn)."
                    ]),
                    ("II. Tính chất hoá học của kim loại", [
                        "1. Tác dụng với phi kim (tác dụng với oxygen tạo oxide; tác dụng với phi kim khác như $Cl_2, S$ tạo muối).",
                        "2. Tác dụng với dung dịch acid (kim loại đứng trước H đẩy được $H_2$ ra khỏi dung dịch $HCl, H_2SO_4$ loãng).",
                        "3. Tác dụng với dung dịch muối (kim loại hoạt động mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối)."
                    ])
                ],
                "matrix_focus": "Nêu 4 tính chất vật lí cơ bản của kim loại và ứng dụng; viết phương trình hoá học minh hoạ tính chất hoá học của kim loại (tác dụng phi kim, acid loãng, muối); dự đoán phản ứng."
            },
            {
                "id": 19,
                "title": "Dãy hoạt động hoá học",
                "pages": "92 – 94",
                "headings": [
                    ("I. Xây dựng dãy hoạt động hoá học", [
                        "Thí nghiệm so sánh mức độ hoạt động hoá học giữa các kim loại: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au."
                    ]),
                    ("II. Ý nghĩa của dãy hoạt động hoá học của kim loại", [
                        "1. Mức độ hoạt động hoá học của kim loại giảm dần từ trái sang phải.",
                        "2. Kim loại đứng trước Mg (K, Na, Ca) phản ứng với nước ở nhiệt độ thường giải phóng $H_2$.",
                        "3. Kim loại đứng trước H phản ứng với dung dịch acid loãng giải phóng $H_2$.",
                        "4. Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối (trừ K, Na, Ca)."
                    ])
                ],
                "matrix_focus": "Thuộc thứ tự dãy hoạt động hoá học; vận dụng 4 ý nghĩa của dãy để xét tính khả thi của phản ứng và giải bài toán kim loại tác dụng với acid, muối."
            },
            {
                "id": 20,
                "title": "Tách kim loại và việc sử dụng hợp kim",
                "pages": "95 – 99",
                "headings": [
                    ("I. Phương pháp tách kim loại", [
                        "1. Phương pháp nhiệt luyện (dùng CO, C, $H_2$ khử oxide kim loại trung bình và yếu: Fe, Zn, Cu).",
                        "2. Phương pháp điện phân nóng chảy (tách kim loại hoạt động mạnh: Al, Na, Ca từ quặng bauxite, muối ăn).",
                        "3. Phương pháp thuỷ luyện."
                    ]),
                    ("II. Quá trình tách một số kim loại có nhiều ứng dụng", [
                        "1. Quá trình sản xuất gang và thép (nguyên liệu, phản ứng khử trong lò cao, chuyển gang thành thép trong lò luyện).",
                        "2. Quá trình sản xuất nhôm từ quặng bauxite ($Al_2O_3$) bằng phương pháp điện phân nóng chảy có mặt criolit."
                    ]),
                    ("III. Hợp kim", [
                        "1. Khái niệm hợp kim: Vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác.",
                        "2. Một số hợp kim phổ biến (gang, thép, đura, đồng thau, inox) và ưu điểm vượt trội so với kim loại nguyên chất."
                    ]),
                    ("IV. Sử dụng hợp kim và chống ăn mòn kim loại", [
                        "Hiện tượng ăn mòn kim loại và các biện pháp bảo vệ (sơn phủ bề mặt, mạ kẹp, tra dầu mỡ, dùng kim loại hy sinh)."
                    ])
                ],
                "matrix_focus": "Nêu nguyên tắc tách kim loại (nhiệt luyện, điện phân nóng chảy); quy trình sản xuất gang, thép và nhôm; phân biệt kim loại nguyên chất và hợp kim; các biện pháp chống ăn mòn kim loại trong thực tế."
            },
            {
                "id": 21,
                "title": "Sự khác nhau cơ bản giữa phi kim và kim loại",
                "pages": "100 – 102",
                "headings": [
                    ("I. Ứng dụng của một số phi kim quan trọng", [
                        "1. Carbon (than hoạt tính lọc nước, than chì làm điện cực, kim cương làm mũi khoan).",
                        "2. Oxygen, lưu huỳnh, chlorine (khử trùng nước, sản xuất acid, diêm, phân bón)."
                    ]),
                    ("II. Sự khác nhau cơ bản giữa phi kim và kim loại", [
                        "1. Về tính chất vật lí: Kim loại có ánh kim, dẫn điện, dẫn nhiệt tốt, có tính dẻo; Phi kim phần lớn không dẫn điện, không dẫn nhiệt (trừ than chì), giòn, đa dạng về trạng thái (khí $O_2, Cl_2$; lỏng $Br_2$; rắn $C, S, P$).",
                        "2. Về tính chất hoá học: Kim loại có xu hướng nhường electron, tạo oxide base; Phi kim có xu hướng nhận electron, tác dụng với hydrogen tạo hợp chất khí, tạo oxide acid."
                    ])
                ],
                "matrix_focus": "So sánh sự khác biệt cơ bản về tính chất vật lí và hoá học giữa kim loại và phi kim; kể tên ứng dụng quan trọng của carbon, lưu huỳnh, chlorine."
            }
        ]
    },
    {
        "chapter_num": "VII",
        "chapter_title": "GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
        "domain": "Chất và sự biến đổi của chất (Hoá học)",
        "lessons": [
            {
                "id": 22,
                "title": "Giới thiệu về hợp chất hữu cơ",
                "pages": "103 – 106",
                "headings": [
                    ("I. Khái niệm hợp chất hữu cơ và hoá học hữu cơ", [
                        "Hợp chất hữu cơ là hợp chất của carbon (trừ $CO, CO_2, H_2CO_3$, muối carbonate kim loại, carbide...); Hoá học hữu cơ là ngành nghiên cứu các hợp chất hữu cơ."
                    ]),
                    ("II. Công thức phân tử và công thức cấu tạo", [
                        "1. Công thức phân tử (cho biết thành phần nguyên tố và số lượng nguyên tử mỗi nguyên tố trong phân tử).",
                        "2. Công thức cấu tạo (biểu diễn trật tự liên kết giữa các nguyên tử trong phân tử: công thức khai triển và công thức thu gọn)."
                    ]),
                    ("III. Đặc điểm cấu tạo hợp chất hữu cơ", [
                        "Hoá trị của các nguyên tố trong hợp chất hữu cơ (C luôn có hoá trị IV, H hoá trị I, O hoá trị II); mạch carbon (mạch hở không phân nhánh, mạch nhánh, mạch vòng)."
                    ]),
                    ("IV. Phân loại hợp chất hữu cơ", [
                        "1. Hydrocarbon (phân tử chỉ chứa hai nguyên tố C và H).",
                        "2. Dẫn xuất của hydrocarbon (ngoài C và H còn có các nguyên tố khác như O, N, Cl, S...)."
                    ])
                ],
                "matrix_focus": "Định nghĩa hợp chất hữu cơ và phân loại (hydrocarbon và dẫn xuất); quy tắc hoá trị trong hoá hữu cơ; viết công thức cấu tạo thu gọn của một số phân tử đơn giản."
            },
            {
                "id": 23,
                "title": "Alkane",
                "pages": "107 – 110",
                "headings": [
                    ("I. Khái niệm hydrocarbon, alkane", [
                        "Alkane là các hydrocarbon mạch hở, trong phân tử chỉ chứa các liên kết đơn $C-C$ và $C-H$ (công thức chung $C_nH_{2n+2}, n \\ge 1$)."
                    ]),
                    ("II. Cấu tạo phân tử và danh pháp của alkane", [
                        "Tên gọi 4 alkane đầu tiên: Methane ($CH_4$), Ethane ($C_2H_6$), Propane ($C_3H_8$), Butane ($C_4H_{10}$); mô hình phân tử tứ diện của methane."
                    ]),
                    ("III. Phản ứng cháy của alkane", [
                        "Phản ứng đốt cháy tạo thành $CO_2$ và $H_2O$, toả nhiều nhiệt: $C_nH_{2n+2} + \\frac{3n+1}{2}O_2 \\rightarrow nCO_2 + (n+1)H_2O$."
                    ]),
                    ("IV. Ứng dụng làm nhiên liệu của alkane", [
                        "Khí gas hoá lỏng (LPG), khí thiên nhiên (CNG), xăng, dầu diesel; an toàn chống cháy nổ rò rỉ khí gas."
                    ])
                ],
                "matrix_focus": "Khái niệm và đặc điểm liên kết đơn của alkane; viết công thức phân tử và đọc tên 4 alkane đầu dãy; viết phương trình phản ứng cháy; ứng dụng làm nhiên liệu và biện pháp an toàn khí gas."
            },
            {
                "id": 24,
                "title": "Alkene",
                "pages": "111 – 113",
                "headings": [
                    ("I. Khái niệm alkene", [
                        "Alkene là những hydrocarbon mạch hở, trong phân tử có chứa một liên kết đôi $C=C$ (công thức chung $C_nH_{2n}, n \\ge 2$)."
                    ]),
                    ("II. Ethylene", [
                        "1. Công thức và cấu tạo phân tử ethylene ($CH_2=CH_2$, liên kết đôi gồm một liên kết kém bền dễ bị bẻ gãy).",
                        "2. Tính chất vật lí (chất khí, không màu, nhẹ hơn không khí, ít tan trong nước).",
                        "3. Tính chất hoá học: Phản ứng cháy; Phản ứng cộng brom (làm mất màu dung dịch nước brom - phản ứng đặc trưng nhận biết liên kết đôi); Phản ứng trùng hợp tạo nhựa PE ($(-CH_2-CH_2-)_n$).",
                        "4. Ứng dụng: Nguyên liệu sản xuất chất dẻo, dung môi, giấm, kích thích quả mau chín."
                    ])
                ],
                "matrix_focus": "Đặc điểm liên kết đôi của ethylene; phản ứng cháy, phản ứng cộng nước brom (dấu hiệu nhận biết) và phản ứng trùng hợp tạo polyethylene; ứng dụng giấm chín hoa quả."
            },
            {
                "id": 25,
                "title": "Nguồn nhiên liệu",
                "pages": "114 – 117",
                "headings": [
                    ("I. Dầu mỏ, khí mỏ dầu và khí thiên nhiên", [
                        "1. Trạng thái tự nhiên, tính chất vật lí và thành phần của dầu mỏ (hỗn hợp nhiều hydrocarbon).",
                        "2. Chưng cất phân đoạn dầu mỏ (khí đốt, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường)."
                    ]),
                    ("II. Nhiên liệu", [
                        "1. Khái niệm và phân loại nhiên liệu: Nhiên liệu rắn (than đá, gỗ), nhiên liệu lỏng (xăng, cồn), nhiên liệu khí (khí gas, biogas).",
                        "2. Sử dụng nhiên liệu hiệu quả, an toàn và phát triển nhiên liệu sinh học (xăng E5, khí sinh học biogas) nhằm giảm phát thải khí nhà kính."
                    ])
                ],
                "matrix_focus": "Thành phần và phương pháp chưng cất phân đoạn dầu mỏ; phân loại nhiên liệu; nguyên tắc sử dụng nhiên liệu hiệu quả (cung cấp đủ không khí, tăng diện tích tiếp xúc) và vai trò của nhiên liệu sinh học."
            }
        ]
    },
    {
        "chapter_num": "VIII",
        "chapter_title": "ETHYLIC ALCOHOL VÀ ACETIC ACID",
        "domain": "Chất và sự biến đổi của chất (Hoá học)",
        "lessons": [
            {
                "id": 26,
                "title": "Ethylic alcohol",
                "pages": "118 – 122",
                "headings": [
                    ("I. Công thức và đặc điểm cấu tạo", [
                        "Công thức phân tử $C_2H_6O$, công thức cấu tạo $C_2H_5OH$ ($CH_3-CH_2-OH$), có nhóm chức hydroxide ($-OH$) quyết định tính chất hoá học đặc trưng."
                    ]),
                    ("II. Tính chất vật lí và độ cồn", [
                        "1. Tính chất vật lí: Chất lỏng không màu, mùi thơm nhẹ, tan vô hạn trong nước, sôi ở $78,3^\\circ\\text{C}$, nhẹ hơn nước.",
                        "2. Độ cồn (độ rượu): Số mililít ethylic alcohol nguyên chất có trong 100 mL dung dịch rượu (công thức tính độ cồn)."
                    ]),
                    ("III. Tính chất hoá học", [
                        "1. Phản ứng cháy (toả nhiều nhiệt tạo $CO_2$ và $H_2O$).",
                        "2. Tác dụng với kim loại natri giải phóng khí hydrogen ($2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2$)."
                    ]),
                    ("IV. Điều chế và ứng dụng", [
                        "1. Điều chế: Lên men tinh bột/đường ($C_6H_{12}O_6 \\xrightarrow{\\text{men}} 2C_2H_5OH + 2CO_2$) hoặc hydrat hoá ethylene.",
                        "2. Ứng dụng trong y tế (cồn sát trùng $70^\\circ$), dung môi pha sơn/nước hoa, nhiên liệu sinh học.",
                        "3. Tác hại của việc lạm dụng rượu, bia đối với sức khoẻ và an toàn giao thông."
                    ])
                ],
                "matrix_focus": "Công thức cấu tạo và nhóm $-OH$; khái niệm và bài tập tính độ cồn; tính chất hoá học (cháy, tác dụng với Na); phương pháp điều chế lên men rượu; tác hại của rượu bia."
            },
            {
                "id": 27,
                "title": "Acetic acid",
                "pages": "123 – 127",
                "headings": [
                    ("I. Công thức và đặc điểm cấu tạo", [
                        "Công thức phân tử $C_2H_4O_2$, công thức cấu tạo $CH_3COOH$, có nhóm carboxyl ($-COOH$) quyết định tính acid."
                    ]),
                    ("II. Tính chất vật lí", [
                        "Chất lỏng không màu, vị chua gắt, tan vô hạn trong nước, hoá rắn ở $16,6^\\circ\\text{C}$ (acetic acid băng)."
                    ]),
                    ("III. Tính chất hoá học", [
                        "1. Tính chất của một acid: Làm đổi màu quỳ tím sang đỏ; tác dụng với kim loại trước H ($Zn, Mg$); tác dụng với oxide base; tác dụng với base (phản ứng trung hoà); tác dụng với muối carbonate giải phóng khí $CO_2$.",
                        "2. Phản ứng ester hoá: Tác dụng với ethylic alcohol tạo ethyl acetate có mùi thơm đặc trưng ($CH_3COOH + C_2H_5OH \\xrightleftharpoons{H_2SO_4, t^\\circ} CH_3COOC_2H_5 + H_2O$)."
                    ]),
                    ("IV. Điều chế và ứng dụng", [
                        "1. Điều chế bằng phương pháp lên men giấm từ dung dịch rượu loãng.",
                        "2. Ứng dụng sản xuất giấm ăn (nồng độ 2 - 5%), dược phẩm, phẩm nhuộm, chất dẻo, tơ nhân tạo."
                    ])
                ],
                "matrix_focus": "Đặc điểm nhóm chức $-COOH$; tính acid của acetic acid (viết phương trình hoá học với kim loại, base, oxide base, muối carbonate); phản ứng ester hoá; ứng dụng và điều chế giấm ăn."
            }
        ]
    },
    {
        "chapter_num": "IX",
        "chapter_title": "LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
        "domain": "Chất và sự biến đổi của chất (Hoá sinh)",
        "lessons": [
            {
                "id": 28,
                "title": "Lipid",
                "pages": "128 – 130",
                "headings": [
                    ("I. Khái niệm lipid và chất béo", [
                        "Lipid là hợp chất hữu cơ phức tạp trong tế bào sống; Chất béo là triester của glycerol với các acid béo (công thức chung $(RCOO)_3C_3H_5$)."
                    ]),
                    ("II. Tính chất vật lí và hoá học của chất béo", [
                        "1. Tính chất vật lí: Nhẹ hơn nước, không tan trong nước, tan nhiều trong dung môi hữu cơ (xăng, benzen).",
                        "2. Phản ứng xà phòng hoá: Thuỷ phân chất béo trong môi trường kiềm tạo glycerol và muối của acid béo (xà phòng): $(RCOO)_3C_3H_5 + 3NaOH \\rightarrow 3RCOONa + C_3H_5(OH)_3$."
                    ]),
                    ("III. Vai trò của chất béo", [
                        "Nguồn cung cấp năng lượng quan trọng, dung môi hoà tan các vitamin tan trong dầu (A, D, E, K), ứng dụng sản xuất xà phòng."
                    ])
                ],
                "matrix_focus": "Khái niệm và công thức chung của chất béo; phản ứng thuỷ phân trong môi trường kiềm (phản ứng xà phòng hoá); vai trò dinh dưỡng của chất béo."
            },
            {
                "id": 29,
                "title": "Carbohydrate. Glucose và saccharose",
                "pages": "131 – 134",
                "headings": [
                    ("I. Khái niệm carbohydrate", [
                        "Hợp chất hữu cơ tạp chức chứa C, H, O (thường có dạng $C_n(H_2O)_m$)."
                    ]),
                    ("II. Glucose ($C_6H_{12}O_6$)", [
                        "1. Tính chất vật lí và trạng thái tự nhiên (có nhiều trong quả chín, nho chín, mật ong, máu người ~0,1%).",
                        "2. Tính chất hoá học: Phản ứng tráng bạc (tác dụng với $AgNO_3/NH_3$ tạo bạc kim loại sáng bóng); Phản ứng lên men rượu.",
                        "3. Vai trò cung cấp năng lượng nhanh cho cơ thể."
                    ]),
                    ("III. Saccharose ($C_{12}H_{22}O_{11}$)", [
                        "1. Trạng thái tự nhiên: Đường mía, đường thốt nốt, củ cải đường.",
                        "2. Tính chất hoá học: Phản ứng thuỷ phân trong môi trường acid tạo ra 1 phân tử glucose và 1 phân tử fructose."
                    ])
                ],
                "matrix_focus": "Công thức phân tử và tính chất vật lí của glucose và saccharose; phản ứng tráng bạc của glucose; phản ứng thuỷ phân saccharose; vai trò đối với sức khoẻ con người."
            },
            {
                "id": 30,
                "title": "Tinh bột và cellulose",
                "pages": "135 – 137",
                "headings": [
                    ("I. Trạng thái tự nhiên và tính chất vật lí", [
                        "1. Tinh bột ($(-C_6H_{10}O_5-)_n$): Có trong các loại hạt ngũ cốc, củ, quả; không tan trong nước lạnh, tạo hồ tinh bột trong nước nóng.",
                        "2. Cellulose ($(-C_6H_{10}O_5-)_m$): Thành phần chính tạo màng tế bào thực vật (gỗ, bông gòn, tre, nứa); sợi dai, không tan trong nước."
                    ]),
                    ("II. Tính chất hoá học", [
                        "1. Phản ứng thuỷ phân của tinh bột và cellulose tạo glucose nhờ xúc tác acid hoặc enzyme.",
                        "2. Phản ứng màu đặc trưng của tinh bột với dung dịch iodine: Tạo hợp chất có màu xanh tím (phản ứng dùng để nhận biết tinh bột)."
                    ]),
                    ("III. Ứng dụng", [
                        "Lương thực chính của con người, nguyên liệu sản xuất giấy, tơ sợi bông, vật liệu xây dựng, điều chế cồn sinh học."
                    ])
                ],
                "matrix_focus": "Phân biệt tinh bột và cellulose về cấu trúc phân tử và nguồn gốc; phản ứng thuỷ phân tạo glucose; phản ứng nhận biết tinh bột bằng iodine; ứng dụng trong đời sống."
            },
            {
                "id": 31,
                "title": "Protein",
                "pages": "138 – 140",
                "headings": [
                    ("I. Khái niệm và cấu tạo", [
                        "Protein là những hợp chất cao phân tử phức tạp cấu tạo từ các amino acid liên kết với nhau bằng liên kết peptide (thành phần không thể thiếu của mọi tế bào sống)."
                    ]),
                    ("II. Tính chất hoá học của protein", [
                        "1. Phản ứng thuỷ phân nhờ xúc tác acid, base hoặc enzyme tạo thành hỗn hợp các amino acid.",
                        "2. Sự đông tụ protein dưới tác dụng của nhiệt độ (luộc trứng, nấu riêu cua) hoặc hoá chất (acid, rượu).",
                        "3. Phản ứng cháy có mùi khét đặc trưng (tóc, lông vũ, tơ tằm cháy)."
                    ]),
                    ("III. Vai trò của protein", [
                        "Thành phần cấu trúc tế bào, xúc tác sinh học (enzyme), vận chuyển dưỡng chất, bảo vệ cơ thể (kháng thể)."
                    ])
                ],
                "matrix_focus": "Khái niệm protein; hiện tượng đông tụ protein do nhiệt độ/acid; phản ứng thuỷ phân tạo amino acid; nhận biết sợi len lông cừu/tơ tằm bằng phản ứng cháy khét; vai trò dinh dưỡng."
            },
            {
                "id": 32,
                "title": "Polymer",
                "pages": "141 – 145",
                "headings": [
                    ("I. Khái niệm, cấu tạo và phân loại polymer", [
                        "1. Khái niệm: Polymer là những hợp chất có phân tử khối rất lớn do nhiều mắt xích nhỏ (monomer) liên kết với nhau tạo nên.",
                        "2. Cấu tạo mạch polymer: Mạch không phân nhánh (PE, PVC, cellulose), mạch phân nhánh (amylopectin của tinh bột), mạch không gian (cao su lưu hoá).",
                        "3. Phân loại: Polymer thiên nhiên (tinh bột, tơ tằm, cao su tự nhiên) và Polymer tổng hợp (PE, PVC, tơ nilon)."
                    ]),
                    ("II. Một số vật liệu polymer phổ biến", [
                        "1. Chất dẻo (PE, PVC, PP).",
                        "2. Tơ sợi (tơ tằm, tơ nilon, tơ visco).",
                        "3. Cao su (cao su thiên nhiên, cao su buna có tính đàn hồi cao).",
                        "4. Keo dán."
                    ]),
                    ("III. Ứng dụng và vấn đề ô nhiễm môi trường (\"rác thải nhựa\")", [
                        "Tác hại của rác thải nhựa khó phân huỷ (\"ô nhiễm trắng\"); nguyên tắc 3R (Reduce - Reuse - Recycle) và phát triển vật liệu nhựa tự phân huỷ sinh học."
                    ])
                ],
                "matrix_focus": "Khái niệm monomer, mắt xích, hệ số trùng hợp; phân loại polymer tự nhiên và tổng hợp; nhận biết 4 loại vật liệu polymer (chất dẻo, tơ, cao su, keo dán); giải pháp giảm thiểu ô nhiễm rác thải nhựa."
            }
        ]
    },
    {
        "chapter_num": "X",
        "chapter_title": "KHAI THÁC TÀI NGUYÊN TỪ VỎ TRÁI ĐẤT",
        "domain": "Trái Đất và bầu trời / Hoá học",
        "lessons": [
            {
                "id": 33,
                "title": "Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất",
                "pages": "146 – 148",
                "headings": [
                    ("I. Hàm lượng các nguyên tố hoá học chủ yếu trong vỏ Trái Đất", [
                        "Oxygen (~46,6%) và Silicon (~27,7%) là hai nguyên tố dồi dào nhất, tiếp theo là Al, Fe, Ca, Na, K, Mg."
                    ]),
                    ("II. Các dạng chất chủ yếu trong vỏ Trái Đất", [
                        "Khoáng vật silicat, khoáng vật oxide, muối carbonate, quặng kim loại và tài nguyên nước, khoáng sản nhiên liệu."
                    ]),
                    ("III. Khai thác tài nguyên từ vỏ Trái Đất bền vững", [
                        "Ý nghĩa kinh tế và yêu cầu bảo vệ môi trường, phục hồi cảnh quan sau khai thác khoáng sản."
                    ])
                ],
                "matrix_focus": "Nhận biết các nguyên tố phổ biến nhất trong vỏ Trái Đất (O, Si, Al, Fe); các dạng chất khoáng chủ yếu; nguyên tắc khai thác tài nguyên khoáng sản bền vững."
            },
            {
                "id": 34,
                "title": "Khai thác đá vôi. Công nghiệp silicate",
                "pages": "149 – 152",
                "headings": [
                    ("I. Khai thác và ứng dụng đá vôi", [
                        "1. Thành phần chính là calcium carbonate ($CaCO_3$).",
                        "2. Quá trình nung vôi sản xuất vôi sống ($CaO$): $CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2$.",
                        "3. Ứng dụng của đá vôi và vôi tôi ($Ca(OH)_2$) trong xây dựng, nông nghiệp khử chua, xử lí nước thải."
                    ]),
                    ("II. Công nghiệp silicate", [
                        "1. Sản xuất đồ gốm, sứ, gạch ngói (nguyên liệu đất sét, thạch anh, fenspat).",
                        "2. Sản xuất xi măng (nguyên liệu đá vôi, đất sét, nung thành clinker).",
                        "3. Sản xuất thuỷ tinh thông thường (nguyên liệu cát thạch anh $SiO_2$, đá vôi $CaCO_3$, soda $Na_2CO_3$)."
                    ])
                ],
                "matrix_focus": "Thành phần hoá học của đá vôi; phản ứng nung vôi tôi vôi; các ngành công nghiệp silicate chính (thuỷ tinh, gốm sứ, xi măng); tác động môi trường của việc nổ mìn khai thác đá vôi và khói bụi lò nung."
            },
            {
                "id": 35,
                "title": "Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu",
                "pages": "153 – 158",
                "headings": [
                    ("I. Khái niệm về nhiên liệu hoá thạch", [
                        "Sự hình thành và phân bố của than đá, dầu mỏ, khí thiên nhiên."
                    ]),
                    ("II. Khai thác và sử dụng nhiên liệu hoá thạch", [
                        "Phương pháp khai thác hầm lò, lộ thiên, giàn khoan dầu khí; vai trò cung cấp năng lượng và nguyên liệu hoá chất."
                    ]),
                    ("III. Nguồn carbon trong tự nhiên và chu trình carbon", [
                        "Chu trình tuần hoàn của nguyên tố carbon giữa khí quyển, sinh quyển, thuỷ quyển và thạch quyển thông qua quang hợp, hô hấp, đốt cháy nhiên liệu, phân giải xác sinh vật."
                    ]),
                    ("IV. Sự ấm lên toàn cầu và hiệu ứng nhà kính", [
                        "Nồng độ khí $CO_2, CH_4$ trong khí quyển gia tăng làm giữ nhiệt Trái Đất; hậu quả nước biển dâng, băng tan, thời tiết cực đoan; cam kết giảm phát thải Net Zero."
                    ])
                ],
                "matrix_focus": "Sơ đồ chu trình carbon trong tự nhiên; nguyên nhân gia tăng phát thải $CO_2$ gây hiệu ứng nhà kính; hậu quả của biến đổi khí hậu toàn cầu; các giải pháp cắt giảm khí nhà kính (chuyển đổi năng lượng sạch, trồng rừng)."
            }
        ]
    },
    {
        "chapter_num": "XI",
        "chapter_title": "DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
        "domain": "Vật sống (Sinh học)",
        "lessons": [
            {
                "id": 36,
                "title": "Khái quát về di truyền học",
                "pages": "159 – 161",
                "headings": [
                    ("I. Di truyền và biến dị", [
                        "1. Di truyền: Hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu.",
                        "2. Biến dị: Hiện tượng con cái sinh ra có những đặc điểm sai khác so với bố mẹ và sai khác giữa các cá thể trong cùng lứa."
                    ]),
                    ("II. Mendel – Người đặt nền móng cho di truyền học", [
                        "1. Đối tượng nghiên cứu: Cây đậu Hà Lan (*Pisum sativum*) có hoa lưỡng tính, tự thụ phấn nghiêm ngặt, có nhiều cặp tính trạng tương phản rõ rệt.",
                        "2. Phương pháp nghiên cứu: Phương pháp phân tích các thế hệ lai (tạo dòng thuần chủng, lai các cặp bố mẹ tương phản, theo dõi riêng từng tính trạng, sử dụng toán thống kê phân tích số liệu)."
                    ])
                ],
                "matrix_focus": "Phân biệt hiện tượng di truyền và biến dị; nêu ưu điểm của đậu Hà Lan; trình bày các bước trong phương pháp phân tích thế hệ lai độc đáo của Gregor Mendel."
            },
            {
                "id": 37,
                "title": "Các quy luật di truyền của Mendel",
                "pages": "162 – 165",
                "headings": [
                    ("I. Quy luật phân li", [
                        "1. Thí nghiệm lai một cặp tính trạng của Mendel (hoa đỏ x hoa trắng -> F1 100% hoa đỏ -> F2 tỉ lệ 3 hoa đỏ : 1 hoa trắng).",
                        "2. Giải thích kết quả thí nghiệm: Mỗi tính trạng do một cặp nhân tố di truyền quy định; trong tế bào sinh dưỡng nhân tố di truyền tồn tại thành cặp (allele), khi giảm phân tạo giao tử mỗi giao tử chỉ nhận một nhân tố di truyền trong cặp.",
                        "3. Phép lai phân tích: Phép lai giữa cá thể mang tính trạng trội chưa biết kiểu gene với cá thể mang tính trạng lặn để kiểm tra kiểu gene (đồng hợp trội cho con lai đồng tính; dị hợp trội cho phân tính 1 trội : 1 lặn)."
                    ]),
                    ("II. Quy luật phân li độc lập", [
                        "1. Thí nghiệm lai hai cặp tính trạng của Mendel (Hạt vàng, trơn x Hạt xanh, nhăn -> F1 100% vàng, trơn -> F2 tỉ lệ 9 vàng, trơn : 3 vàng, nhăn : 3 xanh, trơn : 1 xanh, nhăn).",
                        "2. Nội dung quy luật: Các cặp nhân tố di truyền phân li độc lập trong quá trình hình thành giao tử."
                    ])
                ],
                "matrix_focus": "Nội dung quy luật phân li và quy luật phân li độc lập; viết sơ đồ lai một cặp và hai cặp tính trạng; mục đích và ý nghĩa của phép lai phân tích; giải thích sự xuất hiện của biến dị tổ hợp."
            },
            {
                "id": 38,
                "title": "Nucleic acid và gene",
                "pages": "166 – 168",
                "headings": [
                    ("I. Khái niệm nucleic acid", [
                        "Đại phân tử sinh học mang thông tin di truyền, cấu tạo theo nguyên tắc đa phân gồm hai loại: DNA (Deoxyribonucleic acid) và RNA (Ribonucleic acid)."
                    ]),
                    ("II. Deoxyribonucleic acid (DNA)", [
                        "1. Cấu trúc hoá học: Cấu tạo từ các nguyên tố C, H, O, N, P; đơn phân là nucleotide gồm 4 loại A (Adenine), T (Thymine), G (Guanine), C (Cytosine).",
                        "2. Cấu trúc không gian: Chuỗi xoắn kép gồm hai mạch polynucleotide song song ngược chiều liên kết bổ sung bằng liên kết hydrogen ($A-T$ bằng 2 liên kết, $G-C$ bằng 3 liên kết); chu kì xoắn $34\\text{ Å} = 10\\text{ cặp nu}$."
                    ]),
                    ("III. Ribonucleic acid (RNA)", [
                        "Cấu tạo từ 4 loại nucleotide A, U (Uracil), G, C; cấu trúc mạch đơn; gồm 3 loại: mRNA (RNA thông tin), tRNA (RNA vận chuyển), rRNA (RNA ribosome)."
                    ]),
                    ("IV. Khái niệm gene", [
                        "Gene là một đoạn phân tử DNA mang thông tin mã hoá cho một sản phẩm xác định (chuỗi polypeptide hoặc phân tử RNA)."
                    ])
                ],
                "matrix_focus": "Nguyên tắc cấu tạo đa phân của DNA và RNA; nguyên tắc bổ sung ($A=T, G\\equiv C$); định nghĩa gene; phân biệt cấu trúc và chức năng giữa DNA và các loại RNA."
            },
            {
                "id": 39,
                "title": "Tái bản DNA và phiên mã tạo RNA",
                "pages": "169 – 172",
                "headings": [
                    ("I. Quá trình tái bản DNA (Nhân đôi DNA)", [
                        "1. Thời điểm và vị trí diễn ra: Trong nhân tế bào, kì trung gian giữa hai lần phân bào.",
                        "2. Diễn biến: Nhờ enzyme tháo xoắn, tách hai mạch đơn; enzyme DNA polymerase lắp ráp nucleotide tự do theo nguyên tắc bổ sung ($A_{môi trường} - T_{mạch khuôn}, G - C$).",
                        "3. Nguyên tắc nhân đôi: Nguyên tắc bổ sung và Nguyên tắc bán bảo tồn (trong mỗi phân tử DNA con có một mạch của mẹ và một mạch mới tổng hợp)."
                    ]),
                    ("II. Quá trình phiên mã (Tổng hợp RNA)", [
                        "1. Khái niệm: Quá trình truyền thông tin từ mạch khuôn của gene (DNA) sang phân tử RNA.",
                        "2. Diễn biến: Enzyme RNA polymerase trượt trên mạch khuôn $3' \\rightarrow 5'$ tổng hợp chuỗi RNA theo nguyên tắc bổ sung ($A_{khuôn} - U_{tự do}, T_{khuôn} - A, G_{khuôn} - C, C_{khuôn} - G$)."
                    ])
                ],
                "matrix_focus": "Trình bày diễn biến và 2 nguyên tắc của quá trình nhân đôi DNA (bổ sung và bán bảo tồn); cơ chế phiên mã tổng hợp RNA; bài tập xác định trình tự nucleotide mạch mới và mạch RNA."
            },
            {
                "id": 40,
                "title": "Dịch mã và mối quan hệ từ gene đến tính trạng",
                "pages": "173 – 177",
                "headings": [
                    ("I. Mã di truyền", [
                        "Khái niệm mã di truyền: Mã bộ ba (triplet) gồm 3 nucleotide liền nhau quy định 1 amino acid; có 64 bộ ba (61 bộ ba mã hoá, 3 bộ ba kết thúc $UAA, UAG, UGA$; 1 bộ ba mở đầu $AUG$ mã hoá methionine); đặc điểm: tính liên tục, tính phổ biến, tính đặc hiệu, tính thoái hoá."
                    ]),
                    ("II. Quá trình dịch mã (Tổng hợp protein)", [
                        "Diễn ra tại ribosome ở tế bào chất: Phân tử tRNA mang amino acid tương ứng khớp anticodon với codon trên mRNA theo nguyên tắc bổ sung; ribosome di chuyển dịch chuyển từng bộ ba tạo chuỗi polypeptide."
                    ]),
                    ("III. Mối quan hệ giữa gene và tính trạng", [
                        "Sơ đồ trung tâm của sinh học phân tử: $\\text{Gene (DNA)} \\xrightarrow{\\text{Phiên mã}} \\text{mRNA} \\xrightarrow{\\text{Dịch mã}} \\text{Protein} \\rightarrow \\text{Tính trạng}$.",
                        "Bản chất: Trình tự nucleotide trong gene quy định trình tự nucleotide trong mRNA, qua đó quy định trình tự amino acid trong protein biểu hiện thành tính trạng cơ thể."
                    ])
                ],
                "matrix_focus": "Nêu đặc điểm mã di truyền; mô tả cơ chế dịch mã tại ribosome; giải thích sơ đồ mối quan hệ từ gene đến tính trạng; bài tập dịch mã xác định chuỗi amino acid."
            },
            {
                "id": 41,
                "title": "Đột biến gene",
                "pages": "178 – 180",
                "headings": [
                    ("I. Khái niệm đột biến gene", [
                        "1. Định nghĩa: Đột biến gene là những biến đổi trong cấu trúc của gene liên quan đến một hoặc một số cặp nucleotide.",
                        "2. Các dạng đột biến điểm: Mất một cặp nucleotide, Thêm một cặp nucleotide, Thay thế một cặp nucleotide."
                    ]),
                    ("II. Nguyên nhân và cơ chế phát sinh đột biến gene", [
                        "Do tác nhân vật lí (tia phóng xạ, tia tử ngoại UV), tác nhân hoá học (chất độc hoá học dioxin, thuốc trừ sâu) hoặc rối loạn sinh lí - hoá sinh nội bào làm bắt cặp sai trong nhân đôi DNA."
                    ]),
                    ("III. Ý nghĩa và tác hại của đột biến gene", [
                        "Đa số đột biến gene có hại cho sinh vật vì phá vỡ cấu trúc hài hoà vốn có; một số có lợi hoặc trung tính; cung cấp nguồn nguyên liệu sơ cấp dồi dào cho quá trình chọn giống và tiến hoá."
                    ])
                ],
                "matrix_focus": "Định nghĩa đột biến gene; phân biệt 3 dạng đột biến điểm (mất, thêm, thay thế cặp nu); nguyên nhân phát sinh; phân tích ý nghĩa và tác hại của đột biến gene đối với sinh vật và chọn giống cây trồng."
            }
        ]
    },
    {
        "chapter_num": "XII",
        "chapter_title": "DI TRUYỀN NHIỄM SẮC THỂ",
        "domain": "Vật sống (Sinh học)",
        "lessons": [
            {
                "id": 42,
                "title": "Nhiễm sắc thể và bộ nhiễm sắc thể",
                "pages": "181 – 185",
                "headings": [
                    ("I. Nhiễm sắc thể (NST)", [
                        "1. Cấu trúc hiển vi của NST: Gồm tâm động (eo sơ cấp), hai cánh nhiễm sắc thể; cấu tạo hoá học gồm phân tử DNA liên kết chặt chẽ với protein loại histone.",
                        "2. Mức độ xoắn cuộn của NST (sợi cơ bản, sợi nhiễm sắc, sợi siêu xoắn, chromatid)."
                    ]),
                    ("II. Bộ nhiễm sắc thể", [
                        "1. Bộ NST lưỡng bội ($2n$): Chứa các cặp NST tương đồng giống nhau về hình dạng và kích thước (người $2n = 46$, ruồi giấm $2n = 8$).",
                        "2. Bộ NST đơn bội ($n$): Bộ NST có trong tế bào giao tử chỉ chứa một chiếc của mỗi cặp tương đồng.",
                        "3. Tính đặc trưng của bộ NST mỗi loài sinh vật (đặc trưng về số lượng, hình dạng và cấu trúc)."
                    ])
                ],
                "matrix_focus": "Mô tả cấu tạo hiển vi và hoá học của NST; phân biệt bộ NST lưỡng bội ($2n$) và đơn bội ($n$); tính đặc trưng của bộ NST mỗi loài sinh vật."
            },
            {
                "id": 43,
                "title": "Nguyên phân và giảm phân",
                "pages": "186 – 190",
                "headings": [
                    ("I. Nguyên phân", [
                        "1. Diễn biến qua 4 kì: Kì đầu (NST đóng xoắn, màng nhân biến mất), Kì giữa (các NST kép xếp thành 1 hàng trên mặt phẳng xích đạo), Kì sau (hai chromatid tách nhau ở tâm động thành 2 NST đơn phân li về hai cực), Kì cuối (hình thành hai nhân mới).",
                        "2. Kết quả và ý nghĩa: Từ 1 tế bào mẹ ($2n$) tạo ra 2 tế bào con có bộ NST giống hệt nhau và giống tế bào mẹ ($2n$); giúp cơ thể lớn lên, tái sinh mô, sinh sản vô tính."
                    ]),
                    ("II. Giảm phân", [
                        "1. Diễn biến qua hai lần phân bào liên tiếp (Giảm phân I và Giảm phân II), NST chỉ nhân đôi 1 lần ở kì trung gian trước GP I; tiếp hợp và trao đổi chéo ở kì đầu GP I; các cặp NST kép xếp thành 2 hàng ở kì giữa GP I.",
                        "2. Kết quả: Từ 1 tế bào mẹ ($2n$) tạo ra 4 tế bào con có bộ NST giảm đi một nửa ($n$ giao tử)."
                    ]),
                    ("III. Ý nghĩa thực tiễn của nguyên phân và giảm phân", [
                        "Nguyên phân là cơ sở của giâm, chiết, ghép cành, nuôi cấy mô tế bào; Giảm phân kết hợp thụ tinh tạo biến dị tổ hợp phong phú cho chọn giống."
                    ])
                ],
                "matrix_focus": "Mô tả diễn biến và kết quả của nguyên phân và giảm phân; phân biệt điểm khác nhau cơ bản giữa nguyên phân và giảm phân; nêu ý nghĩa thực tiễn trong nhân giống vô tính và tạo giao tử."
            },
            {
                "id": 44,
                "title": "Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
                "pages": "191 – 193",
                "headings": [
                    ("I. Nhiễm sắc thể thường và nhiễm sắc thể giới tính", [
                        "1. NST thường: Tồn tại thành từng cặp tương đồng giống nhau ở cả hai giới, mang gene quy định tính trạng thường.",
                        "2. NST giới tính: Gồm 1 cặp khác nhau giữa giới đực và giới cái (ở người, động vật có vú, ruồi giấm: nữ/cái là XX, nam/đực là XY; ở chim, bò sát, bướm: cái là XY, đực là XX)."
                    ]),
                    ("II. Cơ chế xác định giới tính", [
                        "1. Cơ chế thụ tinh phân li tạo tỉ lệ đực : cái xấp xỉ 1 : 1 ở đa số loài (mẹ sinh 1 loại trứng mang X; bố sinh 2 loại tinh trùng mang X và mang Y với tỉ lệ ngang nhau -> $1\\text{XX} : 1\\text{XY}$).",
                        "2. Các yếu tố môi trường ảnh hưởng đến sự phân hoá giới tính (nhiệt độ ấp trứng ở rùa, cá sấu; hormone; ánh sáng)."
                    ])
                ],
                "matrix_focus": "Phân biệt NST thường và NST giới tính; viết sơ đồ cơ chế xác định giới tính ở người; giải thích nguyên nhân tỉ lệ nam : nữ xấp xỉ 1 : 1 trong tự nhiên; các yếu tố ảnh hưởng đến sự phân hoá giới tính."
            },
            {
                "id": 45,
                "title": "Di truyền liên kết",
                "pages": "194 – 196",
                "headings": [
                    ("I. Quy luật di truyền liên kết của Morgan", [
                        "1. Thí nghiệm của Thomas Hunt Morgan trên ruồi giấm: Lai ruồi giấm thân xám, cánh dài thuần chủng với thân đen, cánh cụt -> F1 100% xám, dài -> Lai phân tích ruồi đực F1 thu được đời con $Fa$ tỉ lệ 1 xám, dài : 1 đen, cụt.",
                        "2. Giải thích: Các gene quy định màu thân và độ dài cánh cùng nằm trên một nhiễm sắc thể nên di truyền cùng nhau (liên kết hoàn toàn)."
                    ]),
                    ("II. Ý nghĩa của di truyền liên kết", [
                        "Đảm bảo sự di truyền bền vững của từng nhóm tính trạng tốt luôn đi kèm với nhau; hạn chế xuất hiện biến dị tổ hợp; ứng dụng chọn lọc nhóm tính trạng quý trong nông nghiệp."
                    ])
                ],
                "matrix_focus": "Mô tả thí nghiệm lai phân tích ruồi giấm của Morgan; nội dung và cơ chế di truyền liên kết gene; so sánh sự khác nhau giữa phân li độc lập và di truyền liên kết; ý nghĩa trong chọn giống."
            },
            {
                "id": 46,
                "title": "Đột biến nhiễm sắc thể",
                "pages": "197 – 200",
                "headings": [
                    ("I. Khái niệm đột biến nhiễm sắc thể", [
                        "Đột biến nhiễm sắc thể là những biến đổi về cấu trúc hoặc số lượng nhiễm sắc thể."
                    ]),
                    ("II. Đột biến cấu trúc nhiễm sắc thể", [
                        "1. Mất đoạn: Mất một đoạn NST làm giảm số lượng gene (gây chết hoặc giảm sức sống, ví dụ: mất đoạn NST số 5 gây hội chứng tiếng mèo kêu).",
                        "2. Lặp đoạn: Lặp lại một đoạn NST làm tăng liều lượng gene (ví dụ: lặp đoạn ở ruồi giấm làm mắt lồi thành mắt dẹt).",
                        "3. Đảo đoạn: Một đoạn NST bị đứt ra quay $180^\\circ$ rồi gắn lại."
                    ]),
                    ("III. Đột biến số lượng nhiễm sắc thể", [
                        "1. Đột biến lệch bội (dị bội): Biến đổi số lượng NST ở một hoặc một số cặp tương đồng ($2n+1$ thể ba, $2n-1$ thể một; ví dụ: hội chứng Down có 3 NST số 21, hội chứng Turner XO).",
                        "2. Đột biến đa bội: Toàn bộ bộ NST tăng theo bội số của $n$ ($3n, 4n$ đa bội cùng nguồn; quả to, cơ quan sinh dưỡng lớn, không hạt)."
                    ])
                ],
                "matrix_focus": "Định nghĩa đột biến NST; phân biệt 3 dạng đột biến cấu trúc (mất đoạn, lặp đoạn, đảo đoạn); phân biệt đột biến lệch bội và đa bội; nêu ví dụ các bệnh do đột biến NST ở người (Down, Turner) và ứng dụng cây đa bội (dưa hấu không hạt)."
            }
        ]
    },
    {
        "chapter_num": "XIII",
        "chapter_title": "DI TRUYỀN HỌC VỚI CON NGƯỜI VÀ ĐỜI SỐNG",
        "domain": "Vật sống (Sinh học ứng dụng)",
        "lessons": [
            {
                "id": 47,
                "title": "Di truyền học với con người",
                "pages": "201 – 206",
                "headings": [
                    ("I. Tính trạng ở người", [
                        "Tính trạng bình thường ở người: màu mắt, nhóm máu, dạng tóc, thuận tay phải/trái; phương pháp nghiên cứu phả hệ ở người."
                    ]),
                    ("II. Bệnh và tật di truyền ở người", [
                        "1. Bệnh di truyền do đột biến gene: Bệnh mù màu, bệnh máu khó đông (gene lặn trên NST giới tính X), bệnh bạch tạng (gene lặn trên NST thường).",
                        "2. Bệnh do đột biến NST: Hội chứng Down (3 NST số 21), hội chứng Turner (nữ chỉ có 1 NST X - OX), hội chứng Klinefelter (nam XXY)."
                    ]),
                    ("III. Di truyền y học và tư vấn di truyền", [
                        "Chẩn đoán trước sinh, sàng lọc sơ sinh, giải mã bộ gene người, tư vấn di truyền trước hôn nhân để hạn chế sinh con mắc dị tật bẩm sinh."
                    ]),
                    ("IV. Vai trò của di truyền học với hôn nhân", [
                        "Cơ sở khoa học của Luật Hôn nhân và Gia đình: Cấm kết hôn cận huyết (trong vòng 3 đời) vì làm tăng nguy cơ gặp nhau của các gene lặn đột biến gây hại ở trạng thái đồng hợp."
                    ])
                ],
                "matrix_focus": "Kể tên các bệnh, tật di truyền phổ biến ở người (Down, Turner, mù màu, máu khó đông); nguyên nhân di truyền học; giải thích cơ sở khoa học cấm kết hôn cận huyết thống; ý nghĩa của tư vấn di truyền y học."
            },
            {
                "id": 48,
                "title": "Ứng dụng công nghệ di truyền vào đời sống",
                "pages": "207 – 210",
                "headings": [
                    ("I. Khái niệm công nghệ di truyền (Công nghệ gene)", [
                        "Quy trình kĩ thuật chuyển một đoạn DNA mang gene từ tế bào cho sang tế bào nhận nhờ thể truyền (plasmid, virus)."
                    ]),
                    ("II. Ứng dụng công nghệ di truyền", [
                        "1. Trong nông nghiệp: Tạo giống cây trồng biến đổi gene (GMO) kháng sâu bệnh, kháng hạn, giàu dinh dưỡng (lúa vàng giàu beta-carotene, ngô Bt).",
                        "2. Trong y học và dược phẩm: Sản xuất insulin người bằng vi khuẩn *E. coli*, sản xuất vaccine tái tổ hợp, hormone tăng trưởng.",
                        "3. Trong bảo vệ môi trường: Sử dụng vi sinh vật chuyển gene phân huỷ dầu tràn, xử lí rác thải độc hại.",
                        "4. Trong pháp y: Giám định ADN xác định huyết thống, điều tra tội phạm."
                    ]),
                    ("III. Đạo đức sinh học trong nghiên cứu và ứng dụng di truyền", [
                        "Các vấn đề an toàn sinh học đối với sinh vật biến đổi gene, cấm nhân bản vô tính người, bảo vệ quyền riêng tư thông tin bộ gene."
                    ])
                ],
                "matrix_focus": "Khái niệm công nghệ gene; các ứng dụng nổi bật trong nông nghiệp, y học (sản xuất insulin), môi trường, giám định ADN pháp y; nêu các nguyên tắc đạo đức sinh học."
            }
        ]
    },
    {
        "chapter_num": "XIV",
        "chapter_title": "TIẾN HOÁ",
        "domain": "Vật sống (Sinh học)",
        "lessons": [
            {
                "id": 49,
                "title": "Khái niệm tiến hoá và các hình thức chọn lọc",
                "pages": "211 – 213",
                "headings": [
                    ("I. Khái niệm tiến hoá", [
                        "Tiến hoá là quá trình biến đổi lịch sử lâu dài của các loài sinh vật qua các thế hệ, dẫn đến sự thích nghi ngày càng hoàn thiện và sự hình thành các loài mới từ tổ tiên chung."
                    ]),
                    ("II. Chọn lọc nhân tạo", [
                        "1. Khái niệm: Quá trình con người chủ động chọn lọc và giữ lại những cá thể mang biến dị phù hợp với nhu cầu, thị hiếu và đào thải các cá thể không mong muốn.",
                        "2. Kết quả: Tạo ra sự đa dạng các giống vật nuôi, cây trồng trong thời gian ngắn từ một loài hoang dại ban đầu."
                    ]),
                    ("III. Chọn lọc tự nhiên", [
                        "Quá trình tác động của các nhân tố môi trường giữ lại những cá thể có biến dị thích nghi sống sót và sinh sản tốt hơn, đào thải các cá thể kém thích nghi."
                    ])
                ],
                "matrix_focus": "Định nghĩa tiến hoá; so sánh điểm giống và khác nhau giữa chọn lọc nhân tạo và chọn lọc tự nhiên (động lực, mục đích, kết quả, tốc độ)."
            },
            {
                "id": 50,
                "title": "Cơ chế tiến hoá",
                "pages": "214 – 218",
                "headings": [
                    ("I. Quan điểm của Lamarck về cơ chế tiến hoá", [
                        "Thuyết tiến hoá của J. B. Lamarck: Sinh vật chủ động biến đổi để thích nghi với môi trường sống; tập quán hoạt động làm cơ quan phát triển hay tiêu biến và di truyền lại cho đời sau (hạn chế: chưa phân biệt được biến dị di truyền và không di truyền)."
                    ]),
                    ("II. Quan điểm của Darwin về cơ chế tiến hoá", [
                        "Thuyết tiến hoá của Charles Darwin: Đấu tranh sinh tồn là động lực; biến dị cá thể xuất hiện ngẫu nhiên trong sinh sản; Chọn lọc tự nhiên tác động đào thải cá thể mang biến dị bất lợi, giữ lại cá thể mang biến dị có lợi, tích luỹ qua các thế hệ tạo thành loài mới thích nghi."
                    ]),
                    ("III. Một số luận điểm của thuyết tiến hoá tổng hợp hiện đại", [
                        "Tiến hoá nhỏ (biến đổi cấu trúc di truyền của quần thể dẫn đến hình thành loài mới) và Tiến hoá lớn; 5 nhân tố tiến hoá: Đột biến, Di - nhập gene, Chọn lọc tự nhiên, Yếu tố ngẫu nhiên, Giao phối không ngẫu nhiên."
                    ])
                ],
                "matrix_focus": "Nội dung thuyết tiến hoá của Darwin (biến dị cá thể, đấu tranh sinh tồn, chọn lọc tự nhiên); so sánh quan điểm Lamarck và Darwin; nêu vai trò của các nhân tố tiến hoá hiện đại."
            },
            {
                "id": 51,
                "title": "Sự phát sinh và phát triển sự sống trên Trái Đất",
                "pages": "219 – 223",
                "headings": [
                    ("I. Các giai đoạn phát sinh và phát triển sự sống trên Trái Đất", [
                        "1. Giai đoạn tiến hoá hoá học: Sự hình thành các hợp chất hữu cơ đơn giản từ chất vô cơ trong khí quyển nguyên thuỷ dưới tác động của sấm sét, tia cực tím; hình thành các đại phân tử sinh học (protein, nucleic acid).",
                        "2. Giai đoạn tiến hoá tiền sinh học: Hình thành các giọt coacervate (tế bào sơ khai) có màng ngăn và khả năng trao đổi chất, tự nhân đôi.",
                        "3. Giai đoạn tiến hoá sinh học: Từ tế bào nguyên thuỷ tiến hoá thành các dạng sinh vật đơn bào, đa bào qua các đại địa chất (Đại Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh)."
                    ]),
                    ("II. Sự phát sinh loài người", [
                        "Vượn người hoá thạch -> Người vượn *Australopithecus* -> Người khéo léo *Homo habilis* -> Người đứng thẳng *Homo erectus* -> Người hiện đại *Homo sapiens*; vai trò của lao động, tiếng nói, tư duy trong quá trình tiến hoá hình thành loài người."
                    ])
                ],
                "matrix_focus": "Trình bày 3 giai đoạn phát sinh sự sống (hoá học, tiền sinh học, sinh học); thí nghiệm chứng minh của Miller - Urey; các mốc tiến hoá của loài người từ vượn người đến người hiện đại *Homo sapiens*."
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
        hp.text = "SGK KHOA HỌC TỰ NHIÊN 9 – HỆ THỐNG ĐỀ MỤC TẠO MA TRẬN ĐỀ KIỂM TRA THƯỜNG XUYÊN & ĐỊNH KÌ"
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hp.style.font.name = "Times New Roman"
        hp.style.font.size = Pt(8.5)
        hp.style.font.color.rgb = RGBColor(120, 120, 120)
        
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.text = "Bộ sách Kết nối tri thức với cuộc sống – Phục vụ xây dựng Ma trận & Bản đặc tả đề kiểm tra môn KHTN lớp 9"
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

    run_main = p_title.add_run("BẢNG TỔNG HỢP HỆ THỐNG ĐỀ MỤC KIẾN THỨC BÀI HỌC\nSGK KHOA HỌC TỰ NHIÊN 9 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)\n")
    run_main.font.name = "Times New Roman"
    run_main.font.size = Pt(15)
    run_main.font.bold = True
    run_main.font.color.rgb = RGBColor(16, 75, 140)

    run_desc = p_title.add_run("MỤC ĐÍCH: XÂY DỰNG MA TRẬN & BẢN ĐẶC TẢ ĐỀ KIỂM TRA THƯỜNG XUYÊN VÀ ĐỊNH KÌ LỚP 9\n(THEO CÁC MỨC ĐỘ NHẬN THỨC: NHẬN BIẾT – THÔNG HIỂU – VẬN DỤNG – VẬN DỤNG CAO)")
    run_desc.font.name = "Times New Roman"
    run_desc.font.size = Pt(10.5)
    run_desc.font.italic = True
    run_desc.font.bold = True
    run_desc.font.color.rgb = RGBColor(180, 40, 20)

    doc.add_paragraph().paragraph_format.space_after = Pt(2)

    # Phần 1: HƯỚNG DẪN SỬ DỤNG
    p_hd_h = doc.add_heading(level=1)
    p_hd_h.paragraph_format.space_before = Pt(6)
    p_hd_h.paragraph_format.space_after = Pt(4)
    r_hd_h = p_hd_h.add_run("PHẦN 1. HƯỚNG DẪN SỬ DỤNG ĐỀ MỤC ĐỂ THIẾT KẾ MA TRẬN ĐỀ KIỂM TRA LỚP 9")
    r_hd_h.font.name = "Times New Roman"
    r_hd_h.font.size = Pt(12.5)
    r_hd_h.font.bold = True
    r_hd_h.font.color.rgb = RGBColor(16, 75, 140)

    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_after = Pt(4)
    p_intro.paragraph_format.line_spacing = 1.15
    r_in = p_intro.add_run(
        "Tài liệu này được biên soạn độc quyền phục vụ Giáo viên giảng dạy môn Khoa học tự nhiên 9 (KHTN 9), tổ chuyên môn "
        "và cán bộ khảo thí nhà trường trong việc thiết kế Ma trận đề kiểm tra, Bản đặc tả đề kiểm tra thường xuyên "
        "và định kì (Giữa kì I, Cuối kì I, Giữa kì II, Cuối kì II, ôn thi tuyển sinh lớp 10) theo chuẩn chương trình GDPT 2018.\n\n"
        "Toàn bộ hệ thống đề mục I, II, III... và các tiểu mục 1, 2, 3... được trích xuất, đối soát chuẩn xác 100% theo "
        "sách giáo khoa Khoa học tự nhiên 9 – Bộ Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam, gồm 51 Bài học thuộc 14 Chương và 1 Bài mở đầu, trải dài 230 trang).\n\n"
        "Quy tắc phân bổ 4 mức độ nhận thức khi lập ma trận đề kiểm tra KHTN 9:\n"
        " • Nhận biết (~40%): Tái hiện định nghĩa, công thức, quy luật Mendel, cấu trúc DNA/NST, khái niệm cơ năng, khúc xạ, hydrocarbon, polymer.\n"
        " • Thông hiểu (~30%): Giải thích hiện tượng khúc xạ, phản xạ toàn phần, giải thích cơ chế di truyền, đột biến, so sánh kim loại và phi kim, tính chất dẫn xuất hydrocarbon.\n"
        " • Vận dụng (~20%): Vận dụng định luật Ohm, công thức công - công suất, tính toán theo PTHH hữu cơ, độ cồn, giải bài tập lai một/hai cặp tính trạng, xác định tỉ lệ giao tử.\n"
        " • Vận dụng cao (~10%): Bài toán tổng hợp quang hình học, mạch điện hỗn hợp, bài tập di truyền phả hệ phức hợp, phân tích chu trình carbon và đề xuất giải pháp ứng phó biến đổi khí hậu."
    )
    r_in.font.name = "Times New Roman"
    r_in.font.size = Pt(10.5)

    # Bảng tổng quan phân phối chương trình KHTN 9
    p_tb_h = doc.add_heading(level=1)
    p_tb_h.paragraph_format.space_before = Pt(8)
    p_tb_h.paragraph_format.space_after = Pt(4)
    r_tb_h = p_tb_h.add_run("PHẦN 2. BẢNG PHÂN BỐ CẤU TRÚC CHƯƠNG TRÌNH KHTN 9 PHỤC VỤ RA ĐỀ")
    r_tb_h.font.name = "Times New Roman"
    r_tb_h.font.size = Pt(12.5)
    r_tb_h.font.bold = True
    r_tb_h.font.color.rgb = RGBColor(16, 75, 140)

    overview_table = doc.add_table(rows=1, cols=6)
    overview_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(overview_table)
    
    headers = ["Chương", "Tên Chương / Mạch nội dung", "Số bài", "Trang SGK", "Tỉ lệ KT gợi ý", "Phạm vi kiểm tra trọng tâm"]
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
        ("Mở đầu", "Dụng cụ, hoá chất. Thuyết trình khoa học", "Bài 1", "6 – 14", "5%", "Kiểm tra thường xuyên đầu năm"),
        ("Chương I", "Năng lượng cơ học (Vật lí)", "Bài 2 – 4 (3 bài)", "15 – 24", "10%", "Giữa kì I"),
        ("Chương II", "Ánh sáng (Vật lí)", "Bài 5 – 10 (6 bài)", "25 – 52", "15 – 20%", "Giữa kì I & Cuối kì I"),
        ("Chương III", "Điện (Vật lí)", "Bài 11 – 13 (3 bài)", "53 – 66", "10%", "Cuối kì I"),
        ("Chương IV", "Điện từ (Vật lí)", "Bài 14 – 15 (2 bài)", "67 – 74", "5%", "Cuối kì I / Giữa kì II"),
        ("Chương V", "Năng lượng với cuộc sống (Vật lí)", "Bài 16 – 17 (2 bài)", "75 – 86", "5%", "Cuối kì I / Giữa kì II"),
        ("Chương VI", "Kim loại. Kim loại và phi kim (Hoá học)", "Bài 18 – 21 (4 bài)", "87 – 102", "10%", "Giữa kì I & Cuối kì I"),
        ("Chương VII", "Hợp chất hữu cơ, hydrocarbon (Hoá học)", "Bài 22 – 25 (4 bài)", "103 – 117", "10%", "Giữa kì II"),
        ("Chương VIII", "Ethylic alcohol và Acetic acid (Hoá học)", "Bài 26 – 27 (2 bài)", "118 – 127", "8%", "Giữa kì II"),
        ("Chương IX", "Lipid. Carbohydrate. Protein. Polymer", "Bài 28 – 32 (5 bài)", "128 – 145", "10%", "Cuối kì II"),
        ("Chương X", "Khai thác tài nguyên vỏ Trái Đất", "Bài 33 – 35 (3 bài)", "146 – 158", "5%", "Cuối kì II"),
        ("Chương XI", "Di truyền học Mendel. Cơ sở phân tử", "Bài 36 – 41 (6 bài)", "159 – 180", "15 – 20%", "Giữa kì I & Cuối kì I"),
        ("Chương XII", "Di truyền nhiễm sắc thể (Sinh học)", "Bài 42 – 46 (5 bài)", "181 – 200", "12 – 15%", "Giữa kì II"),
        ("Chương XIII", "Di truyền học với con người (Sinh học)", "Bài 47 – 48 (2 bài)", "201 – 210", "5%", "Cuối kì II"),
        ("Chương XIV", "Tiến hoá (Sinh học)", "Bài 49 – 51 (3 bài)", "211 – 223", "8%", "Cuối kì II & Tuyển sinh 10"),
        ("TỔNG CỘNG", "Toàn bộ chương trình KHTN lớp 9", "51 Bài học", "6 – 223", "100%", "Chuẩn kiến thức kĩ năng cả năm")
    ]

    for row_idx, data_row in enumerate(overview_data):
        row = overview_table.add_row()
        cells = row.cells
        bg_color = "F2F2F2" if row_idx % 2 == 1 else "FFFFFF"
        if row_idx == len(overview_data) - 1:
            bg_color = "DCE6F1"
        for c_idx, val in enumerate(data_row):
            cells[c_idx].text = val
            set_cell_background(cells[c_idx], bg_color)
            set_cell_margins(cells[c_idx], top=70, bottom=70, left=80, right=80)
            p = cells[c_idx].paragraphs[0]
            if c_idx in [0, 2, 3, 4]:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            else:
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9)
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

    # Duyệt qua từng chương trong KHTN 9
    for ch_idx, ch in enumerate(chapters_data_khtn9):
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
            set_cell_margins(cell, top=90, bottom=90, left=90, right=90)
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
            set_cell_margins(cell_0, top=80, bottom=80, left=90, right=90)
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
            set_cell_margins(cell_1, top=80, bottom=80, left=90, right=90)
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
            set_cell_margins(cell_2, top=80, bottom=80, left=90, right=90)
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
            set_cell_margins(cell_3, top=80, bottom=80, left=90, right=90)
            p3 = cell_3.paragraphs[0]
            p3.alignment = WD_ALIGN_PARAGRAPH.LEFT
            p3.paragraph_format.line_spacing = 1.15
            
            r3_nb = p3.add_run("• Nhận biết: ")
            r3_nb.font.name = "Times New Roman"
            r3_nb.font.size = Pt(8.5)
            r3_nb.font.bold = True
            r3_nb.font.color.rgb = RGBColor(0, 102, 204)
            r3_nb_t = p3.add_run("Tái hiện định nghĩa, công thức, quy luật.\n")
            r3_nb_t.font.name = "Times New Roman"
            r3_nb_t.font.size = Pt(8.5)

            r3_th = p3.add_run("• Thông hiểu: ")
            r3_th.font.name = "Times New Roman"
            r3_th.font.size = Pt(8.5)
            r3_th.font.bold = True
            r3_th.font.color.rgb = RGBColor(0, 153, 76)
            r3_th_t = p3.add_run("Giải thích cơ chế, tính chất, phân biệt, so sánh.\n")
            r3_th_t.font.name = "Times New Roman"
            r3_th_t.font.size = Pt(8.5)

            r3_vd = p3.add_run("• Vận dụng: ")
            r3_vd.font.name = "Times New Roman"
            r3_vd.font.size = Pt(8.5)
            r3_vd.font.bold = True
            r3_vd.font.color.rgb = RGBColor(204, 102, 0)
            r3_vd_t = p3.add_run("Tính toán công thức, giải bài tập lai, viết PTHH.\n")
            r3_vd_t.font.name = "Times New Roman"
            r3_vd_t.font.size = Pt(8.5)

            r3_vdc = p3.add_run("• Vận dụng cao: ")
            r3_vdc.font.name = "Times New Roman"
            r3_vdc.font.size = Pt(8.5)
            r3_vdc.font.bold = True
            r3_vdc.font.color.rgb = RGBColor(178, 34, 34)
            r3_vdc_t = p3.add_run("Bài toán thực tiễn phức hợp, phả hệ, tối ưu năng lượng.")
            r3_vdc_t.font.name = "Times New Roman"
            r3_vdc_t.font.size = Pt(8.5)

    # PHẦN 4: PHỤ LỤC KHUNG MA TRẬN ĐỀ KIỂM TRA MẪU (CHUẨN BỘ GIÁO DỤC)
    p_sec4_h = doc.add_heading(level=1)
    p_sec4_h.paragraph_format.space_before = Pt(14)
    p_sec4_h.paragraph_format.space_after = Pt(4)
    r_sec4 = p_sec4_h.add_run("PHẦN 4. PHỤ LỤC: KHUNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN KHTN 9 MẪU")
    r_sec4.font.name = "Times New Roman"
    r_sec4.font.size = Pt(13)
    r_sec4.font.bold = True
    r_sec4.font.color.rgb = RGBColor(16, 75, 140)

    p_guide_matrix = doc.add_paragraph()
    p_guide_matrix.paragraph_format.space_after = Pt(4)
    r_gm = p_guide_matrix.add_run(
        "Khung ma trận đề kiểm tra định kì môn Khoa học tự nhiên 9 dưới đây được thiết kế kết hợp hình thức Trắc nghiệm khách quan "
        "(Nhiều phương án lựa chọn, Đúng/Sai, Trả lời ngắn) và Tự luận theo định hướng phát triển phẩm chất và năng lực của Bộ GD&ĐT."
    )
    r_gm.font.name = "Times New Roman"
    r_gm.font.size = Pt(10)
    r_gm.font.italic = True

    matrix_table = doc.add_table(rows=1, cols=9)
    matrix_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(matrix_table)

    m_headers = [
        "TT", "Chủ đề / Mạch nội dung", "Phạm vi Chương / Bài",
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
        ("1", "Năng lượng & Biến đổi (Vật lí)", "Chương I, II: Cơ năng, Ánh sáng", "4 TN", "3 TN + 1 TL", "1 TN + 1 TL", "1 TL (VDC)", "10 câu", "25%"),
        ("2", "Năng lượng & Biến đổi (Vật lí)", "Chương III, IV: Điện, Điện từ", "3 TN", "2 TN + 1 TL", "1 TL", "0,5 TL", "6,5 câu", "15%"),
        ("3", "Chất & Biến đổi (Hoá học)", "Chương VI: Kim loại & Phi kim", "3 TN", "2 TN", "1 TN + 1 TL", "0,5 TL", "6,5 câu", "15%"),
        ("4", "Chất & Biến đổi (Hoá học)", "Chương VII, VIII: Hydrocarbon, Rượu, Giấm", "3 TN", "2 TN + 1 TL", "1 TN + 1 TL", "0,5 TL", "7,5 câu", "18%"),
        ("5", "Vật sống (Sinh học)", "Chương XI: Di truyền Mendel, DNA, Gene", "4 TN", "2 TN + 1 TL", "1 TN + 1 TL", "0,5 TL", "8,5 câu", "20%"),
        ("6", "Vật sống & Trái Đất", "Chương XII, XIV: NST, Tiến hoá", "1 TN", "1 TN", "1 TL", "0,5 TL", "3,5 câu", "7%"),
        ("", "TỔNG CỘNG", "Định lượng toàn bài kiểm tra 9", "18 TN (4,5đ)", "12 TN + 4 TL (3,0đ)", "4 TN + 4 TL (1,5đ)", "3,5 TL (1,0đ)", "42,5 câu", "100%")
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

    doc_path = "He_thong_de_muc_KHTN_9_Tao_Ma_tran_Kiem_tra.docx"
    doc.save(doc_path)
    print(f"Đã tạo thành công file Word: {doc_path}")

if __name__ == "__main__":
    build_docx()
