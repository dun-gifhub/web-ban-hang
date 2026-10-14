/**
 * Data and guidelines for Part I: Facebook Group Creation and Management System
 */

export interface GroupRule {
  id: number;
  title: string;
  summary: string;
  content: string;
  penalty: string;
}

export interface NamingOption {
  title: string;
  name: string;
  rationale: string;
  targetAudience: string;
  tagline: string;
}

export const namingOptions: NamingOption[] = [
  {
    title: "Phương án 1: Định dạng Địa phương + Ngành hàng (Khuyên dùng)",
    name: "Cộng Đồng Shop Tiêu Dùng & Dịch Vụ [Tên Khu Vực / Tỉnh Thành] - Kết Nối Kinh Doanh",
    rationale: "Tận dụng từ khóa tìm kiếm theo địa phương (SEO Facebook). Thành viên và người mua dễ dàng nhận biết phạm vi hoạt động, tạo sự tin cậy và gắn kết cộng đồng địa phương.",
    targetAudience: "Các shop bán buôn, bán lẻ, người tiêu dùng và nhà cung cấp dịch vụ trong cùng khu vực địa lý.",
    tagline: "Kết nối uy tín - Giao thương thần tốc - Hỗ trợ tận tâm"
  },
  {
    title: "Phương án 2: Định dạng Đối tác & Chuỗi liên kết (Chuyên nghiệp)",
    name: "Mạng Lưới Đối Tác Shop & Bán Lẻ Văn Phòng [Tên Cơ Quan / Doanh Nghiệp / Khu Đô Thị]",
    rationale: "Tạo cảm giác mạng lưới chính thống, mang tính liên kết chặt chẽ giữa ban quản lý và các shop thành viên. Rất phù hợp nếu nhóm nhằm phục vụ cán bộ văn phòng, cư dân hoặc đối tác nội bộ.",
    targetAudience: "Các chủ shop đối tác, cán bộ nhân viên văn phòng, các nhãn hàng liên kết.",
    tagline: "Đồng hành phát triển - Chia sẻ cơ hội - Quản lý chuẩn mực"
  },
  {
    title: "Phương án 3: Định dạng Tuyển chọn & Ưu đãi độc quyền (Thu hút tương tác)",
    name: "Phố Mua Sắm Chọn Lọc [Tên Khu Vực] - Gian Hàng Uy Tín & Deal Tốt Mỗi Ngày",
    rationale: "Tập trung vào yếu tố 'chọn lọc' và 'uy tín' để người mua yên tâm không gặp hàng giả/hàng kém chất lượng, đồng thời kích thích người mua tham gia nhờ từ khóa 'Deal tốt'.",
    targetAudience: "Khách hàng săn ưu đãi chất lượng, các shop có sản phẩm tốt và cam kết bảo hành.",
    tagline: "Shop chuẩn chọn lọc - Khuyến mãi có thật - Phục vụ chu đáo"
  }
];

export const groupDescription = `🌟 CHÀO MỪNG BẠN ĐẾN VỚI [TÊN NHÓM] 🌟

📌 I. MỤC TIÊU CỘNG ĐỒNG:
Nhóm được thành lập nhằm tạo cầu nối uy tín giữa các Shop kinh doanh chất lượng và quý Khách hàng / Thành viên. Tại đây, chúng tôi hỗ trợ các shop tiếp cận khách hàng tiềm năng, chia sẻ thông tin sản phẩm minh bạch và xây dựng môi trường mua sắm văn minh, an toàn.

🔰 II. NGUYÊN TẮC HOẠT ĐỘNG:
1. 100% Shop tham gia phải hoàn thành Biểu mẫu xác minh thông tin với Ban Quản Trị (BQT).
2. Tất cả bài đăng phải công khai giá cả, xuất xứ, hình ảnh thật và thông tin liên hệ rõ ràng.
3. Tuyệt đối không kinh doanh hàng cấm, hàng giả, hàng vi phạm pháp luật hoặc cạnh tranh không lành mạnh.
4. Mọi bài viết bán hàng cần được BQT kiểm duyệt trước khi hiển thị trên dòng thời gian.

📋 III. QUY ƯỚC HASHTAG CHUẨN ĐỂ DỄ TÌM KIẾM:
#GioiThieuShop - Dành cho bài giới thiệu gian hàng và dịch vụ mới
#SanPhamMoi - Dành cho sản phẩm/dịch vụ vừa cập nhật
#KhuyenMaiHot - Dành cho các chương trình ưu đãi, giảm giá có thời hạn
#ThongBaoBQT - Dành cho quy định và tin tức vận hành từ Ban Quản Trị

📞 IV. THÔNG TIN LIÊN HỆ BAN QUẢN TRỊ:
- Trực kỹ thuật & Hỗ trợ duyệt shop: [Tên người phụ trách - SĐT/Zalo: 09xx xxx xxx]
- Email tiếp nhận phản ánh: [email.quanly@domain.com]
- Link đăng ký thông tin shop: [Đường dẫn Google Forms của nhóm]

👉 Vui lòng đọc kỹ NỘI QUY NHÓM ở mục Đáng chú ý trước khi đăng bài!`;

