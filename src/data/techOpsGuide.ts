/**
 * Comprehensive TechOps Guide & Deliverables for Member 2: Technical and Operations Lead
 * (Thành viên 2: Kỹ thuật và Vận hành)
 */

export interface ProjectProfile {
  projectName: string;
  projectGoal: string;
  targetAudience: string;
  operatingHeadcount: number;
  budget: string;
  timeline: string;
  language: string;
  priorityPlatforms: string[];
  assumptions: string[];
}

export const defaultProjectProfile: ProjectProfile = {
  projectName: "Cộng Đồng Giao Thương & Quản Lý Đối Tác Shop Văn Phòng 2026 (TechOps Hub)",
  projectGoal: "Thiết lập hệ thống hạ tầng số tập trung 0 đồng để quản lý hơn 100 đối tác shop, kiểm duyệt hàng nghìn sản phẩm, tiếp nhận và giải quyết khiếu nại khách hàng trong vòng 24h, đảm bảo tính bảo mật và dễ bàn giao.",
  targetAudience: "Người bán (Chủ shop/Đối tác liên kết), Khách hàng (Cán bộ nhân viên văn phòng, người tiêu dùng), Nhóm vận hành dự án.",
  operatingHeadcount: 4,
  budget: "0 VNĐ (Tận dụng 100% gói dịch vụ miễn phí của Google, Facebook, Canva, Trello)",
  timeline: "7 ngày triển khai hoàn tất và nghiệm thu",
  language: "Tiếng Việt chuẩn mực văn phòng",
  priorityPlatforms: ["Facebook Group", "Google Forms", "Google Sheets", "Google Drive", "Google Sites", "Trello"],
  assumptions: [
    "Dự án hoạt động phi lợi nhuận hoặc tự chủ ban đầu, ưu tiên bảo mật thông tin theo Nghị định 13/2023/NĐ-CP.",
    "Đội ngũ vận hành có kỹ năng văn phòng cơ bản, sử dụng máy tính Windows/Mac và điện thoại thông minh.",
    "Tài khoản quản trị chung được khởi tạo mới trên Google để tránh phụ thuộc vào email cá nhân."
  ]
};

// ==========================================
// NHIỆM VỤ 1: FACEBOOK GROUP TECHOPS
// ==========================================
export const facebookTechOpsConfig = {
  naming: "Cộng Đồng Đối Tác Shop & Mua Sắm Văn Phòng [Tên Cơ Quan / Khu Vực] - Quản Lý Chính Thức",
  description: `🌟 TRANG CỘNG ĐỒNG CHÍNH THỨC DỰ ÁN [TÊN DỰ ÁN] 🌟

📌 I. MỤC TIÊU VẬN HÀNH:
Kênh kết nối chính thống giữa Ban Quản Lý, các Đối Tác Người Bán uy tín và Quý Thành Viên. Đảm bảo giao thương văn minh, minh bạch giá cả và hỗ trợ giải quyết sự cố 24/7.

🔰 II. NGUYÊN TẮC HOẠT ĐỘNG:
1. 100% Người bán phải xác minh danh tính và được cấp Mã Người Bán (NB-xxx).
2. Công khai 100% giá bán bằng VNĐ, xuất xứ và hotline liên hệ.
3. Mọi bài viết bán hàng phải qua hàng đợi phê duyệt của BQT.
4. Mọi sự cố khiếu nại được tiếp nhận chính thức qua Cổng Biểu Mẫu tiếp nhận sự cố.

📋 III. CHỦ ĐỀ NỘI DUNG (POST TOPICS / GUIDES):
- #ThongBaoBQT: Thông báo quy chế, chính sách và lịch duyệt bài.
- #GioiThieuShop: Giới thiệu gian hàng đối tác mới gia nhập.
- #SanPhamTieuDiem: Giới thiệu sản phẩm mới được duyệt bán.
- #HoTroKhieuNai: Hướng dẫn người mua gửi phản ánh khi phát sinh sự cố.

📞 IV. LIÊN HỆ KỸ THUẬT & TRỌNG TÀI BQT:
- Hotline kỹ thuật: [09xx xxx xxx - Kỹ thuật viên vận hành]
- Link gửi khiếu nại sự cố: [Đường dẫn Google Forms tiếp nhận phản ánh]`,
  coverBannerSpec: "Kích thước chuẩn: 1640 x 856 pixels. Thiết kế trên Canva gồm: Logo nhận diện, Tên dự án, Slogan 'Uy tín - Minh bạch - Đồng hành', Hotline hỗ trợ kỹ thuật đặt ở vùng an toàn trung tâm.",
  avatarSpec: "Kích thước: 800 x 800 pixels. Logo tối giản, viền xanh navy nhận diện thương hiệu công sở.",
  publicVsPrivate: {
    selected: "Nhóm Riêng Tư (Private) + Hiển Thị (Visible)",
    analysis: [
      {
        type: "Nhóm Công Khai (Public)",
        pros: "Dễ tiếp cận người dùng mới, bài viết chia sẻ được ra ngoài trang cá nhân.",
        cons: "Không kiểm soát được nick ảo, bot tự động quét bình luận lấy số điện thoại khách hàng, dễ bị đối thủ xấu phá hoại.",
        verdict: "Không phù hợp với mục tiêu quản lý đối tác có kiểm soát."
      },
      {
        type: "Nhóm Riêng Tư (Private)",
        pros: "Bảo vệ thông tin người bán và người mua tuyệt đối; 100% thành viên phải trả lời câu hỏi xét duyệt; chống spam và cướp khách triệt để.",
        cons: "Bài viết không thể share ra ngoài nhóm công khai (phải chụp màn hình).",
        verdict: "LỰA CHỌN TỐI ƯU SỐ 1 CHO DỰ ÁN VẬN HÀNH."
      }
    ]
  },
  fourPinnedPosts: [
    {
      id: "pin1",
      title: "Bài ghim 1: Giới thiệu dự án & Sứ mệnh kết nối",
      content: "Công bố quyết định thành lập, mục tiêu dự án, cấu trúc ban vận hành và quyền lợi của thành viên khi tham gia."
    },
    {
      id: "pin2",
      title: "Bài ghim 2: Bộ nội quy 7 điều & Quy tắc giao tiếp",
      content: "Quy định chi tiết về văn hóa ứng xử, cấm hàng giả, công khai giá và khung xử lý vi phạm 3 bước."
    },
    {
      id: "pin3",
      title: "Bài ghim 3: Hướng dẫn đăng ký bán hàng & Quy trình mua sắm an toàn",
      content: "Hướng dẫn người bán nộp hồ sơ qua Google Forms; hướng dẫn người mua tra cứu mã sản phẩm và cách nhận biết shop uy tín."
    },
    {
      id: "pin4",
      title: "Bài ghim 4: Cổng tiếp nhận sự cố & Thông tin liên hệ BQT",
      content: "Công khai đường dẫn Google Forms tiếp nhận khiếu nại, cam kết xử lý trong 24h và đường dây nóng khẩn cấp."
    }
  ]
};

// ==========================================
// NHIỆM VỤ 2: GOOGLE FORMS KHIẾU NẠI & PHẢN HỒI (11 TRƯỜNG)
// ==========================================
export interface ComplaintFormField {
  order: number;
  fieldName: string;
  questionType: string;
  isRequired: boolean;
  technicalConfig: string;
  guidanceText: string;
  purpose: string;
}

