import json, re, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('all_pages_ocr.json', 'r', encoding='utf-8') as f:
    ocr_data = json.load(f)

lessons = [
    (1, 'Giới thiệu về Khoa học tự nhiên', 7, 10),
    (2, 'An toàn trong phòng thực hành', 11, 12),
    (3, 'Sử dụng kính lúp', 13, 14),
    (4, 'Sử dụng kính hiển vi quang học', 15, 16),
    (5, 'Đo chiều dài', 17, 19),
    (6, 'Đo khối lượng', 20, 21),
    (7, 'Đo thời gian', 22, 23),
    (8, 'Đo nhiệt độ', 24, 27),
    (9, 'Sự đa dạng của chất', 28, 29),
    (10, 'Các thể của chất và sự chuyển thể', 30, 35),
    (11, 'Oxygen. Không khí', 36, 41),
    (12, 'Một số vật liệu', 42, 45),
    (13, 'Một số nguyên liệu', 46, 49),
    (14, 'Một số nhiên liệu', 50, 51),
    (15, 'Một số lương thực, thực phẩm', 52, 55),
    (16, 'Hỗn hợp các chất', 56, 59),
    (17, 'Tách chất khỏi hỗn hợp', 60, 63),
    (18, 'Tế bào – Đơn vị cơ bản của sự sống', 64, 66),
    (19, 'Cấu tạo và chức năng các thành phần của tế bào', 67, 69),
    (20, 'Sự lớn lên và sinh sản của tế bào', 70, 72),
    (21, 'Thực hành: Quan sát và phân biệt một số loại tế bào', 73, 74),
    (22, 'Cơ thể sinh vật', 75, 78),
    (23, 'Tổ chức cơ thể đa bào', 79, 82),
    (24, 'Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào', 83, 85),
    (25, 'Hệ thống phân loại sinh vật', 86, 89),
    (26, 'Khoá lưỡng phân', 90, 91),
    (27, 'Vi khuẩn', 92, 95),
    (28, 'Thực hành: Làm sữa chua và quan sát vi khuẩn', 96, 97),
    (29, 'Virus', 98, 101),
    (30, 'Nguyên sinh vật', 102, 105),
    (31, 'Thực hành: Quan sát nguyên sinh vật', 106, 107),
    (32, 'Nấm', 108, 111),
    (33, 'Thực hành: Quan sát các loại nấm', 112, 114),
    (34, 'Thực vật', 115, 122),
    (35, 'Thực hành: Quan sát và phân biệt một số nhóm thực vật', 123, 124),
    (36, 'Động vật', 125, 132),
    (37, 'Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên', 133, 134),
    (38, 'Đa dạng sinh học', 135, 138),
    (39, 'Tìm hiểu sinh vật ngoài thiên nhiên', 139, 143),
    (40, 'Lực là gì?', 144, 146),
    (41, 'Biểu diễn lực', 147, 150),
    (42, 'Biến dạng của lò xo', 151, 153),
    (43, 'Trọng lượng, lực hấp dẫn', 154, 156),
    (44, 'Lực ma sát', 157, 159),
    (45, 'Lực cản của nước', 160, 161),
    (46, 'Năng lượng và sự truyền năng lượng', 162, 164),
    (47, 'Một số dạng năng lượng', 165, 167),
    (48, 'Sự chuyển hoá năng lượng', 168, 170),
    (49, 'Năng lượng hao phí', 171, 172),
    (50, 'Năng lượng tái tạo', 173, 175),
    (51, 'Tiết kiệm năng lượng', 176, 178),
    (52, 'Chuyển động nhìn thấy của Mặt Trời. Thiên thể', 179, 182),
    (53, 'Mặt Trăng', 183, 186),
    (54, 'Hệ Mặt Trời', 187, 189),
    (55, 'Ngân Hà', 190, 192),
]

for b_id, title, p_start, p_end in lessons:
    print(f'=== Bài {b_id}: {title} (Tr. {p_start}-{p_end}) ===')
    for p in range(p_start, p_end + 1):
        lines = [item['text'] for item in ocr_data.get(str(p), [])]
        for line in lines:
            line_clean = line.strip()
            # Look for Roman numerals or circled symbols or standard headings
            if re.search(r'^(I{1,3}|IV|V|VI|VII|VIII|IX|X|[O@®©D])\s', line_clean) or re.search(r'^\d\.\s+[A-ZÀ-Ỹ]', line_clean) or any(k in line_clean.lower() for k in ['chuẩn bị', 'cách tiến hành', 'thu hoạch']):
                # Filter out obvious false positives like page numbers or caption items
                if not any(ign in line_clean for ign in ['Hình', 'Bảng', 'NXB', 'Em đã', 'Em có']):
                    print(f'  [p.{p}] {line_clean}')