export const groupRules: GroupRule[] = [
  {
    id: 1,
    title: "1. Tôn trọng văn hóa ứng xử & không kích động",
    summary: "Giao tiếp lịch sự, văn minh, không xúc phạm danh dự cá nhân hoặc tổ chức.",
    content: "Các thành viên và chủ shop phải sử dụng ngôn từ lịch sự, hòa nhã khi đăng bài cũng như trả lời bình luận. Nghiêm cấm mọi hành vi chửi bới, phân biệt vùng miền, kỳ thị, bôi nhọ đối thủ cạnh tranh hoặc kích động tranh cãi gây mất đoàn kết.",
    penalty: "Vi phạm lần 1: Nhắc nhở và xóa bình luận. Vi phạm lần 2: Tạm đình chỉ 7 ngày. Tái phạm: Chặn vĩnh viễn khỏi nhóm."
  },
  {
    id: 2,
    title: "2. Minh bạch thông tin sản phẩm & Công khai giá bán",
    summary: "Bắt buộc nêu rõ tên sản phẩm, giá bán cụ thể, xuất xứ và hình ảnh thực tế.",
    content: "Nghiêm cấm hành vi 'check inbox để biết giá' hoặc đăng giá ảo 1k/999k để câu view. Mỗi bài đăng bán hàng phải có đầy đủ: Tên sản phẩm/dịch vụ, tình trạng (mới/đã qua sử dụng), giá bán chính xác bằng VNĐ, địa chỉ shop và số điện thoại liên hệ.",
    penalty: "Từ chối duyệt bài ngay lập tức. Nếu lách kiểm duyệt sửa bài sau khi duyệt: Xóa bài và tước quyền đăng trong 14 ngày."
  },
  {
    id: 3,
    title: "3. Nghiêm cấm hàng cấm, hàng giả & vi phạm pháp luật",
    summary: "Tuân thủ tuyệt đối quy định pháp luật Việt Nam và tiêu chuẩn cộng đồng Facebook.",
    content: "Tuyệt đối không kinh doanh các mặt hàng bị cấm: vũ khí, pháo nổ, chất kích thích, thuốc lá điện tử, động vật hoang dã, hàng giả mạo nhãn hiệu đã được bảo hộ, thực phẩm không rõ nguồn gốc, cờ bạc, đa cấp trái phép và dịch vụ tài chính đen.",
    penalty: "Xóa bài ngay lập tức, chặn tài khoản vĩnh viễn khỏi nhóm và bàn giao thông tin cho cơ quan thẩm quyền nếu phát hiện dấu hiệu lừa đảo."
  },
  {
    id: 4,
    title: "4. Quy định tần suất đăng bài & Chống Spam",
    summary: "Mỗi shop đăng tối đa 1 - 2 bài/ngày, không spam nhiều bài giống nhau.",
    content: "Để đảm bảo dòng thời gian nhóm phong phú và không bị độc chiếm bởi một cá nhân, mỗi shop chỉ được duyệt tối đa 02 bài đăng/ngày. Nghiêm cấm dùng tool tự động đăng bài, copy-paste hàng loạt cùng một nội dung hoặc spam biểu tượng cảm xúc.",
    penalty: "Hủy duyệt các bài trùng lặp. Khóa tính năng đăng bài của shop trong 3 ngày."
  },
  {
    id: 5,
    title: "5. Bắt buộc đăng ký thông tin shop qua Biểu mẫu BQT",
    summary: "Chỉ các shop đã xác minh qua Google Forms mới được phê duyệt bài bán lẻ.",
    content: "Trước khi đăng bài giới thiệu hoặc bán hàng, chủ shop cần điền đầy đủ thông tin vào Google Forms chính thức của BQT. Việc này giúp BQT bảo vệ quyền lợi của thành viên và giải quyết nhanh chóng khi phát sinh khiếu nại.",
    penalty: "Bài đăng của các shop chưa đăng ký sẽ ở trạng thái chờ duyệt kèm lời nhắc hoàn tất thông tin."
  },
  {
    id: 6,
    title: "6. Bảo mật thông tin cá nhân khách hàng",
    summary: "Tuyệt đối không đăng số điện thoại, địa chỉ của khách hàng lên khu vực công khai.",
    content: "Nghiêm cấm đăng tải ảnh chụp màn hình hóa đơn, phiếu giao hàng hoặc tin nhắn có lộ số điện thoại, số tài khoản ngân hàng, địa chỉ nhà riêng của khách hàng khi chưa có sự đồng ý. Khi up bill để tạo uy tín, chủ shop phải dùng công cụ che mờ các thông tin nhạy cảm.",
    penalty: "Xóa bài ngay lập tức và cảnh cáo nghiêm khắc."
  },
  {
    id: 7,
    title: "7. Quy trình xử lý khiếu nại & Trọng tài BQT",
    summary: "Khi có bất đồng mua bán, giải quyết văn minh qua tin nhắn riêng hoặc báo BQT.",
    content: "Nếu người mua nhận hàng không đúng cam kết hoặc giao hàng chậm, hai bên chủ động nhắn tin giải quyết thiện chí trước. Nếu không đạt thỏa thuận, hãy gửi bằng chứng cho BQT hỗ trợ phân xử. Nghiêm cấm tự ý đăng bài 'phốt' bốc đồng khi chưa qua đối chất.",
    penalty: "Tạm ẩn bài phốt chưa xác minh để xác minh sự thật. Trục xuất shop nếu cố tình gian lận không khắc phục."
  }
];

