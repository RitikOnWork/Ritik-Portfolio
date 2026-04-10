import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Human-Resource-Management-System",
    description:
      "A premium, full-stack Human Resource Management SaaS platform designed to manage the modern enterprise workforce securely and efficiently. Built with a stunning, performance-driven dark aesthetic.",
    tech: ["Full-Stack", "SaaS", "HR Management", "Dark UI"],
    github: "https://github.com/RitikOnWork/Human-Resource-Management-System.git",
  },
  {
    title: "Ritik-Portfolio",
    description:
      "A modern, responsive developer portfolio showcasing projects, skills, and experience with elegant design and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/RitikOnWork/Ritik-Portfolio.git",
  },
  {
    title: "DocsAssist — AI Powered Documentation Assistant",
    description:
      "Designing an AI assistant to answer user queries by understanding large-scale documentation using NLP-based query processing and contextual information retrieval.",
    tech: ["Python", "NLP", "ML", "React.js"],
    github: "https://github.com/RitikOnWork",
  },
  {
    title: "CropCast — Agricultural Yield Prediction Model",
    description:
      "Trained an XGBoost regression model on 10 years of ICAR crop and weather data, achieving RMSE of 0.18. Deployed an interactive Streamlit dashboard for real-time yield forecasts.",
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "Streamlit"],
    github: "https://github.com/RitikOnWork",
  },
  {
    title: "iValidate",
    description:
      "Smart and secure email validation tool to improve accuracy and deliverability.",
    tech: ["Python", "Validation", "API"],
    github: "https://github.com/RitikOnWork",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background accent */}
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and experiments
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card p-6 hover-lift group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project icon/preview placeholder */}
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/20 to-green-400/10 mb-5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-green-400/20 transition-all duration-300">
                  <ExternalLink className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-border hover:border-primary/50 hover:bg-primary/5"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
