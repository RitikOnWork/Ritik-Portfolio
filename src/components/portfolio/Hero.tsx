import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [nameText, setNameText] = useState("");
  const [headlineText, setHeadlineText] = useState("");
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showHeadlineCursor, setShowHeadlineCursor] = useState(false);
  
  const fullName = "Hello, I'm Ritik Raj";
  const fullHeadline = "Building Intelligent, Scalable Systems";

  useEffect(() => {
    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (nameIndex < fullName.length) {
        setNameText(fullName.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
        setShowNameCursor(false);
        setShowHeadlineCursor(true);
        
        // Start headline animation after name completes
        let headlineIndex = 0;
        const headlineTimer = setInterval(() => {
          if (headlineIndex < fullHeadline.length) {
            setHeadlineText(fullHeadline.slice(0, headlineIndex + 1));
            headlineIndex++;
          } else {
            clearInterval(headlineTimer);
          }
        }, 50);
      }
    }, 70);

    return () => clearInterval(nameTimer);
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

          {/* Name intro with typing animation */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in opacity-0 animation-delay-200 min-h-[1.75rem] md:min-h-[2rem]">
            <span className="text-foreground font-semibold">{nameText}</span>
            {showNameCursor && (
              <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 animate-blink align-middle" />
            )}
          </p>

          {/* Main Headline with typing effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0 animation-delay-300 min-h-[3rem] md:min-h-[4.5rem] lg:min-h-[5.25rem]">
            <span className="text-gradient">{headlineText}</span>
            {showHeadlineCursor && (
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-blink align-middle" />
            )}
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
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 text-primary text-base px-8"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </a>
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