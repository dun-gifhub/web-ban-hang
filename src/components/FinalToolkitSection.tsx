import React, { useState } from 'react';
import { 
  CheckSquare2, 
  Users2, 
  Wallet, 
  KeyRound, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Printer, 
  Copy, 
  HelpCircle,
  Clock,
  Layers
} from 'lucide-react';
import { 
  requiredAccountsAndTools, 
  masterAuditChecklist, 
  raciMatrixRoles, 
  zeroCostOperationGuide 
} from '../data/conclusionAndToolkit';
import { CopyButton } from './CopyButton';

export const FinalToolkitSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'accounts' | 'audit' | 'raci' | 'zerocost'>('accounts');
  const [auditChecked, setAuditChecked] = useState<Record<string, boolean>>({});

  const toggleAuditItem = (id: string) => {
    setAuditChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalAuditItems = masterAuditChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
  const totalAuditCompleted = Object.values(auditChecked).filter(Boolean).length;
  const auditPercent = Math.round((totalAuditCompleted / totalAuditItems) * 100);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-xs mb-3">
            <CheckSquare2 className="w-3.5 h-3.5 text-emerald-400" /> TỔNG KẾT • HẠ TẦNG TÀI KHOẢN, AUDIT & VẬN HÀNH 0 ĐỒNG
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Bộ Công Cụ & Bảng Phân Công Công Việc Vận Hành Dài Hạn
          </h2>
          <p className="mt-2 text-slate-300 text-sm lg:text-base leading-relaxed">
            Danh mục tài khoản cần chuẩn bị, Master Audit Checklist 25 tiêu chuẩn nghiệm thu, ma trận phân nhiệm RACI cho đội ngũ và cẩm nang duy trì hệ thống chi phí 0 đồng trọn đời.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('accounts')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'accounts'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            1. Tài Khoản & Công Cụ Cần Thiết
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'audit'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            2. Master Audit Checklist (25 Tiêu Chuẩn)
          </button>
          <button
            onClick={() => setActiveTab('raci')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'raci'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            3. Ma Trận Phân Công RACI
          </button>
          <button
            onClick={() => setActiveTab('zerocost')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'zerocost'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            4. Chiến Lược Vận Hành 0 Đồng
          </button>
        </div>
      </div>

      {/* Tab 1: Required Accounts & Tools */}
      {activeTab === 'accounts' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-indigo-600" /> Danh Sách Tài Khoản & Công Cụ Kỹ Thuật Cần Chuẩn Bị
              </h3>
              <p className="text-xs text-slate-500">
                Toàn bộ đều sử dụng gói miễn phí chính hãng, bảo mật cao và dễ chuyển giao.
              </p>
            </div>
            <CopyButton 
              textToCopy={requiredAccountsAndTools.map(t => `${t.name} (${t.category})\n- Mục đích: ${t.purpose}\n- Chi phí: ${t.cost}\n- Lưu ý: ${t.notes}`).join('\n\n')} 
              label="Sao chép danh mục tài khoản" 
              variant="outline" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {requiredAccountsAndTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                      {tool.category}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {tool.cost}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Công dụng:</strong> {tool.purpose}
                  </p>
                </div>

                <div className="text-[11px] text-amber-900 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/50">
                  ⚠️ <strong>Lưu ý:</strong> {tool.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Master Audit Checklist */}
      {activeTab === 'audit' && (
        <div className="space-y-6">
          {/* Audit Progress Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Nghiệm thu toàn bộ hệ thống
              </div>
              <div className="text-xl font-black text-slate-900 mt-1">
                {totalAuditCompleted} / {totalAuditItems} tiêu chuẩn đạt ({auditPercent}%)
              </div>
            </div>

            <div className="w-full sm:w-64 space-y-1.5">
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                  style={{ width: `${auditPercent}%` }}
                ></div>
              </div>
              <div className="text-[11px] text-slate-400 text-right">
                {auditPercent === 100 ? '🎉 Đã đạt chuẩn vận hành 100%!' : 'Tiếp tục kiểm tra các mục còn lại'}
              </div>
            </div>
          </div>

          {/* Checklist Categories */}
          <div className="space-y-6">
            {masterAuditChecklist.map((cat, catIdx) => (
              <div key={catIdx} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base border-b border-slate-100 pb-3 text-indigo-900">
                  {cat.category}
                </h4>

                <div className="space-y-2">
                  {cat.items.map((item, itemIdx) => {
                    const key = `${catIdx}_${itemIdx}`;
                    const isDone = !!auditChecked[key];
                    return (
                      <div
                        key={key}
                        onClick={() => toggleAuditItem(key)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isDone
                            ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                            : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                          }`}>
                            {isDone && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <span className={`text-xs sm:text-sm font-medium ${isDone ? 'line-through text-slate-400' : ''}`}>
                            {item}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-slate-400 shrink-0">
                          {isDone ? 'Đạt' : 'Chưa kiểm tra'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: RACI Matrix */}
      {activeTab === 'raci' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Users2 className="w-5 h-5 text-indigo-600" /> Bảng Phân Công Công Việc Đa Nhân Sự (RACI Matrix)
              </h3>
              <p className="text-xs text-slate-500">
                Phân định rõ ràng trách nhiệm để không bị chồng chéo hay đùn đẩy công việc.
              </p>
            </div>
            <CopyButton 
              textToCopy={raciMatrixRoles.map(r => `${r.roleName}\n- Chức năng: ${r.title}\n- Nhân sự: ${r.headcount}\n- Kỹ năng cần: ${r.requiredSkills}\n- Nhiệm vụ:\n${r.keyResponsibilities.map(k => `  + ${k}`).join('\n')}`).join('\n\n')} 
              label="Sao chép bảng RACI" 
              variant="outline" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {raciMatrixRoles.map((role, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-base text-indigo-900">
                      {role.roleName}
                    </span>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {role.headcount}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    🎯 {role.title}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-slate-700 block">Trách nhiệm cốt lõi:</span>
                    <ul className="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
                      {role.keyResponsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <strong>Yêu cầu kỹ năng:</strong> {role.requiredSkills}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Zero-Cost Operation Strategy */}
      {activeTab === 'zerocost' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-sm space-y-2">
            <div className="inline-flex items-center gap-1.5 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              <Wallet className="w-4 h-4" /> Triết lý vận hành
            </div>
            <h3 className="text-xl font-black">
              {zeroCostOperationGuide.philosophy}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Không cần xin ngân sách phần mềm hàng tháng, không cần chi phí máy chủ, vận hành mượt mà nhờ sự kết hợp tối ưu giữa Google Workspace miễn phí, Facebook Group và Canva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zeroCostOperationGuide.principles.map((pr, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {pr.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {pr.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
