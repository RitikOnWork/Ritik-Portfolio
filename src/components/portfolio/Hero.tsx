import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Building Intelligent, Scalable Systems";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Particle animation */}
      <ParticleBackground />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-400/15 rounded-full blur-[100px] animate-pulse-glow animation-delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in opacity-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Emerging ML Engineer
            </span>
          </div>

          {/* Name intro */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in opacity-0 animation-delay-200">
            I'm <span className="text-foreground font-semibold">Ritik Raj</span>
          </p>

          {/* Main Headline with typing effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0 animation-delay-300">
            <span className="text-gradient">{displayedText}</span>
            <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-blink align-middle" />
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in opacity-0 animation-delay-400">
            Computer Science student passionate about AI, data-driven problem
            solving, and modern software systems. Harnessing data to solve
            complex problems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green text-base px-8"
            >
              <a href="#contact">
                Open to Opportunities
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary text-base px-8"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;