export const complaintFormFields: ComplaintFormField[] = [
  {
    order: 1,
    fieldName: "1. Họ và tên người gửi phản ánh",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    technicalConfig: "Không giới hạn ký tự, yêu cầu ghi đúng họ tên theo giấy tờ hoặc tài khoản liên hệ.",
    guidanceText: "Vui lòng nhập đầy đủ họ và tên của bạn để BQT thuận tiện xưng hô và hỗ trợ.",
    purpose: "Xác thực danh tính người phản ánh, phục vụ công tác đối soát hồ sơ."
  },
  {
    order: 2,
    fieldName: "2. Email hoặc Số điện thoại liên hệ",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    technicalConfig: "Xác thực phản hồi: Biểu thức chính quy (Regex) khớp với `(^0[0-9]{9}$)|(^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$)` để chấp nhận cả SĐT 10 số hoặc địa chỉ Email hợp lệ.",
    guidanceText: "Nhập số điện thoại Zalo hoặc Email bạn thường xuyên kiểm tra.",
    purpose: "Kênh liên lạc trực tiếp để gửi kết quả xử lý và cập nhật tiến độ."
  },
  {
    order: 3,
    fieldName: "3. Loại đối tượng liên quan đến phản ánh",
    questionType: "Danh sách thả xuống (Dropdown)",
    isRequired: true,
    technicalConfig: "4 tùy chọn: [1. Người bán / Cửa hàng; 2. Chất lượng Sản phẩm; 3. Dịch vụ giao hàng / Thái độ; 4. Vấn đề kỹ thuật khác].",
    guidanceText: "Chọn đúng nhóm vấn đề cốt lõi mà bạn đang gặp phải.",
    purpose: "Phân loại tự động để chuyển tiếp đúng bộ phận chuyên trách trên Google Sheets."
  },
  {
    order: 4,
    fieldName: "4. Mã người bán hoặc Tên người bán liên quan",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    technicalConfig: "Gợi ý mẫu: 'NB-001 - Tiệm Bánh Mẹ Cốm' hoặc ghi tên cửa hàng bạn đã mua.",
    guidanceText: "Nhập mã người bán (nếu có trên bài đăng) hoặc tên chính xác của shop.",
    purpose: "Đối soát trực tiếp vào Bảng Người Bán để kiểm tra hồ sơ cam kết."
  },
  {
    order: 5,
    fieldName: "5. Mã sản phẩm hoặc Tên sản phẩm liên quan (nếu có)",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: false,
    technicalConfig: "Không bắt buộc (dành cho trường hợp khiếu nại về thái độ phục vụ chung).",
    guidanceText: "Ví dụ: SP-005 hoặc Bánh quy yến mạch ăn kiêng (bỏ qua nếu không rõ).",
    purpose: "Khoanh vùng lô hàng bị phản ánh chất lượng."
  },
  {
    order: 6,
    fieldName: "6. Tiêu đề tóm tắt phản ánh",
    questionType: "Câu trả lời ngắn (Short answer)",
    isRequired: true,
    technicalConfig: "Giới hạn tối đa 150 ký tự.",
    guidanceText: "Khái quát sự cố trong 1 câu ngắn (Ví dụ: Giao hàng chậm 3 ngày, Sản phẩm bị vỡ hỏng...).",
    purpose: "Hiển thị trên cột Tiêu đề trang tính và tiêu đề email thông báo BQT."
  },
  {
    order: 7,
    fieldName: "7. Nội dung chi tiết sự việc xảy ra",
    questionType: "Đoạn văn (Paragraph)",
    isRequired: true,
    technicalConfig: "Đoạn văn tự do, khuyến khích mô tả mốc thời gian, lời trao đổi giữa hai bên.",
    guidanceText: "Mô tả chi tiết: Bạn đặt đơn khi nào? Tình trạng hàng khi nhận thế nào? Shop đã trả lời ra sao?",
    purpose: "Cung cấp toàn bộ bối cảnh để ban trọng tài thẩm định."
  },
  {
    order: 8,
    fieldName: "8. Mức độ ưu tiên theo đánh giá của bạn",
    questionType: "Trắc nghiệm (Multiple choice)",
    isRequired: true,
    technicalConfig: "4 mức: Thấp (góp ý xây dựng) | Trung bình (cần đổi trả thông thường) | Cao (thiệt hại kinh tế/chậm tiến độ) | Khẩn cấp (dấu hiệu lừa đảo, hàng nguy hại sức khỏe).",
    guidanceText: "Đánh giá mức độ ảnh hưởng của sự cố đối với bạn.",
    purpose: "Xếp thứ tự xử lý trên ma trận Ticket: Khẩn cấp xử lý trong 2h, Cao trong 8h."
  },
  {
    order: 9,
    fieldName: "9. Ngày xảy ra sự cố",
    questionType: "Ngày tháng (Date picker)",
    isRequired: true,
    technicalConfig: "Bắt buộc chọn ngày theo lịch ngày/tháng/năm.",
    guidanceText: "Chọn ngày bạn phát hiện sự cố hoặc ngày nhận hàng.",
    purpose: "Kiểm tra tính kịp thời so với chính sách bảo hành 7 ngày của nhóm."
  },
  {
    order: 10,
    fieldName: "10. Bằng chứng đính kèm (Ảnh chụp hóa đơn, sản phẩm lỗi, tin nhắn)",
    questionType: "Tải tệp lên (File upload)",
    isRequired: false,
    technicalConfig: "Cho phép các định dạng: Hình ảnh (JPG, PNG), Tài liệu (PDF). Tối đa 5 tệp, kích thước mỗi tệp tối đa 10MB.",
    guidanceText: "Tải lên ảnh chụp màn hình tin nhắn, bưu kiện hoặc phiếu mua hàng (Lưu ý: Tính năng này yêu cầu đăng nhập tài khoản Google).",
    purpose: "Cơ sở đối chiếu pháp lý quan trọng nhất để yêu cầu shop hoàn tiền hoặc đền bù."
  },
  {
    order: 11,
    fieldName: "11. Phương án giải quyết mong muốn của bạn",
    questionType: "Đoạn văn (Paragraph)",
    isRequired: false,
    technicalConfig: "Đoạn văn tự do.",
    guidanceText: "Bạn mong muốn: Đổi hàng mới 1-1, Hoàn lại tiền, hay Shop xin lỗi công khai?",
    purpose: "Giúp BQT định hướng thương lượng giải quyết nhanh gọn đúng ý khách hàng."
  }
];

export const complaintFormConfigGuide = {
  formTitle: "CỔNG TIẾP NHẬN PHẢN ÁNH & KHIẾU NẠI DỰ ÁN 2026",
  introText: `Kính gửi Quý Thành viên và Đối tác,

Ban Quản Trị dự án luôn cam kết duy trì một môi trường giao thương minh bạch, công bằng và an toàn cho tất cả mọi người. Biểu mẫu này dùng để ghi nhận các sự cố, chất lượng phục vụ hoặc khiếu nại phát sinh trong quá trình tương tác, mua bán.

⏱ CAM KẾT XỬ LÝ CỦA BAN QUẢN TRỊ:
- Sự cố mức độ Khẩn cấp: Phản hồi và liên hệ trong vòng 02 giờ làm việc.
- Sự cố mức độ Cao & Trung bình: Giải quyết dứt điểm trong vòng 24 - 48 giờ làm việc.
- Mọi khiếu nại đều được ghi nhận bằng Mã Sự Cố (SC-xxx) trên hệ thống quản lý tập trung.

🔒 BẢO MẬT: BQT tuyệt đối bảo mật danh tính người gửi đối với các phản ánh nhạy cảm theo Nghị định 13/2023/NĐ-CP.`,
  confirmationMessage: `✅ Cảm ơn bạn đã gửi phản ánh tới Ban Quản Trị!

Hệ thống đã tự động ghi nhận thông tin và chuyển tới Kỹ thuật viên phụ trách. Bạn sẽ nhận được mã sự cố qua tin nhắn/email trong vòng 2 giờ.
Trường hợp cần hỗ trợ khẩn cấp, vui lòng gọi trực tiếp Hotline BQT: 09xx xxx xxx.`,
  fileUploadNotice: "⚠️ LƯU Ý KỸ THUẬT QUAN TRỌNG: Câu hỏi số 10 sử dụng tính năng 'Tải tệp lên' của Google Forms. Tính năng này bắt buộc người gửi phải đăng nhập tài khoản Google (Gmail) để tệp tải lên được lưu vào Google Drive của BQT. Nếu dự án muốn người gửi không cần đăng nhập Google, hãy chuyển câu 10 thành dạng 'Dán link ảnh chụp' (qua Imgur hoặc Drive công khai) và bỏ phần upload file.",
  emailAlertSetup: "Vào Forms -> Tab 'Câu trả lời' -> Bấm dấu 3 chấm góc phải -> Tích 'Nhận thông báo qua email cho các câu trả lời mới'. Để gửi email chuyên nghiệp tự động cho người gửi, sử dụng tiện ích bổ sung 'Form Mule' hoặc đoạn mã Apps Script tự động kích hoạt onFormSubmit."
};

// ==========================================
// NHIỆM VỤ 3: GOOGLE SHEETS 3 TRANG QUẢN LÝ
// ==========================================
export interface SellerRow {
  sellerCode: string;
  sellerName: string;
  email: string;
  phone: string;
  area: string;
  joinDate: string;
  status: "Chờ duyệt" | "Đang hoạt động" | "Tạm ngừng" | "Ngừng hợp tác";
  assignee: string;
  notes: string;
}

export interface ProductRow {
  productCode: string;
  productName: string;
  sellerCode: string;
  category: string;
  shortDesc: string;
  price: number;
  postDate: string;
  status: "Chờ duyệt" | "Đang bán" | "Tạm dừng" | "Đã gỡ";
  assignee: string;
  notes: string;
}

export interface IncidentRow {
  incidentCode: string;
  receivedTime: string;
  source: string;
  senderName: string;
  contactInfo: string;
  objectType: string;
  relatedCode: string;
  summary: string;
  priority: "Thấp" | "Trung bình" | "Cao" | "Khẩn cấp";
  status: "Mới tiếp nhận" | "Đang xử lý" | "Chờ phản hồi" | "Đã giải quyết" | "Đã đóng";
  assignee: string;
  lastUpdated: string;
  deadline: string;
  resolutionResult: string;
  internalNotes: string;
}

