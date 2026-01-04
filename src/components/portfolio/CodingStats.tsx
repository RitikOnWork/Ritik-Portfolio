import { ExternalLink, Code2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "RitikOnWork",
    url: "https://leetcode.com/u/RitikOnWork/",
    statsImage: "https://leetcard.jacoblin.cool/RitikOnWork?theme=dark&font=Karma&ext=heatmap",
    description: "Problem solving & algorithmic challenges",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "hover:border-yellow-500/50",
  },
  {
    platform: "GeeksforGeeks",
    username: "iritik_here",
    url: "https://www.geeksforgeeks.org/profile/iritik_here",
    statsImage: "https://geeks-for-geeks-stats-card.vercel.app/?username=iritik_here&theme=dark",
    description: "DSA practice & coding fundamentals",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/50",
  },
];

const CodingStats = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="coding-stats" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      {/* Background accent */}
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Coding <span className="text-gradient">Activity</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My problem-solving journey across competitive programming platforms
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {codingProfiles.map((profile, index) => (
              <div
                key={profile.platform}
                className={`glass-card p-6 hover-lift transition-all duration-700 border border-border/50 ${profile.borderColor} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center`}>
                      {profile.platform === "LeetCode" ? (
                        <Trophy className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <Code2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{profile.platform}</h3>
                      <p className="text-sm text-muted-foreground">@{profile.username}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50"
                  >
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{profile.description}</p>

                {/* Stats Image */}
                <div className="w-full overflow-hidden rounded-lg bg-background/50">
                  <img
                    src={profile.statsImage}
                    alt={`${profile.platform} stats for ${profile.username}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
