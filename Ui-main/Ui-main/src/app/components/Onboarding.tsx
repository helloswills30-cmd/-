import { useState, useRef, useEffect } from "react";
import { ChevronsRight } from "lucide-react";
import ip1 from "../../imports/图片信息.png";
import ip2 from "../../imports/图片信息_(1).png";
import ip3 from "../../imports/图片信息_(2).png";
import ip4 from "../../imports/图片信息_(3).png";
import ip5 from "../../imports/图片信息_(4).png";
import ip6 from "../../imports/图片信息_(5).png";
import ip7 from "../../imports/图片信息_(6).png";
import ip8 from "../../imports/图片信息_(7).png";
import ip9 from "../../imports/图片信息_(8).png";

const characterImages = [ip1, ip2, ip3, ip4, ip5, ip6, ip7, ip8, ip9];

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

function ScrollColumn({ direction, speed, offset, images }: { direction: "up" | "down"; speed: number; offset: number; images: string[] }) {
  const items = [...images, ...images].map((src, i) => (
    <div key={i} className="rounded-2xl overflow-hidden bg-white shadow" style={{ aspectRatio: '1', marginBottom: 10 }}>
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  ));

  return (
    <div className="flex-1 relative overflow-hidden" style={{ marginTop: offset }}>
      <div
        className="flex flex-col"
        style={{
          animation: `${direction === 'up' ? 'scrollUp' : 'scrollDown'} ${speed}s linear infinite`,
        }}
      >
        {items}
      </div>
    </div>
  );
}

function SwipeToUnlock({ onUnlock }: { onUnlock: () => void }) {
  const [x, setX] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const BUTTON = 52;

  const maxX = () => (trackRef.current?.offsetWidth ?? 300) - BUTTON - 8;

  const onStart = (clientX: number) => {
    if (unlocked) return;
    startXRef.current = clientX - x;
  };
  const onMove = (clientX: number) => {
    if (startXRef.current == null) return;
    const next = Math.max(0, Math.min(maxX(), clientX - startXRef.current));
    setX(next);
  };
  const onEnd = () => {
    if (startXRef.current == null) return;
    startXRef.current = null;
    if (x >= maxX() - 10) {
      setX(maxX());
      setUnlocked(true);
      setTimeout(onUnlock, 250);
    } else {
      setX(0);
    }
  };

  const progress = x / Math.max(1, maxX());

  return (
    <div
      ref={trackRef}
      className="relative w-full rounded-full overflow-hidden shadow-lg shadow-orange-200"
      style={{ height: 60, background: 'linear-gradient(90deg, #FFD4A8, #FFB074)' }}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onEnd}
    >
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: x + BUTTON + 8,
          background: 'linear-gradient(90deg, #FB923C 0%, #FB923C 55%, rgba(251,146,60,0) 100%)',
          transition: startXRef.current == null ? 'width 200ms' : 'none',
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center text-white pointer-events-none"
        style={{ fontSize: 15, fontWeight: 700, letterSpacing: 4, opacity: 1 - progress * 0.8 }}
      >
        向右滑动立即体验
      </div>
      <div
        className="absolute top-1 rounded-full bg-white flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ left: 4, width: BUTTON, height: BUTTON, transform: `translateX(${x}px)`, transition: startXRef.current == null ? 'transform 200ms' : 'none' }}
        onMouseDown={(e) => onStart(e.clientX)}
        onTouchStart={(e) => onStart(e.touches[0].clientX)}
      >
        <ChevronsRight size={26} className="text-orange-500" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function Onboarding({ onStart }: { onStart?: () => void }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollUp { from { transform: translateY(0); } to { transform: translateY(-50%); } }
      @keyframes scrollDown { from { transform: translateY(-50%); } to { transform: translateY(0); } }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="size-full flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="overflow-hidden shadow-xl flex flex-col relative" style={{ width: 390, minHeight: 844, backgroundColor: '#FFF7EC' }}>
        <StatusBar />

        <div className="relative flex-1 flex flex-col">
          <div className="relative mx-0 overflow-hidden" style={{ height: 520 }}>
            <div
              className="absolute inset-0 flex gap-2.5 px-2"
              style={{ transform: 'rotate(-12deg) scale(1.35)', transformOrigin: 'center' }}
            >
              <ScrollColumn direction="up" speed={28} offset={-40} images={[ip1, ip2, ip3, ip4, ip5, ip6, ip7, ip8, ip9]} />
              <ScrollColumn direction="down" speed={32} offset={-100} images={[ip5, ip9, ip3, ip7, ip1, ip6, ip2, ip8, ip4]} />
              <ScrollColumn direction="up" speed={24} offset={-60} images={[ip9, ip4, ip8, ip2, ip6, ip3, ip7, ip1, ip5]} />
              <ScrollColumn direction="down" speed={30} offset={-120} images={[ip3, ip7, ip1, ip5, ip9, ip2, ip8, ip4, ip6]} />
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(251, 146, 60, 0.18)', mixBlendMode: 'multiply' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(255, 220, 170, 0.15)' }}
            />

            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: 260,
                background: 'linear-gradient(to bottom, rgba(255,247,236,0) 0%, rgba(255,237,210,0.8) 45%, rgba(255,247,236,1) 85%)',
              }}
            />
          </div>

          <div className="relative -mt-10 flex-1 flex flex-col items-center px-6 text-center pt-4">
            <div className="text-gray-900" style={{ fontSize: 32, fontWeight: 800, letterSpacing: 2 }}>
              开启你的省钱之旅
            </div>
            <div className="text-gray-500 mt-4 leading-relaxed" style={{ fontSize: 15 }}>
              探索每日好价，解锁专属优惠
              <br />
              和抠门大王一起聪明消费
            </div>
          </div>

          <div className="px-6 pb-10">
            <SwipeToUnlock onUnlock={() => onStart?.()} />
          </div>
        </div>
      </div>
    </div>
  );
}
