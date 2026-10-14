/**
 * Data and guidelines for Final Deliverables: Accounts, Tools, Master Checklist, RACI Matrix, and Zero-Cost Operations
 */

export interface AccountToolItem {
  id: number;
  category: string;
  name: string;
  purpose: string;
  cost: string;
  notes: string;
}

export interface RACIRole {
  roleName: string;
  title: string;
  keyResponsibilities: string[];
  headcount: string;
  requiredSkills: string;
}

export const requiredAccountsAndTools: AccountToolItem[] = [
  {
    id: 1,
    category: "Tài khoản quản trị cốt lõi",
    name: "Tài khoản Google dùng chung (Gmail / Google Workspace)",
    purpose: "Làm chủ sở hữu Google Drive, Google Sheets quản lý shop, Google Forms thu thập thông tin và Google Sites.",
    cost: "Miễn phí (15GB dung lượng)",
    notes: "Nên tạo một địa chỉ email riêng cho ban quản lý (ví dụ: bqt.quanlyshop2026@gmail.com), bật bảo mật 2 lớp (2FA) và chia sẻ mã dự phòng cho trưởng ban."
  },
  {
    id: 2,
    category: "Mạng xã hội",
    name: "Tài khoản Facebook Quản trị viên chính + Quản trị viên dự phòng",
    purpose: "Tạo và kiểm soát nhóm Facebook, phân quyền Người kiểm duyệt, cài đặt quy tắc và công cụ Admin Assist.",
    cost: "Miễn phí",
    notes: "Bắt buộc có ít nhất 2 tài khoản quản trị viên độc lập của 2 nhân sự khác nhau để tránh rủi ro mất quyền kiểm soát nhóm nếu 1 tài khoản bị Facebook checkpoint."
  },
  {
    id: 3,
    category: "Thiết kế đồ họa số",
    name: "Tài khoản Canva (Bản miễn phí)",
    purpose: "Thiết kế ảnh bìa nhóm Facebook (1640x856 px), banner trang web Google Sites, ảnh bài đăng giới thiệu shop và voucher ưu đãi.",
    cost: "Miễn phí (gói cơ bản)",
    notes: "Tận dụng hàng ngàn template miễn phí sẵn có của Canva để thiết kế nhanh trong 5-10 phút mà không cần phần mềm đồ họa nặng như Photoshop."
  },
  {
    id: 4,
    category: "Tiện ích liên kết",
    name: "Công cụ rút gọn liên kết (Bitly.com / TinyURL.com)",
    purpose: "Rút gọn các đường link Google Forms và link nhóm Facebook dài ngoằng thành các đường link ngắn dễ nhớ, chuyên nghiệp.",
    cost: "Miễn phí",
    notes: "Tạo link có thể tùy biến đuôi (ví dụ: bit.ly/dangky-shop-2026) để in trên tài liệu hoặc gửi tin nhắn SMS không bị rối mắt."
  },
  {
    id: 5,
    category: "Lưu trữ sao lưu",
    name: "Thư mục Backup cục bộ trên máy tính văn phòng + USB dự phòng",
    purpose: "Định kỳ tải về và lưu trữ các bản sao tệp Excel (.xlsx) danh sách shop từ Google Sheets vào chiều thứ Sáu hàng tuần.",
    cost: "Miễn phí",
    notes: "Đảm bảo tuân thủ nguyên tắc sao lưu 3-2-1 để dữ liệu thông tin shop không bao giờ bị mất mát do lỗi thao tác của con người."
  }
];