export const welcomePostTemplate = `🎉 CHÀO MỪNG CÁC THÀNH VIÊN & CHỦ SHOP MỚI THAM GIA NHÓM! 🎉

Lời đầu tiên, Ban Quản Trị xin gửi lời chào trân trọng và nồng nhiệt nhất tới tất cả các bạn đã gia nhập đại gia đình [Tên Nhóm]! 🤝

Để nhóm chúng ta luôn hoạt động hiệu quả, uy tín và gắn kết, các bạn vui lòng lưu ý 3 bước khởi đầu đơn giản sau nhé:

1️⃣ ĐỌC NỘI QUY: Dành 1 phút xem qua mục "Đáng chú ý" (Featured) để nắm rõ quy định về đăng bài, giá cả và văn hóa tương tác.
2️⃣ ĐỐI VỚI CHỦ SHOP: Nếu bạn muốn đăng bài giới thiệu sản phẩm/dịch vụ, hãy điền thông tin xác minh tại biểu mẫu: 👉 [Link Google Forms] (Chỉ mất 2 phút, giúp shop được cấp quyền duyệt bài ưu tiên).
3️⃣ ĐỐI VỚI NGƯỜI MUA: Hãy sử dụng thanh tìm kiếm của nhóm kèm hashtag (ví dụ: #GioiThieuShop, #KhuyenMaiHot) để tìm nhanh sản phẩm mong muốn.

💬 HÃY BÌNH LUẬN DƯỚI BÀI VIẾT NÀY ĐỂ LÀM QUEN:
- Tên bạn / Tên Shop của bạn
- Sản phẩm hoặc dịch vụ bạn đang cung cấp (kèm 1 ảnh sản phẩm đẹp nhất)
- Lời chào ngắn tới cộng đồng

Chúc các chủ shop buôn may bán đắt và quý thành viên tìm được những sản phẩm ưng ý nhất! ✨

#ThongBaoBQT #ChaoMungThanhVienMoi #KetNoiKinhDoanh`;

