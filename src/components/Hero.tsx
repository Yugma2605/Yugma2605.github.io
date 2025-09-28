import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/5 via-transparent to-muted/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Software Developer
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent leading-tight mb-12 pb-4">
                Yugma Patel
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                AI Engineer & Full-Stack Developer specializing in building intelligent agents, 
                scaling distributed systems, and driving innovation through problem-solving
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:yugmapatel265@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
                <span className="text-sm">yugmapatel265@gmail.com</span>
              </a>
              <a href="tel:+14809311042" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(480) 931-1042</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-smooth"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => window.open('/Resume_Yugma_Patel.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/yugma-patel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Yugma2605" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;