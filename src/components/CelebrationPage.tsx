import { useEffect, useState } from "react";
import valentineBg from "@/assets/valentine-bg.jpg";

const CelebrationPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; emoji: string }>>([]);

  useEffect(() => {
    const emojis = ["💖", "💕", "💗", "💝", "✨", "🌹", "💐", "🥰", "😍", "💘"];
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setConfetti(generated);

    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${valentineBg})` }}
      />
      <div className="absolute inset-0 bg-background/30" />

      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="absolute text-2xl"
            style={{
              left: item.left,
              animation: `float-up 5s ease-in-out ${item.delay} infinite`,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <div
        className={`relative z-10 flex flex-col items-center gap-6 px-6 text-center transition-all duration-1000 ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        {/* Big heart */}
        <div
          className="text-8xl sm:text-9xl"
          style={{ animation: "celebrate 1s ease-out forwards" }}
        >
          💖
        </div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-bold text-primary drop-shadow-sm">
          Yay!!!
        </h1>

        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-foreground">
          Your officially Nickus' Valentine 2026 😼😽
        </h2>

        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-lg mt-2">
          I am now the happiest person in the world HEHEHE <br></br>
          See you on Valentine's Day+1 💕
        </p>

        <div className="mt-6 flex gap-4 text-4xl animate-bounce-soft">
          <span>💕</span>
          <span>💍</span>
          <span>💕</span>
        </div>
      </div>
    </div>
  );
};

export default CelebrationPage;