export const facebookPrivacyComparison = {
  recommendation: "Khuyên dùng nhóm RIÊNG TƯ (Private) nhưng HIỂN THỊ (Visible)",
  reasoning: "Mô hình nhóm Riêng tư + Hiển thị là tiêu chuẩn vàng cho các cộng đồng quản lý shop văn phòng chuyên nghiệp. Người ngoài vẫn tìm kiếm thấy nhóm trên Facebook (tăng thành viên tự nhiên), nhưng chỉ những ai được BQT phê duyệt mới xem được bài đăng và tham gia mua bán. Điều này ngăn chặn 100% tình trạng nick ảo, bot spam tự động quét số điện thoại cướp khách của shop, đồng thời tạo cảm giác đây là một cộng đồng uy tín, có chọn lọc.",
  comparison: [
    {
      criterion: "Khả năng tìm kiếm trên Facebook",
      publicGroup: "Ai cũng tìm thấy và xem được nội dung",
      privateGroup: "Tìm thấy được nếu bật chế độ 'Hiển thị' (Visible)"
    },
    {
      criterion: "Ai xem được bài đăng & thành viên?",
      publicGroup: "Bất kỳ ai trên internet (kể cả không có nick Facebook)",
      privateGroup: "Chỉ thành viên đã được BQT duyệt tham gia"
    },
    {
      criterion: "Kiểm soát spam & cướp khách",
      publicGroup: "Rất khó kiểm soát, bot tự quét bình luận cướp số điện thoại",
      privateGroup: "Kiểm soát tuyệt đối nhờ cổng duyệt thành viên và bài viết"
    },
    {
      criterion: "Uy tín của các Shop",
      publicGroup: "Dễ bị lẫn lộn giữa shop thật và tài khoản lừa đảo vãng lai",
      privateGroup: "Shop được kiểm duyệt hồ sơ rõ ràng, tạo sự an tâm tối đa"
    }
  ]
};

export const membershipQuestions = [
  {
    question: "Câu hỏi 1: Bạn tham gia nhóm với tư cách là Chủ Shop muốn bán hàng hay Thành viên mua sắm?",
    purpose: "Phân loại đối tượng ngay từ đầu để gửi link đăng ký thông tin nếu là Chủ shop.",
    idealAnswer: "Tôi là Chủ shop / Tôi là người mua hàng."
  },
  {
    question: "Câu hỏi 2: Bạn có cam kết đọc kỹ và tuân thủ 100% Nội quy nhóm (Công khai giá, không spam, không bán hàng cấm) không?",
    purpose: "Buộc thành viên ý thức được luật chơi trước khi vào nhóm, làm căn cứ xử lý vi phạm sau này.",
    idealAnswer: "Đồng ý và cam kết tuân thủ."
  },
  {
    question: "Câu hỏi 3: Nếu bạn là Chủ Shop, vui lòng cung cấp Số điện thoại Zalo hoặc Tên Shop để BQT đối soát thông tin?",
    purpose: "Thu thập thông tin định danh bước 1 để tránh tài khoản giả mạo vừa lập nick clone.",
    idealAnswer: "Cung cấp SĐT hoặc link shop hợp lệ."
  }
];

export const rolesMatrix = [
  {
    role: "Quản trị viên (Admin)",
    keyResponsibilities: [
      "Quản lý cài đặt nhóm (Tên nhóm, ảnh bìa, quyền riêng tư, quy tắc nhóm)",
      "Bổ nhiệm hoặc thu hồi vai trò Người kiểm duyệt",
      "Thêm/xóa thành viên vi phạm nghiêm trọng",
      "Cấu hình tính năng Hỗ trợ quản trị viên (Admin Assist) tự động chặn spam",
      "Duyệt các bài đăng thông báo chính sách quan trọng của toàn nhóm"
    ],
    recommendedAssignees: "Trưởng bộ phận, Kỹ thuật viên chính phụ trách dự án (1-2 người tin cậy)"
  },
  {
    role: "Người kiểm duyệt (Moderator)",
    keyResponsibilities: [
      "Kiểm tra và phê duyệt yêu cầu tham gia của thành viên mới dựa trên câu hỏi xét duyệt",
      "Xem và phê duyệt các bài đăng của shop theo checklist nội dung chuẩn",
      "Ẩn/xóa bình luận phản cảm, spam hoặc bài viết thiếu giá niêm yết",
      "Ghim bài viết nổi bật, thông báo khuyến mại của tuần lên mục 'Đáng chú ý'",
      "Báo cáo cho Quản trị viên khi có trường hợp tranh chấp hoặc nghi vấn lừa đảo"
    ],
    recommendedAssignees: "Nhân viên văn phòng trực ca, cộng tác viên nội dung số (2-4 người luân phiên)"
  }
];

