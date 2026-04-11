import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [headlineText, setHeadlineText] = useState("");
  const [showHeadlineCursor, setShowHeadlineCursor] = useState(true);
  
  const fullHeadline = "Ritik Raj";

  useEffect(() => {
    let headlineIndex = 0;
    const headlineTimer = setInterval(() => {
      if (headlineIndex < fullHeadline.length) {
        setHeadlineText(fullHeadline.slice(0, headlineIndex + 1));
        headlineIndex++;
      } else {
        clearInterval(headlineTimer);
        setShowHeadlineCursor(false);
      }
    }, 100);

    return () => clearInterval(headlineTimer);
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
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow animation-delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge - Social Proof */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Open to AI/ML & SDE Roles
            </span>
          </div>

          {/* Main Headline with typing effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in opacity-0 animation-delay-200 min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[5.25rem]">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">{headlineText}</span>
            {showHeadlineCursor && (
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-blink align-middle" />
            )}
          </h1>

          {/* Role Title - Clear positioning */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 animate-fade-in opacity-0 animation-delay-300">
            AI/ML Engineer. Problem Solver.
          </p>

          {/* Value Proposition - Results-driven */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in opacity-0 animation-delay-400">
            Building <span className="text-foreground font-medium">end-to-end AI systems</span> across NLP, vision & predictive modelling with <span className="text-foreground font-medium">Python, TensorFlow & Hugging Face</span>. 300+ DSA problems solved. Shipping production-ready solutions with strong algorithmic depth.
          </p>

          {/* Key Stats - Credibility Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-fade-in opacity-0 animation-delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
              <div className="text-xs md:text-sm text-muted-foreground">ML Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">DSA Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">6+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          {/* CTAs - Optimized for conversion */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green text-base px-8 font-semibold group"
            >
              <a href="#contact">
                <Mail className="mr-2 w-4 h-4" />
                Let's Connect
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 text-primary text-base px-8 font-semibold"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-6 animate-fade-in opacity-0 animation-delay-700">
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              View my projects
              <ArrowRight className="w-3 h-3" />
            </a>
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
