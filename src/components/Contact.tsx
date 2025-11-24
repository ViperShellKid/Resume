import { Mail, MapPin, Linkedin, Github, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ echo</span> <span className="text-foreground">"Get in Touch"</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:viper.shellkid@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    viper.shellkid@gmail.com
                  </p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/30">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/arun-shellkid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/ViperShellKid/ViperShellKid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
            <h3 className="text-2xl font-bold text-foreground mb-6">Extracurricular Activities</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 h-fit">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">CTF Participant</h4>
                  <p className="text-sm text-muted-foreground">
                    Regularly participate in CTF challenges on platforms like TryHackMe
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 h-fit">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Lab Environments</h4>
                  <p className="text-sm text-muted-foreground">
                    Design and test custom lab environments for privilege escalation and network enumeration practice
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 h-fit">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fitness & Sports</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintain regular fitness routines and competitive sports involvement to build resilience and mental focus
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
            onClick={() => window.location.href = 'mailto:viper.shellkid@gmail.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
