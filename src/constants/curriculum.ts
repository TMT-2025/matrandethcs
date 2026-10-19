// CSDL Phân phối chương trình SGK Khoa học tự nhiên THCS (Lớp 6, 7, 8, 9 - KNTT)
import { Chapter, Grade, Lesson } from '../types/matrix';

export interface KHTNChapter extends Chapter {
  domain?: string;
}

export const CURRICULUM: Record<number, KHTNChapter[]> = {
  "6": [
    {
      "id": "6_c1",
      "name": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "lessons": [
        {
          "id": "6_c1_l1",
          "name": "Bài 1: Giới thiệu về Khoa học tự nhiên",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "7 - 10",
          "subItems": [
            "I. Khái niệm Khoa học tự nhiên - Khoa học tự nhiên nghiên cứu các hiện tượng tự nhiên, tìm ra các tính chất, các quy luật của tự nhiên.",
            "II. Vật sống và vật không sống - Đặc điểm phân biệt vật sống [sinh vật] và vật không sống qua các dấu hiệu sống: trao đổi chất, sinh trưởng, phát triển, sinh sản, cảm ứng.",
            "III. Các lĩnh vực chính của Khoa học tự nhiên - Vật lí học, Hoá học, Sinh học, Khoa học Trái Đất, Thiên văn học.",
            "IV. Khoa học tự nhiên với công nghệ và đời sống - Vai trò của KHTN trong hoạt động thực tiễn, ứng dụng công nghệ, phát triển sản xuất và bảo vệ môi trường."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l2",
          "name": "Bài 2: An toàn trong phòng thực hành",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "11 - 12",
          "subItems": [
            "I. Một số kí hiệu cảnh báo trong phòng thực hành - Biển cảnh báo chất độc, chất dễ cháy, chất ăn mòn, nguy hiểm điện, đeo kính bảo hộ...",
            "II. Một số quy định an toàn trong phòng thực hành - Quy tắc an toàn khi làm thí nghiệm, sử dụng hoá chất, thiết bị điện, xử lí sự cố cháy nổ/hoá chất."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l3",
          "name": "Bài 3: Sử dụng kính lúp",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "13 - 14",
          "subItems": [
            "I. Tìm hiểu về kính lúp - Cấu tạo kính lúp [khung, tay cầm, mặt kính lúp dày ở giữa - thấu kính hội tụ]. Độ phóng đại.",
            "II. Sử dụng và bảo quản kính lúp - 1. Sử dụng [Đặt mặt kính gần vật mẫu, điều chỉnh khoảng cách để nhìn rõ chi tiết].",
            "II. Sử dụng và bảo quản kính lúp - 2. Bảo quản [Lau kính bằng khăn mềm, để nơi khô ráo, tránh va đập xước kính]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l4",
          "name": "Bài 4: Sử dụng kính hiển vi quang học",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "15 - 16",
          "subItems": [
            "I. Tìm hiểu về kính hiển vi quang học - Hệ thống giá đỡ, hệ thống phóng đại [thị kính, vật kính], hệ thống chiếu sáng [gương/đèn], hệ thống điều chỉnh [ốc to, ốc nhỏ].",
            "II. Sử dụng kính hiển vi quang học - Các bước lấy ánh sáng, đặt tiêu bản, điều chỉnh ốc to và ốc nhỏ để lấy nét quan sát.",
            "III. Bảo quản kính hiển vi quang học - Cách cầm nâng kính, lau ống kính bằng giấy chuyên dụng, che bụi sau khi dùng."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l5",
          "name": "Bài 5: Đo chiều dài",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "17 - 19",
          "subItems": [
            "I. Đơn vị độ dài - Đơn vị chuẩn trong hệ SI là mét [m]; các bội số và ước số [km, dm, cm, mm], đơn vị khác [inch, dặm].",
            "II. Dụng cụ đo chiều dài - Các loại thước [thước thẳng, thước dây, thước cuộn, thước kẹp]; Giới hạn đo [GHĐ] và Độ chia nhỏ nhất [ĐCNN].",
            "III. Cách đo chiều dài - 5 bước đo: Ước lượng chiều dài; chọn thước phù hợp; đặt thước đúng cách; đặt mắt nhìn vuông góc; đọc và ghi kết quả theo ĐCNN.",
            "IV. Vận dụng cách đo chiều dài vào đo thể tích - Đơn vị đo thể tích [m³, lít, mL]; Cách đo thể tích vật rắn không thấm nước bằng bình chia độ và bình tràn."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l6",
          "name": "Bài 6: Đo khối lượng",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "20 - 21",
          "subItems": [
            "I. Đơn vị khối lượng - Khái niệm khối lượng [số đo lượng chất]; đơn vị hợp pháp là kilôgam [kg]; gam [g], miligam [mg], tạ, tấn.",
            "II. Dụng cụ đo khối lượng - Các loại cân: cân Rô-béc-van, cân đòn, cân đồng hồ, cân y tế, cân điện tử.",
            "III. Cách đo khối lượng - 1. Dùng cân đồng hồ [Ước lượng, hiệu chỉnh kim số 0, đặt vật lên đĩa, đặt mắt, đọc kết quả].",
            "III. Cách đo khối lượng - 2. Dùng cân điện tử [Bật nguồn, chọn đơn vị, trừ bì/reset về 0, đặt vật, đọc chỉ số hiển thị]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l7",
          "name": "Bài 7: Đo thời gian",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "22 - 23",
          "subItems": [
            "I. Đơn vị thời gian - Đơn vị cơ bản trong hệ SI là giây [s]; phút [min], giờ [h], ngày, tháng, năm.",
            "II. Dụng cụ đo thời gian - Đồng hồ đeo tay, đồng hồ treo tường, đồng hồ quả lắc, đồng hồ cát, đồng hồ bấm giây [cơ học và điện tử].",
            "Cách sử dụng đồng hồ bấm giây & ước lượng thời gian - Thao tác Reset/Start/Stop trên đồng hồ bấm giây; ước lượng khoảng thời gian trong thực tế."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c1_l8",
          "name": "Bài 8: Đo nhiệt độ",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "24 - 27",
          "subItems": [
            "I. Đo nhiệt độ [Thang nhiệt độ Xen-xi-út] - Nhiệt độ là số đo độ nóng, lạnh của vật; thang Xen-xi-út [°C], thang Fa-ren-hai [°F].",
            "II. Dụng cụ đo nhiệt độ - 1. Sự nở vì nhiệt của chất lỏng [Chất lỏng nở ra khi nóng lên, co lại khi lạnh đi làm cơ sở chế tạo nhiệt kế].",
            "II. Dụng cụ đo nhiệt độ - 2. Các loại nhiệt kế [Nhiệt kế thuỷ ngân, nhiệt kế rượu, nhiệt kế kim loại, nhiệt kế điện tử, hồng ngoại].",
            "III. Sử dụng nhiệt kế y tế - 1. Nhiệt kế y tế thuỷ ngân [Cấu tạo chỗ thắt ở ống quản, thao tác vẩy trước khi đo, đọc kết quả, an toàn khi vỡ].",
            "III. Sử dụng nhiệt kế y tế - 2. Nhiệt kế y tế điện tử [Thao tác bấm nguồn, đo, đọc kết quả hiển thị]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c2",
      "name": "Chương II: CHẤT QUANH TA",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "lessons": [
        {
          "id": "6_c2_l9",
          "name": "Bài 9: Sự đa dạng của chất",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "28 - 29",
          "subItems": [
            "I. Chất quanh ta - Vật thể tự nhiên, vật thể nhân tạo; vật không sống, vật sống; một vật thể có thể tạo từ nhiều chất, một chất có thể tạo nên nhiều vật thể.",
            "II. Một số tính chất của chất - Tính chất vật lí [thể, màu sắc, mùi vị, nhiệt độ nóng chảy, nhiệt độ sôi, tính tan, tính dẫn điện, dẫn nhiệt...].",
            "II. Một số tính chất của chất - Tính chất hoá học [khả năng biến đổi thành chất khác: tính cháy, bị phân huỷ...]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c2_l10",
          "name": "Bài 10: Các thể của chất và sự chuyển thể",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "30 - 35",
          "subItems": [
            "I. Các thể của chất: thể rắn, thể lỏng và thể khí - Đặc điểm về hình dạng, thể tích, khoảng cách giữa các hạt, khả năng nén và lan truyền của chất ở thể rắn, lỏng, khí.",
            "II. Sự chuyển thể của chất - 1. Sự nóng chảy và sự đông đặc [Nhiệt độ nóng chảy/đông đặc, sự thu nhiệt/toả nhiệt].",
            "II. Sự chuyển thể của chất - 2. Sự hoá hơi và sự ngưng tụ [Sự bay hơi xảy ra ở bề mặt chất lỏng; sự sôi xảy ra ở cả bề mặt và trong lòng khối chất lỏng tại nhiệt độ sôi; vòng tuần hoàn của nước]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c2_l11",
          "name": "Bài 11: Oxygen. Không khí",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "36 - 41",
          "subItems": [
            "I. Tính chất vật lí và tầm quan trọng của oxygen - 1. Tính chất vật lí của oxygen [Khí không màu, không mùi, không vị, ít tan trong nước, nặng hơn không khí].",
            "I. Tính chất vật lí và tầm quan trọng của oxygen - 2. Tầm quan trọng của oxygen [Duy trì sự sống, duy trì sự cháy, ứng dụng y tế và sản xuất].",
            "II. Thành phần của không khí - Thành phần % thể tích: 78% nitrogen, 21% oxygen, 1% carbon dioxide, hơi nước và các khí khác; thí nghiệm xác định % oxygen.",
            "III. Vai trò của không khí - Cung cấp khí thở, bảo vệ Trái Đất, điều hòa khí hậu, phục vụ đời sống.",
            "IV. Sự ô nhiễm không khí - 1. Nguyên nhân và hậu quả của ô nhiễm không khí [Khói bụi, khí thải độc hại CO, SO2, NOx; mưa acid, hiệu ứng nhà kính].",
            "IV. Sự ô nhiễm không khí - 2. Bảo vệ môi trường không khí [Các biện pháp giảm thiểu ô nhiễm, trồng cây, dùng năng lượng sạch]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c3",
      "name": "Chương III: MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
      "lessons": [
        {
          "id": "6_c3_l12",
          "name": "Bài 12: Một số vật liệu",
          "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
          "pages": "42 - 45",
          "subItems": [
            "I. Vật liệu - Khái niệm vật liệu [chất hoặc hỗn hợp các chất dùng làm nguyên liệu đầu vào để sản xuất ra các đồ dùng, công trình].",
            "II. Tính chất và ứng dụng của vật liệu - Kim loại, thuỷ tinh, nhựa, gốm sứ, cao su, gỗ; tính dẫn điện, dẫn nhiệt, tính đàn hồi, độ cứng, tính bền.",
            "III. Thu gom rác thải và tái sử dụng đồ dùng trong gia đình - Mô hình 3R: Reduce [Giảm thiểu], Reuse [Tái sử dụng], Recycle [Tái chế]; phân loại rác thải tại nguồn."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c3_l13",
          "name": "Bài 13: Một số nguyên liệu",
          "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
          "pages": "46 - 49",
          "subItems": [
            "I. Các loại nguyên liệu - Khái niệm nguyên liệu tự nhiên và nhân tạo [đất, đá, quặng, cát, dầu mỏ...].",
            "II. Đá vôi - Thành phần chính CaCO3; tính chất [tác dụng với acid sủi bọt, nung tạo vôi sống]; ứng dụng xây dựng, sản xuất xi măng, vôi; tác động khai thác tới môi trường.",
            "III. Quặng - Khái niệm quặng [đất đá chứa khoáng vật có hàm lượng kim loại/phi kim có giá trị]; quặng sắt, quặng bauxite, quặng đồng; khai thác bền vững."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c3_l14",
          "name": "Bài 14: Một số nhiên liệu",
          "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
          "pages": "50 - 51",
          "subItems": [
            "I. Các loại nhiên liệu - Khái niệm nhiên liệu [chất cháy được và toả nhiều nhiệt khi cháy]; phân loại: thể rắn [than đá, củi], lỏng [xăng, dầu], khí [gas, khí thiên nhiên].",
            "II. Nguồn nhiên liệu, tính chất và cách sử dụng nhiên liệu - Nhiên liệu hoá thạch [than, dầu mỏ]; cách sử dụng an toàn, tiết kiệm, hiệu quả [cung cấp đủ oxygen, tăng diện tích tiếp xúc].",
            "III. Sơ lược về an ninh năng lượng - Khái niệm an ninh năng lượng; nguy cơ cạn kiệt nhiên liệu hoá thạch; xu hướng chuyển dịch sang năng lượng tái tạo."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c3_l15",
          "name": "Bài 15: Một số lương thực, thực phẩm",
          "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
          "pages": "52 - 55",
          "subItems": [
            "I. Vai trò của lương thực, thực phẩm - Cung cấp năng lượng và các chất dinh dưỡng thiết yếu cho sự sống, sinh trưởng và phát triển của cơ thể.",
            "II. Các nhóm chất dinh dưỡng trong lương thực, thực phẩm - 1. Carbohydrate: nguồn năng lượng chính [gạo, ngô, khoai, sắn...].",
            "II. Các nhóm chất dinh dưỡng trong lương thực, thực phẩm - 2. Các chất dinh dưỡng khác: a] Protein [chất đạm]; b] Lipid [chất béo]; c] Chất khoáng và vitamin.",
            "III. Sức khoẻ và chế độ dinh dưỡng - Chế độ dinh dưỡng cân đối, hợp lí; bảo quản lương thực thực phẩm chống ôi thiu, nấm mốc; vệ sinh an toàn thực phẩm."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c4",
      "name": "Chương IV: HỖN HỢP. TÁCH CHẤT RA KHỎI HỖN HỢP",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "lessons": [
        {
          "id": "6_c4_l16",
          "name": "Bài 16: Hỗn hợp các chất",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "56 - 59",
          "subItems": [
            "I. Chất tinh khiết và hỗn hợp - Chất tinh khiết chỉ gồm một chất, có tính chất xác định; hỗn hợp gồm từ hai chất trở lên trộn lẫn, có tính chất thay đổi.",
            "II. Dung dịch - Dung dịch là hỗn hợp đồng nhất giữa dung môi và chất tan.",
            "III. Huyền phù và nhũ tương - Huyền phù [chất rắn lơ lửng trong chất lỏng]; Nhũ tương [chất lỏng lơ lửng trong chất lỏng khác không tan vào nhau].",
            "IV. Sự hoà tan các chất - 1. Khả năng tan của các chất [Chất tan nhiều, tan ít, không tan trong nước; chất rắn, lỏng, khí].",
            "IV. Sự hoà tan các chất - 2. Ảnh hưởng của nhiệt độ tới sự hoà tan [Nhiệt độ, khuấy, nghiền nhỏ hạt làm tăng tốc độ hoà tan chất rắn]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c4_l17",
          "name": "Bài 17: Tách chất khỏi hỗn hợp",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "60 - 63",
          "subItems": [
            "I. Nguyên tắc tách chất - Dựa vào sự khác nhau về tính chất vật lí giữa các chất trong hỗn hợp [kích thước hạt, độ tan, nhiệt độ sôi, khối lượng riêng...].",
            "II. Một số cách tách chất - 1. Lắng, gạn và lọc [Tách chất rắn không tan ra khỏi chất lỏng].",
            "II. Một số cách tách chất - 2. Cô cạn [Tách chất rắn tan ra khỏi dung dịch].",
            "II. Một số cách tách chất - 3. Chiết [Tách hai chất lỏng không hoà tan vào nhau bằng phễu chiết]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c5",
      "name": "Chương V: TẾ BÀO",
      "domain": "Vật sống [Sinh học tế bào]",
      "lessons": [
        {
          "id": "6_c5_l18",
          "name": "Bài 18: Tế bào – Đơn vị cơ bản của sự sống",
          "domain": "Vật sống [Sinh học tế bào]",
          "pages": "64 - 66",
          "subItems": [
            "I. Tế bào là gì? - Tế bào là đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sống; thực hiện đầy đủ các quá trình sống cơ bản.",
            "II. Hình dạng và kích thước tế bào - 1. Hình dạng tế bào [Hình cầu, hình đĩa, hình sợi, hình sao, hình nhiều cạnh...].",
            "II. Hình dạng và kích thước tế bào - 2. Kích thước tế bào [Phần lớn có kích thước hiển vi từ 1 - 100 µm, cần kính hiển vi; số ít thấy bằng mắt thường như tép cam, trứng cá]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c5_l19",
          "name": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào",
          "domain": "Vật sống [Sinh học tế bào]",
          "pages": "67 - 69",
          "subItems": [
            "I. Cấu tạo của tế bào - 3 thành phần chính: Màng tế bào [bảo vệ, kiểm soát trao đổi chất], Tế bào chất [nơi diễn ra các hoạt động sống], Nhân hoặc Vùng nhân [chứa vật chất di truyền, điều khiển mọi hoạt động].",
            "II. Tế bào nhân sơ và tế bào nhân thực - Tế bào nhân sơ [chưa có nhân hoàn chỉnh, chỉ có vùng nhân, không có màng nhân - vi khuẩn]; Tế bào nhân thực [có nhân hoàn chỉnh với màng nhân bao bọc].",
            "III. Tế bào động vật và tế bào thực vật - Tế bào thực vật có thành tế bào [cellulose], lục lạp [quang hợp], không bào trung tâm lớn; tế bào động vật không có thành tế bào và lục lạp."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c5_l20",
          "name": "Bài 20: Sự lớn lên và sinh sản của tế bào",
          "domain": "Vật sống [Sinh học tế bào]",
          "pages": "70 - 72",
          "subItems": [
            "I. Sự lớn lên của tế bào - Tế bào non trao đổi chất để tăng dần kích thước và khối lượng thành tế bào trưởng thành.",
            "II. Sự sinh sản [phân chia] của tế bào - Tế bào trưởng thành phân chia thành 2 tế bào con [1 phân chia thành 2, 2 thành 4, sau n lần tạo 2^n tế bào con].",
            "III. Ý nghĩa sự lớn lên và sinh sản của tế bào - Giúp cơ thể sinh vật lớn lên, thay thế các tế bào già, tổn thương hoặc chết; chữa lành vết thương."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c5_l21",
          "name": "Bài 21: Thực hành: Quan sát và phân biệt một số loại tế bào",
          "domain": "Vật sống [Sinh học tế bào]",
          "pages": "73 - 74",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính hiển vi, lam kính, lamen, kim mũi mác, đĩa petri, giấy thấm...]; 2. Mẫu vật [Củ hành tây, trứng cá].",
            "II. Cách tiến hành - 1. Làm tiêu bản, quan sát và vẽ tế bào biểu bì hành tây [Tách lớp vảy mỏng, nhỏ giọt nước, đậy lamen, quan sát ở vật kính 10x, 40x].",
            "II. Cách tiến hành - 2. Quan sát và vẽ tế bào trứng cá [Dùng kính lúp hoặc mắt thường quan sát kích thước, hình dạng].",
            "III. Thu hoạch - Vẽ hình ảnh tế bào quan sát được, chú thích thành phần quan sát thấy [màng, tế bào chất, nhân, thành tế bào] và trả lời câu hỏi."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c6",
      "name": "Chương VI: TỪ TẾ BÀO ĐẾN CƠ THỂ",
      "domain": "Vật sống [Sinh học cơ thể]",
      "lessons": [
        {
          "id": "6_c6_l22",
          "name": "Bài 22: Cơ thể sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "75 - 78",
          "subItems": [
            "I. Cơ thể là gì? - Cơ thể là một thể thống nhất thực hiện đầy đủ các quá trình sống: cảm ứng & vận động, dinh dưỡng, hô hấp, sinh trưởng, sinh sản, bài tiết.",
            "II. Cơ thể đơn bào và cơ thể đa bào - Cơ thể đơn bào: cấu tạo từ 1 tế bào duy nhất thực hiện mọi chức năng sống [trùng biến hình, vi khuẩn, trùng roi, nấm men...].",
            "II. Cơ thể đơn bào và cơ thể đa bào - Cơ thể đa bào: cấu tạo từ nhiều tế bào phân hoá thành các mô, cơ quan phối hợp nhau [thực vật, động vật, con người...]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c6_l23",
          "name": "Bài 23: Tổ chức cơ thể đa bào",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "79 - 82",
          "subItems": [
            "I. Các cấp tổ chức của cơ thể đa bào - Sơ đồ trật tự từ thấp đến cao: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.",
            "II. Từ tế bào tạo thành mô - Khái niệm mô [tập hợp các tế bào có cùng hình dạng, cấu tạo và chức năng]; mô ở thực vật [biểu bì, mô giậu, mạch rây, mạch gỗ]; mô ở động vật [biểu bì, cơ, liên kết, thần kinh].",
            "III. Từ mô tạo thành cơ quan - Khái niệm cơ quan [tập hợp các mô cùng thực hiện một chức năng]; cơ quan thực vật [rễ, thân, lá, hoa, quả, hạt]; cơ quan động vật [tim, phổi, dạ dày, não, thận...].",
            "IV. Từ cơ quan tạo thành hệ cơ quan - Khái niệm hệ cơ quan [tập hợp các cơ quan phối hợp hoạt động]; hệ hô hấp, tiêu hoá, tuần hoàn, thần kinh... ở động vật; hệ chồi và hệ rễ ở thực vật."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c6_l24",
          "name": "Bài 24: Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "83 - 85",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính hiển vi, lam kính, lamen, ống nhỏ giọt...]; 2. Mẫu vật [Nước ao hồ/môi trường nuôi cấy sinh vật; mô hình/tranh ảnh cơ thể người và cây xanh].",
            "II. Cách tiến hành - 1. Làm tiêu bản và quan sát cơ thể đơn bào trong nước ao [hồ] [Trùng giày, trùng roi, trùng biến hình...].",
            "II. Cách tiến hành - 2. Quan sát mô hình hoặc tranh ảnh một số hệ cơ quan của cơ thể người [Hệ tiêu hoá, tuần hoàn, thần kinh].",
            "II. Cách tiến hành - 3. Quan sát các cơ quan của thực vật [Rễ, thân, lá, hoa].",
            "III. Thu hoạch - Ghi chép, vẽ hình dạng sinh vật đơn bào quan sát được; hoàn thiện bảng mô tả các hệ cơ quan của người và các cơ quan của cây."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c7",
      "name": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "lessons": [
        {
          "id": "6_c7_l25",
          "name": "Bài 25: Hệ thống phân loại sinh vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "86 - 89",
          "subItems": [
            "I. Sự phân loại thế giới sống - Mục đích, ý nghĩa của việc phân loại sinh vật học [sắp xếp theo trật tự dựa trên đặc điểm chung].",
            "II. Hệ thống phân loại sinh vật - Các đơn vị phân loại từ lớn đến nhỏ: Giới [Kingdom] → Ngành [Phylum] → Lớp [Class] → Bộ [Order] → Họ [Family] → Chi/Giống [Genus] → Loài [Species].",
            "II. Hệ thống phân loại sinh vật - Tên khoa học của loài gồm tên Chi/Giống [viết hoa] + tên loài [viết thường], in nghiêng [theo danh pháp nhị vị Linnaeus].",
            "III. Giới và hệ thống phân loại năm giới - Hệ thống 5 giới [Whittaker, 1969]: Giới Khởi sinh [Monera], Giới Nguyên sinh [Protista], Giới Nấm [Fungi], Giới Thực vật [Plantae], Giới Động vật [Animalia]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l26",
          "name": "Bài 26: Khoá lưỡng phân",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "90 - 91",
          "subItems": [
            "I. Khoá lưỡng phân là gì? - Nguyên tắc: phân chia một tập hợp sinh vật ban đầu thành 2 nhóm dựa trên một cặp đặc điểm đối lập ở mỗi bước.",
            "II. Xây dựng khoá lưỡng phân - Quy trình xây dựng khoá lưỡng phân để phân loại các đối tượng sinh vật qua các bước cụ thể; vẽ sơ đồ phân nhánh khoá lưỡng phân."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l27",
          "name": "Bài 27: Vi khuẩn",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "92 - 95",
          "subItems": [
            "I. Đa dạng vi khuẩn - Kích thước hiển vi [1 - vài µm]; hình dạng phong phú [hình que/trực khuẩn, hình cầu/cầu khuẩn, hình xoắn/xoắn khuẩn, phẩy khuẩn].",
            "II. Cấu tạo của vi khuẩn - Cơ thể đơn bào, nhân sơ; gồm màng tế bào, tế bào chất, vùng nhân [chưa có màng nhân], thành tế bào; một số có vỏ nhầy, lông, roi.",
            "III. Vai trò của vi khuẩn - Trong tự nhiên [phân huỷ xác hữu cơ, chu trình nitrogen]; trong đời sống con người [lên men thực phẩm như sữa chua, dưa muối; làm dược phẩm].",
            "IV. Một số bệnh do vi khuẩn - Bệnh tả, bệnh lao phổi, nhiễm khuẩn da, uốn ván... Con đường lây truyền và biện pháp phòng tránh [ăn chín uống sôi, giữ vệ sinh]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l28",
          "name": "Bài 28: Thực hành: Làm sữa chua và quan sát vi khuẩn",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "96 - 97",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính hiển vi, lam kính, lamen, nhiệt kế, que cấy/ống hút, ấm đun...]; 2. Nguyên liệu, mẫu vật [Sữa đặc có đường, sữa chua làm men cái, nước ấm ~50°C].",
            "II. Cách tiến hành - 1. Quan sát tế bào vi khuẩn trong sữa chua [Pha loãng sữa chua, làm tiêu bản, quan sát ở vật kính 10x, 40x thấy vi khuẩn lactic hình que/hình hạt].",
            "II. Cách tiến hành - 2. Làm sữa chua [Pha sữa đặc với nước ấm ~50°C, cho sữa chua men cái, trộn đều, rót vào lọ, ủ ấm 10-12 giờ rồi để tủ lạnh].",
            "III. Thu hoạch - Vẽ hình ảnh vi khuẩn lactic quan sát được; giải thích hiện tượng đông tụ sữa và vị chua do vi khuẩn lactic lên men chuyển hoá đường thành acid lactic."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l29",
          "name": "Bài 29: Virus",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "98 - 101",
          "subItems": [
            "I. Đa dạng virus - Kích thước siêu hiển vi [20 - 300 nm]; chưa có cấu tạo tế bào; 3 dạng hình học chính: dạng xoắn [Ebola, cúm], dạng khối [HIV, bại liệt], dạng hỗn hợp [thể thực khuẩn T4].",
            "II. Cấu tạo của virus - Chưa có cấu tạo tế bào, là dạng sống kí sinh nội bào bắt buộc; gồm vỏ protein [capsid] và lõi vật chất di truyền [DNA hoặc RNA]; một số có vỏ ngoài và gai glycoprotein.",
            "III. Vai trò và ứng dụng của virus - Sản xuất chế phẩm sinh học, thuốc trừ sâu sinh học, nghiên cứu di truyền và y học.",
            "IV. Một số bệnh do virus và cách phòng bệnh - 1. Một số bệnh do virus [COVID-19, sởi, thuỷ đậu, sốt xuất huyết Dengue, cúm, dại, lở mồm long móng ở gia súc...].",
            "IV. Một số bệnh do virus và cách phòng bệnh - 2. Phòng bệnh do virus [Tiêm vaccine phòng bệnh, giữ vệ sinh, chế độ dinh dưỡng nâng cao miễn dịch; phân biệt kháng sinh không diệt được virus]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l30",
          "name": "Bài 30: Nguyên sinh vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "102 - 105",
          "subItems": [
            "I. Đa dạng nguyên sinh vật - Nhóm sinh vật nhân thực, phần lớn đơn bào, kích thước hiển vi; đại diện: trùng roi xanh, trùng giày, trùng biến hình, tảo lục đơn bào, tảo silic...",
            "II. Vai trò của nguyên sinh vật - 1. Vai trò trong tự nhiên [Khởi đầu chuỗi thức ăn dưới nước, tảo quang hợp cung cấp O2 cho thuỷ sinh].",
            "II. Vai trò của nguyên sinh vật - 2. Vai trò đối với con người [Thực phẩm bổ sung - tảo xoắn Spirulina, xử lí môi trường nước, chế biến công nghiệp].",
            "III. Một số bệnh do nguyên sinh vật - 1. Bệnh sốt rét [Do trùng sốt rét Plasmodium lây qua muỗi Anophen truyền vào máu phá huỷ hồng cầu].",
            "III. Một số bệnh do nguyên sinh vật - 2. Bệnh kiết lị [Do trùng kiết lị Entamoeba lây qua đường ăn uống gây tổn thương ruột]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l31",
          "name": "Bài 31: Thực hành: Quan sát nguyên sinh vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "106 - 107",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính hiển vi, lam kính, lamen, ống nhỏ giọt, giấy thấm, cốc thuỷ tinh]; 2. Mẫu vật [Nước ao hồ, rãnh nước đục hoặc dịch nuôi cấy cỏ rơm].",
            "II. Cách tiến hành - Lấy 1 giọt mẫu nước ao/dịch nuôi, đặt lên lam kính, đậy lamen, thấm nước thừa; quan sát ở vật kính 10x rồi chuyển 40x để tìm trùng roi, trùng giày.",
            "III. Thu hoạch - Vẽ hình dáng trùng roi, trùng giày; mô tả cách di chuyển [bằng roi, bằng lông bơi, chân giả] và cấu tạo quan sát được."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l32",
          "name": "Bài 32: Nấm",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "108 - 111",
          "subItems": [
            "I. Đa dạng nấm - Nấm là sinh vật nhân thực, đơn bào [nấm men] hoặc đa bào [nấm mốc, nấm lớn]; cấu tạo sợi nấm; nấm đảm [nấm rơm, sò], nấm túi [nấm mốc, nấm men].",
            "II. Vai trò của nấm - Phân giải chất hữu cơ trong đất; làm thực phẩm [nấm rơm, mộc nhĩ, nấm hương]; dược liệu [nấm linh chi, đông trùng hạ thảo]; công nghiệp lên men [bia, rượu, tương, làm nở bánh mì].",
            "III. Một số bệnh do nấm - Gây bệnh ở người [hắc lào, lang ben, nấm lưỡi, nấm da]; gây mốc thối hỏng thực phẩm; ngộ độc nấm độc ngoài tự nhiên [cách nhận biết nấm độc có vòng cuống, bao gốc, sặc sỡ]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l33",
          "name": "Bài 33: Thực hành: Quan sát các loại nấm",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "112 - 114",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính hiển vi, kính lúp, panh, dao mổ, lam kính, lamen, găng tay, khẩu trang]; 2. Mẫu vật [Bánh mì/cơm nguội bị mốc; nấm rơm, nấm sò, mộc nhĩ tươi].",
            "II. Cách tiến hành - 1. Quan sát các loại nấm mốc [Quan sát đám mốc bằng mắt và kính lúp; làm tiêu bản sợi nấm mốc quan sát dưới kính hiển vi].",
            "II. Cách tiến hành - 2. Quan sát một số loại nấm thường gặp [Bổ dọc thân nấm lớn, đối chiếu các bộ phận: mũ nấm, phiến nấm, cuống nấm, vòng cuống, bao gốc, sợi nấm].",
            "III. Thu hoạch - Hoàn thành bảng so sánh nấm mốc và nấm lớn; vẽ sơ đồ cấu tạo thể quả của nấm đảm [nấm rơm/nấm sò] và chú thích đầy đủ các bộ phận."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l34",
          "name": "Bài 34: Thực vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "115 - 122",
          "subItems": [
            "I. Đa dạng thực vật - Số lượng loài phong phú, đa dạng về kích thước, môi trường sống [dưới nước, trên cạn, đầm lầy, sa mạc...].",
            "II. Các nhóm thực vật - 1. Thực vật không có mạch: Ngành Rêu [rễ giả, thân và lá chưa có mạch dẫn, sinh sản bằng bào tử, sống nơi ẩm ướt].",
            "II. Các nhóm thực vật - 2. Thực vật có mạch: a] Ngành Dương xỉ [có rễ thật, thân, lá có mạch dẫn, sinh sản bằng bào tử]; b] Ngành Hạt trần [đã có hạt nhưng hạt nằm lộ trên lá noãn hở/nón, chưa có hoa quả - thông, vạn tuế]; c] Ngành Hạt kín [cơ quan sinh dưỡng phát triển đa dạng có mạch dẫn hoàn thiện, cơ quan sinh sản là hoa, quả, hạt nằm trong quả].",
            "III. Vai trò của thực vật - 1. Vai trò đối với môi trường [Quang hợp giải phóng O2, hấp thụ CO2, điều hoà khí hậu, giữ đất, giữ nước, chống xói mòn sạt lở lũ quét].",
            "III. Vai trò của thực vật - 2. Vai trò đối với động vật và con người [Cung cấp thức ăn, nơi ở; cung cấp lương thực, thực phẩm, gỗ, dược liệu, làm cảnh; một số cây có độc tính cần lưu ý]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l35",
          "name": "Bài 35: Thực hành: Quan sát và phân biệt một số nhóm thực vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "123 - 124",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Kính lúp, panh, dao mổ, khay men]; 2. Mẫu vật [Cây rêu tường, cây dương xỉ có túi bào tử, cành thông mang nón, cây hạt kín có hoa quả].",
            "II. Cách tiến hành - 1. Quan sát đại diện thực vật không có mạch [Cây rêu: rễ giả, thân, lá, túi bào tử].",
            "II. Cách tiến hành - 2. Quan sát đại diện ngành Dương xỉ [Mặt dưới lá có các ổ túi bào tử, lá non cuộn tròn đầu].",
            "II. Cách tiến hành - 3. Quan sát đại diện ngành Hạt trần [Nón đực, nón cái, vảy nón mang hạt thông].",
            "II. Cách tiến hành - 4. Quan sát đại diện ngành Hạt kín [Rễ cọc/chùm, gân lá song song/hình mạng, cấu tạo hoa, quả, hạt].",
            "III. Thu hoạch - Phân loại các mẫu vật vào đúng ngành thực vật; lập bảng so sánh đặc điểm hình thái cơ quan sinh dưỡng và cơ quan sinh sản giữa 4 ngành."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l36",
          "name": "Bài 36: Động vật",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "125 - 132",
          "subItems": [
            "I. Đa dạng động vật - Đa dạng về loài, môi trường sống, kích thước, tập tính dinh dưỡng và vận động.",
            "II. Các nhóm động vật - 1. Động vật không xương sống [Không có cột sống bên trong]: Ngành Ruột khoang [thuỷ tức, sứa, san hô]; Ngành Giun dẹp [sán lá gan, sán dây]; Ngành Giun tròn [giun đũa, giun kim]; Ngành Giun đốt [giun đất, đỉa]; Ngành Thân mềm [trai, ốc, mực, bạch tuộc]; Ngành Chân khớp [tôm, cua, nhện, côn trùng].",
            "II. Các nhóm động vật - 2. Động vật có xương sống [Có bộ xương trong với cột sống]: Lớp Cá [cá chép, cá nhám]; Lớp Lưỡng cư [ếch đồng, cóc]; Lớp Bò sát [thằn lằn, cá sấu, rắn]; Lớp Chim [bồ câu, gà]; Lớp Động vật có vú/Thú [thỏ, mèo, voi, người].",
            "III. Vai trò của động vật - 1. Vai trò đối với tự nhiên [Mắt xích thức ăn duy trì cân bằng sinh thái, thụ phấn cho cây, phát tán hạt].",
            "III. Vai trò của động vật - 2. Vai trò đối với con người [Cung cấp thực phẩm, dược liệu, nguyên liệu sản xuất, sức kéo, giải trí, bảo vệ an ninh].",
            "IV. Tác hại của động vật - Động vật truyền bệnh [muỗi, chuột], kí sinh gây bệnh [giun sán], phá hại mùa màng [sâu bọ, ốc bươu vàng]; biện pháp phòng tránh bệnh giun sán."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l37",
          "name": "Bài 37: Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "133 - 134",
          "subItems": [
            "I. Chuẩn bị - 1. Địa điểm [Vườn trường, công viên, khu sinh thái an toàn]; 2. Dụng cụ [Ống nhòm, kính lúp, máy ảnh/điện thoại, vở ghi chép]; 3. Yêu cầu [Kỉ luật, an toàn, bảo vệ sinh vật].",
            "II. Cách tiến hành - Quan sát động vật ở các tầng tán cây, mặt đất, bờ rào, nguồn nước; ghi nhận đặc điểm hình thái, cơ quan di chuyển, môi trường sống và chụp ảnh mẫu vật.",
            "III. Thu hoạch - Hoàn thành bảng thống kê tên động vật, môi trường sống, đặc điểm nổi bật, phân nhóm phân loại; nhận xét mối liên hệ giữa hình thái và lối sống."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l38",
          "name": "Bài 38: Đa dạng sinh học",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "135 - 138",
          "subItems": [
            "I. Đa dạng sinh học là gì? - Khái niệm đa dạng sinh học [đa dạng về nguồn gene, đa dạng loài và đa dạng hệ sinh thái trên Trái Đất].",
            "II. Vai trò của đa dạng sinh học - 1. Vai trò của đa dạng sinh học trong tự nhiên [Duy trì cân bằng sinh thái, điều hoà khí hậu, bảo vệ đất và nguồn nước].",
            "II. Vai trò của đa dạng sinh học - 2. Vai trò của đa dạng sinh học đối với con người [Cung cấp lương thực, thực phẩm, dược liệu, vật liệu xây dựng, du lịch sinh thái].",
            "III. Nguyên nhân gây suy giảm đa dạng sinh học và hậu quả - 1. Nguyên nhân [Phá rừng, săn bắt buôn bán động vật hoang dã, ô nhiễm môi trường, biến đổi khí hậu].",
            "III. Nguyên nhân gây suy giảm đa dạng sinh học và hậu quả - 2. Hậu quả [Mất cân bằng sinh thái, gia tăng thiên tai lũ lụt hạn hán, tuyệt chủng các loài sinh vật quý hiếm].",
            "IV. Bảo vệ đa dạng sinh học - Trồng và bảo vệ rừng; thành lập vườn quốc gia, khu bảo tồn; nghiêm cấm săn bắt, buôn bán động vật hoang dã; tuyên truyền thực thi Luật Bảo vệ môi trường."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c7_l39",
          "name": "Bài 39: Tìm hiểu sinh vật ngoài thiên nhiên",
          "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
          "pages": "139 - 143",
          "subItems": [
            "I. Chuẩn bị - 1. Địa điểm [Vườn trường, thảo cầm viên, khu bảo tồn thiên nhiên]; 2. Dụng cụ [Vợt bắt bướm, vợt thuỷ sinh, panh kẹp, kính lúp, ống nhòm, lọ mẫu, tài liệu nhận diện]; 3. Yêu cầu [Tuyệt đối tuân thủ hướng dẫn an toàn].",
            "II. Cách tiến hành - 1. Hướng dẫn chung [Quan sát không phá huỷ sinh cảnh, đếm số lượng, chụp ảnh mẫu vật, làm bộ sưu tập ảnh].",
            "II. Cách tiến hành - 2. Tìm hiểu về thực vật và động vật [Cách quan sát cơ quan sinh dưỡng và sinh sản thực vật; cách bắt, thả an toàn mẫu động vật không xương sống].",
            "III. Thu hoạch - Trưng bày mẫu vật và bộ ảnh; hoàn thành Phiếu học tập số 1 [đặc điểm thực vật] và Phiếu học tập số 2 [đặc điểm động vật]; nhận xét về độ đa dạng của khu vực quan sát."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c8",
      "name": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "lessons": [
        {
          "id": "6_c8_l40",
          "name": "Bài 40: Lực là gì?",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "144 - 146",
          "subItems": [
            "I. Lực và sự đẩy, kéo - Khái niệm lực [tác dụng đẩy hoặc kéo của vật này lên vật khác]; khi vật A đẩy hoặc kéo vật B ta nói vật A tác dụng lực lên vật B.",
            "II. Tác dụng của lực - 1. Lực và chuyển động của vật [Lực làm vật bắt đầu chuyển động, chuyển động nhanh dần, chậm dần, dừng lại, đổi hướng chuyển động].",
            "II. Tác dụng của lực - 2. Lực và hình dạng của vật [Lực làm vật bị biến dạng; có thể vừa làm thay đổi chuyển động vừa biến dạng].",
            "III. Lực tiếp xúc và lực không tiếp xúc - Lực tiếp xúc xuất hiện khi có sự chạm/tiếp xúc giữa các vật; Lực không tiếp xúc xuất hiện không cần có sự tiếp xúc trực tiếp [lực từ của nam châm, lực hút Trái Đất]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c8_l41",
          "name": "Bài 41: Biểu diễn lực",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "147 - 150",
          "subItems": [
            "I. Các đặc trưng của lực - 1. Độ lớn của lực [Mức độ mạnh hay yếu của lực tác dụng].",
            "I. Các đặc trưng của lực - 2. Đơn vị lực và dụng cụ đo lực [Đơn vị là niuton, kí hiệu N; dụng cụ đo là lực kế; các bước dùng lực kế].",
            "I. Các đặc trưng của lực - 3. Phương và chiều của lực [Phương thẳng đứng/ngang/xiên; chiều từ trên xuống/dưới lên/trái sang phải...].",
            "II. Biểu diễn lực - Lực là một đại lượng vectơ được biểu diễn bằng một mũi tên: Gốc [điểm đặt lực], Hướng [phương và chiều], Độ dài [tỉ lệ với độ lớn theo tỉ xích quy ước]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c8_l42",
          "name": "Bài 42: Biến dạng của lò xo",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "151 - 153",
          "subItems": [
            "I. Hiện tượng biến dạng của lò xo - Lò xo thay đổi chiều dài [dãn ra hoặc nén lại] khi chịu lực tác dụng; trở lại hình dạng ban đầu khi thôi tác dụng lực [biến dạng đàn hồi].",
            "II. Đặc điểm biến dạng của lò xo - Độ dãn của lò xo treo thẳng đứng: Δl = l - l0; độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo [hoặc độ lớn của lực kéo tác dụng lên lò xo]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c8_l43",
          "name": "Bài 43: Trọng lượng, lực hấp dẫn",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "154 - 156",
          "subItems": [
            "I. Lực hút của Trái Đất - Trái Đất tác dụng lực hút lên mọi vật xung quanh nó; lực này có phương thẳng đứng, chiều hướng về phía tâm Trái Đất [từ trên xuống dưới].",
            "II. Trọng lượng và khối lượng - Trọng lượng là độ lớn lực hút của Trái Đất tác dụng lên vật [kí hiệu P, đơn vị N]; Khối lượng là lượng chất của vật [m, đơn vị kg]; Công thức liên hệ gần đúng trên Trái Đất: P = 10 x m.",
            "III. Lực hấp dẫn - Mọi vật có khối lượng trong vũ trụ đều hút nhau bằng lực hấp dẫn; trọng lực là trường hợp riêng của lực hấp dẫn."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c8_l44",
          "name": "Bài 44: Lực ma sát",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "157 - 159",
          "subItems": [
            "I. Lực ma sát là gì? - Lực cản trở chuyển động xuất hiện tại bề mặt tiếp xúc giữa hai vật.",
            "II. Lực ma sát nghỉ và lực ma sát trượt - 1. Lực ma sát nghỉ [Giữ cho vật đứng yên khi có lực đẩy/kéo tác dụng lên vật].",
            "II. Lực ma sát nghỉ và lực ma sát trượt - 2. Lực ma sát trượt [Xuất hiện khi một vật trượt trên bề mặt của vật khác, cản trở chuyển động trượt].",
            "III. Tác dụng của lực ma sát đối với chuyển động - Ma sát có ích [giúp người đi lại không trượt ngã, xe phanh dừng, cầm nắm đồ vật]; Ma sát có hại [làm mòn chi tiết máy, cản trở chuyển động xe cộ].",
            "IV. Ma sát trong an toàn giao thông - Khía rãnh trên lốp xe tăng ma sát; nguy cơ trượt ngã khi đường trơn ướt; quy định tốc độ an toàn khi trời mưa."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c8_l45",
          "name": "Bài 45: Lực cản của nước",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "160 - 161",
          "subItems": [
            "I. Thí nghiệm về lực cản của nước - Vật chuyển động trong nước luôn chịu lực cản của nước cản trở chuyển động của vật.",
            "II. Lực cản của nước phụ thuộc yếu tố nào? - Lực cản của nước [và không khí] phụ thuộc vào diện tích mặt cản và hình dạng của vật; hình dạng thuôn khí động học [cá, tàu ngầm, máy bay] giúp giảm lực cản."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c9",
      "name": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "lessons": [
        {
          "id": "6_c9_l46",
          "name": "Bài 46: Năng lượng và sự truyền năng lượng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "162 - 164",
          "subItems": [
            "I. Năng lượng - Mọi vật xung quanh đều có năng lượng; khi vật có năng lượng thì có thể tác dụng lực hoặc truyền nhiệt.",
            "II. Năng lượng và tác dụng lực - Năng lượng đặc trưng cho khả năng tác dụng lực; vật có năng lượng càng lớn thì khả năng tác dụng lực càng mạnh.",
            "III. Sự truyền năng lượng - Năng lượng có thể truyền từ vật này sang vật khác qua 2 cách: qua tác dụng lực [gió thổi cánh quạt] hoặc qua truyền nhiệt [bếp truyền nhiệt cho nước]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c9_l47",
          "name": "Bài 47: Một số dạng năng lượng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "165 - 167",
          "subItems": [
            "I. Nhận biết năng lượng - Nhận biết năng lượng thông qua các biểu hiện phát ra ánh sáng, nhiệt độ, âm thanh, chuyển động.",
            "II. Các dạng năng lượng - Động năng [năng lượng chuyển động], Thế năng hấp dẫn [năng lượng lưu trữ do ở độ cao], Hoá năng [năng lượng hoá học lưu trữ trong thức ăn, pin, nhiên liệu], Điện năng, Quang năng [năng lượng ánh sáng], Năng lượng âm, Nhiệt năng."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c9_l48",
          "name": "Bài 48: Sự chuyển hoá năng lượng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "168 - 170",
          "subItems": [
            "I. Chuyển hoá năng lượng - Năng lượng có thể chuyển hoá từ dạng này sang dạng khác [ví dụ: hoá năng → động năng, điện năng → nhiệt năng và quang năng]. Sơ đồ dòng năng lượng.",
            "II. Định luật bảo toàn năng lượng - Phát biểu: Năng lượng không tự sinh ra cũng không tự mất đi mà chỉ chuyển hoá từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c9_l49",
          "name": "Bài 49: Năng lượng hao phí",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "171 - 172",
          "subItems": [
            "I. Năng lượng hữu ích - Phần năng lượng ban đầu chuyển thành dạng năng lượng phục vụ đúng mục đích sử dụng.",
            "II. Năng lượng hao phí - Phần năng lượng chuyển thành dạng năng lượng không mong muốn [thường toả ra dưới dạng nhiệt năng hoặc âm thanh].",
            "II. Năng lượng hao phí - 1. Năng lượng hao phí khi đi xe đạp [ma sát, nhiệt toả ra].",
            "II. Năng lượng hao phí - 2. Năng lượng hao phí khi ô tô chạy [nhiệt động cơ, ma sát, khói thải]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c9_l50",
          "name": "Bài 50: Năng lượng tái tạo",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "173 - 175",
          "subItems": [
            "I. Nguồn năng lượng trong tự nhiên - Nguồn năng lượng không tái tạo [than đá, dầu mỏ, khí tự nhiên, urani - sẽ cạn kiệt]; Nguồn năng lượng tái tạo [liên tục được bổ sung từ các quá trình tự nhiên].",
            "II. Nguồn năng lượng tái tạo - Năng lượng mặt trời, năng lượng gió, năng lượng nước [thuỷ điện], năng lượng sinh khối, năng lượng địa nhiệt; ưu điểm sạch, bảo vệ môi trường."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c9_l51",
          "name": "Bài 51: Tiết kiệm năng lượng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
          "pages": "176 - 178",
          "subItems": [
            "I. Tại sao cần tiết kiệm năng lượng? - Tiết kiệm chi phí, bảo tồn nguồn tài nguyên hữu hạn, giảm ô nhiễm môi trường và giảm phát thải khí nhà kính.",
            "II. Một số biện pháp tiết kiệm năng lượng - Tắt thiết bị khi không dùng, sử dụng thiết bị tiết kiệm điện [đèn LED, biến tần], đi bộ/xe đạp/phương tiện công cộng, tận dụng gió và ánh sáng tự nhiên."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "6_c10",
      "name": "Chương X: TRÁI ĐẤT VÀ BẦU TRỜI",
      "domain": "Trái Đất và bầu trời [Thiên văn học]",
      "lessons": [
        {
          "id": "6_c10_l52",
          "name": "Bài 52: Chuyển động nhìn thấy của Mặt Trời. Thiên thể",
          "domain": "Trái Đất và bầu trời [Thiên văn học]",
          "pages": "179 - 182",
          "subItems": [
            "I. Chuyển động nhìn thấy của Mặt Trời - 1. Mặt Trời mọc và lặn [Ban ngày thấy Mặt Trời mọc ở hướng đông, lặn ở hướng tây].",
            "I. Chuyển động nhìn thấy của Mặt Trời - 2. Giải thích chuyển động của Mặt Trời nhìn từ Trái Đất [Chuyển động nhìn thấy là do Trái Đất tự quay quanh trục của nó theo chiều từ tây sang đông].",
            "II. Phân biệt các thiên thể - Sao [thiên thể tự phát sáng, ví dụ: Mặt Trời]; Hành tinh [thiên thể không tự phát sáng quay quanh sao]; Vệ tinh [quay quanh hành tinh, ví dụ: Mặt Trăng]; Sao chổi, chòm sao."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c10_l53",
          "name": "Bài 53: Mặt Trăng",
          "domain": "Trái Đất và bầu trời [Thiên văn học]",
          "pages": "183 - 186",
          "subItems": [
            "I. Mặt Trăng và các hình dạng nhìn thấy của Mặt Trăng - 1. Mặt Trăng [Là vệ tinh tự nhiên của Trái Đất, không tự phát sáng mà phản chiếu ánh sáng Mặt Trời].",
            "I. Mặt Trăng và các hình dạng nhìn thấy của Mặt Trăng - 2. Hình dạng nhìn thấy của Mặt Trăng [Không Trăng/Trăng non, Trăng khuyết đầu tháng, Bán nguyệt đầu tháng, Trăng tròn, Bán nguyệt cuối tháng, Trăng khuyết cuối tháng].",
            "II. Giải thích sự khác nhau về hình dạng nhìn thấy của Mặt Trăng [các pha của Mặt Trăng] - Do vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng thay đổi khi Mặt Trăng quay quanh Trái Đất, người quan sát trên Trái Đất thấy các phần diện tích được chiếu sáng khác nhau."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c10_l54",
          "name": "Bài 54: Hệ Mặt Trời",
          "domain": "Trái Đất và bầu trời [Thiên văn học]",
          "pages": "187 - 189",
          "subItems": [
            "I. Hệ Mặt Trời - Gồm Mặt Trời ở trung tâm và 8 hành tinh quay quanh cùng các tiểu hành tinh, sao chổi, thiên thạch; Lực hấp dẫn giữ các hành tinh chuyển động quanh Mặt Trời.",
            "II. Các hành tinh của Hệ Mặt Trời - 1. Các hành tinh vòng trong [Hành tinh đất đá, gần Mặt Trời]: Thuỷ tinh [Mercury], Kim tinh [Venus], Trái Đất [Earth], Hoả tinh [Mars].",
            "II. Các hành tinh của Hệ Mặt Trời - 2. Các hành tinh vòng ngoài [Hành tinh khí khổng lồ, xa Mặt Trời]: Mộc tinh [Jupiter], Thổ tinh [Saturn], Thiên Vương tinh [Uranus], Hải Vương tinh [Neptune]."
          ],
          "part2Hosts": []
        },
        {
          "id": "6_c10_l55",
          "name": "Bài 55: Ngân Hà",
          "domain": "Trái Đất và bầu trời [Thiên văn học]",
          "pages": "190 - 192",
          "subItems": [
            "I. Ngân Hà là gì? - Dải Ngân Hà trên bầu trời đêm; Bản chất Ngân Hà là một thiên hà [Milky Way] hình xoắn ốc chứa hàng trăm tỉ ngôi sao, khí và bụi vũ trụ.",
            "II. Ngân Hà và Hệ Mặt Trời - Hệ Mặt Trời chỉ là một bộ phận rất nhỏ nằm ở một nhánh xoắn ốc của Ngân Hà [cách tâm Ngân Hà khoảng 26.000 năm ánh sáng]; Ngân Hà tự quay quanh tâm."
          ],
          "part2Hosts": []
        }
      ]
    }
  ],
  "7": [
    {
      "id": "7_c1",
      "name": "Chương MỞ ĐẦU: PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP MÔN KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "lessons": [
        {
          "id": "7_c1_l1",
          "name": "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "6 – 13",
          "subItems": [
            "I. Phương pháp tìm hiểu tự nhiên - 5 bước nghiên cứu khoa học: 1. Đề xuất câu hỏi; 2. Đưa ra dự đoán khoa học; 3. Lập kế hoạch kiểm tra dự đoán; 4. Thực hiện kế hoạch; 5. Viết báo cáo và thảo luận.",
            "II. Một số kĩ năng tiến trình học tập môn Khoa học tự nhiên - 1. Kĩ năng quan sát, phân loại [thu thập dữ liệu và phân nhóm].",
            "II. Một số kĩ năng tiến trình học tập môn Khoa học tự nhiên - 2. Kĩ năng liên kết [kết nối tri thức các phân môn].",
            "II. Một số kĩ năng tiến trình học tập môn Khoa học tự nhiên - 3. Kĩ năng đo [chọn dụng cụ, thực hiện phép đo, xử lí số liệu].",
            "II. Một số kĩ năng tiến trình học tập môn Khoa học tự nhiên - 4. Kĩ năng dự báo [suy luận kết quả dựa trên bằng chứng].",
            "III. Sử dụng các dụng cụ đo trong nội dung môn Khoa học tự nhiên 7 - 1. Cổng quang điện [cảm biến thu nhận tín hiệu chắn sáng].",
            "III. Sử dụng các dụng cụ đo trong nội dung môn Khoa học tự nhiên 7 - 2. Đồng hồ đo thời gian hiện số [các nút chức năng, thang đo, chế độ làm việc A ↔ B].",
            "IV. Báo cáo thực hành - 1. Viết báo cáo thực hành [Mục đích, Chuẩn bị, Các bước tiến hành, Kết quả, Thảo luận].",
            "IV. Báo cáo thực hành - 2. Viết và trình bày báo cáo, thuyết trình."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c2",
      "name": "Chương I: NGUYÊN TỬ – SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "lessons": [
        {
          "id": "7_c2_l2",
          "name": "Bài 2: Nguyên tử",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "14 – 18",
          "subItems": [
            "I. Quan niệm ban đầu về nguyên tử - Quan niệm của Đê-mô-crit [Democritus], Đan-tơn [Dalton] về hạt không thể phân chia nhỏ hơn.",
            "II. Mô hình nguyên tử của Rơ-dơ-pho – Bo - Mô hình hành tinh nguyên tử: hạt nhân ở tâm, các electron quay xung quanh theo các quỹ đạo/lớp electron xác định.",
            "III. Cấu tạo nguyên tử - 1. Hạt nhân nguyên tử: gồm proton [p, mang điện tích +1] và neutron [n, không mang điện]. Điện tích hạt nhân = + số p.",
            "III. Cấu tạo nguyên tử - 2. Vỏ nguyên tử: gồm các electron [e, mang điện tích -1] sắp xếp thành từng lớp. Nguyên tử trung hoà về điện: Số p = Số e.",
            "IV. Khối lượng nguyên tử - Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân [khối lượng e rất nhỏ không đáng kể]; đơn vị khối lượng nguyên tử amu [1 amu ≈ khối lượng 1 proton/neutron]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c2_l3",
          "name": "Bài 3: Nguyên tố hoá học",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "19 – 22",
          "subItems": [
            "I. Nguyên tố hoá học - Định nghĩa: Nguyên tố hoá học là tập hợp các nguyên tử cùng loại, có cùng số proton trong hạt nhân.",
            "II. Tên gọi và kí hiệu của nguyên tố hoá học - 1. Tên gọi của nguyên tố hoá học: theo danh pháp quốc tế IUPAC.",
            "II. Tên gọi và kí hiệu của nguyên tố hoá học - 2. Kí hiệu của nguyên tố hoá học: gồm một hoặc hai chữ cái [chữ cái đầu viết hoa, chữ thứ hai viết thường].",
            "II. Tên gọi và kí hiệu của nguyên tố hoá học - Ghi nhớ tên và kí hiệu của 20 nguyên tố đầu tiên trong bảng tuần hoàn."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c2_l4",
          "name": "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "23 – 31",
          "subItems": [
            "I. Nguyên tắc sắp xếp các nguyên tố hoá học trong bảng tuần hoàn - 1. Sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.",
            "I. Nguyên tắc sắp xếp các nguyên tố hoá học trong bảng tuần hoàn - 2. Các nguyên tố có cùng số lớp electron trong nguyên tử được xếp vào cùng một hàng [chu kì].",
            "I. Nguyên tắc sắp xếp các nguyên tố hoá học trong bảng tuần hoàn - 3. Các nguyên tố có tính chất hoá học tương tự nhau được xếp vào cùng một cột [nhóm].",
            "II. Cấu tạo bảng tuần hoàn các nguyên tố hoá học - 1. Ô nguyên tố [cho biết Số hiệu nguyên tử = số p = số e = số thứ tự ô, Kí hiệu, Tên nguyên tố, Khối lượng nguyên tử].",
            "II. Cấu tạo bảng tuần hoàn các nguyên tố hoá học - 2. Chu kì: Bảng tuần hoàn gồm 7 chu kì [chu kì 1, 2, 3 là chu kì nhỏ; chu kì 4, 5, 6, 7 là chu kì lớn]. Số thứ tự chu kì = số lớp electron.",
            "II. Cấu tạo bảng tuần hoàn các nguyên tố hoá học - 3. Nhóm: Gồm 8 nhóm A [đánh số IA đến VIIIA] và 8 nhóm B. Số thứ tự nhóm A = số electron lớp ngoài cùng.",
            "III. Vị trí các nhóm nguyên tố kim loại, phi kim và khí hiếm trong bảng tuần hoàn - 1. Các nguyên tố kim loại [chiếm đa số, nằm ở góc dưới bên trái bảng, các nhóm IA, IIA, IIIA trừ H, B và toàn bộ nhóm B].",
            "III. Vị trí các nhóm nguyên tố kim loại, phi kim và khí hiếm trong bảng tuần hoàn - 2. Các nguyên tố phi kim [nằm ở góc trên bên phải bảng, các nhóm IVA, VA, VIA, VIIA và hydrogen].",
            "III. Vị trí các nhóm nguyên tố kim loại, phi kim và khí hiếm trong bảng tuần hoàn - 3. Các nguyên tố khí hiếm [thuộc nhóm VIIIA, có 8 e lớp ngoài cùng bền vững, riêng He có 2 e]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c3",
      "name": "Chương II: PHÂN TỬ – LIÊN KẾT HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "lessons": [
        {
          "id": "7_c3_l5",
          "name": "Bài 5: Phân tử – Đơn chất – Hợp chất",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "32 – 35",
          "subItems": [
            "I. Đơn chất và hợp chất - 1. Đơn chất: chất tạo nên từ một nguyên tố hoá học [đơn chất kim loại: Cu, Fe, Al; đơn chất phi kim: O2, N2, H2; khí hiếm: He, Ne].",
            "I. Đơn chất và hợp chất - 2. Hợp chất: chất tạo nên từ hai hay nhiều nguyên tố hoá học [H2O, CO2, NaCl, CaCO3...].",
            "II. Phân tử - 1. Khái niệm phân tử: hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hoá học của chất.",
            "II. Phân tử - 2. Khối lượng phân tử: bằng tổng khối lượng của các nguyên tử trong phân tử [tính theo amu]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c3_l6",
          "name": "Bài 6: Giới thiệu về liên kết hoá học",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "36 – 39",
          "subItems": [
            "I. Cấu trúc electron bền vững của khí hiếm - Khí hiếm có lớp electron ngoài cùng bão hoà [8 e, riêng He có 2 e] nên rất bền vững, không tham gia liên kết.",
            "II. Liên kết ion - Sự hình thành liên kết ion giữa kim loại điển hình và phi kim điển hình.",
            "II. Liên kết ion - Kim loại nhường e tạo ion dương [cation]; phi kim nhận e tạo ion âm [anion]; hai ion mang điện tích trái dấu hút nhau tạo hợp chất ion [ví dụ: NaCl, MgO].",
            "III. Liên kết cộng hoá trị - 1. Liên kết cộng hoá trị trong phân tử đơn chất [các nguyên tử dùng chung electron, ví dụ: H2, Cl2, N2, O2].",
            "III. Liên kết cộng hoá trị - 2. Liên kết cộng hoá trị trong phân tử hợp chất [ví dụ: H2O, CH4, CO2, NH3].",
            "III. Liên kết cộng hoá trị - So sánh tính chất của chất ion [nhiệt độ nóng chảy/sôi cao, tan tốt trong nước] và chất cộng hoá trị."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c3_l7",
          "name": "Bài 7: Hoá trị và công thức hoá học",
          "domain": "Chất và sự biến đổi của chất [Hóa học]",
          "pages": "40 – 44",
          "subItems": [
            "I. Công thức hoá học - Cách viết CTHH của đơn chất [A hoặc Ax] và hợp chất [AxBy hoặc AxByCz].",
            "I. Công thức hoá học - Ý nghĩa CTHH: cho biết thành phần nguyên tố, số nguyên tử mỗi nguyên tố, khối lượng phân tử; tính % khối lượng các nguyên tố trong hợp chất.",
            "II. Hoá trị - 1. Khái niệm hoá trị: con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác [lấy H hoá trị I, O hoá trị II làm chuẩn].",
            "II. Hoá trị - 2. Quy tắc hoá trị: Trong hợp chất AxBy, a.x = b.y [tích chỉ số và hoá trị của nguyên tố này bằng tích chỉ số và hoá trị của nguyên tố kia].",
            "III. Lập công thức hoá học của hợp chất - 1. Lập công thức hoá học của hợp chất khi biết hoá trị [áp dụng quy tắc hoá trị x/y = b/a].",
            "III. Lập công thức hoá học của hợp chất - 2. Lập công thức hoá học của hợp chất theo phần trăm khối lượng các nguyên tố."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c4",
      "name": "Chương III: TỐC ĐỘ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "lessons": [
        {
          "id": "7_c4_l8",
          "name": "Bài 8: Tốc độ chuyển động",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "45 – 48",
          "subItems": [
            "I. Khái niệm tốc độ - Tốc độ là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật, đo bằng quãng đường đi được trong một đơn vị thời gian: v = s / t.",
            "II. Đơn vị đo tốc độ - Đơn vị chuẩn trong hệ SI là mét trên giây [m/s] và kilômét trên giờ [km/h]; quy đổi: 1 m/s = 3,6 km/h.",
            "III. Bài tập vận dụng công thức tính tốc độ - Giải bài toán tìm quãng đường [s = v.t], thời gian [t = s / v] và tốc độ trung bình."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c4_l9",
          "name": "Bài 9: Đo tốc độ",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "49 – 52",
          "subItems": [
            "I. Đo tốc độ dùng đồng hồ bấm giây - 1. Dụng cụ đo [thước đo quãng đường s, đồng hồ bấm giây đo thời gian t].",
            "I. Đo tốc độ dùng đồng hồ bấm giây - 2. Cách đo [xác định vạch xuất phát và đích, bấm thời gian, tính v = s / t].",
            "I. Đo tốc độ dùng đồng hồ bấm giây - 3. Ví dụ thực hành.",
            "II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ - 1. Dụng cụ đo [đồng hồ đo thời gian hiện số, cổng quang điện A và B, máng trượt, viên bi/xe lăn].",
            "II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ - 2. Cách đo [chắn cổng quang điện kích hoạt và ngắt đồng hồ tự động giúp đo chính xác thời gian].",
            "III. Thiết bị bắn tốc độ - Nguyên lí hoạt động của súng bắn tốc độ trong giám sát trật tự an toàn giao thông."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c4_l10",
          "name": "Bài 10: Đồ thị quãng đường – thời gian",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "53 – 55",
          "subItems": [
            "I. Vẽ đồ thị quãng đường – thời gian cho chuyển động thẳng - 1. Lập bảng ghi quãng đường đi được theo thời gian.",
            "I. Vẽ đồ thị quãng đường – thời gian cho chuyển động thẳng - 2. Các bước vẽ đồ thị s - t trên hệ trục toạ độ [trục hoành Ot, trục tung Os].",
            "II. Sử dụng đồ thị quãng đường – thời gian - Xác định quãng đường vật đi được sau khoảng thời gian t.",
            "II. Sử dụng đồ thị quãng đường – thời gian - Xác định thời gian cần thiết để đi được quãng đường s.",
            "II. Sử dụng đồ thị quãng đường – thời gian - Xác định trạng thái: đường nghiêng [chuyển động thẳng đều], đường nằm ngang [vật đứng yên]; tính tốc độ v từ độ dốc của đồ thị."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c4_l11",
          "name": "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
          "pages": "56 – 59",
          "subItems": [
            "I. Yêu cầu - Tìm hiểu mối quan hệ giữa tốc độ chuyển động, khoảng cách an toàn và nguy cơ xảy ra tai nạn giao thông.",
            "II. Nguồn tư liệu - 1. Sưu tầm tư liệu [thống kê tai nạn giao thông, các quy định pháp luật].",
            "II. Nguồn tư liệu - 2. Một số ví dụ về tư liệu cần sưu tầm [Quy chuẩn biển báo tốc độ, Bảng quy định khoảng cách an toàn tối thiểu theo tốc độ xe chạy].",
            "III. Thảo luận - Phân tích nguyên nhân tai nạn do vi phạm tốc độ; đề xuất giải pháp và cam kết tuân thủ luật an toàn giao thông."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c5",
      "name": "Chương IV: ÂM THANH",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
      "lessons": [
        {
          "id": "7_c5_l12",
          "name": "Bài 12: Sóng âm",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
          "pages": "60 – 63",
          "subItems": [
            "I. Dao động và sóng - 1. Dao động [chuyển động qua lại quanh một vị trí cân bằng].",
            "I. Dao động và sóng - 2. Sóng [sự lan truyền dao động trong môi trường].",
            "II. Nguồn âm - Vật phát ra âm gọi là nguồn âm; mọi nguồn âm khi phát ra âm đều dao động.",
            "III. Sóng âm - Dao động từ nguồn âm lan truyền trong môi trường tạo thành sóng âm.",
            "IV. Các môi trường truyền âm - Sóng âm truyền được trong chất rắn, chất lỏng, chất khí; không truyền được trong chân không. Tốc độ truyền âm: v_rắn > v_lỏng > v_khí."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c5_l13",
          "name": "Bài 13: Độ to và độ cao của âm",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
          "pages": "64 – 67",
          "subItems": [
            "I. Độ to và biên độ của sóng âm - 1. Biên độ dao động của nguồn âm, sóng âm [độ lệch lớn nhất của vật so với vị trí cân bằng].",
            "I. Độ to và biên độ của sóng âm - 2. Độ to của âm: Biên độ dao động càng lớn thì âm phát ra càng to [đơn vị đo độ to là đêxiben, dB].",
            "II. Độ cao và tần số của sóng âm - 1. Tần số: số dao động thực hiện được trong 1 giây, đơn vị là Héc [Hz].",
            "II. Độ cao và tần số của sóng âm - 2. Độ cao của âm: Tần số dao động càng lớn thì âm phát ra càng cao [càng bổng]; tần số dao động càng nhỏ thì âm phát ra càng thấp [càng trầm]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c5_l14",
          "name": "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
          "pages": "68 – 71",
          "subItems": [
            "I. Phản xạ âm - Hiện tượng âm dội ngược lại khi gặp mặt chắn; Tiếng vang xuất hiện khi âm phản xạ nghe được cách âm trực tiếp ít nhất 1/15 giây.",
            "II. Vật phản xạ âm tốt, vật phản xạ âm kém - Vật phản xạ âm tốt [hấp thụ âm kém]: vật cứng có bề mặt nhẵn bóng [kính, tường gạch men, kim loại].",
            "II. Vật phản xạ âm tốt, vật phản xạ âm kém - Vật phản xạ âm kém [hấp thụ âm tốt]: vật mềm, xốp, có bề mặt gồ ghề [rèm nhung, xốp bọt biển, dạ, gỗ ép xốp].",
            "III. Chống ô nhiễm tiếng ồn - 1. Tiếng ồn: tiếng ồn to, kéo dài gây hại cho sức khoẻ và thính giác con người.",
            "III. Chống ô nhiễm tiếng ồn - 2. Các biện pháp chống ô nhiễm tiếng ồn: Hạn chế nguồn gây tiếng ồn; Phân tán tiếng ồn trên đường truyền [trồng cây xanh]; Ngăn cản đường truyền âm [dùng vật liệu cách âm]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c6",
      "name": "Chương V: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
      "lessons": [
        {
          "id": "7_c6_l15",
          "name": "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
          "pages": "72 – 77",
          "subItems": [
            "I. Ánh sáng là một dạng của năng lượng - Ánh sáng có mang năng lượng [quang năng có thể chuyển hoá thành nhiệt năng, điện năng trong pin mặt trời, hoá năng trong quang hợp].",
            "II. Chùm sáng và tia sáng - 1. Chùm sáng: gồm nhiều tia sáng hợp thành; 3 loại chùm sáng: chùm song song, chùm hội tụ, chùm phân kì.",
            "II. Chùm sáng và tia sáng - 2. Tia sáng: đường truyền của ánh sáng biểu diễn bằng một đường thẳng có mũi tên chỉ chiều truyền.",
            "III. Vùng tối - 1. Vùng tối do nguồn sáng hẹp [phía sau vật cản chỉ có vùng tối rõ nét].",
            "III. Vùng tối - 2. Vùng tối do nguồn sáng rộng [phía sau vật cản có vùng tối hoàn toàn và vùng tối không hoàn toàn/vùng nửa tối].",
            "III. Vùng tối - Giải thích hiện tượng nhật thực [Mặt Trăng chắn ánh sáng Mặt Trời tới Trái Đất] và nguyệt thực."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c6_l16",
          "name": "Bài 16: Sự phản xạ ánh sáng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
          "pages": "78 – 81",
          "subItems": [
            "I. Hiện tượng phản xạ ánh sáng - Ánh sáng bị hắt trở lại môi trường cũ khi gặp một bề mặt nhẵn bóng. Các quy ước: Gương phẳng [G], Điểm tới [I], Tia tới [SI], Tia phản xạ [IR], Pháp tuyến [IN], Góc tới [i = SIN], Góc phản xạ [i' = NIR], Mặt phẳng tới.",
            "II. Định luật phản xạ ánh sáng - 1. Thí nghiệm đo góc tới và góc phản xạ.",
            "II. Định luật phản xạ ánh sáng - 2. Nội dung định luật: a] Tia sáng phản xạ nằm trong mặt phẳng tới; b] Góc phản xạ bằng góc tới [i' = i].",
            "III. Phản xạ và phản xạ khuếch tán - Phản xạ gương: xảy ra trên bề mặt nhẵn bóng, các tia sáng tới song song cho các tia phản xạ song song theo một hướng.",
            "III. Phản xạ và phản xạ khuếch tán - Phản xạ khuếch tán [tán xạ]: xảy ra trên bề mặt gồ ghề, nhám; các tia sáng bị hắt trở lại theo mọi hướng khác nhau."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c6_l17",
          "name": "Bài 17: Ảnh của vật qua gương phẳng",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
          "pages": "82 – 85",
          "subItems": [
            "I. Ảnh của vật qua gương phẳng - Hình ảnh nhìn thấy trong gương phẳng gọi là ảnh của vật qua gương phẳng.",
            "II. Tính chất của ảnh qua gương phẳng - 1. Dự đoán về tính chất ảnh.",
            "II. Tính chất của ảnh qua gương phẳng - 2. Thí nghiệm kiểm tra: a] Ảnh ảo không hứng được trên màn chắn; b] Độ lớn của ảnh bằng độ lớn của vật; c] Khoảng cách từ một điểm của vật đến gương bằng khoảng cách từ ảnh của điểm đó đến gương [đối xứng].",
            "III. Dựng ảnh của vật qua gương phẳng - 1. Dựng ảnh của một điểm sáng S [dựa vào định luật phản xạ hoặc tính chất đối xứng].",
            "III. Dựng ảnh của vật qua gương phẳng - 2. Dựng ảnh của một vật sáng AB [dựng ảnh của các điểm đầu mút rồi nối lại, vẽ bằng nét đứt]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c7",
      "name": "Chương VI: TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
      "lessons": [
        {
          "id": "7_c7_l18",
          "name": "Bài 18: Nam châm",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
          "pages": "86 – 89",
          "subItems": [
            "I. Nam châm là gì? - Vật có từ tính, có khả năng hút các vật bằng sắt hoặc các vật liệu từ.",
            "II. Tính chất từ của nam châm - Hút các vật liệu có tính chất từ [sắt, thép, niken, coban...]; không hút đồng, nhôm, gỗ, nhựa...",
            "II. Tính chất từ của nam châm - Mỗi nam châm có hai cực từ: cực Bắc [North, sơn đỏ hoặc chữ N] và cực Nam [South, sơn xanh/trắng hoặc chữ S]. Nơi từ tính mạnh nhất là ở hai đầu cực.",
            "III. Tương tác giữa hai nam châm - Đặt hai nam châm gần nhau: các cực cùng tên thì đẩy nhau, các cực khác tên thì hút nhau.",
            "IV. Định hướng của một kim nam châm tự do - Khi để tự do, kim nam châm luôn định hướng theo trục Bắc - Nam địa lí."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c7_l19",
          "name": "Bài 19: Từ trường",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
          "pages": "90 – 95",
          "subItems": [
            "I. Từ trường - Không gian xung quanh nam châm [hoặc dòng điện] tồn tại từ trường; tác dụng lực từ lên kim nam châm đặt trong nó.",
            "II. Từ phổ - Hình ảnh các đường mạt sắt sắp xếp xung quanh nam châm tạo thành từ phổ.",
            "III. Đường sức từ - 1. Khái niệm và hình ảnh đường sức từ.",
            "III. Đường sức từ - 2. Chiều của đường sức từ: tuân theo quy ước 'Vào Nam - Ra Bắc' [đi ra từ cực Bắc và đi vào cực Nam của nam châm].",
            "IV. Từ trường của Trái Đất - Trái Đất là một nam châm khổng lồ có địa từ trường; cực từ Bắc nằm ở vùng cực nam địa lí, cực từ Nam nằm ở vùng cực bắc địa lí.",
            "V. La bàn - 1. Cấu tạo la bàn [kim nam châm, mặt số chia độ].",
            "V. La bàn - 2. Cách sử dụng la bàn xác định hướng địa lí."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c7_l20",
          "name": "Bài 20: Chế tạo nam châm điện đơn giản",
          "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
          "pages": "96 – 98",
          "subItems": [
            "I. Nam châm điện - Cấu tạo gồm một cuộn dây dẫn quấn quanh một lõi sắt non; khi có dòng điện chạy qua cuộn dây, lõi sắt bị nhiễm từ và trở thành nam châm điện; ngắt điện thì mất từ tính.",
            "II. Chế tạo nam châm điện đơn giản - Các bước chế tạo dùng đinh sắt, dây đồng bọc cách điện và pin.",
            "II. Chế tạo nam châm điện đơn giản - Các yếu tố ảnh hưởng đến độ mạnh của nam châm điện: tăng cường độ dòng điện [số pin] hoặc tăng số vòng dây.",
            "II. Chế tạo nam châm điện đơn giản - Ứng dụng nam châm điện: cần cẩu điện dọn rác kim loại, rơle điện từ, chuông điện."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c8",
      "name": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "lessons": [
        {
          "id": "7_c8_l21",
          "name": "Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "99 – 100",
          "subItems": [
            "I. Trao đổi chất và chuyển hoá năng lượng - Trao đổi chất: quá trình cơ thể lấy các chất từ môi trường ngoài và thải các chất cặn bã ra môi trường.",
            "I. Trao đổi chất và chuyển hoá năng lượng - Chuyển hoá năng lượng: quá trình biến đổi năng lượng từ dạng này sang dạng khác [quang năng → hoá năng, hoá năng → nhiệt năng/cơ năng].",
            "II. Vai trò của trao đổi chất và chuyển hoá năng lượng - Cung cấp nguyên liệu cấu tạo tế bào; cung cấp năng lượng cho mọi hoạt động sống; duy trì sự tồn tại và phát triển của sinh vật."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l22",
          "name": "Bài 22: Quang hợp ở thực vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "101 – 103",
          "subItems": [
            "I. Khái quát về quang hợp - 1. Khái niệm quang hợp: quá trình lá cây sử dụng năng lượng ánh sáng mặt trời để tổng hợp chất hữu cơ [glucose/tinh bột] từ nước và carbon dioxide, đồng thời giải phóng oxygen.",
            "I. Khái quát về quang hợp - 2. Phương trình tổng quát: Nước + Carbon dioxide --[Ánh sáng, Diệp lục]--> Glucose + Oxygen.",
            "I. Khái quát về quang hợp - 3. Mối quan hệ giữa trao đổi chất và chuyển hoá năng lượng trong quang hợp: Hấp thụ năng lượng ánh sáng và tích luỹ thành hoá năng trong hợp chất hữu cơ.",
            "II. Vai trò của lá cây với chức năng quang hợp - Cấu tạo phiến lá rộng, mỏng; lớp biểu bì có khí khổng trao đổi khí và thoát hơi nước; mô giậu chứa nhiều lục lạp mang diệp lục; gân lá có mạch dẫn."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l23",
          "name": "Bài 23: Một số yếu tố ảnh hưởng đến quang hợp",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "104 – 107",
          "subItems": [
            "I. Một số yếu tố ảnh hưởng đến quang hợp - 1. Ánh sáng [cường độ và thành phần quang phổ]. Cây ưa sáng và cây ưa bóng.",
            "I. Một số yếu tố ảnh hưởng đến quang hợp - 2. Nước [nguyên liệu quang hợp và điều tiết khí khổng].",
            "I. Một số yếu tố ảnh hưởng đến quang hợp - 3. Khí carbon dioxide [nguyên liệu trực tiếp tổng hợp carbohydrate].",
            "I. Một số yếu tố ảnh hưởng đến quang hợp - 4. Nhiệt độ [ảnh hưởng đến hoạt tính của enzyme quang hợp, tối ưu 25 - 35°C].",
            "II. Vận dụng những hiểu biết về quang hợp trong việc trồng và bảo vệ cây xanh - Mật độ gieo trồng hợp lí, tỉa cành bấm ngọn, tưới tiêu và bón phân đúng thời vụ.",
            "II. Vận dụng những hiểu biết về quang hợp trong việc trồng và bảo vệ cây xanh - Vai trò của việc trồng cây xanh điều hoà không khí, giảm hiệu ứng nhà kính và bảo vệ môi trường."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l24",
          "name": "Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "108 – 110",
          "subItems": [
            "I. Chuẩn bị - 1. Dụng cụ [Cốc thuỷ tinh, đèn cồn, ống nghiệm, đĩa petri, panh, băng giấy đen]; 2. Mẫu vật, hoá chất [Chậu cây khoai lang/dâm bụt, cành rong đuôi chó, cồn 90°, dung dịch thuốc thử iodine].",
            "II. Cách tiến hành - 1. Thí nghiệm chứng minh tinh bột được tạo thành trong quang hợp [Dùng băng giấy đen bịt một phần lá, chiếu sáng, tẩy diệp lục bằng cồn sôi, nhỏ dung dịch iodine; phần lá chiếu sáng chuyển màu xanh tím].",
            "II. Cách tiến hành - 2. Thí nghiệm chứng minh quang hợp giải phóng khí oxygen [Cắm cành rong đuôi chó trong phễu ngập nước chiếu sáng, thu khí vào ống nghiệm, dùng que đóm còn tàn đỏ thấy bùng cháy].",
            "III. Kết quả - Giải thích hiện tượng đổi màu xanh tím đặc trưng của tinh bột với iodine; giải thích hiện tượng que đóm bùng cháy do O2 duy trì sự cháy."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l25",
          "name": "Bài 25: Hô hấp tế bào",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "111 – 112",
          "subItems": [
            "I. Hô hấp tế bào - Khái niệm: quá trình phân giải chất hữu cơ [chủ yếu là glucose] giải phóng năng lượng ATP cung cấp cho các hoạt động sống của tế bào và toả nhiệt.",
            "I. Hô hấp tế bào - Nơi diễn ra: bào quan ty thể.",
            "I. Hô hấp tế bào - Phương trình tổng quát: Glucose + Oxygen → Carbon dioxide + Nước + Năng lượng [ATP + Nhiệt].",
            "II. Mối quan hệ giữa tổng hợp và phân giải chất hữu cơ ở tế bào - Quang hợp [tổng hợp chất hữu cơ, tích luỹ năng lượng] và hô hấp [phân giải chất hữu cơ, giải phóng năng lượng] là hai quá trình trái ngược nhau nhưng gắn bó mật thiết, thống nhất."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l26",
          "name": "Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "113 – 115",
          "subItems": [
            "I. Một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào - 1. Nước [hàm lượng nước tỉ lệ thuận với cường độ hô hấp].",
            "I. Một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào - 2. Nồng độ khí oxygen [nồng độ O2 giảm dưới 5% thì hô hấp tế bào giảm mạnh].",
            "I. Một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào - 3. Nồng độ khí carbon dioxide [nồng độ CO2 cao ức chế hô hấp].",
            "I. Một số yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào - 4. Nhiệt độ [nhiệt độ tối ưu 30 - 35°C; nhiệt độ quá thấp hoặc quá cao đều ức chế hô hấp].",
            "II. Vận dụng hiểu biết về hô hấp tế bào vào thực tiễn - 1. Hô hấp tế bào và vấn đề bảo quản nông sản [Hô hấp làm tiêu hao chất hữu cơ, sinh nhiệt ẩm làm hỏng nông sản].",
            "II. Vận dụng hiểu biết về hô hấp tế bào vào thực tiễn - 2. Các biện pháp bảo quản nông sản: Bảo quản khô [phơi, sấy lúa hạt]; Bảo quản lạnh [rau quả tươi]; Bảo quản trong điều kiện nồng độ CO2 cao hoặc hút chân không."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l27",
          "name": "Bài 27: Thực hành: Hô hấp ở thực vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "116 – 117",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Bình thuỷ tinh kín, nút cao su, ống dẫn khí, cốc đong, nhiệt kế]; 2. Mẫu vật, hoá chất [Hạt đỗ/ngô đang nảy mầm, nước vôi trong Ca[OH]2].",
            "II. Cách tiến hành - Thí nghiệm 1: Chứng minh hô hấp thải khí CO2 [Dẫn khí từ bình hạt nảy mầm qua cốc nước vôi trong làm vẩn đục].",
            "II. Cách tiến hành - Thí nghiệm 2: Chứng minh hô hấp toả nhiệt [Nhiệt kế cắm vào bình hạt nảy mầm chỉ nhiệt độ tăng].",
            "III. Kết quả - Giải thích hiện tượng nước vôi trong bị đục do phản ứng tạo kết tủa CaCO3; giải thích hiện tượng tăng nhiệt độ do năng lượng nhiệt toả ra từ hô hấp."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l28",
          "name": "Bài 28: Trao đổi khí ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "118 – 121",
          "subItems": [
            "I. Trao đổi khí ở sinh vật - Cơ chế trao đổi khí: khuếch tán thụ động từ nơi có nồng độ cao đến nơi có nồng độ thấp qua bề mặt trao đổi khí.",
            "II. Trao đổi khí ở thực vật - 1. Cấu tạo của khí khổng [hai tế bào hình hạt đậu có mép trong dày mép ngoài mỏng tạo lỗ khí].",
            "II. Trao đổi khí ở thực vật - 2. Chức năng của khí khổng trong trao đổi khí O2 và CO2 giữa lá cây và môi trường.",
            "III. Trao đổi khí ở động vật - 1. Các cơ quan trao đổi khí ở động vật: qua bề mặt cơ thể [giun đất], qua hệ thống ống khí [côn trùng], qua mang [cá, tôm], qua phổi [bò sát, chim, thú, người].",
            "III. Trao đổi khí ở động vật - 2. Quá trình trao đổi khí ở người [Đường dẫn khí và phổi; sự trao đổi khí ở phế nang và ở tế bào]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l29",
          "name": "Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "122 – 126",
          "subItems": [
            "I. Thành phần hoá học, cấu trúc và tính chất của nước - Phân tử H2O gồm 2 nguyên tử H liên kết cộng hoá trị phân cực với 1 nguyên tử O; có tính phân cực cao; là dung môi hoà tan nhiều chất.",
            "II. Vai trò của nước đối với sinh vật - Thành phần cấu tạo chủ yếu của tế bào và cơ thể [chiếm 70 - 90%]; dung môi hoà tan; môi trường phản ứng sinh hoá; điều hoà thân nhiệt; phương tiện vận chuyển các chất.",
            "III. Vai trò của chất dinh dưỡng đối với sinh vật - 1. Vai trò của chất dinh dưỡng đối với thực vật [nguyên tố khoáng đa lượng N, P, K và vi lượng Fe, Zn... tham gia cấu tạo tế bào và xúc tác enzyme].",
            "III. Vai trò của chất dinh dưỡng đối với sinh vật - 2. Vai trò của chất dinh dưỡng đối với động vật [protein, lipid, carbohydrate cung cấp năng lượng và xây dựng tế bào; vitamin và khoáng chất điều hoà chuyển hoá]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l30",
          "name": "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "127 – 130",
          "subItems": [
            "I. Sự hấp thụ nước và chất khoáng từ môi trường ngoài vào rễ - Lông hút ở rễ là cơ quan chuyên trách hấp thụ nước và khoáng theo cơ chế thẩm thấu và khuếch tán.",
            "II. Sự vận chuyển các chất trong cây - Dòng mạch gỗ [vận chuyển nước và muối khoáng một chiều từ rễ lên thân và lá].",
            "II. Sự vận chuyển các chất trong cây - Dòng mạch rây [vận chuyển chất hữu cơ hai chiều từ lá đến các cơ quan dự trữ và rễ].",
            "III. Quá trình thoát hơi nước ở lá - 1. Hoạt động đóng, mở khí khổng [điều tiết lượng nước thoát ra].",
            "III. Quá trình thoát hơi nước ở lá - 2. Ý nghĩa của sự thoát hơi nước [tạo lực hút kéo dòng mạch gỗ đi lên, hạ nhiệt độ bề mặt lá, giúp khí khổng mở để hấp thụ CO2].",
            "IV. Một số yếu tố chủ yếu ảnh hưởng đến trao đổi nước và chất dinh dưỡng ở thực vật - Ánh sáng, nhiệt độ, độ ẩm không khí, độ ẩm và tính chất của đất.",
            "V. Vận dụng hiểu biết về trao đổi chất và chuyển hoá năng lượng vào thực tiễn - Kĩ thuật tưới tiêu hợp lí, bón phân cân đối, bảo vệ bộ rễ cây khi bứng trồng."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l31",
          "name": "Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "131 – 135",
          "subItems": [
            "I. Con đường thu nhận và tiêu hoá thức ăn trong ống tiêu hoá ở người - Miệng [nhai, đảo trộn, biến đổi tinh bột chín] → Thực quản → Dạ dày [tiêu hoá cơ học, tiêu hoá protein] → Ruột non [tiêu hoá triệt để và hấp thụ chất dinh dưỡng] → Ruột già [hấp thụ nước, tạo phân] → Hậu môn.",
            "II. Nhu cầu dùng nước và con đường trao đổi nước ở động vật - Nhu cầu nước ở các loài; con đường thu nhận nước [uống, thức ăn] và đào thải nước [nước tiểu, mồ hôi, hơi thở, phân].",
            "III. Sự vận chuyển các chất ở động vật - Hệ tuần hoàn máu: Tim co bóp đẩy máu; Vòng tuần hoàn nhỏ [trao đổi khí ở phổi]; Vòng tuần hoàn lớn [vận chuyển O2 và dinh dưỡng đến tế bào, nhận CO2 và chất thải].",
            "IV. Vận dụng hiểu biết về trao đổi chất và chuyển hoá năng lượng vào thực tiễn - 1. Những nguy cơ khi thiếu hoặc thừa dinh dưỡng [suy dinh dưỡng, béo phì, bệnh tim mạch].",
            "IV. Vận dụng hiểu biết về trao đổi chất và chuyển hoá năng lượng vào thực tiễn - 2. Vệ sinh ăn uống và xây dựng tháp dinh dưỡng hợp lí."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c8_l32",
          "name": "Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "136 – 137",
          "subItems": [
            "I. Chuẩn bị - 1. Dụng cụ [Dao lam, cốc thuỷ tinh, kính lúp, túi nylon trong suốt, dây buộc]; 2. Mẫu vật, hoá chất [Cành hoa trắng - cúc/huệ, cành cây có lá, nước pha mực đỏ].",
            "II. Cách tiến hành - 1. Thí nghiệm chứng minh thân vận chuyển nước [Cắm cành hoa trắng vào cốc nước màu đỏ, sau một thời gian cánh hoa chuyển sang màu đỏ; cắt ngang thân quan sát mạch gỗ nhuộm đỏ].",
            "II. Cách tiến hành - 2. Thí nghiệm chứng minh lá thoát hơi nước [Trùm túi nylon kín cành cây có lá và cành đã ngắt hết lá; sau một thời gian túi trùm cành có lá xuất hiện mờ sương và giọt nước đọng].",
            "III. Kết quả - Giải thích hiện tượng cánh hoa đổi màu do mạch gỗ vận chuyển nước màu lên; giải thích giọt nước đọng trong túi nylon do lá thoát hơi nước."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c9",
      "name": "Chương VIII: CẢM ỨNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "lessons": [
        {
          "id": "7_c9_l33",
          "name": "Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "138 – 140",
          "subItems": [
            "I. Cảm ứng và vai trò của cảm ứng ở sinh vật - 1. Cảm ứng ở sinh vật là gì? [Khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường để thích nghi].",
            "I. Cảm ứng và vai trò của cảm ứng ở sinh vật - 2. Vai trò của cảm ứng ở sinh vật [Giúp sinh vật thích nghi với môi trường sống, tồn tại và phát triển].",
            "II. Tập tính ở động vật - 1. Tập tính là gì? Chuỗi phản ứng trả lời kích thích. Phân loại: Tập tính bẩm sinh [sinh ra đã có, mang tính bản năng di truyền] và Tập tính học được [hình thành qua trải nghiệm, học tập].",
            "II. Tập tính ở động vật - 2. Vai trò của tập tính [Kiếm ăn, tự vệ, sinh sản, di cư, thích nghi sinh tồn]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c9_l34",
          "name": "Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "141 – 144",
          "subItems": [
            "I. Ứng dụng hiện tượng cảm ứng ở sinh vật trong trồng trọt - Ứng dụng tính hướng sáng [tỉa cành, trồng thưa], hướng nước và hướng hoá [tưới nước và bón phân tập trung dưới rễ], hướng tiếp xúc [làm giàn cho bầu, bí, mướp, nho].",
            "II. Ứng dụng hiện tượng cảm ứng ở sinh vật trong chăn nuôi - Huấn luyện động vật nghe khẩu lệnh, âm thanh chuông để về chuồng ăn, đi vệ sinh đúng chỗ; chó nghiệp vụ phát hiện ma tuý.",
            "III. Ứng dụng hiện tượng cảm ứng ở sinh vật trong học tập và đời sống - Hình thành các thói quen tốt [tập thể dục buổi sáng, đọc sách, đúng giờ]; loại bỏ các thói quen xấu [ngủ muộn, lười vận động] dựa trên cơ chế thành lập phản xạ."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c9_l35",
          "name": "Bài 35: Thực hành: Cảm ứng ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "145 – 147",
          "subItems": [
            "I. Chuẩn bị - 1. Dụng cụ [Hộp carton khoét lỗ, chậu trồng cây, chậu xốp có lỗ, giá đỡ]; 2. Mẫu vật [Hạt đỗ/ngô nảy mầm, cây trinh nữ, giun đất].",
            "II. Cách tiến hành - 1. Thí nghiệm chứng minh tính hướng nước của cây [Rễ cây cong về phía nguồn nước].",
            "II. Cách tiến hành - 2. Thí nghiệm chứng minh tính hướng sáng của cây [Ngọn cây mọc cong về phía có ánh sáng chiếu qua lỗ hộp].",
            "II. Cách tiến hành - 3. Quan sát tính hướng tiếp xúc của cây [Tua cuốn cây mướp/đỗ cuộn quanh cọc bám; phản ứng cụp lá của cây trinh nữ khi va chạm].",
            "II. Cách tiến hành - 4. Quan sát một số tập tính của động vật [Tập tính giun đất chui vào nơi ẩm tối].",
            "III. Kết quả - Hoàn thành phiếu quan sát; giải thích cơ chế sinh trưởng dãn dài không đều của tế bào dẫn đến tính hướng sáng và hướng nước."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c10",
      "name": "Chương IX: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "lessons": [
        {
          "id": "7_c10_l36",
          "name": "Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "148 – 150",
          "subItems": [
            "I. Sinh trưởng và phát triển ở sinh vật - 1. Khái niệm: Sinh trưởng [sự tăng về kích thước và khối lượng của cơ thể do tăng số lượng và kích thước tế bào]; Phát triển [sự biến đổi về cấu trúc và chức năng, phân hoá tế bào, phát sinh hình thái cơ quan mới].",
            "I. Sinh trưởng và phát triển ở sinh vật - 2. Các giai đoạn sinh trưởng và phát triển ở thực vật và động vật; Mối quan hệ mật thiết giữa sinh trưởng và phát triển.",
            "II. Mô phân sinh và chức năng của mô phân sinh - Khái niệm mô phân sinh: nhóm tế bào chưa phân hoá, có khả năng phân chia liên tục tạo tế bào mới.",
            "II. Mô phân sinh và chức năng của mô phân sinh - Vị trí và chức năng: Mô phân sinh đỉnh [ở đỉnh chồi, chóp rễ giúp cây dài ra]; Mô phân sinh bên [ở thân cây hai lá mầm giúp thân to ra]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c10_l37",
          "name": "Bài 37: Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "151 – 155",
          "subItems": [
            "I. Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển ở sinh vật - 1. Nhiệt độ [mỗi loài có khoảng nhiệt độ tối ưu].",
            "I. Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển ở sinh vật - 2. Ánh sáng [ảnh hưởng đến quang hợp, chuyển hoá vitamin D ở động vật].",
            "I. Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển ở sinh vật - 3. Nước [nguyên liệu, môi trường hoà tan].",
            "I. Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển ở sinh vật - 4. Chất dinh dưỡng [cung cấp vật chất xây dựng tế bào].",
            "II. Vận dụng sinh trưởng và phát triển trong thực tiễn - 1. Ứng dụng trong trồng trọt [Bấm ngọn, tỉa cành, điều khiển chiếu sáng kích thích ra hoa trái vụ như thanh long, cúc].",
            "II. Vận dụng sinh trưởng và phát triển trong thực tiễn - 2. Ứng dụng trong chăn nuôi [Tối ưu chế độ dinh dưỡng, nhiệt độ chuồng trại, chiếu sáng tăng trọng, tăng đẻ trứng].",
            "II. Vận dụng sinh trưởng và phát triển trong thực tiễn - 3. Ứng dụng trong phòng trừ sinh vật gây hại [Hiểu vòng đời để diệt trừ ở giai đoạn mẫn cảm nhất, ví dụ diệt bọ gậy của muỗi, diệt sâu non của bướm]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c10_l38",
          "name": "Bài 38: Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "156 – 157",
          "subItems": [
            "I. Chuẩn bị - 1. Thiết bị, dụng cụ [Thước đo, chậu, đất ẩm, bông gòn, nhiệt kế]; 2. Mẫu vật [Hạt đỗ xanh nảy mầm, tranh ảnh/video vòng đời của muỗi, ếch, bướm, gà].",
            "II. Cách tiến hành - 1. Thí nghiệm chứng minh cây có sự sinh trưởng và thực hành quan sát, mô tả sự sinh trưởng của hạt đỗ xanh qua các ngày.",
            "II. Cách tiến hành - 2. Quan sát, mô tả sinh trưởng và phát triển ở một số động vật [Mô tả các giai đoạn phát triển qua biến thái hoàn toàn ở bướm/muỗi, qua biến thái ở ếch].",
            "III. Kết quả - Lập bảng theo dõi chiều cao thân, số lá cây đỗ; vẽ sơ đồ vòng đời của bướm [Trứng → Sâu non → Nhộng → Bướm trưởng thành]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "7_c11",
      "name": "Chương X: SINH SẢN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "lessons": [
        {
          "id": "7_c11_l39",
          "name": "Bài 39: Sinh sản vô tính ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "158 – 163",
          "subItems": [
            "I. Sinh sản là gì? - Khái niệm sinh sản: quá trình tạo ra cá thể mới, bảo đảm sự phát triển liên tục của loài.",
            "II. Sinh sản vô tính - 1. Khái niệm sinh sản vô tính: hình thức sinh sản không có sự kết hợp của giao tử đực và giao tử cái; con non tạo ra giống hệt mẹ.",
            "II. Sinh sản vô tính - 2. Các hình thức sinh sản vô tính ở thực vật: Sinh sản sinh dưỡng [tạo cây con từ rễ củ, thân bò, thân rễ, lá...].",
            "II. Sinh sản vô tính - 3. Các hình thức sinh sản vô tính ở động vật: Phân đôi [trùng roi], mọc chồi [thuỷ tức], tái sinh [sao biển], trinh sinh [ong].",
            "II. Sinh sản vô tính - 4. Vai trò và ứng dụng của sinh sản vô tính: Nhân giống cây trồng nhanh bằng giâm cành, chiết cành, ghép cành, nuôi cấy mô tế bào; bảo tồn loài quý hiếm."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c11_l40",
          "name": "Bài 40: Sinh sản hữu tính ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "164 – 168",
          "subItems": [
            "I. Khái niệm sinh sản hữu tính - Hình thức sinh sản có sự kết hợp giữa giao tử đực [tinh trùng] và giao tử cái [trứng] tạo thành hợp tử, hợp tử phát triển thành cơ thể mới.",
            "II. Sinh sản hữu tính ở thực vật có hoa - 1. Cơ quan sinh sản là hoa [Hoa lưỡng tính có cả nhị và nhuỵ; Hoa đơn tính chỉ có nhị hoặc nhuỵ]. Cấu tạo nhị [hạt phấn] và nhuỵ [noãn].",
            "II. Sinh sản hữu tính ở thực vật có hoa - 2. Quá trình sinh sản: Thụ phấn [chuyển hạt phấn đến đầu nhuỵ] → Thụ tinh [tinh tử kết hợp với noãn tạo hợp tử] → Hình thành quả [từ bầu nhuỵ] và hạt [từ noãn].",
            "III. Sinh sản hữu tính ở động vật - Các giai đoạn: Hình thành giao tử đực và cái → Thụ tinh [thụ tinh ngoài ở cá/ếch; thụ tinh trong ở bò sát/chim/thú] → Phát triển phôi.",
            "III. Sinh sản hữu tính ở động vật - Hình thức sinh sản: Đẻ trứng và đẻ con [ưu thế nuôi dưỡng phôi trong cơ thể mẹ ở thú].",
            "IV. Vai trò và ứng dụng của sinh sản hữu tính ở sinh vật - Tạo ra nguồn biến dị tổ hợp phong phú giúp sinh vật thích nghi; ứng dụng lai tạo giống cây trồng, vật nuôi mới có năng suất cao."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c11_l41",
          "name": "Bài 41: Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "169 – 172",
          "subItems": [
            "I. Một số yếu tố ảnh hưởng đến sinh sản ở sinh vật - 1. Các yếu tố bên trong [yếu tố di truyền, hormone sinh dục].",
            "I. Một số yếu tố ảnh hưởng đến sinh sản ở sinh vật - 2. Các yếu tố bên ngoài [ánh sáng, nhiệt độ, chế độ dinh dưỡng, độ ẩm].",
            "II. Điều hoà, điều khiển sinh sản ở sinh vật - 1. Điều hoà sinh sản ở sinh vật [cơ chế điều hoà bằng hormone].",
            "II. Điều hoà, điều khiển sinh sản ở sinh vật - 2. Điều khiển sinh sản ở sinh vật [điều chỉnh số lượng con, giới tính con non, mùa vụ sinh sản].",
            "III. Vận dụng những hiểu biết về sinh sản hữu tính trong thực tiễn - 1. Trong trồng trọt [Thụ phấn nhân tạo cho ngô/thanh long; tạo quả không hạt; điều khiển thời điểm ra hoa].",
            "III. Vận dụng những hiểu biết về sinh sản hữu tính trong thực tiễn - 2. Trong chăn nuôi [Thụ tinh nhân tạo; nuôi cấy phôi; điều khiển giới tính ở tằm, gà, cá rô phi]."
          ],
          "part2Hosts": []
        },
        {
          "id": "7_c11_l42",
          "name": "Bài 42: Cơ thể sinh vật là một thể thống nhất",
          "domain": "Vật sống [Sinh học cơ thể]",
          "pages": "173 – 174",
          "subItems": [
            "I. Mối quan hệ giữa tế bào, cơ thể sinh vật và môi trường - Tế bào là đơn vị cấu trúc và chức năng của cơ thể; cơ thể là một hệ thống mở thường xuyên trao đổi vật chất và năng lượng với môi trường ngoài.",
            "II. Mối quan hệ giữa các hoạt động sống trong cơ thể sinh vật - Các hoạt động sống [trao đổi chất, chuyển hoá năng lượng, cảm ứng, sinh trưởng, phát triển, sinh sản] có mối liên hệ mật thiết, tác động qua lại, đảm bảo cơ thể tồn tại và phát triển như một thể thống nhất."
          ],
          "part2Hosts": []
        }
      ]
    }
  ],
  "8": [
    {
      "id": "8_c1",
      "name": "Chương MỞ ĐẦU: SỬ DỤNG MỘT SỐ HOÁ CHẤT, THIẾT BỊ CƠ BẢN TRONG PHÒNG THÍ NGHIỆM",
      "domain": "Phương pháp và kĩ năng khoa học",
      "lessons": [
        {
          "id": "8_c1_l1",
          "name": "Bài 1: Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "6 – 10",
          "subItems": [
            "I. Nhận biết hoá chất và quy tắc sử dụng hoá chất an toàn trong phòng thí nghiệm - 1. Nhận biết hoá chất [nhãn hoá chất, công thức, độ tinh khiết, cảnh báo an toàn].",
            "I. Nhận biết hoá chất và quy tắc sử dụng hoá chất an toàn trong phòng thí nghiệm - 2. Quy tắc sử dụng hoá chất an toàn trong phòng thí nghiệm [lấy hoá chất rắn, hoá chất lỏng, hoá chất thừa, an toàn khi xảy ra sự cố].",
            "II. Giới thiệu một số dụng cụ thí nghiệm và cách sử dụng - 1. Một số dụng cụ thí nghiệm thông dụng [ống nghiệm, cốc thuỷ tinh, bình tam giác, phễu lọc, ống đong, ống hút nhỏ giọt, kẹp gỗ...].",
            "II. Giới thiệu một số dụng cụ thí nghiệm và cách sử dụng - 2. Cách sử dụng một số dụng cụ thí nghiệm: a] Ống nghiệm [cách cầm, đun nóng hoá chất]; b] Ống hút nhỏ giọt [cách hút và nhỏ giọt dung dịch].",
            "III. Giới thiệu một số thiết bị và cách sử dụng - 1. Thiết bị đo pH [máy đo pH, bút đo pH và cách xác định pH mẫu nước, nước quả...].",
            "III. Giới thiệu một số thiết bị và cách sử dụng - 2. Huyết áp kế [huyết áp kế đồng hồ, cấu tạo và cách đo huyết áp bằng bao cao su, quả bóp].",
            "III. Giới thiệu một số thiết bị và cách sử dụng - 3. Thiết bị điện và cách sử dụng: a] Thiết bị cung cấp điện [pin, bộ nguồn]; b] Biến áp nguồn [chuyển đổi AC 220V sang AC/DC điện áp thấp an toàn]; c] Thiết bị đo điện [ampe kế, vôn kế]; d] Joulemeter [đo điện năng, công suất, điện áp]; e] Thiết bị sử dụng điện [biến trở, điốt phát quang LED, bóng đèn]; g] Thiết bị điện hỗ trợ [công tắc, cầu chì ống, dây nối]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c2",
      "name": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "lessons": [
        {
          "id": "8_c2_l2",
          "name": "Bài 2: Phản ứng hoá học",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "11 – 15",
          "subItems": [
            "I. Biến đổi vật lí và biến đổi hoá học - 1. Biến đổi vật lí: hiện tượng chất biến đổi về trạng thái, hình dạng nhưng vẫn giữ nguyên là chất ban đầu.",
            "I. Biến đổi vật lí và biến đổi hoá học - 2. Biến đổi hoá học: hiện tượng chất có sự biến đổi tạo thành chất mới.",
            "II. Phản ứng hoá học - 1. Khái niệm [chất phản ứng, chất sản phẩm, phương trình chữ].",
            "II. Phản ứng hoá học - 2. Diễn biến của phản ứng hoá học [sự phá vỡ liên kết cũ, hình thành liên kết mới; số nguyên tử mỗi nguyên tố được bảo toàn].",
            "II. Phản ứng hoá học - 3. Hiện tượng kèm theo phản ứng hoá học [thay đổi màu sắc, xuất hiện chất kết tủa, sinh chất khí, toả nhiệt hoặc phát sáng].",
            "III. Năng lượng của phản ứng hoá học - 1. Phản ứng toả nhiệt và phản ứng thu nhiệt [khái niệm và ví dụ minh hoạ].",
            "III. Năng lượng của phản ứng hoá học - 2. Ứng dụng của phản ứng toả nhiệt [nguồn cung cấp nhiệt lượng trong đời sống và sản xuất: đốt cháy than, xăng dầu, gas]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c2_l3",
          "name": "Bài 3: Mol và tỉ khối chất khí",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "16 – 19",
          "subItems": [
            "I. Mol - 1. Khái niệm mol: lượng chất chứa $N_A$ [$6,022 \\times 10^{23}$] nguyên tử hoặc phân tử của chất đó.",
            "I. Mol - 2. Khối lượng mol [$M$]: khối lượng tính bằng gam của 1 mol chất, có trị số bằng nguyên tử khối hoặc phân tử khối [đơn vị g/mol].",
            "I. Mol - 3. Thể tích mol của chất khí: thể tích chiếm bởi 1 mol chất khí [$V = 24,79$ L ở $25^\\circ\\text{C}, 1\\text{ bar}$].",
            "II. Tỉ khối của chất khí - 1. Tỉ khối của chất khí A đối với chất khí B [$d_{A/B} = M_A / M_B$].",
            "II. Tỉ khối của chất khí - 2. Tỉ khối của chất khí A đối với không khí [$d_{A/kk} = M_A / 29$]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c2_l4",
          "name": "Bài 4: Dung dịch và nồng độ",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "20 – 23",
          "subItems": [
            "I. Dung dịch, chất tan và dung môi - Dung môi [chất có khả năng hoà tan chất khác]; Chất tan [chất bị hoà tan trong dung môi]; Dung dịch [hỗn hợp đồng nhất giữa dung môi và chất tan].",
            "I. Dung dịch, chất tan và dung môi - Dung dịch chưa bão hoà và dung dịch bão hoà ở nhiệt độ xác định.",
            "II. Độ tan - Khái niệm độ tan [$S$]: số gam chất đó tan được trong 100 gam nước để tạo thành dung dịch bão hoà ở một nhiệt độ xác định.",
            "II. Độ tan - Ảnh hưởng của nhiệt độ đến độ tan của chất rắn và chất khí.",
            "III. Nồng độ dung dịch - 1. Nồng độ phần trăm [$C\\% = \\frac{m_{ct}}{m_{dd}} \\times 100\\%$ với $m_{dd} = m_{ct} + m_{dm}$].",
            "III. Nồng độ dung dịch - 2. Nồng độ mol [$C_M = \\frac{n}{V}$ với $V$ tính bằng lít].",
            "IV. Thực hành pha chế dung dịch theo một nồng độ cho trước - 1. Tính toán lượng chất tan và lượng dung môi cần lấy.",
            "IV. Thực hành pha chế dung dịch theo một nồng độ cho trước - 2. Các bước tiến hành pha chế dung dịch có nồng độ phần trăm hoặc nồng độ mol cho trước."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c2_l5",
          "name": "Bài 5: Định luật bảo toàn khối lượng và phương trình hoá học",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "24 – 27",
          "subItems": [
            "I. Định luật bảo toàn khối lượng - 1. Nội dung định luật: Trong một phản ứng hoá học, tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng [$m_A + m_B = m_C + m_D$].",
            "I. Định luật bảo toàn khối lượng - 2. Áp dụng định luật: tính khối lượng của một chất khi biết khối lượng của các chất còn lại trong phản ứng.",
            "II. Phương trình hoá học - 1. Lập phương trình hoá học [3 bước: viết sơ đồ phản ứng, cân bằng số nguyên tử mỗi nguyên tố, viết phương trình hoá học].",
            "II. Phương trình hoá học - 2. Ý nghĩa của phương trình hoá học: cho biết tỉ lệ số nguyên tử, số phân tử giữa các chất trong phản ứng."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c2_l6",
          "name": "Bài 6: Tính theo phương trình hoá học",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "28 – 30",
          "subItems": [
            "I. Tính lượng chất trong phương trình hoá học - 1. Tính lượng chất phản ứng và lượng chất sinh ra theo số mol.",
            "I. Tính lượng chất trong phương trình hoá học - 2. Tính khối lượng hoặc thể tích chất khí ở điều kiện chuẩn [$25^\\circ\\text{C}, 1\\text{ bar}$] tham gia hoặc tạo thành sau phản ứng.",
            "II. Hiệu suất phản ứng - 1. Khái niệm hiệu suất phản ứng: tỉ lệ phần trăm giữa lượng sản phẩm thực tế thu được so với lượng sản phẩm tính theo lí thuyết [$H = \\frac{m_{tt}}{m_{lt}} \\times 100\\%$ hoặc $H = \\frac{n_{tt}}{n_{lt}} \\times 100\\%$].",
            "II. Hiệu suất phản ứng - 2. Tính hiệu suất phản ứng và tính lượng chất tham gia/sản phẩm có tính đến hiệu suất."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c2_l7",
          "name": "Bài 7: Tốc độ phản ứng và chất xúc tác",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "31 – 34",
          "subItems": [
            "I. Khái niệm tốc độ phản ứng - Định nghĩa tốc độ phản ứng: đại lượng đặc trưng cho sự nhanh hay chậm của một phản ứng hoá học xảy ra theo thời gian.",
            "II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng - 1. Ảnh hưởng của nồng độ [nồng độ chất phản ứng tăng làm tăng tốc độ phản ứng].",
            "II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng - 2. Ảnh hưởng của nhiệt độ [nhiệt độ tăng làm tăng tốc độ phản ứng].",
            "II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng - 3. Ảnh hưởng của diện tích bề mặt tiếp xúc [diện tích tiếp xúc tăng làm tăng tốc độ phản ứng của chất rắn].",
            "II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng - 4. Ảnh hưởng của chất xúc tác [chất làm tăng tốc độ phản ứng nhưng không bị biến đổi về lượng và chất sau phản ứng].",
            "II. Một số yếu tố ảnh hưởng đến tốc độ phản ứng - 5. Vận dụng các yếu tố ảnh hưởng tốc độ phản ứng trong thực tiễn đời sống và sản xuất."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c3",
      "name": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "lessons": [
        {
          "id": "8_c3_l8",
          "name": "Bài 8: Acid",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "35 – 38",
          "subItems": [
            "I. Khái niệm acid - Định nghĩa: Phân tử acid gồm có một hay nhiều nguyên tử hydrogen liên kết với gốc acid. Khi tan trong nước, acid tạo ra ion $H^+$. Công thức tổng quát $H_nA$.",
            "II. Tính chất hoá học của acid - 1. Làm đổi màu chất chỉ thị: làm giấy quỳ tím chuyển sang màu đỏ.",
            "II. Tính chất hoá học của acid - 2. Tác dụng với kim loại [đứng trước hydrogen] tạo thành muối và giải phóng khí hydrogen [$H_2$].",
            "III. Một số acid thông dụng - 1. Sulfuric acid [$H_2SO_4$]: tính chất, ứng dụng công nghiệp, lưu ý an toàn khi pha loãng dung dịch acid đặc [rót từ từ acid vào nước].",
            "III. Một số acid thông dụng - 2. Hydrochloric acid [$HCl$]: tính chất, ứng dụng tẩy gỉ thép, sản xuất hợp chất vô cơ/hữu cơ.",
            "III. Một số acid thông dụng - 3. Acetic acid [$CH_3COOH$]: tính chất, thành phần của giấm ăn, ứng dụng trong công nghiệp thực phẩm."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c3_l9",
          "name": "Bài 9: Base. Thang pH",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "39 – 43",
          "subItems": [
            "I. Khái niệm base - Định nghĩa: Phân tử base gồm có một nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide [$-OH$]. Khi tan trong nước, base tạo ra ion $OH^-$. Công thức tổng quát $M[OH]_n$.",
            "I. Khái niệm base - Tên gọi của base: Tên kim loại [kèm hoá trị nếu nhiều hoá trị] + hydroxide.",
            "II. Tính chất hoá học của base - 1. Làm đổi màu chất chỉ thị: Dung dịch kiềm làm quỳ tím chuyển sang màu xanh, làm phenolphthalein không màu chuyển sang màu hồng.",
            "II. Tính chất hoá học của base - 2. Tác dụng với acid: Tạo thành muối và nước [phản ứng trung hoà].",
            "III. Thang pH - 1. Ý nghĩa của thang pH [độ acid hoặc base của dung dịch từ 1 đến 14]: pH < 7 [môi trường acid], pH = 7 [môi trường trung tính], pH > 7 [môi trường base/kiềm].",
            "III. Thang pH - 2. Xác định pH bằng giấy chỉ thị pH hoặc thiết bị đo pH; ứng dụng pH trong kiểm tra đất trồng trọt, nước sinh hoạt, sức khoẻ con người."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c3_l10",
          "name": "Bài 10: Oxide",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "44 – 47",
          "subItems": [
            "I. Khái niệm oxide - 1. Định nghĩa: Oxide là hợp chất của hai nguyên tố, trong đó có một nguyên tố là oxygen.",
            "I. Khái niệm oxide - 2. Phân loại oxide: 4 loại gồm oxide acid, oxide base, oxide lưỡng tính và oxide trung tính.",
            "I. Khái niệm oxide - 3. Tên gọi oxide: Tên nguyên tố [kèm hoá trị đối với kim loại/tiền tố chỉ số nguyên tử đối với phi kim] + oxide.",
            "II. Tính chất hoá học của oxide - 1. Oxide acid: Tác dụng với nước tạo acid; tác dụng với dung dịch base tạo muối và nước.",
            "II. Tính chất hoá học của oxide - 2. Oxide base: Tác dụng với acid tạo muối và nước; một số oxide base tác dụng với nước tạo dung dịch kiềm.",
            "II. Tính chất hoá học của oxide - 3. Oxide lưỡng tính [$Al_2O_3, ZnO$]: Tác dụng được với cả dung dịch acid và dung dịch kiềm.",
            "II. Tính chất hoá học của oxide - 4. Oxide trung tính [$CO, NO$]: Không tác dụng với acid, base, nước ở điều kiện thường."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c3_l11",
          "name": "Bài 11: Muối",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "48 – 52",
          "subItems": [
            "I. Khái niệm muối - 1. Định nghĩa: Muối là hợp chất gồm một hay nhiều nguyên tử kim loại [hoặc nhóm $NH_4^+$] liên kết với một hay nhiều gốc acid.",
            "I. Khái niệm muối - 2. Tên gọi của muối: Tên kim loại [kèm hoá trị nếu kim loại nhiều hoá trị] + Tên gốc acid.",
            "II. Tính tan của muối - Tra cứu bảng tính tan: nhận biết muối tan tốt, muối ít tan và muối không tan [kết tủa như $BaSO_4, AgCl, CaCO_3$].",
            "III. Tính chất hoá học của muối - 1. Tác dụng với kim loại: Kim loại tự do đẩy kim loại yếu hơn ra khỏi dung dịch muối.",
            "III. Tính chất hoá học của muối - 2. Tác dụng với acid: Tạo thành muối mới và acid mới.",
            "III. Tính chất hoá học của muối - 3. Tác dụng với dung dịch base: Tạo thành muối mới và base mới.",
            "III. Tính chất hoá học của muối - 4. Tác dụng với dung dịch muối khác: Tạo thành hai muối mới.",
            "III. Tính chất hoá học của muối - Phản ứng trao đổi trong dung dịch và điều kiện xảy ra [sản phẩm có chất kết tủa hoặc chất bay hơi hoặc nước].",
            "IV. Điều chế muối - Các phương pháp điều chế: acid + base, acid + oxide base, acid + muối, oxide acid + base, dung dịch muối + dung dịch muối; khai thác từ tự nhiên [muối mỏ, nước biển].",
            "V. Mối quan hệ giữa các hợp chất vô cơ - Sơ đồ chuyển hoá qua lại giữa kim loại, phi kim, oxide base, oxide acid, base, acid và muối."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c3_l12",
          "name": "Bài 12: Phân bón hoá học",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "53 – 55",
          "subItems": [
            "I. Vai trò của các nguyên tố hoá học đối với sự phát triển của cây trồng - 1. Lí do cần bổ sung nguyên tố dinh dưỡng cho cây trồng.",
            "I. Vai trò của các nguyên tố hoá học đối với sự phát triển của cây trồng - 2. Nhóm nguyên tố đa lượng [N, P, K], trung lượng [Ca, Mg, S] và vi lượng [Fe, Zn, Cu, B, Mn...].",
            "II. Một số loại phân bón thông thường - 1. Phân đạm [chứa N: kích thích sinh trưởng cành lá, tạo chất diệp lục].",
            "II. Một số loại phân bón thông thường - 2. Phân lân [chứa P: thúc đẩy phát triển bộ rễ, phân hoá mầm hoa].",
            "II. Một số loại phân bón thông thường - 3. Phân kali [chứa K: tăng tích luỹ tinh bột, đường, tăng sức đề kháng].",
            "II. Một số loại phân bón thông thường - 4. Phân hỗn hợp NPK [chứa cả 3 nguyên tố N, P, K theo tỉ lệ thích hợp].",
            "III. Cách sử dụng phân bón - Nguyên tắc sử dụng phân bón hiệu quả và an toàn [quy tắc 4 đúng: đúng loại, đúng liều lượng, đúng thời điểm, đúng phương pháp].",
            "III. Cách sử dụng phân bón - Tác hại của việc lạm dụng phân bón hoá học [gây chua đất, ô nhiễm nguồn nước ngầm, ảnh hưởng sức khoẻ con người]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c4",
      "name": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "8_c4_l13",
          "name": "Bài 13: Khối lượng riêng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "56 – 58",
          "subItems": [
            "I. Thí nghiệm - Khảo sát tỉ số giữa khối lượng và thể tích [$m/V$] của các khối vật thể cùng chất hoặc khác chất.",
            "II. Khối lượng riêng, đơn vị khối lượng riêng - 1. Khái niệm khối lượng riêng: khối lượng của một mét khối [$1\\text{ m}^3$] một chất [$D = \\frac{m}{V}$].",
            "II. Khối lượng riêng, đơn vị khối lượng riêng - 2. Đơn vị đo: $\\text{kg/m}^3$ hoặc $\\text{g/cm}^3$ [$1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$].",
            "II. Khối lượng riêng, đơn vị khối lượng riêng - 3. Ý nghĩa khối lượng riêng của các chất rắn, lỏng, khí."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c4_l14",
          "name": "Bài 14: Thực hành xác định khối lượng riêng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "59 – 63",
          "subItems": [
            "I. Xác định khối lượng riêng của một vật hình hộp chữ nhật - 1. Chuẩn bị [cân điện tử, thước đo chiều dài].",
            "I. Xác định khối lượng riêng của một vật hình hộp chữ nhật - 2. Cách tiến hành [đo kích thước $a, b, c \\rightarrow V = a \\times b \\times c$; cân khối lượng $m \\rightarrow D = m/V$].",
            "I. Xác định khối lượng riêng của một vật hình hộp chữ nhật - 3. Kết quả đo và tính toán sai số.",
            "II. Xác định khối lượng riêng của một lượng nước - 1. Chuẩn bị [cân, ống đong hoặc cốc chia độ].",
            "II. Xác định khối lượng riêng của một lượng nước - 2. Cách tiến hành [xác định khối lượng cốc rỗng $m_1$, khối lượng cốc chứa nước $m_2 \\rightarrow m = m_2 - m_1$; đọc thể tích $V \\rightarrow D = m/V$].",
            "II. Xác định khối lượng riêng của một lượng nước - 3. Kết quả đo.",
            "III. Xác định khối lượng riêng của một vật có hình dạng bất kì - 1. Chuẩn bị [vật rắn không thấm nước, cân, ống đong chứa nước].",
            "III. Xác định khối lượng riêng của một vật có hình dạng bất kì - 2. Cách tiến hành [đo thể tích vật bằng phương pháp bình chia độ chênh lệch mức nước $V = V_2 - V_1$, cân khối lượng $m \\rightarrow D = m/V$].",
            "III. Xác định khối lượng riêng của một vật có hình dạng bất kì - 3. Báo cáo thực hành và nhận xét kết quả."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c4_l15",
          "name": "Bài 15: Áp suất trên một bề mặt",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "64 – 66",
          "subItems": [
            "I. Áp lực là gì? - Khái niệm: Áp lực là lực ép có phương vuông góc với mặt bị ép.",
            "II. Áp suất - 1. Thí nghiệm về tác dụng của áp lực phụ thuộc vào độ lớn áp lực và diện tích bị ép.",
            "II. Áp suất - 2. Công thức tính áp suất: $p = \\frac{F}{s}$ [trong đó $F$ là áp lực tính bằng N, $s$ là diện tích bị ép tính bằng $\\text{m}^2$].",
            "II. Áp suất - 3. Đơn vị đo áp suất: Pascal [Pa], $1\\text{ Pa} = 1\\text{ N/m}^2$, $\\text{N/cm}^2$, Bar, Atm.",
            "II. Áp suất - 4. Công dụng của việc làm tăng, giảm áp suất trong đời sống và kĩ thuật [làm sắc lưỡi dao, bản xích xe tăng, móng nhà rộng...]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c4_l16",
          "name": "Bài 16: Áp suất chất lỏng. Áp suất khí quyển",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "67 – 72",
          "subItems": [
            "I. Áp suất chất lỏng - 1. Tác dụng của áp suất chất lỏng: chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật nhúng trong lòng nó; áp suất tăng theo độ sâu.",
            "I. Áp suất chất lỏng - 2. Sự truyền áp suất chất lỏng: Áp suất tác dụng vào chất lỏng được truyền nguyên vẹn theo mọi hướng [Nguyên lí Pascal]. Ứng dụng trong máy nén thuỷ lực [$F_2/F_1 = S_2/S_1$], phanh dầu ô tô.",
            "II. Áp suất khí quyển - 1. Sự tồn tại của áp suất khí quyển: Trái Đất được bao bọc bởi lớp khí quyển; không khí có trọng lượng nên gây áp suất lên mọi vật trên bề mặt Trái Đất theo mọi phương.",
            "II. Áp suất khí quyển - 2. Một số ảnh hưởng và ứng dụng của áp suất khí quyển [ống giác hút chân không, bình xịt, hút nước bằng ống hút, bơm tiêm, áp kế đo độ cao]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c4_l17",
          "name": "Bài 17: Lực đẩy Archimedes",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "73 – 75",
          "subItems": [
            "I. Lực đẩy tác dụng lên vật đặt trong chất lỏng - 1. Hiện tượng: Vật nhúng trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng thẳng đứng từ dưới lên trên.",
            "I. Lực đẩy tác dụng lên vật đặt trong chất lỏng - 2. Điều kiện chìm, nổi của vật: So sánh độ lớn giữa trọng lực $P$ và lực đẩy Archimedes $F_A$ [vật chìm khi $P > F_A$, lơ lửng khi $P = F_A$, nổi khi $P < F_A$] hoặc so sánh trọng lượng riêng $d_{vật}$ và $d_{lỏng}$.",
            "II. Độ lớn của lực đẩy Archimedes - 1. Thí nghiệm đo độ lớn lực đẩy Archimedes.",
            "II. Độ lớn của lực đẩy Archimedes - 2. Định luật Archimedes: Lực đẩy Archimedes có độ lớn bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ: $F_A = d \\times V$ [trong đó $d$ là trọng lượng riêng chất lỏng $\\text{N/m}^3$, $V$ là thể tích phần chất lỏng bị vật chiếm chỗ $\\text{m}^3$]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c5",
      "name": "Chương IV: TÁC DỤNG LÀM QUAY CỦA LỰC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "8_c5_l18",
          "name": "Bài 18: Tác dụng làm quay của lực. Moment lực",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "76 – 78",
          "subItems": [
            "I. Lực có thể làm quay vật - Hiện tượng lực tác dụng vào vật có trục quay cố định làm vật quay quanh trục [mở cánh cửa sổ, vặn bu lông bằng cờ lê, tay lái xe].",
            "II. Moment lực - 1. Khái niệm moment lực: đại lượng đặc trưng cho tác dụng làm quay của lực quanh một trục hoặc một điểm.",
            "II. Moment lực - 2. Các yếu tố ảnh hưởng: Tác dụng làm quay càng lớn khi độ lớn của lực càng lớn và giá của lực càng cách xa trục quay."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c5_l19",
          "name": "Bài 19: Đòn bẩy và ứng dụng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "79 – 83",
          "subItems": [
            "I. Tác dụng của đòn bẩy - 1. Điểm tựa [$O$], điểm tác dụng của lực nâng [$O_1$] và lực cản [$O_2$].",
            "I. Tác dụng của đòn bẩy - 2. Tác dụng làm đổi hướng lực và cho lợi về lực khi khoảng cách từ điểm tựa đến giá của lực nâng lớn hơn khoảng cách đến giá của lực cản [$OO_1 > OO_2$].",
            "II. Các loại đòn bẩy - 1. Đòn bẩy loại 1: Điểm tựa $O$ nằm giữa điểm tác dụng hai lực [kéo cắt giấy, bập bênh, xà beng].",
            "II. Các loại đòn bẩy - 2. Đòn bẩy loại 2: Điểm tác dụng lực cản nằm giữa điểm tựa và điểm tác dụng lực nâng [xe rùa, kẹp hạt dẻ].",
            "II. Các loại đòn bẩy - 3. Đòn bẩy loại 3: Điểm tác dụng lực nâng nằm giữa điểm tựa và điểm tác dụng lực cản [đũa gắp, kẹp nhíp, cần câu cá].",
            "III. Ứng dụng của đòn bẩy - 1. Bơm nước bằng tay.",
            "III. Ứng dụng của đòn bẩy - 2. Đòn bẩy trong cơ thể người [khớp đầu - cổ, cánh tay gập, cẳng chân].",
            "III. Ứng dụng của đòn bẩy - 3. Đòn bẩy trong các bộ phận xe đạp [bàn đạp, phanh tay]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c6",
      "name": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "8_c6_l20",
          "name": "Bài 20: Hiện tượng nhiễm điện do cọ xát",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "84 – 87",
          "subItems": [
            "I. Vật nhiễm điện - 1. Vật nhiễm điện [vật mang điện tích] có khả năng hút các vật khác nhẹ hoặc phóng tia lửa điện.",
            "I. Vật nhiễm điện - 2. Hai loại điện tích: điện tích dương [$+$] và điện tích âm [$-$]. Các điện tích cùng loại thì đẩy nhau, khác loại thì hút nhau.",
            "II. Giải thích sơ lược về sự nhiễm điện do cọ xát - 1. Cấu tạo nguyên tử: hạt nhân mang điện dương, electron mang điện âm.",
            "II. Giải thích sơ lược về sự nhiễm điện do cọ xát - 2. Sự dịch chuyển của electron: do cọ xát, electron có thể dịch chuyển từ vật này sang vật khác [vật nhận thêm electron nhiễm điện âm, vật mất bớt electron nhiễm điện dương].",
            "II. Giải thích sơ lược về sự nhiễm điện do cọ xát - 3. Các hiện tượng thực tế: sấm sét khi trời mưa dông, điện nghiệm kiểm tra nhiễm điện, cánh quạt bám bụi."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c6_l21",
          "name": "Bài 21: Dòng điện, nguồn điện",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "88 – 90",
          "subItems": [
            "I. Dòng điện và nguồn điện - 1. Khái niệm dòng điện: Dòng điện là dòng các điện tích dịch chuyển có hướng.",
            "I. Dòng điện và nguồn điện - 2. Nguồn điện: Thiết bị có khả năng cung cấp năng lượng điện để tạo ra và duy trì dòng điện trong mạch. Nguồn điện có hai cực: cực dương [$+$] và cực âm [$-$] [pin, acquy, máy phát điện].",
            "II. Vật dẫn điện và vật không dẫn điện - 1. Vật dẫn điện [chất dẫn điện]: Cho dòng điện chạy qua, có nhiều hạt mang điện tự do [kim loại: đồng, nhôm, sắt; than chì; dung dịch muối, acid, base].",
            "II. Vật dẫn điện và vật không dẫn điện - 2. Vật không dẫn điện [vật cách điện / chất cách điện]: Không cho dòng điện chạy qua, có rất ít hạt mang điện tự do [cao su, sứ, nhựa, thuỷ tinh, gỗ khô]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c6_l22",
          "name": "Bài 22: Mạch điện đơn giản",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "91 – 94",
          "subItems": [
            "I. Mạch điện và các bộ phận của mạch điện - 1. Mạch điện gồm nguồn điện, dây nối, thiết bị tiêu thụ điện và công tắc [khoá K].",
            "I. Mạch điện và các bộ phận của mạch điện - 2. Quy ước chiều dòng điện: Chiều từ cực dương qua dây nối và các thiết bị điện tới cực âm của nguồn điện.",
            "I. Mạch điện và các bộ phận của mạch điện - 3. Kí hiệu các bộ phận và vẽ sơ đồ mạch điện [nguồn điện, bóng đèn, công tắc đóng/mở, ampe kế, vôn kế, điện trở, biến trở, chuông điện].",
            "II. Công dụng của cầu chì, cầu dao tự động, rơle, chuông điện - 1. Cầu chì và cầu dao tự động [Aptomat]: Tự động ngắt mạch khi dòng điện quá tải hoặc chập mạch để bảo vệ an toàn cháy nổ.",
            "II. Công dụng của cầu chì, cầu dao tự động, rơle, chuông điện - 2. Rơle [Relay]: Thiết bị đóng ngắt mạch điện tự động nhờ tác dụng từ của dòng điện.",
            "II. Công dụng của cầu chì, cầu dao tự động, rơle, chuông điện - 3. Chuông điện: Thiết bị phát ra âm thanh báo hiệu khi có dòng điện chạy qua."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c6_l23",
          "name": "Bài 23: Tác dụng của dòng điện",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "95 – 98",
          "subItems": [
            "I. Tác dụng nhiệt - Dòng điện đi qua mọi vật dẫn thông thường đều làm vật dẫn nóng lên [bàn là, nồi cơm điện, bếp điện, mỏ hàn, dây tóc bóng đèn].",
            "II. Tác dụng phát sáng - Dòng điện có thể làm phát sáng đèn sợi đốt, đèn huỳnh quang, đèn LED, bút thử điện.",
            "III. Tác dụng hoá học - Dòng điện chạy qua dung dịch chất điện phân làm xảy ra phản ứng hoá học phân huỷ hoặc mạ kim loại [mạ đồng, mạ vàng, luyện nhôm, nạp điện cho acquy].",
            "IV. Tác dụng sinh lí - Dòng điện chạy qua cơ thể người và động vật gây co giật các cơ, ngưng thở, nghẽn tim; ứng dụng trong y học [máy sốc tim, châm cứu điện] và các biện pháp phòng chống điện giật an toàn."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c6_l24",
          "name": "Bài 24: Cường độ dòng điện và hiệu điện thế",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "99 – 101",
          "subItems": [
            "I. Cường độ dòng điện - 1. Thí nghiệm về độ sáng bóng đèn tương ứng mức độ mạnh yếu của dòng điện.",
            "I. Cường độ dòng điện - 2. Khái niệm cường độ dòng điện [$I$]: đặc trưng cho độ mạnh yếu của dòng điện. Đơn vị đo là ampe [A] hoặc miliampe [mA]. Dụng cụ đo là ampe kế [mắc nối tiếp].",
            "II. Hiệu điện thế - 1. Thí nghiệm về khả năng sinh ra dòng điện của nguồn điện.",
            "II. Hiệu điện thế - 2. Khái niệm hiệu điện thế [$U$]: đặc trưng cho khả năng sinh ra dòng điện giữa hai điểm trong mạch điện. Đơn vị đo là vôn [V], milivôn [mV], kilovôn [kV]. Dụng cụ đo là vôn kế [mắc song song]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c6_l25",
          "name": "Bài 25: Thực hành đo cường độ dòng điện và hiệu điện thế",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "102 – 104",
          "subItems": [
            "I. Chuẩn bị - Bộ thí nghiệm điện: nguồn điện [pin], bóng đèn, ampe kế, vôn kế, công tắc, dây nối.",
            "II. Cách tiến hành - 1. Đo cường độ dòng điện: mắc ampe kế nối tiếp với bóng đèn, đóng khoá K, đọc số chỉ trên các thang đo.",
            "II. Cách tiến hành - 2. Đo hiệu điện thế: mắc vôn kế song song với hai đầu bóng đèn hoặc hai cực của nguồn điện, đọc và ghi kết quả.",
            "II. Cách tiến hành - 3. Báo cáo thực hành: nhận xét cường độ dòng điện tại các vị trí trong đoạn mạch nối tiếp và hiệu điện thế giữa hai đầu bóng đèn."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c7",
      "name": "Chương VI: NHIỆT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "8_c7_l26",
          "name": "Bài 26: Năng lượng nhiệt và nội năng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "105 – 108",
          "subItems": [
            "I. Một số tính chất của phân tử, nguyên tử - 1. Các chất cấu tạo từ các nguyên tử, phân tử chuyển động không ngừng; nhiệt độ càng cao các phân tử chuyển động càng nhanh.",
            "I. Một số tính chất của phân tử, nguyên tử - 2. Giữa các nguyên tử, phân tử có lực hút và lực đẩy tương tác.",
            "II. Khái niệm năng lượng nhiệt - Năng lượng nhiệt của một vật là tổng động năng của các phân tử cấu tạo nên vật.",
            "III. Khái niệm nội năng - 1. Động năng và thế năng của phân tử, nguyên tử.",
            "III. Khái niệm nội năng - 2. Nội năng: tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.",
            "III. Khái niệm nội năng - 3. Sự tăng, giảm nội năng: làm thay đổi nội năng bằng hai cách [thực hiện công hoặc truyền nhiệt]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c7_l27",
          "name": "Bài 27: Thực hành đo năng lượng nhiệt bằng joulemeter",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "109 – 111",
          "subItems": [
            "I. Chuẩn bị - Nhiệt lượng kế, nhiệt kế, joulemeter, dây điện trở nhiệt, nguồn điện, nước.",
            "II. Cách tiến hành - 1. Mắc mạch điện và cài đặt joulemeter ở chế độ đo năng lượng [J].",
            "II. Cách tiến hành - 2. Đun nóng lượng nước xác định, ghi nhận độ tăng nhiệt độ $\\Delta t$ tương ứng năng lượng nhiệt hiển thị trên joulemeter.",
            "II. Cách tiến hành - 3. Xử lí số liệu và viết báo cáo thực hành."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c7_l28",
          "name": "Bài 28: Sự truyền nhiệt",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "112 – 117",
          "subItems": [
            "I. Dẫn nhiệt - 1. Hiện tượng dẫn nhiệt: sự truyền nhiệt năng từ phần này sang phần khác của một vật hoặc giữa hai vật tiếp xúc.",
            "I. Dẫn nhiệt - 2. Vật dẫn nhiệt tốt [kim loại: bạc, đồng, nhôm] và vật cách nhiệt tốt / dẫn nhiệt kém [gỗ, xốp, không khí, thuỷ tinh].",
            "II. Đối lưu - 1. Thí nghiệm về dòng đối lưu trong chất lỏng và chất khí.",
            "II. Đối lưu - 2. Sự truyền nhiệt bằng đối lưu: sự truyền nhiệt bằng các dòng chất lỏng hoặc chất khí chuyển động đối lưu [dòng chất nóng đi lên, dòng chất lạnh chìm xuống].",
            "III. Bức xạ nhiệt - 1. Thí nghiệm về sự truyền nhiệt trong chân không.",
            "III. Bức xạ nhiệt - 2. Sự truyền nhiệt bằng bức xạ nhiệt: sự truyền nhiệt bằng các tia nhiệt đi thẳng; có thể truyền trong chân không; vật có bề mặt đen, xù xì hấp thụ bức xạ nhiệt tốt hơn bề mặt trắng, nhẵn.",
            "III. Bức xạ nhiệt - 3. Hiệu ứng nhà kính: cơ chế giữ nhiệt của khí quyển Trái Đất và tác động của biến đổi khí hậu toàn cầu."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c7_l29",
          "name": "Bài 29: Sự nở vì nhiệt",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "118 – 122",
          "subItems": [
            "I. Sự nở vì nhiệt của chất rắn - Chất rắn nở ra khi nóng lên, co lại khi lạnh đi; các chất rắn khác nhau nở vì nhiệt khác nhau [nhôm > đồng > sắt].",
            "II. Sự nở vì nhiệt của chất lỏng - Chất lỏng nở ra khi nóng lên, co lại khi lạnh đi; các chất lỏng khác nhau nở vì nhiệt khác nhau.",
            "III. Sự nở vì nhiệt của chất khí - Chất khí nở ra khi nóng lên, co lại khi lạnh đi; các chất khí khác nhau nở vì nhiệt giống nhau. So sánh độ nở vì nhiệt: Chất khí > Chất lỏng > Chất rắn.",
            "IV. Công dụng và tác hại của sự nở vì nhiệt - 1. Công dụng: Hoạt động của nhiệt kế, rơle nhiệt sử dụng băng kép [hai thanh kim loại có độ giãn nở nhiệt khác nhau ghép chặt].",
            "IV. Công dụng và tác hại của sự nở vì nhiệt - 2. Tác hại: Tạo ra lực rất lớn làm biến dạng đường ray xe lửa, nứt cầu cống, nổ vỏ lốp xe khi trời nắng nóng; biện pháp khắc phục [khe hở co giãn ở nhịp cầu, đường ray]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c8",
      "name": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "lessons": [
        {
          "id": "8_c8_l30",
          "name": "Bài 30: Khái quát về cơ thể người",
          "domain": "Vật sống [Sinh học]",
          "pages": "123 – 124",
          "subItems": [
            "I. Khái quát về cơ thể người - Cấu tạo cơ thể người gồm 3 phần: đầu, thân và các chi [tay, chân].",
            "I. Khái quát về cơ thể người - Các khoang cơ thể: khoang ngực và khoang bụng ngăn cách bởi cơ hoành.",
            "II. Vai trò của các cơ quan và hệ cơ quan trong cơ thể người - Các hệ cơ quan chính: hệ vận động, hệ tiêu hoá, hệ tuần hoàn, hệ hô hấp, hệ bài tiết, hệ thần kinh, hệ nội tiết, hệ sinh dục.",
            "II. Vai trò của các cơ quan và hệ cơ quan trong cơ thể người - Mối quan hệ phối hợp hoạt động nhịp nhàng giữa các hệ cơ quan dưới sự điều khiển của hệ thần kinh và hệ nội tiết."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l31",
          "name": "Bài 31: Hệ vận động ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "125 – 127",
          "subItems": [
            "I. Cấu tạo và chức năng của hệ vận động - 1. Cấu tạo của hệ vận động: bộ xương [xương đầu, xương thân, xương chi; các khớp xương: khớp bất động, khớp bán động, khớp động] và hệ cơ [cơ bắp bám xương, cơ chế co duỗi cơ đối kháng].",
            "I. Cấu tạo và chức năng của hệ vận động - 2. Chức năng của hệ vận động: tạo bộ khung nâng đỡ, bảo vệ các nội quan và thực hiện cử động, di chuyển.",
            "II. Một số bệnh, tật liên quan đến hệ vận động - 1. Tật cong vẹo cột sống [nguyên nhân do tư thế ngồi sai, mang vác lệch; biện pháp phòng tránh].",
            "II. Một số bệnh, tật liên quan đến hệ vận động - 2. Bệnh loãng xương [nguyên nhân do thiếu hụt calcium, vitamin D, lão hoá; cách phòng chống].",
            "III. Ý nghĩa của tập thể dục, thể thao - Ý nghĩa tăng cường lưu thông máu, phát triển cơ bắp, tăng độ dẻo dai của xương khớp và lựa chọn phương pháp tập luyện phù hợp lứa tuổi.",
            "IV. Thực hành: Sơ cứu và băng bó khi người khác bị gãy xương - 1. Mục tiêu và chuẩn bị [nẹp gỗ/tre, băng gạc, dây buộc rộng bản].",
            "IV. Thực hành: Sơ cứu và băng bó khi người khác bị gãy xương - 2. Các bước tiến hành sơ cứu gãy xương cẳng tay.",
            "IV. Thực hành: Sơ cứu và băng bó khi người khác bị gãy xương - 3. Những lưu ý an toàn khi cố định nẹp và chăm sóc nạn nhân."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l32",
          "name": "Bài 32: Dinh dưỡng và tiêu hoá ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "128 – 134",
          "subItems": [
            "I. Khái niệm chất dinh dưỡng và dinh dưỡng - Phân biệt chất dinh dưỡng [cacbohydrate, lipid, protein, vitamin, chất khoáng, nước] và dinh dưỡng [quá trình thu nhận, biến đổi và sử dụng chất dinh dưỡng].",
            "II. Tiêu hoá ở người - 1. Cấu tạo và chức năng của hệ tiêu hoá: ống tiêu hoá [khoang miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn] và tuyến tiêu hoá [tuyến nước bọt, tuyến gan, tuyến mật, tuyến tuỵ, tuyến ruột].",
            "II. Tiêu hoá ở người - 2. Quá trình tiêu hoá ở người: biến đổi cơ học [nhai, đảo trộn, nghiền] và biến đổi hoá học [nhờ enzyme tiêu hoá phân giải chất phức tạp thành chất đơn giản hấp thụ tại ruột non].",
            "III. Một số bệnh về đường tiêu hoá - 1. Bệnh sâu răng [cơ chế hình thành mảng bám vi khuẩn tạo acid phá huỷ men răng, ngà răng; cách chăm sóc răng miệng].",
            "III. Một số bệnh về đường tiêu hoá - 2. Bệnh viêm loét dạ dày – tá tràng [nguyên nhân do vi khuẩn Helicobacter pylori, stress, chế độ ăn uống không điều độ; cách phòng tránh].",
            "IV. Chế độ dinh dưỡng ở người - 1. Khái niệm khẩu phần ăn hợp lí: đủ năng lượng và cân đối 4 nhóm chất dinh dưỡng.",
            "IV. Chế độ dinh dưỡng ở người - 2. Xây dựng khẩu phần ăn theo nhu cầu lứa tuổi học sinh THCS.",
            "V. An toàn vệ sinh thực phẩm - Khái niệm an toàn thực phẩm; ngộ độc thực phẩm; nguyên nhân gây mất an toàn [hoá chất độc hại, vi sinh vật, bảo quản sai cách]; biện pháp bảo quản và chế biến thực phẩm an toàn.",
            "VI. Dự án: Điều tra một số bệnh đường tiêu hoá và vệ sinh an toàn thực phẩm - Mục tiêu, lập phiếu điều tra, thu thập số liệu và đề xuất giải pháp tại trường học hoặc địa phương."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l33",
          "name": "Bài 33: Máu và hệ tuần hoàn của cơ thể người",
          "domain": "Vật sống [Sinh học]",
          "pages": "135 – 141",
          "subItems": [
            "I. Máu - 1. Các thành phần của máu: Huyết tương [chiếm 55%, vận chuyển chất dinh dưỡng, hormone, chất thải] và Tế bào máu [chiếm 45% gồm hồng cầu vận chuyển $O_2$ và $CO_2$, bạch cầu bảo vệ cơ thể, tiểu cầu tham gia đông máu].",
            "I. Máu - 2. Miễn dịch và vaccine: Cơ chế miễn dịch tự nhiên và nhân tạo; vai trò tiêm chủng vaccine kích thích tạo kháng thể đặc hiệu.",
            "I. Máu - 3. Nhóm máu và truyền máu: Hệ nhóm máu ABO [A, B, AB, O]; kháng nguyên trên hồng cầu và kháng thể trong huyết tương; nguyên tắc truyền máu an toàn [tránh hiện tượng ngưng kết hồng cầu].",
            "II. Hệ tuần hoàn - 1. Cấu tạo của hệ tuần hoàn: Tim [4 ngăn: 2 tâm nhĩ, 2 tâm thất] và Hệ mạch [động mạch, mao mạch, tĩnh mạch].",
            "II. Hệ tuần hoàn - 2. Vòng tuần hoàn lớn [vận chuyển máu giàu $O_2$ nuôi cơ thể] và Vòng tuần hoàn nhỏ [vận chuyển máu lên phổi trao đổi khí].",
            "III. Một số bệnh về máu và tim mạch - Bệnh thiếu máu, bệnh huyết áp cao, bệnh xơ vữa động mạch [nguyên nhân, triệu chứng và biện pháp phòng tránh].",
            "IV. Thực hành: Sơ cứu người bị chảy máu, đột quỵ - Kĩ thuật băng ép cầm máu tĩnh mạch/mao mạch; kĩ thuật garô cầm máu động mạch; nhận biết dấu hiệu đột quỵ [FAST] và xử trí ban đầu.",
            "V. Dự án: Điều tra bệnh về máu, tim mạch và phong trào hiến máu nhân đạo - Tìm hiểu ý nghĩa nhân văn và điều kiện tham gia phong trào hiến máu nhân đạo."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l34",
          "name": "Bài 34: Hệ hô hấp ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "142 – 145",
          "subItems": [
            "I. Cấu tạo và chức năng của hệ hô hấp - 1. Cấu tạo của hệ hô hấp: Đường dẫn khí [mũi, họng, thanh quản, khí quản, phế quản] làm ấm, làm ẩm, sạch không khí và Hai lá phổi [chứa hàng triệu phế nang bao bọc bởi mạng mao mạch dày đặc].",
            "I. Cấu tạo và chức năng của hệ hô hấp - 2. Chức năng của hệ hô hấp: Thông khí ở phổi [hít vào - thở ra nhờ sự co dãn cơ liên sườn và cơ hoành] và Trao đổi khí [tại phế nang và tại tế bào theo cơ chế khuếch tán].",
            "II. Một số bệnh về phổi, đường hô hấp - 1. Viêm đường hô hấp [viêm họng, viêm phế quản do virus, vi khuẩn].",
            "II. Một số bệnh về phổi, đường hô hấp - 2. Bệnh viêm phổi và bệnh lao phổi [triệu chứng, con đường lây truyền và cách phòng chống].",
            "III. Thuốc lá và tác hại của khói thuốc lá - Thành phần khói thuốc [nicotine, khí CO, hắc ín/tar]; tác hại gây ung thư phổi, bệnh phổi tắc nghẽn mạn tính [COPD], xơ vữa mạch máu đối với người hút chủ động và thụ động.",
            "IV. Thực hành: Hô hấp nhân tạo, cấp cứu người đuối nước - 1. Phương pháp hà hơi thổi ngạt.",
            "IV. Thực hành: Hô hấp nhân tạo, cấp cứu người đuối nước - 2. Phương pháp ép tim ngoài lồng ngực kết hợp thổi ngạt theo chu kì 30 lần ép : 2 lần thổi."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l35",
          "name": "Bài 35: Hệ bài tiết ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "146 – 149",
          "subItems": [
            "I. Cấu tạo và chức năng của hệ bài tiết - 1. Khái niệm bài tiết: Quá trình lọc và thải các chất cặn bã, chất độc hại ra khỏi cơ thể [qua phổi, da, thận].",
            "I. Cấu tạo và chức năng của hệ bài tiết - 2. Cấu tạo của hệ bài tiết nước tiểu: Hai quả thận, hai ống dẫn nước tiểu, bóng đái [bàng quang] và ống đái.",
            "I. Cấu tạo và chức năng của hệ bài tiết - 3. Đơn vị chức năng của thận [nephron]: Cầu thận, nang cầu thận và ống thận; quá trình tạo thành nước tiểu [lọc máu ở cầu thận, hấp thụ lại và bài tiết tiếp ở ống thận].",
            "II. Một số bệnh về hệ bài tiết - 1. Bệnh sỏi thận [nguyên nhân do lắng đọng muối khoáng calcium, oxalate do uống ít nước, ăn mặn].",
            "II. Một số bệnh về hệ bài tiết - 2. Bệnh viêm cầu thận và suy thận [nguyên nhân, hậu quả đối với cơ thể].",
            "III. Một số thành tựu ghép thận, chạy thận nhân tạo - 1. Ghép thận: Phẫu thuật thay thế thận suy bằng thận lành từ người hiến tặng.",
            "III. Một số thành tựu ghép thận, chạy thận nhân tạo - 2. Chạy thận nhân tạo: Sử dụng máy lọc máu ngoài cơ thể để loại bỏ chất độc khi thận mất chức năng; ý nghĩa nhân đạo của hiến tạng.",
            "IV. Dự án: Điều tra một số bệnh về thận trong trường học hoặc địa phương - Tìm hiểu thói quen uống nước, nhịn tiểu và các biện pháp bảo vệ hệ bài tiết nước tiểu."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l36",
          "name": "Bài 36: Điều hoà môi trường trong của cơ thể người",
          "domain": "Vật sống [Sinh học]",
          "pages": "150 – 151",
          "subItems": [
            "I. Môi trường trong của cơ thể - Thành phần môi trường trong: Máu, nước mô [dịch mô] và bạch huyết; vai trò giúp tế bào trao đổi chất thường xuyên với môi trường ngoài.",
            "II. Cân bằng môi trường trong của cơ thể - 1. Khái niệm cân bằng nội môi: Duy trì sự ổn định các điều kiện lí - hoá của môi trường trong cơ thể [nhiệt độ, huyết áp, pH, nồng độ glucose, nồng độ muối khoáng...].",
            "II. Cân bằng môi trường trong của cơ thể - 2. Cơ chế điều hoà cân bằng nội môi: Bộ phận tiếp nhận kích thích -> Bộ phận điều khiển [thần kinh, nội tiết] -> Bộ phận thực hiện [gan, thận, tim, phổi...].",
            "II. Cân bằng môi trường trong của cơ thể - 3. Hậu quả khi mất cân bằng môi trường trong [bệnh tiểu đường khi glucose máu tăng cao, rối loạn huyết áp, mất nước...]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l37",
          "name": "Bài 37: Hệ thần kinh và các giác quan ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "152 – 156",
          "subItems": [
            "I. Hệ thần kinh - 1. Cấu tạo và chức năng của hệ thần kinh: Bộ phận trung ương [não bộ gồm đại não, não trung gian, tiểu não, trụ não và tuỷ sống] và Bộ phận ngoại biên [các dây thần kinh và hạch thần kinh].",
            "I. Hệ thần kinh - Phân chia theo chức năng: Hệ thần kinh vận động [điều khiển cơ vân có ý thức] và Hệ thần kinh sinh dưỡng [điều khiển cơ trơn, cơ tim, nội quan không theo ý thức].",
            "I. Hệ thần kinh - 2. Một số bệnh về thần kinh và chất gây nghiện: Bệnh mất ngủ, Parkinson, tai biến mạch máu não; tác hại của rượu bia, ma tuý, thuốc lắc làm thoái hoá neuron thần kinh, huỷ hoại nhân cách.",
            "II. Các giác quan - 1. Thị giác: Cấu tạo mắt [màng cứng, màng mạch, màng lưới/võng mạc chứa tế bào thụ cảm thị giác, thể thuỷ tinh]; cơ chế tạo ảnh trên màng lưới; tật khúc xạ [cận thị, viễn thị, loạn thị] và bệnh về mắt [đau mắt đỏ, đục thuỷ tinh thể]; vệ sinh thị giác học đường.",
            "II. Các giác quan - 2. Thính giác: Cấu tạo tai [tai ngoài: vành tai, ống tai; tai giữa: màng nhĩ, chuỗi xương tai, vòi tai; tai trong: ốc tai chứa tế bào thụ cảm thính giác]; đường truyền âm thanh; vệ sinh tai và bảo vệ thính giác chống ô nhiễm tiếng ồn."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l38",
          "name": "Bài 38: Hệ nội tiết ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "157 – 159",
          "subItems": [
            "I. Các tuyến nội tiết trong cơ thể người - Đặc điểm tuyến nội tiết: không có ống dẫn, chất tiết là hormone ngấm thẳng vào máu đến cơ quan đích.",
            "I. Các tuyến nội tiết trong cơ thể người - Các tuyến nội tiết chính: 1. Tuyến yên [tuyến chủ đạo điều hoà hoạt động các tuyến khác]; 2. Tuyến giáp [tiết thyroxine điều hoà trao đổi chất và sinh trưởng]; 3. Tuyến tuỵ [tuyến pha: tiết insulin làm giảm glucose máu và glucagon làm tăng glucose máu]; 4. Tuyến trên thận [tiết adrenaline điều hoà tim mạch, huyết áp trong trạng thái khẩn cấp]; 5. Tuyến sinh dục [tinh hoàn tiết testosterone ở nam, buồng trứng tiết estrogen ở nữ].",
            "II. Một số bệnh liên quan đến hệ nội tiết - 1. Bệnh đái tháo đường [nguyên nhân do thiếu hụt hoặc giảm hiệu lực insulin dẫn đến đường huyết tăng cao; triệu chứng và cách kiểm soát].",
            "II. Một số bệnh liên quan đến hệ nội tiết - 2. Bệnh bướu cổ do thiếu iodine [nguyên nhân do thiếu hụt iodine trong khẩu phần ăn làm tuyến giáp phì đại; biện pháp dùng muối iod]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l39",
          "name": "Bài 39: Da và điều hoà thân nhiệt ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "160 – 164",
          "subItems": [
            "I. Da người - 1. Cấu tạo của da: 3 lớp gồm Lớp biểu bì [tầng sừng, tầng tế bào sống chứa hạt sắc tố melanin], Lớp bì [thụ quan, tuyến mồ hôi, tuyến nhờn, cơ co chân lông, mạch máu, sợi mô liên kết] và Lớp mỡ dưới da [cách nhiệt, đệm cơ học].",
            "I. Da người - 2. Chức năng của da: Bảo vệ cơ thể, điều hoà thân nhiệt, tiếp nhận kích thích xúc giác, bài tiết và dự trữ mỡ.",
            "I. Da người - 3. Bệnh về da và bảo vệ da: Bệnh mụn trứng cá, hắc lào, lang ben, bỏng da; biện pháp giữ gìn vệ sinh da, trang điểm an toàn và thành tựu ghép da y học.",
            "II. Điều hoà thân nhiệt ở người - 1. Khái niệm thân nhiệt: Nhiệt độ cơ thể người bình thường ổn định quanh mức $36,5^\\circ\\text{C} - 37^\\circ\\text{C}$; ý nghĩa và cách đo thân nhiệt.",
            "II. Điều hoà thân nhiệt ở người - 2. Vai trò và cơ chế duy trì thân nhiệt: Sự cân bằng giữa quá trình sinh nhiệt [chuyển hoá ở cơ, gan] và toả nhiệt [qua da, toát mồ hôi, dãn/co mạch máu, hô hấp]; vai trò trung tâm điều nhiệt ở não.",
            "II. Điều hoà thân nhiệt ở người - 3. Phương pháp phòng chống nóng, lạnh: Chống say nắng, chống cảm lạnh, giữ ấm mùa đông, mặc đồ thoáng mát mùa hè, cung cấp đủ nước."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c8_l40",
          "name": "Bài 40: Sinh sản ở người",
          "domain": "Vật sống [Sinh học]",
          "pages": "165 – 169",
          "subItems": [
            "I. Hệ sinh dục - 1. Cơ quan sinh dục nam: Tinh hoàn [sản xuất tinh trùng và tiết testosterone], mào tinh, ống dẫn tinh, túi tinh, tuyến tiền liệt, dương vật.",
            "I. Hệ sinh dục - 2. Cơ quan sinh dục nữ: Buồng trứng [sản xuất trứng và tiết estrogen, progesterone], ống dẫn trứng [vòi fallop], tử cung [nơi thai làm tổ], âm đạo.",
            "II. Thụ tinh và thụ thai - 1. Thụ tinh: Quá trình tinh trùng kết hợp với tế bào trứng tạo thành hợp tử, thường diễn ra tại $1/3$ phía ngoài ống dẫn trứng.",
            "II. Thụ tinh và thụ thai - 2. Thụ thai: Hợp tử di chuyển về tử cung, phân chia thành phôi và bám vào lớp niêm mạc tử cung để làm tổ và phát triển thành thai nhi.",
            "III. Hiện tượng kinh nguyệt và các biện pháp tránh thai - 1. Hiện tượng kinh nguyệt: Chu kì rụng trứng [khoảng 28 - 30 ngày]; khi trứng không thụ tinh thì thể vàng teo, lớp niêm mạc tử cung bong ra kèm máu thoát ra ngoài.",
            "III. Hiện tượng kinh nguyệt và các biện pháp tránh thai - 2. Các biện pháp tránh thai: Sử dụng bao cao su, thuốc tránh thai, đặt vòng, tính ngày rụng trứng, triệt sản; ý nghĩa của việc tránh mang thai ngoài ý muốn ở lứa tuổi vị thành niên.",
            "IV. Một số bệnh lây truyền qua đường sinh dục và bảo vệ sức khoẻ sinh sản - 1. Bệnh lây qua đường tình dục [STDs]: HIV/AIDS, giang mai, lậu, viêm gan B [con đường lây truyền và cách phòng tránh].",
            "IV. Một số bệnh lây truyền qua đường sinh dục và bảo vệ sức khoẻ sinh sản - 2. Bảo vệ sức khoẻ sinh sản vị thành niên: Chăm sóc vệ sinh tuổi dậy thì, trang bị kĩ năng sống, kiến thức giới tính an toàn, phòng chống xâm hại tình dục."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "8_c9",
      "name": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "lessons": [
        {
          "id": "8_c9_l41",
          "name": "Bài 41: Môi trường và các nhân tố sinh thái",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "170 – 173",
          "subItems": [
            "I. Môi trường sống - 1. Khái niệm môi trường sống: Nơi sinh sống của sinh vật bao gồm tất cả những gì bao quanh sinh vật có tác động trực tiếp hoặc gián tiếp đến sự tồn tại của chúng.",
            "I. Môi trường sống - 2. Các loại môi trường sống chủ yếu: Môi trường cạn [trên cạn], môi trường nước [nước ngọt, nước mặn, nước lợ], môi trường đất và môi trường sinh vật.",
            "II. Nhân tố sinh thái - 1. Khái niệm: Các nhân tố môi trường có tác động đến sinh vật.",
            "II. Nhân tố sinh thái - 2. Phân loại nhân tố sinh thái: Nhân tố vô sinh [ánh sáng, nhiệt độ, độ ẩm, đất, nước...] và Nhân tố hữu sinh [thực vật, động vật, vi sinh vật và nhân tố con người tác động có ý thức].",
            "II. Nhân tố sinh thái - 3. Ảnh hưởng của nhân tố sinh thái [ánh sáng, nhiệt độ] đến hình thái, sinh lí và tập tính của sinh vật [cây ưa sáng, cây ưa bóng, động vật hằng nhiệt, biến nhiệt].",
            "III. Giới hạn sinh thái - Khái niệm giới hạn sinh thái: Khoảng giá trị của một nhân tố sinh thái mà trong đó sinh vật có thể tồn tại và phát triển ổn định [điểm cực thuận, giới hạn dưới, giới hạn trên, khoảng chống chịu]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l42",
          "name": "Bài 42: Quần thể sinh vật",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "174 – 176",
          "subItems": [
            "I. Khái niệm quần thể sinh vật - Định nghĩa: Tập hợp các cá thể cùng loài, cùng sinh sống trong một khoảng không gian xác định, vào một thời điểm nhất định và có khả năng sinh sản tạo ra thế hệ mới hữu thụ.",
            "II. Các đặc trưng cơ bản của quần thể - 1. Kích thước quần thể [số lượng cá thể hoặc khối lượng, năng lượng tích luỹ trong quần thể].",
            "II. Các đặc trưng cơ bản của quần thể - 2. Mật độ cá thể trong quần thể [số lượng cá thể trên một đơn vị diện tích hoặc thể tích sống; đặc trưng quan trọng nhất].",
            "II. Các đặc trưng cơ bản của quần thể - 3. Tỉ lệ giới tính [tỉ lệ giữa số cá thể đực và cá thể cái].",
            "II. Các đặc trưng cơ bản của quần thể - 4. Nhóm tuổi [nhóm trước sinh sản, nhóm sinh sản, nhóm sau sinh sản].",
            "II. Các đặc trưng cơ bản của quần thể - 5. Phân bố cá thể trong quần thể: Phân bố theo nhóm [phổ biến nhất], phân bố đồng đều và phân bố ngẫu nhiên.",
            "III. Biện pháp bảo vệ quần thể - Bảo vệ nơi sống của quần thể, khai thác hợp lí động thực vật quý hiếm, xây dựng khu bảo tồn thiên nhiên, vườn quốc gia."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l43",
          "name": "Bài 43: Quần xã sinh vật",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "177 – 179",
          "subItems": [
            "I. Khái niệm quần xã sinh vật - Định nghĩa: Tập hợp các quần thể sinh vật thuộc nhiều loài khác nhau, cùng sống trong một không gian và thời gian xác định, có mối quan hệ gắn bó hữu cơ với nhau như một thể thống nhất.",
            "II. Một số đặc trưng cơ bản của quần xã - 1. Độ phong phú về loài [độ đa dạng về số lượng loài và số cá thể của mỗi loài trong quần xã].",
            "II. Một số đặc trưng cơ bản của quần xã - 2. Thành phần loài: Loài ưu thế [loài đóng vai trò quan trọng, số lượng cá thể lớn, sinh khối cao] và Loài đặc trưng [loài chỉ có ở một quần xã hoặc có số lượng nhiều hơn hẳn các loài khác].",
            "III. Bảo vệ đa dạng sinh học trong quần xã - 1. Bảo vệ môi trường sống của các loài sinh vật.",
            "III. Bảo vệ đa dạng sinh học trong quần xã - 2. Cấm săn bắt buôn bán động vật hoang dã nguy cấp.",
            "III. Bảo vệ đa dạng sinh học trong quần xã - 3. Trồng rừng ngập mặn ven biển, phòng chống cháy rừng.",
            "III. Bảo vệ đa dạng sinh học trong quần xã - 4. Nâng cao ý thức cộng đồng về bảo tồn đa dạng sinh học."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l44",
          "name": "Bài 44: Hệ sinh thái",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "180 – 184",
          "subItems": [
            "I. Hệ sinh thái - 1. Khái niệm hệ sinh thái: Hệ thống hoàn chỉnh gồm quần xã sinh vật và sinh cảnh [môi trường vô sinh nơi quần xã sống], trong đó các sinh vật tương tác lẫn nhau và tác động qua lại với sinh cảnh.",
            "I. Hệ sinh thái - 2. Thành phần cấu trúc của hệ sinh thái: Thành phần vô sinh [khí hậu, đất, nước, xác sinh vật] và Thành phần hữu sinh [Sinh vật sản xuất: thực vật, tảo; Sinh vật tiêu thụ: động vật ăn thực vật, động vật ăn thịt; Sinh vật phân giải: vi khuẩn, nấm, giun đất].",
            "I. Hệ sinh thái - 3. Các kiểu hệ sinh thái: Hệ sinh thái tự nhiên [trên cạn: rừng nhiệt đới, sa mạc; dưới nước: nước ngọt, biển] và Hệ sinh thái nhân tạo [đồng ruộng, đô thị, hồ cá].",
            "II. Trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái - 1. Chuỗi thức ăn: Dãy gồm nhiều loài sinh vật có mối quan hệ dinh dưỡng với nhau, mỗi loài là một mắt xích [thức ăn của mắt xích phía sau và ăn mắt xích phía trước].",
            "II. Trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái - 2. Lưới thức ăn: Tập hợp các chuỗi thức ăn có các mắt xích chung trong một hệ sinh thái.",
            "II. Trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái - 3. Tháp sinh thái [tháp số lượng, tháp sinh khối, tháp năng lượng] và dòng năng lượng một chiều trong hệ sinh thái.",
            "III. Bảo vệ các hệ sinh thái - Bảo vệ các hệ sinh thái rừng, hệ sinh thái biển, hệ sinh thái nông nghiệp tại Việt Nam.",
            "IV. Thực hành: Điều tra thành phần quần xã sinh vật trong một hệ sinh thái - Quan sát, ghi chép thành phần loài, lập chuỗi và lưới thức ăn trong hệ sinh thái tại địa phương."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l45",
          "name": "Bài 45: Sinh quyển",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "185 – 187",
          "subItems": [
            "I. Khái niệm sinh quyển - Định nghĩa: Toàn bộ sinh vật sống trên Trái Đất cùng với các nhân tố vô sinh của môi trường tạo nên sinh quyển.",
            "I. Khái niệm sinh quyển - Giới hạn sinh quyển: Bao gồm toàn bộ tầng đối lưu của khí quyển, thuỷ quyển và phần trên thạch quyển [lớp đất đá bề mặt].",
            "II. Các khu sinh học chủ yếu - 1. Khu sinh học trên cạn: Đồng rêu hàn đới [tundra], rừng lá kim phương Bắc [taiga], rừng rụng lá ôn đới, thảo nguyên ôn đới, xavan đồng cỏ nhiệt đới, rừng nhiệt đới ẩm, sa mạc và bán sa mạc.",
            "II. Các khu sinh học chủ yếu - 2. Khu sinh học nước ngọt: Vùng nước đứng [ao, hồ, đầm lầy] và Vùng nước chảy [sông, suối].",
            "II. Các khu sinh học chủ yếu - 3. Khu sinh học biển: Vùng ven bờ [rạn san hô, rừng ngập mặn] và Vùng khơi [tầng mặt, tầng giữa, tầng đáy biển sâu]."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l46",
          "name": "Bài 46: Cân bằng tự nhiên",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "188 – 190",
          "subItems": [
            "I. Khái niệm cân bằng tự nhiên - 1. Trạng thái cân bằng của quần thể: Số lượng cá thể dao động quanh mức cân bằng phù hợp với khả năng cung cấp nguồn sống của môi trường.",
            "I. Khái niệm cân bằng tự nhiên - 2. Khống chế sinh học trong quần xã: Hiện tượng số lượng cá thể của một loài bị khống chế ở mức nhất định do mối quan hệ sinh thái [vật ăn thịt - con mồi, vật kí sinh - vật chủ]; ứng dụng thiên địch phòng trừ sâu hại.",
            "I. Khái niệm cân bằng tự nhiên - 3. Cân bằng tự nhiên trong hệ sinh thái: Sự ổn định về cấu trúc loài, tỉ lệ sinh khối và chu trình tuần hoàn vật chất.",
            "II. Nguyên nhân mất cân bằng tự nhiên và các biện pháp bảo vệ, duy trì cân bằng tự nhiên - 1. Nguyên nhân: Tác động tự nhiên [núi lửa, động đất, lũ lụt, cháy rừng] và Hoạt động của con người [phá rừng, săn bắt quá mức, ô nhiễm môi trường, đưa sinh vật ngoại lai xâm hại].",
            "II. Nguyên nhân mất cân bằng tự nhiên và các biện pháp bảo vệ, duy trì cân bằng tự nhiên - 2. Biện pháp duy trì cân bằng tự nhiên: Trồng cây gây rừng, sử dụng hợp lí tài nguyên, bảo vệ đa dạng sinh học, kiểm soát sinh vật ngoại lai, ứng dụng biện pháp sinh học trong nông nghiệp."
          ],
          "part2Hosts": []
        },
        {
          "id": "8_c9_l47",
          "name": "Bài 47: Bảo vệ môi trường",
          "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
          "pages": "191 – 194",
          "subItems": [
            "I. Tác động của con người đối với môi trường qua các thời kì - 1. Thời kì nguyên thuỷ [săn bắt, hái lượm, biết dùng lửa tác động cục bộ].",
            "I. Tác động của con người đối với môi trường qua các thời kì - 2. Thời kì xã hội nông nghiệp [trồng trọt, chăn nuôi, khai phá đất rừng làm nương rẫy].",
            "I. Tác động của con người đối với môi trường qua các thời kì - 3. Thời kì xã hội công nghiệp và hậu công nghiệp [khai thác cạn kiệt khoáng sản, nhiên liệu hoá thạch, đô thị hoá, xả thải công nghiệp quy mô toàn cầu].",
            "II. Ô nhiễm môi trường - 1. Khái niệm ô nhiễm môi trường: Hiện tượng môi trường bị thay đổi tính chất vật lí, hoá học, sinh học gây hại cho sức khoẻ con người và sinh vật.",
            "II. Ô nhiễm môi trường - 2. Các nguyên nhân gây ô nhiễm: Ô nhiễm do chất thải sinh hoạt và công nghiệp; ô nhiễm do hoá chất bảo vệ thực vật; ô nhiễm do phóng xạ; ô nhiễm do tác nhân sinh học.",
            "II. Ô nhiễm môi trường - 3. Biện pháp hạn chế ô nhiễm: Xử lí rác thải, nước thải trước khi xả ra môi trường; phát triển năng lượng sạch [gió, mặt trời]; tái chế rác thải; hạn chế sử dụng đồ nhựa một lần.",
            "III. Biến đổi khí hậu - 1. Khái niệm và biểu hiện: Nhiệt độ Trái Đất ấm lên, nước biển dâng, gia tăng thiên tai cực đoan [bão lũ, hạn hán].",
            "III. Biến đổi khí hậu - 2. Các biện pháp thích ứng và giảm nhẹ biến đổi khí hậu [tiết kiệm năng lượng, trồng rừng, chuyển đổi cơ cấu cây trồng chịu mặn/hạn].",
            "IV. Bảo vệ động vật hoang dã - Ý nghĩa và các hành động bảo vệ động vật hoang dã có nguy cơ tuyệt chủng [cấm buôn bán ngà voi, tê tê, nuôi nhốt gấu trái phép]."
          ],
          "part2Hosts": []
        }
      ]
    }
  ],
  "9": [
    {
      "id": "9_c1",
      "name": "Chương MỞ ĐẦU: NHẬN BIẾT MỘT SỐ DỤNG CỤ, HOÁ CHẤT. THUYẾT TRÌNH MỘT VẤN ĐỀ KHOA HỌC",
      "domain": "Phương pháp và kĩ năng khoa học",
      "lessons": [
        {
          "id": "9_c1_l1",
          "name": "Bài 1: Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học",
          "domain": "Phương pháp và kĩ năng khoa học",
          "pages": "6 – 14",
          "subItems": [
            "I. Giới thiệu một số dụng cụ và cách sử dụng - 1. Một số dụng cụ thí nghiệm quang học: Nguồn sáng [đèn sợi đốt 12V, đèn laser], Bản bán trụ và bảng chia độ, Bộ dụng cụ tìm hiểu tính chất ảnh qua thấu kính [thấu kính hội tụ, thấu kính phân kì, màn chắn, vật F, giá quang học].",
            "I. Giới thiệu một số dụng cụ và cách sử dụng - 2. Một số dụng cụ thí nghiệm điện từ: Điện kế [phát hiện dòng điện cảm ứng], Đồng hồ đo điện đa năng [đo $I, U, R$], Cuộn dây dẫn kín có hai đèn LED song song ngược cực.",
            "I. Giới thiệu một số dụng cụ và cách sử dụng - 3. Một số dụng cụ thí nghiệm tìm hiểu chất và biến đổi chất [ống nghiệm chịu nhiệt, ống sinh hàn, phễu chiết...].",
            "I. Giới thiệu một số dụng cụ và cách sử dụng - 4. Dụng cụ dùng trong quan sát nhiễm sắc thể [kính hiển vi quang học, lam kính, lamen, kim mũi mác].",
            "II. Một số hoá chất cơ bản trong phòng thí nghiệm - Các hoá chất thường dùng trong KHTN 9 [kim loại, phi kim, acid, base, muối, hợp chất hữu cơ] và quy tắc an toàn khi sử dụng.",
            "III. Viết và trình bày báo cáo một vấn đề khoa học - 1. Cấu trúc báo cáo khoa học [Giới thiệu, Phương pháp, Kết quả, Thảo luận, Kết luận, Kiến nghị].",
            "III. Viết và trình bày báo cáo một vấn đề khoa học - 2. Báo cáo treo tường [Poster khoa học: bố cục, hình ảnh, biểu đồ, kích thước chữ].",
            "IV. Bài thuyết trình một vấn đề khoa học - 1. Thuyết trình trên các phần mềm trình chiếu [PowerPoint, Canva...].",
            "IV. Bài thuyết trình một vấn đề khoa học - 2. Kĩ năng thuyết trình và phản biện khoa học trước tập thể."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c2",
      "name": "Chương I: NĂNG LƯỢNG CƠ HỌC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "9_c2_l2",
          "name": "Bài 2: Động năng. Thế năng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "15 – 17",
          "subItems": [
            "I. Động năng - 1. Khái niệm: Dạng năng lượng mà một vật có được do nó đang chuyển động gọi là động năng.",
            "I. Động năng - 2. Các yếu tố ảnh hưởng đến động năng: Động năng của vật phụ thuộc vào khối lượng [$m$] và tốc độ [$v$] của vật [vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn].",
            "II. Thế năng - 1. Thế năng trọng trường: Dạng năng lượng vật có được khi ở một độ cao so với mặt đất [hoặc vật mốc]; phụ thuộc vào khối lượng và độ cao của vật.",
            "II. Thế năng - 2. Thế năng đàn hồi: Dạng năng lượng vật có được khi bị biến dạng đàn hồi [lò xo bị nén hoặc kéo dãn, cung tên giương căng]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c2_l3",
          "name": "Bài 3: Cơ năng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "18 – 20",
          "subItems": [
            "I. Cơ năng - Định nghĩa: Cơ năng là tổng động năng và thế năng của vật [$W = W_đ + W_t$].",
            "II. Sự chuyển hoá năng lượng - 1. Sự chuyển hoá qua lại giữa động năng và thế năng trong chuyển động của vật [con lắc đơn, vật rơi tự do, bóng ném lên cao].",
            "II. Sự chuyển hoá năng lượng - 2. Định luật bảo toàn cơ năng [khi bỏ qua lực cản/ma sát]: Trong quá trình chuyển động, cơ năng của vật được bảo toàn [thế năng giảm thì động năng tăng và ngược lại]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c2_l4",
          "name": "Bài 4: Công và công suất",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "21 – 24",
          "subItems": [
            "I. Công cơ học - 1. Điều kiện có công cơ học: Khi có lực tác dụng vào vật và làm vật dịch chuyển theo phương không vuông góc với lực.",
            "I. Công cơ học - 2. Công thức tính công: $A = F \\times s$ [trong đó $F$ là lực tác dụng tính bằng N, $s$ là quãng đường dịch chuyển theo hướng của lực tính bằng m].",
            "I. Công cơ học - 3. Đơn vị đo công: Jun [J], $1\\text{ J} = 1\\text{ N} \\times 1\\text{ m}$; kilôjun [kJ].",
            "II. Công suất - 1. Khái niệm công suất: Đại lượng đặc trưng cho tốc độ thực hiện công, được tính bằng công thực hiện trong một đơn vị thời gian [$P = \\frac{A}{t}$].",
            "II. Công suất - 2. Đơn vị đo công suất: Oát [W], $1\\text{ W} = 1\\text{ J/s}$; kilôoát [kW], mã lực [HP]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c3",
      "name": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "9_c3_l5",
          "name": "Bài 5: Khúc xạ ánh sáng",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "25 – 29",
          "subItems": [
            "I. Hiện tượng khúc xạ ánh sáng - Hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác.",
            "II. Định luật khúc xạ ánh sáng - 1. Tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới.",
            "II. Định luật khúc xạ ánh sáng - 2. Chiết suất môi trường và góc tới - góc khúc xạ: Khi tia sáng truyền từ không khí vào nước/thuỷ tinh thì góc khúc xạ nhỏ hơn góc tới [$r < i$]; khi truyền từ nước/thuỷ tinh ra không khí thì $r > i$."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c3_l6",
          "name": "Bài 6: Phản xạ toàn phần",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "30 – 33",
          "subItems": [
            "I. Sự truyền ánh sáng từ môi trường chiết quang hơn sang môi trường chiết quang kém - Khảo sát góc khúc xạ $r$ tăng dần theo góc tới $i$ cho đến khi $r = 90^\\circ$.",
            "II. Hiện tượng phản xạ toàn phần - 1. Định nghĩa: Hiện tượng toàn bộ tia sáng tới bị phản xạ ngược trở lại môi trường trong suốt ban đầu tại mặt phân cách.",
            "II. Hiện tượng phản xạ toàn phần - 2. Góc tới giới hạn [$i_{gh}$]: $\\sin[i_{gh}] = n_2 / n_1$.",
            "II. Hiện tượng phản xạ toàn phần - 3. Điều kiện xảy ra phản xạ toàn phần: Ánh sáng truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém [$n_1 > n_2$] và góc tới lớn hơn hoặc bằng góc giới hạn [$i \\ge i_{gh}$].",
            "II. Hiện tượng phản xạ toàn phần - 4. Ứng dụng: Cáp quang truyền dẫn thông tin internet, nội soi y học, giải thích hiện tượng ảo ảnh trên sa mạc hoặc mặt đường nhựa nắng nóng."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c3_l7",
          "name": "Bài 7: Lăng kính",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "34 – 39",
          "subItems": [
            "I. Cấu tạo của lăng kính - Lăng kính là khối chất trong suốt, đồng tính, thường có dạng lăng trụ tam giác [tiết diện thẳng là tam giác; đỉnh, đáy, cạnh, các mặt bên].",
            "II. Hiện tượng tán sắc ánh sáng - Hiện tượng chùm ánh sáng trắng khi đi qua lăng kính bị phân tách thành dải màu biến đổi liên tục từ đỏ đến tím [Đỏ, da cam, vàng, lục, lam, chàm, tím].",
            "II. Hiện tượng tán sắc ánh sáng - Tia đỏ bị lệch ít nhất, tia tím bị lệch nhiều nhất.",
            "III. Sự truyền ánh sáng đơn sắc qua lăng kính - Ánh sáng đơn sắc là ánh sáng có một màu nhất định và không bị tán sắc khi đi qua lăng kính; tia sáng luôn bị lệch về phía đáy của lăng kính.",
            "IV. Màu sắc của vật - Màu sắc của vật được nhìn thấy phụ thuộc vào màu của ánh sáng mà vật đó phản xạ hoặc tán xạ vào mắt người [vật màu đỏ phản xạ ánh sáng đỏ, hấp thụ các màu khác; vật màu trắng phản xạ tất cả; vật màu đen hấp thụ tất cả]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c3_l8",
          "name": "Bài 8: Thấu kính",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "40 – 46",
          "subItems": [
            "I. Cấu tạo thấu kính và phân loại - 1. Thấu kính hội tụ [rìa mỏng]: Chùm sáng song song qua thấu kính cho chùm khúc xạ hội tụ tại một điểm.",
            "I. Cấu tạo thấu kính và phân loại - 2. Thấu kính phân kì [rìa dày]: Chùm sáng song song qua thấu kính cho chùm khúc xạ phân kì.",
            "II. Trục chính, quang tâm, tiêu điểm chính và tiêu cự của thấu kính - Trục chính [$Delta$], quang tâm [$O$], tiêu điểm chính [$F$ và $F'$ đối xứng qua $O$], tiêu cự [$f = OF = OF'$].",
            "III. Đường truyền của các tia sáng đặc biệt qua thấu kính - 1. Tia tới qua quang tâm $O$ truyền thẳng.",
            "III. Đường truyền của các tia sáng đặc biệt qua thấu kính - 2. Tia tới song song với trục chính cho tia khúc xạ [hoặc đường kéo dài] đi qua tiêu điểm chính $F'$.",
            "III. Đường truyền của các tia sáng đặc biệt qua thấu kính - 3. Tia tới qua tiêu điểm chính $F$ cho tia khúc xạ song song với trục chính.",
            "IV. Sự tạo ảnh của một vật qua thấu kính - 1. Dựng ảnh của một điểm sáng $S$ và vật sáng nhỏ $AB$ vuông góc với trục chính.",
            "IV. Sự tạo ảnh của một vật qua thấu kính - 2. Đặc điểm ảnh tạo bởi thấu kính hội tụ [ảnh thật ngược chiều hoặc ảnh ảo cùng chiều lớn hơn vật].",
            "IV. Sự tạo ảnh của một vật qua thấu kính - 3. Đặc điểm ảnh tạo bởi thấu kính phân kì [luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c3_l9",
          "name": "Bài 9: Thực hành đo tiêu cự của thấu kính hội tụ",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "47 – 49",
          "subItems": [
            "I. Chuẩn bị - Nguồn sáng [đèn chiếu], vật F, thấu kính hội tụ, màn chắn, giá quang học đồng trục có chia vạch mm.",
            "II. Cách tiến hành - 1. Phương pháp đo tiêu cự theo phương pháp Silbermann: Dịch chuyển vật và màn chắn sao cho thu được ảnh thật rõ nét trên màn có kích thước bằng vật [$d = d' = 2f \\rightarrow f = \\frac{d + d'}{4}$].",
            "II. Cách tiến hành - 2. Đo đạc, ghi số liệu bảng thực hành và tính toán giá trị trung bình tiêu cự $\\bar{f}$."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c3_l10",
          "name": "Bài 10: Kính lúp. Bài tập thấu kính",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "50 – 52",
          "subItems": [
            "I. Cấu tạo kính lúp - Kính lúp là thấu kính hội tụ có tiêu cự ngắn [$f < 25\\text{ cm}$], dùng để quan sát các vật nhỏ; số bội giác $G = 25/f$.",
            "II. Cách quan sát một vật nhỏ qua kính lúp - Đặt vật trong khoảng tiêu cự của kính lúp [$d < f$] để thu được ảnh ảo, cùng chiều, lớn hơn vật nằm trong giới hạn nhìn rõ của mắt.",
            "III. Bài tập về thấu kính - Vận dụng công thức hình học tam giác đồng dạng hoặc hệ thức thấu kính $\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d'}$ để tính vị trí ảnh, tiêu cự, chiều cao ảnh."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c4",
      "name": "Chương III: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "9_c4_l11",
          "name": "Bài 11: Điện trở. Định luật Ohm",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "53 – 59",
          "subItems": [
            "I. Điện trở - 1. Khái niệm điện trở: Đại lượng biểu thị mức độ cản trở dòng điện của vật dẫn.",
            "I. Điện trở - 2. Kí hiệu và đơn vị điện trở: Ôm [$\\Omega$], kilôôm [$\\text{k}\\Omega$], mêgaôm [$\\text{M}\\Omega$].",
            "II. Sự phụ thuộc của cường độ dòng điện vào hiệu điện thế - Cường độ dòng điện chạy qua một dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn đó [$I \\sim U$].",
            "III. Định luật Ohm - Nội dung định luật: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: $I = \\frac{U}{R}$.",
            "IV. Điện trở của dây dẫn phụ thuộc vào kích thước và bản chất của dây dẫn - 1. Sự phụ thuộc của điện trở vào chiều dài dây [$R \\sim l$].",
            "IV. Điện trở của dây dẫn phụ thuộc vào kích thước và bản chất của dây dẫn - 2. Sự phụ thuộc của điện trở vào tiết diện dây [$R \\sim 1/S$].",
            "IV. Điện trở của dây dẫn phụ thuộc vào kích thước và bản chất của dây dẫn - 3. Sự phụ thuộc của điện trở vào vật liệu làm dây [điện trở suất $\\rho$].",
            "IV. Điện trở của dây dẫn phụ thuộc vào kích thước và bản chất của dây dẫn - 4. Công thức tính điện trở: $R = \\rho \\frac{l}{S}$."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c4_l12",
          "name": "Bài 12: Đoạn mạch nối tiếp, song song",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "60 – 63",
          "subItems": [
            "I. Đoạn mạch nối tiếp - 1. Đặc điểm: $I = I_1 = I_2 = \\dots = I_n$; $U = U_1 + U_2 + \\dots + U_n$.",
            "I. Đoạn mạch nối tiếp - 2. Điện trở tương đương của đoạn mạch nối tiếp: $R_{tđ} = R_1 + R_2 + \\dots + R_n$ [$R_{tđ}$ luôn lớn hơn từng điện trở thành phần].",
            "II. Đoạn mạch song song - 1. Đặc điểm: $U = U_1 = U_2 = \\dots = U_n$; $I = I_1 + I_2 + \\dots + I_n$.",
            "II. Đoạn mạch song song - 2. Điện trở tương đương của đoạn mạch song song: $\\frac{1}{R_{tđ}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots + \\frac{1}{R_n}$ [đối với hai điện trở: $R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}$, $R_{tđ}$ luôn nhỏ hơn từng điện trở thành phần]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c4_l13",
          "name": "Bài 13: Năng lượng của dòng điện và công suất điện",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "64 – 66",
          "subItems": [
            "I. Năng lượng điện [Điện năng] - 1. Khái niệm: Năng lượng của dòng điện [điện năng] có thể chuyển hoá thành các dạng năng lượng khác [nhiệt năng, quang năng, cơ năng...].",
            "I. Năng lượng điện [Điện năng] - 2. Công thức tính năng lượng điện tiêu thụ: $A = W = U \\cdot I \\cdot t$ [trong đó $U$ tính bằng V, $I$ tính bằng A, $t$ tính bằng giây; $A$ tính bằng Jun [J] hoặc kWh, $1\\text{ kWh} = 3,6 \\times 10^6\\text{ J}$].",
            "I. Năng lượng điện [Điện năng] - 3. Công tơ điện: Dụng cụ đo lượng điện năng tiêu thụ trong gia đình.",
            "II. Công suất điện - 1. Khái niệm: Đại lượng đặc trưng cho tốc độ tiêu thụ điện năng [$P = \\frac{A}{t} = U \\cdot I$].",
            "II. Công suất điện - 2. Đơn vị: Oát [W], kilôoát [kW].",
            "III. Công suất điện định mức - Số vôn và số oát ghi trên thiết bị điện [$U_{đm}, P_{đm}$]; ý nghĩa hoạt động bình thường của thiết bị ở hiệu điện thế định mức; tính tiền điện gia đình."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c5",
      "name": "Chương IV: ĐIỆN TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "lessons": [
        {
          "id": "9_c5_l14",
          "name": "Bài 14: Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "67 – 71",
          "subItems": [
            "I. Dòng điện cảm ứng - Thí nghiệm tạo dòng điện trong cuộn dây dẫn kín khi đưa nam châm lại gần hoặc ra xa cuộn dây.",
            "II. Hiện tượng cảm ứng điện từ - 1. Điều kiện xuất hiện dòng điện cảm ứng: Khi số đường sức từ xuyên qua tiết diện của cuộn dây dẫn kín biến thiên [tăng hoặc giảm].",
            "II. Hiện tượng cảm ứng điện từ - 2. Nguyên tắc tạo ra dòng điện xoay chiều: Cho cuộn dây quay trong từ trường hoặc cho nam châm quay trước cuộn dây dẫn kín làm số đường sức từ luân phiên tăng giảm, tạo ra dòng điện có chiều luân phiên thay đổi [dòng điện xoay chiều AC].",
            "II. Hiện tượng cảm ứng điện từ - 3. Cấu tạo và hoạt động của máy phát điện xoay chiều [nam châm - phần cảm, cuộn dây - phần ứng]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c5_l15",
          "name": "Bài 15: Tác dụng của dòng điện xoay chiều",
          "domain": "Năng lượng và sự biến đổi [Vật lí]",
          "pages": "72 – 74",
          "subItems": [
            "I. Tác dụng nhiệt - Dòng điện xoay chiều chạy qua vật dẫn làm vật dẫn nóng lên [ấm điện, bàn là, nồi chiên không dầu].",
            "II. Tác dụng phát sáng - Làm phát sáng đèn dây tóc, đèn huỳnh quang, đèn LED.",
            "III. Tác dụng từ - Dòng điện xoay chiều chạy qua cuộn dây hút đinh sắt, làm quay kim nam châm; lực từ đổi chiều khi dòng điện đổi chiều.",
            "IV. Tác dụng sinh lí - Dòng điện xoay chiều gây co giật cơ, có thể làm ngưng tim, ngạt thở nếu bị giật điện; các biện pháp phòng tránh tai nạn điện gia đình."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c6",
      "name": "Chương V: NĂNG LƯỢNG VỚI CUỘC SỐNG",
      "domain": "Trái Đất và bầu trời / Vật lí",
      "lessons": [
        {
          "id": "9_c6_l16",
          "name": "Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch",
          "domain": "Trái Đất và bầu trời / Vật lí",
          "pages": "75 – 79",
          "subItems": [
            "I. Vòng năng lượng trên Trái Đất - Năng lượng Mặt Trời là nguồn năng lượng sơ cấp chủ yếu; sự chuyển hoá năng lượng mặt trời thành hoá năng trong quang hợp, tạo gió, vòng tuần hoàn nước.",
            "II. Năng lượng hoá thạch - 1. Các loại nhiên liệu hoá thạch chính: Than đá, dầu mỏ, khí thiên nhiên [được hình thành qua hàng triệu năm từ xác sinh vật cổ đại].",
            "II. Năng lượng hoá thạch - 2. Tình trạng cạn kiệt nguồn năng lượng hoá thạch và tác động ô nhiễm môi trường [khí thải $CO_2, SO_2$, bụi mịn gây hiệu ứng nhà kính và mưa acid]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c6_l17",
          "name": "Bài 17: Một số dạng năng lượng tái tạo",
          "domain": "Trái Đất và bầu trời / Vật lí",
          "pages": "80 – 86",
          "subItems": [
            "I. Năng lượng tái tạo - Khái niệm: Năng lượng tái tạo là năng lượng từ các nguồn tự nhiên liên tục được bổ sung hoặc không bị cạn kiệt [năng lượng mặt trời, năng lượng gió, thuỷ triều, địa nhiệt, sinh khối].",
            "II. Ưu điểm và nhược điểm của một số dạng năng lượng tái tạo - 1. Năng lượng mặt trời [ưu điểm: dồi dào, sạch; nhược điểm: phụ thuộc thời tiết, chi phí pin mặt trời].",
            "II. Ưu điểm và nhược điểm của một số dạng năng lượng tái tạo - 2. Năng lượng gió [ưu điểm: vô tận, không khí thải; nhược điểm: chiếm diện tích, tiếng ồn, ảnh hưởng chim chóc].",
            "II. Ưu điểm và nhược điểm của một số dạng năng lượng tái tạo - 3. Năng lượng thuỷ triều và sóng biển.",
            "II. Ưu điểm và nhược điểm của một số dạng năng lượng tái tạo - 4. Năng lượng sinh khối [biomass / biogas].",
            "III. Một số biện pháp sử dụng hiệu quả năng lượng và bảo vệ môi trường - Tiết kiệm điện năng, sử dụng thiết bị dán nhãn năng lượng, chuyển dịch cơ cấu sang năng lượng xanh, bảo vệ khí hậu toàn cầu."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c7",
      "name": "Chương VI: KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "lessons": [
        {
          "id": "9_c7_l18",
          "name": "Bài 18: Tính chất chung của kim loại",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "87 – 91",
          "subItems": [
            "I. Tính chất vật lí của kim loại - 1. Tính dẻo [rèn, dát mỏng, kéo sợi: vàng, nhôm, đồng].",
            "I. Tính chất vật lí của kim loại - 2. Tính dẫn điện [bạc > đồng > vàng > nhôm > sắt].",
            "I. Tính chất vật lí của kim loại - 3. Tính dẫn nhiệt.",
            "I. Tính chất vật lí của kim loại - 4. Ánh kim [chế tạo đồ trang sức, gương soi].",
            "I. Tính chất vật lí của kim loại - 5. Nhiệt độ nóng chảy và khối lượng riêng [kim loại nhẹ, kim loại nặng, kim loại vonfam chịu nhiệt làm dây tóc bóng đèn].",
            "II. Tính chất hoá học của kim loại - 1. Tác dụng với phi kim [tác dụng với oxygen tạo oxide; tác dụng với phi kim khác như $Cl_2, S$ tạo muối].",
            "II. Tính chất hoá học của kim loại - 2. Tác dụng với dung dịch acid [kim loại đứng trước H đẩy được $H_2$ ra khỏi dung dịch $HCl, H_2SO_4$ loãng].",
            "II. Tính chất hoá học của kim loại - 3. Tác dụng với dung dịch muối [kim loại hoạt động mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c7_l19",
          "name": "Bài 19: Dãy hoạt động hoá học",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "92 – 94",
          "subItems": [
            "I. Xây dựng dãy hoạt động hoá học - Thí nghiệm so sánh mức độ hoạt động hoá học giữa các kim loại: K, Na, Ca, Mg, Al, Zn, Fe, Pb, [H], Cu, Ag, Au.",
            "II. Ý nghĩa của dãy hoạt động hoá học của kim loại - 1. Mức độ hoạt động hoá học của kim loại giảm dần từ trái sang phải.",
            "II. Ý nghĩa của dãy hoạt động hoá học của kim loại - 2. Kim loại đứng trước Mg [K, Na, Ca] phản ứng với nước ở nhiệt độ thường giải phóng $H_2$.",
            "II. Ý nghĩa của dãy hoạt động hoá học của kim loại - 3. Kim loại đứng trước H phản ứng với dung dịch acid loãng giải phóng $H_2$.",
            "II. Ý nghĩa của dãy hoạt động hoá học của kim loại - 4. Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối [trừ K, Na, Ca]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c7_l20",
          "name": "Bài 20: Tách kim loại và việc sử dụng hợp kim",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "95 – 99",
          "subItems": [
            "I. Phương pháp tách kim loại - 1. Phương pháp nhiệt luyện [dùng CO, C, $H_2$ khử oxide kim loại trung bình và yếu: Fe, Zn, Cu].",
            "I. Phương pháp tách kim loại - 2. Phương pháp điện phân nóng chảy [tách kim loại hoạt động mạnh: Al, Na, Ca từ quặng bauxite, muối ăn].",
            "I. Phương pháp tách kim loại - 3. Phương pháp thuỷ luyện.",
            "II. Quá trình tách một số kim loại có nhiều ứng dụng - 1. Quá trình sản xuất gang và thép [nguyên liệu, phản ứng khử trong lò cao, chuyển gang thành thép trong lò luyện].",
            "II. Quá trình tách một số kim loại có nhiều ứng dụng - 2. Quá trình sản xuất nhôm từ quặng bauxite [$Al_2O_3$] bằng phương pháp điện phân nóng chảy có mặt criolit.",
            "III. Hợp kim - 1. Khái niệm hợp kim: Vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác.",
            "III. Hợp kim - 2. Một số hợp kim phổ biến [gang, thép, đura, đồng thau, inox] và ưu điểm vượt trội so với kim loại nguyên chất.",
            "IV. Sử dụng hợp kim và chống ăn mòn kim loại - Hiện tượng ăn mòn kim loại và các biện pháp bảo vệ [sơn phủ bề mặt, mạ kẹp, tra dầu mỡ, dùng kim loại hy sinh]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c7_l21",
          "name": "Bài 21: Sự khác nhau cơ bản giữa phi kim và kim loại",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "100 – 102",
          "subItems": [
            "I. Ứng dụng của một số phi kim quan trọng - 1. Carbon [than hoạt tính lọc nước, than chì làm điện cực, kim cương làm mũi khoan].",
            "I. Ứng dụng của một số phi kim quan trọng - 2. Oxygen, lưu huỳnh, chlorine [khử trùng nước, sản xuất acid, diêm, phân bón].",
            "II. Sự khác nhau cơ bản giữa phi kim và kim loại - 1. Về tính chất vật lí: Kim loại có ánh kim, dẫn điện, dẫn nhiệt tốt, có tính dẻo; Phi kim phần lớn không dẫn điện, không dẫn nhiệt [trừ than chì], giòn, đa dạng về trạng thái [khí $O_2, Cl_2$; lỏng $Br_2$; rắn $C, S, P$].",
            "II. Sự khác nhau cơ bản giữa phi kim và kim loại - 2. Về tính chất hoá học: Kim loại có xu hướng nhường electron, tạo oxide base; Phi kim có xu hướng nhận electron, tác dụng với hydrogen tạo hợp chất khí, tạo oxide acid."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c8",
      "name": "Chương VII: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "lessons": [
        {
          "id": "9_c8_l22",
          "name": "Bài 22: Giới thiệu về hợp chất hữu cơ",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "103 – 106",
          "subItems": [
            "I. Khái niệm hợp chất hữu cơ và hoá học hữu cơ - Hợp chất hữu cơ là hợp chất của carbon [trừ $CO, CO_2, H_2CO_3$, muối carbonate kim loại, carbide...]; Hoá học hữu cơ là ngành nghiên cứu các hợp chất hữu cơ.",
            "II. Công thức phân tử và công thức cấu tạo - 1. Công thức phân tử [cho biết thành phần nguyên tố và số lượng nguyên tử mỗi nguyên tố trong phân tử].",
            "II. Công thức phân tử và công thức cấu tạo - 2. Công thức cấu tạo [biểu diễn trật tự liên kết giữa các nguyên tử trong phân tử: công thức khai triển và công thức thu gọn].",
            "III. Đặc điểm cấu tạo hợp chất hữu cơ - Hoá trị của các nguyên tố trong hợp chất hữu cơ [C luôn có hoá trị IV, H hoá trị I, O hoá trị II]; mạch carbon [mạch hở không phân nhánh, mạch nhánh, mạch vòng].",
            "IV. Phân loại hợp chất hữu cơ - 1. Hydrocarbon [phân tử chỉ chứa hai nguyên tố C và H].",
            "IV. Phân loại hợp chất hữu cơ - 2. Dẫn xuất của hydrocarbon [ngoài C và H còn có các nguyên tố khác như O, N, Cl, S...]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c8_l23",
          "name": "Bài 23: Alkane",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "107 – 110",
          "subItems": [
            "I. Khái niệm hydrocarbon, alkane - Alkane là các hydrocarbon mạch hở, trong phân tử chỉ chứa các liên kết đơn $C-C$ và $C-H$ [công thức chung $C_nH_{2n+2}, n \\ge 1$].",
            "II. Cấu tạo phân tử và danh pháp của alkane - Tên gọi 4 alkane đầu tiên: Methane [$CH_4$], Ethane [$C_2H_6$], Propane [$C_3H_8$], Butane [$C_4H_{10}$]; mô hình phân tử tứ diện của methane.",
            "III. Phản ứng cháy của alkane - Phản ứng đốt cháy tạo thành $CO_2$ và $H_2O$, toả nhiều nhiệt: $C_nH_{2n+2} + \\frac{3n+1}{2}O_2 \\rightarrow nCO_2 + [n+1]H_2O$.",
            "IV. Ứng dụng làm nhiên liệu của alkane - Khí gas hoá lỏng [LPG], khí thiên nhiên [CNG], xăng, dầu diesel; an toàn chống cháy nổ rò rỉ khí gas."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c8_l24",
          "name": "Bài 24: Alkene",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "111 – 113",
          "subItems": [
            "I. Khái niệm alkene - Alkene là những hydrocarbon mạch hở, trong phân tử có chứa một liên kết đôi $C=C$ [công thức chung $C_nH_{2n}, n \\ge 2$].",
            "II. Ethylene - 1. Công thức và cấu tạo phân tử ethylene [$CH_2=CH_2$, liên kết đôi gồm một liên kết kém bền dễ bị bẻ gãy].",
            "II. Ethylene - 2. Tính chất vật lí [chất khí, không màu, nhẹ hơn không khí, ít tan trong nước].",
            "II. Ethylene - 3. Tính chất hoá học: Phản ứng cháy; Phản ứng cộng brom [làm mất màu dung dịch nước brom - phản ứng đặc trưng nhận biết liên kết đôi]; Phản ứng trùng hợp tạo nhựa PE [$[-CH_2-CH_2-]_n$].",
            "II. Ethylene - 4. Ứng dụng: Nguyên liệu sản xuất chất dẻo, dung môi, giấm, kích thích quả mau chín."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c8_l25",
          "name": "Bài 25: Nguồn nhiên liệu",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "114 – 117",
          "subItems": [
            "I. Dầu mỏ, khí mỏ dầu và khí thiên nhiên - 1. Trạng thái tự nhiên, tính chất vật lí và thành phần của dầu mỏ [hỗn hợp nhiều hydrocarbon].",
            "I. Dầu mỏ, khí mỏ dầu và khí thiên nhiên - 2. Chưng cất phân đoạn dầu mỏ [khí đốt, xăng, dầu hoả, dầu diesel, dầu mazut, nhựa đường].",
            "II. Nhiên liệu - 1. Khái niệm và phân loại nhiên liệu: Nhiên liệu rắn [than đá, gỗ], nhiên liệu lỏng [xăng, cồn], nhiên liệu khí [khí gas, biogas].",
            "II. Nhiên liệu - 2. Sử dụng nhiên liệu hiệu quả, an toàn và phát triển nhiên liệu sinh học [xăng E5, khí sinh học biogas] nhằm giảm phát thải khí nhà kính."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c9",
      "name": "Chương VIII: ETHYLIC ALCOHOL VÀ ACETIC ACID",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "lessons": [
        {
          "id": "9_c9_l26",
          "name": "Bài 26: Ethylic alcohol",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "118 – 122",
          "subItems": [
            "I. Công thức và đặc điểm cấu tạo - Công thức phân tử $C_2H_6O$, công thức cấu tạo $C_2H_5OH$ [$CH_3-CH_2-OH$], có nhóm chức hydroxide [$-OH$] quyết định tính chất hoá học đặc trưng.",
            "II. Tính chất vật lí và độ cồn - 1. Tính chất vật lí: Chất lỏng không màu, mùi thơm nhẹ, tan vô hạn trong nước, sôi ở $78,3^\\circ\\text{C}$, nhẹ hơn nước.",
            "II. Tính chất vật lí và độ cồn - 2. Độ cồn [độ rượu]: Số mililít ethylic alcohol nguyên chất có trong 100 mL dung dịch rượu [công thức tính độ cồn].",
            "III. Tính chất hoá học - 1. Phản ứng cháy [toả nhiều nhiệt tạo $CO_2$ và $H_2O$].",
            "III. Tính chất hoá học - 2. Tác dụng với kim loại natri giải phóng khí hydrogen [$2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2$].",
            "IV. Điều chế và ứng dụng - 1. Điều chế: Lên men tinh bột/đường [$C_6H_{12}O_6 \\xrightarrow{\\text{men}} 2C_2H_5OH + 2CO_2$] hoặc hydrat hoá ethylene.",
            "IV. Điều chế và ứng dụng - 2. Ứng dụng trong y tế [cồn sát trùng $70^\\circ$], dung môi pha sơn/nước hoa, nhiên liệu sinh học.",
            "IV. Điều chế và ứng dụng - 3. Tác hại của việc lạm dụng rượu, bia đối với sức khoẻ và an toàn giao thông."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c9_l27",
          "name": "Bài 27: Acetic acid",
          "domain": "Chất và sự biến đổi của chất [Hoá học]",
          "pages": "123 – 127",
          "subItems": [
            "I. Công thức và đặc điểm cấu tạo - Công thức phân tử $C_2H_4O_2$, công thức cấu tạo $CH_3COOH$, có nhóm carboxyl [$-COOH$] quyết định tính acid.",
            "II. Tính chất vật lí - Chất lỏng không màu, vị chua gắt, tan vô hạn trong nước, hoá rắn ở $16,6^\\circ\\text{C}$ [acetic acid băng].",
            "III. Tính chất hoá học - 1. Tính chất của một acid: Làm đổi màu quỳ tím sang đỏ; tác dụng với kim loại trước H [$Zn, Mg$]; tác dụng với oxide base; tác dụng với base [phản ứng trung hoà]; tác dụng với muối carbonate giải phóng khí $CO_2$.",
            "III. Tính chất hoá học - 2. Phản ứng ester hoá: Tác dụng với ethylic alcohol tạo ethyl acetate có mùi thơm đặc trưng [$CH_3COOH + C_2H_5OH \\xrightleftharpoons{H_2SO_4, t^\\circ} CH_3COOC_2H_5 + H_2O$].",
            "IV. Điều chế và ứng dụng - 1. Điều chế bằng phương pháp lên men giấm từ dung dịch rượu loãng.",
            "IV. Điều chế và ứng dụng - 2. Ứng dụng sản xuất giấm ăn [nồng độ 2 - 5%], dược phẩm, phẩm nhuộm, chất dẻo, tơ nhân tạo."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c10",
      "name": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "lessons": [
        {
          "id": "9_c10_l28",
          "name": "Bài 28: Lipid",
          "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
          "pages": "128 – 130",
          "subItems": [
            "I. Khái niệm lipid và chất béo - Lipid là hợp chất hữu cơ phức tạp trong tế bào sống; Chất béo là triester của glycerol với các acid béo [công thức chung $[RCOO]_3C_3H_5$].",
            "II. Tính chất vật lí và hoá học của chất béo - 1. Tính chất vật lí: Nhẹ hơn nước, không tan trong nước, tan nhiều trong dung môi hữu cơ [xăng, benzen].",
            "II. Tính chất vật lí và hoá học của chất béo - 2. Phản ứng xà phòng hoá: Thuỷ phân chất béo trong môi trường kiềm tạo glycerol và muối của acid béo [xà phòng]: $[RCOO]_3C_3H_5 + 3NaOH \\rightarrow 3RCOONa + C_3H_5[OH]_3$.",
            "III. Vai trò của chất béo - Nguồn cung cấp năng lượng quan trọng, dung môi hoà tan các vitamin tan trong dầu [A, D, E, K], ứng dụng sản xuất xà phòng."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c10_l29",
          "name": "Bài 29: Carbohydrate. Glucose và saccharose",
          "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
          "pages": "131 – 134",
          "subItems": [
            "I. Khái niệm carbohydrate - Hợp chất hữu cơ tạp chức chứa C, H, O [thường có dạng $C_n[H_2O]_m$].",
            "II. Glucose [$C_6H_{12}O_6$] - 1. Tính chất vật lí và trạng thái tự nhiên [có nhiều trong quả chín, nho chín, mật ong, máu người ~0,1%].",
            "II. Glucose [$C_6H_{12}O_6$] - 2. Tính chất hoá học: Phản ứng tráng bạc [tác dụng với $AgNO_3/NH_3$ tạo bạc kim loại sáng bóng]; Phản ứng lên men rượu.",
            "II. Glucose [$C_6H_{12}O_6$] - 3. Vai trò cung cấp năng lượng nhanh cho cơ thể.",
            "III. Saccharose [$C_{12}H_{22}O_{11}$] - 1. Trạng thái tự nhiên: Đường mía, đường thốt nốt, củ cải đường.",
            "III. Saccharose [$C_{12}H_{22}O_{11}$] - 2. Tính chất hoá học: Phản ứng thuỷ phân trong môi trường acid tạo ra 1 phân tử glucose và 1 phân tử fructose."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c10_l30",
          "name": "Bài 30: Tinh bột và cellulose",
          "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
          "pages": "135 – 137",
          "subItems": [
            "I. Trạng thái tự nhiên và tính chất vật lí - 1. Tinh bột [$[-C_6H_{10}O_5-]_n$]: Có trong các loại hạt ngũ cốc, củ, quả; không tan trong nước lạnh, tạo hồ tinh bột trong nước nóng.",
            "I. Trạng thái tự nhiên và tính chất vật lí - 2. Cellulose [$[-C_6H_{10}O_5-]_m$]: Thành phần chính tạo màng tế bào thực vật [gỗ, bông gòn, tre, nứa]; sợi dai, không tan trong nước.",
            "II. Tính chất hoá học - 1. Phản ứng thuỷ phân của tinh bột và cellulose tạo glucose nhờ xúc tác acid hoặc enzyme.",
            "II. Tính chất hoá học - 2. Phản ứng màu đặc trưng của tinh bột với dung dịch iodine: Tạo hợp chất có màu xanh tím [phản ứng dùng để nhận biết tinh bột].",
            "III. Ứng dụng - Lương thực chính của con người, nguyên liệu sản xuất giấy, tơ sợi bông, vật liệu xây dựng, điều chế cồn sinh học."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c10_l31",
          "name": "Bài 31: Protein",
          "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
          "pages": "138 – 140",
          "subItems": [
            "I. Khái niệm và cấu tạo - Protein là những hợp chất cao phân tử phức tạp cấu tạo từ các amino acid liên kết với nhau bằng liên kết peptide [thành phần không thể thiếu của mọi tế bào sống].",
            "II. Tính chất hoá học của protein - 1. Phản ứng thuỷ phân nhờ xúc tác acid, base hoặc enzyme tạo thành hỗn hợp các amino acid.",
            "II. Tính chất hoá học của protein - 2. Sự đông tụ protein dưới tác dụng của nhiệt độ [luộc trứng, nấu riêu cua] hoặc hoá chất [acid, rượu].",
            "II. Tính chất hoá học của protein - 3. Phản ứng cháy có mùi khét đặc trưng [tóc, lông vũ, tơ tằm cháy].",
            "III. Vai trò của protein - Thành phần cấu trúc tế bào, xúc tác sinh học [enzyme], vận chuyển dưỡng chất, bảo vệ cơ thể [kháng thể]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c10_l32",
          "name": "Bài 32: Polymer",
          "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
          "pages": "141 – 145",
          "subItems": [
            "I. Khái niệm, cấu tạo và phân loại polymer - 1. Khái niệm: Polymer là những hợp chất có phân tử khối rất lớn do nhiều mắt xích nhỏ [monomer] liên kết với nhau tạo nên.",
            "I. Khái niệm, cấu tạo và phân loại polymer - 2. Cấu tạo mạch polymer: Mạch không phân nhánh [PE, PVC, cellulose], mạch phân nhánh [amylopectin của tinh bột], mạch không gian [cao su lưu hoá].",
            "I. Khái niệm, cấu tạo và phân loại polymer - 3. Phân loại: Polymer thiên nhiên [tinh bột, tơ tằm, cao su tự nhiên] và Polymer tổng hợp [PE, PVC, tơ nilon].",
            "II. Một số vật liệu polymer phổ biến - 1. Chất dẻo [PE, PVC, PP].",
            "II. Một số vật liệu polymer phổ biến - 2. Tơ sợi [tơ tằm, tơ nilon, tơ visco].",
            "II. Một số vật liệu polymer phổ biến - 3. Cao su [cao su thiên nhiên, cao su buna có tính đàn hồi cao].",
            "II. Một số vật liệu polymer phổ biến - 4. Keo dán.",
            "III. Ứng dụng và vấn đề ô nhiễm môi trường [\"rác thải nhựa\"] - Tác hại của rác thải nhựa khó phân huỷ [\"ô nhiễm trắng\"]; nguyên tắc 3R [Reduce - Reuse - Recycle] và phát triển vật liệu nhựa tự phân huỷ sinh học."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c11",
      "name": "Chương X: KHAI THÁC TÀI NGUYÊN TỪ VỎ TRÁI ĐẤT",
      "domain": "Trái Đất và bầu trời / Hoá học",
      "lessons": [
        {
          "id": "9_c11_l33",
          "name": "Bài 33: Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất",
          "domain": "Trái Đất và bầu trời / Hoá học",
          "pages": "146 – 148",
          "subItems": [
            "I. Hàm lượng các nguyên tố hoá học chủ yếu trong vỏ Trái Đất - Oxygen [~46,6%] và Silicon [~27,7%] là hai nguyên tố dồi dào nhất, tiếp theo là Al, Fe, Ca, Na, K, Mg.",
            "II. Các dạng chất chủ yếu trong vỏ Trái Đất - Khoáng vật silicat, khoáng vật oxide, muối carbonate, quặng kim loại và tài nguyên nước, khoáng sản nhiên liệu.",
            "III. Khai thác tài nguyên từ vỏ Trái Đất bền vững - Ý nghĩa kinh tế và yêu cầu bảo vệ môi trường, phục hồi cảnh quan sau khai thác khoáng sản."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c11_l34",
          "name": "Bài 34: Khai thác đá vôi. Công nghiệp silicate",
          "domain": "Trái Đất và bầu trời / Hoá học",
          "pages": "149 – 152",
          "subItems": [
            "I. Khai thác và ứng dụng đá vôi - 1. Thành phần chính là calcium carbonate [$CaCO_3$].",
            "I. Khai thác và ứng dụng đá vôi - 2. Quá trình nung vôi sản xuất vôi sống [$CaO$]: $CaCO_3 \\xrightarrow{t^\\circ} CaO + CO_2$.",
            "I. Khai thác và ứng dụng đá vôi - 3. Ứng dụng của đá vôi và vôi tôi [$Ca[OH]_2$] trong xây dựng, nông nghiệp khử chua, xử lí nước thải.",
            "II. Công nghiệp silicate - 1. Sản xuất đồ gốm, sứ, gạch ngói [nguyên liệu đất sét, thạch anh, fenspat].",
            "II. Công nghiệp silicate - 2. Sản xuất xi măng [nguyên liệu đá vôi, đất sét, nung thành clinker].",
            "II. Công nghiệp silicate - 3. Sản xuất thuỷ tinh thông thường [nguyên liệu cát thạch anh $SiO_2$, đá vôi $CaCO_3$, soda $Na_2CO_3$]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c11_l35",
          "name": "Bài 35: Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu",
          "domain": "Trái Đất và bầu trời / Hoá học",
          "pages": "153 – 158",
          "subItems": [
            "I. Khái niệm về nhiên liệu hoá thạch - Sự hình thành và phân bố của than đá, dầu mỏ, khí thiên nhiên.",
            "II. Khai thác và sử dụng nhiên liệu hoá thạch - Phương pháp khai thác hầm lò, lộ thiên, giàn khoan dầu khí; vai trò cung cấp năng lượng và nguyên liệu hoá chất.",
            "III. Nguồn carbon trong tự nhiên và chu trình carbon - Chu trình tuần hoàn của nguyên tố carbon giữa khí quyển, sinh quyển, thuỷ quyển và thạch quyển thông qua quang hợp, hô hấp, đốt cháy nhiên liệu, phân giải xác sinh vật.",
            "IV. Sự ấm lên toàn cầu và hiệu ứng nhà kính - Nồng độ khí $CO_2, CH_4$ trong khí quyển gia tăng làm giữ nhiệt Trái Đất; hậu quả nước biển dâng, băng tan, thời tiết cực đoan; cam kết giảm phát thải Net Zero."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c12",
      "name": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "lessons": [
        {
          "id": "9_c12_l36",
          "name": "Bài 36: Khái quát về di truyền học",
          "domain": "Vật sống [Sinh học]",
          "pages": "159 – 161",
          "subItems": [
            "I. Di truyền và biến dị - 1. Di truyền: Hiện tượng truyền đạt các tính trạng của bố mẹ, tổ tiên cho các thế hệ con cháu.",
            "I. Di truyền và biến dị - 2. Biến dị: Hiện tượng con cái sinh ra có những đặc điểm sai khác so với bố mẹ và sai khác giữa các cá thể trong cùng lứa.",
            "II. Mendel – Người đặt nền móng cho di truyền học - 1. Đối tượng nghiên cứu: Cây đậu Hà Lan [*Pisum sativum*] có hoa lưỡng tính, tự thụ phấn nghiêm ngặt, có nhiều cặp tính trạng tương phản rõ rệt.",
            "II. Mendel – Người đặt nền móng cho di truyền học - 2. Phương pháp nghiên cứu: Phương pháp phân tích các thế hệ lai [tạo dòng thuần chủng, lai các cặp bố mẹ tương phản, theo dõi riêng từng tính trạng, sử dụng toán thống kê phân tích số liệu]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c12_l37",
          "name": "Bài 37: Các quy luật di truyền của Mendel",
          "domain": "Vật sống [Sinh học]",
          "pages": "162 – 165",
          "subItems": [
            "I. Quy luật phân li - 1. Thí nghiệm lai một cặp tính trạng của Mendel [hoa đỏ x hoa trắng -> F1 100% hoa đỏ -> F2 tỉ lệ 3 hoa đỏ : 1 hoa trắng].",
            "I. Quy luật phân li - 2. Giải thích kết quả thí nghiệm: Mỗi tính trạng do một cặp nhân tố di truyền quy định; trong tế bào sinh dưỡng nhân tố di truyền tồn tại thành cặp [allele], khi giảm phân tạo giao tử mỗi giao tử chỉ nhận một nhân tố di truyền trong cặp.",
            "I. Quy luật phân li - 3. Phép lai phân tích: Phép lai giữa cá thể mang tính trạng trội chưa biết kiểu gene với cá thể mang tính trạng lặn để kiểm tra kiểu gene [đồng hợp trội cho con lai đồng tính; dị hợp trội cho phân tính 1 trội : 1 lặn].",
            "II. Quy luật phân li độc lập - 1. Thí nghiệm lai hai cặp tính trạng của Mendel [Hạt vàng, trơn x Hạt xanh, nhăn -> F1 100% vàng, trơn -> F2 tỉ lệ 9 vàng, trơn : 3 vàng, nhăn : 3 xanh, trơn : 1 xanh, nhăn].",
            "II. Quy luật phân li độc lập - 2. Nội dung quy luật: Các cặp nhân tố di truyền phân li độc lập trong quá trình hình thành giao tử."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c12_l38",
          "name": "Bài 38: Nucleic acid và gene",
          "domain": "Vật sống [Sinh học]",
          "pages": "166 – 168",
          "subItems": [
            "I. Khái niệm nucleic acid - Đại phân tử sinh học mang thông tin di truyền, cấu tạo theo nguyên tắc đa phân gồm hai loại: DNA [Deoxyribonucleic acid] và RNA [Ribonucleic acid].",
            "II. Deoxyribonucleic acid [DNA] - 1. Cấu trúc hoá học: Cấu tạo từ các nguyên tố C, H, O, N, P; đơn phân là nucleotide gồm 4 loại A [Adenine], T [Thymine], G [Guanine], C [Cytosine].",
            "II. Deoxyribonucleic acid [DNA] - 2. Cấu trúc không gian: Chuỗi xoắn kép gồm hai mạch polynucleotide song song ngược chiều liên kết bổ sung bằng liên kết hydrogen [$A-T$ bằng 2 liên kết, $G-C$ bằng 3 liên kết]; chu kì xoắn $34\\text{ Å} = 10\\text{ cặp nu}$.",
            "III. Ribonucleic acid [RNA] - Cấu tạo từ 4 loại nucleotide A, U [Uracil], G, C; cấu trúc mạch đơn; gồm 3 loại: mRNA [RNA thông tin], tRNA [RNA vận chuyển], rRNA [RNA ribosome].",
            "IV. Khái niệm gene - Gene là một đoạn phân tử DNA mang thông tin mã hoá cho một sản phẩm xác định [chuỗi polypeptide hoặc phân tử RNA]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c12_l39",
          "name": "Bài 39: Tái bản DNA và phiên mã tạo RNA",
          "domain": "Vật sống [Sinh học]",
          "pages": "169 – 172",
          "subItems": [
            "I. Quá trình tái bản DNA [Nhân đôi DNA] - 1. Thời điểm và vị trí diễn ra: Trong nhân tế bào, kì trung gian giữa hai lần phân bào.",
            "I. Quá trình tái bản DNA [Nhân đôi DNA] - 2. Diễn biến: Nhờ enzyme tháo xoắn, tách hai mạch đơn; enzyme DNA polymerase lắp ráp nucleotide tự do theo nguyên tắc bổ sung [$A_{môi trường} - T_{mạch khuôn}, G - C$].",
            "I. Quá trình tái bản DNA [Nhân đôi DNA] - 3. Nguyên tắc nhân đôi: Nguyên tắc bổ sung và Nguyên tắc bán bảo tồn [trong mỗi phân tử DNA con có một mạch của mẹ và một mạch mới tổng hợp].",
            "II. Quá trình phiên mã [Tổng hợp RNA] - 1. Khái niệm: Quá trình truyền thông tin từ mạch khuôn của gene [DNA] sang phân tử RNA.",
            "II. Quá trình phiên mã [Tổng hợp RNA] - 2. Diễn biến: Enzyme RNA polymerase trượt trên mạch khuôn $3' \\rightarrow 5'$ tổng hợp chuỗi RNA theo nguyên tắc bổ sung [$A_{khuôn} - U_{tự do}, T_{khuôn} - A, G_{khuôn} - C, C_{khuôn} - G$]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c12_l40",
          "name": "Bài 40: Dịch mã và mối quan hệ từ gene đến tính trạng",
          "domain": "Vật sống [Sinh học]",
          "pages": "173 – 177",
          "subItems": [
            "I. Mã di truyền - Khái niệm mã di truyền: Mã bộ ba [triplet] gồm 3 nucleotide liền nhau quy định 1 amino acid; có 64 bộ ba [61 bộ ba mã hoá, 3 bộ ba kết thúc $UAA, UAG, UGA$; 1 bộ ba mở đầu $AUG$ mã hoá methionine]; đặc điểm: tính liên tục, tính phổ biến, tính đặc hiệu, tính thoái hoá.",
            "II. Quá trình dịch mã [Tổng hợp protein] - Diễn ra tại ribosome ở tế bào chất: Phân tử tRNA mang amino acid tương ứng khớp anticodon với codon trên mRNA theo nguyên tắc bổ sung; ribosome di chuyển dịch chuyển từng bộ ba tạo chuỗi polypeptide.",
            "III. Mối quan hệ giữa gene và tính trạng - Sơ đồ trung tâm của sinh học phân tử: $\\text{Gene [DNA]} \\xrightarrow{\\text{Phiên mã}} \\text{mRNA} \\xrightarrow{\\text{Dịch mã}} \\text{Protein} \\rightarrow \\text{Tính trạng}$.",
            "III. Mối quan hệ giữa gene và tính trạng - Bản chất: Trình tự nucleotide trong gene quy định trình tự nucleotide trong mRNA, qua đó quy định trình tự amino acid trong protein biểu hiện thành tính trạng cơ thể."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c12_l41",
          "name": "Bài 41: Đột biến gene",
          "domain": "Vật sống [Sinh học]",
          "pages": "178 – 180",
          "subItems": [
            "I. Khái niệm đột biến gene - 1. Định nghĩa: Đột biến gene là những biến đổi trong cấu trúc của gene liên quan đến một hoặc một số cặp nucleotide.",
            "I. Khái niệm đột biến gene - 2. Các dạng đột biến điểm: Mất một cặp nucleotide, Thêm một cặp nucleotide, Thay thế một cặp nucleotide.",
            "II. Nguyên nhân và cơ chế phát sinh đột biến gene - Do tác nhân vật lí [tia phóng xạ, tia tử ngoại UV], tác nhân hoá học [chất độc hoá học dioxin, thuốc trừ sâu] hoặc rối loạn sinh lí - hoá sinh nội bào làm bắt cặp sai trong nhân đôi DNA.",
            "III. Ý nghĩa và tác hại của đột biến gene - Đa số đột biến gene có hại cho sinh vật vì phá vỡ cấu trúc hài hoà vốn có; một số có lợi hoặc trung tính; cung cấp nguồn nguyên liệu sơ cấp dồi dào cho quá trình chọn giống và tiến hoá."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c13",
      "name": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "lessons": [
        {
          "id": "9_c13_l42",
          "name": "Bài 42: Nhiễm sắc thể và bộ nhiễm sắc thể",
          "domain": "Vật sống [Sinh học]",
          "pages": "181 – 185",
          "subItems": [
            "I. Nhiễm sắc thể [NST] - 1. Cấu trúc hiển vi của NST: Gồm tâm động [eo sơ cấp], hai cánh nhiễm sắc thể; cấu tạo hoá học gồm phân tử DNA liên kết chặt chẽ với protein loại histone.",
            "I. Nhiễm sắc thể [NST] - 2. Mức độ xoắn cuộn của NST [sợi cơ bản, sợi nhiễm sắc, sợi siêu xoắn, chromatid].",
            "II. Bộ nhiễm sắc thể - 1. Bộ NST lưỡng bội [$2n$]: Chứa các cặp NST tương đồng giống nhau về hình dạng và kích thước [người $2n = 46$, ruồi giấm $2n = 8$].",
            "II. Bộ nhiễm sắc thể - 2. Bộ NST đơn bội [$n$]: Bộ NST có trong tế bào giao tử chỉ chứa một chiếc của mỗi cặp tương đồng.",
            "II. Bộ nhiễm sắc thể - 3. Tính đặc trưng của bộ NST mỗi loài sinh vật [đặc trưng về số lượng, hình dạng và cấu trúc]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c13_l43",
          "name": "Bài 43: Nguyên phân và giảm phân",
          "domain": "Vật sống [Sinh học]",
          "pages": "186 – 190",
          "subItems": [
            "I. Nguyên phân - 1. Diễn biến qua 4 kì: Kì đầu [NST đóng xoắn, màng nhân biến mất], Kì giữa [các NST kép xếp thành 1 hàng trên mặt phẳng xích đạo], Kì sau [hai chromatid tách nhau ở tâm động thành 2 NST đơn phân li về hai cực], Kì cuối [hình thành hai nhân mới].",
            "I. Nguyên phân - 2. Kết quả và ý nghĩa: Từ 1 tế bào mẹ [$2n$] tạo ra 2 tế bào con có bộ NST giống hệt nhau và giống tế bào mẹ [$2n$]; giúp cơ thể lớn lên, tái sinh mô, sinh sản vô tính.",
            "II. Giảm phân - 1. Diễn biến qua hai lần phân bào liên tiếp [Giảm phân I và Giảm phân II], NST chỉ nhân đôi 1 lần ở kì trung gian trước GP I; tiếp hợp và trao đổi chéo ở kì đầu GP I; các cặp NST kép xếp thành 2 hàng ở kì giữa GP I.",
            "II. Giảm phân - 2. Kết quả: Từ 1 tế bào mẹ [$2n$] tạo ra 4 tế bào con có bộ NST giảm đi một nửa [$n$ giao tử].",
            "III. Ý nghĩa thực tiễn của nguyên phân và giảm phân - Nguyên phân là cơ sở của giâm, chiết, ghép cành, nuôi cấy mô tế bào; Giảm phân kết hợp thụ tinh tạo biến dị tổ hợp phong phú cho chọn giống."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c13_l44",
          "name": "Bài 44: Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
          "domain": "Vật sống [Sinh học]",
          "pages": "191 – 193",
          "subItems": [
            "I. Nhiễm sắc thể thường và nhiễm sắc thể giới tính - 1. NST thường: Tồn tại thành từng cặp tương đồng giống nhau ở cả hai giới, mang gene quy định tính trạng thường.",
            "I. Nhiễm sắc thể thường và nhiễm sắc thể giới tính - 2. NST giới tính: Gồm 1 cặp khác nhau giữa giới đực và giới cái [ở người, động vật có vú, ruồi giấm: nữ/cái là XX, nam/đực là XY; ở chim, bò sát, bướm: cái là XY, đực là XX].",
            "II. Cơ chế xác định giới tính - 1. Cơ chế thụ tinh phân li tạo tỉ lệ đực : cái xấp xỉ 1 : 1 ở đa số loài [mẹ sinh 1 loại trứng mang X; bố sinh 2 loại tinh trùng mang X và mang Y với tỉ lệ ngang nhau -> $1\\text{XX} : 1\\text{XY}$].",
            "II. Cơ chế xác định giới tính - 2. Các yếu tố môi trường ảnh hưởng đến sự phân hoá giới tính [nhiệt độ ấp trứng ở rùa, cá sấu; hormone; ánh sáng]."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c13_l45",
          "name": "Bài 45: Di truyền liên kết",
          "domain": "Vật sống [Sinh học]",
          "pages": "194 – 196",
          "subItems": [
            "I. Quy luật di truyền liên kết của Morgan - 1. Thí nghiệm của Thomas Hunt Morgan trên ruồi giấm: Lai ruồi giấm thân xám, cánh dài thuần chủng với thân đen, cánh cụt -> F1 100% xám, dài -> Lai phân tích ruồi đực F1 thu được đời con $Fa$ tỉ lệ 1 xám, dài : 1 đen, cụt.",
            "I. Quy luật di truyền liên kết của Morgan - 2. Giải thích: Các gene quy định màu thân và độ dài cánh cùng nằm trên một nhiễm sắc thể nên di truyền cùng nhau [liên kết hoàn toàn].",
            "II. Ý nghĩa của di truyền liên kết - Đảm bảo sự di truyền bền vững của từng nhóm tính trạng tốt luôn đi kèm với nhau; hạn chế xuất hiện biến dị tổ hợp; ứng dụng chọn lọc nhóm tính trạng quý trong nông nghiệp."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c13_l46",
          "name": "Bài 46: Đột biến nhiễm sắc thể",
          "domain": "Vật sống [Sinh học]",
          "pages": "197 – 200",
          "subItems": [
            "I. Khái niệm đột biến nhiễm sắc thể - Đột biến nhiễm sắc thể là những biến đổi về cấu trúc hoặc số lượng nhiễm sắc thể.",
            "II. Đột biến cấu trúc nhiễm sắc thể - 1. Mất đoạn: Mất một đoạn NST làm giảm số lượng gene [gây chết hoặc giảm sức sống, ví dụ: mất đoạn NST số 5 gây hội chứng tiếng mèo kêu].",
            "II. Đột biến cấu trúc nhiễm sắc thể - 2. Lặp đoạn: Lặp lại một đoạn NST làm tăng liều lượng gene [ví dụ: lặp đoạn ở ruồi giấm làm mắt lồi thành mắt dẹt].",
            "II. Đột biến cấu trúc nhiễm sắc thể - 3. Đảo đoạn: Một đoạn NST bị đứt ra quay $180^\\circ$ rồi gắn lại.",
            "III. Đột biến số lượng nhiễm sắc thể - 1. Đột biến lệch bội [dị bội]: Biến đổi số lượng NST ở một hoặc một số cặp tương đồng [$2n+1$ thể ba, $2n-1$ thể một; ví dụ: hội chứng Down có 3 NST số 21, hội chứng Turner XO].",
            "III. Đột biến số lượng nhiễm sắc thể - 2. Đột biến đa bội: Toàn bộ bộ NST tăng theo bội số của $n$ [$3n, 4n$ đa bội cùng nguồn; quả to, cơ quan sinh dưỡng lớn, không hạt]."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c14",
      "name": "Chương XIII: DI TRUYỀN HỌC VỚI CON NGƯỜI VÀ ĐỜI SỐNG",
      "domain": "Vật sống [Sinh học ứng dụng]",
      "lessons": [
        {
          "id": "9_c14_l47",
          "name": "Bài 47: Di truyền học với con người",
          "domain": "Vật sống [Sinh học ứng dụng]",
          "pages": "201 – 206",
          "subItems": [
            "I. Tính trạng ở người - Tính trạng bình thường ở người: màu mắt, nhóm máu, dạng tóc, thuận tay phải/trái; phương pháp nghiên cứu phả hệ ở người.",
            "II. Bệnh và tật di truyền ở người - 1. Bệnh di truyền do đột biến gene: Bệnh mù màu, bệnh máu khó đông [gene lặn trên NST giới tính X], bệnh bạch tạng [gene lặn trên NST thường].",
            "II. Bệnh và tật di truyền ở người - 2. Bệnh do đột biến NST: Hội chứng Down [3 NST số 21], hội chứng Turner [nữ chỉ có 1 NST X - OX], hội chứng Klinefelter [nam XXY].",
            "III. Di truyền y học và tư vấn di truyền - Chẩn đoán trước sinh, sàng lọc sơ sinh, giải mã bộ gene người, tư vấn di truyền trước hôn nhân để hạn chế sinh con mắc dị tật bẩm sinh.",
            "IV. Vai trò của di truyền học với hôn nhân - Cơ sở khoa học của Luật Hôn nhân và Gia đình: Cấm kết hôn cận huyết [trong vòng 3 đời] vì làm tăng nguy cơ gặp nhau của các gene lặn đột biến gây hại ở trạng thái đồng hợp."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c14_l48",
          "name": "Bài 48: Ứng dụng công nghệ di truyền vào đời sống",
          "domain": "Vật sống [Sinh học ứng dụng]",
          "pages": "207 – 210",
          "subItems": [
            "I. Khái niệm công nghệ di truyền [Công nghệ gene] - Quy trình kĩ thuật chuyển một đoạn DNA mang gene từ tế bào cho sang tế bào nhận nhờ thể truyền [plasmid, virus].",
            "II. Ứng dụng công nghệ di truyền - 1. Trong nông nghiệp: Tạo giống cây trồng biến đổi gene [GMO] kháng sâu bệnh, kháng hạn, giàu dinh dưỡng [lúa vàng giàu beta-carotene, ngô Bt].",
            "II. Ứng dụng công nghệ di truyền - 2. Trong y học và dược phẩm: Sản xuất insulin người bằng vi khuẩn *E. coli*, sản xuất vaccine tái tổ hợp, hormone tăng trưởng.",
            "II. Ứng dụng công nghệ di truyền - 3. Trong bảo vệ môi trường: Sử dụng vi sinh vật chuyển gene phân huỷ dầu tràn, xử lí rác thải độc hại.",
            "II. Ứng dụng công nghệ di truyền - 4. Trong pháp y: Giám định ADN xác định huyết thống, điều tra tội phạm.",
            "III. Đạo đức sinh học trong nghiên cứu và ứng dụng di truyền - Các vấn đề an toàn sinh học đối với sinh vật biến đổi gene, cấm nhân bản vô tính người, bảo vệ quyền riêng tư thông tin bộ gene."
          ],
          "part2Hosts": []
        }
      ]
    },
    {
      "id": "9_c15",
      "name": "Chương XIV: TIẾN HOÁ",
      "domain": "Vật sống [Sinh học]",
      "lessons": [
        {
          "id": "9_c15_l49",
          "name": "Bài 49: Khái niệm tiến hoá và các hình thức chọn lọc",
          "domain": "Vật sống [Sinh học]",
          "pages": "211 – 213",
          "subItems": [
            "I. Khái niệm tiến hoá - Tiến hoá là quá trình biến đổi lịch sử lâu dài của các loài sinh vật qua các thế hệ, dẫn đến sự thích nghi ngày càng hoàn thiện và sự hình thành các loài mới từ tổ tiên chung.",
            "II. Chọn lọc nhân tạo - 1. Khái niệm: Quá trình con người chủ động chọn lọc và giữ lại những cá thể mang biến dị phù hợp với nhu cầu, thị hiếu và đào thải các cá thể không mong muốn.",
            "II. Chọn lọc nhân tạo - 2. Kết quả: Tạo ra sự đa dạng các giống vật nuôi, cây trồng trong thời gian ngắn từ một loài hoang dại ban đầu.",
            "III. Chọn lọc tự nhiên - Quá trình tác động của các nhân tố môi trường giữ lại những cá thể có biến dị thích nghi sống sót và sinh sản tốt hơn, đào thải các cá thể kém thích nghi."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c15_l50",
          "name": "Bài 50: Cơ chế tiến hoá",
          "domain": "Vật sống [Sinh học]",
          "pages": "214 – 218",
          "subItems": [
            "I. Quan điểm của Lamarck về cơ chế tiến hoá - Thuyết tiến hoá của J. B. Lamarck: Sinh vật chủ động biến đổi để thích nghi với môi trường sống; tập quán hoạt động làm cơ quan phát triển hay tiêu biến và di truyền lại cho đời sau [hạn chế: chưa phân biệt được biến dị di truyền và không di truyền].",
            "II. Quan điểm của Darwin về cơ chế tiến hoá - Thuyết tiến hoá của Charles Darwin: Đấu tranh sinh tồn là động lực; biến dị cá thể xuất hiện ngẫu nhiên trong sinh sản; Chọn lọc tự nhiên tác động đào thải cá thể mang biến dị bất lợi, giữ lại cá thể mang biến dị có lợi, tích luỹ qua các thế hệ tạo thành loài mới thích nghi.",
            "III. Một số luận điểm của thuyết tiến hoá tổng hợp hiện đại - Tiến hoá nhỏ [biến đổi cấu trúc di truyền của quần thể dẫn đến hình thành loài mới] và Tiến hoá lớn; 5 nhân tố tiến hoá: Đột biến, Di - nhập gene, Chọn lọc tự nhiên, Yếu tố ngẫu nhiên, Giao phối không ngẫu nhiên."
          ],
          "part2Hosts": []
        },
        {
          "id": "9_c15_l51",
          "name": "Bài 51: Sự phát sinh và phát triển sự sống trên Trái Đất",
          "domain": "Vật sống [Sinh học]",
          "pages": "219 – 223",
          "subItems": [
            "I. Các giai đoạn phát sinh và phát triển sự sống trên Trái Đất - 1. Giai đoạn tiến hoá hoá học: Sự hình thành các hợp chất hữu cơ đơn giản từ chất vô cơ trong khí quyển nguyên thuỷ dưới tác động của sấm sét, tia cực tím; hình thành các đại phân tử sinh học [protein, nucleic acid].",
            "I. Các giai đoạn phát sinh và phát triển sự sống trên Trái Đất - 2. Giai đoạn tiến hoá tiền sinh học: Hình thành các giọt coacervate [tế bào sơ khai] có màng ngăn và khả năng trao đổi chất, tự nhân đôi.",
            "I. Các giai đoạn phát sinh và phát triển sự sống trên Trái Đất - 3. Giai đoạn tiến hoá sinh học: Từ tế bào nguyên thuỷ tiến hoá thành các dạng sinh vật đơn bào, đa bào qua các đại địa chất [Đại Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh].",
            "II. Sự phát sinh loài người - Vượn người hoá thạch -> Người vượn *Australopithecus* -> Người khéo léo *Homo habilis* -> Người đứng thẳng *Homo erectus* -> Người hiện đại *Homo sapiens*; vai trò của lao động, tiếng nói, tư duy trong quá trình tiến hoá hình thành loài người."
          ],
          "part2Hosts": []
        }
      ]
    }
  ]
};

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
    const numA = parseInt(a.name.match(/Bài\s+(\d+)/i)?.[1] || '999', 10);
    const numB = parseInt(b.name.match(/Bài\s+(\d+)/i)?.[1] || '999', 10);
    if (numA !== numB) return numA - numB;
    return a.name.localeCompare(b.name, 'vi', { numeric: true });
  });
};

export const GRADE_TOPICS: Record<string, string[]> = {
  '6': (CURRICULUM[6] || []).map(c => c.name),
  '7': (CURRICULUM[7] || []).map(c => c.name),
  '8': (CURRICULUM[8] || []).map(c => c.name),
  '9': (CURRICULUM[9] || []).map(c => c.name),
};
