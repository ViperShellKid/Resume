import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-tech-darker border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> Arun.M © {new Date().getFullYear()}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-primary">React</span> & <span className="text-accent">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
