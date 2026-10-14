import React, { useState } from 'react';
import { 
  Megaphone, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  CheckSquare, 
  AlertOctagon, 
  ThumbsUp, 
  Share2, 
  Search, 
  ShieldAlert, 
  Sliders, 
  Copy, 
  Check, 
  ExternalLink,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { 
  postTemplates, 
  commentScenarios, 
  shopManagementSOP 
} from '../data/contentAndCommentsGuide';
import { CopyButton } from './CopyButton';

export const ContentAndCommentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sop' | 'posts' | 'personalizer' | 'comments'>('personalizer');
  const [selectedPostId, setSelectedPostId] = useState<string>('intro');
  const [commentSearch, setCommentSearch] = useState<string>('');

  // Interactive Personalizer State
  const [customShopName, setCustomShopName] = useState('Tiệm Bánh Mẹ Cốm');
  const [customCategory, setCustomCategory] = useState('Bánh Yến Mạch & Ăn Vặt Lành Mạnh');
  const [customProduct, setCustomProduct] = useState('Bánh Quy Yến Mạch Hạt Dinh Dưỡng');
  const [customPrice, setCustomPrice] = useState('125.000');
  const [customPhone, setCustomPhone] = useState('0971 223 344');
  const [customAddress, setCustomAddress] = useState('A1 Giảng Võ, Ba Đình, Hà Nội');
  const [customDiscount, setCustomDiscount] = useState('15%');
  const [customGift, setCustomGift] = useState('01 gói trà hoa cúc thảo mộc');

  const replacePlaceholders = (text: string) => {
    return text
      .replace(/\[Tên shop\]/g, customShopName)
      .replace(/\[Tên shop viết liền không dấu\]/g, customShopName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ''))
      .replace(/\[Danh mục sản phẩm\/dịch vụ\]/g, customCategory)
      .replace(/\[Sản phẩm chủ đạo\]/g, customProduct)
      .replace(/\[Sản phẩm\]/g, customProduct)
      .replace(/\[Tên sản phẩm\]/g, customProduct)
      .replace(/\[Giá bán\]/g, customPrice)
      .replace(/\[Số điện thoại\]/g, customPhone)
      .replace(/\[Địa chỉ\]/g, customAddress)
      .replace(/\[Mức ưu đãi cho nhóm\]/g, customDiscount)
      .replace(/\[Mức ưu đãi\]/g, customDiscount)
      .replace(/\[Quà tặng kèm\]/g, customGift)
      .replace(/\[Thời gian áp dụng - Ngày bắt đầu\]/g, '15/10/2026')
      .replace(/\[Thời gian áp dụng - Ngày kết thúc\]/g, '22/10/2026')
      .replace(/\[Số ngày áp dụng\]/g, '7')
      .replace(/\[Giá khuyến mãi đặc biệt\]/g, '99.000')
      .replace(/\[Đường dẫn Facebook hoặc Website\]/g, `facebook.com/${customShopName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '')}`)
      .replace(/\[Mã giảm giá\]/g, 'VANPHONG2026');
  };

  const filteredComments = commentScenarios.filter(c => 
    c.situation.toLowerCase().includes(commentSearch.toLowerCase()) ||
    c.customerTrigger.toLowerCase().includes(commentSearch.toLowerCase()) ||
    c.publicReply.toLowerCase().includes(commentSearch.toLowerCase()) ||
    c.escalationCondition.toLowerCase().includes(commentSearch.toLowerCase())
  );

  const currentTemplate = postTemplates.find(p => p.id === selectedPostId) || postTemplates[0];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs mb-3">
            <Megaphone className="w-3.5 h-3.5" /> PHẦN IV • QUẢN LÝ NỘI DUNG, BÀI ĐĂNG & CSKH BÌNH LUẬN
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Quy Trình Quản Lý Shop, Mẫu Bài Đăng & 10 Kịch Bản Phản Hồi Bình Luận
          </h2>
          <p className="mt-2 text-amber-100 text-sm lg:text-base leading-relaxed">
            Bộ công cụ biên tập bài viết chuẩn chính sách Facebook (công khai giá, ảnh thật), công cụ tự động thay thế biến số thời gian thực và kịch bản xử lý bình luận chuyên nghiệp, khéo léo bảo vệ dữ liệu khách hàng.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('personalizer')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'personalizer'
                ? 'bg-white text-amber-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bộ Cá Nhân Hóa & Xem Trước Bài Đăng
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'posts'
                ? 'bg-white text-amber-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            3 Mẫu Bài Đăng Gốc (Đầy Đủ & Ngắn)
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'comments'
                ? 'bg-white text-amber-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            10 Kịch Bản Trả Lời Bình Luận
          </button>
          <button
            onClick={() => setActiveTab('sop')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'sop'
                ? 'bg-white text-amber-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Quy Trình Vận Hành & Kiểm Tra 6 Điểm
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Personalizer */}
      {activeTab === 'personalizer' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Công cụ Cá nhân hóa tự động:</span> Hãy nhập thông tin shop của bạn ở bảng bên dưới. Cả 3 bài viết Facebook mẫu sẽ tự động thay thế các biến số <code>[Tên shop]</code>, <code>[Giá bán]</code>, <code>[Hotline]</code> theo thời gian thực và mô phỏng giao diện Facebook thật để bạn sao chép ngay!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Variables Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sliders className="w-4 h-4 text-orange-600" /> Nhập thông tin Shop để tự động điền:
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Tên Shop:</label>
                  <input
                    type="text"
                    value={customShopName}
                    onChange={(e) => setCustomShopName(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Danh mục sản phẩm/dịch vụ:</label>
                  <input
                    type="text"
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Sản phẩm / Dịch vụ nổi bật:</label>
                  <input
                    type="text"
                    value={customProduct}
                    onChange={(e) => setCustomProduct(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Giá bán niêm yết (VNĐ):</label>
                    <input
                      type="text"
                      value={customPrice}
                      onChange={(e) => setCustomPrice(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Mức ưu đãi nhóm:</label>
                    <input
                      type="text"
                      value={customDiscount}
                      onChange={(e) => setCustomDiscount(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Hotline / Zalo:</label>
                    <input
                      type="text"
                      value={customPhone}
                      onChange={(e) => setCustomPhone(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Quà tặng kèm:</label>
                    <input
                      type="text"
                      value={customGift}
                      onChange={(e) => setCustomGift(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Địa chỉ cửa hàng:</label>
                  <input
                    type="text"
                    value={customAddress}
                    onChange={(e) => setCustomAddress(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden font-medium"
                  />
                </div>
              </div>

              {/* Template Switcher */}
              <div className="pt-2 border-t border-slate-100">
                <label className="font-bold text-slate-800 text-xs block mb-2">Chọn mẫu bài để xem trước:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {postTemplates.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPostId(p.id)}
                      className={`p-2 rounded-lg text-[11px] font-bold text-center transition-all cursor-pointer ${
                        selectedPostId === p.id
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {p.type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Facebook Post Mockup */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                {/* Facebook Post Header */}
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                      {customShopName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 text-sm">{customShopName}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-1.5 py-0.2 rounded-full">
                          Shop Uy Tín
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <span>Vừa xong</span> • <span>Cộng đồng mua sắm văn phòng</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CopyButton
                      textToCopy={replacePlaceholders(currentTemplate.fullVersion)}
                      label="Sao chép bài đầy đủ"
                      variant="primary"
                    />
                    <CopyButton
                      textToCopy={replacePlaceholders(currentTemplate.shortVersion)}
                      label="Bản ngắn"
                      variant="secondary"
                    />
                  </div>
                </div>

                {/* Facebook Post Body Content */}
                <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-sans max-h-[380px] overflow-y-auto">
                  {replacePlaceholders(currentTemplate.fullVersion)}
                </div>

                {/* Visual Recommendation Note */}
                <div className="px-5 py-3 bg-amber-50/70 border-t border-amber-100 text-xs text-amber-900">
                  📷 <strong>Khuyến nghị hình ảnh:</strong> {currentTemplate.recommendedVisual}
                </div>

                {/* Simulated Social Reaction Footer */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-around text-xs text-slate-500 font-semibold">
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" /> Thích (128)
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" /> Bình luận (36)
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <Share2 className="w-4 h-4" /> Chia sẻ (12)
                  </button>
                </div>
              </div>

              {/* Short Version Quick Box */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="font-bold text-xs text-slate-800">
                    Phiên bản ngắn gọn (Dành cho đăng Story hoặc duyệt bài nhanh):
                  </span>
                  <CopyButton textToCopy={replacePlaceholders(currentTemplate.shortVersion)} label="Sao chép bản ngắn" variant="outline" />
                </div>
                <div className="text-xs text-slate-600 mt-2 whitespace-pre-wrap font-mono">
                  {replacePlaceholders(currentTemplate.shortVersion)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Raw 3 Posts */}
      {activeTab === 'posts' && (
        <div className="space-y-6">
          {postTemplates.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <CopyButton textToCopy={p.fullVersion} label="Sao chép bản đầy đủ" variant="primary" />
                  <CopyButton textToCopy={p.shortVersion} label="Sao chép bản ngắn" variant="secondary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    Bản Đầy Đủ (Chuẩn Fanpage / Nhóm):
                  </span>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed max-h-[350px] overflow-y-auto">
                    {p.fullVersion}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    Bản Ngắn Gọn (Tối ưu Mobile):
                  </span>
                  <div className="bg-slate-50 border border-slate-200 text-slate-800 p-4 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed max-h-[350px] overflow-y-auto">
                    {p.shortVersion}
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 border border-amber-200/60 mt-3">
                    💡 <strong>Gợi ý hình ảnh:</strong> {p.recommendedVisual}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: 10 Comment Playbooks */}
      {activeTab === 'comments' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Bộ Kịch Bản Xử Lý Bình Luận Cho 10 Tình Huống Kinh Điển
              </h3>
              <p className="text-xs text-slate-500">
                Tuân thủ nguyên tắc: Không tranh cãi, không để lộ PII khách hàng, có điều kiện báo cáo quản lý rõ ràng.
              </p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm kịch bản bình luận..."
                value={commentSearch}
                onChange={(e) => setCommentSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
              />
            </div>
          </div>

          <div className="space-y-5">
            {filteredComments.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:border-slate-300 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0">
                      {c.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {c.situation}
                    </h4>
                  </div>
                  <CopyButton textToCopy={c.publicReply} label="Sao chép mẫu trả lời" variant="primary" />
                </div>

                {/* Customer Trigger */}
                <div className="text-xs bg-slate-100 p-2.5 rounded-lg text-slate-700 italic border border-slate-200/60">
                  💬 {c.customerTrigger}
                </div>

                {/* Public Reply Template */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Mẫu trả lời công khai (Chuẩn mực văn phòng):
                  </div>
                  <div className="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950 leading-relaxed font-sans font-medium">
                    {c.publicReply}
                  </div>
                </div>

                {/* Detailed Workflow & Caution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider text-indigo-700">
                      1. Xử lý bước tiếp theo
                    </span>
                    <p className="text-slate-600">{c.nextStep}</p>
                  </div>

                  <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100 space-y-1">
                    <span className="font-bold text-amber-900 block text-[11px] uppercase tracking-wider">
                      2. Điều kiện chuyển Quản lý
                    </span>
                    <p className="text-amber-800">{c.escalationCondition}</p>
                  </div>

                  <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100 space-y-1">
                    <span className="font-bold text-rose-900 block text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3 text-rose-600" /> 3. Lưu ý bảo mật (PII)
                    </span>
                    <p className="text-rose-800">{c.privacyCaution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: SOP & Verification Checklist */}
      {activeTab === 'sop' && (
        <div className="space-y-6">
          {/* Daily & Weekly Routine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-amber-900">
                <Clock className="w-4 h-4 text-amber-600" /> Công Việc Hằng Ngày (Daily SOP)
              </h3>
              <div className="space-y-2 text-xs">
                {shopManagementSOP.dailyChecklist.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="font-mono font-bold text-amber-700 shrink-0 w-24">
                      {item.time}
                    </span>
                    <span className="text-slate-700">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-indigo-900">
                <CheckSquare className="w-4 h-4 text-indigo-600" /> Công Việc Hằng Tuần (Weekly Review)
              </h3>
              <div className="space-y-2 text-xs">
                {shopManagementSOP.weeklyReview.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="font-bold text-indigo-700 shrink-0 w-20">
                      {item.day}
                    </span>
                    <span className="text-slate-700">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6-point pre-publish check */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" /> Checklist 6 Điểm Bắt Buộc Trước Khi Duyệt Bài Đăng
            </h3>
            <p className="text-xs text-slate-500">
              Chỉ cần vi phạm 1 trong 6 tiêu chí dưới đây, người kiểm duyệt lập tức từ chối duyệt bài kèm lời giải thích.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {shopManagementSOP.prePostVerificationChecklist.map((chk, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 text-xs font-medium text-slate-800 flex items-start gap-2">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{chk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow-up Sequence */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-indigo-600" /> Quy Trình Xử Lý Các Shop Chưa Phản Hồi (Quy Tắc 24h - 48h - 72h)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {shopManagementSOP.followUpSequence.map((seq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded-md inline-block">
                    {seq.stage}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {seq.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