export const sampleSellers: SellerRow[] = [
  {
    sellerCode: "NB-001",
    sellerName: "Tiệm Trà & Hoa Tháng Tư",
    email: "thaoly.hoathangtu@gmail.com",
    phone: "0912345678",
    area: "Đống Đa, Hà Nội",
    joinDate: "2026-10-01",
    status: "Đang hoạt động",
    assignee: "Trịnh Hải Yến",
    notes: "Đã nộp đủ giấy tờ xác minh, cam kết chiết khấu 10% cho dự án."
  },
  {
    sellerCode: "NB-002",
    sellerName: "Retro Denim & Vintage Store",
    email: "retrodenim.vietnam@gmail.com",
    phone: "0987654321",
    area: "Cầu Giấy, Hà Nội",
    joinDate: "2026-10-03",
    status: "Đang hoạt động",
    assignee: "Lê Quốc Đạt",
    notes: "Chuyên đồ thời trang phong cách cổ điển, nguồn gốc minh bạch."
  },
  {
    sellerCode: "NB-003",
    sellerName: "PureSkin Organic Cosmetics",
    email: "maianh.pureskin@gmail.com",
    phone: "0904112233",
    area: "Hà Đông, Hà Nội",
    joinDate: "2026-10-05",
    status: "Chờ duyệt",
    assignee: "Trịnh Hải Yến",
    notes: "Đang chờ gửi bản quét phiếu công bố tiêu chuẩn mỹ phẩm."
  },
  {
    sellerCode: "NB-004",
    sellerName: "TechZone Phụ Kiện Gia Dụng",
    email: "techzone.contact@gmail.com",
    phone: "0936889900",
    area: "Tân Bình, TP.HCM",
    joinDate: "2026-10-08",
    status: "Tạm ngừng",
    assignee: "Vũ Hoàng Nam",
    notes: "Đang chuyển kho bãi, xin tạm ngừng bán đến ngày 20/10."
  },
  {
    sellerCode: "NB-005",
    sellerName: "Gia Vị Tây Bắc Mộc Châu",
    email: "taybac.giavi@gmail.com",
    phone: "0968999888",
    area: "Mộc Châu, Sơn La",
    joinDate: "2026-09-20",
    status: "Ngừng hợp tác",
    assignee: "Lê Quốc Đạt",
    notes: "Vi phạm quy tắc công khai giá bán 3 lần, BQT đã chấm dứt hợp tác."
  }
];

export const sampleProducts: ProductRow[] = [
  {
    productCode: "SP-001",
    productName: "Trà Hoa Cúc Tiến Vua Hữu Cơ",
    sellerCode: "NB-001",
    category: "Ẩm thực & Đồ uống",
    shortDesc: "Hộp 100g sấy lạnh giữ nguyên màu và hương thơm thanh khiết",
    price: 135000,
    postDate: "2026-10-02",
    status: "Đang bán",
    assignee: "Trịnh Hải Yến",
    notes: "Có giấy kiểm định vệ sinh ATTP số 124/2026."
  },
  {
    productCode: "SP-002",
    productName: "Quần Jeans Ống Suông Vintage Wash",
    sellerCode: "NB-002",
    category: "Thời trang & Phụ kiện",
    shortDesc: "Vải denim 13oz cotton 100%, phong cách retro thập niên 90",
    price: 390000,
    postDate: "2026-10-04",
    status: "Đang bán",
    assignee: "Lê Quốc Đạt",
    notes: "Hàng sẵn kho size 28 đến 34."
  },
  {
    productCode: "SP-003",
    productName: "Serum Dưỡng Sáng Da Rau Má Niacinamide",
    sellerCode: "NB-003",
    category: "Mỹ phẩm làm đẹp",
    shortDesc: "Chai 30ml chiết xuất rau má tươi làm dịu phục hồi da mụn",
    price: 245000,
    postDate: "2026-10-06",
    status: "Chờ duyệt",
    assignee: "Trịnh Hải Yến",
    notes: "Đang đối chiếu thành phần với hồ sơ nhà sản xuất."
  },
  {
    productCode: "SP-004",
    productName: "Cáp Sạc Nhanh Đa Năng 65W Bọc Dù",
    sellerCode: "NB-004",
    category: "Thiết bị số",
    shortDesc: "Hỗ trợ PD chuẩn Type-C to Type-C dài 1.5 mét chống gãy gập",
    price: 160000,
    postDate: "2026-10-09",
    status: "Tạm dừng",
    assignee: "Vũ Hoàng Nam",
    notes: "Tạm dừng đồng bộ theo trạng thái shop."
  },
  {
    productCode: "SP-005",
    productName: "Hạt Mắc Khén Rừng Sơn La Loại 1",
    sellerCode: "NB-005",
    category: "Ẩm thực & Gia vị",
    shortDesc: "Túi zip 500g hạt khô thơm nồng tự nhiên",
    price: 85000,
    postDate: "2026-09-22",
    status: "Đã gỡ",
    assignee: "Lê Quốc Đạt",
    notes: "Đã gỡ khỏi nhóm do shop bị tước quyền."
  }
];

export const sampleIncidents: IncidentRow[] = [
  {
    incidentCode: "SC-001",
    receivedTime: "2026-10-12 09:15",
    source: "Google Forms",
    senderName: "Trần Minh Hoàng",
    contactInfo: "0912998877",
    objectType: "Người bán",
    relatedCode: "NB-001",
    summary: "Hộp trà giao bị rách bao bì và thiếu quà tặng kèm mã VANPHONG2026",
    priority: "Trung bình",
    status: "Đang xử lý",
    assignee: "Trịnh Hải Yến",
    lastUpdated: "2026-10-14",
    deadline: "2026-10-15",
    resolutionResult: "Shop đã đồng ý gửi bù hộp mới và gói quà trong ngày 14/10.",
    internalNotes: "Khách hàng hợp tác tốt, cần theo dõi mã bưu tá phát hàng."
  },
  {
    incidentCode: "SC-002",
    receivedTime: "2026-10-11 14:30",
    source: "Messenger BQT",
    senderName: "Lê Thị Mai",
    contactInfo: "mai.lethithanh@gmail.com",
    objectType: "Sản phẩm",
    relatedCode: "SP-002",
    summary: "Quần jean nhận không đúng size đặt (đặt 29 giao size 32)",
    priority: "Thấp",
    status: "Đã giải quyết",
    assignee: "Lê Quốc Đạt",
    lastUpdated: "2026-10-13",
    deadline: "2026-10-14",
    resolutionResult: "Đã đổi size 29 tận nơi miễn phí 100% cước cho khách.",
    internalNotes: "Khách đã gửi đánh giá hài lòng 5 sao."
  },
  {
    incidentCode: "SC-003",
    receivedTime: "2026-10-10 16:45",
    source: "Google Forms",
    senderName: "Nguyễn Văn Tuấn",
    contactInfo: "0903445566",
    objectType: "Dịch vụ giao hàng",
    relatedCode: "NB-004",
    summary: "Bưu tá hẹn 3 lần không giao, thái độ cáu gắt và đơn bị quá hạn 4 ngày",
    priority: "Cao",
    status: "Đang xử lý",
    assignee: "Vũ Hoàng Nam",
    lastUpdated: "2026-10-14",
    deadline: "2026-10-13", // ĐÃ QUÁ HẠN ĐỂ TEST ĐỊNH DẠNG CÓ ĐIỀU KIỆN!
    resolutionResult: "Đang làm việc với bưu cục chuyển phát yêu cầu đổi bưu tá khác phát khẩn.",
    internalNotes: "ĐÃ QUÁ HẠN: Cần ưu tiên gọi hotline bưu cục trong sáng nay."
  },
  {
    incidentCode: "SC-004",
    receivedTime: "2026-10-14 08:20",
    source: "Hotline Khẩn",
    senderName: "Đỗ Bích Thảo",
    contactInfo: "0977112233",
    objectType: "Người bán",
    relatedCode: "NB-003",
    summary: "Khách dị ứng mẩn ngứa nghi ngờ sản phẩm chứa hương liệu cấm",
    priority: "Khẩn cấp",
    status: "Mới tiếp nhận",
    assignee: "Trịnh Hải Yến",
    lastUpdated: "2026-10-14",
    deadline: "2026-10-14",
    resolutionResult: "Đã yêu cầu shop gửi ngay mẫu kiểm nghiệm và hoàn tiền khám bệnh cho khách.",
    internalNotes: "SỰ CỐ MỨC KHẨN CẤP: Báo cáo Quản trị viên trưởng trước 11h30."
  },
  {
    incidentCode: "SC-005",
    receivedTime: "2026-10-09 10:00",
    source: "Google Forms",
    senderName: "Phạm Hồng Ánh",
    contactInfo: "anh.pham@techcorp.vn",
    objectType: "Người bán",
    relatedCode: "NB-005",
    summary: "Shop nhắn tin riêng gạ gẫm chuyển khoản đặt cọc rồi chặn liên lạc",
    priority: "Khẩn cấp",
    status: "Đã đóng",
    assignee: "Lê Quốc Đạt",
    lastUpdated: "2026-10-10",
    deadline: "2026-10-10",
    resolutionResult: "BQT đã trục xuất vĩnh viễn shop NB-005, công bố thông tin cảnh báo và hỗ trợ khách nộp hồ sơ công an.",
    internalNotes: "Hồ sơ đã đóng, chuyển sang lưu trữ 07_Tai_lieu_luu_tru."
  }
];

