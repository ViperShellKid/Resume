import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Jr. Penetration Tester Learning Path",
    issuer: "TryHackMe",
    certId: "THM-R4G7PN10ES",
    type: "Learning Path",
  },
  {
    title: "Cyber Security 101 Learning Path",
    issuer: "TryHackMe",
    certId: "THM-IMA6GPQIZY",
    type: "Learning Path",
  },
  {
    title: "Networking Certificate of Appreciation",
    issuer: "INS Academy",
    certId: "INS-jDN2B",
    type: "Certificate",
  },
  {
    title: "Cyber Security Certificate of Appreciation",
    issuer: "INS Academy",
    certId: "INS-fwZmz",
    type: "Certificate",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-tech-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ cat</span> <span className="text-foreground">certifications.json</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-all">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  
                  <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge 
                      variant="secondary"
                      className="bg-secondary/50 text-foreground border border-border font-mono text-xs"
                    >
                      {cert.certId}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className="border-primary/50 text-primary text-xs"
                    >
                      {cert.type}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
