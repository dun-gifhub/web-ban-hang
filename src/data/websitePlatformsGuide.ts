/**
 * Data and guidelines for Part V: 5 Free Website Creation Platforms for Beginners
 */

export interface WebsitePlatform {
  id: string;
  name: string;
  officialUrl: string;
  badge: string;
  tagline: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  codingRequired: string;
  domainInfo: {
    freeDomain: string;
    customDomainSupport: string;
  };
  freePlanLimits: string[];
  initialSteps: { step: string; instruction: string }[];
  targetAudience: string;
  officeSuitabilityScore: number; // 1-10
}

export const websitePlatforms: WebsitePlatform[] = [
  {
    id: "google_sites",
    name: "1. Google Sites",
    officialUrl: "https://sites.google.com",
    badge: "Khuyên dùng số 1 cho Văn Phòng",
    tagline: "Nền tảng tạo website miễn phí hoàn toàn, không quảng cáo, tích hợp 100% hệ sinh thái Google",
    pros: [
      "100% MIỄN PHÍ thực sự: Không có quảng cáo chèn ép của bên thứ ba, không bị ép nâng cấp gói.",
      "Tích hợp hoàn hảo một chạm với Google Sheets (bảng danh sách shop), Google Forms (form đăng ký), Google Drive, Google Maps và YouTube.",
      "Cho phép gán TÊN MIỀN RIÊNG (Custom Domain) hoàn toàn MIỄN PHÍ mà không cần mua gói trả phí (rất hiếm nền tảng nào có tính năng này ở gói free).",
      "Giao diện cực kỳ thân thiện với người làm việc văn phòng, kéo thả khối mượt mà như chỉnh sửa slide Google Docs."
    ],
    cons: [
      "Khả năng tùy biến giao diện chỉ ở mức cơ bản, ít mẫu theme nghệ thuật cầu kỳ.",
      "Không hỗ trợ tính năng giỏ hàng thương mại điện tử trực tiếp (phải dùng giải pháp nhúng Form hoặc link ngoài).",
      "Ít tiện ích mở rộng (plugins) chuyên sâu."
    ],
    bestFor: "Trang thông tin giới thiệu cộng đồng, Danh bạ shop thành viên, Trang hồ sơ năng lực công ty, Cổng nội bộ văn phòng.",
    codingRequired: "Hoàn toàn không",
    domainInfo: {
      freeDomain: "sites.google.com/view/[ten-website-cua-ban]",
      customDomainSupport: "Miễn phí (chỉ cần sở hữu tên miền riêng và xác minh DNS qua Google Search Console)"
    },
    freePlanLimits: [
      "Chia sẻ chung dung lượng 15GB miễn phí của tài khoản Google Drive.",
      "Không hỗ trợ code Backend động hoặc cơ sở dữ liệu riêng (dùng Google Sheets thay thế)."
    ],
    initialSteps: [
      { step: "Bước 1", instruction: "Truy cập sites.google.com bằng tài khoản Google quản trị chung của nhóm." },
      { step: "Bước 2", instruction: "Chọn một mẫu có sẵn (Template) hoặc bấm vào ô '+' (Trống) để tạo trang mới." },
      { step: "Bước 3", instruction: "Đặt tiêu đề trang chủ, tải ảnh banner thương hiệu lên khung đầu trang." },
      { step: "Bước 4", instruction: "Ở thanh công cụ bên phải (Mục Chèn), chọn 'Trang tính' để nhúng trực tiếp bảng danh sách shop, chọn 'Biểu mẫu' để nhúng form đăng ký." },
      { step: "Bước 5", instruction: "Bấm nút 'Xuất bản' (Publish) màu xanh ở góc trên bên phải, đặt tên đường dẫn và chọn ai có thể xem (Công khai)." }
    ],
    targetAudience: "Kỹ thuật viên văn phòng, người mới bắt đầu tuyệt đối, các dự án cộng đồng muốn duy trì 0 đồng chi phí lâu dài.",
    officeSuitabilityScore: 9.8
  },
  {
    id: "canva_websites",
    name: "2. Canva Websites",
    officialUrl: "https://www.canva.com",
    badge: "Đẹp nhất & Thẩm mỹ cao",
    tagline: "Biến bản thiết kế đồ họa thành website sống động chỉ bằng thao tác kéo thả hình ảnh",
    pros: [
      "Hàng nghìn mẫu thiết kế website lung linh, thẩm mỹ cực cao do các chuyên gia thiết kế đồ họa thế giới tạo sẵn.",
      "Thao tác thiết kế trực quan 100% giống hệt như đang chỉnh sửa ảnh hoặc làm bài thuyết trình trên Canva.",
      "Tự động tối ưu giao diện hoàn hảo cho màn hình điện thoại di động (Responsive mobile-friendly).",
      "Cho phép xuất bản miễn phí tối đa tới 5 trang web với tên miền phụ miễn phí của Canva."
    ],
    cons: [
      "Chỉ phù hợp làm Landing Page (trang đơn cuộn dài), không phù hợp cho website có cấu trúc cây thư mục phức tạp.",
      "Khó khăn trong việc đồng bộ dữ liệu thời gian thực dạng bảng tính lớn như Google Sites.",
      "Một số đồ họa, phông chữ cao cấp yêu cầu tài khoản Canva Pro."
    ],
    bestFor: "Landing page giới thiệu sự kiện mua sắm, Trang giới thiệu một gian hàng thời trang/mỹ phẩm/ẩm thực cao cấp, Portfolio cá nhân.",
    codingRequired: "Hoàn toàn không",
    domainInfo: {
      freeDomain: "[ten-ban-chon].my.canva.site",
      customDomainSupport: "Gói miễn phí cho phép dùng tên miền phụ Canva; gắn tên miền riêng yêu cầu gói Canva Pro hoặc thiết lập mua thêm."
    },
    freePlanLimits: [
      "Dưới chân trang có dòng chữ nhỏ hiển thị 'Designed with Canva'.",
      "Không hỗ trợ thanh toán online trực tiếp, khách mua phải bấm nút chuyển hướng qua Zalo hoặc Hotline."
    ],
    initialSteps: [
      { step: "Bước 1", instruction: "Đăng nhập canva.com -> Gõ tìm kiếm từ khóa 'Trang web' (Websites)." },
      { step: "Bước 2", instruction: "Chọn mẫu giao diện gian hàng hoặc doanh nghiệp vừa mắt." },
      { step: "Bước 3", instruction: "Thay thế ảnh sản phẩm, đổi tên shop, hotline và gắn liên kết (Hyperlink) vào các nút 'Xem Ngay' hoặc 'Liên Hệ Zalo'." },
      { step: "Bước 4", instruction: "Bấm vào nút 'Xuất bản trang web' (Publish Website) ở góc trên bên phải." },
      { step: "Bước 5", instruction: "Chọn tùy chọn 'Tên miền miễn phí' (my.canva.site), đặt tên định danh và nhấn 'Tiếp tục' để hoàn tất." }
    ],
    targetAudience: "Người thích giao diện bắt mắt, shop thời trang/ẩm thực/làm đẹp cần hình ảnh cuốn hút người xem ngay từ cái nhìn đầu tiên.",
    officeSuitabilityScore: 9.0
  },
  {
    id: "wordpress_com",
    name: "3. WordPress.com",
    officialUrl: "https://wordpress.com",
    badge: "Tối ưu cho Blog & Tin tức",
    tagline: "Nền tảng xuất bản nội dung lớn nhất thế giới với khả năng quản lý bài viết và tối ưu SEO vượt trội",
    pros: [
      "Khả năng quản lý bài viết, chuyên mục, thẻ phân loại bài đăng cực kỳ mạnh mẽ.",
      "Cấu trúc website chuẩn chỉ cho việc tối ưu công cụ tìm kiếm Google (SEO).",
      "Hệ sinh thái giao diện blog phong phú, có thể mở rộng quy mô lớn khi cần thiết.",
      "Cộng đồng người dùng hỗ trợ đông đảo trên toàn thế giới."
    ],
    cons: [
      "Gói MIỄN PHÍ bị chèn quảng cáo của WordPress lên trang của bạn.",
      "Không cho phép cài đặt thêm Plugin bên ngoài (như WooCommerce) ở gói miễn phí.",
      "Dung lượng lưu trữ gói free giới hạn ở mức 1GB.",
      "Giao diện quản trị Gutenberg có độ dốc học tập nhất định với người mới bắt đầu."
    ],
    bestFor: "Trang tin tức cộng đồng, blog review đánh giá chất lượng sản phẩm của các shop, tạp chí chia sẻ kinh nghiệm tiêu dùng.",
    codingRequired: "Kéo thả trực quan (không cần code)",
    domainInfo: {
      freeDomain: "[ten-cua-ban].wordpress.com",
      customDomainSupport: "Bắt buộc phải nâng cấp lên gói trả phí mới được kết nối tên miền riêng."
    },
    freePlanLimits: [
      "Hiển thị banner quảng cáo của WordPress.",
      "Dung lượng ổ đĩa tối đa 1GB.",
      "Không được chỉnh sửa sâu mã CSS hoặc cài thêm theme ngoài."
    ],
    initialSteps: [
      { step: "Bước 1", instruction: "Truy cập wordpress.com -> Bấm 'Bắt đầu tạo trang web'." },
      { step: "Bước 2", instruction: "Nhập tên mong muốn -> Ở bước chọn tên miền, cuộn xuống chọn mục có chữ 'Miễn phí' (.wordpress.com)." },
      { step: "Bước 3", instruction: "Ở bước chọn gói cước, bấm vào nút 'Bắt đầu với một trang web miễn phí' (Start with a free site) ở đầu trang." },
      { step: "Bước 4", instruction: "Vào bảng điều khiển quản trị, chọn 'Trang' (Pages) để tạo trang chủ, hoặc 'Bài viết' (Posts) để đăng bài review shop." },
      { step: "Bước 5", instruction: "Nhấn 'Xuất bản' để trang web chính thức online." }
    ],
    targetAudience: "Người thích viết bài chuyên sâu, quản trị viên muốn xây dựng chuyên trang tin tức hoặc cẩm nang đánh giá shop dài hạn.",
    officeSuitabilityScore: 8.0
  },
  {
    id: "wix",
    name: "4. Wix.com",
    officialUrl: "https://www.wix.com",
    badge: "Tự do bố cục tuyệt đối",
    tagline: "Trình kéo thả tự do pixel-perfect hàng đầu thế giới với kho ứng dụng Wix App Market phong phú",
    pros: [
      "Kéo thả hoàn toàn tự do: Bạn có thể đặt chữ, ảnh, nút bấm vào bất kỳ tọa độ pixel nào trên màn hình.",
      "Kho ứng dụng Wix App Market cho phép cài thêm nhiều tiện ích miễn phí như Chatbox trực tiếp, Form đặt lịch, Thư viện ảnh.",
      "Hơn 900 mẫu giao diện chuyên nghiệp cho mọi ngành nghề từ nhà hàng đến cửa hàng bán lẻ."
    ],
    cons: [
      "Gói miễn phí hiển thị thanh quảng cáo cố định 'This site was designed with Wix.com' nổi bật ở đầu trang web.",
      "Dung lượng lưu trữ và băng thông miễn phí chỉ có 500MB, dễ bị đầy nếu đăng nhiều ảnh chất lượng cao.",
      "Khi đã chọn một template, bạn không thể đổi sang template khác mà phải xây lại từ đầu.",
      "Tốc độ tải trang đôi khi hơi nặng nếu chèn quá nhiều hiệu ứng động."
    ],
    bestFor: "Trang giới thiệu công ty vừa và nhỏ, gian hàng trưng bày mẫu mã đa dạng, trang sự kiện có form đăng ký tương tác cao.",
    codingRequired: "Kéo thả trực quan (không cần code)",
    domainInfo: {
      freeDomain: "[ten-tai-khoan].wixsite.com/[ten-trang]",
      customDomainSupport: "Bắt buộc phải trả phí nâng cấp gói Premium mới được gắn tên miền riêng."
    },
    freePlanLimits: [
      "Quảng cáo Wix xuất hiện cố định trên đầu trang.",
      "Dung lượng lưu trữ 500MB; băng thông hàng tháng 500MB.",
      "Không hỗ trợ cổng thanh toán trực tuyến ở gói free."
    ],
    initialSteps: [
      { step: "Bước 1", instruction: "Truy cập wix.com -> Nhấn 'Get Started' -> Đăng ký tài khoản bằng Google." },
      { step: "Bước 2", instruction: "Trả lời vài câu hỏi định hướng ngành nghề hoặc chọn 'Bỏ qua' để vào kho Template." },
      { step: "Bước 3", instruction: "Chọn một mẫu vừa ý -> Bấm 'Edit' để mở trình chỉnh sửa Wix Studio/Editor." },
      { step: "Bước 4", instruction: "Kéo thả nội dung, hình ảnh sản phẩm theo vị trí mong muốn." },
      { step: "Bước 5", instruction: "Bấm nút 'Publish' ở góc trên bên phải để nhận đường link wixsite.com miễn phí." }
    ],
    targetAudience: "Người muốn thỏa sức sáng tạo bố cục không bị gò bó theo khung cố định, muốn có tính năng chat trực tiếp với khách.",
    officeSuitabilityScore: 8.2
  },
  {
    id: "github_pages",
    name: "5. GitHub Pages",
    officialUrl: "https://pages.github.com",
    badge: "Tốc độ bàn thờ & Tùy biến mã nguồn",
    tagline: "Nền tảng lưu trữ web tĩnh siêu tốc, bảo mật tuyệt đối, 100% không quảng cáo dành cho người thích kỹ thuật",
    pros: [
      "100% MIỄN PHÍ VĨNH VIỄN, hoàn toàn không có bất kỳ quảng cáo nào.",
      "Băng thông hào phóng (100GB/tháng) và dung lượng lưu trữ tới 1GB code tĩnh.",
      "Hỗ trợ gắn TÊN MIỀN RIÊNG hoàn toàn miễn phí kèm chứng chỉ bảo mật SSL HTTPS tự động kích hoạt.",
      "Tốc độ tải trang cực kỳ nhanh do lưu trữ trên mạng lưới CDN toàn cầu của GitHub."
    ],
    cons: [
      "BẮT BUỘC phải biết mã nguồn HTML, CSS, JavaScript hoặc dùng trình tạo tĩnh như Jekyll, Astro, Vite.",
      "Không có giao diện kéo thả chuột như Google Sites hay Canva.",
      "Chỉ hỗ trợ trang web tĩnh (Static Web), không hỗ trợ code PHP hay cơ sở dữ liệu MySQL chạy trực tiếp trên máy chủ."
    ],
    bestFor: "Trang tài liệu kỹ thuật, cẩm nang hướng dẫn số, portfolio lập trình viên, website tĩnh tốc độ cao.",
    codingRequired: "Cần biết HTML/CSS cơ bản",
    domainInfo: {
      freeDomain: "[ten-tai-khoan].github.io/[ten-du-an]",
      customDomainSupport: "Miễn phí 100% (cấu hình qua bản ghi CNAME / DNS và tự cấp SSL miễn phí)"
    },
    freePlanLimits: [
      "Giới hạn kích thước kho lưu trữ 1GB; băng thông 100GB/tháng.",
      "Không chạy được backend server động."
    ],
    initialSteps: [
      { step: "Bước 1", instruction: "Truy cập github.com -> Tạo tài khoản GitHub miễn phí." },
      { step: "Bước 2", instruction: "Tạo kho lưu trữ mới (New Repository) đặt tên: [ten-du-an] và chọn chế độ Public." },
      { step: "Bước 3", instruction: "Tải tệp index.html và các file CSS/JS lên kho lưu trữ." },
      { step: "Bước 4", instruction: "Vào mục Settings của Repository -> Chọn mục 'Pages' ở menu bên trái." },
      { step: "Bước 5", instruction: "Tại mục 'Branch', chọn nhánh 'main' và thư mục '/root' -> Nhấn 'Save'. Sau 1-2 phút, website sẽ hoạt động tại link github.io." }
    ],
    targetAudience: "Kỹ thuật viên muốn tự làm chủ 100% mã nguồn, nhân viên CNTT văn phòng, hoặc người muốn học thêm về web development.",
    officeSuitabilityScore: 7.5
  }
];

