/**
 * Data and guidelines for Part IV: Content Management, Facebook Posts, and Comment Response Playbooks
 */

export interface PostTemplate {
  id: string;
  type: string;
  title: string;
  fullVersion: string;
  shortVersion: string;
  recommendedVisual: string;
  callToAction: string;
}

export interface CommentScenario {
  id: number;
  situation: string;
  customerTrigger: string;
  publicReply: string;
  nextStep: string;
  escalationCondition: string;
  privacyCaution: string;
}

export const postTemplates: PostTemplate[] = [
  {
    id: "intro",
    type: "Giới thiệu Shop",
    title: "1. Mẫu Bài Đăng Giới Thiệu Shop Mới Gia Nhập",
    fullVersion: `🌟 [GIỚI THIỆU SHOP THÀNH VIÊN] CHÀO MỪNG [Tên shop] CHÍNH THỨC GIA NHẬP CỘNG ĐỒNG! 🌟

Bạn đang tìm kiếm [Danh mục sản phẩm/dịch vụ] uy tín, chất lượng và chuẩn chỉ về nguồn gốc? Hôm nay, Ban Quản Trị xin giới thiệu một gian hàng thành viên rất đáng để trải nghiệm: [Tên shop]! 🛍️✨

💎 VỀ [Tên shop]:
Với phương châm [Phương châm kinh doanh, ví dụ: 'Tận tâm phục vụ - Chất lượng đặt lên hàng đầu'], [Tên shop] mang đến các sản phẩm [Sản phẩm chủ đạo] được tuyển chọn kỹ lưỡng, phù hợp cho nhu cầu [Đối tượng khách hàng, ví dụ: dân văn phòng, gia đình trẻ].

✨ ĐIỂM NỔI BẬT KHÔNG NÊN BỎ LỠ:
✔️ 100% hình ảnh thực tế, mô tả minh bạch và cam kết chất lượng.
✔️ Giá niêm yết công khai chỉ từ: [Giá bán] VNĐ.
✔️ Chính sách đổi trả linh hoạt trong [Thời gian đổi trả, ví dụ: 07 ngày] nếu phát hiện lỗi từ nhà sản xuất.
✔️ Ưu đãi độc quyền: Giảm ngay [Mức ưu đãi cho nhóm, ví dụ: 10%] cho thành viên có mã [Mã giảm giá].

📍 THÔNG TIN LIÊN HỆ GIAN HÀNG:
🏠 Địa chỉ ghé xem trực tiếp: [Địa chỉ]
📞 Hotline / Zalo đặt hàng: [Số điện thoại]
🌐 Xem thêm catalog đầy đủ tại: [Đường dẫn Facebook hoặc Website]
🕒 Giờ mở cửa: [Giờ mở cửa, ví dụ: 08:30 - 21:30 hàng ngày]

👉 Các bạn hãy để lại lời chào hoặc thả tim dưới bài viết để ủng hộ gian hàng mới của cộng đồng mình nhé! 

#GioiThieuShop #[Tên shop viết liền không dấu] #CongDongShop #MuaSamThongMinh`,
    shortVersion: `🔥 [SHOP MỚI GIA NHẬP] Chào đón [Tên shop] đến với nhóm! 

Chuyên cung cấp [Sản phẩm chủ đạo] chất lượng, giá chỉ từ [Giá bán] VNĐ.
✔️ Đổi trả linh hoạt | Cam kết hàng chuẩn.
✔️ Ưu đãi độc quyền giảm [Mức ưu đãi cho nhóm] cho thành viên nhóm!

📍 Địa chỉ: [Địa chỉ]
📞 Hotline/Zalo: [Số điện thoại]
🌐 Xem catalog tại: [Đường dẫn Facebook hoặc Website]

Thành viên hãy chấm (.) hoặc thả tim dưới bài để nhận tư vấn chi tiết từ shop nhé! 👇
#GioiThieuShop #[Tên shop viết liền không dấu]`,
    recommendedVisual: "Bộ ảnh từ 3 - 5 tấm: Tấm 1 là ảnh bảng hiệu mặt tiền hoặc logo nhận diện đẹp mắt; Tấm 2, 3, 4 là ảnh cận cảnh sản phẩm thật có gắn watermark tên shop.",
    callToAction: "Bình luận 'Tư vấn' hoặc bấm link fanpage để nhận mã ưu đãi thành viên."
  },
  {
    id: "product_update",
    type: "Cập nhật Sản phẩm/Dịch vụ",
    title: "2. Mẫu Bài Đăng Ra Mắt / Cập Nhật Sản Phẩm & Dịch Vụ Mới",
    fullVersion: `🚀 [CẬP NHẬT MỚI] BỘ SƯU TẬP [Sản phẩm] ĐÃ CHÍNH THỨC CẬP BẾN TẠI [Tên shop]! 📦✨

Chào cả nhà! Để đáp ứng mong đợi của đông đảo thành viên trong thời gian qua, hôm nay [Tên shop] xin phép cập nhật dòng sản phẩm hoàn toàn mới: [Tên dòng sản phẩm mới]!

🔎 ĐIỂM NÂNG CẤP VƯỢT TRỘI LẦN NÀY:
1️⃣ Chất liệu & Tính năng: [Điểm nổi bật 1, ví dụ: Sử dụng vật liệu thân thiện môi trường, độ bền cao].
2️⃣ Thiết kế & Tiện ích: [Điểm nổi bật 2, ví dụ: Nhỏ gọn, phong cách thanh lịch phù hợp môi trường văn phòng].
3️⃣ Mức giá niêm yết rõ ràng: Chỉ từ [Giá bán] VNĐ / sản phẩm (Kèm quà tặng kèm [Quà tặng kèm, nếu có]).

🎯 SẢN PHẨM PHÙ HỢP VỚI:
- [Đối tượng 1, ví dụ: Nhân viên văn phòng cần sự tiện lợi và thanh lịch].
- [Đối tượng 2, ví dụ: Những ai muốn tìm một món quà tặng tinh tế và ý nghĩa].

🎁 Ưu đãi đợt hàng đầu tiên: Tặng kèm [Quà tặng kèm] cho [Số lượng, ví dụ: 20] đơn đặt hàng đầu tiên trong tuần này!

📦 ĐẶT HÀNG & TRẢI NGHIỆM:
- Nhắn tin trực tiếp qua Hotline/Zalo: [Số điện thoại]
- Trải nghiệm tại: [Địa chỉ]
- Xem chi tiết bảng size/mẫu mã tại: [Đường dẫn Facebook hoặc Website]

Số lượng đợt này về có hạn, các bạn yêu thích hãy để lại bình luận mẫu muốn chọn ngay bên dưới để shop giữ hàng nhé! 👇

#SanPhamMoi #[Tên shop viết liền không dấu] #HangMoiVe #XuHuong2026`,
    shortVersion: `📦 [HÀNG MỚI VỀ] Cập nhật ngay [Sản phẩm] siêu hot tại [Tên shop]!

✨ Thiết kế hiện đại, chất lượng chuẩn xịn.
💰 Giá niêm yết: [Giá bán] VNĐ (Tặng kèm [Quà tặng kèm] cho 20 đơn đầu tiên).
📍 Xem trực tiếp tại: [Địa chỉ]
📞 Hotline/Zalo giữ hàng: [Số điện thoại]

Bình luận mẫu bạn thích hoặc để lại số lượng để shop lên đơn ngay nhé! 👇
#SanPhamMoi #[Tên shop viết liền không dấu]`,
    recommendedVisual: "1 video ngắn 15-30s quay rõ chi tiết thực tế của sản phẩm khi cầm trên tay hoặc chùm ảnh chụp sản phẩm đặt trong không gian ánh sáng tự nhiên.",
    callToAction: "Bình luận mã số mẫu hoặc inbox ngay để nhận quà tặng kèm giới hạn."
  },
  {
    id: "promotion",
    type: "Khuyến mãi / Ưu đãi",
    title: "3. Mẫu Bài Đăng Chương Trình Khuyến Mãi Có Thời Hạn",
    fullVersion: `🔥 [ƯU ĐÃI ĐỘC QUYỀN] ĐẠI TIỆC KHUYẾN MÃI DÀNH RIÊNG CHO THÀNH VIÊN NHÓM! 🔥

Tri ân sự tin yêu và đồng hành của cộng đồng suốt thời gian qua, [Tên shop] trân trọng gửi tới cả nhà chương trình ưu đãi lớn nhất trong tháng:

🎉 CHƯƠNG TRÌNH: [Tên chương trình ưu đãi, ví dụ: Tuần Lễ Mua Sắm Rộn Ràng]
⏰ THỜI GIAN ÁP DỤNG: Từ ngày [Thời gian áp dụng - Ngày bắt đầu] đến hết ngày [Thời gian áp dụng - Ngày kết thúc] (hoặc đến khi hết số lượng quà tặng).

🎁 CƠ CẤU ƯU ĐÃI HẤP DẪN:
⚡ GIẢM NGAY [Mức ưu đãi cho nhóm, ví dụ: 20%] cho toàn bộ danh mục [Sản phẩm].
⚡ ĐỒNG GIÁ [Giá khuyến mãi đặc biệt] VNĐ cho các dòng sản phẩm chọn lọc.
⚡ Miễn phí vận chuyển toàn quốc cho đơn hàng từ [Giá trị đơn hàng freeship, ví dụ: 300.000] VNĐ.
⚡ Quà tặng đặc biệt: Tặng 01 [Quà tặng kèm] cho tất cả đơn hàng phát sinh trong khung giờ vàng.

📝 ĐIỀU KIỆN ÁP DỤNG ĐƠN GIẢN:
1. Là thành viên chính thức của nhóm.
2. Chụp màn hình bài viết này hoặc bình luận mã '#[Tên shop]ƯuĐãi' ngay dưới bài viết.

🚚 CÁCH THỨC ĐẶT HÀNG NHANH CHÓNG:
- Hotline/Zalo hỗ trợ 24/7: [Số điện thoại]
- Địa chỉ ghé mua trực tiếp: [Địa chỉ]
- Đặt hàng online tại: [Đường dẫn Facebook hoặc Website]

Cơ hội chỉ có trong [Số ngày áp dụng, ví dụ: 5 ngày], hãy tag ngay người bạn thân vào cùng săn deal nhé cả nhà! ⏳🛒

#KhuyenMaiHot #[Tên shop viết liền không dấu] #UuDaiDocQuyen #DealHotHomNay`,
    shortVersion: `⚡ [FLASH SALE CHỈ TRONG [Số ngày áp dụng] NGÀY] [Tên shop] giảm sốc [Mức ưu đãi cho nhóm]!

🎉 Áp dụng từ [Thời gian áp dụng - Ngày bắt đầu] đến [Thời gian áp dụng - Ngày kết thúc].
🎁 Tặng kèm [Quà tặng kèm] + Freeship cho thành viên nhóm!
💰 Giá sau giảm chỉ từ [Giá bán] VNĐ.

📍 Đến ngay: [Địa chỉ]
📞 Hotline chốt đơn: [Số điện thoại]
👉 Bình luận 'SĂN DEAL' để shop gửi mã giảm giá riêng vào inbox nhé! 👇
#KhuyenMaiHot #[Tên shop viết liền không dấu]`,
    recommendedVisual: "Ảnh thiết kế đồ họa có dải băng nổi bật 'ƯU ĐÃI THÀNH VIÊN - GIẢM [X]%', thể hiện rõ giá gốc bị gạch ngang và giá sau giảm bằng chữ màu đỏ/cam nổi bật.",
    callToAction: "Bình luận 'SĂN DEAL' hoặc gọi hotline để được áp dụng mức giá ưu đãi trước khi hết hạn."
  }
];

