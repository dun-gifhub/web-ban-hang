/**
 * Data and guidelines for Part VI: 7-Day Practical Implementation Roadmap
 */

export interface DailyPlanItem {
  dayNumber: number;
  dayTitle: string;
  theme: string;
  coreObjective: string;
  estimatedHours: string;
  morningTasks: string[];
  afternoonTasks: string[];
  deliverables: string[];
  checklistItems: { id: string; text: string; done?: boolean }[];
  proTips: string;
}

export const sevenDayRoadmap: DailyPlanItem[] = [
  {
    dayNumber: 1,
    dayTitle: "Ngày 1",
    theme: "Khởi tạo nền tảng & Thiết lập khung quản trị nhóm Facebook",
    coreObjective: "Tạo lập nhóm Facebook hoàn chỉnh, áp dụng quyền riêng tư chuẩn và ban hành bộ nội quy 7 điều.",
    estimatedHours: "3 - 4 giờ",
    morningTasks: [
      "Lựa chọn 1 trong 3 phương án tên nhóm chính thức và chuẩn bị tài khoản Facebook chính chủ có 2FA.",
      "Tạo nhóm mới trên Facebook, cấu hình chế độ 'Riêng tư' (Private) và 'Hiển thị' (Visible).",
      "Thiết kế ảnh bìa (Cover Banner 1640x856 px) trên Canva với logo, thông điệp ngắn gọn và tải lên nhóm."
    ],
    afternoonTasks: [
      "Dán đoạn Mô tả nhóm hoàn chỉnh vào Cài đặt nhóm.",
      "Thiết lập lần lượt 7 Quy tắc nhóm chuẩn mực trong mục 'Quy tắc nhóm'.",
      "Bật công tắc 'Phê duyệt người tham gia' và tạo 3 Câu hỏi sàng lọc thành viên.",
      "Bật tính năng 'Phê duyệt bài viết' của người tham gia.",
      "Đăng bài viết chào mừng thành viên mới và ghim lên vị trí 'Đáng chú ý' (Featured)."
    ],
    deliverables: [
      "Nhóm Facebook hoạt động với tên chuẩn, ảnh bìa sắc nét.",
      "Bộ 7 quy tắc nhóm hiển thị công khai.",
      "Hệ thống sàng lọc thành viên & duyệt bài tự động kích hoạt."
    ],
    checklistItems: [
      { id: "d1_1", text: "Tạo nhóm Facebook với quyền Riêng tư + Hiển thị" },
      { id: "d1_2", text: "Tải ảnh bìa chuẩn kích thước 1640x856 px lên nhóm" },
      { id: "d1_3", text: "Cập nhật phần giới thiệu Mô tả nhóm và quy ước hashtag" },
      { id: "d1_4", text: "Tạo đầy đủ 7 quy tắc nhóm trong mục Quy tắc của Facebook" },
      { id: "d1_5", text: "Thiết lập 3 câu hỏi sàng lọc thành viên khi tham gia" },
      { id: "d1_6", text: "Bật chế độ bắt buộc duyệt bài trước khi đăng" },
      { id: "d1_7", text: "Đăng và ghim bài Chào mừng thành viên mới lên đầu trang" }
    ],
    proTips: "Hãy thêm ít nhất 1 tài khoản phụ làm Quản trị viên dự phòng để đề phòng trường hợp nick chính bị checkpoint hoặc tạm khóa bất ngờ."
  },
  {
    dayNumber: 2,
    dayTitle: "Ngày 2",
    theme: "Xây dựng biểu mẫu Google Forms thu thập thông tin Shop",
    coreObjective: "Khởi tạo Google Forms 9 trường chuẩn, thiết lập quy tắc xác thực dữ liệu và kiểm thử thu thập phản hồi.",
    estimatedHours: "2.5 - 3.5 giờ",
    morningTasks: [
      "Đăng nhập forms.google.com bằng tài khoản Google quản trị chung của nhóm.",
      "Đặt tên biểu mẫu và dán nội dung Lời giới thiệu kèm cam kết bảo mật thông tin.",
      "Tạo 5 trường câu hỏi đầu tiên (Tên shop, Tên người đại diện, Số điện thoại với Regex 10 số, Email, Địa chỉ)."
    ],
    afternoonTasks: [
      "Tạo 4 trường câu hỏi tiếp theo (Danh mục sản phẩm, Link shop, Trạng thái hoạt động, Ghi chú).",
      "Cấu hình Cài đặt biểu mẫu: Tắt giới hạn trong tổ chức, bật thông báo email cho phản hồi mới, tùy biến thư cảm ơn.",
      "Tạo link rút gọn (Bitly hoặc TinyURL) và gửi thử nghiệm 2 bản khảo sát mẫu để kiểm tra tính năng.",
      "Soạn sẵn 3 mẫu tin nhắn gửi link form (Zalo, Messenger, SMS) lưu vào máy sẵn sàng sử dụng."
    ],
    deliverables: [
      "Link Google Forms thu thập thông tin shop hoạt động trơn tru.",
      "Bộ thông điệp gửi link form qua Zalo/Facebook chuẩn chỉnh."
    ],
    checklistItems: [
      { id: "d2_1", text: "Tạo Google Forms mới với tên [FORM] Dang_Ky_Shop_2026" },
      { id: "d2_2", text: "Nhập lời giới thiệu và cam kết bảo mật theo Nghị định 13/2023/NĐ-CP" },
      { id: "d2_3", text: "Thiết lập đủ 9 trường câu hỏi với đúng loại dữ liệu" },
      { id: "d2_4", text: "Cài đặt xác thực Regex cho trường Số điện thoại (^0[0-9]{9}$)" },
      { id: "d2_5", text: "Tắt công tắc 'Chỉ giới hạn cho người dùng trong tổ chức'" },
      { id: "d2_6", text: "Tùy biến Thư xác nhận gửi thành công kèm hotline hỗ trợ" },
      { id: "d2_7", text: "Kiểm thử điền form trên điện thoại và nhận kết quả thành công" }
    ],
    proTips: "Hãy mở link form ở chế độ Ẩn danh (Incognito) để kiểm tra xem người không đăng nhập tài khoản có truy cập được bình thường không."
  },
  {
    dayNumber: 3,
    dayTitle: "Ngày 3",
    theme: "Thiết kế Google Sheets trung tâm & Kết nối tự động biểu mẫu",
    coreObjective: "Xây dựng bảng tính 14 cột, thiết lập công thức tự động (STT, Mã shop, Countif), liên kết luồng phản hồi từ Forms.",
    estimatedHours: "3 - 4 giờ",
    morningTasks: [
      "Từ Google Forms, nhấn nút 'Liên kết với Trang tính' để tạo bảng tính tự động.",
      "Đổi tên tệp bảng tính theo chuẩn: [QL_SHOP] Danh_Sach_Shop_Thanh_Vien_2026.",
      "Tạo thêm trang tính mới đặt tên là '01_DANH_SACH_CHINH' để quản trị an toàn."
    ],
    afternoonTasks: [
      "Thiết kế 14 cột dữ liệu chuẩn với định dạng màu sắc xanh navy chuyên nghiệp.",
      "Cố định hàng tiêu đề (Freeze 1 row) và bật tính năng Bộ lọc dữ liệu (Filter).",
      "Thiết lập Dropdown xác thực dữ liệu cho Cột Trạng thái kèm 4 màu phân biệt trực quan.",
      "Cài đặt công thức tự động đánh STT (=IF(C2<>\"\", ROW()-1, \"\")) và Mã shop (=IF(C2<>\"\", \"SHOP-\" & TEXT(ROW()-1, \"000\"), \"\")).",
      "Tạo bảng thống kê thời gian thực Dashboard đếm số lượng shop bằng COUNTIF."
    ],
    deliverables: [
      "Bảng tính Google Sheets hoàn chỉnh với công thức tự động hóa.",
      "Luồng đồng bộ từ Forms sang Sheets hoạt động mượt mà."
    ],
    checklistItems: [
      { id: "d3_1", text: "Liên kết Google Forms với bảng tính Google Sheets mới" },
      { id: "d3_2", text: "Thiết lập đủ 14 cột tiêu đề chuẩn theo mẫu thiết kế" },
      { id: "d3_3", text: "Cố định dòng tiêu đề số 1 và tạo bộ lọc dữ liệu" },
      { id: "d3_4", text: "Định dạng Cột Số điện thoại thành 'Văn bản thuần túy'" },
      { id: "d3_5", text: "Cài đặt Menu thả xuống có màu cho cột Trạng thái" },
      { id: "d3_6", text: "Nhập công thức tự động STT và sinh Mã Shop (SHOP-xxx)" },
      { id: "d3_7", text: "Tạo ô Dashboard đếm số shop đang hoạt động bằng hàm COUNTIF" }
    ],
    proTips: "Khóa dải ô cột A và B (STT và Mã Shop) bằng tính năng 'Bảo vệ dải ô' để tránh bất kỳ ai gõ đè làm hỏng công thức."
  },
  {
    dayNumber: 4,
    dayTitle: "Ngày 4",
    theme: "Thu thập, làm sạch & chuẩn hóa dữ liệu đợt đầu",
    coreObjective: "Gửi link form tới 10-20 shop quen thuộc, nhập và làm sạch dữ liệu ban đầu, phân công người phụ trách.",
    estimatedHours: "3 giờ",
    morningTasks: [
      "Gửi tin nhắn mẫu kèm link Google Forms tới nhóm các chủ shop quen thuộc hoặc đối tác thân thiết đợt 1.",
      "Hướng dẫn và giải đáp thắc mắc nếu shop gặp khó khăn khi thao tác nộp biểu mẫu."
    ],
    afternoonTasks: [
      "Kiểm tra các dòng phản hồi đổ về từ Google Forms.",
      "Thực hiện chuẩn hóa dữ liệu: Chuẩn hóa viết hoa chữ cái đầu cho tên người đại diện, kiểm tra số điện thoại có đủ 10 số, kiểm tra link fanpage.",
      "Gán Mã Shop (SHOP-001, SHOP-002...) và chỉ định Cán bộ văn phòng phụ trách từng shop.",
      "Chuyển trạng thái các shop đã đủ điều kiện thành 'Đang hoạt động'."
    ],
    deliverables: [
      "Tối thiểu 5 - 10 hồ sơ shop thực tế được chuẩn hóa trên Google Sheets.",
      "Phân công rõ ràng kỹ thuật viên phụ trách từng hồ sơ."
    ],
    checklistItems: [
      { id: "d4_1", text: "Gửi tin nhắn mời điền form tới tối thiểu 10 đối tác shop" },
      { id: "d4_2", text: "Kiểm tra dữ liệu đổ về trên Google Sheets không bị lỗi font" },
      { id: "d4_3", text: "Chuẩn hóa định dạng số điện thoại và địa chỉ" },
      { id: "d4_4", text: "Gán mã định danh duy nhất cho từng shop" },
      { id: "d4_5", text: "Phân công nhân sự theo dõi tại cột 'Người phụ trách'" },
      { id: "d4_6", text: "Cập nhật ngày ghi nhận gần nhất" }
    ],
    proTips: "Dùng tính năng 'Tìm kiếm và thay thế' (Ctrl + H) để xóa nhanh các ký tự lạ hoặc khoảng trắng thừa ở đầu/cuối ô dữ liệu."
  },
  {
    dayNumber: 5,
    dayTitle: "Ngày 5",
    theme: "Sản xuất nội dung, lên lịch bài đăng & Diễn tập phản hồi bình luận",
    coreObjective: "Soạn thảo 3 bài đăng Facebook theo mẫu chuẩn cho các shop tiêu biểu và tập huấn bộ 10 tình huống trả lời bình luận.",
    estimatedHours: "4 giờ",
    morningTasks: [
      "Chọn 1 shop vừa chuẩn hóa để viết bài 'Giới thiệu shop mới gia nhập' (#GioiThieuShop).",
      "Chuẩn bị bộ ảnh/video sắc nét (từ 3-5 ảnh) của shop kèm logo nhận diện.",
      "Soạn bài đăng 'Cập nhật sản phẩm mới' và 'Chương trình khuyến mãi tuần'."
    ],
    afternoonTasks: [
      "Tiến hành đăng bài viết giới thiệu đầu tiên lên nhóm Facebook và ghim lên mục Đáng chú ý.",
      "In hoặc lưu trữ bộ '10 tình huống trả lời bình luận chuẩn' vào thư mục nhanh của nhân viên trực fanpage.",
      "Tổ chức diễn tập nội bộ: Giả lập các tình huống khách hỏi giá, phàn nàn giao hàng chậm hoặc đánh giá tiêu cực để nhân viên phản hồi theo đúng kịch bản."
    ],
    deliverables: [
      "Bài đăng giới thiệu shop đầu tiên được xuất bản chính thức trên nhóm Facebook.",
      "Đội ngũ nắm vững quy trình xử lý bình luận và nguyên tắc bảo mật thông tin khách hàng."
    ],
    checklistItems: [
      { id: "d5_1", text: "Soạn bài viết giới thiệu shop hoàn chỉnh có gắn hashtag chuẩn" },
      { id: "d5_2", text: "Chuẩn bị hình ảnh sản phẩm có kích thước tối ưu cho Facebook" },
      { id: "d5_3", text: "Đăng bài và ghim lên danh mục Đáng chú ý" },
      { id: "d5_4", text: "Lưu trữ bộ 10 kịch bản phản hồi bình luận vào sổ tay trực ca" },
      { id: "d5_5", text: "Diễn tập xử lý tình huống phàn nàn và khách hỏi giá" },
      { id: "d5_6", text: "Quán triệt nguyên tắc không tranh cãi và không để lộ SĐT khách" }
    ],
    proTips: "Luôn kiểm tra bài viết trên màn hình điện thoại ngay sau khi đăng để đảm bảo các dòng ngắt đoạn không bị rối mắt."
  },
  {
    dayNumber: 6,
    dayTitle: "Ngày 6",
    theme: "Xây dựng Cổng thông tin Website miễn phí với Google Sites",
    coreObjective: "Tạo trang web giới thiệu cộng đồng, nhúng bảng danh mục shop từ Google Sheets và form đăng ký từ Google Forms.",
    estimatedHours: "3.5 - 4.5 giờ",
    morningTasks: [
      "Truy cập sites.google.com, tạo trang web trống mới.",
      "Thiết kế thanh điều hướng (Header): Logo, Tiêu đề 'Cộng Đồng Shop Tiêu Dùng Uy Tín', Banner trang chủ.",
      "Tạo khối giới thiệu sứ mệnh cộng đồng và 3 cam kết chất lượng với người tiêu dùng."
    ],
    afternoonTasks: [
      "Tạo trang con 'Danh Bạ Shop': Dùng tính năng Chèn -> Trang tính -> Chọn file Google Sheets quản lý shop đã tạo ở Ngày 3.",
      "Tạo trang con 'Đăng Ký Gian Hàng': Chèn biểu mẫu Google Forms đã tạo ở Ngày 2 để chủ shop đăng ký trực tiếp trên web.",
      "Chèn khối 'Liên Hệ BQT & Hỗ Trợ Kỹ Thuật' kèm Hotline, Zalo và link nhóm Facebook.",
      "Nhấn 'Xuất bản' (Publish), kiểm tra hiển thị trên máy tính và điện thoại thông minh."
    ],
    deliverables: [
      "Website danh bạ shop miễn phí hoạt động 24/7 tại đường link Google Sites chính thức.",
      "Dữ liệu bảng tính và form đăng ký được nhúng tự động hai chiều."
    ],
    checklistItems: [
      { id: "d6_1", text: "Khởi tạo dự án Google Sites mới từ tài khoản quản trị" },
      { id: "d6_2", text: "Thiết kế Banner và logo nhận diện thương hiệu" },
      { id: "d6_3", text: "Tạo trang chủ giới thiệu thông tin và nội quy cộng đồng" },
      { id: "d6_4", text: "Nhúng bảng tính Google Sheets danh sách shop vào web" },
      { id: "d6_5", text: "Nhúng biểu mẫu Google Forms tiếp nhận thông tin shop mới" },
      { id: "d6_6", text: "Thêm nút chuyển hướng tham gia nhóm Facebook cộng đồng" },
      { id: "d6_7", text: "Xuất bản website ở chế độ công khai cho mọi người truy cập" }
    ],
    proTips: "Đặt chế độ nhúng Google Sheets ở dạng chỉ đọc để người truy cập web có thể xem và lọc dữ liệu thoải mái mà không lo bị thay đổi nội dung gốc."
  },
  {
    dayNumber: 7,
    dayTitle: "Ngày 7",
    theme: "Kiểm toán toàn diện hệ thống, phân quyền & Đưa vào vận hành",
    coreObjective: "Tổng kiểm tra toàn bộ luồng vận hành (Nhóm -> Form -> Sheets -> Web), phân quyền bảo vệ dữ liệu và bàn giao.",
    estimatedHours: "3 giờ",
    morningTasks: [
      "Thực hiện kiểm thử đầu-cuối (End-to-End Test): Đóng vai 1 shop mới điền form -> Kiểm tra dữ liệu vào Sheets -> Kiểm tra xuất hiện trên Web -> Gửi bài đăng mẫu lên nhóm -> Kiểm duyệt bài viết.",
      "Rà soát tính bảo mật: Kiểm tra các quyền truy cập Google Sheets (chỉ cấp Editor cho người cần thiết, khóa dải ô công thức)."
    ],
    afternoonTasks: [
      "Bổ nhiệm chính thức vai trò Người kiểm duyệt (Moderator) trên Facebook cho các nhân sự trực ban.",
      "Ban hành Lịch trực nhật hằng ngày (SOP ca trực sáng 8h30 - chiều 16h30).",
      "Tiến hành sao lưu bản sao Google Sheets dự phòng đầu tiên ra file Excel (.xlsx).",
      "Họp nhanh 15 phút tổng kết tuần triển khai và chính thức mở rộng truyền thông mời các shop tham gia."
    ],
    deliverables: [
      "Hệ thống số vận hành đồng bộ 100% không phát sinh lỗi.",
      "Bảng phân quyền và lịch trực nhân sự rõ ràng.",
      "File backup tuần 1 được lưu trữ an toàn."
    ],
    checklistItems: [
      { id: "d7_1", text: "Chạy thử nghiệm toàn bộ luồng quy trình từ điền form đến đăng bài" },
      { id: "d7_2", text: "Kiểm tra phân quyền tài khoản Google Drive và Sheets" },
      { id: "d7_3", text: "Bổ nhiệm và bàn giao quyền Người kiểm duyệt trên Facebook Group" },
      { id: "d7_4", text: "Kích hoạt lịch kiểm tra hằng ngày (08:30 sáng & 16:30 chiều)" },
      { id: "d7_5", text: "Xuất file sao lưu dự phòng Google Sheets về máy tính" },
      { id: "d7_6", text: "Hoàn thiện sổ tay hướng dẫn và chính thức công bố hệ thống" }
    ],
    proTips: "Hãy thiết lập một cuộc họp định kỳ 15 phút vào chiều thứ Sáu hàng tuần để rà soát các vướng mắc kỹ thuật và cập nhật kịp thời."
  }
];
