import { useState } from "react";
import FloatingHearts from "./FloatingHearts";
import AreYouSurePage from "./AreYouSurePage";
import CelebrationPage from "./CelebrationPage";
import valentineBg from "@/assets/valentine-bg.jpg";

type Page = "proposal" | "are-you-sure" | "celebration";

const ValentineProposal = () => {
  const [currentPage, setCurrentPage] = useState<Page>("proposal");

  if (currentPage === "are-you-sure") {
    return <AreYouSurePage onAccept={() => setCurrentPage("celebration")} />;
  }

  if (currentPage === "celebration") {
    return <CelebrationPage />;
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${valentineBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Heart emoji */}
        <div className="text-7xl animate-bounce-soft">💝</div>

        {/* Main question */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground drop-shadow-sm">
          Will you be my
        </h1>
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold text-primary drop-shadow-sm">
          Valentine?
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-md">
          Every moment with you is a gift 💕
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => setCurrentPage("celebration")}
            className="px-10 py-4 text-xl font-body font-semibold rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-glow"
          >
            Yes! 💖
          </button>
          <button
            onClick={() => setCurrentPage("are-you-sure")}
            className="px-10 py-4 text-xl font-body font-semibold rounded-full bg-secondary text-secondary-foreground shadow-md transition-all duration-300 hover:scale-105"
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValentineProposal;
