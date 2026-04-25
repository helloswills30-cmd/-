import { useState } from "react";
import { Search, SlidersHorizontal, Star, Navigation, Locate, ChevronLeft, MoreHorizontal } from "lucide-react";

const chips = ["全部", "美食", "咖啡", "逛街", "娱乐", "运动"];

type Category = "美食" | "咖啡" | "逛街" | "娱乐" | "运动";

const categoryGradients: Record<Category, { from: string; to: string; solid: string }> = {
  美食:  { from: "#FB7185", to: "#E11D48", solid: "#F43F5E" },
  咖啡:  { from: "#F59E0B", to: "#B45309", solid: "#D97706" },
  逛街:  { from: "#34D399", to: "#059669", solid: "#10B981" },
  娱乐:  { from: "#C084FC", to: "#7C3AED", solid: "#A855F7" },
  运动:  { from: "#60A5FA", to: "#1D4ED8", solid: "#3B82F6" },
};

type Pin = {
  x: number; y: number; label: string; category: Category; emoji: string;
  rating: number; status: string; distance: string; eta: string; tags: string[];
};

const pins: Pin[] = [
  { x: 20, y: 28, label: "银流咖啡", category: "咖啡", emoji: "☕", rating: 4.6, status: "营业中", distance: "0.4km", eta: "步行 6 分钟", tags: ["第二杯半价", "出片机位", "拿铁招牌"] },
  { x: 46, y: 22, label: "趁烧火锅", category: "美食", emoji: "🍲", rating: 4.4, status: "排队中", distance: "0.9km", eta: "打车 4 分钟", tags: ["双人套餐", "辣度可选", "小料免费"] },
  { x: 38, y: 48, label: "叙室 narratus", category: "娱乐", emoji: "🌸", rating: 4.8, status: "营业中", distance: "0.7km", eta: "步行 9 分钟", tags: ["低价调香", "私密包间", "气味设计"] },
  { x: 62, y: 38, label: "龙华广场", category: "逛街", emoji: "🛍️", rating: 4.2, status: "营业中", distance: "1.2km", eta: "打车 6 分钟", tags: ["免费停车", "适合拍照", "热门小吃", "出片机位"] },
  { x: 72, y: 62, label: "城南体育馆", category: "运动", emoji: "🏸", rating: 4.7, status: "开放中", distance: "1.5km", eta: "打车 8 分钟", tags: ["羽毛球", "夜场便宜", "可包场"] },
  { x: 28, y: 68, label: "夜市小馆", category: "美食", emoji: "🍢", rating: 4.1, status: "夜场", distance: "1.8km", eta: "打车 10 分钟", tags: ["人均30", "宵夜首选", "深夜营业"] },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 py-2 text-black">
      <span style={{ fontSize: 14, fontWeight: 600 }}>04:20</span>
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

function Map() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #FFF1DC 0%, #FFE3C4 40%, #FFD4A8 100%)',
    }}>
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 390 600" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(234,88,12,0.18)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path d="M 0 120 Q 120 140 200 110 T 390 150" stroke="rgba(255,255,255,0.7)" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M 0 300 Q 150 280 250 320 T 390 300" stroke="rgba(255,255,255,0.6)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d="M 100 0 Q 120 200 180 380 T 240 600" stroke="rgba(255,255,255,0.55)" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M 290 0 Q 280 180 320 320 T 360 600" stroke="rgba(255,255,255,0.5)" strokeWidth="7" fill="none" strokeLinecap="round" />
        <circle cx="60" cy="420" r="55" fill="rgba(16,185,129,0.18)" />
        <circle cx="320" cy="80" r="40" fill="rgba(16,185,129,0.18)" />
        <circle cx="260" cy="480" r="35" fill="rgba(59,130,246,0.18)" />
      </svg>
    </div>
  );
}

