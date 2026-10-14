/**
 * Data and guidelines for Part III: Google Sheets Shop Master Database
 */

export interface ShopRecord {
  stt: number;
  shopCode: string;
  shopName: string;
  representative: string;
  phone: string;
  email: string;
  address: string;
  category: string;
  link: string;
  registrationDate: string;
  status: "Đang hoạt động" | "Chờ xác minh" | "Tạm ngừng" | "Ngừng hoạt động";
  assignee: string;
  lastUpdated: string;
  notes: string;
}

export const sampleShopData: ShopRecord[] = [
  {
    stt: 1,
    shopCode: "SHOP-001",
    shopName: "Tiệm Trà & Hoa Tháng Tư",
    representative: "Nguyễn Thảo Ly",
    phone: "0912345678",
    email: "thaoly.hoathangtu@gmail.com",
    address: "Số 15 Ngõ 42 Phố Láng Hạ, Đống Đa, Hà Nội",
    category: "Ẩm thực & Hoa tươi",
    link: "https://facebook.com/tiemtrahoathangtu",
    registrationDate: "2026-10-01",
    status: "Đang hoạt động",
    assignee: "Trịnh Hải Yến",
    lastUpdated: "2026-10-12",
    notes: "Đã xác minh CCCD, cam kết giảm giá 10% cho thành viên nhóm."
  },
  {
    stt: 2,
    shopCode: "SHOP-002",
    shopName: "Retro Denim & Vintage Wear",
    representative: "Trần Tuấn Minh",
    phone: "0987654321",
    email: "retrodenim.vietnam@gmail.com",
    address: "Tầng 2, 88 Cầu Giấy, Cầu Giấy, Hà Nội",
    category: "Thời trang & Phụ kiện",
    link: "https://retrodenim.vn",
    registrationDate: "2026-10-03",
    status: "Đang hoạt động",
    assignee: "Lê Quốc Đạt",
    lastUpdated: "2026-10-14",
    notes: "Chuyên quần áo phong cách vintage Mỹ, hàng chuẩn nguồn gốc."
  },
  {
    stt: 3,
    shopCode: "SHOP-003",
    shopName: "PureSkin Organic Cosmetics",
    representative: "Hoàng Mai Anh",
    phone: "0904112233",
    email: "maianh.pureskin@gmail.com",
    address: "Kiot 05 Tòa HH02 Khu Đô Thị Thanh Hà, Hà Đông, Hà Nội",
    category: "Mỹ phẩm & Chăm sóc da",
    link: "https://facebook.com/pureskinorganics",
    registrationDate: "2026-10-05",
    status: "Chờ xác minh",
    assignee: "Trịnh Hải Yến",
    lastUpdated: "2026-10-13",
    notes: "Đang chờ gửi bổ sung giấy công bố tiêu chuẩn sản phẩm mỹ phẩm thiên nhiên."
  },
  {
    stt: 4,
    shopCode: "SHOP-004",
    shopName: "TechZone Phụ Kiện & Gia Dụng Thông Minh",
    representative: "Phạm Quang Huy",
    phone: "0936889900",
    email: "techzone.contact@gmail.com",
    address: "245 Hoàng Văn Thụ, Phường 2, Tân Bình, TP.HCM",
    category: "Thiết bị số & Đồ gia dụng",
    link: "https://techzoneviet.com",
    registrationDate: "2026-10-08",
    status: "Tạm ngừng",
    assignee: "Vũ Hoàng Nam",
    lastUpdated: "2026-10-11",
    notes: "Tạm ngừng nhận đơn 1 tuần do chuyển kho bãi; mở lại ngày 20/10."
  },
  {
    stt: 5,
    shopCode: "SHOP-005",
    shopName: "Tiệm Bánh Mẹ Cốm - Ăn Vặt Lành Mạnh",
    representative: "Đặng Thu Trang",
    phone: "0971223344",
    email: "banhmecom2026@gmail.com",
    address: "Khu tập thể A1 Giảng Võ, Ba Đình, Hà Nội",
    category: "Ẩm thực, Đồ ăn vặt",
    link: "https://facebook.com/tiembanhmecom",
    registrationDate: "2026-10-10",
    status: "Đang hoạt động",
    assignee: "Lê Quốc Đạt",
    lastUpdated: "2026-10-14",
    notes: "Chuyên bánh yến mạch healthy, không đường tinh luyện. Rất được lòng dân văn phòng."
  },
  {
    stt: 6,
    shopCode: "SHOP-006",
    shopName: "Decor Gỗ Mộc Gia Đình",
    representative: "Bùi Văn Tùng",
    phone: "0915998877",
    email: "gomoc.tungbui@gmail.com",
    address: "Cụm Công nghiệp Làng nghề Chàng Sơn, Thạch Thất, Hà Nội",
    category: "Đồ gia dụng & Tiện ích",
    link: "https://facebook.com/decorgomoc",
    registrationDate: "2026-09-25",
    status: "Ngừng hoạt động",
    assignee: "Vũ Hoàng Nam",
    lastUpdated: "2026-10-02",
    notes: "Shop đổi hướng sang xuất khẩu, không tiếp tục bán lẻ trên cộng đồng."
  }
];

