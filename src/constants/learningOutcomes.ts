// Bảng Yêu cầu cần đạt chuẩn CV 7991/BGDĐT-GDTrH cho KHTN 6, 7, 8, 9
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

export const LEARNING_OUTCOMES_DB: Record<number, LessonOutcomeItem[]> = {
  "6": [
    {
      "lessonName": "Bài 1: Giới thiệu về Khoa học tự nhiên",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết khái niệm KHTN, các lĩnh vực chính, phân biệt vật sống/vật không sống"
        ],
        "understanding": [
          "Thông hiểu vai trò KHTN đối với đời sống"
        ],
        "application": [
          "Vận dụng kiến thức Giới thiệu về Khoa học tự nhiên để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 2: An toàn trong phòng thực hành",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết và giải thích ý nghĩa các biển cảnh báo trong phòng thực hành; tuân thủ và vận dụng các quy tắc an toàn"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến An toàn trong phòng thực hành."
        ],
        "application": [
          "Vận dụng kiến thức An toàn trong phòng thực hành để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 3: Sử dụng kính lúp",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sử dụng kính lúp."
        ],
        "understanding": [
          "Nêu cấu tạo, công dụng của kính lúp; thực hiện đúng thao tác sử dụng và bảo quản kính lúp cầm tay"
        ],
        "application": [
          "Vận dụng kiến thức Sử dụng kính lúp để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 4: Sử dụng kính hiển vi quang học",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết các bộ phận chính của kính hiển vi quang học; trình bày đúng các bước thao tác quan sát mẫu vật và quy tắc bảo quản"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Sử dụng kính hiển vi quang học."
        ],
        "application": [
          "Vận dụng kiến thức Sử dụng kính hiển vi quang học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 5: Đo chiều dài",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đo chiều dài."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Đo chiều dài."
        ],
        "application": [
          "Xác định GHĐ và ĐCNN của thước; thực hiện đúng quy trình đo chiều dài; vận dụng đo thể tích bằng bình chia độ/bình tràn; xử lí sai số"
        ]
      }
    },
    {
      "lessonName": "Bài 6: Đo khối lượng",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Phân biệt khối lượng và trọng lượng; nhận biết đơn vị và dụng cụ cân; trình bày các bước đo khối lượng bằng cân đồng hồ/cân điện tử"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Đo khối lượng."
        ],
        "application": [
          "Vận dụng kiến thức Đo khối lượng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 7: Đo thời gian",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết đơn vị, dụng cụ đo thời gian; sử dụng thành thạo đồng hồ bấm giây để đo thời gian diễn ra một sự kiện hoặc chuyển động"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Đo thời gian."
        ],
        "application": [
          "Vận dụng kiến thức Đo thời gian để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 8: Đo nhiệt độ",
      "chapterName": "Chương I: MỞ ĐẦU VỀ KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đo nhiệt độ."
        ],
        "understanding": [
          "Trình bày nguyên lí nhiệt kế chất lỏng; thang nhiệt độ °C; lựa chọn và thao tác đo nhiệt độ cơ thể bằng nhiệt kế y tế đúng cách, an toàn"
        ],
        "application": [
          "Vận dụng kiến thức Đo nhiệt độ để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 9: Sự đa dạng của chất",
      "chapterName": "Chương II: CHẤT QUANH TA",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự đa dạng của chất."
        ],
        "understanding": [
          "Phân biệt vật thể và chất; phân biệt tính chất vật lí và tính chất hoá học của chất qua các ví dụ thực tế"
        ],
        "application": [
          "Vận dụng kiến thức Sự đa dạng của chất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 10: Các thể của chất và sự chuyển thể",
      "chapterName": "Chương II: CHẤT QUANH TA",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Các thể của chất và sự chuyển thể."
        ],
        "understanding": [
          "So sánh đặc điểm 3 thể của chất; xác định và mô tả các hiện tượng chuyển thể [nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi] trong tự nhiên"
        ],
        "application": [
          "Vận dụng kiến thức Các thể của chất và sự chuyển thể để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 11: Oxygen. Không khí",
      "chapterName": "Chương II: CHẤT QUANH TA",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Oxygen. Không khí."
        ],
        "understanding": [
          "Nêu tính chất vật lí và vai trò của oxygen; trình bày thành phần không khí; nguyên nhân, hậu quả và giải pháp chống ô nhiễm không khí"
        ],
        "application": [
          "Vận dụng kiến thức Oxygen. Không khí để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 12: Một số vật liệu",
      "chapterName": "Chương III: MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số vật liệu."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Một số vật liệu."
        ],
        "application": [
          "Nêu được tính chất và ứng dụng của các vật liệu thông dụng; vận dụng mô hình 3R để bảo vệ môi trường và sử dụng an toàn vật liệu"
        ]
      }
    },
    {
      "lessonName": "Bài 13: Một số nguyên liệu",
      "chapterName": "Chương III: MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số nguyên liệu."
        ],
        "understanding": [
          "Trình bày tính chất, ứng dụng của đá vôi và quặng; nêu được tác động của việc khai thác tài nguyên khoáng sản đến môi trường và giải pháp"
        ],
        "application": [
          "Vận dụng kiến thức Một số nguyên liệu để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 14: Một số nhiên liệu",
      "chapterName": "Chương III: MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số nhiên liệu."
        ],
        "understanding": [
          "Phân loại các dạng nhiên liệu; biện pháp sử dụng nhiên liệu an toàn, hiệu quả, tiết kiệm; hiểu khái niệm an ninh năng lượng"
        ],
        "application": [
          "Vận dụng kiến thức Một số nhiên liệu để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 15: Một số lương thực, thực phẩm",
      "chapterName": "Chương III: MỘT SỐ VẬT LIỆU, NGUYÊN LIỆU, NHIÊN LIỆU, LƯƠNG THỰC – THỰC PHẨM THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hóa học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết 4 nhóm chất dinh dưỡng chính; phân tích vai trò từng nhóm; đề xuất biện pháp bảo quản thực phẩm và xây dựng khẩu phần ăn hợp lí"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Một số lương thực, thực phẩm."
        ],
        "application": [
          "Vận dụng kiến thức Một số lương thực, thực phẩm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 16: Hỗn hợp các chất",
      "chapterName": "Chương IV: HỖN HỢP. TÁCH CHẤT RA KHỎI HỖN HỢP",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hỗn hợp các chất."
        ],
        "understanding": [
          "Phân biệt chất tinh khiết - hỗn hợp; dung dịch - huyền phù - nhũ tương; các yếu tố ảnh hưởng đến độ tan và tốc độ hoà tan của chất rắn"
        ],
        "application": [
          "Vận dụng kiến thức Hỗn hợp các chất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 17: Tách chất khỏi hỗn hợp",
      "chapterName": "Chương IV: HỖN HỢP. TÁCH CHẤT RA KHỎI HỖN HỢP",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tách chất khỏi hỗn hợp."
        ],
        "understanding": [
          "Trình bày nguyên tắc và lựa chọn phương pháp tách chất phù hợp [lọc, cô cạn, chiết] cho từng loại hỗn hợp cụ thể trong đời sống"
        ],
        "application": [
          "Vận dụng kiến thức Tách chất khỏi hỗn hợp để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 18: Tế bào – Đơn vị cơ bản của sự sống",
      "chapterName": "Chương V: TẾ BÀO",
      "domain": "Vật sống [Sinh học tế bào]",
      "outcomes": {
        "recognition": [
          "Nêu khái niệm tế bào; nhận biết sự đa dạng về hình dạng, kích thước của tế bào; giải thích vì sao phần lớn tế bào có kích thước hiển vi"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Tế bào – Đơn vị cơ bản của sự sống."
        ],
        "application": [
          "Vận dụng kiến thức Tế bào – Đơn vị cơ bản của sự sống để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào",
      "chapterName": "Chương V: TẾ BÀO",
      "domain": "Vật sống [Sinh học tế bào]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cấu tạo và chức năng các thành phần của tế bào."
        ],
        "understanding": [
          "Nêu chức năng 3 thành phần chính của tế bào; phân biệt tế bào nhân sơ - nhân thực; so sánh cấu tạo tế bào thực vật và động vật"
        ],
        "application": [
          "Vận dụng kiến thức Cấu tạo và chức năng các thành phần của tế bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 20: Sự lớn lên và sinh sản của tế bào",
      "chapterName": "Chương V: TẾ BÀO",
      "domain": "Vật sống [Sinh học tế bào]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự lớn lên và sinh sản của tế bào."
        ],
        "understanding": [
          "Mô tả quá trình lớn lên và phân chia tế bào; tính số tế bào tạo thành sau phân chia; nêu ý nghĩa sinh học đối với sự phát triển của cơ thể"
        ],
        "application": [
          "Vận dụng kiến thức Sự lớn lên và sinh sản của tế bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 21: Thực hành: Quan sát và phân biệt một số loại tế bào",
      "chapterName": "Chương V: TẾ BÀO",
      "domain": "Vật sống [Sinh học tế bào]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát và phân biệt một số loại tế bào."
        ],
        "understanding": [
          "Kĩ năng làm tiêu bản tạm thời tế bào thực vật; kĩ năng thao tác kính hiển vi, nhận diện và vẽ hình tế bào biểu bì vảy hành, tế bào trứng cá"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát và phân biệt một số loại tế bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 22: Cơ thể sinh vật",
      "chapterName": "Chương VI: TỪ TẾ BÀO ĐẾN CƠ THỂ",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cơ thể sinh vật."
        ],
        "understanding": [
          "Nêu các dấu hiệu sống cơ bản của một cơ thể; phân biệt cơ thể đơn bào và cơ thể đa bào qua ví dụ cụ thể"
        ],
        "application": [
          "Vận dụng kiến thức Cơ thể sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 23: Tổ chức cơ thể đa bào",
      "chapterName": "Chương VI: TỪ TẾ BÀO ĐẾN CƠ THỂ",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tổ chức cơ thể đa bào."
        ],
        "understanding": [
          "Xác định đúng các cấp độ tổ chức cơ thể đa bào; lấy ví dụ và mô tả chức năng của mô, cơ quan, hệ cơ quan ở động vật và thực vật"
        ],
        "application": [
          "Vận dụng kiến thức Tổ chức cơ thể đa bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 24: Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào",
      "chapterName": "Chương VI: TỪ TẾ BÀO ĐẾN CƠ THỂ",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào."
        ],
        "understanding": [
          "Rèn luyện kĩ năng quan sát vi sinh vật đơn bào trong mẫu nước; kĩ năng mô tả cấu trúc các cơ quan, hệ cơ quan trên tranh/mô hình"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 25: Hệ thống phân loại sinh vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ thống phân loại sinh vật."
        ],
        "understanding": [
          "Trình bày các bậc phân loại từ loài đến giới; cách gọi tên khoa học; đặc điểm phân biệt 5 giới sinh vật"
        ],
        "application": [
          "Vận dụng kiến thức Hệ thống phân loại sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 26: Khoá lưỡng phân",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khoá lưỡng phân."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Khoá lưỡng phân."
        ],
        "application": [
          "Hiểu nguyên tắc khoá lưỡng phân; vận dụng xây dựng khoá lưỡng phân đơn giản để phân loại một nhóm sinh vật cho trước"
        ]
      }
    },
    {
      "lessonName": "Bài 27: Vi khuẩn",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Vi khuẩn."
        ],
        "understanding": [
          "Mô tả cấu tạo tế bào vi khuẩn [nhân sơ]; phân tích vai trò có lợi và tác hại gây bệnh của vi khuẩn; nêu biện pháp phòng bệnh do vi khuẩn"
        ],
        "application": [
          "Vận dụng kiến thức Vi khuẩn để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 28: Thực hành: Làm sữa chua và quan sát vi khuẩn",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Làm sữa chua và quan sát vi khuẩn."
        ],
        "understanding": [
          "Quy trình làm sữa chua tại nhà; giải thích cơ chế lên men lactic; kĩ năng quan sát vi khuẩn lactic trên kính hiển vi"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Làm sữa chua và quan sát vi khuẩn để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 29: Virus",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Virus."
        ],
        "understanding": [
          "Mô tả cấu tạo virus; phân biệt virus và vi khuẩn; vai trò của vaccine và các biện pháp phòng chống dịch bệnh do virus gây ra"
        ],
        "application": [
          "Vận dụng kiến thức Virus để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 30: Nguyên sinh vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nguyên sinh vật."
        ],
        "understanding": [
          "Nêu đặc điểm nguyên sinh vật; vai trò của tảo trong tự nhiên; phân tích con đường truyền bệnh, triệu chứng và phòng chống bệnh sốt rét, kiết lị"
        ],
        "application": [
          "Vận dụng kiến thức Nguyên sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 31: Thực hành: Quan sát nguyên sinh vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Kĩ năng lấy mẫu và làm tiêu bản giọt ép quan sát nguyên sinh vật; nhận biết trùng roi và trùng giày dưới kính hiển vi"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Thực hành: Quan sát nguyên sinh vật."
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát nguyên sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 32: Nấm",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Phân loại nấm; phân tích vai trò có lợi trong đời sống và sản xuất; tác hại gây bệnh; dấu hiệu nhận biết nấm độc và phòng ngộ độc nấm"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Nấm."
        ],
        "application": [
          "Vận dụng kiến thức Nấm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 33: Thực hành: Quan sát các loại nấm",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát các loại nấm."
        ],
        "understanding": [
          "Kĩ năng thao tác quan sát nấm mốc dưới kính hiển vi; nhận diện và phân tích các bộ phận cấu tạo thể quả của nấm đảm"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát các loại nấm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 34: Thực vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực vật."
        ],
        "understanding": [
          "Đặc điểm phân biệt 4 ngành thực vật [Rêu, Dương xỉ, Hạt trần, Hạt kín]; vai trò to lớn của thực vật đối với môi trường và đời sống con người"
        ],
        "application": [
          "Vận dụng kiến thức Thực vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 35: Thực hành: Quan sát và phân biệt một số nhóm thực vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát và phân biệt một số nhóm thực vật."
        ],
        "understanding": [
          "Kĩ năng quan sát hình thái, phân tích cơ quan sinh dưỡng và sinh sản để xếp các mẫu vật thực vật vào đúng 4 ngành"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát và phân biệt một số nhóm thực vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 36: Động vật",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Phân biệt ĐVKXS và ĐVCXS; đặc điểm nhận biết các ngành ĐVKXS và các lớp ĐVCXS; phân tích vai trò và tác hại của động vật đối với con người"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Động vật."
        ],
        "application": [
          "Vận dụng kiến thức Động vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 37: Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên."
        ],
        "understanding": [
          "Kĩ năng quan sát, nhận diện động vật ngoài tự nhiên; phân loại động vật theo môi trường sống và nhóm phân loại lớn"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 38: Đa dạng sinh học",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đa dạng sinh học."
        ],
        "understanding": [
          "Nêu khái niệm và vai trò của đa dạng sinh học; phân tích nguyên nhân và hậu quả của suy giảm ĐDSH; đề xuất hành động cụ thể để bảo vệ ĐDSH"
        ],
        "application": [
          "Vận dụng kiến thức Đa dạng sinh học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 39: Tìm hiểu sinh vật ngoài thiên nhiên",
      "chapterName": "Chương VII: ĐA DẠNG THẾ GIỚI SỐNG",
      "domain": "Vật sống [Đa dạng sinh học và Phân loại học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tìm hiểu sinh vật ngoài thiên nhiên."
        ],
        "understanding": [
          "Phương pháp nghiên cứu thực địa; thu thập dữ liệu về động thực vật ngoài tự nhiên; lập báo cáo đánh giá mức độ đa dạng sinh vật địa phương"
        ],
        "application": [
          "Vận dụng kiến thức Tìm hiểu sinh vật ngoài thiên nhiên để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 40: Lực là gì?",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nêu định nghĩa lực; nhận biết các tác dụng của lực [thay đổi chuyển động, biến dạng]; phân biệt lực tiếp xúc và lực không tiếp xúc qua ví dụ"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Lực là gì?."
        ],
        "application": [
          "Vận dụng kiến thức Lực là gì? để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 41: Biểu diễn lực",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Biểu diễn lực."
        ],
        "understanding": [
          "Xác định các yếu tố của lực [điểm đặt, phương, chiều, độ lớn]; vẽ hình biểu diễn lực theo tỉ xích cho trước; đọc các thông số từ hình biểu diễn lực"
        ],
        "application": [
          "Vận dụng kiến thức Biểu diễn lực để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 42: Biến dạng của lò xo",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Biến dạng của lò xo."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Biến dạng của lò xo."
        ],
        "application": [
          "Tính độ dãn của lò xo [Δl]; vận dụng mối quan hệ tỉ lệ thuận giữa độ dãn lò xo và khối lượng vật treo để giải bài tập; nguyên lí lực kế"
        ]
      }
    },
    {
      "lessonName": "Bài 43: Trọng lượng, lực hấp dẫn",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Trọng lượng, lực hấp dẫn."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Trọng lượng, lực hấp dẫn."
        ],
        "application": [
          "Phân biệt rạch ròi giữa trọng lượng [N] và khối lượng [kg]; vận dụng công thức P = 10 x m; giải thích các hiện tượng liên quan đến trọng lực"
        ]
      }
    },
    {
      "lessonName": "Bài 44: Lực ma sát",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Lực ma sát."
        ],
        "understanding": [
          "Phân biệt ma sát nghỉ và ma sát trượt; phân tích vai trò có lợi / có hại của ma sát trong đời sống; biện pháp tăng giảm ma sát hợp lí"
        ],
        "application": [
          "Vận dụng kiến thức Lực ma sát để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 45: Lực cản của nước",
      "chapterName": "Chương VIII: LỰC TRONG ĐỜI SỐNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Lực cản của nước."
        ],
        "understanding": [
          "Giải thích hiện tượng lực cản của chất lưu [nước, không khí]; ứng dụng hình dạng khí động học để giảm lực cản trong chế tạo phương tiện"
        ],
        "application": [
          "Vận dụng kiến thức Lực cản của nước để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 46: Năng lượng và sự truyền năng lượng",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Hiểu khái niệm năng lượng; mối liên hệ giữa năng lượng và khả năng tác dụng lực; nhận biết 2 con đường truyền năng lượng trong thực tế"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Năng lượng và sự truyền năng lượng."
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng và sự truyền năng lượng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 47: Một số dạng năng lượng",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số dạng năng lượng."
        ],
        "understanding": [
          "Phân loại và gọi tên đúng 7 dạng năng lượng thông dụng; xác định dạng năng lượng chủ yếu trong các tình huống thực tiễn"
        ],
        "application": [
          "Vận dụng kiến thức Một số dạng năng lượng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 48: Sự chuyển hoá năng lượng",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự chuyển hoá năng lượng."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Sự chuyển hoá năng lượng."
        ],
        "application": [
          "Viết và phân tích sơ đồ chuyển hoá năng lượng trong các thiết bị; phát biểu và vận dụng định luật bảo toàn năng lượng giải thích hiện tượng"
        ]
      }
    },
    {
      "lessonName": "Bài 49: Năng lượng hao phí",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Năng lượng hao phí."
        ],
        "understanding": [
          "Phân biệt năng lượng hữu ích và năng lượng hao phí trong các quá trình sử dụng năng lượng; so sánh hiệu suất bóng đèn sợi đốt, compact và LED"
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng hao phí để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 50: Năng lượng tái tạo",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Năng lượng tái tạo."
        ],
        "understanding": [
          "Phân biệt nguồn năng lượng tái tạo và không tái tạo; nêu ưu - nhược điểm của các nguồn năng lượng tái tạo; ý nghĩa trong phát triển bền vững"
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng tái tạo để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 51: Tiết kiệm năng lượng",
      "chapterName": "Chương IX: NĂNG LƯỢNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Năng lượng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tiết kiệm năng lượng."
        ],
        "understanding": [
          "Giải thích tính cấp bách của tiết kiệm năng lượng; đề xuất các hành động cụ thể để tiết kiệm điện, nước, nhiên liệu ở trường học và gia đình"
        ],
        "application": [
          "Vận dụng kiến thức Tiết kiệm năng lượng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 52: Chuyển động nhìn thấy của Mặt Trời. Thiên thể",
      "chapterName": "Chương X: TRÁI ĐẤT VÀ BẦU TRỜI",
      "domain": "Trái Đất và bầu trời [Thiên văn học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Chuyển động nhìn thấy của Mặt Trời. Thiên thể."
        ],
        "understanding": [
          "Giải thích hiện tượng ngày và đêm, chuyển động nhìn thấy của Mặt Trời dựa trên chuyển động tự quay của Trái Đất; phân biệt sao, hành tinh, vệ tinh"
        ],
        "application": [
          "Vận dụng kiến thức Chuyển động nhìn thấy của Mặt Trời. Thiên thể để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 53: Mặt Trăng",
      "chapterName": "Chương X: TRÁI ĐẤT VÀ BẦU TRỜI",
      "domain": "Trái Đất và bầu trời [Thiên văn học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Mặt Trăng."
        ],
        "understanding": [
          "Nêu đặc điểm của Mặt Trăng; giải thích nguyên nhân hình thành các pha [hình dạng nhìn thấy] của Mặt Trăng và mối liên hệ với lịch âm"
        ],
        "application": [
          "Vận dụng kiến thức Mặt Trăng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 54: Hệ Mặt Trời",
      "chapterName": "Chương X: TRÁI ĐẤT VÀ BẦU TRỜI",
      "domain": "Trái Đất và bầu trời [Thiên văn học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ Mặt Trời."
        ],
        "understanding": [
          "Kể tên và sắp xếp đúng thứ tự khoảng cách 8 hành tinh tính từ Mặt Trời; phân biệt các hành tinh vòng trong và vòng ngoài"
        ],
        "application": [
          "Vận dụng kiến thức Hệ Mặt Trời để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 55: Ngân Hà",
      "chapterName": "Chương X: TRÁI ĐẤT VÀ BẦU TRỜI",
      "domain": "Trái Đất và bầu trời [Thiên văn học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Ngân Hà."
        ],
        "understanding": [
          "Mô tả hình dạng và cấu trúc cơ bản của Ngân Hà; xác định vị trí của Hệ Mặt Trời trong Ngân Hà; mở rộng nhận thức về không gian vũ trụ"
        ],
        "application": [
          "Vận dụng kiến thức Ngân Hà để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    }
  ],
  "7": [
    {
      "lessonName": "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
      "chapterName": "Chương MỞ ĐẦU: PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP MÔN KHOA HỌC TỰ NHIÊN",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết 5 bước phương pháp tìm hiểu tự nhiên; vận dụng các kĩ năng tiến trình; sử dụng cổng quang điện và đồng hồ đo thời gian hiện số"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Phương pháp và kĩ năng học tập môn Khoa học tự nhiên."
        ],
        "application": [
          "Vận dụng kiến thức Phương pháp và kĩ năng học tập môn Khoa học tự nhiên để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 2: Nguyên tử",
      "chapterName": "Chương I: NGUYÊN TỬ – SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nguyên tử."
        ],
        "understanding": [
          "Mô tả cấu tạo nguyên tử [hạt nhân, vỏ electron]; xác định số p, số e, số n, điện tích hạt nhân và tính khối lượng nguyên tử theo đơn vị amu"
        ],
        "application": [
          "Vận dụng kiến thức Nguyên tử để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 3: Nguyên tố hoá học",
      "chapterName": "Chương I: NGUYÊN TỬ – SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nêu định nghĩa nguyên tố hoá học; nhận biết, đọc tên chuẩn quốc tế IUPAC và viết đúng kí hiệu hoá học của 20 nguyên tố đầu tiên"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Nguyên tố hoá học."
        ],
        "application": [
          "Vận dụng kiến thức Nguyên tố hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học",
      "chapterName": "Chương I: NGUYÊN TỬ – SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sơ lược về bảng tuần hoàn các nguyên tố hoá học."
        ],
        "understanding": [
          "Nêu nguyên tắc sắp xếp BTH; đọc và tra cứu thông tin từ ô, chu kì, nhóm; xác định vị trí kim loại, phi kim, khí hiếm trong bảng tuần hoàn"
        ],
        "application": [
          "Vận dụng kiến thức Sơ lược về bảng tuần hoàn các nguyên tố hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 5: Phân tử – Đơn chất – Hợp chất",
      "chapterName": "Chương II: PHÂN TỬ – LIÊN KẾT HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Phân tử – Đơn chất – Hợp chất."
        ],
        "understanding": [
          "Phân biệt đơn chất và hợp chất; nêu khái niệm phân tử; tính khối lượng phân tử [amu] của các đơn chất và hợp chất đơn giản"
        ],
        "application": [
          "Vận dụng kiến thức Phân tử – Đơn chất – Hợp chất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 6: Giới thiệu về liên kết hoá học",
      "chapterName": "Chương II: PHÂN TỬ – LIÊN KẾT HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Giới thiệu về liên kết hoá học."
        ],
        "understanding": [
          "Giải thích quy tắc octet; mô tả bản chất liên kết ion [cho/nhận e] và liên kết cộng hoá trị [dùng chung e] qua sơ đồ hình thành liên kết"
        ],
        "application": [
          "Vận dụng kiến thức Giới thiệu về liên kết hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 7: Hoá trị và công thức hoá học",
      "chapterName": "Chương II: PHÂN TỬ – LIÊN KẾT HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hóa học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hoá trị và công thức hoá học."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Hoá trị và công thức hoá học."
        ],
        "application": [
          "Vận dụng quy tắc hoá trị xác định hoá trị của nguyên tố; lập CTHH khi biết hoá trị hoặc % khối lượng nguyên tố; tính % nguyên tố từ CTHH"
        ]
      }
    },
    {
      "lessonName": "Bài 8: Tốc độ chuyển động",
      "chapterName": "Chương III: TỐC ĐỘ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tốc độ chuyển động."
        ],
        "understanding": [
          "Nêu ý nghĩa tốc độ; đổi đơn vị m/s và km/h; áp dụng công thức v = s / t giải các bài toán chuyển động đều và so sánh tốc độ"
        ],
        "application": [
          "Vận dụng kiến thức Tốc độ chuyển động để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 9: Đo tốc độ",
      "chapterName": "Chương III: TỐC ĐỘ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đo tốc độ."
        ],
        "understanding": [
          "Mô tả phương pháp đo tốc độ bằng đồng hồ bấm giây và bằng cổng quang điện; so sánh độ chính xác; hiểu nguyên lí súng bắn tốc độ"
        ],
        "application": [
          "Vận dụng kiến thức Đo tốc độ để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 10: Đồ thị quãng đường – thời gian",
      "chapterName": "Chương III: TỐC ĐỘ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đồ thị quãng đường – thời gian."
        ],
        "understanding": [
          "Vẽ đồ thị s - t từ bảng số liệu; đọc đồ thị để xác định vị trí, thời điểm, tốc độ và mô tả trạng thái chuyển động của vật"
        ],
        "application": [
          "Vận dụng kiến thức Đồ thị quãng đường – thời gian để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
      "chapterName": "Chương III: TỐC ĐỘ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Cơ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông."
        ],
        "understanding": [
          "Phân tích ảnh hưởng của tốc độ đến khoảng cách phanh dừng xe an toàn; giải thích ý nghĩa biển báo tốc độ; liên hệ giáo dục ý thức an toàn giao thông"
        ],
        "application": [
          "Vận dụng kiến thức Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 12: Sóng âm",
      "chapterName": "Chương IV: ÂM THANH",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sóng âm."
        ],
        "understanding": [
          "Nêu đặc điểm của nguồn âm [dao động]; môi trường truyền âm và tốc độ truyền âm trong các môi trường khác nhau; âm không truyền trong chân không"
        ],
        "application": [
          "Vận dụng kiến thức Sóng âm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 13: Độ to và độ cao của âm",
      "chapterName": "Chương IV: ÂM THANH",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Độ to và độ cao của âm."
        ],
        "understanding": [
          "Phân biệt biên độ [quyết định độ to] và tần số [quyết định độ cao của âm]; tính tần số dao động; liên hệ thực tế giọng nói, nhạc cụ"
        ],
        "application": [
          "Vận dụng kiến thức Độ to và độ cao của âm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
      "chapterName": "Chương IV: ÂM THANH",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Sóng âm]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Phản xạ âm, chống ô nhiễm tiếng ồn."
        ],
        "understanding": [
          "Giải thích hiện tượng phản xạ âm và tiếng vang; phân loại vật liệu cách âm/tiêu âm; đề xuất các biện pháp giảm thiểu ô nhiễm tiếng ồn"
        ],
        "application": [
          "Vận dụng kiến thức Phản xạ âm, chống ô nhiễm tiếng ồn để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
      "chapterName": "Chương V: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Năng lượng ánh sáng. Tia sáng, vùng tối."
        ],
        "understanding": [
          "Chứng minh ánh sáng là một dạng năng lượng; phân loại 3 dạng chùm sáng; biểu diễn tia sáng; giải thích sự tạo bóng, hiện tượng nhật thực và nguyệt thực"
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng ánh sáng. Tia sáng, vùng tối để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 16: Sự phản xạ ánh sáng",
      "chapterName": "Chương V: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự phản xạ ánh sáng."
        ],
        "understanding": [
          "Phát biểu và vẽ hình minh hoạ định luật phản xạ ánh sáng; áp dụng tính góc tới, góc phản xạ [i' = i]; phân biệt phản xạ gương và phản xạ khuếch tán"
        ],
        "application": [
          "Vận dụng kiến thức Sự phản xạ ánh sáng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 17: Ảnh của vật qua gương phẳng",
      "chapterName": "Chương V: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Quang học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Ảnh của vật qua gương phẳng."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Ảnh của vật qua gương phẳng."
        ],
        "application": [
          "Nêu 3 tính chất ảnh qua gương phẳng; vận dụng định luật phản xạ và tính chất đối xứng để dựng ảnh của điểm sáng S và vật sáng AB qua gương phẳng"
        ]
      }
    },
    {
      "lessonName": "Bài 18: Nam châm",
      "chapterName": "Chương VI: TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nam châm."
        ],
        "understanding": [
          "Nêu tính chất từ của nam châm; xác định hai cực từ; quy tắc tương tác giữa hai cực nam châm [cùng đẩy, khác hút]; vật liệu từ và không từ"
        ],
        "application": [
          "Vận dụng kiến thức Nam châm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 19: Từ trường",
      "chapterName": "Chương VI: TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết sự tồn tại của từ trường; vẽ đường sức từ và xác định chiều 'Ra Bắc Vào Nam'; hiểu từ trường Trái Đất và cách sử dụng la bàn"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Từ trường."
        ],
        "application": [
          "Vận dụng kiến thức Từ trường để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 20: Chế tạo nam châm điện đơn giản",
      "chapterName": "Chương VI: TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí - Từ học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Chế tạo nam châm điện đơn giản."
        ],
        "understanding": [
          "Mô tả cấu tạo và hoạt động của nam châm điện; phân tích ưu điểm so với nam châm vĩnh cửu; cách làm tăng từ tính của nam châm điện"
        ],
        "application": [
          "Vận dụng kiến thức Chế tạo nam châm điện đơn giản để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khái quát về trao đổi chất và chuyển hoá năng lượng."
        ],
        "understanding": [
          "Nêu định nghĩa và phân biệt trao đổi chất với chuyển hoá năng lượng; phân tích vai trò thiết yếu của 2 quá trình đối với sinh vật"
        ],
        "application": [
          "Vận dụng kiến thức Khái quát về trao đổi chất và chuyển hoá năng lượng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 22: Quang hợp ở thực vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Quang hợp ở thực vật."
        ],
        "understanding": [
          "Viết phương trình quang hợp; nêu bản chất chuyển hoá năng lượng [quang năng → hoá năng]; giải thích đặc điểm lá cây thích nghi với quang hợp"
        ],
        "application": [
          "Vận dụng kiến thức Quang hợp ở thực vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 23: Một số yếu tố ảnh hưởng đến quang hợp",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số yếu tố ảnh hưởng đến quang hợp."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Một số yếu tố ảnh hưởng đến quang hợp."
        ],
        "application": [
          "Phân tích tác động của 4 yếu tố [ánh sáng, nước, CO2, nhiệt độ] đến quang hợp; vận dụng kiến thức quang hợp vào kĩ thuật trồng trọt và bảo vệ cây xanh"
        ]
      }
    },
    {
      "lessonName": "Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Chứng minh quang hợp ở cây xanh."
        ],
        "understanding": [
          "Trình bày các bước tiến hành 2 thí nghiệm chứng minh quang hợp; giải thích vai trò của hoá chất [cồn, iodine] và ý nghĩa kết quả quan sát được"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Chứng minh quang hợp ở cây xanh để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 25: Hô hấp tế bào",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hô hấp tế bào."
        ],
        "understanding": [
          "Viết phương trình hô hấp tế bào; nêu vị trí diễn ra và vai trò của ATP; phân tích mối quan hệ biện chứng giữa quang hợp và hô hấp tế bào"
        ],
        "application": [
          "Vận dụng kiến thức Hô hấp tế bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số yếu tố ảnh hưởng đến hô hấp tế bào."
        ],
        "understanding": [
          "Nêu các yếu tố ảnh hưởng đến hô hấp; giải thích cơ sở khoa học của các phương pháp bảo quản nông sản [phơi khô, bảo quản lạnh, hút chân không]"
        ],
        "application": [
          "Vận dụng kiến thức Một số yếu tố ảnh hưởng đến hô hấp tế bào để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 27: Thực hành: Hô hấp ở thực vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Hô hấp ở thực vật."
        ],
        "understanding": [
          "Mô tả các bước thực hành thí nghiệm hô hấp ở thực vật; giải thích hiện tượng nước vôi trong vẩn đục và nhiệt kế tăng nhiệt độ"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Hô hấp ở thực vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 28: Trao đổi khí ở sinh vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Trao đổi khí ở sinh vật."
        ],
        "understanding": [
          "Nêu cơ chế khuếch tán khí; mô tả cấu tạo và hoạt động đóng mở khí khổng; kể tên các cơ quan trao đổi khí ở động vật; mô tả đường đi của khí ở người"
        ],
        "application": [
          "Vận dụng kiến thức Trao đổi khí ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Vai trò của nước và chất dinh dưỡng đối với sinh vật."
        ],
        "understanding": [
          "Nêu tính chất phân cực của nước; phân tích vai trò của nước và các nhóm chất dinh dưỡng đối với thực vật và động vật; biểu hiện khi cơ thể thiếu nước/khoáng"
        ],
        "application": [
          "Vận dụng kiến thức Vai trò của nước và chất dinh dưỡng đối với sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Trao đổi nước và chất dinh dưỡng ở thực vật."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Trao đổi nước và chất dinh dưỡng ở thực vật."
        ],
        "application": [
          "Mô tả con đường hấp thụ nước ở rễ; phân biệt dòng mạch gỗ và dòng mạch rây; nêu cơ chế và ý nghĩa thoát hơi nước ở lá; vận dụng tưới tiêu hợp lí"
        ]
      }
    },
    {
      "lessonName": "Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Trao đổi nước và chất dinh dưỡng ở động vật."
        ],
        "understanding": [
          "Mô tả các giai đoạn tiêu hoá thức ăn trong ống tiêu hoá ở người; con đường vận chuyển các chất qua 2 vòng tuần hoàn; xây dựng chế độ dinh dưỡng hợp lí"
        ],
        "application": [
          "Vận dụng kiến thức Trao đổi nước và chất dinh dưỡng ở động vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước",
      "chapterName": "Chương VII: TRAO ĐỔI CHẤT VÀ CHUYỂN HOÁ NĂNG LƯỢNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước."
        ],
        "understanding": [
          "Quy trình thực hiện thí nghiệm chứng minh dòng mạch gỗ và thoát hơi nước ở lá; giải thích hiện tượng và kết luận về chức năng của thân và lá"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật",
      "chapterName": "Chương VIII: CẢM ỨNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cảm ứng ở sinh vật và tập tính ở động vật."
        ],
        "understanding": [
          "Nêu khái niệm cảm ứng; phân biệt tập tính bẩm sinh và tập tính học được ở động vật qua các ví dụ; phân tích vai trò của tập tính đối với đời sống động vật"
        ],
        "application": [
          "Vận dụng kiến thức Cảm ứng ở sinh vật và tập tính ở động vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn",
      "chapterName": "Chương VIII: CẢM ỨNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn."
        ],
        "application": [
          "Nêu các hình thức cảm ứng ứng dụng trong trồng trọt [hướng sáng, hướng tiếp xúc, hướng đất]; vận dụng tập tính huấn luyện vật nuôi và rèn luyện thói quen tốt"
        ]
      }
    },
    {
      "lessonName": "Bài 35: Thực hành: Cảm ứng ở sinh vật",
      "chapterName": "Chương VIII: CẢM ỨNG Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Cảm ứng ở sinh vật."
        ],
        "understanding": [
          "Kĩ năng bố trí thí nghiệm chứng minh tính hướng nước, hướng sáng, hướng tiếp xúc ở thực vật; quan sát và mô tả phản ứng cảm ứng của sinh vật"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Cảm ứng ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật",
      "chapterName": "Chương IX: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khái quát về sinh trưởng và phát triển ở sinh vật."
        ],
        "understanding": [
          "Phân biệt sinh trưởng và phát triển; xác định vị trí và chức năng của mô phân sinh đỉnh và mô phân sinh bên ở thực vật"
        ],
        "application": [
          "Vận dụng kiến thức Khái quát về sinh trưởng và phát triển ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 37: Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn",
      "chapterName": "Chương IX: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn."
        ],
        "understanding": [
          "Phân tích các nhân tố môi trường ảnh hưởng đến sinh trưởng, phát triển; giải thích cơ sở khoa học các biện pháp bấm ngọn, tỉa cành, diệt muỗi bọ gậy"
        ],
        "application": [
          "Vận dụng kiến thức Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 38: Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật",
      "chapterName": "Chương IX: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật."
        ],
        "understanding": [
          "Kĩ năng theo dõi đo đạc sự sinh trưởng của cây trồng; mô tả và vẽ sơ đồ vòng đời của sinh vật [thực vật hạt kín, côn trùng, lưỡng cư]"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 39: Sinh sản vô tính ở sinh vật",
      "chapterName": "Chương X: SINH SẢN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sinh sản vô tính ở sinh vật."
        ],
        "understanding": [
          "Nêu khái niệm và đặc điểm sinh sản vô tính; phân biệt các hình thức sinh sản vô tính ở thực vật và động vật; cơ sở khoa học của giâm, chiết, ghép cành"
        ],
        "application": [
          "Vận dụng kiến thức Sinh sản vô tính ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 40: Sinh sản hữu tính ở sinh vật",
      "chapterName": "Chương X: SINH SẢN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sinh sản hữu tính ở sinh vật."
        ],
        "understanding": [
          "Nêu bản chất sinh sản hữu tính; cấu tạo hoa lưỡng tính/đơn tính; phân biệt thụ phấn và thụ tinh; so sánh sinh sản vô tính và hữu tính; thụ tinh ngoài và thụ tinh trong"
        ],
        "application": [
          "Vận dụng kiến thức Sinh sản hữu tính ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 41: Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật",
      "chapterName": "Chương X: SINH SẢN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật."
        ],
        "understanding": [
          "Phân tích các nhân tố ảnh hưởng đến sinh sản; giải thích ứng dụng thụ phấn bổ sung, thụ tinh nhân tạo và điều khiển giới tính trong nông nghiệp"
        ],
        "application": [
          "Vận dụng kiến thức Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 42: Cơ thể sinh vật là một thể thống nhất",
      "chapterName": "Chương X: SINH SẢN Ở SINH VẬT",
      "domain": "Vật sống [Sinh học cơ thể]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cơ thể sinh vật là một thể thống nhất."
        ],
        "understanding": [
          "Chứng minh cơ thể sinh vật là một thể thống nhất; giải thích mối liên hệ phụ thuộc lẫn nhau giữa các quá trình sống [dinh dưỡng, hô hấp, tuần hoàn, bài tiết, cảm ứng, sinh sản]"
        ],
        "application": [
          "Vận dụng kiến thức Cơ thể sinh vật là một thể thống nhất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    }
  ],
  "8": [
    {
      "lessonName": "Bài 1: Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm",
      "chapterName": "Chương MỞ ĐẦU: SỬ DỤNG MỘT SỐ HOÁ CHẤT, THIẾT BỊ CƠ BẢN TRONG PHÒNG THÍ NGHIỆM",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết quy tắc an toàn hoá chất; cách lấy hoá chất rắn/lỏng; sử dụng ống nghiệm, ống hút nhỏ giọt; sử dụng bút đo pH, huyết áp kế, ampe kế, vôn kế, joulemeter và các thiết bị điện an toàn"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm."
        ],
        "application": [
          "Vận dụng kiến thức Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 2: Phản ứng hoá học",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Phân biệt biến đổi vật lí và biến đổi hoá học; giải thích diễn biến phản ứng hoá học ở cấp độ nguyên tử; nhận biết dấu hiệu phản ứng và phân biệt phản ứng toả nhiệt với phản ứng thu nhiệt"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Phản ứng hoá học."
        ],
        "application": [
          "Vận dụng kiến thức Phản ứng hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 3: Mol và tỉ khối chất khí",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Mol và tỉ khối chất khí."
        ],
        "understanding": [
          "Tính số mol từ khối lượng [$n = m/M$] và từ thể tích khí [$n = V/24,79$]; tính khối lượng mol; tính tỉ khối chất khí để so sánh độ nặng nhẹ giữa các chất khí hoặc với không khí"
        ],
        "application": [
          "Vận dụng kiến thức Mol và tỉ khối chất khí để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 4: Dung dịch và nồng độ",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Dung dịch và nồng độ."
        ],
        "understanding": [
          "Phân biệt dung môi, chất tan, dung dịch, dung dịch bão hoà; tính nồng độ phần trăm [$C\\%$] và nồng độ mol [$C_M$]; giải bài tập pha trộn hoặc tính toán pha chế dung dịch"
        ],
        "application": [
          "Vận dụng kiến thức Dung dịch và nồng độ để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 5: Định luật bảo toàn khối lượng và phương trình hoá học",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Định luật bảo toàn khối lượng và phương trình hoá học."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Định luật bảo toàn khối lượng và phương trình hoá học."
        ],
        "application": [
          "Phát biểu và vận dụng định luật bảo toàn khối lượng để tính khối lượng chất; lập thành thạo phương trình hoá học bằng phương pháp chẵn - lẻ hoặc cân bằng số nguyên tử; nêu ý nghĩa tỉ lệ hạt"
        ]
      }
    },
    {
      "lessonName": "Bài 6: Tính theo phương trình hoá học",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tính theo phương trình hoá học."
        ],
        "understanding": [
          "Các bước tính theo phương trình hoá học [đổi dữ kiện ra mol -> đặt tỉ lệ -> tính lượng chất cần tìm]; tính hiệu suất phản ứng và bài toán chất dư - chất hết"
        ],
        "application": [
          "Vận dụng kiến thức Tính theo phương trình hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 7: Tốc độ phản ứng và chất xúc tác",
      "chapterName": "Chương I: PHẢN ỨNG HOÁ HỌC",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tốc độ phản ứng và chất xúc tác."
        ],
        "understanding": [
          "Nêu khái niệm tốc độ phản ứng và chất xúc tác; giải thích các hiện tượng thực tế dựa trên 4 yếu tố ảnh hưởng [nồng độ, nhiệt độ, diện tích bề mặt, chất xúc tác] như bảo quản thực phẩm, đập nhỏ than khi đốt"
        ],
        "application": [
          "Vận dụng kiến thức Tốc độ phản ứng và chất xúc tác để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 8: Acid",
      "chapterName": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nêu khái niệm và công thức chung của acid; tính chất làm đổi màu quỳ tím và tác dụng với kim loại [Fe, Zn, Mg, Al]; nhận biết ứng dụng và quy tắc pha loãng acid $H_2SO_4$ đặc an toàn"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Acid."
        ],
        "application": [
          "Vận dụng kiến thức Acid để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 9: Base. Thang pH",
      "chapterName": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Base. Thang pH."
        ],
        "understanding": [
          "Nêu khái niệm, công thức và quy tắc gọi tên base; phân biệt base tan [kiềm: NaOH, KOH, $Ca[OH]_2$, $Ba[OH]_2$] và base không tan; tính chất hoá học [chỉ thị màu, phản ứng trung hoà]; đọc giá trị và ý nghĩa thang pH"
        ],
        "application": [
          "Vận dụng kiến thức Base. Thang pH để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 10: Oxide",
      "chapterName": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Oxide."
        ],
        "understanding": [
          "Nêu định nghĩa và phân loại 4 nhóm oxide; đọc tên gọi theo IUPAC; viết phương trình hoá học minh hoạ tính chất hoá học của oxide acid và oxide base"
        ],
        "application": [
          "Vận dụng kiến thức Oxide để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 11: Muối",
      "chapterName": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Muối."
        ],
        "understanding": [
          "Nêu khái niệm và gọi tên muối; điều kiện xảy ra phản ứng trao đổi; viết phương trình hoá học thể hiện tính chất hoá học và phương pháp điều chế muối; hoàn thành chuỗi chuyển hoá các hợp chất vô cơ"
        ],
        "application": [
          "Vận dụng kiến thức Muối để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 12: Phân bón hoá học",
      "chapterName": "Chương II: MỘT SỐ HỢP CHẤT THÔNG DỤNG",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nêu vai trò của các nguyên tố dinh dưỡng N, P, K; nhận biết thành phần các loại phân đạm, lân, kali, NPK; trình bày nguyên tắc 4 đúng khi bón phân và tác hại của ô nhiễm phân bón"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Phân bón hoá học."
        ],
        "application": [
          "Vận dụng kiến thức Phân bón hoá học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 13: Khối lượng riêng",
      "chapterName": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khối lượng riêng."
        ],
        "understanding": [
          "Định nghĩa khối lượng riêng; công thức $D = m/V$ và cách chuyển đổi đơn vị; tính khối lượng hoặc thể tích của vật khi biết khối lượng riêng"
        ],
        "application": [
          "Vận dụng kiến thức Khối lượng riêng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 14: Thực hành xác định khối lượng riêng",
      "chapterName": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành xác định khối lượng riêng."
        ],
        "understanding": [
          "Các bước thực hành xác định khối lượng riêng của vật hình học đều, chất lỏng và vật rắn bất kì chìm trong nước; xử lí bảng số liệu thực hành"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành xác định khối lượng riêng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 15: Áp suất trên một bề mặt",
      "chapterName": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Áp suất trên một bề mặt."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Áp suất trên một bề mặt."
        ],
        "application": [
          "Phân biệt áp lực và lực thông thường; vận dụng công thức $p = F/s$; giải thích các biện pháp làm tăng áp suất [tăng $F$, giảm $s$] hoặc giảm áp suất [tăng $s$, giảm $F$] trong thực tiễn"
        ]
      }
    },
    {
      "lessonName": "Bài 16: Áp suất chất lỏng. Áp suất khí quyển",
      "chapterName": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Áp suất chất lỏng. Áp suất khí quyển."
        ],
        "understanding": [
          "Nêu đặc điểm áp suất chất lỏng và sự truyền áp suất [máy nén thuỷ lực]; chứng minh sự tồn tại của áp suất khí quyển qua các hiện tượng thực tế và ứng dụng"
        ],
        "application": [
          "Vận dụng kiến thức Áp suất chất lỏng. Áp suất khí quyển để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 17: Lực đẩy Archimedes",
      "chapterName": "Chương III: KHỐI LƯỢNG RIÊNG VÀ ÁP SUẤT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Lực đẩy Archimedes."
        ],
        "understanding": [
          "Phát biểu định luật Archimedes; công thức $F_A = d \\cdot V$; giải thích điều kiện vật chìm, vật nổi, vật lơ lửng; tính toán độ lớn lực đẩy Archimedes"
        ],
        "application": [
          "Vận dụng kiến thức Lực đẩy Archimedes để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 18: Tác dụng làm quay của lực. Moment lực",
      "chapterName": "Chương IV: TÁC DỤNG LÀM QUAY CỦA LỰC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết tác dụng làm quay của lực; định nghĩa moment lực; giải thích vì sao tay nắm cửa đặt xa bản lề, cờ lê cán dài dễ vặn bu lông hơn"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Tác dụng làm quay của lực. Moment lực."
        ],
        "application": [
          "Vận dụng kiến thức Tác dụng làm quay của lực. Moment lực để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 19: Đòn bẩy và ứng dụng",
      "chapterName": "Chương IV: TÁC DỤNG LÀM QUAY CỦA LỰC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đòn bẩy và ứng dụng."
        ],
        "understanding": [
          "Xác định điểm tựa và các cánh tay đòn; phân loại 3 loại đòn bẩy; giải thích các ứng dụng thực tế của đòn bẩy trong đời sống, kĩ thuật và hệ vận động ở người"
        ],
        "application": [
          "Vận dụng kiến thức Đòn bẩy và ứng dụng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 20: Hiện tượng nhiễm điện do cọ xát",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hiện tượng nhiễm điện do cọ xát."
        ],
        "understanding": [
          "Mô tả hiện tượng nhiễm điện do cọ xát; nêu hai loại điện tích và tương tác hút - đẩy; giải thích cơ chế nhiễm điện dựa trên sự dịch chuyển electron"
        ],
        "application": [
          "Vận dụng kiến thức Hiện tượng nhiễm điện do cọ xát để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 21: Dòng điện, nguồn điện",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Dòng điện, nguồn điện."
        ],
        "understanding": [
          "Nêu định nghĩa dòng điện, nguồn điện; phân biệt vật dẫn điện và vật cách điện trong các thiết bị thực tế [ruột dây điện, vỏ nhựa cách điện",
          "]"
        ],
        "application": [
          "Vận dụng kiến thức Dòng điện, nguồn điện để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 22: Mạch điện đơn giản",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Quy ước chiều dòng điện; nhận biết và vẽ đúng sơ đồ mạch điện từ mạch thực tế hoặc ngược lại; nêu vai trò bảo vệ của cầu chì, aptomat, rơle"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Mạch điện đơn giản."
        ],
        "application": [
          "Vận dụng kiến thức Mạch điện đơn giản để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 23: Tác dụng của dòng điện",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết 4 tác dụng chính của dòng điện [nhiệt, phát sáng, hoá học, sinh lí]; lấy ví dụ minh hoạ ứng dụng thực tế và nêu quy tắc an toàn điện tránh tai nạn sinh lí"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Tác dụng của dòng điện."
        ],
        "application": [
          "Vận dụng kiến thức Tác dụng của dòng điện để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 24: Cường độ dòng điện và hiệu điện thế",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cường độ dòng điện và hiệu điện thế."
        ],
        "understanding": [
          "Nêu khái niệm và đơn vị đo của cường độ dòng điện [$I$] và hiệu điện thế [$U$]; cách sử dụng và quy tắc mắc ampe kế [nối tiếp], vôn kế [song song] đúng cực"
        ],
        "application": [
          "Vận dụng kiến thức Cường độ dòng điện và hiệu điện thế để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 25: Thực hành đo cường độ dòng điện và hiệu điện thế",
      "chapterName": "Chương V: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành đo cường độ dòng điện và hiệu điện thế."
        ],
        "understanding": [
          "Thao tác mắc mạch đo cường độ dòng điện và hiệu điện thế; đọc thang đo thiết bị đo; nhận xét đặc điểm mạch nối tiếp"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành đo cường độ dòng điện và hiệu điện thế để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 26: Năng lượng nhiệt và nội năng",
      "chapterName": "Chương VI: NHIỆT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Năng lượng nhiệt và nội năng."
        ],
        "understanding": [
          "Mối quan hệ giữa nhiệt độ và chuyển động nhiệt của phân tử; phân biệt năng lượng nhiệt và nội năng; hai cách làm thay đổi nội năng [truyền nhiệt, thực hiện công]"
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng nhiệt và nội năng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 27: Thực hành đo năng lượng nhiệt bằng joulemeter",
      "chapterName": "Chương VI: NHIỆT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành đo năng lượng nhiệt bằng joulemeter."
        ],
        "understanding": [
          "Các bước lắp ráp thí nghiệm đo năng lượng nhiệt; vận hành joulemeter; tính toán năng lượng nhiệt cần thiết để làm nóng một lượng nước"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành đo năng lượng nhiệt bằng joulemeter để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 28: Sự truyền nhiệt",
      "chapterName": "Chương VI: NHIỆT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự truyền nhiệt."
        ],
        "understanding": [
          "Phân biệt 3 hình thức truyền nhiệt [dẫn nhiệt ở chất rắn, đối lưu ở chất lỏng/khí, bức xạ nhiệt truyền được trong chân không]; giải thích cấu tạo phích nước [bình thuỷ] và hiệu ứng nhà kính"
        ],
        "application": [
          "Vận dụng kiến thức Sự truyền nhiệt để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 29: Sự nở vì nhiệt",
      "chapterName": "Chương VI: NHIỆT",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự nở vì nhiệt."
        ],
        "understanding": [
          "So sánh sự nở vì nhiệt giữa rắn, lỏng, khí; nguyên lí hoạt động của băng kép; giải thích các hiện tượng thực tế và biện pháp khắc phục tác hại sự nở vì nhiệt [khe co giãn đường ray, gối đỡ cầu]"
        ],
        "application": [
          "Vận dụng kiến thức Sự nở vì nhiệt để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 30: Khái quát về cơ thể người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết các phần và khoang cơ thể; kể tên các hệ cơ quan chính và nêu vai trò khái quát đảm bảo tính thống nhất của cơ thể người"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Khái quát về cơ thể người."
        ],
        "application": [
          "Vận dụng kiến thức Khái quát về cơ thể người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 31: Hệ vận động ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ vận động ở người."
        ],
        "understanding": [
          "Mô tả cấu tạo bộ xương và hệ cơ; nguyên nhân và cách phòng chống tật cong vẹo cột sống, loãng xương; quy trình sơ cứu băng bó cố định gãy xương"
        ],
        "application": [
          "Vận dụng kiến thức Hệ vận động ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 32: Dinh dưỡng và tiêu hoá ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Dinh dưỡng và tiêu hoá ở người."
        ],
        "understanding": [
          "Cấu tạo ống và tuyến tiêu hoá; phân biệt tiêu hoá cơ học và tiêu hoá hoá học; hấp thụ chất dinh dưỡng ở ruột non; nguyên nhân bệnh sâu răng, viêm loét dạ dày; nguyên tắc xây dựng khẩu phần ăn và an toàn vệ sinh thực phẩm"
        ],
        "application": [
          "Vận dụng kiến thức Dinh dưỡng và tiêu hoá ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 33: Máu và hệ tuần hoàn của cơ thể người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Máu và hệ tuần hoàn của cơ thể người."
        ],
        "understanding": [
          "Nêu thành phần chức năng của máu; cơ chế miễn dịch và vaccine; sơ đồ truyền máu ABO; cấu tạo tim và đường đi của 2 vòng tuần hoàn; nguyên nhân huyết áp cao, xơ vữa động mạch; kĩ năng sơ cứu cầm máu"
        ],
        "application": [
          "Vận dụng kiến thức Máu và hệ tuần hoàn của cơ thể người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 34: Hệ hô hấp ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ hô hấp ở người."
        ],
        "understanding": [
          "Cấu tạo đường dẫn khí và phế nang; cơ chế trao đổi khí ở phổi và tế bào; tác hại của khói thuốc lá; quy trình cấp cứu đuối nước và hô hấp nhân tạo"
        ],
        "application": [
          "Vận dụng kiến thức Hệ hô hấp ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 35: Hệ bài tiết ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ bài tiết ở người."
        ],
        "understanding": [
          "Cấu tạo nephron và cơ chế tạo thành nước tiểu; nguyên nhân gây sỏi thận, suy thận; nguyên tắc bảo vệ hệ bài tiết [uống đủ nước, không ăn mặn, không nhịn tiểu]; thành tựu ghép thận, chạy thận nhân tạo"
        ],
        "application": [
          "Vận dụng kiến thức Hệ bài tiết ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 36: Điều hoà môi trường trong của cơ thể người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Điều hoà môi trường trong của cơ thể người."
        ],
        "understanding": [
          "Nêu các thành phần môi trường trong cơ thể; định nghĩa cân bằng nội môi; sơ đồ cơ chế điều hoà và vai trò của gan, thận trong duy trì áp suất thẩm thấu, đường huyết"
        ],
        "application": [
          "Vận dụng kiến thức Điều hoà môi trường trong của cơ thể người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 37: Hệ thần kinh và các giác quan ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ thần kinh và các giác quan ở người."
        ],
        "understanding": [
          "Cấu tạo hệ thần kinh trung ương và ngoại biên; chức năng điều khiển của não bộ; cấu tạo mắt, cơ chế tạo ảnh và cách khắc phục cận thị/viễn thị; cấu tạo tai và cơ chế nghe; tác hại của chất gây nghiện đối với hệ thần kinh"
        ],
        "application": [
          "Vận dụng kiến thức Hệ thần kinh và các giác quan ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 38: Hệ nội tiết ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ nội tiết ở người."
        ],
        "understanding": [
          "Phân biệt tuyến nội tiết và tuyến ngoại tiết; kể tên và nêu vai trò các tuyến nội tiết chính [tuyến yên, tuyến giáp, tuyến tuỵ, tuyến sinh dục]; cơ chế điều hoà đường huyết của insulin và glucagon; nguyên nhân bệnh tiểu đường, bướu cổ"
        ],
        "application": [
          "Vận dụng kiến thức Hệ nội tiết ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 39: Da và điều hoà thân nhiệt ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Da và điều hoà thân nhiệt ở người."
        ],
        "understanding": [
          "Mô tả 3 lớp cấu tạo và chức năng của da; cơ chế điều hoà thân nhiệt khi trời nóng [toát mồ hôi, dãn mạch máu] và trời lạnh [co mạch, run sinh nhiệt]; phương pháp xử trí khi bị sốt, cảm lạnh, say nắng"
        ],
        "application": [
          "Vận dụng kiến thức Da và điều hoà thân nhiệt ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 40: Sinh sản ở người",
      "chapterName": "Chương VII: SINH HỌC CƠ THỂ NGƯỜI",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sinh sản ở người."
        ],
        "understanding": [
          "Cấu tạo chức năng hệ sinh dục nam/nữ; phân biệt thụ tinh và thụ thai; giải thích hiện tượng kinh nguyệt; kể tên và nêu cơ chế các biện pháp tránh thai an toàn; phòng tránh các bệnh lây truyền qua đường tình dục"
        ],
        "application": [
          "Vận dụng kiến thức Sinh sản ở người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 41: Môi trường và các nhân tố sinh thái",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Môi trường và các nhân tố sinh thái."
        ],
        "understanding": [
          "Nêu khái niệm và phân loại 4 loại môi trường sống; phân biệt nhân tố vô sinh và hữu sinh; đọc đồ thị giới hạn sinh thái và xác định khoảng thuận lợi, khoảng chống chịu của loài"
        ],
        "application": [
          "Vận dụng kiến thức Môi trường và các nhân tố sinh thái để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 42: Quần thể sinh vật",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Quần thể sinh vật."
        ],
        "understanding": [
          "Định nghĩa và lấy ví dụ đúng về quần thể sinh vật; phân tích 5 đặc trưng cơ bản của quần thể [mật độ, tỉ lệ đực/cái, nhóm tuổi, phân bố, kích thước]; đề xuất biện pháp bảo vệ quần thể có nguy cơ tuyệt chủng"
        ],
        "application": [
          "Vận dụng kiến thức Quần thể sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 43: Quần xã sinh vật",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Quần xã sinh vật."
        ],
        "understanding": [
          "Phân biệt quần thể và quần xã sinh vật; nêu đặc trưng về thành phần loài [loài ưu thế, loài đặc trưng] và độ phong phú; trình bày các biện pháp bảo vệ đa dạng sinh học trong quần xã"
        ],
        "application": [
          "Vận dụng kiến thức Quần xã sinh vật để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 44: Hệ sinh thái",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Hệ sinh thái."
        ],
        "understanding": [
          "Nêu cấu trúc 2 thành phần của hệ sinh thái; phân biệt 3 nhóm sinh vật [sản xuất, tiêu thụ, phân giải]; vẽ chuỗi và lưới thức ăn từ dữ liệu cho trước; nêu quy luật tháp sinh thái và bảo vệ hệ sinh thái"
        ],
        "application": [
          "Vận dụng kiến thức Hệ sinh thái để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 45: Sinh quyển",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nêu khái niệm và phạm vi giới hạn của sinh quyển; nhận biết các khu sinh học trên cạn [tundra, taiga, rừng rụng lá, xavan, rừng nhiệt đới] và khu sinh học dưới nước"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Sinh quyển."
        ],
        "application": [
          "Vận dụng kiến thức Sinh quyển để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 46: Cân bằng tự nhiên",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cân bằng tự nhiên."
        ],
        "understanding": [
          "Định nghĩa cân bằng tự nhiên và hiện tượng khống chế sinh học; phân tích nguyên nhân gây mất cân bằng tự nhiên; đề xuất biện pháp duy trì cân bằng sinh thái"
        ],
        "application": [
          "Vận dụng kiến thức Cân bằng tự nhiên để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 47: Bảo vệ môi trường",
      "chapterName": "Chương VIII: SINH VẬT VÀ MÔI TRƯỜNG",
      "domain": "Trái Đất và bầu trời / Vật sống [Sinh thái học]",
      "outcomes": {
        "recognition": [
          "Phân tích tác động của con người qua các thời kì; nhận biết các dạng ô nhiễm môi trường và nguyên nhân; nêu biểu hiện biến đổi khí hậu; đề xuất các hành động cụ thể của học sinh trong việc bảo vệ môi trường và động vật hoang dã"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Bảo vệ môi trường."
        ],
        "application": [
          "Vận dụng kiến thức Bảo vệ môi trường để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    }
  ],
  "9": [
    {
      "lessonName": "Bài 1: Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học",
      "chapterName": "Chương MỞ ĐẦU: NHẬN BIẾT MỘT SỐ DỤNG CỤ, HOÁ CHẤT. THUYẾT TRÌNH MỘT VẤN ĐỀ KHOA HỌC",
      "domain": "Phương pháp và kĩ năng khoa học",
      "outcomes": {
        "recognition": [
          "Nhận biết các dụng cụ quang học, điện từ, hoá chất cơ bản; sử dụng an toàn thiết bị thí nghiệm; các bước viết báo cáo khoa học và trình bày bài thuyết trình/poster"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học."
        ],
        "application": [
          "Vận dụng kiến thức Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 2: Động năng. Thế năng",
      "chapterName": "Chương I: NĂNG LƯỢNG CƠ HỌC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Động năng. Thế năng."
        ],
        "understanding": [
          "Nêu định nghĩa động năng, thế năng trọng trường, thế năng đàn hồi; phân tích các yếu tố ảnh hưởng đến động năng [$m, v$] và thế năng trọng trường [$m, h$]; so sánh năng lượng của các vật trong tình huống thực tế"
        ],
        "application": [
          "Vận dụng kiến thức Động năng. Thế năng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 3: Cơ năng",
      "chapterName": "Chương I: NĂNG LƯỢNG CƠ HỌC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cơ năng."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Cơ năng."
        ],
        "application": [
          "Khái niệm cơ năng; sự chuyển hoá giữa động năng và thế năng; vận dụng định luật bảo toàn cơ năng để giải thích chuyển động của tàu lượn siêu tốc, con lắc, thác nước"
        ]
      }
    },
    {
      "lessonName": "Bài 4: Công và công suất",
      "chapterName": "Chương I: NĂNG LƯỢNG CƠ HỌC",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết trường hợp có công cơ học và công bằng 0; áp dụng công thức $A = F \\cdot s$ và $P = A/t$; so sánh công suất của các máy móc, động cơ"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Công và công suất."
        ],
        "application": [
          "Vận dụng kiến thức Công và công suất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 5: Khúc xạ ánh sáng",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết hiện tượng khúc xạ ánh sáng; phân biệt góc tới [$i$] và góc khúc xạ [$r$]; vẽ đường truyền tia sáng qua mặt phân cách hai môi trường; giải thích hiện tượng nhìn thấy đáy chậu nước nông hơn thực tế"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Khúc xạ ánh sáng."
        ],
        "application": [
          "Vận dụng kiến thức Khúc xạ ánh sáng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 6: Phản xạ toàn phần",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Phản xạ toàn phần."
        ],
        "understanding": [
          "Nêu định nghĩa và điều kiện để xảy ra phản xạ toàn phần; tính góc tới giới hạn; giải thích nguyên lí hoạt động của sợi quang học [cáp quang] và hiện tượng ảo tượng"
        ],
        "application": [
          "Vận dụng kiến thức Phản xạ toàn phần để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 7: Lăng kính",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Lăng kính."
        ],
        "understanding": [
          "Mô tả cấu tạo lăng kính; giải thích hiện tượng tán sắc ánh sáng qua lăng kính và sự tạo thành cầu vồng; giải thích màu sắc của các vật dưới ánh sáng mặt trời và ánh sáng màu"
        ],
        "application": [
          "Vận dụng kiến thức Lăng kính để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 8: Thấu kính",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thấu kính."
        ],
        "understanding": [
          "Phân biệt thấu kính hội tụ và phân kì; vẽ chính xác đường truyền 3 tia sáng đặc biệt; dựng ảnh $A'B'$ của vật qua thấu kính hội tụ/phân kì; xác định tính chất ảnh [thật/ảo, chiều, độ lớn so với vật]"
        ],
        "application": [
          "Vận dụng kiến thức Thấu kính để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 9: Thực hành đo tiêu cự của thấu kính hội tụ",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Thực hành đo tiêu cự của thấu kính hội tụ."
        ],
        "understanding": [
          "Các bước tiến hành thí nghiệm đo tiêu cự thấu kính hội tụ; công thức tính $f = [d + d']/4$; xử lí bảng số liệu thực hành và sai số"
        ],
        "application": [
          "Vận dụng kiến thức Thực hành đo tiêu cự của thấu kính hội tụ để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 10: Kính lúp. Bài tập thấu kính",
      "chapterName": "Chương II: ÁNH SÁNG",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Kính lúp. Bài tập thấu kính."
        ],
        "understanding": [
          "Cấu tạo và công dụng của kính lúp; điều kiện đặt vật để quan sát qua kính lúp; giải bài toán quang hình học tính $d, d', f, h'$ bằng hình học tam giác đồng dạng"
        ],
        "application": [
          "Vận dụng kiến thức Kính lúp. Bài tập thấu kính để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 11: Điện trở. Định luật Ohm",
      "chapterName": "Chương III: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Điện trở. Định luật Ohm."
        ],
        "understanding": [
          "Phát biểu và viết biểu thức định luật Ohm [$I = U/R$]; ý nghĩa của điện trở; áp dụng công thức $R = \\rho \\cdot l / S$ để tính điện trở dây dẫn; đọc đồ thị biểu diễn mối quan hệ $I - U$"
        ],
        "application": [
          "Vận dụng kiến thức Điện trở. Định luật Ohm để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 12: Đoạn mạch nối tiếp, song song",
      "chapterName": "Chương III: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đoạn mạch nối tiếp, song song."
        ],
        "understanding": [
          "Các quy tắc về $I, U, R_{tđ}$ trong mạch nối tiếp và song song; tính toán điện trở tương đương và cường độ dòng điện qua các nhánh trong mạch hỗn hợp cơ bản"
        ],
        "application": [
          "Vận dụng kiến thức Đoạn mạch nối tiếp, song song để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 13: Năng lượng của dòng điện và công suất điện",
      "chapterName": "Chương III: ĐIỆN",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Năng lượng của dòng điện và công suất điện."
        ],
        "understanding": [
          "Công thức tính điện năng tiêu thụ $A = UIt = Pt$; công suất điện $P = UI$; ý nghĩa số ghi trên đồ dùng điện; bài toán tính lượng điện tiêu thụ và hoá đơn tiền điện thực tế"
        ],
        "application": [
          "Vận dụng kiến thức Năng lượng của dòng điện và công suất điện để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 14: Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều",
      "chapterName": "Chương IV: ĐIỆN TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết hiện tượng cảm ứng điện từ; nêu điều kiện làm xuất hiện dòng điện cảm ứng; nguyên tắc hoạt động của máy phát điện xoay chiều trong thực tế [nhà máy thuỷ điện, nhiệt điện, dynamo xe đạp]"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều."
        ],
        "application": [
          "Vận dụng kiến thức Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 15: Tác dụng của dòng điện xoay chiều",
      "chapterName": "Chương IV: ĐIỆN TỪ",
      "domain": "Năng lượng và sự biến đổi [Vật lí]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tác dụng của dòng điện xoay chiều."
        ],
        "understanding": [
          "Kể tên và phân tích 4 tác dụng chính của dòng điện xoay chiều; giải thích vì sao tác dụng từ của dòng điện xoay chiều có tính chất đổi chiều liên tục; an toàn sử dụng mạng điện sinh hoạt 220V"
        ],
        "application": [
          "Vận dụng kiến thức Tác dụng của dòng điện xoay chiều để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch",
      "chapterName": "Chương V: NĂNG LƯỢNG VỚI CUỘC SỐNG",
      "domain": "Trái Đất và bầu trời / Vật lí",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch."
        ],
        "understanding": [
          "Mô tả vòng năng lượng trên Trái Đất; kể tên các dạng năng lượng hoá thạch; phân tích nguy cơ cạn kiệt và tác động xấu đến môi trường do đốt cháy nhiên liệu hoá thạch"
        ],
        "application": [
          "Vận dụng kiến thức Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 17: Một số dạng năng lượng tái tạo",
      "chapterName": "Chương V: NĂNG LƯỢNG VỚI CUỘC SỐNG",
      "domain": "Trái Đất và bầu trời / Vật lí",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Một số dạng năng lượng tái tạo."
        ],
        "understanding": [
          "Phân biệt năng lượng tái tạo và năng lượng không tái tạo; so sánh ưu - nhược điểm của các dạng năng lượng tái tạo; đề xuất các hành động tiết kiệm và sử dụng năng lượng hiệu quả"
        ],
        "application": [
          "Vận dụng kiến thức Một số dạng năng lượng tái tạo để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 18: Tính chất chung của kim loại",
      "chapterName": "Chương VI: KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tính chất chung của kim loại."
        ],
        "understanding": [
          "Nêu 4 tính chất vật lí cơ bản của kim loại và ứng dụng; viết phương trình hoá học minh hoạ tính chất hoá học của kim loại [tác dụng phi kim, acid loãng, muối]; dự đoán phản ứng"
        ],
        "application": [
          "Vận dụng kiến thức Tính chất chung của kim loại để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 19: Dãy hoạt động hoá học",
      "chapterName": "Chương VI: KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Dãy hoạt động hoá học."
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Dãy hoạt động hoá học."
        ],
        "application": [
          "Thuộc thứ tự dãy hoạt động hoá học; vận dụng 4 ý nghĩa của dãy để xét tính khả thi của phản ứng và giải bài toán kim loại tác dụng với acid, muối"
        ]
      }
    },
    {
      "lessonName": "Bài 20: Tách kim loại và việc sử dụng hợp kim",
      "chapterName": "Chương VI: KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tách kim loại và việc sử dụng hợp kim."
        ],
        "understanding": [
          "Nêu nguyên tắc tách kim loại [nhiệt luyện, điện phân nóng chảy]; quy trình sản xuất gang, thép và nhôm; phân biệt kim loại nguyên chất và hợp kim; các biện pháp chống ăn mòn kim loại trong thực tế"
        ],
        "application": [
          "Vận dụng kiến thức Tách kim loại và việc sử dụng hợp kim để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 21: Sự khác nhau cơ bản giữa phi kim và kim loại",
      "chapterName": "Chương VI: KIM LOẠI. SỰ KHÁC NHAU CƠ BẢN GIỮA PHI KIM VÀ KIM LOẠI",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự khác nhau cơ bản giữa phi kim và kim loại."
        ],
        "understanding": [
          "So sánh sự khác biệt cơ bản về tính chất vật lí và hoá học giữa kim loại và phi kim; kể tên ứng dụng quan trọng của carbon, lưu huỳnh, chlorine"
        ],
        "application": [
          "Vận dụng kiến thức Sự khác nhau cơ bản giữa phi kim và kim loại để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 22: Giới thiệu về hợp chất hữu cơ",
      "chapterName": "Chương VII: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Giới thiệu về hợp chất hữu cơ."
        ],
        "understanding": [
          "Định nghĩa hợp chất hữu cơ và phân loại [hydrocarbon và dẫn xuất]; quy tắc hoá trị trong hoá hữu cơ; viết công thức cấu tạo thu gọn của một số phân tử đơn giản"
        ],
        "application": [
          "Vận dụng kiến thức Giới thiệu về hợp chất hữu cơ để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 23: Alkane",
      "chapterName": "Chương VII: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Alkane."
        ],
        "understanding": [
          "Khái niệm và đặc điểm liên kết đơn của alkane; viết công thức phân tử và đọc tên 4 alkane đầu dãy; viết phương trình phản ứng cháy; ứng dụng làm nhiên liệu và biện pháp an toàn khí gas"
        ],
        "application": [
          "Vận dụng kiến thức Alkane để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 24: Alkene",
      "chapterName": "Chương VII: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Đặc điểm liên kết đôi của ethylene; phản ứng cháy, phản ứng cộng nước brom [dấu hiệu nhận biết] và phản ứng trùng hợp tạo polyethylene; ứng dụng giấm chín hoa quả"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Alkene."
        ],
        "application": [
          "Vận dụng kiến thức Alkene để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 25: Nguồn nhiên liệu",
      "chapterName": "Chương VII: GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nguồn nhiên liệu."
        ],
        "understanding": [
          "Thành phần và phương pháp chưng cất phân đoạn dầu mỏ; phân loại nhiên liệu; nguyên tắc sử dụng nhiên liệu hiệu quả [cung cấp đủ không khí, tăng diện tích tiếp xúc] và vai trò của nhiên liệu sinh học"
        ],
        "application": [
          "Vận dụng kiến thức Nguồn nhiên liệu để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 26: Ethylic alcohol",
      "chapterName": "Chương VIII: ETHYLIC ALCOHOL VÀ ACETIC ACID",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Ethylic alcohol."
        ],
        "understanding": [
          "Công thức cấu tạo và nhóm $-OH$; khái niệm và bài tập tính độ cồn; tính chất hoá học [cháy, tác dụng với Na]; phương pháp điều chế lên men rượu; tác hại của rượu bia"
        ],
        "application": [
          "Vận dụng kiến thức Ethylic alcohol để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 27: Acetic acid",
      "chapterName": "Chương VIII: ETHYLIC ALCOHOL VÀ ACETIC ACID",
      "domain": "Chất và sự biến đổi của chất [Hoá học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Acetic acid."
        ],
        "understanding": [
          "Đặc điểm nhóm chức $-COOH$; tính acid của acetic acid [viết phương trình hoá học với kim loại, base, oxide base, muối carbonate]; phản ứng ester hoá; ứng dụng và điều chế giấm ăn"
        ],
        "application": [
          "Vận dụng kiến thức Acetic acid để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 28: Lipid",
      "chapterName": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Lipid."
        ],
        "understanding": [
          "Khái niệm và công thức chung của chất béo; phản ứng thuỷ phân trong môi trường kiềm [phản ứng xà phòng hoá]; vai trò dinh dưỡng của chất béo"
        ],
        "application": [
          "Vận dụng kiến thức Lipid để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 29: Carbohydrate. Glucose và saccharose",
      "chapterName": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Carbohydrate. Glucose và saccharose."
        ],
        "understanding": [
          "Công thức phân tử và tính chất vật lí của glucose và saccharose; phản ứng tráng bạc của glucose; phản ứng thuỷ phân saccharose; vai trò đối với sức khoẻ con người"
        ],
        "application": [
          "Vận dụng kiến thức Carbohydrate. Glucose và saccharose để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 30: Tinh bột và cellulose",
      "chapterName": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "outcomes": {
        "recognition": [
          "Phân biệt tinh bột và cellulose về cấu trúc phân tử và nguồn gốc; phản ứng thuỷ phân tạo glucose; phản ứng nhận biết tinh bột bằng iodine; ứng dụng trong đời sống"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Tinh bột và cellulose."
        ],
        "application": [
          "Vận dụng kiến thức Tinh bột và cellulose để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 31: Protein",
      "chapterName": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "outcomes": {
        "recognition": [
          "Khái niệm protein; hiện tượng đông tụ protein do nhiệt độ/acid; phản ứng thuỷ phân tạo amino acid; nhận biết sợi len lông cừu/tơ tằm bằng phản ứng cháy khét; vai trò dinh dưỡng"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Protein."
        ],
        "application": [
          "Vận dụng kiến thức Protein để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 32: Polymer",
      "chapterName": "Chương IX: LIPID. CARBOHYDRATE. PROTEIN. POLYMER",
      "domain": "Chất và sự biến đổi của chất [Hoá sinh]",
      "outcomes": {
        "recognition": [
          "Khái niệm monomer, mắt xích, hệ số trùng hợp; phân loại polymer tự nhiên và tổng hợp; nhận biết 4 loại vật liệu polymer [chất dẻo, tơ, cao su, keo dán]; giải pháp giảm thiểu ô nhiễm rác thải nhựa"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Polymer."
        ],
        "application": [
          "Vận dụng kiến thức Polymer để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 33: Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất",
      "chapterName": "Chương X: KHAI THÁC TÀI NGUYÊN TỪ VỎ TRÁI ĐẤT",
      "domain": "Trái Đất và bầu trời / Hoá học",
      "outcomes": {
        "recognition": [
          "Nhận biết các nguyên tố phổ biến nhất trong vỏ Trái Đất [O, Si, Al, Fe]; các dạng chất khoáng chủ yếu; nguyên tắc khai thác tài nguyên khoáng sản bền vững"
        ],
        "understanding": [
          "Giải thích, phân biệt được các hiện tượng và bản chất khoa học liên quan đến Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất."
        ],
        "application": [
          "Vận dụng kiến thức Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 34: Khai thác đá vôi. Công nghiệp silicate",
      "chapterName": "Chương X: KHAI THÁC TÀI NGUYÊN TỪ VỎ TRÁI ĐẤT",
      "domain": "Trái Đất và bầu trời / Hoá học",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khai thác đá vôi. Công nghiệp silicate."
        ],
        "understanding": [
          "Thành phần hoá học của đá vôi; phản ứng nung vôi tôi vôi; các ngành công nghiệp silicate chính [thuỷ tinh, gốm sứ, xi măng]; tác động môi trường của việc nổ mìn khai thác đá vôi và khói bụi lò nung"
        ],
        "application": [
          "Vận dụng kiến thức Khai thác đá vôi. Công nghiệp silicate để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 35: Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu",
      "chapterName": "Chương X: KHAI THÁC TÀI NGUYÊN TỪ VỎ TRÁI ĐẤT",
      "domain": "Trái Đất và bầu trời / Hoá học",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu."
        ],
        "understanding": [
          "Sơ đồ chu trình carbon trong tự nhiên; nguyên nhân gia tăng phát thải $CO_2$ gây hiệu ứng nhà kính; hậu quả của biến đổi khí hậu toàn cầu; các giải pháp cắt giảm khí nhà kính [chuyển đổi năng lượng sạch, trồng rừng]"
        ],
        "application": [
          "Vận dụng kiến thức Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 36: Khái quát về di truyền học",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khái quát về di truyền học."
        ],
        "understanding": [
          "Phân biệt hiện tượng di truyền và biến dị; nêu ưu điểm của đậu Hà Lan; trình bày các bước trong phương pháp phân tích thế hệ lai độc đáo của Gregor Mendel"
        ],
        "application": [
          "Vận dụng kiến thức Khái quát về di truyền học để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 37: Các quy luật di truyền của Mendel",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Các quy luật di truyền của Mendel."
        ],
        "understanding": [
          "Nội dung quy luật phân li và quy luật phân li độc lập; viết sơ đồ lai một cặp và hai cặp tính trạng; mục đích và ý nghĩa của phép lai phân tích; giải thích sự xuất hiện của biến dị tổ hợp"
        ],
        "application": [
          "Vận dụng kiến thức Các quy luật di truyền của Mendel để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 38: Nucleic acid và gene",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nucleic acid và gene."
        ],
        "understanding": [
          "Nguyên tắc cấu tạo đa phân của DNA và RNA; nguyên tắc bổ sung [$A=T, G\\equiv C$]; định nghĩa gene; phân biệt cấu trúc và chức năng giữa DNA và các loại RNA"
        ],
        "application": [
          "Vận dụng kiến thức Nucleic acid và gene để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 39: Tái bản DNA và phiên mã tạo RNA",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Tái bản DNA và phiên mã tạo RNA."
        ],
        "understanding": [
          "Trình bày diễn biến và 2 nguyên tắc của quá trình nhân đôi DNA [bổ sung và bán bảo tồn]; cơ chế phiên mã tổng hợp RNA; bài tập xác định trình tự nucleotide mạch mới và mạch RNA"
        ],
        "application": [
          "Vận dụng kiến thức Tái bản DNA và phiên mã tạo RNA để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 40: Dịch mã và mối quan hệ từ gene đến tính trạng",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Dịch mã và mối quan hệ từ gene đến tính trạng."
        ],
        "understanding": [
          "Nêu đặc điểm mã di truyền; mô tả cơ chế dịch mã tại ribosome; giải thích sơ đồ mối quan hệ từ gene đến tính trạng; bài tập dịch mã xác định chuỗi amino acid"
        ],
        "application": [
          "Vận dụng kiến thức Dịch mã và mối quan hệ từ gene đến tính trạng để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 41: Đột biến gene",
      "chapterName": "Chương XI: DI TRUYỀN HỌC MENDEL. CƠ SỞ PHÂN TỬ CỦA HIỆN TƯỢNG DI TRUYỀN",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đột biến gene."
        ],
        "understanding": [
          "Định nghĩa đột biến gene; phân biệt 3 dạng đột biến điểm [mất, thêm, thay thế cặp nu]; nguyên nhân phát sinh; phân tích ý nghĩa và tác hại của đột biến gene đối với sinh vật và chọn giống cây trồng"
        ],
        "application": [
          "Vận dụng kiến thức Đột biến gene để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 42: Nhiễm sắc thể và bộ nhiễm sắc thể",
      "chapterName": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nhiễm sắc thể và bộ nhiễm sắc thể."
        ],
        "understanding": [
          "Mô tả cấu tạo hiển vi và hoá học của NST; phân biệt bộ NST lưỡng bội [$2n$] và đơn bội [$n$]; tính đặc trưng của bộ NST mỗi loài sinh vật"
        ],
        "application": [
          "Vận dụng kiến thức Nhiễm sắc thể và bộ nhiễm sắc thể để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 43: Nguyên phân và giảm phân",
      "chapterName": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nguyên phân và giảm phân."
        ],
        "understanding": [
          "Mô tả diễn biến và kết quả của nguyên phân và giảm phân; phân biệt điểm khác nhau cơ bản giữa nguyên phân và giảm phân; nêu ý nghĩa thực tiễn trong nhân giống vô tính và tạo giao tử"
        ],
        "application": [
          "Vận dụng kiến thức Nguyên phân và giảm phân để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 44: Nhiễm sắc thể giới tính và cơ chế xác định giới tính",
      "chapterName": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Nhiễm sắc thể giới tính và cơ chế xác định giới tính."
        ],
        "understanding": [
          "Phân biệt NST thường và NST giới tính; viết sơ đồ cơ chế xác định giới tính ở người; giải thích nguyên nhân tỉ lệ nam : nữ xấp xỉ 1 : 1 trong tự nhiên; các yếu tố ảnh hưởng đến sự phân hoá giới tính"
        ],
        "application": [
          "Vận dụng kiến thức Nhiễm sắc thể giới tính và cơ chế xác định giới tính để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 45: Di truyền liên kết",
      "chapterName": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Di truyền liên kết."
        ],
        "understanding": [
          "Mô tả thí nghiệm lai phân tích ruồi giấm của Morgan; nội dung và cơ chế di truyền liên kết gene; so sánh sự khác nhau giữa phân li độc lập và di truyền liên kết; ý nghĩa trong chọn giống"
        ],
        "application": [
          "Vận dụng kiến thức Di truyền liên kết để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 46: Đột biến nhiễm sắc thể",
      "chapterName": "Chương XII: DI TRUYỀN NHIỄM SẮC THỂ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Đột biến nhiễm sắc thể."
        ],
        "understanding": [
          "Định nghĩa đột biến NST; phân biệt 3 dạng đột biến cấu trúc [mất đoạn, lặp đoạn, đảo đoạn]; phân biệt đột biến lệch bội và đa bội; nêu ví dụ các bệnh do đột biến NST ở người [Down, Turner] và ứng dụng cây đa bội [dưa hấu không hạt]"
        ],
        "application": [
          "Vận dụng kiến thức Đột biến nhiễm sắc thể để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 47: Di truyền học với con người",
      "chapterName": "Chương XIII: DI TRUYỀN HỌC VỚI CON NGƯỜI VÀ ĐỜI SỐNG",
      "domain": "Vật sống [Sinh học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Di truyền học với con người."
        ],
        "understanding": [
          "Kể tên các bệnh, tật di truyền phổ biến ở người [Down, Turner, mù màu, máu khó đông]; nguyên nhân di truyền học; giải thích cơ sở khoa học cấm kết hôn cận huyết thống; ý nghĩa của tư vấn di truyền y học"
        ],
        "application": [
          "Vận dụng kiến thức Di truyền học với con người để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 48: Ứng dụng công nghệ di truyền vào đời sống",
      "chapterName": "Chương XIII: DI TRUYỀN HỌC VỚI CON NGƯỜI VÀ ĐỜI SỐNG",
      "domain": "Vật sống [Sinh học ứng dụng]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Ứng dụng công nghệ di truyền vào đời sống."
        ],
        "understanding": [
          "Khái niệm công nghệ gene; các ứng dụng nổi bật trong nông nghiệp, y học [sản xuất insulin], môi trường, giám định ADN pháp y; nêu các nguyên tắc đạo đức sinh học"
        ],
        "application": [
          "Vận dụng kiến thức Ứng dụng công nghệ di truyền vào đời sống để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 49: Khái niệm tiến hoá và các hình thức chọn lọc",
      "chapterName": "Chương XIV: TIẾN HOÁ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Khái niệm tiến hoá và các hình thức chọn lọc."
        ],
        "understanding": [
          "Định nghĩa tiến hoá; so sánh điểm giống và khác nhau giữa chọn lọc nhân tạo và chọn lọc tự nhiên [động lực, mục đích, kết quả, tốc độ]"
        ],
        "application": [
          "Vận dụng kiến thức Khái niệm tiến hoá và các hình thức chọn lọc để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 50: Cơ chế tiến hoá",
      "chapterName": "Chương XIV: TIẾN HOÁ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Cơ chế tiến hoá."
        ],
        "understanding": [
          "Nội dung thuyết tiến hoá của Darwin [biến dị cá thể, đấu tranh sinh tồn, chọn lọc tự nhiên]; so sánh quan điểm Lamarck và Darwin; nêu vai trò của các nhân tố tiến hoá hiện đại"
        ],
        "application": [
          "Vận dụng kiến thức Cơ chế tiến hoá để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    },
    {
      "lessonName": "Bài 51: Sự phát sinh và phát triển sự sống trên Trái Đất",
      "chapterName": "Chương XIV: TIẾN HOÁ",
      "domain": "Vật sống [Sinh học]",
      "outcomes": {
        "recognition": [
          "Nhận biết, nêu được các khái niệm, quy luật, tính chất cơ bản về Sự phát sinh và phát triển sự sống trên Trái Đất."
        ],
        "understanding": [
          "Trình bày 3 giai đoạn phát sinh sự sống [hoá học, tiền sinh học, sinh học]; thí nghiệm chứng minh của Miller - Urey; các mốc tiến hoá của loài người từ vượn người đến người hiện đại *Homo sapiens*"
        ],
        "application": [
          "Vận dụng kiến thức Sự phát sinh và phát triển sự sống trên Trái Đất để giải quyết các bài tập tính toán và giải thích hiện tượng thực tiễn đời sống."
        ]
      }
    }
  ]
};

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
  const lessonNumMatch = lessonName.match(/Bài\s*(\d+)/i);
  if (lessonNumMatch) {
    const targetNum = lessonNumMatch[1];
    const matchByNum = list.find(item => {
      const m = item.lessonName.match(/Bài\s*(\d+)/i);
      return m && m[1] === targetNum;
    });
    if (matchByNum) return matchByNum.outcomes;
  }

  // Fallback match by substring
  const fuzzy = list.find(item => item.lessonName.includes(lessonName) || lessonName.includes(item.lessonName));
  return fuzzy ? fuzzy.outcomes : null;
}
