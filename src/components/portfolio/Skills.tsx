import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPytorch,
  SiFigma,
  SiSqlite,
  SiSupabase,
  SiAmazondynamodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Terminal, Brain, Workflow, Database, Cloud, Code2, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Design",
    icon: Palette,
    skills: [
      { name: "Low-Level Design", icon: Code2 },
      { name: "UI/UX Prototyping", icon: Palette },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Bash", icon: Terminal },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQLite", icon: SiSqlite },
      { name: "Supabase", icon: SiSupabase },
      { name: "DynamoDB", icon: SiAmazondynamodb },
      { name: "Aurora", icon: Database },
      { name: "Amazon RDS", icon: Database },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "CI/CD", icon: Workflow },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Code2,
    skills: [
      { name: "Flask", icon: SiFlask },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Terragrunt", icon: SiTerraform },
      { name: "Agile/Scrum", icon: Workflow },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: Brain },
      { name: "LLMs", icon: Brain },
      { name: "SGLang", icon: Brain },
      { name: "OpenRouter", icon: Brain },
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    skills: [
      { name: "Opal by Google", icon: Workflow },
      { name: "n8n", icon: Workflow },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background accent */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning design, development, cloud, and AI
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`glass-card p-6 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-card flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                    >
                      <skill.icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
