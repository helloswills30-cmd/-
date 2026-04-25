import { useState, useEffect, useRef } from "react";
import { Search, MoreHorizontal, ChevronRight, Home, Compass, User, Crown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import icon1 from "../imports/1.png";
import icon2 from "../imports/2-1.png";
import icon3 from "../imports/3.png";
import SavingsChallenge from "./components/SavingsChallenge";
import MyProfile from "./components/MyProfile";
import MoodExplore from "./components/MoodExplore";
import MoodQuiz from "./components/MoodQuiz";
import Onboarding from "./components/Onboarding";
import Explore from "./components/Explore";
import PointsAlliance from "./components/PointsAlliance";
import SavingsRoute from "./components/SavingsRoute";

const weekDays = [
  { day: "今天", date: "22", active: true },
  { day: "周四", date: "23" },
  { day: "周五", date: "24" },
  { day: "周六", date: "25" },
  { day: "周日", date: "26" },
  { day: "周一", date: "27" },
];

const recommendations = [
  { img: "https://images.unsplash.com/photo-1767840272154-4eb32b348cdd?w=400", price: "19.9", shop: "星际咖啡 · 徐汇店", distance: "320m" },
  { img: "https://images.unsplash.com/photo-1697603899533-d2aafe7e4ff5?w=400", price: "68", shop: "鲜汤小馆 · 滨江店", distance: "0.8km" },
  { img: "https://images.unsplash.com/photo-1677030137853-03a83b0bd630?w=400", price: "29.9", shop: "一人食拉面", distance: "1.2km" },
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

function MiniProgramHeader() {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-1">
      <div className="w-16" />
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 600 }}>抠门大王</div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-gray-700" />
        <div className="w-px h-3 bg-gray-300" />
        <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="px-4 pb-2">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
        <Search size={16} className="text-gray-500" />
        <span className="flex-1 text-gray-500" style={{ fontSize: 13 }}>搜索活动、品牌、优惠</span>
      </div>
    </div>
  );
}

function SubtitleRow() {
  return (
    <div className="mx-4 mt-1 flex items-center justify-between">
      <span className="text-gray-700" style={{ fontSize: 13 }}>聪明消费，快乐省钱</span>
      <span className="text-gray-500" style={{ fontSize: 11 }}>
        今日上海已有<span className="text-orange-500" style={{ fontWeight: 700 }}>68</span>人省下<span className="text-orange-500" style={{ fontWeight: 700 }}>¥1190</span>
      </span>
    </div>
  );
}

