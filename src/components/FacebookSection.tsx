import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Smartphone, 
  Monitor, 
  Lock, 
  Globe, 
  HelpCircle,
  Search
} from 'lucide-react';
import { 
  namingOptions, 
  groupDescription, 
  groupRules, 
  welcomePostTemplate, 
  facebookPrivacyComparison, 
  membershipQuestions, 
  rolesMatrix, 
  stepByStepGroupSetup 
} from '../data/facebookGuide';
import { CopyButton } from './CopyButton';

export const FacebookSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'names' | 'rules' | 'description' | 'welcome' | 'privacy' | 'steps'>('names');
  const [ruleSearch, setRuleSearch] = useState('');
  const [customGroupName, setCustomGroupName] = useState('Phố Mua Sắm Chọn Lọc Cầu Giấy');

  const filteredRules = groupRules.filter(r => 
    r.title.toLowerCase().includes(ruleSearch.toLowerCase()) || 
    r.content.toLowerCase().includes(ruleSearch.toLowerCase()) ||
    r.summary.toLowerCase().includes(ruleSearch.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-700 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-100 text-xs font-semibold backdrop-blur-xs mb-3">
            <Users className="w-3.5 h-3.5" /> PHẦN I • HỆ THỐNG QUẢN TRỊ NHÓM FACEBOOK
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Tạo Nhóm Facebook & Thiết Lập Bộ Khung Quản Trị Chuyên Nghiệp
          </h2>
          <p className="mt-2 text-blue-100 text-sm lg:text-base leading-relaxed">
            Hướng dẫn kỹ thuật viên văn phòng khởi tạo nhóm đúng chuẩn từ đầu: chọn tên thương hiệu, thiết lập quyền riêng tư chống cướp khách, ban hành 7 quy tắc chuẩn mực và phân công nhân sự quản trị.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('names')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'names'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            3 Phương Án Tên Nhóm
          </button>
          <button
            onClick={() => setActiveTab('description')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'description'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Mẫu Mô Tả Hoàn Chỉnh
          </button>
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'rules'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bộ 7 Nội Quy Chuẩn
          </button>
          <button
            onClick={() => setActiveTab('welcome')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'welcome'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bài Chào Mừng Thành Viên
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'privacy'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Quyền Riêng Tư & Vai Trò
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'steps'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Hướng Dẫn Thao Tác (PC / Mobile)
          </button>
        </div>
      </div>

      {/* Tab 1: Naming Options */}
      {activeTab === 'names' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-900 text-sm">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Lời khuyên đặt tên từ kỹ thuật viên:</span> Một tên nhóm tốt cần thỏa mãn 3 yếu tố: 
                (1) Chứa từ khóa địa phương/ngành hàng để tăng tìm kiếm; (2) Mang tính khẳng định uy tín (chọn lọc, đối tác, kết nối); (3) Rõ đối tượng phục vụ.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {namingOptions.map((opt, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                    {opt.title}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 leading-snug">
                    {opt.name}
                  </h3>
                  <div className="text-xs italic text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    Slogan đề xuất: "{opt.tagline}"
                  </div>
                  <div className="text-xs text-slate-600 space-y-1.5 pt-2">
                    <p><strong className="text-slate-800">Lý do chọn:</strong> {opt.rationale}</p>
                    <p><strong className="text-slate-800">Đối tượng phù hợp:</strong> {opt.targetAudience}</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Bấm để sao chép tên:</span>
                  <CopyButton textToCopy={opt.name} label="Sao chép tên" variant="primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Description */}
      {activeTab === 'description' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-indigo-600" /> Mẫu Mô Tả Nhóm Facebook Hoàn Chỉnh
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Đã tích hợp đầy đủ mục tiêu, 4 nguyên tắc hoạt động, quy ước hashtag và hotline hỗ trợ.
                </p>
              </div>
              <CopyButton textToCopy={groupDescription} label="Sao chép toàn bộ mô tả" variant="primary" />
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto shadow-inner border border-slate-800">
              {groupDescription}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Cách dán vào Facebook:
              </div>
              <p>1. Mở nhóm Facebook của bạn trên máy tính hoặc điện thoại.</p>
              <p>2. Chọn mục <strong>Cài đặt nhóm (Group Settings)</strong> ở menu quản trị viên bên trái.</p>
              <p>3. Tìm đến ô <strong>Tên và mô tả (Name and Description)</strong>, dán nội dung trên vào phần Mô tả và thay thế các thông tin trong ngoặc vuông [ ] cho phù hợp.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Group Rules */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Bộ 7 Quy Tắc Nhóm (Group Rules)
              </h3>
              <p className="text-xs text-slate-500">
                Được chuẩn hóa để bảo vệ quyền lợi thành viên và duy trì uy tín cho cộng đồng.
              </p>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm quy tắc theo từ khóa..."
                value={ruleSearch}
                onChange={(e) => setRuleSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredRules.map((rule) => (
              <div key={rule.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm sm:text-base text-blue-900">
                    {rule.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                      Điều {rule.id}/7
                    </span>
                    <CopyButton 
                      textToCopy={`${rule.title}\n${rule.summary}\n${rule.content}\nKhung xử phạt: ${rule.penalty}`} 
                      label="Sao chép quy tắc" 
                      variant="secondary" 
                    />
                  </div>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    📌 Tóm tắt: {rule.summary}
                  </p>
                  <p className="leading-relaxed">
                    {rule.content}
                  </p>
                  <div className="flex items-start gap-1.5 text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-100 text-xs mt-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <div>
                      <strong>Khung xử phạt vi phạm:</strong> {rule.penalty}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <CopyButton 
              textToCopy={groupRules.map(r => `${r.title}\n- Tóm tắt: ${r.summary}\n- Chi tiết: ${r.content}\n- Xử phạt: ${r.penalty}\n`).join('\n---\n\n')} 
              label="Sao chép toàn bộ 7 Quy Tắc vào Clipboard" 
              variant="outline" 
              className="py-2.5 px-5 text-sm"
            />
          </div>
        </div>
      )}

      {/* Tab 4: Welcome Post */}
      {activeTab === 'welcome' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" /> Mẫu Bài Đăng Chào Mừng Thành Viên Mới
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Đăng ngay sau khi tạo nhóm và ghim vào mục "Đáng chú ý" (Featured).
                </p>
              </div>
              <CopyButton textToCopy={welcomePostTemplate} label="Sao chép bài chào mừng" variant="primary" />
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-blue-900">Mục đích của bài chào mừng:</div>
              <ul className="list-disc pl-4 space-y-1">
                <li>Định hướng ngay lập tức cho thành viên mới cần làm gì (Đọc luật, điền form nếu là shop, tìm hashtag nếu là người mua).</li>
                <li>Tạo không khí cởi mở bằng lời kêu gọi bình luận làm quen (kéo tương tác tự nhiên cho nhóm).</li>
                <li>Làm bằng chứng thông báo công khai khi có trường hợp shop viện cớ "tôi không biết có quy định".</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto shadow-inner border border-slate-800">
              {welcomePostTemplate}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Privacy & Roles */}
      {activeTab === 'privacy' && (
        <div className="space-y-8">
          {/* Recommendation Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-emerald-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Đề xuất cấu hình quyền riêng tư:
            </div>
            <p className="text-sm font-semibold text-emerald-800">
              {facebookPrivacyComparison.recommendation}
            </p>
            <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
              {facebookPrivacyComparison.reasoning}
            </p>
          </div>

          {/* Comparison Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-800 text-sm">
              So Sánh Chi Tiết: Nhóm Công Khai (Public) vs Nhóm Riêng Tư (Private)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Tiêu chí so sánh</th>
                    <th className="p-3.5 border-b border-slate-200 text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-blue-500" /> Nhóm Công Khai (Public)
                      </span>
                    </th>
                    <th className="p-3.5 border-b border-slate-200 text-emerald-800 bg-emerald-50/50">
                      <span className="inline-flex items-center gap-1.5 font-extrabold">
                        <Lock className="w-4 h-4 text-emerald-600" /> Nhóm Riêng Tư (Khuyên dùng)
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {facebookPrivacyComparison.comparison.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-semibold text-slate-800">{item.criterion}</td>
                      <td className="p-3.5 text-slate-600">{item.publicGroup}</td>
                      <td className="p-3.5 text-emerald-900 font-medium bg-emerald-50/30">{item.privateGroup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Membership Questions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-indigo-600" /> 3 Câu Hỏi Sàng Lọc Thành Viên Bắt Buộc
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Cài đặt trong mục "Câu hỏi cho người tham gia" (Membership Questions).
                </p>
              </div>
              <CopyButton 
                textToCopy={membershipQuestions.map(q => `${q.question}\n- Mục đích: ${q.purpose}\n- Câu trả lời chuẩn: ${q.idealAnswer}`).join('\n\n')} 
                label="Sao chép 3 câu hỏi" 
                variant="secondary" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {membershipQuestions.map((q, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-blue-900 text-sm">
                    {q.question}
                  </div>
                  <p className="text-slate-600">
                    <strong>Tác dụng:</strong> {q.purpose}
                  </p>
                  <p className="text-emerald-700 bg-emerald-50 p-2 rounded-md border border-emerald-100 font-medium">
                    ✓ Câu trả lời hợp lệ: {q.idealAnswer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Admin vs Moderator Roles */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Ma Trận Phân Quyền Quản Trị Viên (Admin) & Người Kiểm Duyệt (Moderator)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rolesMatrix.map((r, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-slate-900">{r.role}</span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 font-semibold px-2.5 py-1 rounded-full">
                      {idx === 0 ? 'Toàn quyền' : 'Kiểm duyệt nội dung'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong className="text-slate-800">Nhân sự chỉ định:</strong> {r.recommendedAssignees}
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    <div className="text-xs font-bold text-slate-700">Nhiệm vụ chính:</div>
                    <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
                      {r.keyResponsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Steps Guide (PC / Mobile) */}
      {activeTab === 'steps' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">
              Quy Trình 7 Bước Khởi Tạo Nhóm Chi Tiết (Trên Cả Máy Tính & Điện Thoại)
            </h3>

            <div className="space-y-5">
              {stepByStepGroupSetup.map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-blue-300 transition-all bg-white">
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-900">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs shrink-0 font-extrabold">
                      {idx + 1}
                    </span>
                    {item.step}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-700 flex items-center gap-1.5 text-xs text-blue-600">
                        <Monitor className="w-3.5 h-3.5" /> Thao tác trên Máy tính (PC):
                      </div>
                      <p className="text-slate-600">{item.pcGuide}</p>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                      <div className="font-bold text-slate-700 flex items-center gap-1.5 text-xs text-emerald-600">
                        <Smartphone className="w-3.5 h-3.5" /> Thao tác trên Điện thoại (App):
                      </div>
                      <p className="text-slate-600">{item.mobileGuide}</p>
                    </div>
                  </div>

                  <div className="mt-2.5 text-xs text-amber-800 bg-amber-50/70 p-2 rounded-md border border-amber-100">
                    💡 <strong>Mẹo kỹ thuật viên:</strong> {item.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
