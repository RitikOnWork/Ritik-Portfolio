import { Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/RitikOnWork", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritikonwork/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ritikraj.ai.dev@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const codingProfiles = [
    { href: "https://leetcode.com/u/RitikOnWork/", label: "LeetCode" },
    { href: "https://www.geeksforgeeks.org/profile/iritik_here", label: "GeeksforGeeks" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold text-gradient mb-4 inline-block">
              RR
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building intelligent, scalable systems with passion for clean code and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coding Profiles */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Coding Profiles</h4>
            <ul className="space-y-2">
              {codingProfiles.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Code2 className="w-3 h-3" />
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ritik Raj. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
