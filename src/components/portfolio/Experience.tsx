import { Calendar, MapPin, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Zetheta Algorithms Private Limited",
    location: "Remote",
    period: "Apr 2026 – Present",
    description: [
      "Contributing to software engineering initiatives focused on algorithmic systems and scalable solutions",
      "Collaborating with the engineering team to design, develop, and optimize production-grade features",
    ],
    type: "Internship",
  },
  {
    title: "Data Science & Analytics Intern",
    company: "Amdox Technologies",
    location: "Remote",
    period: "Nov 2025 – Jan 2026",
    description: [
      "Worked on 3 projects involving data analysis and preprocessing, using Python and data science tools to derive insights from structured datasets",
      "Applied techniques in data visualization and exploratory data analysis (EDA) to support data-driven decision making",
    ],
    type: "Internship",
  },
  {
    title: "IBM SkillsBuild Internship – AI & Cloud",
    company: "Edunet Foundation (with AICTE & IBM)",
    location: "Remote",
    period: "Sep 2025 – Oct 2025",
    description: [
      "Practical exposure to AI & Cloud technologies",
      "Foundational and hands-on training in modern cloud-based AI systems",
    ],
    type: "Internship",
  },
  {
    title: "Web Development Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    period: "Jul 2025",
    description: [
      "Built responsive frontend projects with HTML, CSS, JavaScript, and APIs",
      "Developed apps like Stopwatch, Tic-Tac-Toe with AI, and Weather App",
      "Strengthened DOM manipulation and real-world API usage skills",
    ],
    type: "Internship",
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experiences that shaped my technical journey
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block transition-all duration-1000 ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`} style={{ transformOrigin: "top" }} />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-0 md:pl-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${200 + index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-6 w-4 h-4 rounded-full bg-primary glow-green-sm hidden md:block transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`} style={{ transitionDelay: `${300 + index * 200}ms` }} />

                  <div className="glass-card p-6 md:p-8 hover-lift">
                    {/* Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-medium text-primary mb-4">
                      {exp.type}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