// ==========================================
// CÔNG THỨC GOOGLE SHEETS BẤT BIẾN & KPI
// ==========================================
export const technicalFormulas = {
  // 1. Mã người bán bất biến
  immutableSellerCode: {
    name: "Tạo Mã Người Bán Bất Biến (Không bị lệch khi sắp xếp Sort)",
    formula: `=IF(B2<>"", "NB-" & TEXT(MATCH(B2, $B$2:$B, 0), "000"), "")`,
    location: "Trang 1 'NGƯỜI BÁN' - Cột A (Ô A2 kéo xuống)",
    explanation: "Dùng hàm MATCH để tìm vị trí xuất hiện đầu tiên của Tên shop (B2) trong toàn cột B cố định. Ngay cả khi người dùng bấm Sắp xếp (Sort A-Z hoặc Z-A) theo Tên hoặc Ngày, mã shop của cửa hàng đó vẫn giữ nguyên tuyệt đối, không bị đổi như hàm ROW() thông thường!",
    sampleOutput: "NB-001, NB-002"
  },
  // 2. Mã sản phẩm bất biến
  immutableProductCode: {
    name: "Tạo Mã Sản Phẩm Bất Biến",
    formula: `=IF(B2<>"", "SP-" & TEXT(MATCH(B2, $B$2:$B, 0), "000"), "")`,
    location: "Trang 2 'SẢN PHẨM' - Cột A (Ô A2 kéo xuống)",
    explanation: "Tương tự, dựa trên chỉ số định danh của Tên sản phẩm trong cột B.",
    sampleOutput: "SP-001, SP-002"
  },
  // 3. Mã sự cố tự động
  immutableIncidentCode: {
    name: "Tạo Mã Sự Cố Tự Động Định Danh",
    formula: `=IF(B2<>"", "SC-" & TEXT(ROW()-1, "000"), "")`,
    location: "Trang 3 'SỰ CỐ VÀ KHIẾU NẠI' - Cột A (Ô A2)",
    explanation: "Đối với bảng sự cố ghi nhận tuần tự theo thời gian nhận form, ROW()-1 sinh mã ticket duy nhất. Khi đã chốt ticket, kỹ thuật viên có thể dùng phím tắt Ctrl + C rồi Ctrl + Shift + V (Paste Values) để khóa chết giá trị tĩnh.",
    sampleOutput: "SC-001, SC-002"
  },
  // 4. Thống kê KPI Dashboard
  dashboardFormulas: [
    {
      metric: "Tổng số sự cố tiếp nhận",
      formula: `=COUNTA('SỰ CỐ VÀ KHIẾU NẠI'!A2:A)`,
      location: "Trang Dashboard Ô B2",
      explanation: "Đếm toàn bộ số lượng sự cố đã phát sinh trong toàn bộ dự án."
    },
    {
      metric: "Số sự cố đang xử lý",
      formula: `=COUNTIF('SỰ CỐ VÀ KHIẾU NẠI'!J2:J, "Đang xử lý")`,
      location: "Trang Dashboard Ô B3",
      explanation: "Lọc đếm các ticket có trạng thái chính xác là 'Đang xử lý'."
    },
    {
      metric: "Số sự cố ĐÃ QUÁ HẠN (Critical Alert)",
      formula: `=COUNTIFS('SỰ CỐ VÀ KHIẾU NẠI'!J2:J, "<>Đã giải quyết", 'SỰ CỐ VÀ KHIẾU NẠI'!J2:J, "<>Đã đóng", 'SỰ CỐ VÀ KHIẾU NẠI'!M2:M, "<" & TODAY(), 'SỰ CỐ VÀ KHIẾU NẠI'!M2:M, "<>")`,
      location: "Trang Dashboard Ô B4 (Chỉ số cảnh báo đỏ)",
      explanation: "Đếm các sự cố mà Trạng thái CHƯA xong (khác Đã giải quyết & khác Đã đóng) VÀ Cột Hạn xử lý (cột M) nhỏ hơn ngày hôm nay (TODAY())."
    },
    {
      metric: "Số sự cố đã giải quyết thành công",
      formula: `=COUNTIF('SỰ CỐ VÀ KHIẾU NẠI'!J2:J, "Đã giải quyết")`,
      location: "Trang Dashboard Ô B5",
      explanation: "Đo lường tỷ lệ xử lý thành công để đánh giá hiệu suất (SLA)."
    }
  ]
};

// ==========================================
// NHIỆM VỤ 4: GOOGLE DRIVE 7 THƯ MỤC & MẪU SOP
// ==========================================
export interface DriveFolderSpec {
  folderName: string;
  code: string;
  purpose: string;
  accessRole: string;
  typicalFiles: string[];
}

export const driveStructure: DriveFolderSpec[] = [
  {
    folderName: "01_Quy trình làm việc",
    code: "01",
    purpose: "Lưu trữ toàn bộ các quy trình vận hành tiêu chuẩn (SOP), hướng dẫn công việc và lưu đồ nghiệp vụ.",
    accessRole: "Chỉnh sửa: Lead & Kỹ thuật viên | Xem: Toàn bộ nhân sự",
    typicalFiles: ["SOP-01_Quy-trinh-xu-ly-khieu-nai.pdf", "SOP-02_Quy-trinh-duyet-bai-Facebook.pdf"]
  },
  {
    folderName: "02_Biểu mẫu và bảng theo dõi",
    code: "02",
    purpose: "Chứa các tệp Google Sheets trung tâm, đường dẫn liên kết Google Forms và template tài liệu gốc.",
    accessRole: "Chỉnh sửa: Kỹ thuật viên vận hành | Nhận xét: Trực ban | Xem: BQT",
    typicalFiles: ["[QL_SHOP] Danh_Sach_Shop_Master_2026.gsheet", "Form_Tiep_Nhan_Su_Co_2026.gform"]
  },
  {
    folderName: "03_Biên bản cuộc họp",
    code: "03",
    purpose: "Lưu trữ nội dung các cuộc họp giao ban đầu tuần, biên bản giải quyết sự cố nghiêm trọng và họp khẩn.",
    accessRole: "Xem & Chỉnh sửa: Thành viên nhóm vận hành",
    typicalFiles: ["2026-10-14_Bien-ban-hop-giao-ban-tuan-1.docx"]
  },
  {
    folderName: "04_Tài liệu pháp lý và quy chế",
    code: "04",
    purpose: "Lưu trữ thỏa thuận hợp tác đối tác shop, cam kết bảo mật Nghị định 13/2023/NĐ-CP và điều khoản cộng đồng.",
    accessRole: "Chỉ đọc đối với nhân sự, chỉ Trưởng dự án được sửa",
    typicalFiles: ["Quy-che-hoat-dong-cong-dong_v1.0.pdf", "Cam-ket-bao-ve-du-lieu-ca-nhan.pdf"]
  },
  {
    folderName: "05_Tài liệu tham khảo và công nghệ",
    code: "05",
    purpose: "Tài liệu kỹ thuật về các nền tảng Google Sites, Canva, mẹo xử lý lỗi và nghiên cứu công nghệ mới.",
    accessRole: "Toàn quyền truy cập cho Kỹ thuật viên",
    typicalFiles: ["Tai-lieu-huong-dan-Google-Sites-2026.pdf", "Bang-ma-mau-nhan-dien-thuong-hieu.png"]
  },
  {
    folderName: "06_Báo cáo và thống kê",
    code: "06",
    purpose: "Báo cáo tổng kết tuần, bảng số liệu tăng trưởng thành viên, tỷ lệ xử lý khiếu nại (SLA) định kỳ.",
    accessRole: "Xem: Toàn bộ nhân sự và Lãnh đạo",
    typicalFiles: ["2026-W42_Bao-cao-van-hanh-tuan-1.xlsx", "Bao-cao-kpi-su-co-thang-10.pdf"]
  },
  {
    folderName: "07_Tài liệu lưu trữ",
    code: "07",
    purpose: "Kho lưu trữ (Archive) các hồ sơ sự cố đã đóng dứt điểm, tài liệu phiên bản cũ đã hết hiệu lực.",
    accessRole: "Chỉ đọc, hạn chế phân quyền để tránh xóa nhầm",
    typicalFiles: ["2026-Q3_Ho-so-luu-tru-shop-da-nghi.zip", "Ban-sao-luu-Google-Sheets-2026-10-14.xlsx"]
  }
];

export const fileNamingConvention = {
  syntax: `YYYY-MM-DD_Ten-tai-lieu-khong-dau_vX.X.dinhdang`,
  rules: [
    "YYYY-MM-DD: Năm - Tháng - Ngày ban hành hoặc cập nhật (ví dụ: 2026-10-14). Giúp máy tính tự động sắp xếp theo thứ tự thời gian chuẩn.",
    "Ten-tai-lieu: Viết hoa chữ cái đầu mỗi từ, nối bằng dấu gạch ngang '-', không sử dụng dấu tiếng Việt và không có khoảng trắng.",
    "vX.X: Phiên bản tài liệu. Thay đổi lớn tăng số trước (v1.0 -> v2.0); sửa lỗi nhỏ hoặc cập nhật phụ tăng số sau (v1.0 -> v1.1).",
    "Ví dụ thực tế chuẩn mực: `2026-10-14_Quy-trinh-tiep-nhan-va-xu-ly-khieu-nai_v1.0.pdf`"
  ]
};

