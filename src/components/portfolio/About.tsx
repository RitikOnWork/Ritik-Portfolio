import { GraduationCap, Briefcase, Code2, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Code2, label: "Strong DSA Foundation" },
  { icon: Briefcase, label: "Internship Experience" },
  { icon: Lightbulb, label: "Project-Driven Learning" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate learner with a mission to create intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Education Card */}
            <div className={`glass-card p-8 hover-lift transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">
                    Academic Background
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-medium">
                  Bachelor of Technology in Computer Science
                </h4>
                <p className="text-muted-foreground">Sharda University</p>
                <p className="text-sm text-primary font-medium">
                  Expected Graduation: 2028
                </p>
              </div>
            </div>

            {/* About Text */}
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an emerging Machine Learning Engineer with a strong foundation
                in Computer Science. My passion lies in harnessing data to solve
                complex problems and building intelligent systems that make a
                real-world impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience across Machine Learning, Web Development,
                Cloud, and DevOps, I bring a holistic approach to software
                engineering. I believe in continuous learning and project-driven
                growth.
              </p>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
