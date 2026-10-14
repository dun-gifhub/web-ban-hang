import React, { useState } from 'react';
import { 
  Table2, 
  Search, 
  Filter, 
  Download, 
  Code, 
  ShieldCheck, 
  Lock, 
  Layers, 
  HelpCircle,
  FileCheck,
  CheckCircle2,
  Calendar,
  Phone,
  UserCheck
} from 'lucide-react';
import { 
  sampleShopData, 
  sheetsFormulas, 
  sheetsSetupSteps, 
  sharingAndProtectionGuide, 
  ShopRecord 
} from '../data/googleSheetsGuide';
import { CopyButton } from './CopyButton';

export const SheetsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'database' | 'formulas' | 'setup' | 'security'>('database');
  const [statusFilter, setStatusFilter] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredShops = sampleShopData.filter((shop) => {
    const matchesStatus = statusFilter === 'Tất cả' || shop.status === statusFilter;
    const matchesSearch = 
      shop.shopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.representative.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.shopCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: ShopRecord['status']) => {
    switch (status) {
      case 'Đang hoạt động':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Chờ xác minh':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Tạm ngừng':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Ngừng hoạt động':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const handleExportCSV = () => {
    const headers = [
      'STT', 'Mã Shop', 'Tên Shop', 'Người Đại Diện', 'Số Điện Thoại', 
      'Email', 'Địa Chỉ', 'Danh Mục', 'Link Shop', 'Ngày Đăng Ký', 
      'Trạng Thái', 'Người Phụ Trách', 'Ngày Cập Nhật', 'Ghi Chú'
    ];
    const rows = filteredShops.map(s => [
      s.stt,
      s.shopCode,
      `"${s.shopName.replace(/"/g, '""')}"`,
      `"${s.representative}"`,
      `'${s.phone}`,
      s.email,
      `"${s.address.replace(/"/g, '""')}"`,
      `"${s.category}"`,
      s.link,
      s.registrationDate,
      s.status,
      s.assignee,
      s.lastUpdated,
      `"${s.notes.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `DANH_SACH_SHOP_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-800 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-semibold backdrop-blur-xs mb-3">
            <Table2 className="w-3.5 h-3.5" /> PHẦN III • BẢNG TÍNH GOOGLE SHEETS QUẢN LÝ MASTER
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Quản Trị Dữ Liệu Shop Tập Trung, Tự Động Hóa & Phân Quyền An Toàn
          </h2>
          <p className="mt-2 text-emerald-100 text-sm lg:text-base leading-relaxed">
            Mô hình quản lý chuẩn 14 cột, công thức tự động sinh Mã Shop (SHOP-xxx), đánh số thứ tự liên tục, tra cứu XLOOKUP, và thiết lập ma trận bảo mật chống sửa nhầm dữ liệu.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('database')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'database'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bảng Tính Trực Tiếp (14 Cột Chuẩn)
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'formulas'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            5 Công Thức Tự Động Hóa Cốt Lõi
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'setup'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Hướng Dẫn Thiết Lập Từng Bước
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'security'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Phân Quyền & Quy Trình Sao Lưu
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Database */}
      {activeTab === 'database' && (
        <div className="space-y-6">
          {/* Quick Metrics Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Tổng số gian hàng</div>
              <div className="text-2xl font-black text-slate-900 mt-1">{sampleShopData.length}</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">Đã kiểm duyệt</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Đang hoạt động</div>
              <div className="text-2xl font-black text-emerald-600 mt-1">
                {sampleShopData.filter(s => s.status === 'Đang hoạt động').length}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Hàm =COUNTIF()</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Chờ xác minh</div>
              <div className="text-2xl font-black text-amber-500 mt-1">
                {sampleShopData.filter(s => s.status === 'Chờ xác minh').length}
              </div>
              <div className="text-[11px] text-amber-600 font-medium mt-1">Cần đối soát</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500 font-medium">Tạm ngừng / Nghỉ</div>
              <div className="text-2xl font-black text-slate-400 mt-1">
                {sampleShopData.filter(s => s.status === 'Tạm ngừng' || s.status === 'Ngừng hoạt động').length}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Đã thông báo BQT</div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Lọc trạng thái:
              </span>
              {['Tất cả', 'Đang hoạt động', 'Chờ xác minh', 'Tạm ngừng', 'Ngừng hoạt động'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    statusFilter === st
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm shop, SĐT, mã..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
                />
              </div>
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition-all cursor-pointer shrink-0"
                title="Tải tệp CSV về máy tính để mở bằng Microsoft Excel hoặc Google Sheets"
              >
                <Download className="w-3.5 h-3.5" /> Xuất CSV
              </button>
            </div>
          </div>

          {/* Interactive Sheets Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-mono font-bold text-emerald-400">
                <Table2 className="w-4 h-4" /> [QL_SHOP] Danh_Sach_Shop_Thanh_Vien_2026.xlsx
              </div>
              <div className="text-slate-400 text-[11px]">
                Hiển thị {filteredShops.length} / {sampleShopData.length} bản ghi
              </div>
            </div>

            <div className="overflow-x-auto max-h-[500px]">
              <table className="w-full text-xs text-left border-collapse">
                <thead className="bg-emerald-900 text-white font-bold sticky top-0 z-10 shadow-sm text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="p-3 border-r border-emerald-800 text-center w-12">STT</th>
                    <th className="p-3 border-r border-emerald-800 w-28">Mã Shop</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[180px]">Tên Shop</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[140px]">Người Đại Diện</th>
                    <th className="p-3 border-r border-emerald-800 w-32">Số Điện Thoại</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[160px]">Email</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[220px]">Địa Chỉ</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[150px]">Danh Mục</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[140px]">Link Fanpage/Web</th>
                    <th className="p-3 border-r border-emerald-800 w-28">Ngày Đăng Ký</th>
                    <th className="p-3 border-r border-emerald-800 w-36">Trạng Thái</th>
                    <th className="p-3 border-r border-emerald-800 min-w-[130px]">Phụ Trách</th>
                    <th className="p-3 border-r border-emerald-800 w-28">Cập Nhật</th>
                    <th className="p-3 min-w-[200px]">Ghi Chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {filteredShops.map((shop, idx) => (
                    <tr key={shop.shopCode} className={idx % 2 === 0 ? 'bg-white hover:bg-emerald-50/40' : 'bg-slate-50/60 hover:bg-emerald-50/40'}>
                      <td className="p-3 text-center font-mono font-bold text-slate-400 border-r border-slate-100">
                        {shop.stt}
                      </td>
                      <td className="p-3 font-mono font-bold text-emerald-800 bg-emerald-50/30 border-r border-slate-100">
                        {shop.shopCode}
                      </td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-100">
                        {shop.shopName}
                      </td>
                      <td className="p-3 font-medium text-slate-700 border-r border-slate-100">
                        {shop.representative}
                      </td>
                      <td className="p-3 font-mono text-slate-800 border-r border-slate-100">
                        {shop.phone}
                      </td>
                      <td className="p-3 text-slate-600 border-r border-slate-100">
                        {shop.email}
                      </td>
                      <td className="p-3 text-slate-600 border-r border-slate-100 truncate max-w-xs" title={shop.address}>
                        {shop.address}
                      </td>
                      <td className="p-3 text-slate-700 border-r border-slate-100">
                        <span className="px-2 py-0.5 rounded-md bg-slate-200/70 text-[11px] font-medium text-slate-700">
                          {shop.category}
                        </span>
                      </td>
                      <td className="p-3 border-r border-slate-100">
                        <a 
                          href={shop.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-indigo-600 hover:underline truncate max-w-[120px] block font-mono text-[11px]"
                        >
                          {shop.link.replace('https://', '')}
                        </a>
                      </td>
                      <td className="p-3 text-slate-500 font-mono text-[11px] border-r border-slate-100">
                        {shop.registrationDate}
                      </td>
                      <td className="p-3 border-r border-slate-100">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadge(shop.status)}`}>
                          {shop.status}
                        </span>
                      </td>
                      <td className="p-3 font-medium text-slate-700 border-r border-slate-100">
                        {shop.assignee}
                      </td>
                      <td className="p-3 text-slate-500 font-mono text-[11px] border-r border-slate-100">
                        {shop.lastUpdated}
                      </td>
                      <td className="p-3 text-slate-500 italic text-[11px]">
                        {shop.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Master Formulas */}
      {activeTab === 'formulas' && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-900 text-xs sm:text-sm">
            💡 <strong>Nguyên tắc vàng của Kỹ thuật viên:</strong> Không gõ tay số thứ tự hoặc mã shop. Hãy dùng công thức để khi chèn thêm dòng mới hoặc xóa dòng cũ, toàn bộ hệ thống số tự động điều chỉnh mà không bị đứt đoạn!
          </div>

          <div className="space-y-5">
            {sheetsFormulas.map((f) => (
              <div key={f.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      Công thức #{f.id}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      {f.name}
                    </h3>
                  </div>
                  <CopyButton textToCopy={f.formula} label="Sao chép công thức" variant="primary" />
                </div>

                {/* Formula Box */}
                <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm shadow-inner border border-slate-800 overflow-x-auto">
                  {f.formula}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <p><strong className="text-slate-800">Vị trí nhập:</strong> {f.targetCell}</p>
                    <p><strong className="text-slate-800">Giải thích logic:</strong> {f.description}</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                    <p><strong className="text-slate-800">Ví dụ đầu vào:</strong> {f.sampleInput}</p>
                    <p className="text-emerald-700 font-bold"><strong className="text-slate-800 font-normal">Kết quả trả về:</strong> {f.sampleOutput}</p>
                    <p className="text-rose-700 font-mono text-[11px] pt-1">⚠️ Sửa lỗi: {f.commonErrorAndFix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Step-by-Step Setup */}
      {activeTab === 'setup' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <h3 className="text-lg font-bold text-slate-900">
            Hướng Dẫn Thiết Lập Bảng Tính Chuẩn Văn Phòng Từ A đến Z
          </h3>

          <div className="space-y-4">
            {sheetsSetupSteps.map((s, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-4.5 bg-slate-50/50 hover:bg-white transition-all space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-emerald-900">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 font-extrabold">
                    {idx + 1}
                  </span>
                  {s.step}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                  {s.action}
                </p>
                <div className="pl-8 text-xs text-amber-800 bg-amber-50/50 p-2 rounded-md border border-amber-100/60 font-medium">
                  💡 Mẹo hay: {s.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Security & Sharing */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Ma Trận Phân Quyền Chia Sẻ Trên Google Sheets
            </h3>
            <p className="text-xs text-slate-500">
              Nguyên tắc tối thiểu đặc quyền (Least Privilege) giúp bảo vệ thông tin khách hàng và tránh xóa nhầm dữ liệu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {sharingAndProtectionGuide.roles.map((r, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl p-4 space-y-2 bg-slate-50/50">
                  <div className="font-bold text-slate-900 text-sm text-emerald-900">{r.role}</div>
                  <div className="text-xs font-semibold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded-md inline-block">
                    Đối tượng: {r.who}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {r.permission}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-600" /> 3 Biện Pháp Bảo Vệ Dữ Liệu & Quy Trình Sao Lưu Hàng Tuần
            </h3>

            <div className="space-y-4">
              {sharingAndProtectionGuide.protectionTips.map((tip, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {tip.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {tip.detail}
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