export const standardSOP01 = `================================================================================
CỘNG ĐỒNG GIAO THƯƠNG & QUẢN LÝ ĐỐI TÁC SHOP VĂN PHÒNG 2026
QUY TRÌNH VẬN HÀNH TIÊU CHUẨN (STANDARD OPERATING PROCEDURE)
================================================================================
MÃ QUY TRÌNH: SOP-01 | PHIÊN BẢN: 1.0 | NGÀY BAN HÀNH: 14/10/2026
NGƯỜI BIÊN SOẠN: Thành viên 2 (Chuyên viên Kỹ thuật & Vận hành)
NGƯỜI PHÊ DUYỆT: Trưởng Dự Án
PHẠM VI ÁP DỤNG: Toàn bộ đội ngũ Trực ca, CSKH, Kỹ thuật viên và Quản trị viên
TIÊU ĐỀ: QUY TRÌNH 5 BƯỚC TIẾP NHẬN, PHÂN LOẠI & XỬ LÝ KHIẾU NẠI SỰ CỐ
================================================================================

1. MỤC TIÊU:
Quy chuẩn hóa toàn bộ các bước xử lý từ khi nhận phản ánh đến khi giải quyết dứt điểm sự cố, bảo vệ quyền lợi người tiêu dùng và giữ vững uy tín của các shop đối tác.

2. CÁC MỐC THỜI GIAN CAM KẾT (SLA):
- Mức Khẩn cấp: Phản hồi bước đầu trong vòng 02 giờ. Giải quyết dứt điểm trong 12 giờ.
- Mức Cao: Phản hồi trong vòng 04 giờ. Giải quyết dứt điểm trong 24 giờ.
- Mức Trung bình & Thấp: Phản hồi trong 08 giờ. Giải quyết trong 48 giờ.

3. QUY TRÌNH 5 BƯỚC THỰC HIỆN CHI TIẾT:

BƯỚC 1: TIẾP NHẬN THÔNG TIN (Hệ thống tự động & Trực ca)
- Dữ liệu sự cố đổ về tự động từ Google Forms sang Trang 3 "SỰ CỐ VÀ KHIẾU NẠI" trên Google Sheets.
- Kỹ thuật viên kiểm tra mã sự cố tự động (SC-xxx), thời điểm tiếp nhận và xác thực thông tin người gửi.

BƯỚC 2: PHÂN LOẠI & ĐÁNH GIÁ MỨC ĐỘ ƯU TIÊN (Thời gian: 15 - 30 phút)
- Rà soát Cột 'Mức độ ưu tiên' và 'Loại đối tượng':
  + Nếu là Khẩn cấp (dấu hiệu lừa đảo, hàng nguy hại sức khỏe): Nhắn tin báo động ngay cho Trưởng Dự Án qua Zalo/Hotline, tạm khóa quyền đăng bài của shop liên quan.
  + Nếu là Trung bình/Thấp: Phân bổ nhân sự phụ trách tại Cột 'Người phụ trách'.
- Cập nhật Hạn xử lý (Deadline) tương ứng vào Cột M.

BƯỚC 3: XỬ LÝ & ĐỐI SOÁT THỰC TẾ (Thời gian: Theo SLA)
- Liên hệ với Chủ shop đối tác liên quan qua Hotline/Zalo nội bộ:
  + Cung cấp nội dung phản ánh và ảnh bằng chứng của khách.
  + Lắng nghe giải trình từ shop, kiểm tra camera đóng gói hoặc phiếu gửi hàng.
- Thống nhất phương án xử lý theo nguyên tắc:
  + Lỗi do shop (hàng hỏng, giao sai size, chậm đơn): Shop bắt buộc đổi mới 1-1 miễn phí hoặc hoàn trả 100% tiền trong 24h.
  + Lỗi do đơn vị vận chuyển: BQT hỗ trợ giục bưu cục phát hỏa tốc.

BƯỚC 4: THÔNG BÁO KẾT QUẢ CHO KHÁCH HÀNG (Thời gian: Ngay sau khi có phương án)
- Gọi điện hoặc gửi tin nhắn riêng cho người phản ánh:
  + Trình bày rõ nguyên nhân sự cố với thái độ cầu thị, tôn trọng.
  + Thông báo phương án bồi thường / đổi hàng đã được BQT giám sát.
  + Xin xác nhận mức độ hài lòng của khách hàng.

BƯỚC 5: ĐÓNG HỒ SƠ & LƯU TRỮ TÀI LIỆU (Thời gian: Cuối ca trực)
- Điền 'Kết quả xử lý' vào Cột N trên Google Sheets.
- Chuyển trạng thái ticket thành 'Đã giải quyết' (hoặc 'Đã đóng').
- Nếu có biên bản làm việc hoặc hình ảnh đối soát, lưu tệp vào thư mục Drive '07_Tai_lieu_luu_tru' với mã tương ứng SC-xxx.

4. NGUYÊN TẮC BẢO MẬT & KỶ LUẬT:
- Tuyệt đối không cung cấp số điện thoại hoặc địa chỉ nhà riêng của người khiếu nại cho chủ shop khi chưa có sự đồng ý (tránh trường hợp shop tới đe dọa khách).
- Không tự ý đóng ticket khi chưa có xác nhận từ khách hàng.
================================================================================`;

// ==========================================
// NHIỆM VỤ 5: CHECKLIST BẢO MẬT 11 HẠNG MỤC
// ==========================================
export interface SecurityCheckItem {
  id: number;
  item: string;
  riskLevel: "Cao" | "Nghiêm trọng" | "Trung bình";
  inspectionMethod: string;
  mitigationSolution: string;
  assignee: string;
  status: "Đạt" | "Đang xử lý" | "Chưa kiểm tra";
}

export const securityAuditChecklist: SecurityCheckItem[] = [
  {
    id: 1,
    item: "Xác định chủ sở hữu (Owner) từng công cụ và tài liệu",
    riskLevel: "Nghiêm trọng",
    inspectionMethod: "Kiểm tra quyền Owner trên Google Drive, Google Sheets và quyền Quản trị viên chính trên Facebook Group.",
    mitigationSolution: "Bắt buộc chuyển toàn bộ quyền Sở hữu cho 01 tài khoản Google dùng chung của dự án (ví dụ: bqt.hub2026@gmail.com). Tuyệt đối không để tài khoản cá nhân đứng tên sở hữu duy nhất.",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 2,
    item: "Phân quyền xem, bình luận, chỉnh sửa theo vai trò (RACI)",
    riskLevel: "Cao",
    inspectionMethod: "Vào Cài đặt chia sẻ Google Drive/Sheets, kiểm tra danh sách email được cấp quyền Editor.",
    mitigationSolution: "Chỉ cấp quyền Chỉnh sửa (Editor) cho 2 kỹ thuật viên chính. Nhân sự trực ban cấp quyền Nhận xét (Commenter). Cộng tác viên cấp quyền Xem (Viewer).",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 3,
    item: "Hạn chế quyền mời thành viên mới, xóa file và sửa cấu hình",
    riskLevel: "Cao",
    inspectionMethod: "Trong cài đặt chia sẻ Drive, bấm biểu tượng Bánh răng (Settings).",
    mitigationSolution: "Bỏ tích ô 'Người chỉnh sửa có thể thay đổi quyền và chia sẻ'. Bỏ tích ô 'Người xem và người nhận xét có thể tải xuống, in và sao chép'.",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 4,
    item: "Kiểm tra và thu hồi liên kết chia sẻ công khai không cần thiết",
    riskLevel: "Nghiêm trọng",
    inspectionMethod: "Rà soát tính năng 'Bất kỳ ai có đường liên kết đều có thể chỉnh sửa' trên Google Sheets.",
    mitigationSolution: "TẮT chế độ công khai cho file Sheets nội bộ. Chỉ để chế độ 'Bị hạn chế' (chỉ những người được thêm mới mở được).",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 5,
    item: "Rà soát định kỳ danh sách tài khoản được cấp quyền",
    riskLevel: "Trung bình",
    inspectionMethod: "Kiểm tra danh sách thành viên quản trị viên/người kiểm duyệt trên Facebook và Drive vào thứ Sáu hàng tuần.",
    mitigationSolution: "Xóa ngay lập tức các tài khoản email lạ hoặc tài khoản clone không rõ danh tính.",
    assignee: "Trưởng Dự Án",
    status: "Đang xử lý"
  },
  {
    id: 6,
    item: "Quy trình thu hồi quyền truy cập khi thành viên rời dự án",
    riskLevel: "Cao",
    inspectionMethod: "Kiểm tra sổ theo dõi bàn giao nhân sự khi có người nghỉ việc hoặc chuyển công tác.",
    mitigationSolution: "Trong vòng 60 phút sau khi có quyết định rút lui: Xóa tài khoản khỏi Google Drive, thu hồi quyền Moderator trên Facebook, đổi mật khẩu tài khoản dùng chung và đăng xuất tất cả thiết bị.",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 7,
    item: "Không sử dụng chung mật khẩu cá nhân giữa các thành viên",
    riskLevel: "Nghiêm trọng",
    inspectionMethod: "Khảo sát phỏng vấn các thành viên trong đội ngũ vận hành.",
    mitigationSolution: "Cấm chia sẻ mật khẩu qua tin nhắn Messenger/Zalo không mã hóa. Tài khoản dùng chung sử dụng phần mềm quản lý mật khẩu (Bitwarden) hoặc bàn giao trực tiếp.",
    assignee: "Toàn bộ thành viên",
    status: "Đạt"
  },
  {
    id: 8,
    item: "Bật xác thực hai bước (2FA) cho toàn bộ tài khoản quan trọng",
    riskLevel: "Nghiêm trọng",
    inspectionMethod: "Kiểm tra trạng thái bảo mật của tài khoản Google quản trị và tài khoản Facebook Admin.",
    mitigationSolution: "Bắt buộc 100% kích hoạt bảo mật 2 lớp qua Google Authenticator hoặc tin nhắn SMS. Lưu 10 mã dự phòng (Backup Codes) vào két sắt bảo mật.",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 9,
    item: "Hạn chế lưu trữ dữ liệu cá nhân nhạy cảm (PII Shield)",
    riskLevel: "Cao",
    inspectionMethod: "Quét các cột dữ liệu trên Google Sheets xem có lưu số thẻ ngân hàng, CCCD, mật khẩu khách hàng không.",
    mitigationSolution: "Tuyệt đối không lưu CCCD hay mã OTP ngân hàng. Số điện thoại và địa chỉ nhà khách khi hiển thị báo cáo phải được che mờ (ví dụ: 0912***678).",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  },
  {
    id: 10,
    item: "Quy trình ứng phó khẩn cấp khi tài khoản bị xâm nhập hoặc lộ dữ liệu",
    riskLevel: "Nghiêm trọng",
    inspectionMethod: "Kiểm tra sự tồn tại của kịch bản ứng phó sự cố (Incident Response Playbook).",
    mitigationSolution: "Bước 1: Đổi mật khẩu ngay lập tức và bấm 'Đăng xuất khỏi tất cả phiên đăng nhập'. Bước 2: Tạm ẩn nhóm Facebook để ngăn kẻ xấu phát tán link bẩn. Bước 3: Đổi link biểu mẫu tiếp nhận phản ánh. Bước 4: Thông báo chính thức cho các shop đối tác.",
    assignee: "Trưởng Dự Án & Kỹ thuật",
    status: "Đạt"
  },
  {
    id: 11,
    item: "Kiểm tra khả năng khôi phục dữ liệu và lưu trữ bản sao ngoại tuyến",
    riskLevel: "Cao",
    inspectionMethod: "Thử nghiệm khôi phục một file bị xóa giả định từ Thùng rác (Trash) và từ bản sao lưu Excel.",
    mitigationSolution: "Tải file Excel (.xlsx) danh sách shop và sự cố vào 17h00 thứ Sáu hàng tuần, lưu trữ vào USB ngoại tuyến và thư mục sao lưu riêng.",
    assignee: "Kỹ thuật & Vận hành",
    status: "Đạt"
  }
];

