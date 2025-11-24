import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Benefit Administration",
    company: "Wipro",
    period: "Mar 2024 - Oct 2025",
    type: "Project Management, Client Collaborations",
    responsibilities: [
      "Pension data operations for two U.S. clients, including annuity and lump sum",
      "Performed monthly reconciliation and error checks to ensure data accuracy and compliance",
      "Updated and maintained benefit records using HRO Workbench, Mainframe, and ATE",
      "Logged and tracked operational issues using JIRA, ensuring timely resolution and documentation",
    ],
  },
  {
    title: "Process Executive",
    company: "Cognizant",
    period: "Jun 2022 - Oct 2023",
    type: "Ms Excel, Client Request, Collaborations",
    responsibilities: [
      "Led check capture collaboration with Cognizant, overseeing operations across 9 U.S. locations",
      "Implemented cutting-edge image RPS tool, processing scanned checks with efficiency",
      "Verified key information, accuracy in check amount, payer details, date, MICR line, and signatures",
      "Introduced quality control measures, resulting in error-free processing and heightened customer satisfaction",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-tech-darker">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">$ cat</span> <span className="text-foreground">experience.log</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-accent font-semibold text-lg">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.type}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-mono">{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