export const platformComparisonTable = [
  {
    criterion: "Độ dễ sử dụng cho người mới",
    googleSites: "⭐⭐⭐⭐⭐ (Cực dễ, như soạn Docs)",
    canvaWeb: "⭐⭐⭐⭐⭐ (Kéo thả đồ họa siêu trực quan)",
    wordPressCom: "⭐⭐⭐ (Cần thời gian làm quen)",
    wix: "⭐⭐⭐⭐ (Dễ kéo thả nhưng nhiều menu)",
    githubPages: "⭐⭐ (Phức tạp, cần hiểu mã nguồn)"
  },
  {
    criterion: "Mức độ tự do tùy chỉnh giao diện",
    googleSites: "⭐⭐⭐ (Theo khối dựng sẵn)",
    canvaWeb: "⭐⭐⭐⭐⭐ (Tự do thiết kế đồ họa đỉnh cao)",
    wordPressCom: "⭐⭐⭐⭐ (Rất nhiều theme blog đẹp)",
    wix: "⭐⭐⭐⭐⭐ (Kéo thả mọi tọa độ pixel)",
    githubPages: "⭐⭐⭐⭐⭐ (Vô hạn nếu biết code)"
  },
  {
    criterion: "Yêu cầu kỹ năng lập trình",
    googleSites: "Không cần (0% Code)",
    canvaWeb: "Không cần (0% Code)",
    wordPressCom: "Không cần (0% Code)",
    wix: "Không cần (0% Code)",
    githubPages: "Cần HTML/CSS/Git"
  },
  {
    criterion: "Gắn tên miền riêng miễn phí?",
    googleSites: "CÓ (Miễn phí 100%)",
    canvaWeb: "Không (Cần gói Canva Pro)",
    wordPressCom: "Không (Bắt buộc trả phí)",
    wix: "Không (Bắt buộc trả phí)",
    githubPages: "CÓ (Miễn phí 100%)"
  },
  {
    criterion: "Chèn quảng cáo của nhà cung cấp?",
    googleSites: "KHÔNG CÓ QUẢNG CÁO",
    canvaWeb: "Chỉ dòng chữ nhỏ ở chân trang",
    wordPressCom: "Có banner quảng cáo của WP",
    wix: "Có banner quảng cáo cố định ở đỉnh",
    githubPages: "KHÔNG CÓ QUẢNG CÁO"
  },
  {
    criterion: "Mục đích sử dụng phù hợp nhất",
    googleSites: "Danh bạ shop & Cổng thông tin văn phòng",
    canvaWeb: "Landing page quảng bá & Sự kiện đẹp mắt",
    wordPressCom: "Blog tin tức & Review sản phẩm",
    wix: "Website doanh nghiệp cần nhiều tính năng",
    githubPages: "Trang tài liệu kỹ thuật & Tải nhanh"
  }
];