export const masterAuditChecklist = [
  {
    category: "PHẦN I: NHÓM FACEBOOK & BỘ NỘI QUY",
    items: [
      "Tên nhóm đặt theo chuẩn, chuyên nghiệp, dễ tìm kiếm trên thanh tìm kiếm Facebook.",
      "Ảnh bìa sắc nét (1640x856 px), có logo, khẩu hiệu và hotline hỗ trợ.",
      "Phần Mô tả nhóm nêu rõ mục tiêu, cam kết bảo mật và quy ước hashtag (#GioiThieuShop, #SanPhamMoi, #KhuyenMaiHot).",
      "Đã cấu hình quyền riêng tư là 'Riêng tư' và trạng thái 'Hiển thị'.",
      "Đã ban hành đầy đủ 7 quy tắc nhóm chính thức trong mục Quy tắc của Facebook.",
      "Đã bật 3 câu hỏi sàng lọc thành viên khi yêu cầu tham gia.",
      "Đã bật tính năng Bắt buộc phê duyệt bài viết trước khi hiển thị.",
      "Đã ghim bài Chào mừng thành viên mới lên đầu mục Đáng chú ý (Featured)."
    ]
  },
  {
    category: "PHẦN II: BIỂU MẪU GOOGLE FORMS",
    items: [
      "Biểu mẫu có tiêu đề rõ ràng, kèm lời giới thiệu và cam kết bảo mật thông tin (Nghị định 13/2023/NĐ-CP).",
      "Có đủ 9 trường thông tin với loại câu hỏi được cấu hình chuẩn mực.",
      "Các trường cốt lõi (Tên shop, Đại diện, SĐT, Địa chỉ, Danh mục, Trạng thái) đã bật trạng thái Bắt buộc.",
      "Trường Số điện thoại đã cài đặt quy tắc xác thực Regex 10 số (^0[0-9]{9}$).",
      "Đã TẮT tùy chọn 'Chỉ giới hạn cho người dùng trong tổ chức' trong phần Cài đặt phản hồi.",
      "Đã bật 'Nhận thông báo qua email khi có câu trả lời mới'.",
      "Đã tùy biến Thư cảm ơn hiển thị hotline hỗ trợ sau khi người dùng nộp form.",
      "Đã tạo đường dẫn rút gọn dễ nhớ (Short URL) để gửi cho thành viên."
    ]
  },
  {
    category: "PHẦN III: BẢNG TÍNH GOOGLE SHEETS QUẢN LÝ MASTER",
    items: [
      "Tệp đặt tên theo quy ước chuẩn: [QL_SHOP] Danh_Sach_Shop_Thanh_Vien_2026.",
      "Đầy đủ 14 cột quản lý với màu sắc tiêu đề đồng bộ, dễ nhìn.",
      "Đã cố định Hàng 1 (Freeze 1 row) để luôn thấy tiêu đề khi cuộn xuống.",
      "Đã bật tính năng Bộ lọc (Filter) cho toàn bộ bảng tính.",
      "Cột Số điện thoại được định dạng kiểu 'Văn bản thuần túy' (không bị mất số 0).",
      "Cột Trạng thái có danh sách thả xuống (Dropdown) với 4 màu sắc trực quan.",
      "Công thức tự động đánh STT và sinh Mã Shop (SHOP-xxx) hoạt động ổn định.",
      "Đã khóa dải ô (Protect Ranges) chứa công thức để tránh nhân viên gõ đè.",
      "Đã phân quyền đúng vai trò (Viewer / Commenter / Editor) cho từng nhân sự."
    ]
  },
  {
    category: "PHẦN IV: NỘI DUNG, BÀI ĐĂNG & KỊCH BẢN CSKH",
    items: [
      "Có sẵn 3 mẫu bài đăng Facebook chuẩn (Giới thiệu, Cập nhật sản phẩm, Khuyến mãi) kèm cả bản dài và ngắn.",
      "Tất cả bài viết tuân thủ nguyên tắc công khai giá bán rõ ràng, không ghi mập mờ 'inbox giá'.",
      "Có sẵn quy trình kiểm tra 6 điểm trước khi duyệt xuất bản bài viết của shop.",
      "Toàn bộ nhân sự trực ca đã được tập huấn và nắm vững bộ 10 kịch bản trả lời bình luận.",
      "Nắm chắc nguyên tắc bảo mật thông tin khách hàng: Không để lộ số điện thoại, địa chỉ nhà khách trên bình luận công khai.",
      "Có quy trình leo thang (Escalation) rõ ràng khi gặp tình huống khiếu nại chất lượng hoặc bình luận gay gắt."
    ]
  },
  {
    category: "PHẦN V: CỔNG THÔNG TIN WEBSITE MIỄN PHÍ",
    items: [
      "Website được khởi tạo và xuất bản thành công trên nền tảng miễn phí (Google Sites / Canva).",
      "Giao diện tối ưu hiển thị tốt trên cả máy tính lẫn điện thoại thông minh.",
      "Đã nhúng bảng tính Google Sheets danh sách shop ở chế độ xem an toàn.",
      "Đã nhúng form Google Forms để đối tác shop mới có thể nộp thông tin trực tiếp từ website.",
      "Có nút liên kết chuyển tiếp tới nhóm Facebook cộng đồng và thông tin liên hệ BQT."
    ]
  }
];

