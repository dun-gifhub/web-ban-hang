import React, { useState } from 'react';
import { 
  Users, 
  FileSpreadsheet, 
  Table2, 
  Megaphone, 
  Globe, 
  Calendar, 
  CheckSquare2, 
  Search, 
  Printer, 
  Menu, 
  X, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  BookOpen,
  ArrowUpRight,
  SlidersHorizontal,
  Bookmark,
  Cpu,
  Server
} from 'lucide-react';
import { FacebookSection } from './components/FacebookSection';
import { FormsSection } from './components/FormsSection';
import { SheetsSection } from './components/SheetsSection';
import { ContentAndCommentsSection } from './components/ContentAndCommentsSection';
import { WebsitesSection } from './components/WebsitesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { FinalToolkitSection } from './components/FinalToolkitSection';
import { TechOpsHubSection } from './components/TechOpsHubSection';
import { RailwayDeploymentSection } from './components/RailwayDeploymentSection';
import { CopyButton } from './components/CopyButton';

type SectionKey = 'railway' | 'techops' | 'overview' | 'facebook' | 'forms' | 'sheets' | 'content' | 'websites' | 'roadmap' | 'toolkit';

interface NavItem {
  id: SectionKey;
  label: string;
  shortLabel: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  desc: string;
}

const navItems: NavItem[] = [
  {
    id: 'railway',
    label: 'Triển Khai Railway + Neon PostgreSQL',
    shortLabel: '🚀 Railway + Neon DB',
    badge: 'Production DevOps',
    icon: Server,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    desc: 'Cấu hình Railway, chuỗi kết nối Neon SSL pooling, healthcheck, migration và kiểm thử API'
  },
  {
    id: 'techops',
    label: 'Thành Viên 2: Kỹ Thuật & Vận Hành',
    shortLabel: '⭐ Thành Viên 2: TechOps',
    badge: '6 Nhiệm vụ chính',
    icon: Cpu,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    desc: 'Bộ công cụ vận hành tuần đầu: Forms khiếu nại, Sheets 3 tab, Drive 7 mục, SOP-01, Bảo mật 11 mục'
  },
  {
    id: 'overview',
    label: 'Tổng Quan Hệ Thống',
    shortLabel: 'Tổng quan',
    badge: 'Bắt đầu',
    icon: BookOpen,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    desc: 'Bản đồ tổng thể quy trình và các công cụ số'
  },
  {
    id: 'facebook',
    label: 'Phần I: Nhóm Facebook',
    shortLabel: 'I. Nhóm Facebook',
    badge: '7 Nội quy',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    desc: '3 tên nhóm, mô tả, 7 quy tắc, chào mừng, quyền riêng tư'
  },
  {
    id: 'forms',
    label: 'Phần II: Google Forms',
    shortLabel: 'II. Google Forms',
    badge: '9 Trường dữ liệu',
    icon: FileSpreadsheet,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    desc: 'Biểu mẫu thu thập thông tin shop, regex SĐT, link Sheets'
  },
  {
    id: 'sheets',
    label: 'Phần III: Google Sheets Master',
    shortLabel: 'III. Google Sheets',
    badge: '14 Cột • 5 Hàm',
    icon: Table2,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    desc: 'Cơ sở dữ liệu tập trung, tự động STT/Mã shop, tra cứu'
  },
  {
    id: 'content',
    label: 'Phần IV: Bài Đăng & CSKH',
    shortLabel: 'IV. Đăng Bài & CSKH',
    badge: '3 Bài • 10 Kịch bản',
    icon: Megaphone,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    desc: 'SOP duyệt bài, xem trước Facebook, 10 mẫu bình luận'
  },
  {
    id: 'websites',
    label: 'Phần V: 5 Website Miễn Phí',
    shortLabel: 'V. 5 Nền Tảng Web',
    badge: 'Google Sites #1',
    icon: Globe,
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    desc: 'So sánh Google Sites, Canva, WordPress, Wix, GitHub'
  },
  {
    id: 'roadmap',
    label: 'Phần VI: Kế Hoạch 7 Ngày',
    shortLabel: 'VI. Lộ Trình 7 Ngày',
    badge: 'Thực chiến',
    icon: Calendar,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
    desc: 'Checklist chi tiết từ Ngày 1 đến Ngày 7 có lưu tiến độ'
  },
  {
    id: 'toolkit',
    label: 'Tổng Kết: RACI & Vận Hành',
    shortLabel: 'Tổng Kết & RACI',
    badge: '25 Audit Check',
    icon: CheckSquare2,
    color: 'text-slate-800 bg-slate-100 border-slate-200',
    desc: 'Hạ tầng tài khoản, Master checklist, phân quyền RACI'
  }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionKey>('railway');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const currentNav = navItems.find(n => n.id === currentSection) || navItems[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Mở Menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div 
              onClick={() => setCurrentSection('overview')}
              className="flex items-center gap-2.5 cursor-pointer select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-black shadow-xs text-base">
                VK
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight flex items-center gap-1.5">
                  Trợ Lý Kỹ Thuật Viên Văn Phòng
                  <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Sổ Tay 2026
                  </span>
                </h1>
                <p className="text-[11px] text-slate-500 hidden sm:block truncate max-w-md">
                  Quản lý nhóm Facebook • Google Forms • Sheets • Bài đăng & Web miễn phí
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions & Search */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Sẵn sàng áp dụng thực tế
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all cursor-pointer shadow-2xs"
              title="In hoặc lưu file PDF cẩm nang"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">In sổ tay / PDF</span>
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Pills (Desktop & Tablet) */}
        <div className="border-t border-slate-100 bg-slate-50/70 overflow-x-auto scrollbar-none hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 py-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  currentSection === item.id
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <item.icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs flex no-print">
          <div className="w-4/5 max-w-xs bg-white h-full p-4 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="font-bold text-sm text-slate-900">Mục Lục Hướng Dẫn</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                      currentSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center">
              Trợ Lý Kỹ Thuật Viên Văn Phòng • 2026
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Print-Only Header */}
        <div className="hidden print-only mb-6 border-b-2 border-slate-800 pb-4">
          <h1 className="text-2xl font-black text-black">
            TRỢ LÝ KỸ THUẬT VIÊN VĂN PHÒNG – QUẢN LÝ NHÓM, SHOP VÀ WEBSITE MIỄN PHÍ
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Tài liệu hướng dẫn nghiệp vụ chuẩn hóa • Xuất bản nội bộ năm 2026
          </p>
        </div>

        {/* Tab 0: Overview Dashboard */}
        {currentSection === 'overview' && (
          <div className="space-y-8">
            {/* Hero Welcome */}
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> CẨM NANG NGHIỆP VỤ & BỘ CÔNG CỤ SỐ THỰC CHIẾN
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                  Trợ Lý Kỹ Thuật Viên Văn Phòng
                  <span className="block text-blue-200 text-xl sm:text-2xl font-bold mt-1">
                    Quản Lý Nhóm Facebook, Thu Thập Shop, Google Sheets & Tạo Website Miễn Phí
                  </span>
                </h2>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Chào mừng bạn! Đây là hệ thống cẩm nang và công cụ hỗ trợ toàn diện dành riêng cho kỹ thuật viên văn phòng và trợ lý quản lý nội dung số. Thiết kế thân thiện cho người mới bắt đầu, không yêu cầu viết code, có sẵn toàn bộ mẫu văn bản sao chép ngay, công thức tự động hóa và kế hoạch 7 ngày triển khai.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setCurrentSection('facebook')}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    Bắt đầu với Phần I (Nhóm Facebook) <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSection('roadmap')}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all backdrop-blur-xs flex items-center gap-2 cursor-pointer"
                  >
                    Xem Lộ Trình 7 Ngày <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Decorative Background Accents */}
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute right-12 top-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Quick Navigation Cards Grid (6 Modules) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">
                  Lựa Chọn Chuyên Đề Cần Thao Tác:
                </h3>
                <span className="text-xs text-slate-500">6 Phần nghiệp vụ + 1 Phần tổng kết</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {navItems.filter(n => n.id !== 'overview').map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold border ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                        {item.label}
                      </h4>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                      <span>Mở chuyên đề</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Architecture Overview (Infographic Flow) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-indigo-600" /> Sơ Đồ Luồng Vận Hành Dữ Liệu Tự Động (Data Pipeline)
              </h3>
              <p className="text-xs text-slate-500">
                Toàn bộ hệ thống liên kết chặt chẽ với nhau khép kín chỉ bằng các công cụ 0 đồng:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-blue-900 text-sm">Bước 1: Facebook Group</div>
                  <p className="text-slate-600">Thành viên tham gia, đọc nội quy, trả lời 3 câu hỏi sàng lọc. Chủ shop lấy link biểu mẫu Google Forms.</p>
                </div>
                <div className="bg-purple-50/60 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-purple-900 text-sm">Bước 2: Google Forms</div>
                  <p className="text-slate-600">Shop điền 9 trường dữ liệu bắt buộc (SĐT regex 10 số, địa chỉ, danh mục). Tự động đẩy dữ liệu sang Sheets.</p>
                </div>
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-emerald-900 text-sm">Bước 3: Google Sheets</div>
                  <p className="text-slate-600">Hệ thống tự động sinh Mã Shop (SHOP-xxx), đánh STT, phân công nhân sự trực và kiểm duyệt hồ sơ.</p>
                </div>
                <div className="bg-teal-50/60 border border-teal-200 rounded-xl p-4 text-xs space-y-2">
                  <div className="font-bold text-teal-900 text-sm">Bước 4: Web & Duyệt Bài</div>
                  <p className="text-slate-600">Danh bạ shop tự động cập nhật lên Google Sites; Kỹ thuật viên duyệt bài Facebook theo checklist 6 điểm.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Railway + Neon Deployment Hub */}
        {currentSection === 'railway' && <RailwayDeploymentSection />}

        {/* Member 2: TechOps Hub Section */}
        {currentSection === 'techops' && <TechOpsHubSection />}

        {/* Section 1: Facebook */}
        {currentSection === 'facebook' && <FacebookSection />}

        {/* Section 2: Forms */}
        {currentSection === 'forms' && <FormsSection />}

        {/* Section 3: Sheets */}
        {currentSection === 'sheets' && <SheetsSection />}

        {/* Section 4: Content & Comments */}
        {currentSection === 'content' && <ContentAndCommentsSection />}

        {/* Section 5: Websites */}
        {currentSection === 'websites' && <WebsitesSection />}

        {/* Section 6: Roadmap */}
        {currentSection === 'roadmap' && <RoadmapSection />}

        {/* Section 7: Final Toolkit */}
        {currentSection === 'toolkit' && <FinalToolkitSection />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 no-print mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Trợ Lý Kỹ Thuật Viên Văn Phòng</span>
            <span>•</span>
            <span>Hệ Thống Quản Lý Nhóm, Shop & Website Miễn Phí</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Phiên bản 2026</span>
            <span>•</span>
            <span>Tuân thủ Nghị định 13/2023/NĐ-CP</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
