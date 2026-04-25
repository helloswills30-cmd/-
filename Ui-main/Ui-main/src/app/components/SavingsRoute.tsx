import { ChevronLeft, MoreHorizontal, Navigation, Shuffle, Share2, Sparkles, Coins } from "lucide-react";

type Stop = {
  time: string;
  name: string;
  category: string;
  desc: string;
  price: string;
  dot: string;
  chipBg: string;
  chipText: string;
};

const stops: Stop[] = [
  {
    time: "09:00",
    name: "巨鹿路菜市场",
    category: "市井生活",
    desc: "在阿姨们的吆喝声里挑两根油条豆浆，10 块吃饱",
    price: "¥10",
    dot: "from-rose-400 to-rose-500",
    chipBg: "bg-rose-100",
    chipText: "text-rose-500",
  },
  {
    time: "10:30",
    name: "上生·新所",
    category: "公共空间",
    desc: "免费逛旧上海洋房，街拍一组氛围片",
    price: "免费",
    dot: "from-sky-400 to-blue-500",
    chipBg: "bg-sky-100",
    chipText: "text-sky-500",
  },
  {
    time: "12:00",
    name: "弄堂面馆 · 老阿婆",
    category: "本地美食",
    desc: "招牌阳春面 + 小排，邻居都来吃",
    price: "¥22",
    dot: "from-orange-400 to-orange-500",
    chipBg: "bg-orange-100",
    chipText: "text-orange-500",
  },
  {
    time: "14:00",
    name: "叙室 narratus",
    category: "小众体验",
    desc: "30 分钟自助调香，把今天的味道带回家",
    price: "¥25",
    dot: "from-violet-400 to-purple-500",
    chipBg: "bg-violet-100",
    chipText: "text-violet-500",
  },
  {
    time: "16:30",
    name: "苏州河滨步道",
    category: "城市漫步",
    desc: "西风落日，一段适合发呆的夕阳路",
    price: "免费",
    dot: "from-emerald-400 to-emerald-500",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-600",
  },
  {
    time: "18:00",
    name: "夜市小馆",
    category: "宵夜首选",
    desc: "5 串烤串 + 一杯柠檬水，结束完美一天",
    price: "¥15",
    dot: "from-amber-400 to-orange-500",
    chipBg: "bg-amber-100",
    chipText: "text-amber-600",
  },
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

function NavHeader({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-1">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <ChevronLeft size={18} className="text-gray-700" />
      </button>
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 700 }}>省钱路线</div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-gray-700" />
        <div className="w-px h-3 bg-gray-300" />
        <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
      </div>
    </div>
  );
}

export default function SavingsRoute({ onBack }: { onBack?: () => void }) {
  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />
        <NavHeader onBack={onBack} />

        <div className="flex-1 overflow-y-auto px-3 pb-32 pt-1">
          {/* Summary card */}
          <div
            className="relative rounded-2xl p-4 overflow-hidden border border-orange-100"
            style={{
              background: 'linear-gradient(135deg, #FFF1DC 0%, #FFE3C4 60%, #FFD0A1 100%)',
            }}
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-orange-300/40 blur-2xl" />
            <div className="absolute right-6 top-3 text-orange-300" style={{ fontSize: 16 }}>✦</div>
            <div className="absolute right-24 top-10 text-orange-400" style={{ fontSize: 10 }}>✦</div>
            <div className="absolute right-12 bottom-3 text-yellow-400" style={{ fontSize: 14 }}>✦</div>

            <div className="relative flex items-center gap-1.5">
              <Sparkles size={12} className="text-orange-500" />
              <span className="text-orange-500" style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>AI · 为你定制</span>
            </div>

            <div className="relative mt-1.5 text-gray-900" style={{ fontSize: 20, fontWeight: 900, letterSpacing: 0.5 }}>
              你的<span className="text-orange-500">「刺激系 ¥100 路线」</span>
            </div>

            <div className="relative mt-3 flex items-end gap-3">
              <div>
                <div className="text-gray-500" style={{ fontSize: 11 }}>原价</div>
                <div className="text-gray-400 line-through" style={{ fontSize: 16, fontWeight: 700 }}>¥100</div>
              </div>
              <div className="ml-2">
                <div className="text-gray-500" style={{ fontSize: 11 }}>到手</div>
                <div className="text-orange-500" style={{ fontSize: 32, fontWeight: 900, letterSpacing: 0.5 }}>¥72</div>
              </div>
              <div
                className="ml-auto rounded-full px-3 py-1 text-white bg-gradient-to-r from-orange-400 to-orange-500 shadow-md shadow-orange-200"
                style={{ fontSize: 12, fontWeight: 800 }}
              >
                省 28%
              </div>
            </div>

            <div className="relative mt-3 flex items-center gap-1.5 text-gray-700" style={{ fontSize: 12 }}>
              <Sparkles size={11} className="text-orange-400" />
              为你节省 ¥28，省下的钱够再玩一天！
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-4 pl-7">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200" />
            {stops.map((s, i) => (
              <div key={i} className="relative pb-3">
                <div className="absolute -left-7 top-3 flex items-center justify-center" style={{ width: 24, height: 24 }}>
                  <div className={`rounded-full bg-gradient-to-br ${s.dot} shadow-md`} style={{ width: 12, height: 12 }} />
                  <div className="absolute inset-0 rounded-full border-2 border-white" />
                </div>

                <div className="text-orange-500" style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>{s.time}</div>

                <div className="mt-1 rounded-2xl border border-orange-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900 truncate" style={{ fontSize: 15, fontWeight: 800 }}>{s.name}</span>
                        <span className={`rounded-full px-1.5 py-0.5 ${s.chipBg} ${s.chipText}`} style={{ fontSize: 9, fontWeight: 700 }}>
                          {s.category}
                        </span>
                      </div>
                      <div className="text-gray-500 mt-1" style={{ fontSize: 11, lineHeight: 1.5 }}>{s.desc}</div>
                    </div>
                    <div
                      className={`shrink-0 rounded-xl px-2 py-1 ${
                        s.price === '免费'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          : 'bg-orange-50 text-orange-500 border border-orange-100'
                      }`}
                      style={{ fontSize: 12, fontWeight: 800 }}
                    >
                      {s.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 mx-1 rounded-2xl px-3 py-2.5 flex items-center gap-2 border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <Coins size={16} className="text-orange-500" />
            <div className="text-gray-700 flex-1" style={{ fontSize: 12 }}>
              完成此路线可获得 <span className="text-orange-500" style={{ fontWeight: 800 }}>+120</span> 情绪积分
            </div>
          </div>
        </div>

        {/* Bottom action area */}
        <div
          className="absolute left-0 right-0 bottom-0 px-3 pt-3 pb-5"
          style={{
            background: 'linear-gradient(180deg, rgba(255,247,236,0) 0%, rgba(255,247,236,0.95) 35%, #FFF7EC 100%)',
          }}
        >
          <div className="flex items-center gap-2">
            <button
              className="flex-1 rounded-full py-3.5 text-white flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg shadow-orange-200"
              style={{ fontSize: 15, fontWeight: 800, letterSpacing: 1 }}
            >
              <Navigation size={16} />
              地图导航
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-orange-100 shadow-sm">
              <Shuffle size={18} className="text-orange-500" />
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-orange-100 shadow-sm">
              <Share2 size={18} className="text-orange-500" />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3 text-gray-500" style={{ fontSize: 11 }}>
            <span>换一条</span>
            <span>·</span>
            <span>分享路线</span>
            <span>·</span>
            <span>收藏</span>
          </div>
        </div>
      </div>
    </div>
  );
}
