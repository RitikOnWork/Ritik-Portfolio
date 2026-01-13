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
      { name: "Low-Level Design", icon: Code2, proficiency: 80 },
      { name: "UI/UX Prototyping", icon: Palette, proficiency: 75 },
      { name: "Figma", icon: SiFigma, proficiency: 70 },
    ],
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: [
      { name: "Java", icon: FaJava, proficiency: 90 },
      { name: "Python", icon: SiPython, proficiency: 95 },
      { name: "HTML", icon: SiHtml5, proficiency: 90 },
      { name: "CSS", icon: SiCss3, proficiency: 85 },
      { name: "JavaScript", icon: SiJavascript, proficiency: 85 },
      { name: "TypeScript", icon: SiTypescript, proficiency: 80 },
      { name: "Bash", icon: Terminal, proficiency: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQLite", icon: SiSqlite, proficiency: 85 },
      { name: "Supabase", icon: SiSupabase, proficiency: 80 },
      { name: "DynamoDB", icon: SiAmazondynamodb, proficiency: 75 },
      { name: "Aurora", icon: Database, proficiency: 70 },
      { name: "Amazon RDS", icon: Database, proficiency: 75 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, proficiency: 85 },
      { name: "GCP", icon: SiGooglecloud, proficiency: 70 },
      { name: "Docker", icon: SiDocker, proficiency: 80 },
      { name: "Kubernetes", icon: SiKubernetes, proficiency: 70 },
      { name: "Terraform", icon: SiTerraform, proficiency: 75 },
      { name: "CI/CD", icon: Workflow, proficiency: 80 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Code2,
    skills: [
      { name: "Flask", icon: SiFlask, proficiency: 85 },
      { name: "Firebase", icon: SiFirebase, proficiency: 80 },
      { name: "Git", icon: SiGit, proficiency: 90 },
      { name: "GitHub", icon: SiGithub, proficiency: 90 },
      { name: "Terragrunt", icon: SiTerraform, proficiency: 70 },
      { name: "Agile/Scrum", icon: Workflow, proficiency: 85 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "PyTorch", icon: SiPytorch, proficiency: 75 },
      { name: "Hugging Face", icon: Brain, proficiency: 80 },
      { name: "LLMs", icon: Brain, proficiency: 85 },
      { name: "SGLang", icon: Brain, proficiency: 70 },
      { name: "OpenRouter", icon: Brain, proficiency: 75 },
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    skills: [
      { name: "Opal by Google", icon: Workflow, proficiency: 75 },
      { name: "n8n", icon: Workflow, proficiency: 80 },
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

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.proficiency}%` : '0%',
                            transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`,
                          }}
                        />
                      </div>
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