// ==========================================
// NHIỆM VỤ 6: BÁO CÁO 4 NHÓM CÔNG NGHỆ & LỘ TRÌNH
// ==========================================
export const techStackComparison = {
  group1_Websites: [
    {
      name: "Google Sites",
      url: "https://sites.google.com",
      costFreeTier: "100% Miễn phí trọn đời (dùng chung 15GB Drive)",
      limits: "Ít template nghệ thuật, không có giỏ hàng e-commerce",
      pros: "KHÔNG CÓ QUẢNG CÁO, nhúng trực tiếp Google Sheets và Forms, gắn tên miền riêng MIỄN PHÍ",
      cons: "Khả năng tùy biến giao diện cơ bản",
      easeOfUse: "5/5 (Kéo thả như soạn thảo Word)",
      integrationCapability: "Xuất sắc 100% với hệ sinh thái Google",
      scalability: "Tốt cho cổng thông tin và danh bạ shop",
      verdict: "PHƯƠNG ÁN ƯU TIÊN SỐ 1 CHO GIAI ĐOẠN ĐẦU"
    },
    {
      name: "Canva Websites",
      url: "https://www.canva.com",
      costFreeTier: "Miễn phí xuất bản tối đa 5 website",
      limits: "Có dòng chữ nhỏ 'Designed with Canva' ở chân trang, gắn tên miền riêng cần gói Pro",
      pros: "Giao diện thẩm mỹ cực đỉnh, kéo thả đồ họa siêu đẹp, tối ưu mobile xuất sắc",
      cons: "Không đồng bộ tự động dữ liệu lớn dạng Sheets",
      easeOfUse: "5/5 (Trực quan tuyệt đối)",
      integrationCapability: "Trung bình (chỉ nhúng link/form)",
      scalability: "Phù hợp Landing page quảng bá sự kiện",
      verdict: "PHƯƠNG ÁN DỰ PHÒNG CHO CHIẾN DỊCH HÌNH ẢNH"
    },
    {
      name: "WordPress.com",
      url: "https://wordpress.com",
      costFreeTier: "Miễn phí 1GB dung lượng",
      limits: "Dính banner quảng cáo của WordPress, không cài được plugin WooCommerce ở gói free",
      pros: "Tối ưu hóa SEO bài viết tin tức và blog chuyên sâu",
      cons: "Không hỗ trợ tên miền riêng miễn phí",
      easeOfUse: "3/5 (Cần làm quen với Gutenberg)",
      integrationCapability: "Khá",
      scalability: "Rất cao nếu nâng cấp lên WordPress.org tự host",
      verdict: "Dành cho giai đoạn phát triển tạp chí tin tức sau này"
    },
    {
      name: "Wix.com",
      url: "https://www.wix.com",
      costFreeTier: "Miễn phí 500MB lưu trữ và 500MB băng thông",
      limits: "Banner quảng cáo Wix cố định ở đầu trang, giới hạn băng thông",
      pros: "Kéo thả tự do mọi tọa độ pixel, có tính năng chatbox trực tiếp",
      cons: "Trang web tải hơi nặng, không đổi được template sau khi chọn",
      easeOfUse: "4/5",
      integrationCapability: "Tốt với kho App Market",
      scalability: "Trung bình",
      verdict: "Phù hợp nếu cần thiết kế trang giới thiệu công ty độc đáo"
    },
    {
      name: "GitHub Pages",
      url: "https://pages.github.com",
      costFreeTier: "100% Miễn phí vĩnh viễn, băng thông 100GB/tháng",
      limits: "Chỉ hỗ trợ web tĩnh, bắt buộc phải biết lập trình HTML/CSS",
      pros: "Tốc độ bàn thờ, bảo mật tuyệt đối, không quảng cáo, gắn tên miền riêng miễn phí kèm SSL",
      cons: "Không có giao diện kéo thả cho người không biết code",
      easeOfUse: "2/5 (Đòi hỏi kỹ năng IT)",
      integrationCapability: "Cao nếu dùng API",
      scalability: "Xuất sắc",
      verdict: "Dành cho tài liệu kỹ thuật nâng cao"
    }
  ],
  group2_TaskManagement: [
    {
      name: "Trello",
      url: "https://trello.com",
      costFreeTier: "Miễn phí tối đa 10 bảng (Workspace boards), không giới hạn thẻ việc",
      pros: "Giao diện Kanban trực quan (To Do -> Doing -> Done), dễ phân công nhân sự, kéo thả mượt mà trên điện thoại.",
      cons: "Báo cáo tiến độ ở mức cơ bản ở gói miễn phí.",
      verdict: "KHUYÊN DÙNG ĐỂ THEO DÕI TIẾN ĐỘ 7 NGÀY CỦA NHÓM."
    },
    {
      name: "Notion",
      url: "https://notion.so",
      costFreeTier: "Miễn phí cho cá nhân và nhóm nhỏ",
      pros: "Tất cả trong một (vừa ghi chép SOP, vừa quản lý bảng kanban, cơ sở dữ liệu liên kết).",
      cons: "Độ dốc học tập cao, thao tác trên điện thoại đôi khi hơi chậm.",
      verdict: "Phù hợp để làm kho lưu trữ tri thức (Knowledge Base) dài hạn."
    }
  ],
  group3_Automation: [
    {
      name: "Google Apps Script (Tích hợp sẵn trong Google Workspace)",
      url: "https://script.google.com",
      costFreeTier: "100% Miễn phí, không tốn thêm bất kỳ chi phí nào",
      pros: "Tự động gửi email thông báo khi có phản hồi form mới, tự động khóa dòng dữ liệu, chạy trực tiếp trên máy chủ Google.",
      cons: "Cần hiểu logic lập trình JavaScript cơ bản.",
      verdict: "GIẢI PHÁP TỰ ĐỘNG HÓA SỐ 1 CHO DỰ ÁN 0 ĐỒNG."
    },
    {
      name: "Make (Integromat) / Zapier",
      url: "https://www.make.com",
      costFreeTier: "Make miễn phí 1.000 tác vụ/tháng; Zapier miễn phí 100 tác vụ/tháng",
      pros: "Kéo thả kết nối trực tiếp Facebook Group, Google Sheets và Telegram mà không cần viết code.",
      cons: "Giới hạn số lượng tác vụ hàng tháng ở gói free.",
      verdict: "Phương án dự phòng khi cần kết nối đa nền tảng."
    }
  ],
  group4_ScalingRoadmap: {
    phase1: "Giai đoạn 1 (Tuần 1 - Tháng 1: 0 - 50 Shop): Sử dụng Google Sites + Google Forms + Google Sheets 3 Tab + Trello + Nhóm Facebook Riêng tư. Chi phí: 0 VNĐ.",
    phase2: "Giai đoạn 2 (Tháng 2 - Tháng 6: 50 - 200 Shop): Mua 1 tên miền riêng (.vn hoặc .com giá khoảng 250k - 500k/năm) gắn vào Google Sites; cài đặt Apps Script tự động gửi mã vé Ticket qua email.",
    phase3: "Giai đoạn 3 (Sau 6 tháng: Trên 200 Shop & Cần giỏ hàng thanh toán): Chuyển đổi sang website độc lập sử dụng mã nguồn mở WordPress.org trên hosting có trả phí, tích hợp cổng thanh toán VNPay/Momo tự động."
  }
};

