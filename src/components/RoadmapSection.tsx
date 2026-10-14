import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  Award, 
  RotateCcw, 
  CheckSquare, 
  FileCheck2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { sevenDayRoadmap, DailyPlanItem } from '../data/implementationPlanGuide';
import { CopyButton } from './CopyButton';

export const RoadmapSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('OFFICE_ASSISTANT_ROADMAP_TASKS');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('OFFICE_ASSISTANT_ROADMAP_TASKS', JSON.stringify(checkedTasks));
    } catch {
      // ignore
    }
  }, [checkedTasks]);

  const toggleTask = (taskId: string) => {
    setCheckedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const resetAllTasks = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ 7 ngày không?')) {
      setCheckedTasks({});
    }
  };

  // Calculate total progress
  const allTaskIds = sevenDayRoadmap.flatMap(d => d.checklistItems.map(i => i.id));
  const completedCount = allTaskIds.filter(id => checkedTasks[id]).length;
  const progressPercent = Math.round((completedCount / allTaskIds.length) * 100);

  const currentDayData = sevenDayRoadmap.find(d => d.dayNumber === selectedDay) || sevenDayRoadmap[0];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-700 via-indigo-700 to-blue-900 text-white rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs mb-3">
            <Calendar className="w-3.5 h-3.5" /> PHẦN VI • KẾ HOẠCH TRIỂN KHAI THỰC CHIẾN 7 NGÀY
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
            Lộ Trình Triển Khai Toàn Diện Hệ Thống Quản Lý Shop Trong 7 Ngày
          </h2>
          <p className="mt-2 text-sky-100 text-sm lg:text-base leading-relaxed">
            Phân bổ khối lượng công việc từng ngày, sáng làm gì, chiều làm gì, kết quả nghiệm thu cần đạt và danh sách kiểm tra tương tác giúp kỹ thuật viên không bị bỏ sót bất kỳ hạng mục nào.
          </p>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-6 pt-5 border-t border-white/20 space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Tiến độ hoàn thành hệ thống:
            </span>
            <span className="font-mono font-bold text-emerald-300">
              {completedCount} / {allTaskIds.length} mục ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* 7 Days Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {sevenDayRoadmap.map((day) => {
          const dayTaskIds = day.checklistItems.map(i => i.id);
          const dayDoneCount = dayTaskIds.filter(id => checkedTasks[id]).length;
          const isAllDone = dayDoneCount === dayTaskIds.length;

          return (
            <button
              key={day.dayNumber}
              onClick={() => setSelectedDay(day.dayNumber)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedDay === day.dayNumber
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black uppercase ${selectedDay === day.dayNumber ? 'text-blue-100' : 'text-blue-600'}`}>
                    {day.dayTitle}
                  </span>
                  {isAllDone && (
                    <CheckCircle2 className={`w-3.5 h-3.5 ${selectedDay === day.dayNumber ? 'text-emerald-300' : 'text-emerald-600'}`} />
                  )}
                </div>
                <div className={`text-xs font-bold mt-1 line-clamp-2 leading-tight ${selectedDay === day.dayNumber ? 'text-white' : 'text-slate-800'}`}>
                  {day.theme.split('&')[0]}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100/30 text-[10px] flex items-center justify-between opacity-80">
                <span>{day.estimatedHours}</span>
                <span className="font-bold">{dayDoneCount}/{dayTaskIds.length}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Day Detail Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 lg:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                LỘ TRÌNH {currentDayData.dayTitle.toUpperCase()}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" /> Thời lượng ước tính: {currentDayData.estimatedHours}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-black text-slate-900 mt-2">
              {currentDayData.theme}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>Mục tiêu trọng tâm:</strong> {currentDayData.coreObjective}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <CopyButton 
              textToCopy={`${currentDayData.dayTitle}: ${currentDayData.theme}\nMục tiêu: ${currentDayData.coreObjective}\n\nSÁNG:\n${currentDayData.morningTasks.map(t => `- ${t}`).join('\n')}\n\nCHIỀU:\n${currentDayData.afternoonTasks.map(t => `- ${t}`).join('\n')}\n\nKẾT QUẢ ĐẠT ĐƯỢC:\n${currentDayData.deliverables.map(d => `- ${d}`).join('\n')}\n\nCHECKLIST:\n${currentDayData.checklistItems.map(c => `[${checkedTasks[c.id] ? 'X' : ' '}] ${c.text}`).join('\n')}`} 
              label={`Sao chép kế hoạch ${currentDayData.dayTitle}`} 
              variant="primary" 
            />
          </div>
        </div>

        {/* Morning & Afternoon Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4.5 space-y-3">
            <div className="font-bold text-amber-900 text-sm flex items-center gap-2">
              ☀️ <span>Buổi Sáng: Nhiệm vụ chuẩn bị & Kỹ thuật</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              {currentDayData.morningTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4.5 space-y-3">
            <div className="font-bold text-blue-900 text-sm flex items-center gap-2">
              🌤️ <span>Buổi Chiều: Triển khai & Kiểm thử chi tiết</span>
            </div>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              {currentDayData.afternoonTasks.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables Box */}
        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
          <div className="font-bold text-emerald-900 text-xs sm:text-sm flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" /> Kết quả nghiệm thu bắt buộc (Deliverables):
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            {currentDayData.deliverables.map((del, idx) => (
              <div key={idx} className="bg-white p-2.5 rounded-lg border border-emerald-100 text-xs font-semibold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Checklist for this Day */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-blue-600" /> Danh Sách Kiểm Tra Đánh Dấu Tiến Độ {currentDayData.dayTitle}:
            </h4>
            <span className="text-xs text-slate-500 italic">
              (Bấm vào ô vuông để tích hoàn thành)
            </span>
          </div>

          <div className="space-y-2">
            {currentDayData.checklistItems.map((chk) => {
              const isDone = !!checkedTasks[chk.id];
              return (
                <div
                  key={chk.id}
                  onClick={() => toggleTask(chk.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isDone
                      ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                      isDone ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                    }`}>
                      {isDone && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className={`text-xs sm:text-sm font-medium ${isDone ? 'line-through text-slate-500' : ''}`}>
                      {chk.text}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 shrink-0">
                    {isDone ? 'Đã xong' : 'Chưa xong'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Mẹo thực chiến cho {currentDayData.dayTitle}:</strong> {currentDayData.proTips}
          </div>
        </div>

        {/* Footer Navigation between Days */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setSelectedDay(prev => Math.max(1, prev - 1))}
            disabled={selectedDay === 1}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Ngày trước
          </button>

          <button
            onClick={resetAllTasks}
            className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Đặt lại tiến độ
          </button>

          <button
            onClick={() => setSelectedDay(prev => Math.min(7, prev + 1))}
            disabled={selectedDay === 7}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Ngày tiếp theo →
          </button>
        </div>
      </div>
    </div>
  );
};
