# -*- coding: utf-8 -*-
"""
Script tạo file docx: Đề xuất tỉ lệ phân môn Lí - Hoá - Sinh trong ma trận kiểm tra định kì môn KHTN THCS (Lớp 6, 7, 8, 9)
theo Chương trình GDPT 2018, Công văn 7991/BGDĐT-GDTrH và cấu trúc SGK Kết nối tri thức với cuộc sống.
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

def set_cell_margins(cell, top=80, bottom=80, left=100, right=100):
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

def build_docx():
    doc = docx.Document()

    # Thiết lập lề trang chuẩn TCVN
    for section in doc.sections:
        section.top_margin = Inches(0.79)
        section.bottom_margin = Inches(0.79)
        section.left_margin = Inches(0.98)
        section.right_margin = Inches(0.79)
        
        # Header / Footer
        header = section.header
        hp = header.paragraphs[0]
        hp.text = "HƯỚNG DẪN XÂY DỰNG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN KHTN THCS (LỚP 6, 7, 8, 9)"
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hp.style.font.name = "Times New Roman"
        hp.style.font.size = Pt(8.5)
        hp.style.font.color.rgb = RGBColor(120, 120, 120)

        footer = section.footer
        fp = footer.paragraphs[0]
        fp.text = "Đề xuất tỉ lệ phân môn Vật lí - Hoá học - Sinh học theo Chương trình GDPT 2018 & CV 7991/BGDĐT"
        fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        fp.style.font.name = "Times New Roman"
        fp.style.font.size = Pt(8.5)
        fp.style.font.color.rgb = RGBColor(120, 120, 120)

    # Tiêu đề tài liệu
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(4)
    
    r_sub = p_title.add_run("BỘ GIÁO DỤC VÀ ĐÀO TẠO – CHƯƠNG TRÌNH GDPT 2018\n")
    r_sub.font.name = "Times New Roman"
    r_sub.font.size = Pt(11)
    r_sub.font.bold = True
    r_sub.font.color.rgb = RGBColor(80, 80, 80)

    r_main = p_title.add_run("ĐỀ XUẤT TỈ LỆ CÁC PHÂN MÔN VẬT LÍ – HOÁ HỌC – SINH HỌC\nTRONG MA TRẬN ĐỀ KIỂM TRA ĐỊNH KÌ MÔN KHOA HỌC TỰ NHIÊN\n(CÁC LỚP 6, 7, 8, 9 – BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)\n")
    r_main.font.name = "Times New Roman"
    r_main.font.size = Pt(14)
    r_main.font.bold = True
    r_main.font.color.rgb = RGBColor(16, 75, 140)

    r_desc = p_title.add_run("ÁP DỤNG CHO 4 KÌ KIỂM TRA ĐỊNH KÌ: GIỮA HỌC KÌ 1, CUỐI HỌC KÌ 1, GIỮA HỌC KÌ 2, CUỐI HỌC KÌ 2\n(CĂN CỨ THÔNG TƯ 32/2018/TT-BGDĐT, THÔNG TƯ 22/2021/TT-BGDĐT VÀ CÔNG VĂN 7991/BGDĐT-GDTrH)")
    r_desc.font.name = "Times New Roman"
    r_desc.font.size = Pt(10)
    r_desc.font.italic = True
    r_desc.font.bold = True
    r_desc.font.color.rgb = RGBColor(180, 40, 20)

    doc.add_paragraph().paragraph_format.space_after = Pt(2)

    # PHẦN 1: CĂN CỨ PHÁP LÍ VÀ NGUYÊN TẮC THIẾT KẾ
    p1 = doc.add_heading(level=1)
    p1.paragraph_format.space_before = Pt(6)
    p1.paragraph_format.space_after = Pt(4)
    r1 = p1.add_run("PHẦN 1. CĂN CỨ PHÁP LÍ VÀ NGUYÊN TẮC XÁC ĐỊNH TỈ LỆ PHÂN MÔN")
    r1.font.name = "Times New Roman"
    r1.font.size = Pt(12.5)
    r1.font.bold = True
    r1.font.color.rgb = RGBColor(16, 75, 140)

    p_cc = doc.add_paragraph()
    p_cc.paragraph_format.line_spacing = 1.15
    p_cc.paragraph_format.space_after = Pt(4)
    p_cc.add_run(
        "1.1. Căn cứ pháp lí và hướng dẫn chuyên môn:\n"
        " • Chương trình GDPT 2018 môn Khoa học tự nhiên ban hành kèm Thông tư số 32/2018/TT-BGDĐT: Quy định thời lượng 140 tiết/năm học cho mỗi lớp (35 tuần, 4 tiết/tuần) và bảng tỉ lệ % thời lượng chuẩn của từng mạch nội dung.\n"
        " • Thông tư số 22/2021/TT-BGDĐT ngày 20/7/2021 của Bộ GD&ĐT quy định về đánh giá học sinh THCS và THPT.\n"
        " • Công văn số 7991/BGDĐT-GDTrH ngày 17/12/2024 của Bộ GD&ĐT về việc hướng dẫn kiểm tra, đánh giá định kì và cấu trúc định dạng ma trận, bản đặc tả đề kiểm tra môn KHTN cấp THCS.\n"
        " • Công văn hướng dẫn chuyên môn và cấu trúc đề kiểm tra định kì của các Sở GD&ĐT (định dạng kết hợp Trắc nghiệm nhiều lựa chọn, Trắc nghiệm Đúng/Sai, Trắc nghiệm trả lời ngắn và Tự luận).\n\n"
        "1.2. Nguyên tắc vàng khi xác định tỉ lệ phân môn trong ma trận đề kiểm tra KHTN:\n"
        " (1) Nguyên tắc tương thích thời lượng thực học: Tỉ lệ điểm số giữa các phân môn (Vật lí, Hoá học, Sinh học, Trái Đất & Bầu trời) trong đề kiểm tra định kì phải tương ứng với tỉ lệ thời lượng dạy học thực tế của các mạch nội dung đó tính đến thời điểm kiểm tra.\n"
        " (2) Đảm bảo tính khoa học và toàn diện: Không bỏ sót mạch nội dung trọng tâm; kiểm tra đầy đủ các yêu cầu cần đạt về nhận thức khoa học tự nhiên, tìm hiểu tự nhiên và vận dụng kiến thức, kĩ năng đã học.\n"
        " (3) Phù hợp với mô hình tổ chức dạy học của nhà trường: Cung cấp giải pháp cho cả hai mô hình giảng dạy thực tế tại các trường THCS hiện nay:\n"
        "   - Mô hình A (Dạy học song song cả 3 phân môn theo tuần - Mô hình phổ biến nhất):\n"
        "     Giáo viên giảng dạy song song các phân môn theo thời khoá biểu tuần, tại mỗi kì kiểm tra học sinh đều tích luỹ kiến thức của cả 3 phân môn.\n"
        "   - Mô hình B (Dạy học tuần tự theo tiến trình SGK Kết nối tri thức):\n"
        "     Học theo thứ tự các chương trong sách giáo khoa, tỉ lệ phân môn biến chuyển linh hoạt theo các chương đã học đến thời điểm kiểm tra."
    )
    for r in p_cc.runs:
        r.font.name = "Times New Roman"
        r.font.size = Pt(10.5)

    # PHẦN 2: BẢNG TỔNG HỢP TỈ LỆ THỜI LƯỢNG CHUẨN (THÔNG TƯ 32/2018/TT-BGDĐT)
    p2 = doc.add_heading(level=1)
    p2.paragraph_format.space_before = Pt(8)
    p2.paragraph_format.space_after = Pt(4)
    r2 = p2.add_run("PHẦN 2. BẢNG TỈ LỆ THỜI LƯỢNG CHUẨN CỦA BỘ GD&ĐT THEO CÁC MẠCH NỘI DUNG (CẢ NĂM)")
    r2.font.name = "Times New Roman"
    r2.font.size = Pt(12.5)
    r2.font.bold = True
    r2.font.color.rgb = RGBColor(16, 75, 140)

    t_std = doc.add_table(rows=1, cols=6)
    t_std.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t_std)
    
    headers_std = ["Mạch nội dung / Phân môn", "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9", "Ghi chú phân môn tương ứng"]
    for i, h in enumerate(headers_std):
        cell = t_std.rows[0].cells[i]
        cell.text = h
        set_cell_background(cell, "1F497D")
        set_cell_margins(cell, top=80, bottom=80, left=80, right=80)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(9.5)
            r.font.bold = True
            r.font.color.rgb = RGBColor(255, 255, 255)

    data_std = [
        ("Mở đầu & Kĩ năng tiến trình", "5% (~7 tiết)", "4% (~6 tiết)", "2% (~3 tiết)", "2% (~3 tiết)", "Phương pháp, an toàn, thiết bị thí nghiệm"),
        ("Chất và sự biến đổi của chất", "15% (~21 tiết)", "20% (~28 tiết)", "29% (~41 tiết)", "31% (~43 tiết)", "Phân môn HOÁ HỌC"),
        ("Vật sống (Tế bào, sinh vật, người)", "38% (~53 tiết)", "38% (~53 tiết)", "29% (~41 tiết)", "25% (~35 tiết)", "Phân môn SINH HỌC"),
        ("Năng lượng và sự biến đổi", "25% (~35 tiết)", "28% (~39 tiết)", "28% (~39 tiết)", "28% (~39 tiết)", "Phân môn VẬT LÍ"),
        ("Trái Đất và bầu trời", "7% (~10 tiết)", "0% (0 tiết)", "2% (~3 tiết)", "4% (~6 tiết)", "Thiên văn học (Lí) & Hoá vỏ Trái Đất (Hoá)"),
        ("Đánh giá định kì (KTDK)", "10% (14 tiết)", "10% (14 tiết)", "10% (14 tiết)", "10% (14 tiết)", "Kiểm tra Giữa kì & Cuối kì (HK1 & HK2)"),
        ("TỔNG CỘNG CẢ NĂM", "100% (140 tiết)", "100% (140 tiết)", "100% (140 tiết)", "100% (140 tiết)", "140 tiết / 35 tuần / 4 tiết mỗi tuần")
    ]

    for r_idx, row_vals in enumerate(data_std):
        row = t_std.add_row()
        bg = "F2F2F2" if r_idx % 2 == 1 else "FFFFFF"
        if r_idx == len(data_std) - 1:
            bg = "DCE6F1"
        for c_idx, val in enumerate(row_vals):
            cell = row.cells[c_idx]
            cell.text = val
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=70, right=70)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if c_idx in [1, 2, 3, 4] else WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9)
                if r_idx == len(data_std) - 1 or c_idx == 0:
                    r.font.bold = True

    # PHẦN 3: BẢNG ĐỀ XUẤT TỈ LỆ LÍ - HOÁ - SINH CHI TIẾT THEO TỪNG KÌ KIỂM TRA (LỚP 6, 7, 8, 9)
    p3 = doc.add_heading(level=1)
    p3.paragraph_format.space_before = Pt(14)
    p3.paragraph_format.space_after = Pt(4)
    r3 = p3.add_run("PHẦN 3. ĐỀ XUẤT TỈ LỆ ĐIỂM SỐ LÍ – HOÁ – SINH TRONG 4 KÌ KIỂM TRA ĐỊNH KÌ")
    r3.font.name = "Times New Roman"
    r3.font.size = Pt(12.5)
    r3.font.bold = True
    r3.font.color.rgb = RGBColor(16, 75, 140)

    # Dữ liệu đề xuất chi tiết cho 4 khối lớp
    proposals_data = [
        {
            "grade": "LỚP 6",
            "sgk_focus": "SGK gồm 55 bài: Mở đầu/Đo lường (1-8), Chất (9-17), Vật sống (18-39), Lực & Năng lượng & Trái Đất (40-55)",
            "periods": [
                {
                    "period_name": "GIỮA HỌC KÌ 1 (GHK1 - Tuần 9)",
                    "range_content": "Bài 1 đến Bài 16: Mở đầu, Các phép đo (Lí), Các thể của chất, Oxygen, Không khí, Vật liệu, nhiên liệu (Hoá), Bắt đầu Tế bào (Sinh)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "35% (3,5đ)", "sinh_hoc": "30% (3,0đ)"},
                    "sequential": {"vat_li": "45% (4,5đ) [Đo lường]", "hoa_hoc": "55% (5,5đ) [Chất]", "sinh_hoc": "0% (Chưa học đến)"},
                    "note": "Kiểm tra kĩ năng đo lường, quy tắc an toàn, thể của chất và cấu tạo sơ lược tế bào."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 1 (CHK1 - Tuần 18)",
                    "range_content": "Bài 1 đến Bài 33: Hoàn thành Chất & Hỗn hợp (Hoá), Tế bào, Cơ thể đơn bào/đa bào, Phân loại sinh vật, Vi khuẩn, Virus, Nấm (Sinh)",
                    "parallel": {"vat_li": "20% (2,0đ)", "hoa_hoc": "30% (3,0đ)", "sinh_hoc": "50% (5,0đ)"},
                    "sequential": {"vat_li": "20% (2,0đ) [Ôn phép đo]", "hoa_hoc": "30% (3,0đ) [Chất]", "sinh_hoc": "50% (5,0đ) [Sinh học]"},
                    "note": "Trọng tâm HK1 là Tế bào và Đa dạng thế giới sống (Sinh) cùng mạch Chất và biến đổi chất (Hoá)."
                },
                {
                    "period_name": "GIỮA HỌC KÌ 2 (GHK2 - Tuần 27)",
                    "range_content": "Bài 28 đến Bài 43: Đa dạng Thực vật, Động vật, Đa dạng sinh học (Sinh), Bắt đầu Chương VIII Lực trong đời sống (Lí: Bài 40-43)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "15% (1,5đ)", "sinh_hoc": "55% (5,5đ)"},
                    "sequential": {"vat_li": "30% (3,0đ) [Lực]", "hoa_hoc": "10% (1,0đ) [Tích hợp]", "sinh_hoc": "60% (6,0đ) [Đa dạng SV]"},
                    "note": "Trọng tâm là Đa dạng thực vật, động vật (Sinh) và Biểu diễn lực, biến dạng lò xo, trọng lượng (Lí)."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 2 (CHK2 - Tuần 35)",
                    "range_content": "Toàn bộ kiến thức HK2: Lực ma sát, lực cản (Lí), Năng lượng và sự chuyển hoá năng lượng (Lí: Bài 46-51), Trái Đất và bầu trời (Lí/Thiên văn: Bài 52-55), Đa dạng sinh học và bảo tồn (Sinh)",
                    "parallel": {"vat_li": "45% (4,5đ)", "hoa_hoc": "15% (1,5đ)", "sinh_hoc": "40% (4,0đ)"},
                    "sequential": {"vat_li": "60% (6,0đ) [Lực, Năng lượng, Bầu trời]", "hoa_hoc": "10% (1,0đ) [Tổng hợp]", "sinh_hoc": "30% (3,0đ) [Sinh học]"},
                    "note": "Vật lí chiếm tỉ trọng lớn ở cuối năm do học dồn toàn bộ mạch Lực, Năng lượng và Trái Đất - Bầu trời."
                }
            ]
        },
        {
            "grade": "LỚP 7",
            "sgk_focus": "SGK gồm 42 bài: Mở đầu (1), Nguyên tử, BTH, Phân tử (2-7, Hoá), Tốc độ, Âm, Sáng, Từ (8-20, Lí), Trao đổi chất, Cảm ứng, Sinh trưởng, Sinh sản (21-42, Sinh)",
            "periods": [
                {
                    "period_name": "GIỮA HỌC KÌ 1 (GHK1 - Tuần 9)",
                    "range_content": "Bài 1 đến Bài 11 (hoặc tích luỹ song song): Kĩ năng KHTN, Nguyên tử, Nguyên tố, Bảng tuần hoàn, Phân tử (Hoá: Bài 2-5), Tốc độ chuyển động, đo tốc độ (Lí: Bài 8-10), Khái quát TĐC & Quang hợp (Sinh: Bài 21-24)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "35% (3,5đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "40% (4,0đ) [Tốc độ]", "hoa_hoc": "60% (6,0đ) [Nguyên tử, BTH]", "sinh_hoc": "0% (Chưa học đến)"},
                    "note": "Kiểm tra mô hình nguyên tử, BTH hoá học, đồ thị s-t, tính tốc độ và quá trình quang hợp."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 1 (CHK1 - Tuần 18)",
                    "range_content": "Hoàn thành Hoá học (Hoá trị, CTHH: Bài 6-7), Vật lí (Âm thanh, Ánh sáng, Gương phẳng: Bài 12-17), Sinh học (Hô hấp tế bào, Trao đổi khí: Bài 25-28)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "30% (3,0đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "40% (4,0đ) [Âm, Ánh sáng]", "hoa_hoc": "30% (3,0đ) [Hoá trị, CTHH]", "sinh_hoc": "30% (3,0đ) [Quang hợp, Hô hấp]"},
                    "note": "Cả 3 phân môn có thời lượng tích luỹ tương đương nhau ở học kì 1, kiểm tra toàn diện."
                },
                {
                    "period_name": "GIỮA HỌC KÌ 2 (GHK2 - Tuần 27)",
                    "range_content": "Vật lí (Từ trường, Nam châm điện: Bài 18-20), Sinh học (Trao đổi nước và chất dinh dưỡng ở TV/ĐV, Cảm ứng ở sinh vật và tập tính: Bài 29-35)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "10% (1,0đ)", "sinh_hoc": "55% (5,5đ)"},
                    "sequential": {"vat_li": "30% (3,0đ) [Từ trường]", "hoa_hoc": "10% (1,0đ) [Ôn tập]", "sinh_hoc": "60% (6,0đ) [TĐC & Cảm ứng]"},
                    "note": "Sinh học chiếm ưu thế lớn ở HK2 (Trao đổi nước, Cảm ứng, Tập tính động vật) kết hợp Từ trường (Lí)."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 2 (CHK2 - Tuần 35)",
                    "range_content": "Sinh học (Sinh trưởng và phát triển, Sinh sản ở sinh vật, Cơ thể thống nhất: Bài 36-42), Vật lí (Từ học và tổng hợp Vật lí 7), Hoá học (Ôn tập tổng hợp kiến thức cả năm)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "15% (1,5đ)", "sinh_hoc": "55% (5,5đ)"},
                    "sequential": {"vat_li": "25% (2,5đ) [Từ & Sóng]", "hoa_hoc": "15% (1,5đ) [Hoá trị, CTHH]", "sinh_hoc": "60% (6,0đ) [Sinh trưởng, Sinh sản]"},
                    "note": "Sinh học lớp 7 chiếm 38% thời lượng cả năm, tập trung nhiều ở nửa cuối năm."
                }
            ]
        },
        {
            "grade": "LỚP 8",
            "sgk_focus": "SGK gồm 47 bài: Phản ứng & Hợp chất vô cơ (2-12, Hoá), Áp suất, Đòn bẩy, Điện, Nhiệt (13-29, Lí), Sinh học cơ thể người & Sinh thái (30-47, Sinh)",
            "periods": [
                {
                    "period_name": "GIỮA HỌC KÌ 1 (GHK1 - Tuần 9)",
                    "range_content": "Hoá học (Phản ứng hoá học, Mol, Dung dịch, Nồng độ: Bài 2-4), Vật lí (Khối lượng riêng, Áp suất trên bề mặt: Bài 13-15), Sinh học (Khái quát cơ thể, Hệ vận động, Dinh dưỡng & tiêu hoá: Bài 30-32)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "35% (3,5đ)", "sinh_hoc": "30% (3,0đ)"},
                    "sequential": {"vat_li": "35% (3,5đ) [KL riêng, Áp suất]", "hoa_hoc": "65% (6,5đ) [PƯHH, Mol, Nồng độ]", "sinh_hoc": "0% (Chưa học đến)"},
                    "note": "Lớp 8 có sự phân bổ 3 phân môn đồng đều nhất trong cấp THCS (Hoá 29%, Lí 28%, Sinh 29% + 2% sinh quyển)."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 1 (CHK1 - Tuần 18)",
                    "range_content": "Hoá học (ĐL bảo toàn khối lượng, PTHH, Tốc độ PƯ, Acid, Base, pH: Bài 5-9), Vật lí (Áp suất chất lỏng/khí, Archimedes, Moment lực, Đòn bẩy: Bài 16-19), Sinh học (Máu, Tuần hoàn, Hô hấp, Bài tiết: Bài 33-35)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "35% (3,5đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "30% (3,0đ) [Archimedes, Đòn bẩy]", "hoa_hoc": "35% (3,5đ) [Acid, Base, PTHH]", "sinh_hoc": "35% (3,5đ) [Tuần hoàn, Hô hấp]"},
                    "note": "Ba phân môn chia đều tỉ lệ ~ 3,0 – 3,5 điểm mỗi môn, phản ánh đúng tiến trình thực học."
                },
                {
                    "period_name": "GIỮA HỌC KÌ 2 (GHK2 - Tuần 27)",
                    "range_content": "Hoá học (Oxide, Muối, Phân bón hoá học: Bài 10-12), Vật lí (Hiện tượng nhiễm điện, Dòng điện, Nguồn điện, Mạch điện, Tác dụng dòng điện: Bài 20-23), Sinh học (Cân bằng nội môi, Hệ thần kinh, Giác quan, Nội tiết: Bài 36-38)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "30% (3,0đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "40% (4,0đ) [Điện học]", "hoa_hoc": "20% (2,0đ) [Muối, Phân bón]", "sinh_hoc": "40% (4,0đ) [Thần kinh, Nội tiết]"},
                    "note": "Kiểm tra tính chất của Oxide, Muối, Phân bón; Mạch điện đơn giản và Hệ thần kinh - nội tiết ở người."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 2 (CHK2 - Tuần 35)",
                    "range_content": "Vật lí (Cường độ, hiệu điện thế, Năng lượng nhiệt, Nội năng, Truyền nhiệt, Nở vì nhiệt: Bài 24-29), Sinh học (Da, Thân nhiệt, Sinh sản người; Môi trường, Quần thể, Quần xã, Hệ sinh thái: Bài 39-47), Hoá học (Tổng kết hợp chất vô cơ)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "25% (2,5đ)", "sinh_hoc": "40% (4,0đ)"},
                    "sequential": {"vat_li": "35% (3,5đ) [Nhiệt học & Điện]", "hoa_hoc": "15% (1,5đ) [Hợp chất vô cơ]", "sinh_hoc": "50% (5,0đ) [Sinh sản & Hệ sinh thái]"},
                    "note": "Sinh học cuối kì 8 có thêm mạch Sinh thái học và môi trường nên chiếm tỉ lệ 40 - 50%."
                }
            ]
        },
        {
            "grade": "LỚP 9",
            "sgk_focus": "SGK gồm 51 bài: Cơ năng, Quang, Điện, Điện từ, Năng lượng (2-17, Lí), Kim loại, Hợp chất hữu cơ, Dẫn xuất, Vỏ Trái Đất (18-35, Hoá), Di truyền học & Tiến hoá (36-51, Sinh)",
            "periods": [
                {
                    "period_name": "GIỮA HỌC KÌ 1 (GHK1 - Tuần 9)",
                    "range_content": "Vật lí (Động năng, Thế năng, Cơ năng, Công - Công suất, Khúc xạ, Phản xạ toàn phần: Bài 2-6), Hoá học (Tính chất chung của kim loại, Dãy hoạt động hoá học: Bài 18-19), Sinh học (Khái quát di truyền, Các quy luật Mendel: Bài 36-37)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "30% (3,0đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "45% (4,5đ) [Cơ năng, Quang]", "hoa_hoc": "25% (2,5đ) [Kim loại]", "sinh_hoc": "30% (3,0đ) [Mendel]"},
                    "note": "Kiểm tra cơ năng, bảo toàn cơ năng, phản xạ toàn phần, dãy hoạt động hoá học và quy luật di truyền Mendel."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 1 (CHK1 - Tuần 18)",
                    "range_content": "Vật lí (Lăng kính, Thấu kính, Đo tiêu cự, Kính lúp, Điện trở, Định luật Ohm: Bài 7-11), Hoá học (Tách kim loại, Hợp kim, Phi kim, Mở đầu hợp chất hữu cơ: Bài 20-22), Sinh học (Nucleic acid, DNA, Gene, Tái bản, Phiên mã, Dịch mã, Đột biến gene: Bài 38-41)",
                    "parallel": {"vat_li": "35% (3,5đ)", "hoa_hoc": "30% (3,0đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "35% (3,5đ) [Thấu kính, Ohm]", "hoa_hoc": "30% (3,0đ) [Kim loại, Hữu cơ]", "sinh_hoc": "35% (3,5đ) [DNA, Gene, Đột biến]"},
                    "note": "Phân chia cực kì cân đối, kiểm tra trọng tâm thấu kính, định luật Ohm, cơ chế di truyền phân tử DNA - RNA."
                },
                {
                    "period_name": "GIỮA HỌC KÌ 2 (GHK2 - Tuần 27)",
                    "range_content": "Vật lí (Mạch nối tiếp/song song, Điện năng, Công suất, Cảm ứng điện từ: Bài 12-14), Hoá học (Alkane, Alkene, Nhiên liệu, Ethylic alcohol, Acetic acid: Bài 23-27), Sinh học (Nhiễm sắc thể, Nguyên phân, Giảm phân, Di truyền giới tính, Di truyền liên kết, Đột biến NST: Bài 42-46)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "40% (4,0đ)", "sinh_hoc": "30% (3,0đ)"},
                    "sequential": {"vat_li": "25% (2,5đ) [Mạch điện, AC]", "hoa_hoc": "45% (4,5đ) [Hydrocarbon, Cồn, Giấm]", "sinh_hoc": "30% (3,0đ) [Di truyền NST]"},
                    "note": "Hoá học chiếm tỉ trọng cao nhất trong giai đoạn này (Hydrocarbon, Rượu ethylic, Acid acetic)."
                },
                {
                    "period_name": "CUỐI HỌC KÌ 2 (CHK2 - Tuần 35)",
                    "range_content": "Toàn bộ kiến thức HK2 và ôn thi vào lớp 10: Vật lí (Tác dụng dòng điện xoay chiều, Năng lượng tái tạo), Hoá học (Lipid, Carbohydrate, Protein, Polymer, Hoá vỏ Trái Đất: Bài 28-35), Sinh học (Di truyền học người, Ứng dụng công nghệ gene, Tiến hoá: Bài 47-51)",
                    "parallel": {"vat_li": "30% (3,0đ)", "hoa_hoc": "35% (3,5đ)", "sinh_hoc": "35% (3,5đ)"},
                    "sequential": {"vat_li": "30% (3,0đ) [Tổng hợp Lí]", "hoa_hoc": "35% (3,5đ) [Hoá hữu cơ]", "sinh_hoc": "35% (3,5đ) [Di truyền & Tiến hoá]"},
                    "note": "Đề Cuối kì 2 lớp 9 đồng thời là đề thi thử bám sát cấu trúc thi tuyển sinh vào lớp 10 THPT môn KHTN."
                }
            ]
        }
    ]

    for grp in proposals_data:
        p_gr_h = doc.add_paragraph()
        p_gr_h.paragraph_format.space_before = Pt(12)
        p_gr_h.paragraph_format.space_after = Pt(2)
        p_gr_h.paragraph_format.keep_with_next = True
        
        r_gh = p_gr_h.add_run(f"3.{proposals_data.index(grp)+1}. BẢNG ĐỀ XUẤT TỈ LỆ MA TRẬN CHO KHỐI {grp['grade']}")
        r_gh.font.name = "Times New Roman"
        r_gh.font.size = Pt(12)
        r_gh.font.bold = True
        r_gh.font.color.rgb = RGBColor(192, 57, 43)

        p_desc = doc.add_paragraph()
        p_desc.paragraph_format.space_after = Pt(4)
        r_d = p_desc.add_run(f"Đặc điểm phân phối: {grp['sgk_focus']}")
        r_d.font.name = "Times New Roman"
        r_d.font.size = Pt(9.5)
        r_d.font.italic = True
        r_d.font.color.rgb = RGBColor(80, 80, 80)

        # Tạo bảng tỉ lệ 4 kì kiểm tra
        table_p = doc.add_table(rows=1, cols=6)
        table_p.alignment = WD_TABLE_ALIGNMENT.CENTER
        set_table_borders(table_p)

        th_cols = ["Kì kiểm tra định kì", "Phạm vi kiến thức trọng tâm", "Mô hình A (Dạy song song)\n[Khuyến nghị áp dụng]", "Mô hình B (Dạy tuần tự)\n[Theo tiến trình SGK]", "Thang điểm 10\n(Lí : Hoá : Sinh)", "Định hướng ra đề"]
        for c_i, h_t in enumerate(th_cols):
            cell = table_p.rows[0].cells[c_i]
            cell.text = h_t
            set_cell_background(cell, "244061")
            set_cell_margins(cell, top=70, bottom=70, left=70, right=70)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9)
                r.font.bold = True
                r.font.color.rgb = RGBColor(255, 255, 255)

        for per_idx, period in enumerate(grp["periods"]):
            row = table_p.add_row()
            bg_col = "FFFFFF" if per_idx % 2 == 0 else "F9FAFB"

            # Col 0: Tên kì
            c0 = row.cells[0]
            c0.text = period["period_name"]
            set_cell_background(c0, bg_col)
            set_cell_margins(c0, top=70, bottom=70, left=70, right=70)
            p0 = c0.paragraphs[0]
            p0.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p0.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(9)
                r.font.bold = True
                r.font.color.rgb = RGBColor(16, 75, 140)

            # Col 1: Phạm vi kiến thức
            c1 = row.cells[1]
            c1.text = period["range_content"]
            set_cell_background(c1, bg_col)
            set_cell_margins(c1, top=70, bottom=70, left=70, right=70)
            p1 = c1.paragraphs[0]
            p1.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p1.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)

            # Col 2: Mô hình A (Song song)
            c2 = row.cells[2]
            par = period["parallel"]
            c2.text = f"• Vật lí: {par['vat_li']}\n• Hoá học: {par['hoa_hoc']}\n• Sinh học: {par['sinh_hoc']}"
            set_cell_background(c2, "EBF1F5" if per_idx % 2 == 0 else "E2EBF0") # Nổi bật cột khuyến nghị
            set_cell_margins(c2, top=70, bottom=70, left=70, right=70)
            p2 = c2.paragraphs[0]
            p2.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p2.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)
                r.font.bold = True

            # Col 3: Mô hình B (Tuần tự)
            c3 = row.cells[3]
            seq = period["sequential"]
            c3.text = f"• Vật lí: {seq['vat_li']}\n• Hoá học: {seq['hoa_hoc']}\n• Sinh học: {seq['sinh_hoc']}"
            set_cell_background(c3, bg_col)
            set_cell_margins(c3, top=70, bottom=70, left=70, right=70)
            p3 = c3.paragraphs[0]
            p3.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p3.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)

            # Col 4: Thang điểm 10
            c4 = row.cells[4]
            # Lấy số điểm từ parallel
            c4.text = f"Lí: {par['vat_li'].split('(')[1].replace(')', '')}\nHoá: {par['hoa_hoc'].split('(')[1].replace(')', '')}\nSinh: {par['sinh_hoc'].split('(')[1].replace(')', '')}"
            set_cell_background(c4, bg_col)
            set_cell_margins(c4, top=70, bottom=70, left=70, right=70)
            p4 = c4.paragraphs[0]
            p4.alignment = WD_ALIGN_PARAGRAPH.CENTER
            for r in p4.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)
                r.font.bold = True
                r.font.color.rgb = RGBColor(180, 40, 20)

            # Col 5: Ghi chú định hướng
            c5 = row.cells[5]
            c5.text = period["note"]
            set_cell_background(c5, bg_col)
            set_cell_margins(c5, top=70, bottom=70, left=70, right=70)
            p5 = c5.paragraphs[0]
            p5.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p5.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)

    # PHẦN 4: HƯỚNG DẪN CẤU TRÚC ĐỊNH DẠNG ĐỀ KIỂM TRA ĐỊNH KÌ THEO CÔNG VĂN 7991
    p4 = doc.add_heading(level=1)
    p4.paragraph_format.space_before = Pt(14)
    p4.paragraph_format.space_after = Pt(4)
    r4 = p4.add_run("PHẦN 4. HƯỚNG DẪN CẤU TRÚC ĐỊNH DẠNG ĐỀ VÀ PHÂN BỔ CÂU HỎI THEO CV 7991")
    r4.font.name = "Times New Roman"
    r4.font.size = Pt(12.5)
    r4.font.bold = True
    r4.font.color.rgb = RGBColor(16, 75, 140)

    p_format = doc.add_paragraph()
    p_format.paragraph_format.line_spacing = 1.15
    p_format.paragraph_format.space_after = Pt(4)
    p_format.add_run(
        "Theo hướng dẫn mới nhất tại Công văn số 7991/BGDĐT-GDTrH của Bộ GD&ĐT (định hướng tiếp cận kì thi tuyển sinh lớp 10 và thi tốt nghiệp THPT từ năm 2025), "
        "đề kiểm tra định kì môn Khoa học tự nhiên (thời gian làm bài: 60 phút hoặc 90 phút tuỳ theo trường) được khuyến nghị cấu trúc 4 phần hoặc kết hợp Trắc nghiệm + Tự luận như sau:\n\n"
        " • PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (16 – 20 câu, 4,0 – 5,0 điểm):\n"
        "   Mỗi câu hỏi có 4 phương án trả lời, học sinh chọn 1 đáp án đúng duy nhất. Mỗi câu trả lời đúng được 0,25 điểm. Phân bổ đều cho các mức độ Nhận biết (60%) và Thông hiểu (40%) của 3 phân môn Lí, Hoá, Sinh.\n\n"
        " • PHẦN II. TRẮC NGHIỆM ĐÚNG/SAI (2 – 4 câu, 2,0 – 3,0 điểm):\n"
        "   Mỗi câu hỏi có 1 ngữ cảnh khoa học/thực nghiệm chung và 4 lệnh hỏi (a, b, c, d). Học sinh lựa chọn 'Đúng' hoặc 'Sai' cho từng lệnh. "
        "Dạng thức này đánh giá rất tốt năng lực phân tích dữ liệu, đọc bảng biểu, phân tích thí nghiệm của học sinh. "
        "Quy tắc tính điểm chuẩn: Đúng 1 lệnh = 0,1 điểm; Đúng 2 lệnh = 0,25 điểm; Đúng 3 lệnh = 0,5 điểm; Đúng cả 4 lệnh = 1,0 điểm (hoặc tính 0,25 đ/lệnh tuỳ tổ chuyên môn quy định).\n\n"
        " • PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (2 – 4 câu, 1,0 – 1,5 điểm):\n"
        "   Học sinh tự điền con số kết quả tính toán hoặc thuật ngữ khoa học vào phiếu trả lời (không có sẵn phương án lựa chọn). Rất thích hợp cho các bài toán tính nồng độ, tính khối lượng, tính tốc độ, tính công suất, tính số nucleotide...\n\n"
        " • PHẦN IV. TỰ LUẬN (1 – 3 câu, 1,5 – 2,0 điểm):\n"
        "   Dành cho mức độ Vận dụng và Vận dụng cao: Viết phương trình hoá học và giải thích hiện tượng; vẽ sơ đồ đường truyền ánh sáng / sơ đồ mạch điện; giải bài tập lai di truyền; phân tích tác động môi trường hoặc đề xuất giải pháp thực tiễn."
    )
    for r in p_format.runs:
        r.font.name = "Times New Roman"
        r.font.size = Pt(10)

    # Bảng phân bổ số lượng câu hỏi và điểm số mẫu cho đề 10 điểm (Mô hình song song)
    p_mat_sample_h = doc.add_paragraph()
    p_mat_sample_h.paragraph_format.space_before = Pt(8)
    p_mat_sample_h.paragraph_format.space_after = Pt(2)
    p_mat_sample_h.paragraph_format.keep_with_next = True
    r_ms = p_mat_sample_h.add_run("BẢNG PHÂN BỔ MẪU SỐ CÂU HỎI VÀ ĐIỂM SỐ CHO ĐỀ KIỂM TRA ĐỊNH KÌ KHTN (THANG ĐIỂM 10)")
    r_ms.font.name = "Times New Roman"
    r_ms.font.size = Pt(11)
    r_ms.font.bold = True
    r_ms.font.color.rgb = RGBColor(16, 75, 140)

    t_sample = doc.add_table(rows=1, cols=7)
    t_sample.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(t_sample)

    sam_headers = ["Phân môn", "Phần I: TN 4 lựa chọn\n(0,25 đ/câu)", "Phần II: TN Đúng/Sai\n(1,0 đ/câu)", "Phần III: Trả lời ngắn\n(0,25 - 0,5 đ/câu)", "Phần IV: Tự luận\n(0,5 - 1,5 đ/câu)", "Tổng điểm", "Tỉ lệ %"]
    for c_i, h_t in enumerate(sam_headers):
        cell = t_sample.rows[0].cells[c_i]
        cell.text = h_t
        set_cell_background(cell, "1F497D")
        set_cell_margins(cell, top=70, bottom=70, left=60, right=60)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        for r in p.runs:
            r.font.name = "Times New Roman"
            r.font.size = Pt(8.5)
            r.font.bold = True
            r.font.color.rgb = RGBColor(255, 255, 255)

    sample_rows = [
        ("VẬT LÍ", "6 câu (1,50 điểm)", "1 câu (1,00 điểm)", "1 câu (0,25 điểm)", "1 câu ngắn (0,50 điểm)", "3,25 – 3,50 điểm", "32,5 – 35%"),
        ("HOÁ HỌC", "5 câu (1,25 điểm)", "1 câu (1,00 điểm)", "1 câu (0,25 điểm)", "1 câu (0,75 điểm)", "3,00 – 3,25 điểm", "30,0 – 32,5%"),
        ("SINH HỌC", "7 câu (1,75 điểm)", "1 câu (1,00 điểm)", "1 câu (0,25 điểm)", "1 câu (0,50 điểm)", "3,50 điểm", "35,0%"),
        ("TỔNG CỘNG ĐỀ THI", "18 câu (4,50 điểm)", "3 câu = 12 lệnh (3,00 điểm)", "3 câu (0,75 điểm)", "3 câu (1,75 điểm)", "10,00 điểm", "100%")
    ]

    for r_idx, s_row in enumerate(sample_rows):
        row = t_sample.add_row()
        bg_col = "FFFFFF" if r_idx % 2 == 0 else "F9FAFB"
        if r_idx == len(sample_rows) - 1:
            bg_col = "DCE6F1"
        for c_idx, val in enumerate(s_row):
            cell = row.cells[c_idx]
            cell.text = val
            set_cell_background(cell, bg_col)
            set_cell_margins(cell, top=60, bottom=60, left=60, right=60)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER if c_idx in [1, 2, 3, 4, 5, 6] else WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = "Times New Roman"
                r.font.size = Pt(8.5)
                if r_idx == len(sample_rows) - 1 or c_idx == 0:
                    r.font.bold = True

    # PHẦN 5: KẾT LUẬN VÀ LƯU Ý KHI THỰC HIỆN TẠI CÁC TRƯỜNG THCS
    p5 = doc.add_heading(level=1)
    p5.paragraph_format.space_before = Pt(14)
    p5.paragraph_format.space_after = Pt(4)
    r5 = p5.add_run("PHẦN 5. KẾT LUẬN VÀ KHUYẾN NGHỊ THỰC HIỆN")
    r5.font.name = "Times New Roman"
    r5.font.size = Pt(12.5)
    r5.font.bold = True
    r5.font.color.rgb = RGBColor(16, 75, 140)

    p_end = doc.add_paragraph()
    p_end.paragraph_format.line_spacing = 1.15
    p_end.paragraph_format.space_after = Pt(4)
    p_end.add_run(
        "1. Thống nhất trong Tổ chuyên môn: Căn cứ kế hoạch giáo dục môn học (phân phối chương trình chi tiết) của nhà trường đã được Hiệu trưởng phê duyệt từ đầu năm học, Tổ trưởng chuyên môn và các nhóm giáo viên bộ môn KHTN cần họp thống nhất ma trận và bản đặc tả trước ngày kiểm tra ít nhất 2 tuần.\n\n"
        "2. Linh hoạt điều chỉnh sai số cho phép: Tỉ lệ điểm giữa các phân môn có thể dao động nhẹ trong khoảng ±5% (tương đương 0,25 – 0,5 điểm) để thuận tiện cho việc thiết kế các câu hỏi trắc nghiệm chẵn điểm và phân bổ câu hỏi tự luận hợp lí.\n\n"
        "3. Tích hợp liên môn trong câu hỏi thực tiễn: Khuyến khích ra các câu hỏi ở phần II (Đúng/Sai) hoặc tự luận có ngữ cảnh thực tế tích hợp giữa Vật lí – Hoá học – Sinh học (ví dụ: chu trình carbon, hiệu ứng nhà kính, quang hợp và bảo toàn năng lượng, ô nhiễm môi trường và sức khoẻ con người) để rèn luyện năng lực giải quyết vấn đề sáng tạo cho học sinh."
    )
    for r in p_end.runs:
        r.font.name = "Times New Roman"
        r.font.size = Pt(10)

    doc_path = "De_xuat_Ti_le_Phan_mon_Li_Hoa_Sinh_KHTN_THCS.docx"
    doc.save(doc_path)
    print(f"Đã tạo thành công file Word: {doc_path}")

if __name__ == "__main__":
    build_docx()