// ==========================================
// KẾ HOẠCH TRIỂN KHAI 7 NGÀY (THÀNH VIÊN 2)
// ==========================================
export interface TechOpsDailyPlan {
  day: number;
  title: string;
  tasks: string[];
  operationalSteps: string[];
  deliverable: string;
  owner: string;
  acceptanceCriteria: string;
  risksAndMitigation: string;
}

export const techOpsSevenDayRoadmap: TechOpsDailyPlan[] = [
  {
    day: 1,
    title: "Ngày 1: Xác định nhu cầu, thống nhất tên dự án, vai trò & cấu trúc vận hành",
    tasks: [
      "Họp thống nhất tên dự án, mục tiêu và phạm vi phục vụ.",
      "Thành lập tài khoản Google dùng chung và phân chia 4 vai trò nhân sự.",
      "Phác thảo sơ đồ luồng dữ liệu (Forms -> Sheets -> Drive -> Facebook)."
    ],
    operationalSteps: [
      "Khởi tạo tài khoản Google `bqt.quanlyshop2026@gmail.com` có bảo mật 2FA.",
      "Ghi nhận thông tin dự án vào tài liệu khởi tạo.",
      "Tạo bảng theo dõi Trello và mời 4 thành viên tham gia."
    ],
    deliverable: "Tài liệu hồ sơ dự án & Tài khoản quản trị chung kích hoạt 2FA.",
    owner: "Trưởng dự án & Kỹ thuật viên (Thành viên 2)",
    acceptanceCriteria: "Tài khoản Google đăng nhập trơn tru trên cả 2 máy tính quản trị và lưu mã dự phòng.",
    risksAndMitigation: "Rủi ro mất quyền truy cập tài khoản: Lưu ngay 10 mã backup codes vào sổ tay ngoại tuyến."
  },
  {
    day: 2,
    title: "Ngày 2: Thiết lập nhóm Facebook, nội quy và quyền thành viên",
    tasks: [
      "Khởi tạo Nhóm Facebook theo phương án Riêng tư + Hiển thị.",
      "Tải ảnh bìa chuẩn 1640x856 px và ảnh đại diện logo.",
      "Cập nhật mô tả, 7 quy tắc nhóm, 3 câu hỏi sàng lọc và bật tính năng duyệt bài.",
      "Đăng 4 bài viết ghim (Giới thiệu, Nội quy, Hướng dẫn, Cổng sự cố)."
    ],
    operationalSteps: [
      "Tạo nhóm trên Facebook và đặt tên theo cấu trúc chuẩn.",
      "Cấu hình tính năng Hỗ trợ quản trị viên (Admin Assist) tự động chặn nick mới lập.",
      "Bổ nhiệm Người kiểm duyệt cho nhân sự trực ca."
    ],
    deliverable: "Nhóm Facebook hoạt động với đầy đủ nội quy và 4 bài ghim.",
    owner: "Kỹ thuật viên & Chuyên viên nội dung",
    acceptanceCriteria: "Thử lấy 1 nick phụ gửi yêu cầu tham gia: Bắt buộc hiện 3 câu hỏi và bài viết không đăng trực tiếp được khi chưa duyệt.",
    risksAndMitigation: "Rủi ro tài khoản Admin bị checkpoint: Bổ nhiệm tối thiểu 2 tài khoản quản trị viên độc lập."
  },
  {
    day: 3,
    title: "Ngày 3: Xây dựng Google Forms và kết nối Google Sheets",
    tasks: [
      "Tạo biểu mẫu Google Forms tiếp nhận khiếu nại gồm đúng 11 trường thông tin.",
      "Cấu hình xác thực regex cho trường SĐT/Email.",
      "Tắt giới hạn trong tổ chức, bật thông báo email cho câu trả lời mới.",
      "Liên kết tự động biểu mẫu với Google Sheets."
    ],
    operationalSteps: [
      "Vào forms.google.com tạo form mới và nhập đầy đủ 11 câu hỏi theo bảng thiết kế.",
      "Chuyển sang tab Cài đặt tắt hạn chế nội bộ.",
      "Nhấn biểu tượng Google Sheets để tạo bảng tính liên kết."
    ],
    deliverable: "Link Google Forms tiếp nhận khiếu nại 11 trường + Luồng ghi nhận Sheets tự động.",
    owner: "Kỹ thuật viên (Thành viên 2)",
    acceptanceCriteria: "Thử nộp 1 biểu mẫu test: Dữ liệu xuất hiện trên Google Sheets trong vòng 2 giây không bị lỗi font.",
    risksAndMitigation: "Rủi ro tính năng Upload file bắt buộc đăng nhập Gmail: Ghi chú cảnh báo rõ ràng cho người dùng ở phần mô tả."
  },
  {
    day: 4,
    title: "Ngày 4: Hoàn thiện ba trang quản lý, công thức, bộ lọc và định dạng",
    tasks: [
      "Thiết kế Trang 1 (NGƯỜI BÁN - 9 cột), Trang 2 (SẢN PHẨM - 10 cột), Trang 3 (SỰ CỐ VÀ KHIẾU NẠI - 15 cột).",
      "Cài đặt công thức sinh mã bất biến (NB-xxx, SP-xxx, SC-xxx).",
      "Cài đặt công thức đếm KPI và đếm sự cố quá hạn trên Dashboard.",
      "Thiết lập Dropdown trạng thái và Định dạng có điều kiện (tô đỏ sự cố quá hạn)."
    ],
    operationalSteps: [
      "Tạo 3 tab trên file Google Sheets gốc.",
      "Nhập tiêu đề, cố định dòng 1, tạo bộ lọc.",
      "Cài đặt Conditional Formatting: Công thức `=AND($J2<>'Đã giải quyết', $J2<>'Đã đóng', $M2<TODAY(), $M2<>'')` tô màu đỏ nhạt toàn dòng.",
      "Khóa dải ô công thức cột A."
    ],
    deliverable: "Bảng tính Google Sheets 3 trang hoàn thiện công thức và định dạng thông minh.",
    owner: "Kỹ thuật viên (Thành viên 2)",
    acceptanceCriteria: "Sắp xếp Sort thử bảng theo cột Tên: Mã shop và mã sản phẩm không bị thay đổi.",
    risksAndMitigation: "Rủi ro công thức mảng bị đè dữ liệu: Khóa dải ô và chỉ cấp quyền Editor cho người hiểu kỹ thuật."
  },
  {
    day: 5,
    title: "Ngày 5: Thiết lập Google Drive, SOP và quy tắc quản lý tài liệu",
    tasks: [
      "Tạo cây thư mục 7 thư mục chuẩn mực từ 01_ đến 07_ trên Google Drive.",
      "Ban hành quy tắc đặt tên tệp chuẩn `YYYY-MM-DD_Ten-tai-lieu_vX.X`.",
      "Soạn thảo và ban hành mẫu SOP-01: Quy trình xử lý khiếu nại 5 bước.",
      "Phân quyền thư mục theo nguyên tắc đặc quyền tối thiểu."
    ],
    operationalSteps: [
      "Tạo thư mục gốc `[Tên dự án] — Tài liệu vận hành`.",
      "Tạo lần lượt 7 thư mục con.",
      "Tải tài liệu mẫu SOP-01 dạng PDF và Word vào thư mục 01_Quy trinh lam viec.",
      "Cấu hình quyền chia sẻ cho từng thư mục."
    ],
    deliverable: "Cây thư mục Google Drive 7 mục + Văn bản SOP-01 chuẩn mực.",
    owner: "Kỹ thuật viên (Thành viên 2)",
    acceptanceCriteria: "Nhân viên trực ban đăng nhập tài khoản của họ chỉ có thể xem/nhận xét, không thể xóa thư mục gốc.",
    risksAndMitigation: "Rủi ro xóa nhầm tài liệu: Kiểm tra tính năng khôi phục trong Thùng rác (30 ngày)."
  },
  {
    day: 6,
    title: "Ngày 6: Kiểm tra quyền truy cập, bảo mật, dữ liệu mẫu và diễn tập sự cố",
    tasks: [
      "Thực hiện rà soát 11 tiêu chí bảo mật theo bảng Checklist Audit.",
      "Nhập 5 dòng dữ liệu mẫu cho mỗi trang tính để kiểm tra độ ổn định.",
      "Tổ chức diễn tập xử lý 1 sự cố giả định mức độ Khẩn cấp theo đúng SOP-01.",
      "Kiểm tra tính năng sao lưu dữ liệu ngoại tuyến."
    ],
    operationalSteps: [
      "Kiểm tra quyền truy cập của tất cả email liên kết.",
      "Giả lập tình huống khách phản ánh shop giao hàng hỏng: Trực ban tiếp nhận -> Nhắn tin BQT -> Đối soát shop -> Cập nhật kết quả -> Đóng ticket.",
      "Xuất file Excel `.xlsx` lưu vào máy tính."
    ],
    deliverable: "Báo cáo kiểm toán bảo mật 11 hạng mục + Dữ liệu mẫu đã kiểm thử.",
    owner: "Kỹ thuật viên & Trưởng dự án",
    acceptanceCriteria: "Quy trình diễn tập giải quyết sự cố hoàn thành trong vòng dưới 30 phút theo đúng form mẫu.",
    risksAndMitigation: "Rủi ro nhân viên quên quy trình: In bảng tóm tắt SOP dán tại góc làm việc văn phòng."
  },
  {
    day: 7,
    title: "Ngày 7: Nghiên cứu nền tảng website, tổng hợp kết quả, bàn giao & nghiệm thu",
    tasks: [
      "Hoàn thiện báo cáo nghiên cứu 4 nhóm công nghệ (Website, Task, Automation, Scale).",
      "Xây dựng trang Google Sites nguyên mẫu tích hợp Sheets và Forms tiếp nhận khiếu nại.",
      "Tổng hợp biên bản bàn giao và bảng checklist nghiệm thu cuối tuần.",
      "Họp tổng kết và chính thức chuyển hệ thống sang trạng thái sẵn sàng vận hành."
    ],
    operationalSteps: [
      "Tạo trang Google Sites nhúng danh bạ người bán và form khiếu nại.",
      "Kiểm tra hiển thị web trên máy tính và mobile.",
      "Rà soát 13 hạng mục trong bảng nghiệm thu.",
      "Bàn giao tài liệu hướng dẫn cho các thành viên."
    ],
    deliverable: "Báo cáo công nghệ + Trang web Google Sites demo + Bảng nghiệm thu hoàn tất 100%.",
    owner: "Kỹ thuật viên (Thành viên 2) & Trưởng dự án",
    acceptanceCriteria: "Tất cả 13 tiêu chí trong Bảng nghiệm thu cuối tuần được đánh dấu 'Đạt' và có bằng chứng xác thực.",
    risksAndMitigation: "Hệ thống phát sinh lỗi sau bàn giao: Duy trì hotline hỗ trợ kỹ thuật trực tiếp của Thành viên 2 trong tuần đầu tiên."
  }
];

