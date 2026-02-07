import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 12}px`,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 4}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-valentine-rose"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity,
            animation: `float-up ${heart.duration} ease-in-out ${heart.delay} infinite`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
