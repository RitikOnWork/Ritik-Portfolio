import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University",
    issueDate: "Sep 2025",
    credentialId: "4596ZUDYE2OJ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4596ZUDYE2OJ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/1200px-Seal_of_Leland_Stanford_Junior_University.svg.png",
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 md:py-32 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Licenses & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional credentials and completed courses
            </p>
          </div>

          {/* Certifications List */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className={`glass-card p-6 md:p-8 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Logo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white/10 flex items-center justify-center p-3 shrink-0">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Award className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground mb-1 ml-8">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground mb-3 ml-8">
                      Issued {cert.issueDate}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 ml-8">
                      Credential ID: <span className="font-mono text-foreground/80">{cert.credentialId}</span>
                    </p>

                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="ml-8 border-border hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Show Credential
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
