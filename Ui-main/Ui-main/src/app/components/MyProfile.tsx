import { useState, useRef } from "react";
import { MoreHorizontal, Sparkles, HelpCircle, Heart, Map as MapIcon, Trophy, BookOpen, Settings2, ChevronRight } from "lucide-react";
import ipCharacter from "../../imports/图片人物提取与背景处理_(12)(1).png";

const alignmentTags = [
  { label: "测试", delta: 8, color: "from-rose-400 to-pink-500" },
  { label: "游戏", delta: 3, color: "from-violet-400 to-violet-500" },
  { label: "打卡", delta: 5, color: "from-amber-400 to-orange-500" },
  { label: "消费", delta: 2, color: "from-emerald-400 to-emerald-500" },
  { label: "OPC", delta: 10, color: "from-sky-400 to-blue-500" },
];

const stats = [
  { icon: Heart, label: "情绪打卡", value: "0", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: MapIcon, label: "探索足迹", value: "0", color: "text-sky-500", bg: "bg-sky-50" },
  { icon: Trophy, label: "情绪积分", value: "500", color: "text-amber-500", bg: "bg-amber-50" },
];

const preferences = [
  { label: "消费理念", value: "体验优先" },
  { label: "社交模式", value: "独处充电" },
  { label: "预算区间", value: "¥0–100" },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 py-2 text-black">
      <span style={{ fontSize: 14, fontWeight: 600 }}>04:33</span>
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5 items-end">
          <div className="w-0.5 h-1 bg-black rounded-sm" />
          <div className="w-0.5 h-1.5 bg-black rounded-sm" />
          <div className="w-0.5 h-2 bg-black rounded-sm" />
          <div className="w-0.5 h-2.5 bg-black rounded-sm" />
        </div>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M7 8.5L13 3.5C11.5 2 9.3 1 7 1C4.7 1 2.5 2 1 3.5L7 8.5Z" fill="black"/></svg>
        <div className="border border-black rounded-sm px-0.5 flex items-center gap-0.5" style={{ height: 11 }}>
          <div className="bg-black rounded-sm" style={{ width: 16, height: 7 }} />
          <span style={{ fontSize: 8, fontWeight: 700 }}>100</span>
        </div>
      </div>
    </div>
  );
}

function NavHeader() {
  return (
    <div className="flex items-center justify-center relative px-4 pb-2 pt-1">
      <div className="text-white" style={{ fontSize: 16, fontWeight: 600 }}>个人中心</div>
      <div className="absolute right-4 flex items-center gap-1 bg-white/20 backdrop-blur rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-white" />
        <div className="w-px h-3 bg-white/40" />
        <div className="w-3.5 h-3.5 rounded-full border border-white" />
      </div>
    </div>
  );
}

const MIN_H = 60;
const MAX_H = 260;

