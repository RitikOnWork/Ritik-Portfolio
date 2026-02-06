import { Trophy, Award, Code, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const achievements = [
  {
    icon: Trophy,
    title: "Google Arcade Facilitator Program – Arcade Legend",
    description:
      "Achieved the highest level of recognition in the Google Arcade Facilitator Program for exceptional participation, consistent performance, and active engagement across multiple learning tracks.",
    tag: "Highest Recognition",
  },
  {
    icon: Users,
    title: "Top 50 Team – Smart India Hackathon (Internal)",
    description:
      "Led and contributed to a high-performing team that ranked among the top 50 in the internal Smart India Hackathon, focusing on ideation, problem-solving, and building innovative solutions.",
    tag: "Team Leadership",
  },
  {
    icon: Award,
    title: "Participant – Microsoft Copilot Event",
    description:
      "Gained hands-on exposure to Microsoft Copilot and AI-powered productivity tools, exploring real-world applications of AI in software development and professional workflows.",
    tag: "AI & Productivity",
  },
  {
    icon: Code,
    title: "Top 50 Rank on GeeksforGeeks (University Level)",
    description:
      "Ranked among the top 50 students in my university on the GeeksforGeeks platform through consistent problem-solving in Data Structures, Algorithms, and core programming concepts.",
    tag: "DSA Excellence",
  },
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-14 md:py-16 relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Key milestones reflecting technical excellence, consistency, and leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-card p-4 rounded-xl hover-lift group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                  {achievement.tag}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{achievement.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
