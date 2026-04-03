import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const education = [
  {
    degree: "B.Tech — Computer Science (AI & Machine Learning)",
    institution: "Sharda University, Greater Noida",
    period: "Aug 2024 – Jun 2028",
    icon: GraduationCap,
  },
  {
    degree: "Class XII — CBSE",
    institution: "Holy Cross Public School, Muzaffarpur",
    period: "May 2023",
    icon: GraduationCap,
  },
  {
    degree: "Class X — CBSE",
    institution: "Holy Cross Public School, Muzaffarpur",
    period: "May 2021",
    icon: GraduationCap,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="education" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block transition-all duration-1000 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`} style={{ transformOrigin: "top" }} />

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-0 md:pl-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${200 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-6 w-4 h-4 rounded-full bg-primary glow-green-sm hidden md:block transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`} style={{ transitionDelay: `${300 + index * 200}ms` }} />

                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