export const stepByStepGroupSetup = [
  {
    step: "Bước 1: Khởi tạo nhóm trên Facebook",
    pcGuide: "Truy cập facebook.com -> Ở menu bên trái chọn 'Nhóm' -> Nhấn nút '+ Tạo nhóm mới'.",
    mobileGuide: "Mở app Facebook -> Nhấn biểu tượng Menu (3 gạch) -> Chọn 'Nhóm' -> Nhấn dấu '+' ở góc trên cùng -> Chọn 'Tạo nhóm'.",
    tip: "Nên dùng tài khoản Facebook chính chủ có bảo mật 2 lớp (2FA) để tạo nhóm nhằm tránh mất quyền kiểm soát."
  },
  {
    step: "Bước 2: Điền thông tin cơ bản & Chọn quyền riêng tư",
    pcGuide: "Nhập Tên nhóm theo 1 trong 3 phương án gợi ý. Chọn quyền riêng tư: 'Riêng tư' (Private). Chọn hiển thị: 'Hiển thị' (Visible).",
    mobileGuide: "Nhập tên nhóm -> Chọn quyền riêng tư 'Riêng tư' -> Tiếp tục -> Nhấn 'Tạo nhóm'.",
    tip: "Facebook chỉ cho phép đổi tên nhóm 28 ngày/lần, hãy rà soát thật kỹ chính tả trước khi nhấn Tạo."
  },
  {
    step: "Bước 3: Tải ảnh bìa (Cover Banner) chuẩn kích thước",
    pcGuide: "Nhấn 'Chỉnh sửa' trên khung ảnh bìa -> Tải ảnh lên. Kích thước chuẩn hiển thị tốt trên cả máy tính lẫn điện thoại là 1640 x 856 pixels (tỷ lệ 1.91:1).",
    mobileGuide: "Nhấn vào khung ảnh bìa -> Chọn ảnh từ thư viện thiết bị -> Căn chỉnh vùng nhìn -> Lưu.",
    tip: "Thiết kế ảnh bìa bằng Canva với các thông tin cốt lõi đặt ở chính giữa để không bị che khuất trên mobile."
  },
  {
    step: "Bước 4: Cập nhật Mô tả nhóm và thiết lập Quy tắc (Rules)",
    pcGuide: "Vào menu bên trái mục 'Quản lý nhóm' -> Chọn 'Cài đặt nhóm' -> Dán đoạn văn bản Mô tả nhóm. Sau đó vào mục 'Quy tắc nhóm' -> Thêm lần lượt 7 quy tắc mẫu.",
    mobileGuide: "Nhấn vào biểu tượng Khiên quản trị -> Chọn 'Cài đặt nhóm' -> Sửa 'Mô tả'. Vào 'Quy tắc nhóm' để tạo các điều khoản.",
    tip: "Đặt tiêu đề quy tắc ngắn gọn, viết hoa để thành viên dễ quét mắt khi nộp đơn xin vào nhóm."
  },
  {
    step: "Bước 5: Bật tính năng 'Phê duyệt người tham gia' & Câu hỏi sàng lọc",
    pcGuide: "Vào 'Cài đặt nhóm' -> Mục 'Quản lý người tham gia' -> Bật 'Phê duyệt người tham gia' thành 'Bật'. Tiếp tục chọn 'Câu hỏi cho người tham gia' -> Thêm 3 câu hỏi mẫu.",
    mobileGuide: "Cài đặt nhóm -> Chọn 'Yêu cầu làm hội viên' -> Thêm câu hỏi và bật phê duyệt thủ công bởi quản trị viên/người kiểm duyệt.",
    tip: "Không để chế độ tự động chấp nhận bất kỳ ai, điều này sẽ làm nhóm tràn ngập tài khoản rác chỉ sau 1 tuần."
  },
  {
    step: "Bước 6: Bật 'Phê duyệt bài viết' (Post Approval)",
    pcGuide: "Vào 'Cài đặt nhóm' -> Tìm mục 'Quản lý bài viết' -> Bật công tắc 'Phê duyệt bài viết của người tham gia' thành 'BẬT'.",
    mobileGuide: "Cài đặt quản trị -> 'Cài đặt bài viết' -> Bật 'Phê duyệt bài viết'.",
    tip: "Đây là chốt chặn quan trọng nhất để không có bài đăng rác nào hiển thị trực tiếp mà chưa qua mắt kỹ thuật viên!"
  },
  {
    step: "Bước 7: Thiết lập công cụ tự động 'Hỗ trợ quản trị viên' (Admin Assist)",
    pcGuide: "Chọn 'Hỗ trợ quản trị viên' -> Thiết lập: Tự động từ chối bài viết nếu tài khoản mới tạo dưới 30 ngày, hoặc bài viết chứa link spam ngoài danh mục cho phép.",
    mobileGuide: "Mục công cụ quản trị -> Chọn 'Hỗ trợ quản trị viên' -> Thêm tiêu chí lọc bài viết tự động.",
    tip: "Tiết kiệm 70% thời gian duyệt bài thủ công cho kỹ thuật viên văn phòng."
  }
];