export interface SheetsFormulaItem {
  id: number;
  name: string;
  formula: string;
  targetCell: string;
  description: string;
  sampleInput: string;
  sampleOutput: string;
  commonErrorAndFix: string;
}

export const sheetsFormulas: SheetsFormulaItem[] = [
  {
    id: 1,
    name: "Tự động đánh Số Thứ Tự (STT) thông minh",
    formula: `=IF(C2<>"", ROW()-1, "")`,
    targetCell: "Cột A (Ô A2, sau đó kéo xuống toàn bộ cột)",
    description: "Kiểm tra nếu ô Tên Shop (C2) có nội dung thì lấy chỉ số dòng trừ đi 1 để làm STT (do dòng 1 là tiêu đề). Nếu không có tên shop thì để ô trống sạch sẽ, không tạo số ảo.",
    sampleInput: "Dòng 2 có Tên shop tại C2 = 'Tiệm Trà & Hoa Tháng Tư'",
    sampleOutput: "1 (Tự động tăng thành 2, 3, 4 khi thêm dòng mới)",
    commonErrorAndFix: "Lỗi hiển thị khoảng trống nếu quên nhập Tên shop. Cách xử lý: Đảm bảo trường Tên shop luôn được điền trước."
  },
  {
    id: 2,
    name: "Tự động sinh Mã Shop chuẩn hóa (SHOP-001, SHOP-002...)",
    formula: `=IF(C2<>"", "SHOP-" & TEXT(ROW()-1, "000"), "")`,
    targetCell: "Cột B (Ô B2, sau đó kéo xuống)",
    description: "Kết hợp chuỗi tiền tố cố định 'SHOP-' cùng hàm TEXT để định dạng chỉ số STT thành 3 chữ số có số 0 ở đầu (001, 002, 003...). Giúp dữ liệu phân loại cực kỳ chuyên nghiệp và đồng bộ.",
    sampleInput: "Dòng thứ 2 (STT 1), dòng thứ 15 (STT 14)",
    sampleOutput: "SHOP-001, SHOP-014",
    commonErrorAndFix: "Lỗi hiển thị SHOP-000 nếu tiêu đề ở dòng khác. Khắc phục: Điều chỉnh số trừ trong hàm ROW()-1 tương ứng với vị trí dòng tiêu đề."
  },
  {
    id: 3,
    name: "Thống kê thời gian thực số lượng shop theo trạng thái",
    formula: `=COUNTIF(K:K, "Đang hoạt động")`,
    targetCell: "Khung tóm tắt Dashboard (Ví dụ: Ô P2, P3, P4)",
    description: "Tự động đếm có bao nhiêu shop trong toàn bộ Cột K (Trạng thái) đang ở giá trị 'Đang hoạt động'. Tương tự có thể đếm cho 'Chờ xác minh' hoặc 'Tạm ngừng'.",
    sampleInput: "Cột K có 10 shop 'Đang hoạt động', 2 shop 'Chờ xác minh'",
    sampleOutput: "10",
    commonErrorAndFix: "Nếu trả về số 0 dù có dữ liệu: do khoảng trắng thừa ở cuối chữ (VD: 'Đang hoạt động '). Sửa bằng cách dùng danh sách thả xuống Data Validation để chuẩn hóa 100% text."
  },
  {
    id: 4,
    name: "Tra cứu thông tin Shop nhanh bằng Mã Shop (VLOOKUP / XLOOKUP)",
    formula: `=XLOOKUP(P2, B:B, C:E, "Không tìm thấy shop")`,
    targetCell: "Ô tra cứu thông tin nhanh (Ví dụ: Ô Q2)",
    description: "Khi kỹ thuật viên nhập mã 'SHOP-002' vào ô P2, hàm XLOOKUP sẽ lập tức trả về Tên Shop, Người đại diện và Số điện thoại tương ứng từ bảng tổng hợp mà không cần cuộn tìm thủ công.",
    sampleInput: "Nhập P2 = 'SHOP-002'",
    sampleOutput: "Retro Denim & Vintage Wear | Trần Tuấn Minh | 0987654321",
    commonErrorAndFix: "Với Google Sheets cũ không hỗ trợ XLOOKUP, dùng thay thế: =VLOOKUP(P2, B:N, 2, FALSE) để lấy Tên Shop."
  },
  {
    id: 5,
    name: "Tự động đồng bộ an toàn từ Sheet Phản Hồi Form sang Sheet Quản Lý",
    formula: `=ARRAYFORMULA(IF('Biểu mẫu phản hồi 1'!B2:B<>"", 'Biểu mẫu phản hồi 1'!B2:B, ""))`,
    targetCell: "Sheet Quản Lý Chính (Ô C2)",
    description: "Không bao giờ chỉnh sửa trực tiếp trên Sheet gốc của Google Forms (dễ làm lệch dòng). Hãy tạo 1 Sheet mới tên 'DanhSachQuanLy' và dùng ARRAYFORMULA hoặc QUERY để trích xuất dữ liệu tự động sang.",
    sampleInput: "Có 50 câu trả lời mới nộp về Sheet Biểu mẫu phản hồi 1",
    sampleOutput: "Tự động xuất hiện đầy đủ bên Sheet DanhSachQuanLy mà không cần copy paste",
    commonErrorAndFix: "Lỗi #REF! (Ghi đè dữ liệu): Xuất hiện khi bên dưới ô công thức có các ô chứa chữ cản trở mảng mở rộng. Khắc phục: Xóa sạch dữ liệu phía dưới ô chứa ARRAYFORMULA."
  }
];