export default function MyProfile() {
  const [height, setHeight] = useState(MAX_H);
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);

  const onDragStart = (clientY: number) => {
    dragRef.current = { startY: clientY, startH: height };
  };
  const onDragMove = (clientY: number) => {
    if (!dragRef.current) return;
    const delta = clientY - dragRef.current.startY;
    const next = Math.max(MIN_H, Math.min(MAX_H, dragRef.current.startH + delta));
    setHeight(next);
  };
  const onDragEnd = () => {
    dragRef.current = null;
  };

  const progress = (height - MIN_H) / (MAX_H - MIN_H);

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative bg-gray-50" style={{ width: 390, minHeight: 844 }}>
        <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-rose-500">
          <StatusBar />
          <NavHeader />
        </div>

        <div
          className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-rose-500 overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
          style={{
            height,
            borderRadius: '0 0 50% 50% / 0 0 40% 40%',
          }}
          onMouseDown={(e) => {
            onDragStart(e.clientY);
            const move = (ev: MouseEvent) => onDragMove(ev.clientY);
            const up = () => {
              onDragEnd();
              window.removeEventListener('mousemove', move);
              window.removeEventListener('mouseup', up);
            };
            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', up);
          }}
          onTouchStart={(e) => onDragStart(e.touches[0].clientY)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientY)}
          onTouchEnd={onDragEnd}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -left-8 bottom-8 w-24 h-24 rounded-full bg-white/10" />

          <div className="relative flex items-stretch h-full px-4 pt-3 pb-12 gap-3" style={{ opacity: progress }}>
            <div className="w-1/2 relative flex items-end justify-center overflow-hidden">
              <img
                src={ipCharacter}
                alt="ip"
                className="pointer-events-none"
                style={{ height: 240, objectFit: 'contain', objectPosition: 'bottom' }}
              />
            </div>

            <div className="flex-1 flex flex-col gap-2 justify-center">
              <div className="bg-white/15 backdrop-blur rounded-2xl px-4 py-4">
                <div className="text-white" style={{ fontSize: 18, fontWeight: 800 }}>匿名抠门人</div>
                <div className="inline-block bg-white/25 text-white rounded-full px-2 py-0.5 mt-1.5" style={{ fontSize: 10 }}>初级抠门侠</div>
              </div>

              <div className="bg-white/15 backdrop-blur rounded-2xl px-1.5 py-2 grid grid-cols-3 mx-2">
                <div className="flex flex-col items-center">
                  <div className="text-white" style={{ fontSize: 12, fontWeight: 700 }}>¥0</div>
                  <div className="text-white/80" style={{ fontSize: 8 }}>总省</div>
                </div>
                <div className="flex flex-col items-center border-l border-r border-white/20">
                  <div className="text-white" style={{ fontSize: 12, fontWeight: 700 }}>2451</div>
                  <div className="text-white/80" style={{ fontSize: 8 }}>积分</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-white" style={{ fontSize: 12, fontWeight: 700 }}>0</div>
                  <div className="text-white/80" style={{ fontSize: 8 }}>挑战</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex-1 overflow-y-auto px-3 pt-3 pb-4 space-y-3">
          <div className="bg-white rounded-2xl border border-orange-100 p-4 flex items-center gap-3 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shrink-0">
              <HelpCircle size={22} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-gray-900" style={{ fontSize: 15, fontWeight: 800 }}>未知消费人格</div>
              <div className="text-gray-500 mt-0.5" style={{ fontSize: 11 }}>完成情绪测试解锁你的消费人格</div>
              <button className="mt-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 shadow-md shadow-orange-200" style={{ fontSize: 11, fontWeight: 700 }}>
                <Sparkles size={11} />
                去测试
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings2 size={14} className="text-orange-500" />
                <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 800 }}>Agent 对齐度</span>
              </div>
              <span className="text-orange-500" style={{ fontSize: 16, fontWeight: 800 }}>27%</span>
            </div>
            <div className="mt-2.5 h-2 rounded-full bg-orange-50 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-rose-400" style={{ width: '27%' }} />
            </div>
            <div className="mt-2 text-gray-500" style={{ fontSize: 11 }}>建立信任中 — Agent 正在学习你的偏好</div>
            <div className="mt-3 flex gap-1.5 overflow-x-auto">
              {alignmentTags.map((t, i) => (
                <div key={i} className={`shrink-0 rounded-full bg-gradient-to-r ${t.color} text-white px-2 py-1 flex items-center gap-1`} style={{ fontSize: 11, fontWeight: 700 }}>
                  <span>{t.label}</span>
                  <span className="opacity-90">+{t.delta}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-orange-100 p-3 flex flex-col items-center shadow-sm">
                  <div className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center`}>
                    <Icon size={18} className={s.color} />
                  </div>
                  <div className="mt-1.5 text-gray-900" style={{ fontSize: 18, fontWeight: 800 }}>{s.value}</div>
                  <div className="text-gray-500" style={{ fontSize: 11 }}>{s.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <BookOpen size={14} className="text-orange-500" />
              <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 800 }}>情绪手账</span>
            </div>
            <div className="mt-3 rounded-xl bg-orange-50/60 border border-dashed border-orange-200 py-6 flex flex-col items-center text-gray-500">
              <BookOpen size={24} className="text-orange-300" />
              <span className="mt-2" style={{ fontSize: 12 }}>打卡后自动生成情绪手账</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-orange-100 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Settings2 size={14} className="text-orange-500" />
              <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 800 }}>偏好设置</span>
            </div>
            <div className="divide-y divide-orange-50">
              {preferences.map((p, i) => (
                <button key={i} className="w-full py-3 flex items-center justify-between">
                  <span className="text-gray-700" style={{ fontSize: 13 }}>{p.label}</span>
                  <span className="flex items-center gap-1 text-orange-500" style={{ fontSize: 13, fontWeight: 700 }}>
                    {p.value}
                    <ChevronRight size={14} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