export const commentScenarios: CommentScenario[] = [
  {
    id: 1,
    situation: "1. Khách hỏi giá sản phẩm",
    customerTrigger: "Khách bình luận: 'Giá bao nhiêu shop?', 'Ib giá', 'Bao tiền một bộ?'",
    publicReply: "Dạ [Tên shop] chào anh/chị ạ! Sản phẩm [Tên sản phẩm] hiện đang có mức giá niêm yết công khai là [Giá bán] VNĐ ạ. Nếu anh/chị là thành viên nhóm mình, bên em đang có ưu đãi giảm thêm [Mức ưu đãi] nữa đó ạ. Em vừa gửi bảng giá chi tiết kèm thông số vào tin nhắn riêng cho mình, anh/chị kiểm tra tin nhắn chờ giúp em nhé!",
    nextStep: "Gửi tin nhắn riêng (Messenger) gồm: Ảnh cận cảnh sản phẩm, bảng giá niêm yết, thông tin quà tặng kèm (nếu có) và đường link đặt hàng tiện lợi.",
    escalationCondition: "Nếu khách hàng muốn đàm phán giá sỉ số lượng lớn (trên 10 chiếc) hoặc muốn chiết khấu đặc biệt theo dự án văn phòng.",
    privacyCaution: "Bắt buộc công khai giá cơ bản trên bình luận để tuân thủ quy tắc nhóm; không được chỉ trả lời cụt lủn 'check ib'."
  },
  {
    id: 2,
    situation: "2. Khách hỏi địa chỉ và giờ hoạt động",
    customerTrigger: "Khách bình luận: 'Shop ở đâu vậy?', 'Mấy giờ đóng cửa?', 'Có được qua xem trực tiếp không?'",
    publicReply: "Dạ em chào anh/chị! Gian hàng của [Tên shop] tại: [Địa chỉ] luôn mở cửa đón anh/chị từ [Giờ mở cửa, ví dụ: 08:30 đến 21:30] tất cả các ngày trong tuần (kể cả Thứ Bảy, Chủ Nhật) ạ. Shop có chỗ để xe máy, ô tô rộng rãi. Anh/chị cứ ghé trải nghiệm trực tiếp hoặc gọi hotline [Số điện thoại] để nhân viên đón tiếp chu đáo nhất nhé!",
    nextStep: "Thả tim bình luận của khách, có thể gửi thêm link bản đồ Google Maps chỉ đường vào tin nhắn riêng.",
    escalationCondition: "Khách hẹn đến xem ngoài khung giờ làm việc tiêu chuẩn hoặc cần đón tiếp theo đoàn.",
    privacyCaution: "Chỉ công khai địa chỉ trụ sở kinh doanh của shop, không bao giờ hỏi địa chỉ nhà riêng của khách trên phần bình luận."
  },
  {
    id: 3,
    situation: "3. Khách hỏi tình trạng hàng hóa",
    customerTrigger: "Khách bình luận: 'Mẫu màu xanh size L còn không shop?', 'Món này còn sẵn hàng tại cửa hàng không?'",
    publicReply: "Dạ [Tên shop] chào anh/chị! Mẫu [Tên sản phẩm - Phân loại màu/size] bên em hiện vẫn CÒN SẴN tại cửa hàng ạ. Do số lượng tồn trong kho chỉ còn khoảng vài chiếc, em đã tạm giữ 1 suất cho mình trong ngày hôm nay. Anh/chị có tiện ghé qua lấy hay muốn shop ship tận nơi giúp mình ạ?",
    nextStep: "Nếu khách muốn ship, xin thông tin qua tin nhắn riêng để kiểm tra đơn vị vận chuyển.",
    escalationCondition: "Hàng trong kho vừa hết sạch và chưa rõ ngày xưởng trả hàng mới.",
    privacyCaution: "Nếu hết hàng, tuyệt đối không hứa hẹn bừa bãi ngày có hàng nếu chưa được bộ phận kho xác nhận."
  },
  {
    id: 4,
    situation: "4. Khách hỏi cách đặt hàng hoặc sử dụng dịch vụ",
    customerTrigger: "Khách bình luận: 'Đặt hàng thế nào bạn ơi?', 'Ship về Cầu Giấy mất bao lâu?', 'Mình muốn đăng ký dịch vụ thì làm sao?'",
    publicReply: "Dạ em chào anh/chị! Để đặt hàng nhanh nhất, anh/chị chỉ cần để lại [Tên sản phẩm] muốn lấy, bên em sẽ hỗ trợ đóng gói và giao hàng tận nơi ạ. Đối với khu vực [Tên Quận/Thành phố], bên em ship hỏa tốc trong 2-4 tiếng, các tỉnh khác từ 2-3 ngày ạ. Em vừa gửi hướng dẫn đặt hàng kèm mã freeship vào tin nhắn riêng cho anh/chị rồi ạ!",
    nextStep: "Nhắn tin riêng gửi form xác nhận đơn hàng hoặc đường dẫn website đặt hàng tự động.",
    escalationCondition: "Khách yêu cầu hình thức thanh toán đặc thù như xuất hóa đơn VAT đỏ doanh nghiệp hoặc thanh toán công nợ cuối tháng.",
    privacyCaution: "Nhắc nhở khách: 'Anh/chị vui lòng gửi SĐT và Địa chỉ vào tin nhắn riêng cho shop, tránh comment ở đây để phòng tránh kẻ gian giả mạo cướp đơn nhé!'."
  },
  {
    id: 5,
    situation: "5. Khách để lại bình luận tích cực / Khen ngợi",
    customerTrigger: "Khách bình luận: 'Hàng nhận đẹp lắm shop ơi, giao siêu nhanh!', 'Đồ ăn rất vừa miệng, lần sau sẽ ủng hộ tiếp!'",
    publicReply: "Dạ [Tên shop] xin chân thành cảm ơn phản hồi quý báu của anh/chị [Tên khách] ạ! 🥰 Nhận được sự hài lòng của anh/chị là niềm vui và động lực to lớn nhất cho toàn thể đội ngũ shop. Lần tới ghé mua hoặc đặt hàng, anh/chị nhớ nhắn tin cho shop để nhận ngay quà tặng tri ân khách hàng thân thiết nhé ạ! Chúc anh/chị có một ngày thật nhiều niềm vui! 💖",
    nextStep: "Chụp lại ảnh màn hình đánh giá tích cực (sau khi đã che avatar và tên đệm của khách) để làm tư liệu uy tín đăng bài lần sau.",
    escalationCondition: "Không cần báo cáo quản lý, ghi nhận vào bảng theo dõi phản hồi tích cực.",
    privacyCaution: "Luôn xin phép khách nếu muốn sử dụng lại ảnh feedback của khách để đăng bài truyền thông."
  },
  {
    id: 6,
    situation: "6. Khách gửi lời cảm ơn",
    customerTrigger: "Khách bình luận: 'Cảm ơn shop nhé', 'Ok shop m nhận được rồi thks'",
    publicReply: "Dạ không có chi ạ! Được phục vụ anh/chị là niềm vinh hạnh của [Tên shop]. Trong quá trình sử dụng nếu cần bất kỳ hỗ trợ nào về bảo hành hay hướng dẫn, anh/chị cứ nhắn lại cho shop bất cứ lúc nào nhé ạ! Chúc anh/chị một tuần làm việc hiệu quả và tràn đầy năng lượng! ✨",
    nextStep: "Thả biểu tượng 'Yêu thích' vào bình luận của khách để giữ tương tác ấm áp.",
    escalationCondition: "Không cần chuyển tiếp.",
    privacyCaution: "Giữ tinh thần vui vẻ, lễ phép, phản hồi trong vòng 15-30 phút."
  },
  {
    id: 7,
    situation: "7. Khách phản ánh giao hàng chậm",
    customerTrigger: "Khách bình luận: 'Đặt từ thứ Hai đến giờ chưa thấy đâu', 'Giao hàng lâu quá shop ơi, đợi mãi không thấy shipper gọi'",
    publicReply: "Dạ [Tên shop] thành thật xin lỗi anh/chị [Tên khách] vì sự chậm trễ ngoài ý muốn khiến anh/chị phải chờ đợi ạ! 😔 Em đã kiểm tra ngay trên hệ thống định vị của đơn vị vận chuyển, hiện bưu tá đang trên đường đi phát trong hôm nay. Em vừa gửi mã vận đơn chi tiết kèm số điện thoại shipper vào tin nhắn riêng cho mình rồi ạ. Shop cam kết theo dõi sát sao cho đến khi hàng tới tay anh/chị!",
    nextStep: "Chủ động gọi ngay cho bưu tá hoặc bưu cục chuyển phát yêu cầu phát gấp. Gửi kèm mã giảm giá 10-15% cho đơn hàng sau để xoa dịu khách.",
    escalationCondition: "Hàng bị chậm quá 48 giờ so với lịch hẹn hoặc bưu tá làm thất lạc bưu phẩm.",
    privacyCaution: "Không đổ lỗi công khai cho đơn vị vận chuyển; nhận trách nhiệm trước với khách hàng rồi xử lý nội bộ phía sau."
  },
  {
    id: 8,
    situation: "8. Khách không hài lòng về chất lượng sản phẩm/dịch vụ",
    customerTrigger: "Khách bình luận: 'Hàng không giống hình chụp', 'Bánh ăn bị ngọt quá không như quảng cáo', 'Sản phẩm dùng bị lỗi nút bấm'",
    publicReply: "Dạ [Tên shop] thành thật gửi lời xin lỗi sâu sắc tới anh/chị về trải nghiệm chưa được trọn vẹn lần này ạ! 🙇‍♂️ Shop luôn cam kết quyền lợi cao nhất cho khách hàng và sẵn sàng hỗ trợ ĐỔI MỚI 1-1 HOÀNG TOÀN MIỄN PHÍ hoặc HOÀN TIỀN nếu sản phẩm không đúng cam kết. Em đã gửi tin nhắn xin phép lắng nghe chi tiết để gửi sản phẩm thay thế ngay cho mình. Rất mong anh/chị tạo cơ hội để shop được khắc phục ạ!",
    nextStep: "Trong vòng 5 phút, nhân viên CSKH gọi điện thoại trực tiếp (nếu có số) hoặc nhắn tin lắng nghe, không tranh cãi, chủ động đề xuất phương án đổi mới hoặc hoàn tiền ngay.",
    escalationCondition: "Khách kiên quyết từ chối giải pháp thông thường và yêu cầu gặp trực tiếp chủ shop hoặc đe dọa bôi xấu thương hiệu trên mạng xã hội.",
    privacyCaution: "Tuyệt đối không đôi co, không dùng lý lẽ 'sao anh/chị không kiểm tra kỹ trước khi nhận'. Lắng nghe với thái độ cầu thị."
  },
  {
    id: 9,
    situation: "9. Khách bình luận tiêu cực, gay gắt, chửi bới",
    customerTrigger: "Khách bình luận: 'Lũ lừa đảo bán hàng dởm', 'Tẩy chay shop này đi mọi người ơi', dùng lời lẽ thô tục",
    publicReply: "Dạ kính chào anh/chị! [Tên shop] luôn tôn trọng và lắng nghe mọi ý kiến đóng góp của khách hàng với tinh thần cầu thị nhất. Tuy nhiên, shop không bao giờ có chủ trương lừa dối hay bán hàng kém chất lượng. Để làm rõ vấn đề và bảo vệ quyền lợi chính đáng của anh/chị, BQT shop đã chủ động nhắn tin và kính mời anh/chị cùng đối soát hóa đơn/hình ảnh thực tế. Rất mong chúng ta trao đổi văn minh trên tinh thần xây dựng ạ!",
    nextStep: "Chụp lại màn hình bằng chứng. Gửi tin nhắn lịch sự cho khách. Nếu sau 2-4 tiếng khách vẫn cố tình spam chửi bới thô tục không có căn cứ mua hàng thực tế: Ẩn bình luận (Hide comment) để không gây hoang mang cho người khác, đồng thời báo cáo BQT nhóm Facebook can thiệp.",
    escalationCondition: "Bắt buộc báo cáo ngay lập tức cho Quản trị viên trưởng và Chủ shop để có phương án xử lý khủng hoảng truyền thông.",
    privacyCaution: "Không bao giờ công kích cá nhân, không chửi bới lại, giữ bình tĩnh chuẩn mực văn phòng trong từng câu chữ."
  },
  {
    id: 10,
    situation: "10. Khách hỏi vấn đề kỹ thuật chuyên sâu chưa có đủ thông tin",
    customerTrigger: "Khách bình luận: 'Món này tương thích với mainboard mã XYZ không?', 'Thành phần này bà bầu 3 tháng đầu dùng được không?'",
    publicReply: "Dạ [Tên shop] chào anh/chị! Đây là một câu hỏi rất chuyên môn và quan trọng về [Tên sản phẩm/dịch vụ]. Để đảm bảo độ an toàn và chính xác tuyệt đối, em đã chuyển thông tin tới bộ phận kỹ thuật / chuyên gia tư vấn của shop để tra cứu hồ sơ kỹ thuật chi tiết. Shop sẽ phản hồi chính xác câu trả lời cho anh/chị qua tin nhắn trong vòng 30 phút nữa ạ!",
    nextStep: "Liên hệ trực tiếp với chuyên gia / kỹ thuật viên trưởng của hãng để lấy tài liệu chính thống, sau đó gửi câu trả lời kèm tài liệu dẫn chứng vào tin nhắn riêng cho khách.",
    escalationCondition: "Liên quan đến các yếu tố sức khỏe, y tế, hoặc các chứng chỉ an toàn kỹ thuật bắt buộc của cơ quan nhà nước.",
    privacyCaution: "Tuyệt đối không 'đoán mò' hoặc trả lời bừa bãi khi chưa chắc chắn 100%, tránh rủi ro pháp lý và ảnh hưởng sức khỏe người dùng."
  }
];

