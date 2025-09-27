import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import yugmaHeadshot from "@/assets/yugma-headshot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                Software Developer
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent leading-tight">
                Yugma Patel
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Full-Stack Developer specializing in modern web technologies, 
                cloud architecture, and scalable solutions
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://www.linkedin.com/in/yugma-patel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/yugmapatel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img 
                  src={yugmaHeadshot} 
                  alt="Yugma Patel - Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;