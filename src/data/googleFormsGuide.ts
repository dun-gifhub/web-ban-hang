/**
 * Data and guidelines for Part II: Google Forms Creation for Shop Information Collection
 */

export interface FormFieldItem {
  id: number;
  fieldName: string;
  questionType: string;
  isRequired: boolean;
  validationRule?: string;
  descriptionHint: string;
  options?: string[];
  rationale: string;
}

export const formIntroduction = `📋 BIỂU MẪU ĐĂNG KÝ THÔNG TIN SHOP & ĐỐI TÁC THÀNH VIÊN
Cộng đồng Quản lý Shop & Giao thương Văn phòng

Kính gửi Quý Chủ Shop và Quý Đối Tác,

Để xây dựng một môi trường kinh doanh minh bạch, bảo vệ quyền lợi của thành viên mua sắm và hỗ trợ shop tiếp cận đúng đối tượng khách hàng mục tiêu, Ban Quản Trị (BQT) tiến hành thu thập và chuẩn hóa dữ liệu thông tin gian hàng.

🎯 QUYỀN LỢI KHI HOÀN THÀNH BIỂU MẪU:
1. Được cấp quyền duyệt bài đăng bán hàng và ưu tiên xuất hiện trong mục #GioiThieuShop.
2. Được đồng bộ thông tin lên Danh bạ Shop trên Website chung của cộng đồng.
3. Nhận hỗ trợ kỹ thuật và thông tin về các chiến dịch kích cầu mua sắm định kỳ.

🔒 CAM KẾT BẢO MẬT THÔNG TIN:
BQT cam kết toàn bộ dữ liệu (đặc biệt là Số điện thoại, Email) chỉ phục vụ mục đích xác minh tư cách thành viên, liên hệ kỹ thuật và hỗ trợ bán hàng theo quy định bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP). BQT tuyệt đối không bán hoặc cung cấp thông tin cho bên thứ ba.

⏱ Thời gian hoàn thành dự kiến: 2 - 3 phút.`;

export const formConfirmationMessage = `✅ Cảm ơn Quý Chủ Shop đã gửi thông tin thành công!

Ban Quản Trị đã nhận được dữ liệu và sẽ tiến hành đối soát, cấp quyền duyệt bài trong vòng 24 giờ làm việc. 
Mã đăng ký của Shop sẽ được phản hồi qua Zalo / Số điện thoại đăng ký. 

Trường hợp cần hỗ trợ khẩn cấp, vui lòng liên hệ Kỹ thuật viên qua Hotline/Zalo: 09xx xxx xxx. Chúc Shop kinh doanh hồng phát!`;

