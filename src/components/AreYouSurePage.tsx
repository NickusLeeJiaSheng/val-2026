import { useState, useRef, useCallback, useEffect } from "react";
import FloatingHearts from "./FloatingHearts";
import valentineBg from "@/assets/valentine-bg.jpg";

interface AreYouSurePageProps {
  onAccept: () => void;
}

const AreYouSurePage = ({ onAccept }: AreYouSurePageProps) => {
  const [acceptOffset, setAcceptOffset] = useState<{ x: number; y: number } | null>(null);
  const [rejectOffset, setRejectOffset] = useState<{ x: number; y: number } | null>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const rejectButtonRef = useRef<HTMLButtonElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Track mouse position globally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleRejectClick = useCallback(() => {
    if (!containerRef.current || !acceptButtonRef.current || !rejectButtonRef.current) return;

    // Move accept button to where the mouse is (on top of reject button)
    const acceptBtn = acceptButtonRef.current.getBoundingClientRect();
    const acceptCenterX = acceptBtn.left + acceptBtn.width / 2;
    const acceptCenterY = acceptBtn.top + acceptBtn.height / 2;

    setAcceptOffset((prev) => ({
      x: (prev?.x ?? 0) + (mousePos.current.x - acceptCenterX),
      y: (prev?.y ?? 0) + (mousePos.current.y - acceptCenterY),
    }));

    // Move reject button to a random spot away from the cursor
    const container = containerRef.current.getBoundingClientRect();
    const rejectBtn = rejectButtonRef.current.getBoundingClientRect();
    const rejectCenterX = rejectBtn.left + rejectBtn.width / 2;
    const rejectCenterY = rejectBtn.top + rejectBtn.height / 2;

    const maxX = container.width * 0.35;
    const maxY = container.height * 0.3;
    let newX = (Math.random() - 0.5) * maxX * 2;
    let newY = (Math.random() - 0.5) * maxY * 2;

    // Make sure it moves a decent distance from current position
    if (Math.abs(newX) < 100) newX = newX > 0 ? 150 : -150;
    if (Math.abs(newY) < 60) newY = newY > 0 ? 100 : -100;

    setRejectOffset((prev) => ({
      x: (prev?.x ?? 0) + newX,
      y: (prev?.y ?? 0) + newY,
    }));

    setHasMoved(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${valentineBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Sad emoji */}
        <div className="text-7xl animate-bounce-soft">🥺</div>

        {/* Question */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground drop-shadow-sm">
          Are you sure?
        </h1>

        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-md">
          Think again... pretty please? 🥹
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4 items-center relative">
          {/* Reject button - moves away on click */}
          <button
            ref={rejectButtonRef}
            onClick={handleRejectClick}
            className="px-10 py-4 text-xl font-body font-semibold rounded-full bg-secondary text-secondary-foreground shadow-md transition-all duration-300 z-10"
            style={{
              transform: rejectOffset
                ? `translate(${rejectOffset.x}px, ${rejectOffset.y}px)`
                : "none",
              transition: "transform 0.3s ease-out",
            }}
          >
            Yes, I reject 💔
          </button>

          {/* Accept button - moves to cursor on reject click */}
          <button
            ref={acceptButtonRef}
            onClick={onAccept}
            className="px-10 py-4 text-xl font-body font-semibold rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-glow z-10"
            style={{
              transform: acceptOffset
                ? `translate(${acceptOffset.x}px, ${acceptOffset.y}px)`
                : "none",
              transition: "transform 0.3s ease-out",
            }}
          >
            No, I want to be your Valentine! 💕
          </button>
        </div>

        {hasMoved && (
          <p className="font-body text-sm text-muted-foreground mt-8 animate-bounce-soft">
            Hmm... that button seems to have a mind of its own! 😏
          </p>
        )}
      </div>
    </div>
  );
};

export default AreYouSurePage;
