import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertCircle, 
  Share2, 
  ExternalLink, 
  MessageSquare, 
  Sliders, 
  HelpCircle,
  Eye,
  Check
} from 'lucide-react';
import { 
  formFields, 
  formIntroduction, 
  formConfirmationMessage, 
  sharingMessageTemplates, 
  commonFormErrorsAndFixes, 
  stepByStepFormsSetup 
} from '../data/googleFormsGuide';
import { CopyButton } from './CopyButton';

export const FormsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schema' | 'intro' | 'sharing' | 'errors' | 'steps' | 'preview'>('schema');
  
  // Interactive mini preview state
  const [previewShopName, setPreviewShopName] = useState('Tiệm Bánh Mẹ Cốm');
  const [previewOwner, setPreviewOwner] = useState('Đặng Thu Trang');
  const [previewPhone, setPreviewPhone] = useState('0971223344');
  const [previewCategory, setPreviewCategory] = useState('Ẩm thực, Đồ ăn vặt & Đồ uống');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-violet-800 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/30 text-purple-100 text-xs font-semibold backdrop-blur-xs mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" /> PHẦN II • THU THẬP THÔNG TIN SHOP QUA GOOGLE FORMS
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Xây Dựng Biểu Mẫu Google Forms Thu Thập Dữ Liệu Shop Chuẩn Hóa
          </h2>
          <p className="mt-2 text-purple-100 text-sm lg:text-base leading-relaxed">
            Thiết kế cấu trúc 9 trường dữ liệu chuẩn, thiết lập quy tắc kiểm tra số điện thoại (Regex), mở quyền truy cập không bị giới hạn tổ chức và tự động đồng bộ thời gian thực sang Google Sheets.
          </p>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'schema'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Bảng 9 Trường Thông Tin Chuẩn
          </button>
          <button
            onClick={() => setActiveTab('intro')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'intro'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Mẫu Lời Giới Thiệu & Bảo Mật
          </button>
          <button
            onClick={() => setActiveTab('sharing')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'sharing'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Mẫu Tin Nhắn Gửi Link (Zalo/SMS)
          </button>
          <button
            onClick={() => setActiveTab('errors')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'errors'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            4 Lỗi Thường Gặp & Cách Khắc Phục
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'steps'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Quy Trình 6 Bước Tạo Form
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Trình Mô Phỏng Điền Form
          </button>
        </div>
      </div>

      {/* Tab 1: Schema Table */}
      {activeTab === 'schema' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Bảng Thiết Kế Cấu Trúc 9 Trường Dữ Liệu Google Forms
              </h3>
              <p className="text-xs text-slate-500">
                Chỉ rõ loại câu hỏi, trạng thái bắt buộc, xác thực regex và gợi ý mô tả.
              </p>
            </div>
            <CopyButton 
              textToCopy={formFields.map(f => `${f.fieldName} | ${f.questionType} | ${f.isRequired ? 'BẮT BUỘC' : 'Tùy chọn'} | Gợi ý: ${f.descriptionHint} ${f.validationRule ? `| Quy tắc: ${f.validationRule}` : ''}`).join('\n')} 
              label="Sao chép toàn bộ danh sách trường" 
              variant="outline" 
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">STT</th>
                    <th className="p-3.5">Tên trường câu hỏi</th>
                    <th className="p-3.5">Loại câu hỏi trên Form</th>
                    <th className="p-3.5">Trạng thái</th>
                    <th className="p-3.5">Xác thực / Gợi ý mô tả</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {formFields.map((field) => (
                    <tr key={field.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-3.5 font-bold text-slate-400">{field.id}</td>
                      <td className="p-3.5 font-semibold text-slate-900">
                        {field.fieldName}
                        <div className="text-xs font-normal text-slate-500 mt-0.5">
                          {field.rationale}
                        </div>
                      </td>
                      <td className="p-3.5 font-mono text-xs text-indigo-700 bg-indigo-50/30">
                        {field.questionType}
                        {field.options && (
                          <div className="mt-1 text-[11px] text-slate-500">
                            (Gồm {field.options.length} tùy chọn ngành hàng)
                          </div>
                        )}
                      </td>
                      <td className="p-3.5">
                        {field.isRequired ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700">
                            Bắt buộc (*)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                            Không bắt buộc
                          </span>
                        )}
                      </td>
                      <td className="p-3.5 text-xs text-slate-600 space-y-1">
                        <p><strong className="text-slate-800">Mô tả:</strong> {field.descriptionHint}</p>
                        {field.validationRule && (
                          <p className="text-amber-800 bg-amber-50 p-1.5 rounded-md border border-amber-200/60 font-mono text-[11px]">
                            ⚙️ {field.validationRule}
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Introduction & Privacy */}
      {activeTab === 'intro' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-purple-600" /> Mẫu Lời Giới Thiệu Biểu Mẫu & Cam Kết Bảo Mật
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Dán vào ô "Mô tả biểu mẫu" ngay dưới tiêu đề Google Forms.
                </p>
              </div>
              <CopyButton textToCopy={formIntroduction} label="Sao chép lời giới thiệu" variant="primary" />
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto border border-slate-800">
              {formIntroduction}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-800 text-sm">
                  Mẫu Thông Báo Xác Nhận Nộp Thành Công (Thư cảm ơn)
                </h4>
                <CopyButton textToCopy={formConfirmationMessage} label="Sao chép thư cảm ơn" variant="secondary" />
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 whitespace-pre-wrap">
                {formConfirmationMessage}
              </div>
              <p className="text-xs text-slate-500">
                📌 Vị trí cài đặt: Tab <strong>Cài đặt (Settings)</strong> trên Google Forms &rarr; Mục <strong>Bản trình bày (Presentation)</strong> &rarr; Bấm <strong>Chỉnh sửa</strong> tại mục 'Thư xác nhận'.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sharing Messages */}
      {activeTab === 'sharing' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {sharingMessageTemplates.map((msg, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-slate-800 text-sm sm:text-base">{msg.channel}</span>
                    <span className="text-xs text-slate-500 italic">({msg.title})</span>
                  </div>
                  <CopyButton textToCopy={msg.content} label="Sao chép tin nhắn" variant="primary" />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Errors and Fixes */}
      {activeTab === 'errors' && (
        <div className="space-y-6">
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-rose-900 text-sm">
            <span className="font-bold">⚠️ Lưu ý của Kỹ thuật viên:</span> Hơn 80% trường hợp người dùng phàn nàn không nộp được form là do lỗi quyền truy cập tổ chức hoặc mất số 0 ở số điện thoại. Dưới đây là hướng dẫn xử lý triệt để!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonFormErrorsAndFixes.map((err, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{err.error}</h4>
                    <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md inline-block mt-1">
                      Mức độ: {err.severity}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                  <p><strong className="text-slate-800">Nguyên nhân:</strong> {err.cause}</p>
                  <p className="text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 font-medium">
                    🛠️ <strong>Cách khắc phục:</strong> {err.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Steps */}
      {activeTab === 'steps' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <h3 className="text-lg font-bold text-slate-900">
            Quy Trình 6 Bước Tạo Biểu Mẫu & Tự Động Kết Nối Google Sheets
          </h3>

          <div className="space-y-4">
            {stepByStepFormsSetup.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-4.5 bg-slate-50/50 hover:bg-white transition-all space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-purple-900">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-xs shrink-0 font-extrabold">
                    {idx + 1}
                  </span>
                  {item.step}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
                  {item.action}
                </p>
                <div className="pl-8 text-xs text-slate-500 italic">
                  💡 Ghi chú kỹ thuật: {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: Interactive Preview */}
      {activeTab === 'preview' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-600" /> Trình Mô Phỏng Điền Biểu Mẫu Thực Tế
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Xem trải nghiệm của chủ shop khi điền form trên giao diện Google Forms.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-purple-600 font-semibold hover:underline"
            >
              Làm mới biểu mẫu
            </button>
          </div>

          {!submitted ? (
            <div className="max-w-2xl mx-auto border border-purple-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="h-4 bg-purple-700"></div>
              <div className="p-6 space-y-6 bg-purple-50/30">
                <div className="border-b border-purple-100 pb-4">
                  <h4 className="text-xl font-bold text-slate-900">
                    Đăng Ký Thông Tin Shop & Đối Tác Thành Viên 2026
                  </h4>
                  <p className="text-xs text-slate-600 mt-2">
                    Cộng đồng Quản lý Shop & Giao thương Văn phòng • Dấu (*) là trường bắt buộc.
                  </p>
                </div>

                {/* Question 1 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-800">
                    1. Tên Shop / Thương hiệu <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={previewShopName}
                    onChange={(e) => setPreviewShopName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-hidden"
                  />
                </div>

                {/* Question 2 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-800">
                    2. Tên người đại diện / Chủ shop <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={previewOwner}
                    onChange={(e) => setPreviewOwner(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-hidden"
                  />
                </div>

                {/* Question 3 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-800">
                    3. Số điện thoại liên hệ (Ưu tiên Zalo) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={previewPhone}
                    onChange={(e) => setPreviewPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-hidden"
                  />
                  <span className="text-[11px] text-slate-400">Định dạng đúng 10 chữ số (Bắt đầu bằng 0).</span>
                </div>

                {/* Question 6 */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <label className="text-xs font-bold text-slate-800">
                    6. Danh mục sản phẩm kinh doanh <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={previewCategory}
                    onChange={(e) => setPreviewCategory(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 outline-hidden bg-white"
                  >
                    <option>Thời trang & Phụ kiện may mặc</option>
                    <option>Ẩm thực, Đồ ăn vặt & Đồ uống</option>
                    <option>Mỹ phẩm & Chăm sóc sắc đẹp</option>
                    <option>Thiết bị số & Phụ kiện công nghệ</option>
                    <option>Đồ gia dụng & Tiện ích gia đình</option>
                  </select>
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-sm transition-all shadow-sm cursor-pointer"
                >
                  Gửi thông tin đăng ký
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Câu trả lời của bạn đã được ghi lại!
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {formConfirmationMessage}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-white text-emerald-700 border border-emerald-300 font-semibold rounded-lg text-xs hover:bg-emerald-100 cursor-pointer"
                >
                  Gửi phản hồi khác
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
