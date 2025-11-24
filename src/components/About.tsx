import { GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-tech-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ cat</span> <span className="text-foreground">about.txt</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">Education</h3>
                <p className="text-accent font-semibold mb-1">B.Sc Computer Science</p>
                <p className="text-muted-foreground mb-1">Sree Muthukumara Swamy College, Arts and Science</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">2018 - 2021 • CGPA: 7.2</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
            <h3 className="text-xl font-bold text-foreground mb-4">About Me</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Passionate cybersecurity professional with expertise in penetration testing, 
              vulnerability assessment, and security automation. I specialize in identifying 
              and mitigating security risks in web applications and network infrastructures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in project management and client collaborations, 
              I bring a unique blend of technical security skills and operational excellence 
              to every project.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
