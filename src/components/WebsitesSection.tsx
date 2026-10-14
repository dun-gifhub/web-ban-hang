import React, { useState } from 'react';
import { 
  Globe, 
  Check, 
  X, 
  ExternalLink, 
  Sparkles, 
  Award, 
  HelpCircle, 
  Layers, 
  ArrowRight,
  Code2,
  CheckCircle2,
  Flame
} from 'lucide-react';
import { 
  websitePlatforms, 
  platformComparisonTable, 
  platformRecommendationSummary 
} from '../data/websitePlatformsGuide';
import { CopyButton } from './CopyButton';

export const WebsitesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'platforms' | 'compare' | 'quiz' | 'recommendation'>('platforms');
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('google_sites');

  // Quiz state
  const [quizPurpose, setQuizPurpose] = useState<'directory' | 'landing' | 'blog' | 'complex'>('directory');
  const [quizSkill, setQuizSkill] = useState<'zero' | 'dragdrop' | 'code'>('zero');
  const [quizCustomDomain, setQuizCustomDomain] = useState<'yes' | 'no'>('yes');

  const getQuizRecommendation = () => {
    if (quizSkill === 'code') {
      return {
        platform: 'GitHub Pages',
        tagline: '100% miễn phí vĩnh viễn, không quảng cáo, tốc độ cao nhất và cho phép gắn tên miền riêng miễn phí!'
      };
    }
    if (quizPurpose === 'landing') {
      return {
        platform: 'Canva Websites',
        tagline: 'Giao diện bắt mắt nhất, thiết kế đẹp xuất sắc chỉ sau 15 phút kéo thả đồ họa!'
      };
    }
    if (quizPurpose === 'blog') {
      return {
        platform: 'WordPress.com',
        tagline: 'Tối ưu bài viết tin tức, cẩm nang và quản lý chuyên mục chuyên sâu.'
      };
    }
    return {
      platform: 'Google Sites (Lựa chọn tối ưu nhất)',
      tagline: 'Tích hợp mượt mà Google Sheets, Forms, 100% không quảng cáo và gắn được tên miền riêng hoàn toàn MIỄN PHÍ!'
    };
  };

  const selectedPlatform = websitePlatforms.find(p => p.id === selectedPlatformId) || websitePlatforms[0];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-800 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs mb-3">
            <Globe className="w-3.5 h-3.5" /> PHẦN V • 5 GIẢI PHÁP TẠO WEBSITE MIỄN PHÍ CHO NGƯỜI MỚI
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Đánh Giá Sâu 5 Nền Tảng Tạo Website 0 Đồng & Bảng So Sánh Chi Tiết
          </h2>
          <p className="mt-2 text-teal-100 text-sm lg:text-base leading-relaxed">
            Phân tích khách quan tình trạng gói miễn phí, đường link chính thức, ưu nhược điểm, giới hạn quảng cáo và hướng dẫn 5 bước khởi tạo từ Google Sites, Canva, WordPress, Wix đến GitHub Pages.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('platforms')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'platforms'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Chi Tiết 5 Nền Tảng
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'compare'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bảng So Sánh Tổng Hợp
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Trắc Nghiệm Chọn Nền Tảng Nhanh
          </button>
          <button
            onClick={() => setActiveTab('recommendation')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'recommendation'
                ? 'bg-white text-teal-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Đề Xuất Chuyên Gia
          </button>
        </div>
      </div>

      {/* Tab 1: 5 Platforms In-Depth */}
      {activeTab === 'platforms' && (
        <div className="space-y-6">
          {/* Platform Pills */}
          <div className="flex flex-wrap gap-2">
            {websitePlatforms.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatformId(p.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedPlatformId === p.id
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>{p.name.split('. ')[1]}</span>
                <span className="text-[10px] opacity-80 font-normal">({p.officeSuitabilityScore}/10)</span>
              </button>
            ))}
          </div>

          {/* Selected Platform Detail Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    {selectedPlatform.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Điểm phù hợp văn phòng: <strong className="text-slate-800">{selectedPlatform.officeSuitabilityScore}/10</strong>
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {selectedPlatform.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 italic">
                  {selectedPlatform.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedPlatform.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs transition-all"
                >
                  Truy cập chính thức <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pros & Cons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4.5 space-y-3">
                <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ưu điểm vượt trội:
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  {selectedPlatform.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4.5 space-y-3">
                <h4 className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                  <X className="w-4 h-4 text-rose-600" /> Hạn chế & Giới hạn gói miễn phí:
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  {selectedPlatform.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Domain & Coding Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block text-slate-500">
                  Yêu cầu lập trình
                </span>
                <span className="font-bold text-slate-900 text-sm block">
                  {selectedPlatform.codingRequired}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  Phù hợp cho: {selectedPlatform.targetAudience}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block text-slate-500">
                  Tên miền miễn phí
                </span>
                <span className="font-mono text-indigo-700 font-semibold block text-xs truncate" title={selectedPlatform.domainInfo.freeDomain}>
                  {selectedPlatform.domainInfo.freeDomain}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  Tên miền riêng: {selectedPlatform.domainInfo.customDomainSupport}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
                <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block text-slate-500">
                  Loại website phù hợp nhất
                </span>
                <span className="font-semibold text-slate-900 block text-xs">
                  {selectedPlatform.bestFor}
                </span>
              </div>
            </div>

            {/* 5 Initial Steps */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-600" /> 5 Bước Khởi Đầu Từ Đăng Ký Đến Xuất Bản Website:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {selectedPlatform.initialSteps.map((st, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-extrabold text-teal-700 uppercase tracking-wider">
                        {st.step}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed mt-1">
                        {st.instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Comparison Table */}
      {activeTab === 'compare' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-900 text-white font-bold text-sm flex items-center justify-between">
              <span>Bảng Ma Trận So Sánh 5 Nền Tảng Website Miễn Phí (Cập nhật 2026)</span>
              <CopyButton 
                textToCopy={platformComparisonTable.map(r => `${r.criterion} | Google Sites: ${r.googleSites} | Canva: ${r.canvaWeb} | WordPress: ${r.wordPressCom} | Wix: ${r.wix} | GitHub: ${r.githubPages}`).join('\n')} 
                label="Sao chép bảng so sánh" 
                variant="secondary" 
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5 min-w-[160px]">Tiêu chí đánh giá</th>
                    <th className="p-3.5 min-w-[140px] text-teal-900 bg-teal-50/50 font-extrabold">1. Google Sites</th>
                    <th className="p-3.5 min-w-[140px] text-purple-900 bg-purple-50/30">2. Canva Websites</th>
                    <th className="p-3.5 min-w-[140px]">3. WordPress.com</th>
                    <th className="p-3.5 min-w-[140px]">4. Wix.com</th>
                    <th className="p-3.5 min-w-[140px]">5. GitHub Pages</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {platformComparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3.5 font-bold text-slate-800">{row.criterion}</td>
                      <td className="p-3.5 font-medium text-teal-950 bg-teal-50/20">{row.googleSites}</td>
                      <td className="p-3.5 text-purple-950 bg-purple-50/10">{row.canvaWeb}</td>
                      <td className="p-3.5 text-slate-700">{row.wordPressCom}</td>
                      <td className="p-3.5 text-slate-700">{row.wix}</td>
                      <td className="p-3.5 text-slate-700">{row.githubPages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Quiz */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-600" /> Trắc Nghiệm Tìm Nền Tảng Website Phù Hợp Nhất
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Trả lời 3 câu hỏi nhanh dưới đây để hệ thống tự động gợi ý giải pháp tốt nhất cho văn phòng của bạn.
            </p>
          </div>

          <div className="space-y-4">
            {/* Question 1 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <label className="text-xs font-bold text-slate-800 block">
                1. Mục đích chính khi bạn xây dựng website là gì?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setQuizPurpose('directory')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizPurpose === 'directory'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  📋 Làm Danh bạ Shop & Nhúng Sheets
                </button>
                <button
                  onClick={() => setQuizPurpose('landing')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizPurpose === 'landing'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  🎨 Landing page sự kiện / Ảnh đẹp
                </button>
                <button
                  onClick={() => setQuizPurpose('blog')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizPurpose === 'blog'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  📰 Viết blog tin tức & Review shop
                </button>
                <button
                  onClick={() => setQuizPurpose('complex')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizPurpose === 'complex'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  💼 Website doanh nghiệp nhiều tính năng
                </button>
              </div>
            </div>

            {/* Question 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <label className="text-xs font-bold text-slate-800 block">
                2. Khả năng kỹ thuật và thời gian của bạn thế nào?
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => setQuizSkill('zero')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizSkill === 'zero'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  Chưa biết gì, muốn đơn giản như Word
                </button>
                <button
                  onClick={() => setQuizSkill('dragdrop')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizSkill === 'dragdrop'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  Thích kéo thả đồ họa đẹp mắt
                </button>
                <button
                  onClick={() => setQuizSkill('code')}
                  className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                    quizSkill === 'code'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  Biết sơ qua về HTML/CSS/Code
                </button>
              </div>
            </div>

            {/* Recommendation Result */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl p-5 shadow-sm space-y-2">
              <div className="text-xs uppercase font-extrabold tracking-wider text-teal-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Nền tảng phù hợp nhất dành riêng cho bạn:
              </div>
              <div className="text-xl font-black">
                {getQuizRecommendation().platform}
              </div>
              <p className="text-xs text-teal-100 leading-relaxed">
                {getQuizRecommendation().tagline}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Expert Recommendation */}
      {activeTab === 'recommendation' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border-2 border-teal-500 shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  LỰA CHỌN SỐ 1 CHO NGƯỜI MỚI BẮT ĐẦU
                </span>
                <Award className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                {platformRecommendationSummary.bestForBeginners.platform}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {platformRecommendationSummary.bestForBeginners.reason}
              </p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://sites.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:underline"
                >
                  Mở Google Sites ngay <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  LỰA CHỌN SỐ 1 CHO THẨM MỸ HÌNH ẢNH
                </span>
                <Flame className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                {platformRecommendationSummary.bestForVisuals.platform}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {platformRecommendationSummary.bestForVisuals.reason}
              </p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://www.canva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:underline"
                >
                  Khám phá Canva Websites <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-3">
            <h4 className="text-base font-bold text-amber-400">
              🚀 Lộ trình nâng cấp chuyên nghiệp khi cộng đồng mở rộng:
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {platformRecommendationSummary.professionalUpgradePath.reason}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