export const platformRecommendationSummary = {
  bestForBeginners: {
    platform: "Google Sites",
    reason: "Đối với kỹ thuật viên văn phòng và người mới bắt đầu, Google Sites là lựa chọn số 1 tuyệt đối. Lý do: Hoàn toàn không có quảng cáo rác, tích hợp tự động với Google Sheets (danh sách shop cập nhật là web tự đổi theo), nhúng Google Forms thu thập đơn đăng ký mượt mà và đặc biệt cho phép gắn tên miền riêng miễn phí mà không tốn một đồng chi phí duy trì máy chủ nào!"
  },
  bestForVisuals: {
    platform: "Canva Websites",
    reason: "Nếu shop của bạn thuộc ngành nghề đòi hỏi tính thẩm mỹ thị giác cực cao (thời trang, hoa tươi, quán cafe bánh ngọt), Canva Websites là giải pháp số 1 để tạo trang giới thiệu lung linh chỉ trong 30 phút mà không cần học kỹ thuật."
  },
  professionalUpgradePath: {
    platform: "WordPress tự lưu trữ (WordPress.org trên Hosting riêng) hoặc Wix Premium",
    reason: "Khi cộng đồng phát triển lên quy mô trên 100 shop và có nhu cầu giỏ hàng trực tuyến, tích hợp thanh toán tự động qua VNPay/Momo và quản lý thành viên nhiều cấp, hãy đầu tư mua tên miền riêng (.vn hoặc .com) và chuyển dịch sang mã nguồn mở WordPress.org trên dịch vụ lưu trữ (Hosting) chuyên nghiệp."
  }
};
