import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          <div className="text-5xl font-bold text-gradient animate-pulse">RR</div>
          {/* Glow ring */}
          <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/30 animate-ping" />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-green-400 to-emerald-400 rounded-full animate-loading-bar" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
