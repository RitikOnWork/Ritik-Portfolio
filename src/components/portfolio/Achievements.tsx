import { Trophy, Award, Code, Users } from "lucide-react";

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
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones reflecting technical excellence, consistency, and leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:hidden" />

          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 animate-fade-in opacity-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-green-sm z-10 hidden md:block" />
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-green-sm z-10 md:hidden" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                <div className="glass-card p-6 rounded-xl hover-lift group">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 mb-4 group-hover:bg-primary/20 transition-colors ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Tag */}
                  <div className={`inline-flex mb-3 ${index % 2 === 0 ? "md:justify-end md:w-full" : ""}`}>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                      {achievement.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
