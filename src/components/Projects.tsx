import { ExternalLink, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Website Scanning Using Nmap",
    target: "hotelVrisa.com",
    description: "Conducted comprehensive Nmap scans to identify open ports, running services, and potential vulnerabilities.",
    highlights: [
      "Leveraged Nmap Scripting Engine (NSE) to detect known vulnerabilities and misconfigurations",
      "Generated detailed scan reports with prioritized findings and recommended mitigation to enhance security posture",
    ],
    tools: ["Nmap", "NSE", "Linux CLI"],
  },
  {
    title: "Automating Security Scans using ZAP",
    target: "srishtihospital.in",
    description: "Automated vulnerability scanning using OWASP ZAP for real-world web applications, including SQLi and XSS detection.",
    highlights: [
      "Customized ZAP scripting and output for efficient analysis, ethical testing, and false positive filtering",
    ],
    tools: ["OWASP ZAP", "Browser Proxy", "Linux CLI"],
  },
  {
    title: "Web Vulnerability Assessment using Gobuster",
    target: "resorts.mannatgroup.in",
    description: "Enumerated hidden paths and subdomains to uncover overlooked assets and potential entry points.",
    highlights: [
      "Identified misconfigured subdomains and exposed endpoints contributing to increased attack surface",
      "Documented findings and recommended secure configurations to strengthen web application security",
    ],
    tools: ["Gobuster", "dig", "Linux CLI"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ cd</span> <span className="text-foreground">projects/</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-muted-foreground font-mono">Target:</span>
                <code className="text-sm text-accent font-mono">{project.target}</code>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary"
                    className="bg-secondary/50 text-foreground border border-border hover:border-primary/50 transition-all"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