export const shopManagementSOP = {
  dailyChecklist: [
    { time: "08:30 - 09:00", task: "Kiểm tra Google Forms: Xuất các đơn đăng ký shop mới nộp trong đêm, cập nhật vào Google Sheets." },
    { time: "09:00 - 10:30", task: "Duyệt thành viên & duyệt bài đăng đợt 1 trên Facebook: Phê duyệt theo hashtag, kiểm tra giá bán niêm yết." },
    { time: "11:30 - 12:00", task: "Rà soát bình luận: Trả lời toàn bộ câu hỏi báo giá, tư vấn địa chỉ theo bộ kịch bản chuẩn." },
    { time: "14:00 - 15:30", task: "Duyệt bài đăng đợt 2: Ưu tiên các bài cập nhật sản phẩm mới và tin khuyến mãi khung giờ chiều." },
    { time: "16:30 - 17:00", task: "Kiểm tra xử lý khiếu nại (nếu có): Đối soát phản hồi giao hàng chậm, giải quyết trong ngày." }
  ],
  weeklyReview: [
    { day: "Thứ Hai", task: "Lên lịch nội dung tiêu điểm tuần: Chọn 2 shop tiêu biểu để ghim bài giới thiệu lên mục 'Đáng chú ý'." },
    { day: "Thứ Tư", task: "Thống kê dữ liệu: Cập nhật chỉ số tăng trưởng thành viên, số lượng shop kích hoạt mới trên Google Sheets." },
    { day: "Thứ Sáu", task: "Sao lưu (Backup): Tải bản sao file Google Sheets (.xlsx) về máy tính, rà soát danh sách shop vi phạm hoặc ngừng hoạt động." }
  ],
  prePostVerificationChecklist: [
    "1. Shop đăng bài đã có tên trong Google Sheets danh sách chính thức và trạng thái 'Đang hoạt động' chưa?",
    "2. Bài đăng có công khai rõ ràng giá tiền bằng VNĐ không? (Không chấp nhận 'inbox giá')",
    "3. Có đầy đủ số điện thoại hotline, địa chỉ cửa hàng hoặc kênh bán hàng hợp lệ không?",
    "4. Hình ảnh có sắc nét, chân thực, không chứa hình ảnh phản cảm, bạo lực hoặc vi phạm bản quyền không?",
    "5. Nội dung có đúng quy ước hashtag của nhóm không (#GioiThieuShop, #SanPhamMoi, #KhuyenMaiHot)?",
    "6. Shop có vượt quá hạn ngạch 02 bài đăng/ngày theo quy định không?"
  ],
  followUpSequence: [
    {
      stage: "Nhắc lần 1 (Sau 24 giờ gửi form chưa phản hồi/thiếu tin)",
      action: "Gửi tin nhắn Zalo/SMS thân thiện nhắc bổ sung thông tin còn thiếu (ví dụ: giấy chứng nhận hoặc link fanpage)."
    },
    {
      stage: "Nhắc lần 2 (Sau 48 giờ)",
      action: "Gọi điện thoại trực tiếp giải thích lý do bài viết chưa được duyệt do thiếu trường bắt buộc."
    },
    {
      stage: "Chuyển trạng thái (Sau 72 giờ không liên lạc được)",
      action: "Chuyển trạng thái trên Google Sheets thành 'Tạm ngừng / Chờ xác minh', từ chối các bài đăng liên quan kèm lời nhắn ghi chú."
    }
  ]
};