export const formFields: FormFieldItem[] = [
  {
    id: 1,
    fieldName: "1. Tên Shop / Thương hiệu",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    descriptionHint: "Ghi đúng tên thương hiệu hiển thị trên bảng hiệu, logo hoặc fanpage (Ví dụ: Tiệm Trà Hoa Tháng Tư, Retro Denim Store...).",
    rationale: "Là định danh nhận diện thương hiệu chính thức của shop trên nhóm và bảng tính quản lý."
  },
  {
    id: 2,
    fieldName: "2. Tên người đại diện / Chủ shop",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    descriptionHint: "Họ và tên đầy đủ của người phụ trách chính (Ví dụ: Nguyễn Văn A).",
    rationale: "Cần xác định trách nhiệm pháp lý cá nhân khi phát sinh khiếu nại hoặc đối soát chất lượng dịch vụ."
  },
  {
    id: 3,
    fieldName: "3. Số điện thoại liên hệ (Ưu tiên số có Zalo)",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    validationRule: "Xác thực phản hồi: Biểu thức chính quy (Regex) -> Khớp với: ^0[0-9]{9}$ (Bắt buộc bắt đầu bằng số 0 và đúng 10 chữ số).",
    descriptionHint: "Nhập số điện thoại di động 10 số dùng để liên hệ nhận thông báo và hỗ trợ kỹ thuật.",
    rationale: "Kênh liên lạc khẩn cấp quan trọng nhất giữa Ban Quản Trị và Shop."
  },
  {
    id: 4,
    fieldName: "4. Địa chỉ Email nhận thông báo",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: false,
    validationRule: "Xác thực phản hồi: Văn bản -> Địa chỉ email hợp lệ.",
    descriptionHint: "Ví dụ: shopthangtu@gmail.com (Không bắt buộc, dùng để nhận bản tin chính sách và báo cáo).",
    rationale: "Tạo kênh liên hệ phụ chính thức; không bắt buộc để người dùng lớn tuổi hoặc shop truyền thống không bị rào cản thao tác."
  },
  {
    id: 5,
    fieldName: "5. Địa chỉ hoạt động của Shop",
    questionType: "Đoạn (Paragraph)",
    isRequired: true,
    descriptionHint: "Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố (Nếu chỉ bán online, ghi rõ: 'Bán online tại nhà - [Tên Quận/Huyện]').",
    rationale: "Cần thiết để quản trị viên đánh giá tính xác thực, hỗ trợ thành viên tính phí vận chuyển hoặc ghé mua trực tiếp."
  },
  {
    id: 6,
    fieldName: "6. Danh mục sản phẩm / Dịch vụ kinh doanh chính",
    questionType: "Hộp kiểm (Checkboxes) - Cho phép chọn nhiều mục",
    isRequired: true,
    options: [
      "Thời trang & Phụ kiện may mặc",
      "Ẩm thực, Đồ ăn vặt & Đồ uống",
      "Mỹ phẩm & Chăm sóc sắc đẹp",
      "Đồ gia dụng & Tiện ích gia đình",
      "Thiết bị số & Phụ kiện công nghệ",
      "Hoa tươi, Cây cảnh & Quà tặng",
      "Dịch vụ văn phòng & In ấn / Sửa chữa",
      "Mục khác (nhập bổ sung)"
    ],
    descriptionHint: "Chọn một hoặc nhiều danh mục phản ánh đúng sản phẩm đang kinh doanh.",
    rationale: "Phục vụ việc phân loại thư mục sản phẩm trên website và gán hashtag đăng bài chuẩn xác."
  },
  {
    id: 7,
    fieldName: "7. Đường dẫn (Link) Facebook / Website / Gian hàng",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: false,
    validationRule: "Xác thực phản hồi: Văn bản -> URL hợp lệ.",
    descriptionHint: "Dán link fanpage Facebook cá nhân, Shopee, TikTok Shop hoặc website (nếu có).",
    rationale: "Hỗ trợ BQT kiểm tra uy tín lịch sử bán hàng và ghim link cho thành viên tham khảo."
  },
  {
    id: 8,
    fieldName: "8. Trạng thái hoạt động hiện tại",
    questionType: "Trắc nghiệm (Multiple choice) - Chọn 1 mục duy nhất",
    isRequired: true,
    options: [
      "Đang hoạt động bình thường",
      "Chuẩn bị khai trương (trong 7 ngày tới)",
      "Đang tạm ngừng nâng cấp mặt bằng / sản phẩm"
    ],
    descriptionHint: "Chọn đúng hiện trạng để BQT gắn nhãn hỗ trợ phù hợp trên danh bạ.",
    rationale: "Giúp BQT không duyệt các bài quảng cáo của shop đang nghỉ bán, tránh thất vọng cho người mua."
  },
  {
    id: 9,
    fieldName: "9. Ghi chú bổ sung hoặc mong muốn hỗ trợ",
    questionType: "Đoạn (Paragraph)",
    isRequired: false,
    descriptionHint: "Nêu các ưu đãi đặc biệt cho thành viên nhóm hoặc các khó khăn kỹ thuật cần BQT hỗ trợ (không bắt buộc).",
    rationale: "Nắm bắt nguyện vọng hợp tác sâu hơn hoặc tiếp nhận thắc mắc riêng."
  }
];