export const raciMatrixRoles: RACIRole[] = [
  {
    roleName: "Quản trị viên trưởng (Project Lead / Lead Admin)",
    title: "Chịu trách nhiệm toàn diện về chiến lược, chính sách & xử lý khủng hoảng",
    keyResponsibilities: [
      "Phê duyệt bộ quy tắc nhóm, các chính sách hợp tác shop và quyết định điều chỉnh hệ thống.",
      "Nắm giữ tài khoản Google quản trị chung và tài khoản Facebook Admin chính.",
      "Xử lý các tình huống khiếu nại cấp cao, tranh chấp pháp lý hoặc vi phạm nghiêm trọng.",
      "Chủ trì cuộc họp rà soát định kỳ hàng tuần vào chiều thứ Sáu."
    ],
    headcount: "1 người",
    requiredSkills: "Kỹ năng ra quyết định, quản lý dự án văn phòng, giao tiếp khéo léo."
  },
  {
    roleName: "Kỹ thuật viên dữ liệu & Bảng tính (Data & Tech Specialist)",
    title: "Phụ trách hạ tầng Google Forms, Google Sheets, Website và Sao lưu dữ liệu",
    keyResponsibilities: [
      "Cấu hình và bảo trì biểu mẫu Google Forms, sửa lỗi biểu thức regex khi cần.",
      "Quản lý bảng tính Google Sheets, đảm bảo công thức STT, Mã Shop và bộ lọc hoạt động mượt mà.",
      "Thực hiện chuẩn hóa dữ liệu đầu vào, gán mã shop và mã hóa thông tin nhạy cảm.",
      "Cập nhật nội dung trên Website Google Sites và thực hiện sao lưu tệp Excel hàng tuần."
    ],
    headcount: "1 - 2 người",
    requiredSkills: "Thành thạo Google Sheets (công thức, bộ lọc, bảo vệ dải ô), cẩn thận, bảo mật thông tin."
  },
  {
    roleName: "Chuyên viên Nội dung & CSKH (Content & Community Care)",
    title: "Phụ trách biên tập bài viết, ghim bài tiêu điểm và điều phối bình luận",
    keyResponsibilities: [
      "Biên tập bài đăng giới thiệu shop, bài cập nhật sản phẩm và chương trình ưu đãi theo mẫu chuẩn.",
      "Thiết kế ảnh minh họa và ảnh bìa trên Canva.",
      "Trực bình luận Facebook theo bộ 10 kịch bản chuẩn, tư vấn giá công khai và kết nối khách hàng với shop.",
      "Theo dõi nhắc nhở các shop chưa phản hồi hoặc cần cập nhật thông tin (quy tắc 24h-48h)."
    ],
    headcount: "1 - 2 người",
    requiredSkills: "Văn phong tiếng Việt chuẩn, thái độ hòa nhã, cởi mở, kỹ năng Canva cơ bản."
  },
  {
    roleName: "Người kiểm duyệt nhóm (Group Moderator)",
    title: "Phụ trách trực ca kiểm duyệt thành viên mới và duyệt bài đăng theo checklist",
    keyResponsibilities: [
      "Kiểm tra câu hỏi sàng lọc thành viên mới xin gia nhập nhóm Facebook.",
      "Duyệt các bài đăng bán lẻ của shop theo đúng checklist 6 điểm.",
      "Ẩn/xóa ngay lập tức các bài đăng rác, bình luận lừa đảo, chửi bới vi phạm nội quy.",
      "Báo cáo ngay cho Quản trị viên trưởng khi phát hiện dấu hiệu gian lận hoặc tài khoản bot spam."
    ],
    headcount: "2 - 3 người (luân phiên ca trực sáng/chiều)",
    requiredSkills: "Nhanh nhạy, kiên quyết, tuân thủ đúng nội quy đã ban hành."
  }
];

export const zeroCostOperationGuide = {
  philosophy: "Vận hành tinh gọn 0 đồng ngân sách (Zero-Cost Stack) - Tận dụng tối đa công cụ miễn phí đẳng cấp doanh nghiệp của Google, Meta và Canva",
  principles: [
    {
      title: "1. Tận dụng 100% dung lượng và tính năng miễn phí chính hãng",
      detail: "Google cung cấp 15GB miễn phí cho mỗi tài khoản Gmail - đủ để lưu trữ hàng trăm nghìn dòng dữ liệu Google Sheets và biểu mẫu Google Forms trong suốt 10 năm hoạt động. Google Sites và Canva Websites hoàn toàn miễn phí phí duy trì máy chủ (hosting), giúp loại bỏ hoàn toàn chi phí thuê server hàng tháng."
    },
    {
      title: "2. Chuẩn hóa quy trình biểu mẫu để giải phóng sức lao động",
      detail: "Thay vì để nhân viên phải nhắn tin hỏi từng thông tin của shop bằng tay mất 30 phút, Google Forms tự động thu thập và điền thẳng vào Google Sheets trong 1 giây. Việc tự động hóa này giúp 1 nhân sự văn phòng có thể quản lý nhẹ nhàng từ 200 - 500 shop mà không bị quá tải."
    },
    {
      title: "3. Kỷ luật vận hành theo lịch trực ca cố định (15 phút đầu giờ & 15 phút cuối ngày)",
      detail: "Không cần phải trực màn hình liên tục 24/7 gây mệt mỏi. Thiết lập khung giờ cố định: 08:30 sáng (duyệt form và bài đăng mới), 16:30 chiều (rà soát khiếu nại và cập nhật dữ liệu). Tính đều đặn này tạo thói quen chuyên nghiệp cho cả ban quản lý lẫn các chủ shop."
    },
    {
      title: "4. Bảo vệ dữ liệu với chi phí 0 đồng",
      detail: "Không cần mua phần mềm sao lưu đắt tiền. Quy trình tải tệp .xlsx thủ công vào 17h00 chiều thứ Sáu hàng tuần cùng với tính năng Lịch sử phiên bản (Version History) có sẵn của Google Sheets là lá chắn an toàn 100% trước mọi sự cố mất dữ liệu."
    }
  ]
};
