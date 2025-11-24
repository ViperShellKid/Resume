import { Shield, Terminal, Network, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Penetration Testing", icon: Shield, color: "text-primary" },
  { name: "Linux", icon: Terminal, color: "text-accent" },
  { name: "Networking", icon: Network, color: "text-primary" },
  { name: "Wireshark", icon: Search, color: "text-accent" },
  { name: "Metasploit", icon: Shield, color: "text-primary" },
  { name: "Nmap", icon: Network, color: "text-accent" },
  { name: "Burpsuite", icon: Search, color: "text-primary" },
  { name: "Gobuster", icon: Terminal, color: "text-accent" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ ls</span> <span className="text-foreground">skills/</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-all">
                    <Icon className={`w-6 h-6 ${skill.color} group-hover:animate-glow-pulse`} />
                  </div>
                  <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