const slides = [
  {
    img: "https://images.unsplash.com/photo-1767840272154-4eb32b348cdd?w=800",
    tag: "品牌合作 · 限时",
    title: "银流咖啡",
    sub: "全场第二杯半价",
    lead: "低至",
    price: "¥9.9",
    old: "¥28",
    gradient: "linear-gradient(to right, rgba(244,63,94,0.95) 0%, rgba(244,63,94,0.75) 40%, rgba(244,63,94,0) 70%)",
  },
  {
    img: "https://images.unsplash.com/photo-1682496178113-6275890f1fd7?w=800",
    tag: "品牌合作 · 限时",
    title: "趁烧火锅",
    sub: "双人套餐 立减50",
    lead: "2人套餐",
    price: "¥168",
    old: "¥258",
    gradient: "linear-gradient(to right, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.75) 40%, rgba(234,88,12,0) 70%)",
  },
  {
    img: "https://images.unsplash.com/photo-1673442598728-71caf1f15820?w=800",
    tag: "气味设计工作室",
    title: "叙室 narratus",
    sub: "低价调香体验课",
    lead: "体验价",
    price: "¥39",
    old: "¥128",
    gradient: "linear-gradient(to right, rgba(124,58,237,0.92) 0%, rgba(124,58,237,0.7) 40%, rgba(124,58,237,0) 70%)",
  },
  {
    img: "https://images.unsplash.com/photo-1767719550491-ddf21ffa6034?w=800",
    tag: "品牌合作 · 限时",
    title: "归超欢国风摄影",
    sub: "全套服化道 · 赠精修",
    lead: "到店价",
    price: "¥199",
    old: "¥599",
    gradient: "linear-gradient(to right, rgba(190,18,60,0.95) 0%, rgba(190,18,60,0.72) 40%, rgba(190,18,60,0) 70%)",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const touchRef = useRef<{ x: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <div className="mt-3">
      <div
        className="mx-3 relative rounded-xl overflow-hidden"
        style={{ height: 130 }}
        onTouchStart={(e) => { touchRef.current = { x: e.touches[0].clientX }; }}
        onTouchEnd={(e) => {
          if (!touchRef.current) return;
          const dx = e.changedTouches[0].clientX - touchRef.current.x;
          if (dx > 40) go(index - 1);
          else if (dx < -40) go(index + 1);
          touchRef.current = null;
        }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ width: `${slides.length * 100}%`, transform: `translateX(-${index * (100 / slides.length)}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative h-full" style={{ width: `${100 / slides.length}%` }}>
              <ImageWithFallback src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ backgroundImage: s.gradient }} />
              <div className="relative p-4 text-white h-full flex flex-col justify-center" style={{ width: '60%' }}>
                <div className="inline-block self-start bg-white/20 backdrop-blur rounded-full px-2 py-0.5 mb-1.5" style={{ fontSize: 10 }}>{s.tag}</div>
                <div style={{ fontSize: 20, fontWeight: 900, lineHeight: 1.1 }}>{s.title}</div>
                <div className="mt-0.5" style={{ fontSize: 13, fontWeight: 600 }}>{s.sub}</div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span style={{ fontSize: 11 }}>{s.lead}</span>
                  <span style={{ fontSize: 22, fontWeight: 900 }}>{s.price}</span>
                  <span className="line-through opacity-70" style={{ fontSize: 11 }}>{s.old}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-2 right-2 bg-black/40 text-white rounded-full px-1.5 py-0.5" style={{ fontSize: 9 }}>广告</div>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all ${i === index ? 'w-4 h-1.5 bg-orange-500' : 'w-1.5 h-1.5 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

function QuickActions({ onOpen }: { onOpen: (k: string) => void }) {
  const items = [
    { key: "mood", icon: <img src={icon1} alt="" className="w-10 h-10 object-contain" />, label: "情绪探索", sub: "测测今天适合什么消费路线" },
    { key: "challenge", icon: <img src={icon2} alt="" className="w-10 h-10 object-contain" />, label: "省钱挑战", sub: "输入需求，AI帮你砍到极致" },
    { key: "points", icon: <img src={icon3} alt="" className="w-10 h-10 object-contain" />, label: "积分联盟", sub: "跨店攒积分，一分不浪费" },
  ];
  return (
    <div className="mx-3 mt-3 grid grid-cols-3 gap-2">
      {items.map((it, i) => (
        <button key={i} onClick={() => onOpen(it.key)} className="aspect-square bg-white rounded-xl border border-gray-100 flex flex-col items-center justify-center px-2 gap-1.5">
          <div className="w-12 h-12 flex items-center justify-center">
            {it.icon}
          </div>
          <div className="text-gray-900" style={{ fontSize: 13, fontWeight: 700 }}>{it.label}</div>
          <div className="text-gray-500 text-center" style={{ fontSize: 10, lineHeight: 1.3 }}>{it.sub}</div>
        </button>
      ))}
    </div>
  );
}

function MyRank() {
  return (
    <div className="mx-3 mt-3 bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3">
      <div className="rounded-full bg-white flex items-center justify-center border border-black" style={{ width: 34, height: 34, borderWidth: 1.2 }}>
        <Crown size={17} className="text-amber-400" fill="currentColor" strokeWidth={1.5} stroke="black" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>我的段位</span>
          <span className="bg-orange-100 text-orange-500 rounded px-1.5 py-0.5" style={{ fontSize: 10 }}>消费韭菜</span>
        </div>
        <div className="text-gray-500 mt-0.5" style={{ fontSize: 11 }}>再省下 ¥50 即可升级 · 精打细算</div>
        <div className="mt-1.5 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" style={{ width: '35%' }} />
        </div>
      </div>
      <ChevronRight size={16} className="text-gray-400" />
    </div>
  );
}

function WeekCalendar() {
  return (
    <div className="mx-3 mt-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 15, fontWeight: 700 }}>周游·好价</span>
          <div className="flex items-center gap-1">
            {["吃", "喝", "玩", "乐", "购"].map((t) => (
              <button
                key={t}
                className={`rounded-full px-2 py-0.5 border ${t === "吃" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-500 border-gray-200"}`}
                style={{ fontSize: 11 }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center text-gray-400" style={{ fontSize: 11 }}>
          更多 <ChevronRight size={12} />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-orange-500 text-white rounded-lg flex flex-col items-center justify-center px-2" style={{ height: 52, width: 40 }}>
          <span style={{ fontSize: 12, fontWeight: 700 }}>推荐</span>
        </div>
        {weekDays.map((d, i) => (
          <div key={i} className={`flex-1 rounded-lg flex flex-col items-center justify-center gap-0.5 ${d.active ? 'bg-orange-50 border border-orange-400' : 'bg-gray-50'}`} style={{ height: 52 }}>
            <span className={d.active ? 'text-orange-500' : 'text-gray-500'} style={{ fontSize: 10 }}>{d.day}</span>
            <span className={d.active ? 'text-orange-500' : 'text-gray-700'} style={{ fontSize: 16, fontWeight: 700 }}>{d.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StampCard({ r }: { r: typeof recommendations[0] }) {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden border border-dashed border-gray-200 flex flex-col">
      <div className="relative" style={{ height: 80 }}>
        <ImageWithFallback src={r.img} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-1 left-1 bg-black/50 text-white rounded px-1" style={{ fontSize: 9 }}>{r.distance}</div>
      </div>
      <div className="relative">
        <div className="absolute -top-1.5 left-0 right-0 flex justify-between px-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-100" />
          ))}
        </div>
      </div>
      <div className="px-1.5 py-1.5 pt-2">
        <div className="flex items-baseline gap-0.5">
          <span className="text-orange-500" style={{ fontSize: 9 }}>¥</span>
          <span className="text-orange-500" style={{ fontSize: 16, fontWeight: 900 }}>{r.price}</span>
        </div>
        <div className="text-gray-700 truncate" style={{ fontSize: 10 }}>{r.shop}</div>
      </div>
    </div>
  );
}

function Recommendations() {
  return (
    <div className="mx-3 mt-3 grid grid-cols-3 gap-2 pb-4">
      {recommendations.map((r, i) => (
        <StampCard key={i} r={r} />
      ))}
    </div>
  );
}

function TabBar({ onTab, current = "home" }: { onTab: (k: string) => void; current?: string }) {
  const tabs = [
    { key: "home", icon: <Home size={22} />, label: "首页" },
    { key: "explore", icon: <Compass size={22} />, label: "探索" },
    { key: "me", icon: <User size={22} />, label: "我的" },
  ];
  return (
    <div className="border-t border-gray-200 bg-white flex items-center justify-around pt-2 pb-5">
      {tabs.map((t, i) => (
        <button key={i} onClick={() => onTab(t.key)} className={`flex flex-col items-center gap-0.5 ${current === t.key ? 'text-orange-500' : 'text-gray-500'}`}>
          {t.icon}
          <span style={{ fontSize: 10 }}>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<"onboarding" | "home" | "challenge" | "me" | "mood" | "moodQuiz" | "explore" | "points" | "route">("onboarding");

  if (page === "onboarding") {
    return <Onboarding onStart={() => setPage("home")} />;
  }

  if (page === "challenge") {
    return <SavingsChallenge onBack={() => setPage("home")} onStart={() => setPage("route")} />;
  }
  if (page === "route") {
    return <SavingsRoute onBack={() => setPage("challenge")} />;
  }
  if (page === "mood") {
    return <MoodQuiz onBack={() => setPage("home")} />;
  }
  if (page === "points") {
    return <PointsAlliance onBack={() => setPage("home")} />;
  }
  if (page === "explore") {
    return (
      <Explore
        onBack={() => setPage("home")}
        tabBar={
          <TabBar current="explore" onTab={(k) => setPage(k === "explore" ? "explore" : k === "me" ? "me" : "home")} />
        }
      />
    );
  }
  if (page === "me") {
    return (
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        <MyProfile />
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2" style={{ width: 390 }}>
          <TabBar current="me" onTab={(k) => setPage(k === "explore" ? "explore" : k === "me" ? "me" : "home")} />
        </div>
      </div>
    );
  }

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-gray-50 overflow-hidden shadow-xl flex flex-col" style={{ width: 390, minHeight: 844 }}>
        <StatusBar />
        <MiniProgramHeader />
        <div className="flex-1 overflow-y-auto">
          <SearchBar />
          <SubtitleRow />
          <HeroCarousel />
          <QuickActions onOpen={(k) => {
            if (k === "challenge") setPage("challenge");
            else if (k === "mood") setPage("mood");
            else if (k === "points") setPage("points");
          }} />
          <MyRank />
          <WeekCalendar />
          <Recommendations />
        </div>
        <TabBar current="home" onTab={(k) => setPage(k === "me" ? "me" : k === "explore" ? "explore" : "home")} />
      </div>
    </div>
  );
}