export const sharingMessageTemplates = [
  {
    channel: "Zalo / Tin nhắn riêng Messenger (Khuyên dùng)",
    title: "Mẫu tin nhắn trực tiếp cho chủ shop",
    content: `Chào [Tên Chủ Shop] ạ! Em là [Tên bạn] - Kỹ thuật viên phụ trách hỗ trợ các Shop tại nhóm [Tên Nhóm Facebook].

Em thấy shop mình có nhiều sản phẩm rất chất lượng và phù hợp với nhu cầu mua sắm của các thành viên trong nhóm. Để bài viết bán hàng của shop được BQT duyệt nhanh trong vòng 24h và được hiển thị trên Danh bạ Shop uy tín, anh/chị dành 2 phút điền biểu mẫu xác minh này giúp em nhé:

👉 Link biểu mẫu: [Đường dẫn rút gọn Google Forms]

Sau khi điền xong, hệ thống bên em sẽ tự động cấp mã shop và hỗ trợ ghim bài giới thiệu gian hàng trong tuần này ạ. Cần hỗ trợ thao tác, anh/chị cứ nhắn lại cho em nhé. Em cảm ơn anh/chị!`
  },
  {
    channel: "Bài đăng ghim trên Facebook Group",
    title: "Mẫu thông báo công khai trong nhóm",
    content: `📢 THÔNG BÁO QUAN TRỌNG DÀNH CHO CÁC CHỦ SHOP & GIAN HÀNG THÀNH VIÊN!

Nhằm chuẩn hóa dữ liệu, loại bỏ nick ảo và hỗ trợ các Shop uy tín tiếp cận khách hàng tốt nhất, BQT tiến hành cập nhật Danh bạ Shop năm 2026.

📌 Các Shop tham gia điền form sẽ nhận ngay:
1. Quyền duyệt bài tự động và ưu tiên hashtag #GioiThieuShop.
2. Được xuất hiện trên trang Danh bạ Web miễn phí của nhóm.
3. Hỗ trợ kỹ thuật thiết kế banner và kịch bản đăng bài khuyến mãi.

👉 Điền thông tin ngay tại đây: [Đường dẫn rút gọn Google Forms]
⏱ Hạn chót hoàn thành đợt 1: [Ngày/Tháng/Năm]

Mọi thắc mắc vui lòng để lại bình luận dưới bài viết này hoặc liên hệ hotline kỹ thuật [Số điện thoại] để được hỗ trợ trực tiếp. Trân trọng cảm ơn!`
  },
  {
    channel: "Tin nhắn SMS ngắn / Tin nhắn thông báo nhanh",
    title: "Mẫu SMS ngắn gọn dưới 160 ký tự",
    content: `[BQT Nhom Shop] Moi Chu shop hoan tat thong tin xac minh gian hang tai [Link rut gon Form] de duoc duyet bai va len danh ba shop uytin. Hotline: 09xxxxxxxx.`
  }
];

export const commonFormErrorsAndFixes = [
  {
    error: "Lỗi 'Bạn cần quyền truy cập' (Cần tài khoản trong tổ chức)",
    cause: "Google Forms tạo bằng email công ty/trường học thường tự động bật giới hạn chỉ người trong miền nội bộ mới được mở biểu mẫu.",
    solution: "Vào Cài đặt (Settings) -> Mục 'Câu trả lời' (Responses) -> Tắt bỏ công tắc 'Chỉ giới hạn cho người dùng trong [Tên tổ chức]'.",
    severity: "Nghiêm trọng (khiến 100% người ngoài không điền được)"
  },
  {
    error: "Số điện thoại gửi về Trang tính bị mất số 0 ở đầu (VD: 0912 -> 912)",
    cause: "Google Sheets tự động hiểu số điện thoại là kiểu Số học (Number) và loại bỏ số 0 vô nghĩa ở đầu.",
    solution: "1. Trong Google Forms, đặt xác thực câu hỏi là Văn bản (Text) thay vì Số. 2. Trên Google Sheets, bôi đen toàn bộ cột Số điện thoại -> Vào Định dạng -> Số -> Chọn 'Văn bản thuần túy' (Plain Text).",
    severity: "Trung bình (dễ gây nhầm lẫn khi gọi điện)"
  },
  {
    error: "Kỹ thuật viên không nhận được thông báo khi có phản hồi mới",
    cause: "Mặc định Google Forms không tự động gửi email thông báo khi có người nộp biểu mẫu mới.",
    solution: "Mở Google Forms -> Chuyển sang tab 'Câu trả lời' (Responses) -> Bấm vào dấu ba chấm ở góc trên bên phải -> Tích chọn 'Nhận thông báo qua email cho các câu trả lời mới' (Get email notifications for new responses).",
    severity: "Thấp (nhưng gây chậm trễ tiến độ duyệt bài)"
  },
  {
    error: "Chủ shop vô tình ấn nộp nhiều lần tạo ra các dòng dữ liệu trùng lặp",
    cause: "Người dùng không biết mình đã gửi thành công hoặc chỉnh sửa lại thông tin bằng cách gửi bản mới.",
    solution: "Soạn thảo thông điệp xác nhận rõ ràng ở phần Bản trình bày (Presentation) -> Thư xác nhận, hoặc theo dõi theo Số điện thoại bằng hàm đếm trên Sheets.",
    severity: "Trung bình (làm rác bảng dữ liệu)"
  }
];

