import { ChevronLeft, MoreHorizontal, Search, ArrowLeftRight, Gift, Sparkles, Crown, AlertTriangle, ChevronRight, Coins } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "积分查询攻略",
    desc: "查看附近商家积分规则",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: ArrowLeftRight,
    title: "跨店兑换",
    desc: "积分跨店通兑，便利1+1",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    icon: Gift,
    title: "0元兑换",
    desc: "用积分换好物，零现金",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Crown,
    title: "私享活动",
    desc: "高等级玩家专属福利",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
  },
];

const expiring = [
  { name: "星巴克会员积分", desc: "30 天后到期", value: "260" },
  { name: "屈臣氏积分", desc: "周末双倍兑换", value: "180" },
  { name: "罗森小绿券", desc: "可兑早餐套餐", value: "120" },
  { name: "便利蜂积分", desc: "+50 加倍中", value: "85" },
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
    <div className="flex items-center justify-between px-4 pb-2 pt-1 bg-[#FFF7EC]">
      <button onClick={onBack} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <ChevronLeft size={18} className="text-gray-700" />
      </button>
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 700 }}>积分联盟</div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-gray-700" />
        <div className="w-px h-3 bg-gray-300" />
        <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
      </div>
    </div>
  );
}

export default function PointsAlliance({ onBack }: { onBack?: () => void }) {
  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />
        <NavHeader onBack={onBack} />

        <div className="flex-1 overflow-y-auto px-3 pb-6">
          <div className="relative mt-2 rounded-2xl p-4 overflow-hidden" style={{
            background: 'linear-gradient(135deg, #FB923C 0%, #F97316 50%, #E11D48 100%)',
          }}>
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/15" />
            <div className="absolute right-10 bottom-2 text-white/40" style={{ fontSize: 24 }}>✦</div>
            <div className="absolute right-24 top-3 text-white/40" style={{ fontSize: 14 }}>✦</div>

            <div className="relative flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/25 backdrop-blur flex items-center justify-center shrink-0">
                <Coins size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-white" style={{ fontSize: 18, fontWeight: 800 }}>
                  积分 Agent
                  <span className="bg-white/25 rounded-full px-1.5 py-0.5" style={{ fontSize: 9, fontWeight: 700 }}>AI</span>
                </div>
                <div className="text-white/85 mt-0.5" style={{ fontSize: 11 }}>开启线性策略，帮你最大化价值</div>
              </div>
            </div>

            <div className="relative mt-3 grid grid-cols-3 gap-2">
              <div className="bg-white/15 backdrop-blur rounded-xl px-2 py-2 text-center">
                <div className="text-white" style={{ fontSize: 16, fontWeight: 800 }}>2,451</div>
                <div className="text-white/80" style={{ fontSize: 10 }}>总积分</div>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-xl px-2 py-2 text-center">
                <div className="text-white" style={{ fontSize: 16, fontWeight: 800 }}>8</div>
                <div className="text-white/80" style={{ fontSize: 10 }}>已联盟</div>
              </div>
              <div className="bg-white/15 backdrop-blur rounded-xl px-2 py-2 text-center">
                <div className="text-white" style={{ fontSize: 16, fontWeight: 800 }}>¥38</div>
                <div className="text-white/80" style={{ fontSize: 10 }}>预估价值</div>
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <button
                  key={i}
                  className="bg-white rounded-2xl border border-orange-100 p-3 text-left shadow-sm active:scale-[0.98] transition"
                >
                  <div className={`w-10 h-10 rounded-xl ${f.iconBg} flex items-center justify-center mb-2`}>
                    <Icon size={20} className={f.iconColor} />
                  </div>
                  <div className="text-gray-900" style={{ fontSize: 14, fontWeight: 800 }}>{f.title}</div>
                  <div className="text-gray-500 mt-0.5" style={{ fontSize: 11 }}>{f.desc}</div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 bg-white rounded-2xl border border-orange-100 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle size={14} className="text-orange-500" />
                <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 800 }}>积分增值预警</span>
              </div>
              <button className="flex items-center text-orange-500" style={{ fontSize: 11, fontWeight: 600 }}>
                全部
                <ChevronRight size={12} />
              </button>
            </div>
            <div className="divide-y divide-orange-50">
              {expiring.map((e, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-800 truncate" style={{ fontSize: 13, fontWeight: 700 }}>{e.name}</div>
                    <div className="text-gray-500 mt-0.5" style={{ fontSize: 10 }}>{e.desc}</div>
                  </div>
                  <div className="text-orange-500 ml-2" style={{ fontSize: 15, fontWeight: 800 }}>{e.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-orange-100" style={{
            background: 'linear-gradient(135deg, #FFF1DC 0%, #FFE3C4 100%)',
          }}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
              <Sparkles size={18} className="text-orange-500" />
            </div>
            <div className="flex-1">
              <div className="text-gray-900" style={{ fontSize: 13, fontWeight: 800 }}>Agent 给你建议</div>
              <div className="text-gray-600 mt-0.5" style={{ fontSize: 11 }}>把屈臣氏 180 分换成绿券，预计多省 ¥6</div>
            </div>
            <button className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1.5 shadow-md shadow-orange-200" style={{ fontSize: 12, fontWeight: 700 }}>
              一键执行
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
