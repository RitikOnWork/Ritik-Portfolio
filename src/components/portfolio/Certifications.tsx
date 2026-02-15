import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import stanfordLogo from "@/assets/stanford-logo.png";
import udemyLogo from "@/assets/udemy-logo.svg";
import awsLogo from "@/assets/aws-logo.png";
import gfgLogo from "@/assets/gfg-logo.svg";

const certifications = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    issueDate: "Jul 2025",
    credentialId: "UC-7edd600d-b8d6-4d2d-be52-f69d3ec5a7d0",
    credentialUrl: "https://www.udemy.com/certificate/UC-7edd600d-b8d6-4d2d-be52-f69d3ec5a7d0/",
    logo: udemyLogo,
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford University",
    issueDate: "Sep 2025",
    credentialId: "4596ZUDYE2OJ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4596ZUDYE2OJ",
    logo: stanfordLogo,
  },
  {
    title: "GeeksforGeeks 160 Days of DSA Challenge",
    issuer: "GeeksforGeeks",
    issueDate: "Sep 2025",
    credentialId: "ee503b06d8a9605bb0ca39c505bb5984",
    credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/ee503b06d8a9605bb0ca39c505bb5984.pdf",
    logo: gfgLogo,
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "Stanford University",
    issueDate: "Nov 2025",
    credentialId: "X5DS3FZQ6TWO",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/X5DS3FZQ6TWO",
    logo: stanfordLogo,
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Nov 2025",
    credentialId: "1kD9RyLs",
    credentialUrl: "https://www.credly.com/badges/b82253a2-6ba2-44f8-af2b-c5cd9a16c185/print",
    logo: awsLogo,
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    issueDate: "Jan 2026",
    credentialId: "22a2f51b892e7c3da3c304c09f55bc20",
    credentialUrl: "https://www.geeksforgeeks.org/certificate/22a2f51b892e7c3da3c304c09f55bc20",
    logo: gfgLogo,
  },
  {
    title: "21 Projects in 21 Days: Machine Learning, Deep Learning & Generative AI",
    issuer: "GeeksforGeeks",
    issueDate: "Jan 2026",
    credentialId: "a17e581868e93a6fd0b7a9071686ffa6",
    credentialUrl: "https://www.geeksforgeeks.org/certificate/a17e581868e93a6fd0b7a9071686ffa6",
    logo: gfgLogo,
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-16 md:py-24 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Licenses & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional credentials and completed courses
            </p>
          </div>

          {/* Certifications List */}
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.credentialId}
                className={`glass-card p-4 md:p-5 hover-lift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                  {/* Logo */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-white/90 flex items-center justify-center p-2 shrink-0">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <h3 className="text-base md:text-lg font-semibold leading-tight">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground ml-6">
                      {cert.issuer} • Issued {cert.issueDate}
                    </p>

                    <p className="text-xs text-muted-foreground ml-6 mt-1">
                      ID: <span className="font-mono text-foreground/70">{cert.credentialId}</span>
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50 hover:bg-primary/5 shrink-0"
                  >
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      View
                    </a>
                  </Button>
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
