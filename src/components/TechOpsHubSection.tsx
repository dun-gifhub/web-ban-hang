import React, { useState } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  FolderTree, 
  AlertOctagon, 
  Table2, 
  FileSpreadsheet, 
  Layers, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  HelpCircle, 
  FileText, 
  CheckSquare, 
  Search, 
  Clock, 
  ChevronRight,
  Flame,
  KeyRound,
  Download,
  Terminal,
  Cpu,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { 
  defaultProjectProfile,
  facebookTechOpsConfig,
  complaintFormFields,
  complaintFormConfigGuide,
  sampleSellers,
  sampleProducts,
  sampleIncidents,
  technicalFormulas,
  driveStructure,
  fileNamingConvention,
  standardSOP01,
  securityAuditChecklist,
  techStackComparison,
  techOpsSevenDayRoadmap,
  finalAcceptanceChecklist,
  SellerRow,
  ProductRow,
  IncidentRow
} from '../data/techOpsGuide';
import { CopyButton } from './CopyButton';

export const TechOpsHubSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission1' | 'mission2' | 'mission3' | 'mission4' | 'mission5' | 'mission6' | 'roadmap' | 'acceptance'>('mission3');
  
  // Mission 3 Sheets subtab
  const [sheetsSubTab, setSheetsSubTab] = useState<'sellers' | 'products' | 'incidents' | 'formulas' | 'dashboard'>('incidents');
  const [incidentSearch, setIncidentSearch] = useState('');
  const [incidentPriorityFilter, setIncidentPriorityFilter] = useState('Tất cả');

  // Interactive Checklist state for Security and Acceptance
  const [securityChecked, setSecurityChecked] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true, 4: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true });
  const [acceptanceChecked, setAcceptanceChecked] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true, 11: true, 12: true, 13: true });

  const filteredIncidents = sampleIncidents.filter(inc => {
    const matchesPriority = incidentPriorityFilter === 'Tất cả' || inc.priority === incidentPriorityFilter;
    const matchesSearch = inc.incidentCode.toLowerCase().includes(incidentSearch.toLowerCase()) ||
      inc.senderName.toLowerCase().includes(incidentSearch.toLowerCase()) ||
      inc.summary.toLowerCase().includes(incidentSearch.toLowerCase()) ||
      inc.relatedCode.toLowerCase().includes(incidentSearch.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  const getPriorityBadge = (priority: IncidentRow['priority']) => {
    switch (priority) {
      case 'Khẩn cấp':
        return 'bg-rose-600 text-white font-bold animate-pulse';
      case 'Cao':
        return 'bg-orange-100 text-orange-800 border-orange-300 font-bold';
      case 'Trung bình':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Thấp':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getIncidentStatusBadge = (status: IncidentRow['status']) => {
    switch (status) {
      case 'Mới tiếp nhận':
        return 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
      case 'Đang xử lý':
        return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
      case 'Chờ phản hồi':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Đã giải quyết':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold';
      case 'Đã đóng':
        return 'bg-slate-200 text-slate-700 border-slate-400';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner: Member 2 TechOps Identity */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 lg:p-8 shadow-md border border-slate-800">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <Cpu className="w-3.5 h-3.5 text-blue-400" /> THÀNH VIÊN 2 • CHUYÊN VIÊN KỸ THUẬT & VẬN HÀNH DỰ ÁN
          </div>
          <h2 className="text-2xl lg:text-3xl font-black tracking-tight leading-snug">
            Bộ Công Cụ Vận Hành Kỹ Thuật 0 Đồng Tuần Đầu Tiên
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Hạ tầng quản lý tập trung cho dự án <strong>"{defaultProjectProfile.projectName}"</strong>. Triển khai trọn vẹn 6 nhiệm vụ cốt lõi: Nhóm Facebook kiểm duyệt, Google Forms khiếu nại 11 trường, Google Sheets 3 trang tính (Người bán - Sản phẩm - Sự cố), Cây thư mục Google Drive 7 mục kèm SOP-01, Kiểm toán bảo mật 11 tiêu chí và Báo cáo công nghệ mở rộng.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs">
            <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
              <span className="text-slate-400 block text-[11px]">Quy mô nhân sự:</span>
              <span className="font-bold text-white text-sm">4 Thành viên</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
              <span className="text-slate-400 block text-[11px]">Ngân sách hạ tầng:</span>
              <span className="font-bold text-emerald-400 text-sm">0 VNĐ (Miễn phí)</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
              <span className="text-slate-400 block text-[11px]">Thời hạn hoàn thành:</span>
              <span className="font-bold text-blue-300 text-sm">7 Ngày triển khai</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs border border-white/10">
              <span className="text-slate-400 block text-[11px]">Nghị định bảo mật:</span>
              <span className="font-bold text-amber-300 text-sm">13/2023/NĐ-CP</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs for the 6 Missions + Roadmap + Acceptance */}
        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-800">
          {[
            { id: 'mission1', label: '1. Nhóm Facebook', icon: Layers },
            { id: 'mission2', label: '2. Forms Khiếu Nại (11 trường)', icon: FileSpreadsheet },
            { id: 'mission3', label: '3. Sheets 3 Trang Quản Lý', icon: Table2 },
            { id: 'mission4', label: '4. Drive 7 Thư Mục & SOP', icon: FolderTree },
            { id: 'mission5', label: '5. Checklist Bảo Mật 11 Mục', icon: ShieldCheck },
            { id: 'mission6', label: '6. Báo Cáo Công Nghệ', icon: Terminal },
            { id: 'roadmap', label: 'Lộ Trình 7 Ngày', icon: Calendar },
            { id: 'acceptance', label: 'Bảng Nghiệm Thu Cuối Tuần', icon: CheckSquare }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* MISSION 1: FACEBOOK GROUP TECHOPS */}
      {/* ============================================================== */}
      {activeTab === 'mission1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  NHIỆM VỤ 1 • THIẾT LẬP NHÓM FACEBOOK CHÍNH THỨC
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Phương Án Cấu Hình, Phân Loại Chủ Đề & 4 Bài Viết Ghim
                </h3>
              </div>
              <CopyButton textToCopy={facebookTechOpsConfig.description} label="Sao chép mô tả nhóm" variant="primary" />
            </div>

            {/* Config Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-800 text-[11px] uppercase block text-blue-700">Tên nhóm chính thức:</strong>
                <p className="font-bold text-slate-900">{facebookTechOpsConfig.naming}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-800 text-[11px] uppercase block text-indigo-700">Quyền riêng tư đề xuất:</strong>
                <p className="font-bold text-emerald-700">{facebookTechOpsConfig.publicVsPrivate.selected}</p>
                <p className="text-slate-500 text-[11px]">Chống bot quét số điện thoại cướp khách và nick ảo phá hoại.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <strong className="text-slate-800 text-[11px] uppercase block text-amber-700">Quy chuẩn đồ họa:</strong>
                <p className="text-slate-700">{facebookTechOpsConfig.coverBannerSpec}</p>
              </div>
            </div>

            {/* 4 Pinned Posts */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" /> Bốn Bài Viết Bắt Buộc Ghim Lên Mục "Đáng Chú Ý" (Featured):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {facebookTechOpsConfig.fourPinnedPosts.map(post => (
                  <div key={post.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                    <span className="font-bold text-blue-900 text-sm block">{post.title}</span>
                    <p className="text-slate-600">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Group Description Box */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-800">Nội dung mô tả nhóm mẫu hoàn chỉnh (sẵn sàng sử dụng):</span>
              <div className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono whitespace-pre-wrap leading-relaxed border border-slate-800">
                {facebookTechOpsConfig.description}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MISSION 2: COMPLAINT FORM (11 FIELDS) */}
      {/* ============================================================== */}
      {activeTab === 'mission2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                  NHIỆM VỤ 2 • GOOGLE FORMS TIẾP NHẬN PHẢN HỒI & KHIẾU NẠI
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Cấu Trúc Biểu Mẫu 11 Trường Chuẩn Xác Theo Đúng Thứ Tự
                </h3>
              </div>
              <CopyButton 
                textToCopy={complaintFormFields.map(f => `${f.order}. ${f.fieldName} | Loại: ${f.questionType} | Bắt buộc: ${f.isRequired ? 'CÓ' : 'KHÔNG'} | Cấu hình: ${f.technicalConfig}`).join('\n')} 
                label="Sao chép danh sách 11 trường" 
                variant="primary" 
              />
            </div>

            {/* Intro & File Upload Warning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 space-y-2">
                <span className="font-bold text-purple-900 text-sm block">Lời giới thiệu biểu mẫu & Cam kết thời gian:</span>
                <p className="text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">{complaintFormConfigGuide.introText}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2 text-amber-950">
                <span className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-amber-700" /> Cảnh báo kỹ thuật tải tệp & Thông báo email:
                </span>
                <p className="leading-relaxed">{complaintFormConfigGuide.fileUploadNotice}</p>
                <div className="pt-2 border-t border-amber-200/60 font-medium">
                  📧 <strong>Cài đặt Email Alert:</strong> {complaintFormConfigGuide.emailAlertSetup}
                </div>
              </div>
            </div>

            {/* 11 Fields Detailed Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="p-3 bg-slate-100 text-slate-800 font-bold text-xs">
                Danh Sách 11 Trường Dữ Liệu Theo Đúng Trình Tự Triển Khai
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 text-center w-12">#</th>
                      <th className="p-3 min-w-[200px]">Tên trường thông tin</th>
                      <th className="p-3 min-w-[150px]">Loại câu hỏi Forms</th>
                      <th className="p-3 w-28 text-center">Bắt buộc?</th>
                      <th className="p-3 min-w-[220px]">Quy tắc cấu hình & Hướng dẫn</th>
                      <th className="p-3 min-w-[180px]">Mục đích vận hành</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {complaintFormFields.map(f => (
                      <tr key={f.order} className="hover:bg-slate-50/70">
                        <td className="p-3 text-center font-bold text-slate-400">{f.order}</td>
                        <td className="p-3 font-bold text-slate-900">{f.fieldName}</td>
                        <td className="p-3 font-mono text-purple-700 font-medium bg-purple-50/30">{f.questionType}</td>
                        <td className="p-3 text-center">
                          {f.isRequired ? (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700">
                              Bắt buộc (*)
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                              Tùy chọn
                            </span>
                          )}
                        </td>
                        <td className="p-3 text-slate-600 space-y-1">
                          <p className="font-mono text-[11px] text-amber-800 bg-amber-50/60 p-1 rounded-sm border border-amber-200/50">
                            ⚙️ {f.technicalConfig}
                          </p>
                          <p className="text-[11px] text-slate-500 italic">"{f.guidanceText}"</p>
                        </td>
                        <td className="p-3 text-slate-700">{f.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MISSION 3: SHEETS 3 TABS (SELLERS, PRODUCTS, INCIDENTS) */}
      {/* ============================================================== */}
      {activeTab === 'mission3' && (
        <div className="space-y-6">
          {/* Sub Navigation for Sheets */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSheetsSubTab('incidents')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  sheetsSubTab === 'incidents'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Trang 3: SỰ CỐ VÀ KHIẾU NẠI (15 cột)
              </button>
              <button
                onClick={() => setSheetsSubTab('sellers')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  sheetsSubTab === 'sellers'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Trang 1: NGƯỜI BÁN (9 cột)
              </button>
              <button
                onClick={() => setSheetsSubTab('products')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  sheetsSubTab === 'products'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Trang 2: SẢN PHẨM (10 cột)
              </button>
              <button
                onClick={() => setSheetsSubTab('formulas')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  sheetsSubTab === 'formulas'
                    ? 'bg-purple-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Công Thức Bất Biến & KPI
              </button>
              <button
                onClick={() => setSheetsSubTab('dashboard')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  sheetsSubTab === 'dashboard'
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Bảng Tổng Quan (Dashboard)
              </button>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              [QL_VAN_HANH] Master_Database_2026.gsheet
            </div>
          </div>

          {/* Subtab 1: INCIDENTS TAB (15 Columns) */}
          {sheetsSubTab === 'incidents' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                    <AlertOctagon className="w-5 h-5 text-rose-600" /> Trang 3 — SỰ CỐ VÀ KHIẾU NẠI (15 Cột Quản Trị)
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Định dạng có điều kiện tự động: Cột Hạn xử lý &lt; TODAY() và chưa xong sẽ được tô đỏ cảnh báo quá hạn.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-slate-500 font-bold">Lọc mức độ:</span>
                    {['Tất cả', 'Khẩn cấp', 'Cao', 'Trung bình', 'Thấp'].map(p => (
                      <button
                        key={p}
                        onClick={() => setIncidentPriorityFilter(p)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                          incidentPriorityFilter === p
                            ? 'bg-rose-700 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-48">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Tìm sự cố..."
                      value={incidentSearch}
                      onChange={e => setIncidentSearch(e.target.value)}
                      className="w-full pl-8 pr-2 py-1 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              {/* Incidents Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto max-h-[460px]">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-rose-950 text-white font-bold sticky top-0 z-10 text-[11px] uppercase tracking-wider">
                      <tr>
                        <th className="p-2.5 border-r border-rose-900 w-24">1. Mã sự cố</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[130px]">2. Tiếp nhận</th>
                        <th className="p-2.5 border-r border-rose-900 w-28">3. Nguồn</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[140px]">4. Người gửi</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[130px]">5. Liên hệ</th>
                        <th className="p-2.5 border-r border-rose-900 w-28">6. Đối tượng</th>
                        <th className="p-2.5 border-r border-rose-900 w-24">7. Mã liên quan</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[200px]">8. Tóm tắt nội dung</th>
                        <th className="p-2.5 border-r border-rose-900 w-24">9. Mức ưu tiên</th>
                        <th className="p-2.5 border-r border-rose-900 w-28">10. Trạng thái</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[120px]">11. Phụ trách</th>
                        <th className="p-2.5 border-r border-rose-900 w-28">12. Cập nhật</th>
                        <th className="p-2.5 border-r border-rose-900 w-28">13. Hạn xử lý</th>
                        <th className="p-2.5 border-r border-rose-900 min-w-[200px]">14. Kết quả xử lý</th>
                        <th className="p-2.5 min-w-[180px]">15. Ghi chú nội bộ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredIncidents.map(inc => {
                        const isOverdue = inc.status !== 'Đã giải quyết' && inc.status !== 'Đã đóng' && inc.deadline < '2026-10-14';
                        return (
                          <tr 
                            key={inc.incidentCode} 
                            className={`hover:bg-slate-100/70 transition-colors ${isOverdue ? 'bg-rose-50/80 font-medium' : 'bg-white'}`}
                          >
                            <td className="p-2.5 font-mono font-bold text-rose-900 border-r border-slate-200">
                              {inc.incidentCode}
                            </td>
                            <td className="p-2.5 font-mono text-[11px] text-slate-600 border-r border-slate-200">
                              {inc.receivedTime}
                            </td>
                            <td className="p-2.5 text-slate-700 border-r border-slate-200">
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px]">
                                {inc.source}
                              </span>
                            </td>
                            <td className="p-2.5 font-bold text-slate-900 border-r border-slate-200">
                              {inc.senderName}
                            </td>
                            <td className="p-2.5 font-mono text-slate-700 border-r border-slate-200">
                              {inc.contactInfo}
                            </td>
                            <td className="p-2.5 text-slate-700 border-r border-slate-200">
                              {inc.objectType}
                            </td>
                            <td className="p-2.5 font-mono font-bold text-indigo-700 border-r border-slate-200">
                              {inc.relatedCode}
                            </td>
                            <td className="p-2.5 text-slate-800 border-r border-slate-200 truncate max-w-xs" title={inc.summary}>
                              {inc.summary}
                            </td>
                            <td className="p-2.5 border-r border-slate-200">
                              <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-bold border ${getPriorityBadge(inc.priority)}`}>
                                {inc.priority}
                              </span>
                            </td>
                            <td className="p-2.5 border-r border-slate-200">
                              <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${getIncidentStatusBadge(inc.status)}`}>
                                {inc.status}
                              </span>
                            </td>
                            <td className="p-2.5 font-medium text-slate-800 border-r border-slate-200">
                              {inc.assignee}
                            </td>
                            <td className="p-2.5 font-mono text-[11px] text-slate-500 border-r border-slate-200">
                              {inc.lastUpdated}
                            </td>
                            <td className={`p-2.5 font-mono font-bold border-r border-slate-200 ${isOverdue ? 'text-rose-700 bg-rose-100' : 'text-slate-700'}`}>
                              {inc.deadline} {isOverdue && '⚠️ Quá hạn'}
                            </td>
                            <td className="p-2.5 text-slate-700 border-r border-slate-200 truncate max-w-xs" title={inc.resolutionResult}>
                              {inc.resolutionResult}
                            </td>
                            <td className="p-2.5 text-slate-500 italic text-[11px]">
                              {inc.internalNotes}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Subtab 2: SELLERS TAB (9 Columns) */}
          {sheetsSubTab === 'sellers' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Table2 className="w-5 h-5 text-emerald-600" /> Trang 1 — NGƯỜI BÁN (9 Cột Chuẩn Mực)
              </h4>
              <div className="border border-slate-200 rounded-xl overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-emerald-950 text-white font-bold text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-2.5 border-r border-emerald-900 w-24">1. Mã người bán</th>
                      <th className="p-2.5 border-r border-emerald-900 min-w-[180px]">2. Tên người bán/cửa hàng</th>
                      <th className="p-2.5 border-r border-emerald-900 min-w-[180px]">3. Email</th>
                      <th className="p-2.5 border-r border-emerald-900 w-32">4. Số điện thoại</th>
                      <th className="p-2.5 border-r border-emerald-900 min-w-[180px]">5. Khu vực</th>
                      <th className="p-2.5 border-r border-emerald-900 w-28">6. Ngày tham gia</th>
                      <th className="p-2.5 border-r border-emerald-900 w-32">7. Trạng thái</th>
                      <th className="p-2.5 border-r border-emerald-900 min-w-[130px]">8. Phụ trách</th>
                      <th className="p-2.5 min-w-[200px]">9. Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sampleSellers.map(s => (
                      <tr key={s.sellerCode} className="hover:bg-emerald-50/30">
                        <td className="p-2.5 font-mono font-bold text-emerald-800 bg-emerald-50/50">{s.sellerCode}</td>
                        <td className="p-2.5 font-bold text-slate-900">{s.sellerName}</td>
                        <td className="p-2.5 text-slate-600 font-mono text-[11px]">{s.email}</td>
                        <td className="p-2.5 font-mono text-slate-800">{s.phone}</td>
                        <td className="p-2.5 text-slate-700">{s.area}</td>
                        <td className="p-2.5 font-mono text-slate-500">{s.joinDate}</td>
                        <td className="p-2.5">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                            s.status === 'Đang hoạt động' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                            s.status === 'Chờ duyệt' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                            s.status === 'Tạm ngừng' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                            'bg-rose-100 text-rose-800 border-rose-300'
                          }`}>
                            {s.status}
                          </span>
                        </td>
                        <td className="p-2.5 font-medium text-slate-800">{s.assignee}</td>
                        <td className="p-2.5 text-slate-500 italic text-[11px]">{s.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Subtab 3: PRODUCTS TAB (10 Columns) */}
          {sheetsSubTab === 'products' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <h4 className="font-black text-slate-900 text-base flex items-center gap-2">
                <Table2 className="w-5 h-5 text-blue-600" /> Trang 2 — SẢN PHẨM (10 Cột Quản Lý)
              </h4>
              <div className="border border-slate-200 rounded-xl overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-blue-950 text-white font-bold text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="p-2.5 border-r border-blue-900 w-24">1. Mã sản phẩm</th>
                      <th className="p-2.5 border-r border-blue-900 min-w-[180px]">2. Tên sản phẩm</th>
                      <th className="p-2.5 border-r border-blue-900 w-24">3. Mã người bán</th>
                      <th className="p-2.5 border-r border-blue-900 min-w-[140px]">4. Danh mục</th>
                      <th className="p-2.5 border-r border-blue-900 min-w-[200px]">5. Mô tả ngắn</th>
                      <th className="p-2.5 border-r border-blue-900 w-28 text-right">6. Giá bán</th>
                      <th className="p-2.5 border-r border-blue-900 w-28">7. Ngày đăng</th>
                      <th className="p-2.5 border-r border-blue-900 w-28">8. Trạng thái</th>
                      <th className="p-2.5 border-r border-blue-900 min-w-[120px]">9. Phụ trách</th>
                      <th className="p-2.5 min-w-[180px]">10. Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sampleProducts.map(p => (
                      <tr key={p.productCode} className="hover:bg-blue-50/30">
                        <td className="p-2.5 font-mono font-bold text-blue-800 bg-blue-50/50">{p.productCode}</td>
                        <td className="p-2.5 font-bold text-slate-900">{p.productName}</td>
                        <td className="p-2.5 font-mono text-emerald-800 font-bold">{p.sellerCode}</td>
                        <td className="p-2.5 text-slate-700">{p.category}</td>
                        <td className="p-2.5 text-slate-600 truncate max-w-xs">{p.shortDesc}</td>
                        <td className="p-2.5 text-right font-mono font-bold text-slate-900">
                          {p.price.toLocaleString('vi-VN')} ₫
                        </td>
                        <td className="p-2.5 font-mono text-slate-500">{p.postDate}</td>
                        <td className="p-2.5">
                          <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${
                            p.status === 'Đang bán' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                            p.status === 'Chờ duyệt' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                            p.status === 'Tạm dừng' ? 'bg-orange-100 text-orange-800 border-orange-300' :
                            'bg-rose-100 text-rose-800 border-rose-300'
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="p-2.5 font-medium text-slate-800">{p.assignee}</td>
                        <td className="p-2.5 text-slate-500 italic text-[11px]">{p.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Subtab 4: FORMULAS MASTERCLASS */}
          {sheetsSubTab === 'formulas' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
              <h4 className="font-black text-slate-900 text-base">
                Công Thức Sinh Mã Bất Biến & Các Hàm Đo Lường KPI Trọng Yếu
              </h4>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{technicalFormulas.immutableSellerCode.name}</span>
                    <CopyButton textToCopy={technicalFormulas.immutableSellerCode.formula} label="Sao chép" variant="primary" />
                  </div>
                  <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                    {technicalFormulas.immutableSellerCode.formula}
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Giải pháp chống lỗi khi Sort:</strong> {technicalFormulas.immutableSellerCode.explanation}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">Công thức đếm sự cố ĐÃ QUÁ HẠN (Alert đỏ)</span>
                    <CopyButton textToCopy={technicalFormulas.dashboardFormulas[2].formula} label="Sao chép" variant="primary" />
                  </div>
                  <div className="bg-slate-900 text-rose-400 p-3 rounded-lg font-mono text-xs overflow-x-auto">
                    {technicalFormulas.dashboardFormulas[2].formula}
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Logic điều kiện:</strong> {technicalFormulas.dashboardFormulas[2].explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Subtab 5: DASHBOARD */}
          {sheetsSubTab === 'dashboard' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-slate-500 font-bold uppercase">Tổng sự cố tiếp nhận</span>
                <div className="text-3xl font-black text-slate-900">5</div>
                <span className="text-[11px] text-slate-400 font-mono">=COUNTA(A2:A)</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-amber-700 font-bold uppercase">Sự cố đang xử lý</span>
                <div className="text-3xl font-black text-amber-600">2</div>
                <span className="text-[11px] text-amber-700 font-medium">Chiếm 40% khối lượng</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-rose-200 bg-rose-50/30 shadow-xs space-y-1">
                <span className="text-xs text-rose-700 font-black uppercase flex items-center gap-1">
                  <Flame className="w-4 h-4 text-rose-600" /> Sự cố ĐÃ QUÁ HẠN
                </span>
                <div className="text-3xl font-black text-rose-600">1</div>
                <span className="text-[11px] text-rose-700 font-bold">Cần xử lý khẩn cấp (SC-003)</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs text-emerald-700 font-bold uppercase">Đã giải quyết & Đóng</span>
                <div className="text-3xl font-black text-emerald-600">2</div>
                <span className="text-[11px] text-emerald-700 font-medium">Tỷ lệ thành công 100%</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* MISSION 4: GOOGLE DRIVE 7 FOLDERS & SOP-01 */}
      {/* ============================================================== */}
      {activeTab === 'mission4' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                  NHIỆM VỤ 4 • CẤU TRÚC GOOGLE DRIVE 7 MỤC & MẪU SOP VẬN HÀNH
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Hệ Thống Lưu Trữ Tập Trung & Quy Trình SOP-01 Chuẩn Mực
                </h3>
              </div>
              <CopyButton textToCopy={standardSOP01} label="Sao chép toàn bộ SOP-01" variant="primary" />
            </div>

            {/* Drive Folder Tree Grid */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <FolderTree className="w-4 h-4 text-teal-600" /> Cây Thư Mục 7 Nhánh Chuẩn Mực: <code>[Tên dự án] — Tài liệu vận hành</code>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {driveStructure.map(folder => (
                  <div key={folder.code} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-mono">
                          {folder.code}
                        </span>
                        <span>{folder.folderName}</span>
                      </div>
                      <p className="text-slate-600 mt-2 leading-relaxed">{folder.purpose}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 text-[11px] text-teal-900 space-y-1">
                      <div><strong>Phân quyền:</strong> {folder.accessRole}</div>
                      <div className="text-slate-500 font-mono truncate">Tệp mẫu: {folder.typicalFiles.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* File Naming Rules */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs space-y-2 text-blue-950">
              <span className="font-bold text-blue-900 text-sm">Quy tắc đặt tên tệp thống nhất:</span>
              <div className="bg-white p-2 rounded-md font-mono text-xs border border-blue-200 text-indigo-700">
                {fileNamingConvention.syntax}
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                {fileNamingConvention.rules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Full SOP-01 Document Box */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-900">Văn bản mẫu SOP-01 hoàn chỉnh áp dụng ngay:</span>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 text-xs font-mono leading-relaxed whitespace-pre-wrap max-h-[380px] overflow-y-auto border border-slate-800">
                {standardSOP01}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MISSION 5: SECURITY AUDIT (11 ITEMS) */}
      {/* ============================================================== */}
      {activeTab === 'mission5' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                  NHIỆM VỤ 5 • KIỂM TRA BẢO MẬT & PHÂN QUYỀN TRUY CẬP
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Bảng Kiểm Toán An Ninh 11 Hạng Mục Trọng Yếu
                </h3>
              </div>
              <CopyButton 
                textToCopy={securityAuditChecklist.map(s => `[${s.status}] ${s.item} | Rủi ro: ${s.riskLevel} | Cách kiểm tra: ${s.inspectionMethod} | Giải pháp: ${s.mitigationSolution} | Phụ trách: ${s.assignee}`).join('\n\n')} 
                label="Sao chép toàn bộ bảng bảo mật" 
                variant="primary" 
              />
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-950 space-y-1">
              <strong>⚠️ LƯU Ý MINH BẠCH VỀ BẢO MẬT:</strong> Khóa dải ô (Protect Range) trên Google Sheets chỉ có tác dụng chống gõ đè, KHÔNG THỂ thay thế việc phân quyền truy cập tệp. Cần kiểm tra kỹ danh sách email được cấp quyền và không bao giờ chia sẻ link ở chế độ "Bất kỳ ai có liên kết đều có thể xem/sửa".
            </div>

            {/* Security Checklist Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-10 text-center">#</th>
                      <th className="p-3 min-w-[200px]">Hạng mục kiểm tra</th>
                      <th className="p-3 w-28">Mức rủi ro</th>
                      <th className="p-3 min-w-[220px]">Cách kiểm tra</th>
                      <th className="p-3 min-w-[240px]">Phương án xử lý kỹ thuật</th>
                      <th className="p-3 w-28">Phụ trách</th>
                      <th className="p-3 w-24 text-center">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {securityAuditChecklist.map(sec => (
                      <tr key={sec.id} className="hover:bg-slate-50">
                        <td className="p-3 text-center font-bold text-slate-400">{sec.id}</td>
                        <td className="p-3 font-bold text-slate-900">{sec.item}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            sec.riskLevel === 'Nghiêm trọng' ? 'bg-rose-100 text-rose-700' :
                            sec.riskLevel === 'Cao' ? 'bg-orange-100 text-orange-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {sec.riskLevel}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600">{sec.inspectionMethod}</td>
                        <td className="p-3 text-emerald-950 bg-emerald-50/30 font-medium">{sec.mitigationSolution}</td>
                        <td className="p-3 font-medium text-slate-700">{sec.assignee}</td>
                        <td className="p-3 text-center">
                          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                            {sec.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MISSION 6: TECH STACK REPORT (4 GROUPS) */}
      {/* ============================================================== */}
      {activeTab === 'mission6' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <div className="pb-4 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                NHIỆM VỤ 6 • BÁO CÁO NGHIÊN CỨU 4 NHÓM CÔNG NGHỆ & LỘ TRÌNH MỞ RỘNG
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                Đánh Giá Thực Tế Nền Tảng Website, Quản Lý Tác Vụ & Tự Động Hóa 0 Đồng
              </h3>
            </div>

            {/* Group 1: Websites */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm text-blue-900">
                Nhóm 1: Nền tảng xây dựng Website (Google Sites, Canva, WordPress, Wix, GitHub)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {techStackComparison.group1_Websites.map((web, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">{web.name}</span>
                      <a href={web.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                        Link <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-slate-600 space-y-1">
                      <p><strong>Gói miễn phí:</strong> {web.costFreeTier}</p>
                      <p><strong>Ưu điểm:</strong> {web.pros}</p>
                      <p className="text-rose-700"><strong>Giới hạn:</strong> {web.limits}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-indigo-800 font-bold text-[11px]">
                      👉 {web.verdict}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2 & 3: Task Management & Automation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm text-indigo-900">
                  Nhóm 2: Quản lý công việc (Trello vs Notion)
                </h4>
                {techStackComparison.group2_TaskManagement.map((task, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900 text-sm">{task.name} ({task.costFreeTier})</div>
                    <p className="text-slate-600">{task.pros}</p>
                    <div className="font-bold text-emerald-800 text-[11px]">Đánh giá: {task.verdict}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm text-purple-900">
                  Nhóm 3: Tích hợp tự động hóa (Apps Script vs Make)
                </h4>
                {techStackComparison.group3_Automation.map((auto, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5 text-xs">
                    <div className="font-bold text-slate-900 text-sm">{auto.name} ({auto.costFreeTier})</div>
                    <p className="text-slate-600">{auto.pros}</p>
                    <div className="font-bold text-emerald-800 text-[11px]">Đánh giá: {auto.verdict}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scaling Roadmap */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
              <h4 className="text-base font-bold text-amber-400">
                🚀 Lộ Trình Mở Rộng 3 Giai Đoạn Theo Quy Mô Thực Tế:
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p>• <strong>{techStackComparison.group4_ScalingRoadmap.phase1}</strong></p>
                <p>• <strong>{techStackComparison.group4_ScalingRoadmap.phase2}</strong></p>
                <p>• <strong>{techStackComparison.group4_ScalingRoadmap.phase3}</strong></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 7-DAY ROADMAP (TECHOPS) */}
      {/* ============================================================== */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <h3 className="text-lg font-black text-slate-900">
              Kế Hoạch Triển Khai Chi Tiết Trong 7 Ngày (Thành Viên 2 Phụ Trách Kỹ Thuật)
            </h3>

            <div className="space-y-4">
              {techOpsSevenDayRoadmap.map(plan => (
                <div key={plan.day} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                    <span className="font-black text-blue-900 text-sm sm:text-base">
                      {plan.title}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold">
                      Phụ trách: {plan.owner}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <strong className="text-slate-800 block">Nhiệm vụ & Bước thao tác:</strong>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        {plan.operationalSteps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-900">
                        <strong>Kết quả nghiệm thu:</strong> {plan.deliverable}
                      </div>
                      <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-100 text-amber-900">
                        <strong>Rủi ro & Phòng ngừa:</strong> {plan.risksAndMitigation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* FINAL ACCEPTANCE CHECKLIST (13 ITEMS) */}
      {/* ============================================================== */}
      {activeTab === 'acceptance' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  BẢNG NGHIỆM THU CUỐI TUẦN (13 HẠNG MỤC HOÀN TẤT)
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  Biên Bản Nghiệm Thu & Sẵn Sàng Bàn Giao Vận Hành
                </h3>
              </div>
              <CopyButton 
                textToCopy={finalAcceptanceChecklist.map(c => `[${c.status}] ${c.item} | Phụ trách: ${c.assignee} | Hạn: ${c.deadline} | Bằng chứng: ${c.evidence}`).join('\n\n')} 
                label="Sao chép bảng nghiệm thu" 
                variant="primary" 
              />
            </div>

            {/* Acceptance Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3 w-10 text-center">#</th>
                      <th className="p-3 min-w-[220px]">Hạng mục nghiệm thu</th>
                      <th className="p-3 w-32">Người phụ trách</th>
                      <th className="p-3 w-24">Hạn hoàn thành</th>
                      <th className="p-3 w-24 text-center">Trạng thái</th>
                      <th className="p-3 min-w-[240px]">Bằng chứng kiểm tra thực tế</th>
                      <th className="p-3 min-w-[180px]">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {finalAcceptanceChecklist.map(item => (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="p-3 text-center font-bold text-slate-400">{item.id}</td>
                        <td className="p-3 font-bold text-slate-900">{item.item}</td>
                        <td className="p-3 font-medium text-slate-700">{item.assignee}</td>
                        <td className="p-3 font-mono text-slate-500">{item.deadline}</td>
                        <td className="p-3 text-center">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                            {item.status}
                          </span>
                        </td>
                        <td className="p-3 text-emerald-950 bg-emerald-50/20 font-medium">{item.evidence}</td>
                        <td className="p-3 text-slate-500 italic text-[11px]">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
