import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yugmapatel265@gmail.com",
      href: "mailto:yugmapatel265@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(480) 931-1042",
      href: "tel:+14809311042"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "yugma-patel",
      href: "https://www.linkedin.com/in/yugma-patel/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "Yugma2605",
      href: "https://github.com/Yugma2605"
    },
    // {
    //   icon: <MapPin className="w-5 h-5" />,
    //   label: "Location",
    //   value: "Arizona, USA",
    //   href: null
    // }
  ];

  const handleDownloadResume = () => {
    window.open('/Resume_Yugma_Patel.pdf', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-text bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology. 
            I'm always open to connecting with fellow developers and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-0.5">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.label === "LinkedIn" || info.label === "GitHub" ? "_blank" : undefined}
                            rel={info.label === "LinkedIn" || info.label === "GitHub" ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-primary hover:bg-primary-glow text-primary-foreground"
                    onClick={() => window.open("mailto:yugmapatel265@gmail.com", "_blank")}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={handleDownloadResume}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm actively seeking full-time software development opportunities where I can contribute 
                      to innovative projects and continue growing as a developer. Whether you're looking for 
                      someone with expertise in full-stack development, cloud architecture, or modern web technologies, 
                      I'd love to discuss how I can add value to your team.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-portfolio-highlight">What I Bring</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Full-stack development expertise
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Cloud-native architecture design
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Modern DevOps practices
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          Agile development mindset
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-portfolio-highlight">Current Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
                            Available for Opportunities
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Graduated August 2025
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Open to full-time positions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground text-center">
                      Prefer email for initial contact • Response within 24 hours • 
                      Available for video calls in MST timezone
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;