export const sheetsSetupSteps = [
  {
    step: "1. Đặt tên tệp và Cấu trúc thư mục Google Drive",
    action: "Trong Google Drive -> Tạo thư mục: '01_QUAN_LY_CONG_DONG_SHOP' -> Đặt tên bảng tính theo quy chuẩn: [QL_SHOP] Danh_Sach_Shop_Thanh_Vien_2026.",
    tip: "Quy ước đặt tên có tiền tố ngoặc vuông giúp phân loại tệp gọn gàng trên công cụ tìm kiếm của Drive."
  },
  {
    step: "2. Tạo 14 cột tiêu đề và Định dạng màu sắc nhận diện",
    action: "Nhập lần lượt 14 cột tại Hàng 1: STT, Mã shop, Tên shop, Người đại diện, Số điện thoại, Email, Địa chỉ, Danh mục, Link shop, Ngày đăng ký, Trạng thái, Người phụ trách, Ngày cập nhật, Ghi chú. Tô màu nền xanh navy (#1e3a8a) và chữ trắng in đậm cho Hàng 1.",
    tip: "Chiều rộng cột nên co giãn phù hợp: Cột Địa chỉ để rộng 250px, Cột Tên shop 180px, Cột SĐT 120px."
  },
  {
    step: "3. Cố định hàng tiêu đề (Freeze Top Row)",
    action: "Chọn Hàng 1 -> Nhấp vào menu 'Xem' (View) -> 'Cố định' (Freeze) -> Chọn '1 hàng' (1 row).",
    tip: "Giúp dòng tiêu đề luôn đứng yên khi cuộn xuống dưới xem hàng trăm dòng shop."
  },
  {
    step: "4. Tạo bộ lọc dữ liệu (Filter Views)",
    action: "Bôi đen toàn bộ dữ liệu từ ô A1 đến N1 -> Nhấp vào menu 'Dữ liệu' (Data) -> Chọn 'Tạo bộ lọc' (Create a filter).",
    tip: "Nhấp vào phễu lọc ở Cột Trạng thái hoặc Cột Người phụ trách để lọc danh sách shop cần chăm sóc trong ngày."
  },
  {
    step: "5. Định dạng Cột Số điện thoại & Ngày tháng chuẩn",
    action: "Chọn cột E (Số điện thoại) -> Vào Định dạng -> Số -> Chọn 'Văn bản thuần túy' (Plain text). Chọn cột J và M -> Vào Định dạng -> Số -> Ngày tháng (chọn định dạng DD/MM/YYYY).",
    tip: "Nếu nhập tay trực tiếp số điện thoại, gõ dấu nháy đơn ' trước số 0 (Ví dụ: '0912345678) để số 0 không bị mất."
  },
  {
    step: "6. Tạo danh sách thả xuống (Dropdown) với Màu sắc trực quan",
    action: "Bôi đen cột K (Trạng thái) -> Vào Dữ liệu -> Xác thực dữ liệu -> Thêm quy tắc -> Tiêu chí: 'Trang đơn (danh sách)' -> Nhập 4 giá trị và chọn màu: Đang hoạt động (Xanh lá), Chờ xác minh (Vàng cam), Tạm ngừng (Màu xám/cam nhạt), Ngừng hoạt động (Màu đỏ).",
    tip: "Nhìn lướt qua bảng là phân biệt được ngay tình trạng từng shop nhờ màu sắc trực quan."
  }
];