// ==========================================
// BẢNG NGHIỆM THU CUỐI TUẦN (13 TIÊU CHÍ)
// ==========================================
export interface AcceptanceCheckItem {
  id: number;
  item: string;
  assignee: string;
  deadline: string;
  status: "Đạt" | "Đang xử lý" | "Chờ kiểm tra";
  evidence: string;
  notes: string;
}

export const finalAcceptanceChecklist: AcceptanceCheckItem[] = [
  {
    id: 1,
    item: "Nhóm Facebook đã được thiết lập và kiểm tra quyền riêng tư (Private + Visible)",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 2",
    status: "Đạt",
    evidence: "Ảnh chụp màn hình Cài đặt nhóm Facebook hiển thị quyền Riêng tư, 3 câu hỏi thành viên hoạt động.",
    notes: "Đã bật tính năng phê duyệt bài viết trước khi hiển thị."
  },
  {
    id: 2,
    item: "Nội quy và bài viết hướng dẫn đã sẵn sàng (Đủ 4 bài ghim)",
    assignee: "Chuyên viên nội dung",
    deadline: "Ngày 2",
    status: "Đạt",
    evidence: "4 bài viết hiển thị trên mục Đáng chú ý (Featured) của nhóm.",
    notes: "Đã bao gồm bài giới thiệu dự án, nội quy 7 điều, hướng dẫn mua sắm và thông tin BQT."
  },
  {
    id: 3,
    item: "Google Forms tiếp nhận khiếu nại đã cấu hình đủ 11 trường và thử gửi thành công",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 3",
    status: "Đạt",
    evidence: "Link form công khai, đã gửi thử nghiệm thành công 3 phản hồi mẫu.",
    notes: "Đã cấu hình regex cho SĐT/Email và tùy biến thư cảm ơn."
  },
  {
    id: 4,
    item: "Dữ liệu Forms đã được ghi nhận tự động vào Google Sheets",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 3",
    status: "Đạt",
    evidence: "Tab phản hồi biểu mẫu trên Sheets tự động cập nhật dòng mới sau khi bấm Gửi.",
    notes: "Đã bật thông báo qua email cho kỹ thuật viên trực ca."
  },
  {
    id: 5,
    item: "Ba trang quản lý (Người bán, Sản phẩm, Sự cố) đã hoàn thiện đúng danh sách cột",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 4",
    status: "Đạt",
    evidence: "File Sheets có 3 tab chính: NGƯỜI BÁN (9 cột), SẢN PHẨM (10 cột), SỰ CỐ (15 cột).",
    notes: "Đã có đủ dữ liệu giả định kiểm thử cho từng tab."
  },
  {
    id: 6,
    item: "Công thức và bộ lọc đã được kiểm thử (Mã bất biến, đếm sự cố quá hạn)",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 4",
    status: "Đạt",
    evidence: "Thực hiện sắp xếp Sort dữ liệu: Mã NB-xxx và SP-xxx không bị đảo; Dashboard nhảy số đếm chính xác.",
    notes: "Định dạng có điều kiện tự động tô màu đỏ cảnh báo sự cố quá hạn."
  },
  {
    id: 7,
    item: "Google Drive đã có cấu trúc 7 thư mục thống nhất từ 01_ đến 07_",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 5",
    status: "Đạt",
    evidence: "Ảnh chụp cây thư mục trên Drive của tài khoản quản trị chung.",
    notes: "Thư mục gốc đặt tên: [Tên dự án] — Tài liệu vận hành."
  },
  {
    id: 8,
    item: "SOP và quy tắc đặt tên tài liệu đã hoàn thành (Mẫu SOP-01 ban hành)",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 5",
    status: "Đạt",
    evidence: "File `2026-10-14_SOP-01_Quy-trinh-xu-ly-khieu-nai_v1.0.pdf` lưu tại thư mục 01_Quy trinh lam viec.",
    notes: "Quy chuẩn đặt tên YYYY-MM-DD_Ten-file_vX.X đã được phổ biến cho đội ngũ."
  },
  {
    id: 9,
    item: "Quyền truy cập tài liệu và phân quyền RACI đã được rà soát",
    assignee: "Trưởng dự án",
    deadline: "Ngày 6",
    status: "Đạt",
    evidence: "Danh sách quyền trên Google Drive không có email ngoài tổ chức được cấp Editor.",
    notes: "Đã tắt tính năng cho phép Viewer tải xuống và sao chép."
  },
  {
    id: 10,
    item: "Các rủi ro bảo mật quan trọng (2FA, thu hồi link, PII) đã được xử lý",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 6",
    status: "Đạt",
    evidence: "Bảng checklist bảo mật 11 hạng mục đạt 100% tiêu chí.",
    notes: "Đã có kịch bản ứng phó sự cố khi tài khoản bị xâm nhập."
  },
  {
    id: 11,
    item: "Báo cáo so sánh nền tảng công nghệ (Website, Task, Automation) đã hoàn thành",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 7",
    status: "Đạt",
    evidence: "Bảng so sánh 5 nền tảng web và đề xuất giải pháp Google Sites + Trello cho giai đoạn đầu.",
    notes: "Đã có lộ trình nâng cấp 3 giai đoạn rõ ràng."
  },
  {
    id: 12,
    item: "Hướng dẫn sử dụng và bàn giao đã được chuẩn bị đầy đủ",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 7",
    status: "Đạt",
    evidence: "Cẩm nang điện tử tích hợp trên ứng dụng web, có nút sao chép 1-click cho mọi biểu mẫu và công thức.",
    notes: "Đã bàn giao tài khoản và phân quyền cho người kế nhiệm."
  },
  {
    id: 13,
    item: "Các liên kết công cụ (Forms, Sheets, Group, Drive, Sites) đã được kiểm tra trước khi chia sẻ",
    assignee: "Kỹ thuật & Vận hành",
    deadline: "Ngày 7",
    status: "Đạt",
    evidence: "Mở thử tất cả các đường link ở trình duyệt ẩn danh (Incognito): Không bị lỗi 404 hoặc lỗi bắt quyền truy cập.",
    notes: "Toàn bộ hệ thống sẵn sàng đi vào vận hành thực tế."
  }
];