export const stepByStepFormsSetup = [
  {
    step: "1. Truy cập và Khởi tạo",
    action: "Truy cập forms.google.com bằng trình duyệt máy tính -> Đăng nhập tài khoản Google quản trị -> Nhấn vào dấu cộng '+' để tạo biểu mẫu trống mới.",
    note: "Khuyên dùng tài khoản Gmail chung của nhóm quản trị để sau này chuyển giao quyền không bị phụ thuộc tài khoản cá nhân."
  },
  {
    step: "2. Đặt tiêu đề và Mô tả biểu mẫu",
    action: "Nhấp vào dòng 'Mẫu không có tiêu đề' -> Đổi tên thành: 'Đăng Ký Thông Tin Shop & Đối Tác Thành Viên'. Dán đoạn văn bản Lời giới thiệu & Cam kết bảo mật vào ô mô tả.",
    note: "Đặt tên file ngắn gọn ở góc trên bên trái để dễ tìm trong Google Drive: [FORM] Dang_Ky_Shop_2026."
  },
  {
    step: "3. Thêm các trường câu hỏi",
    action: "Bấm dấu '+' ở thanh công cụ nổi bên phải để thêm lần lượt 9 câu hỏi theo bảng thiết kế chuẩn. Đánh dấu nút gạt 'Bắt buộc' cho các trường cốt lõi (Tên shop, Đại diện, SĐT, Địa chỉ, Danh mục, Trạng thái).",
    note: "Đối với trường SĐT, bấm dấu ba chấm ở góc dưới câu hỏi -> Chọn 'Xác thực phản hồi' -> Thiết lập Biểu thức chính quy."
  },
  {
    step: "4. Tùy chỉnh Cài đặt (Settings)",
    action: "Chuyển sang tab 'Cài đặt' -> Mục 'Câu trả lời': Cho phép chỉnh sửa câu trả lời (Bật/Tắt tùy nhu cầu) -> Mục 'Bản trình bày': Chỉnh sửa 'Thư xác nhận' dán mẫu cảm ơn.",
    note: "Không bật tính năng 'Giới hạn ở 1 lần trả lời' nếu muốn người dùng không cần bắt buộc đăng nhập tài khoản Gmail."
  },
  {
    step: "5. Kết nối tự động với Google Sheets",
    action: "Vào tab 'Câu trả lời' -> Nhấn vào nút xanh có biểu tượng Google Sheets ('Liên kết với Trang tính') -> Chọn 'Tạo một bảng tính mới' -> Đặt tên: [SHEETS] Quan_Ly_Shop_Du_Lieu_Goc -> Nhấn 'Tạo'.",
    note: "Từ nay mỗi khi có shop gửi form, dữ liệu sẽ tự động nhảy vào bảng tính này trong vòng 1 giây!"
  },
  {
    step: "6. Lấy đường dẫn chia sẻ (Link rút gọn)",
    action: "Bấm nút 'Gửi' (Send) màu tím ở góc trên bên phải -> Chọn biểu tượng Mắt xích (Liên kết) -> Tích vào ô 'Rút ngắn URL' (Shorten URL) -> Bấm 'Sao chép' (Copy).",
    note: "Có thể mang link này qua các trang như TinyURL hoặc Bitly để tạo link đẹp như bit.ly/dangky-shop-2026."
  }
];