export const sharingAndProtectionGuide = {
  roles: [
    {
      role: "Người chỉnh sửa (Editor)",
      who: "Kỹ thuật viên quản trị chính phụ trách cập nhật trạng thái",
      permission: "Có toàn quyền sửa dữ liệu, nhưng bị hạn chế ở các cột nhạy cảm bằng tính năng Khóa dải ô (Protect Sheet/Range)."
    },
    {
      role: "Người nhận xét (Commenter)",
      who: "Trưởng nhóm kiểm duyệt, nhân viên trực ca phụ",
      permission: "Chỉ được xem và để lại ghi chú/bình luận ở từng dòng, không được thay đổi dữ liệu gốc nhằm tránh xóa nhầm."
    },
    {
      role: "Người xem (Viewer)",
      who: "Cộng tác viên cộng đồng, lãnh đạo theo dõi báo cáo",
      permission: "Chỉ đọc, không được sửa hoặc comment. Có thể tắt tính năng 'Người xem có thể tải xuống, in và sao chép'."
    }
  ],
  protectionTips: [
    {
      title: "Khóa dải ô chứa Công thức (Protect Range)",
      detail: "Bôi đen Cột A (STT) và Cột B (Mã Shop) -> Nhấp chuột phải chọn 'Xem các thao tác khác' -> 'Bảo vệ dải ô' -> Chọn 'Chỉ bạn có quyền chỉnh sửa'. Ngăn người khác vô tình gõ đè làm mất công thức tự động."
    },
    {
      title: "Bảo vệ thông tin cá nhân (PII Masking)",
      detail: "Khi cần chia sẻ danh sách shop cho cộng tác viên ngoài, tạo 1 bản sao hoặc View ẩn cột Số điện thoại và Email cá nhân, chỉ giữ lại Link shop và Hotline bán hàng công khai."
    },
    {
      title: "Quy trình sao lưu 3 cấp (Backup SOP)",
      detail: "1. Tận dụng Lịch sử phiên bản (Version History) của Google Sheets (Tệp -> Lịch sử phiên bản -> Khôi phục về mốc thời gian trước nếu lỡ tay xóa). 2. Định kỳ 17h chiều thứ Sáu hàng tuần: Tải 1 bản sao file Excel (.xlsx) về lưu trên máy tính nội bộ. 3. Nhân bản 1 file Backup dự phòng trên Google Drive."
    }
  ]
};
