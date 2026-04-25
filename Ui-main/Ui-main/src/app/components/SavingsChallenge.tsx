import { ChevronLeft, MoreHorizontal, Sparkles } from "lucide-react";
import { useState } from "react";
import ipCharacter from "../../imports/图片人物提取与背景处理_(12)(1).png";
import challengeIcon from "../../imports/2-1.png";

const examples: { parts: { text: string; highlight?: boolean }[] }[] = [
  { parts: [{ text: "今晚烧烤，预算 " }, { text: "30", highlight: true }, { text: "，2 人" }] },
  { parts: [{ text: "周末和朋友看电影，预算 " }, { text: "50", highlight: true }] },
  { parts: [{ text: "下午茶，一个人，预算 " }, { text: "20", highlight: true }] },
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
      <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 600 }}>省钱挑战</div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1">
        <MoreHorizontal size={14} className="text-gray-700" />
        <div className="w-px h-3 bg-gray-300" />
        <div className="w-3.5 h-3.5 rounded-full border border-gray-700" />
      </div>
    </div>
  );
}

export default function SavingsChallenge({ onBack, onStart }: { onBack?: () => void; onStart?: () => void }) {
  const [input, setInput] = useState("");

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />
        <NavHeader onBack={onBack} />

        <div className="flex-1 overflow-y-auto px-3">
          <div className="mt-3 bg-white rounded-xl border border-orange-100 p-3 relative overflow-hidden" style={{ minHeight: 140 }}>
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-orange-200 via-orange-100/70 to-transparent" style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }} />
            <div className="absolute right-4 top-6 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 opacity-50 blur-2xl" />
            <div className="absolute right-6 top-3 text-orange-300" style={{ fontSize: 16 }}>✦</div>
            <div className="absolute right-28 top-10 text-orange-400" style={{ fontSize: 10 }}>✦</div>
            <div className="absolute right-12 bottom-3 text-yellow-400" style={{ fontSize: 14 }}>✦</div>

            <div className="relative flex items-center gap-3">
              <img src={challengeIcon} alt="" className="w-14 h-14 object-contain" />
              <div>
                <div className="text-gray-900 flex items-center gap-2" style={{ fontSize: 22, fontWeight: 800 }}>
                  省钱挑战
                  <span className="bg-orange-100 text-orange-500 rounded-full px-1.5 py-0.5" style={{ fontSize: 10, fontWeight: 600 }}>AI</span>
                </div>
                <div className="text-gray-500 mt-0.5" style={{ fontSize: 12 }}>告诉AI你的需求，帮你省到极致</div>
              </div>
            </div>

            <div className="relative mt-3 flex items-center gap-2 flex-wrap">
              <div className="bg-white/70 backdrop-blur border border-orange-200 rounded-full px-2.5 py-1 flex items-center gap-1" style={{ fontSize: 11 }}>
                <span className="text-gray-500">今日已有</span>
                <span className="text-orange-500" style={{ fontWeight: 700 }}>1,284</span>
                <span className="text-gray-500">人参与</span>
              </div>
              <div className="bg-white/70 backdrop-blur border border-orange-200 rounded-full px-2.5 py-1 flex items-center gap-1" style={{ fontSize: 11 }}>
                <span className="text-gray-500">平均省下</span>
                <span className="text-orange-500" style={{ fontWeight: 700 }}>¥28</span>
              </div>
            </div>

            <div className="absolute right-0 top-0 bottom-0 overflow-hidden pointer-events-none" style={{ width: 170 }}>
              <img
                src={ipCharacter}
                alt="ip"
                className="absolute"
                style={{ height: 190, right: -10, bottom: -35, objectFit: 'contain', objectPosition: 'top' }}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="text-gray-500 mb-2 px-1" style={{ fontSize: 12 }}>示例</div>
            <div className="flex flex-col gap-2">
              {examples.map((e, i) => {
                const full = e.parts.map((p) => p.text).join("");
                return (
                  <button
                    key={i}
                    onClick={() => setInput(full)}
                    className="text-left bg-white rounded-xl border border-orange-100 px-4 py-3 flex items-center gap-2"
                  >
                    <Sparkles size={14} className="text-orange-400 shrink-0" />
                    <span className="text-gray-700" style={{ fontSize: 13 }}>
                      {e.parts.map((p, j) =>
                        p.highlight ? (
                          <span key={j} className="text-orange-500" style={{ fontWeight: 700 }}>{p.text}</span>
                        ) : (
                          <span key={j}>{p.text}</span>
                        )
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 bg-white rounded-xl border border-orange-100 p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入你的消费需求..."
              maxLength={200}
              className="w-full h-16 resize-none outline-none text-gray-800 placeholder-gray-400 bg-transparent"
              style={{ fontSize: 13 }}
            />
            <div className="flex justify-end text-gray-400" style={{ fontSize: 11 }}>
              {input.length}/200
            </div>
          </div>

          <div className="mt-3 pb-4">
            <button
              disabled={!input.trim()}
              onClick={() => input.trim() && onStart?.()}
              className={`w-full rounded-full py-3.5 text-white transition ${input.trim() ? "bg-gradient-to-r from-orange-400 to-orange-500 shadow-md shadow-orange-200" : "bg-gray-300"}`}
              style={{ fontSize: 15, fontWeight: 700 }}
            >
              开始挑战
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
