import { useState } from "react";
import { X, Sparkles } from "lucide-react";

const questions: { title: string; options: { label: string; hint?: string }[] }[] = [
  {
    title: "今天想花多少？",
    options: [
      { label: "¥0", hint: "一分不花" },
      { label: "≤¥50", hint: "小试身手" },
      { label: "≥¥100", hint: "犒劳自己" },
      { label: "随意", hint: "看心情" },
    ],
  },
  {
    title: "今天想做什么？",
    options: [
      { label: "出街" },
      { label: "社交" },
      { label: "刷屏" },
      { label: "宅家" },
      { label: "约会" },
    ],
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

export default function MoodQuiz({ onBack }: { onBack?: () => void }) {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null]);
  const ready = answers.every((a) => a !== null);

  const toggle = (qIdx: number, oIdx: number) => {
    setAnswers((prev) => prev.map((v, i) => (i === qIdx ? oIdx : v)));
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />

        <div className="relative flex items-center justify-between px-4 py-2">
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-white border border-orange-100 flex items-center justify-center">
            <X size={16} className="text-gray-700" />
          </button>
          <div className="text-gray-900" style={{ fontSize: 16, fontWeight: 700 }}>情绪探索</div>
          <div className="w-8" />
        </div>

        <div className="relative flex-1 overflow-y-auto px-4 pt-2 pb-6">
          <div className="text-center mt-4">
            <div className="text-gray-900" style={{ fontSize: 24, fontWeight: 900, letterSpacing: 1 }}>
              没钱？
            </div>
            <div className="mt-1" style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1 }}>
              <span className="text-gray-900">也要有</span>
              <span className="text-orange-500">情绪</span>
              <span className="text-gray-900">的一天</span>
            </div>
            <div className="text-gray-500 mt-2" style={{ fontSize: 12 }}>
              告诉 Agent 我的消费心情，帮你推荐专属路线
            </div>
          </div>

          {questions.map((q, qi) => (
            <div key={qi} className="mt-6 bg-white rounded-2xl border border-orange-100 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-4 bg-orange-500 rounded-full" />
                <span className="text-gray-900" style={{ fontSize: 14, fontWeight: 700 }}>{q.title}</span>
              </div>
              <div className={qi === 0 ? "grid grid-cols-2 gap-2" : "flex flex-wrap gap-2"}>
                {q.options.map((o, oi) => {
                  const active = answers[qi] === oi;
                  return (
                    <button
                      key={oi}
                      onClick={() => toggle(qi, oi)}
                      className={`rounded-xl border px-3 py-2.5 text-left transition ${
                        active
                          ? "bg-gradient-to-br from-orange-400 to-orange-500 border-orange-500 text-white shadow-md shadow-orange-200"
                          : "bg-orange-50/40 border-orange-100 text-gray-700"
                      }`}
                      style={{ fontSize: 13, fontWeight: 600 }}
                    >
                      <div>{o.label}</div>
                      {o.hint && (
                        <div className={`mt-0.5 ${active ? "text-white/80" : "text-gray-400"}`} style={{ fontSize: 10, fontWeight: 400 }}>
                          {o.hint}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-center gap-2 text-gray-400" style={{ fontSize: 11 }}>
            <Sparkles size={12} />
            <span>基于你的情绪给出今日消费建议</span>
          </div>
        </div>

        <div className="px-4 pb-6 pt-2">
          <button
            disabled={!ready}
            className={`w-full rounded-full py-4 text-white transition flex items-center justify-center gap-2 ${
              ready
                ? "bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg shadow-orange-200"
                : "bg-gray-300"
            }`}
            style={{ fontSize: 15, fontWeight: 700, letterSpacing: 1 }}
          >
            <Sparkles size={16} />
            神秘抠门派大师猜中……
          </button>
        </div>
      </div>
    </div>
  );
}
