import { ChevronLeft, MoreHorizontal, Zap, Dna } from "lucide-react";

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

function NavHeader({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-1">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <ChevronLeft size={18} className="text-gray-700" />
      </button>
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 600 }}>情绪探索</div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-gray-700" />
        <div className="w-px h-3 bg-gray-300" />
        <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
      </div>
    </div>
  );
}

function VersionCard({ icon, title, meta, badge, badgeColor, iconBg, onClick }: {
  icon: React.ReactNode;
  title: string;
  meta: string;
  badge: string;
  badgeColor: string;
  iconBg: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="flex-1 bg-white rounded-2xl border border-gray-100 p-4 flex flex-col items-center gap-2.5 shadow-sm active:scale-[0.98] transition">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 800 }}>{title}</div>
      <div className="text-gray-500" style={{ fontSize: 11 }}>{meta}</div>
      <div className={`rounded-full px-2 py-0.5 ${badgeColor}`} style={{ fontSize: 10, fontWeight: 600 }}>{badge}</div>
    </button>
  );
}

export default function MoodExplore({ onBack, onStart }: { onBack?: () => void; onStart?: () => void }) {
  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-gray-50 overflow-hidden shadow-xl flex flex-col" style={{ width: 390, minHeight: 844 }}>
        <StatusBar />
        <NavHeader onBack={onBack} />

        <div className="flex-1 overflow-y-auto px-3">
          <div className="mt-6 text-center">
            <div className="inline-block" style={{ fontSize: 26, fontWeight: 900 }}>
              <span className="text-orange-500">省钱人格</span>
              <span className="text-orange-500 ml-2">SQTI</span>
            </div>
            <div className="text-gray-500 mt-2" style={{ fontSize: 12 }}>
              测出你的情绪消费风格，解锁专属路线
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <VersionCard
              onClick={onStart}
              icon={<Zap size={26} className="text-orange-500" fill="currentColor" />}
              iconBg="bg-orange-50"
              title="快速版"
              meta="5题 · 2分钟"
              badge="经典测试"
              badgeColor="bg-orange-100 text-orange-500"
            />
            <VersionCard
              onClick={onStart}
              icon={<Dna size={26} className="text-rose-500" />}
              iconBg="bg-rose-50"
              title="深度版"
              meta="12题 · 5分钟"
              badge="更精准"
              badgeColor="bg-green-100 text-green-600"
            />
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-orange-500 rounded-full" />
              <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>你可能会获得</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { emoji: "🧠", label: "专属消费画像" },
                { emoji: "🎯", label: "情绪省钱方案" },
                { emoji: "🏷️", label: "个性化优惠推荐" },
                { emoji: "📊", label: "每周省钱报告" },
              ].map((it, i) => (
                <div key={i} className="bg-gray-50 rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <span style={{ fontSize: 18 }}>{it.emoji}</span>
                  <span className="text-gray-700" style={{ fontSize: 12 }}>{it.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pb-6 flex items-center justify-center text-gray-400" style={{ fontSize: 11 }}>
            已有 28,491 位抠门er完成测试
          </div>
        </div>
      </div>
    </div>
  );
}