export default function Explore({ tabBar, onBack }: { tabBar?: React.ReactNode; onBack?: () => void }) {
  const [active, setActive] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const selected = selectedIdx != null ? pins[selectedIdx] : null;

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />

        <div className="flex items-center justify-between px-4 pb-2 pt-1">
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <ChevronLeft size={18} className="text-gray-700" />
          </button>
          <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 700 }}>探索</div>
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
            <MoreHorizontal size={14} className="text-gray-700" />
            <div className="w-px h-3 bg-gray-300" />
            <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
          </div>
        </div>

        <div className="px-4 pb-2 flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 bg-white rounded-full border border-orange-100 px-3 py-2 shadow-sm">
            <Search size={16} className="text-gray-500" />
            <span className="flex-1 text-gray-500" style={{ fontSize: 13 }}>搜索地点、品牌、活动</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-white border border-orange-100 flex items-center justify-center shadow-sm">
            <SlidersHorizontal size={16} className="text-gray-700" />
          </button>
        </div>

        <div className="px-4 pb-2 flex gap-4 overflow-x-auto items-center">
          {chips.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="shrink-0 relative flex flex-col items-center"
            >
              <span
                className={active === i ? "text-orange-500" : "text-gray-600"}
                style={{ fontSize: active === i ? 15 : 13, fontWeight: active === i ? 800 : 500 }}
              >
                {c}
              </span>
              {active === i && (
                <span className="mt-1 h-1 w-5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500" />
              )}
            </button>
          ))}
          <div className="ml-auto shrink-0 flex items-center gap-1 bg-orange-100 text-orange-500 rounded-full px-2 py-0.5" style={{ fontSize: 11, fontWeight: 700 }}>
            <span>✦</span>
            <span>推荐</span>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <Map />

          {pins.map((p, i) => {
            const isActive = selectedIdx === i;
            const size = isActive ? 56 : 38;
            const grad = categoryGradients[p.category];
            const gid = `petal-${i}`;
            return (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                className="absolute"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: 'translate(-50%, -100%)',
                  transition: 'all 200ms ease',
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: size,
                    height: size,
                    transition: 'all 200ms ease',
                    filter: isActive
                      ? `drop-shadow(0 6px 14px ${grad.solid}80)`
                      : 'drop-shadow(0 3px 6px rgba(0,0,0,0.18))',
                  }}
                >
                  <svg viewBox="-50 -50 100 100" className="absolute inset-0 w-full h-full">
                    <defs>
                      <radialGradient id={gid} cx="50%" cy="35%" r="65%">
                        <stop offset="0%" stopColor={grad.from} />
                        <stop offset="100%" stopColor={grad.to} />
                      </radialGradient>
                    </defs>
                    <g fill={`url(#${gid})`}>
                      {[0, 1, 2, 3, 4].map((k) => {
                        const angle = (k * 72 - 90) * (Math.PI / 180);
                        const r = 22;
                        const cx = Math.cos(angle) * r;
                        const cy = Math.sin(angle) * r;
                        return <circle key={k} cx={cx} cy={cy} r={20} />;
                      })}
                      <circle cx={0} cy={0} r={22} />
                    </g>
                    {isActive && (
                      <g fill="none" stroke="white" strokeWidth={3}>
                        {[0, 1, 2, 3, 4].map((k) => {
                          const angle = (k * 72 - 90) * (Math.PI / 180);
                          const r = 22;
                          const cx = Math.cos(angle) * r;
                          const cy = Math.sin(angle) * r;
                          return <circle key={k} cx={cx} cy={cy} r={20} />;
                        })}
                      </g>
                    )}
                  </svg>
                  <span className="relative" style={{ fontSize: isActive ? 22 : 16 }}>
                    {p.emoji}
                  </span>
                </div>
              </button>
            );
          })}

          <button className="absolute right-4 bottom-72 w-10 h-10 rounded-full bg-white border border-orange-100 flex items-center justify-center shadow-md">
            <Locate size={16} className="text-orange-500" />
          </button>

          {selected && (
            <div className="absolute inset-x-4 bottom-24 bg-white rounded-2xl border border-orange-100 shadow-xl p-4">
              <button onClick={() => setSelectedIdx(null)} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500" style={{ fontSize: 12 }}>
                ✕
              </button>
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{
                    fontSize: 22,
                    background: `linear-gradient(135deg, ${categoryGradients[selected.category].from}, ${categoryGradients[selected.category].to})`,
                  }}
                >
                  {selected.emoji}
                </div>
                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900 truncate" style={{ fontSize: 16, fontWeight: 800 }}>{selected.label}</span>
                    <span className="bg-orange-100 text-orange-500 rounded-full px-1.5 py-0.5" style={{ fontSize: 10, fontWeight: 600 }}>{selected.category}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-500" style={{ fontSize: 11 }}>
                    <div className="flex items-center gap-0.5">
                      <Star size={11} className="text-amber-400" fill="currentColor" />
                      <span className="text-gray-700" style={{ fontWeight: 700 }}>{selected.rating}</span>
                    </div>
                    <span className="text-green-600">{selected.status}</span>
                    <span>· {selected.distance}</span>
                    <span>· {selected.eta}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {selected.tags.map((t, i) => (
                    <span key={i} className="bg-orange-50 text-orange-500 border border-orange-100 rounded-full px-2 py-0.5" style={{ fontSize: 10 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <button className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1.5 flex items-center gap-1 shadow-md shadow-orange-200 shrink-0" style={{ fontSize: 12, fontWeight: 700 }}>
                  <Navigation size={12} />
                  导航
                </button>
              </div>
            </div>
          )}
        </div>

        {tabBar}
      </div>
    </div>
  );
}
