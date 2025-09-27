import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-portfolio-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Passionate About <span className="bg-gradient-text bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated software developer with a strong foundation in full-stack development, 
            cloud technologies, and modern software architecture. Currently pursuing my Master's at Arizona State University 
            while gaining hands-on experience in building scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">Academic Excellence</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-lg">Master of Science in Computer Science</h4>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Arizona State University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Aug 2023 - May 2025
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">GPA: 3.50/4.00</p>
                  <p className="text-sm">Focus: Software Testing & Security, Agile & Scrum</p>
                </div>

                <div className="border-l-2 border-secondary/20 pl-6">
                  <h4 className="font-semibold text-lg mb-2">Bachelor of Technology in CSE</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Nirma University
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      July 2019 - May 2023
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">GPA: 8.4/10</p>
                  <p className="text-sm">Focus: OOP, Data Structures & Algorithms</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Overview */}
          <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3 text-portfolio-highlight">Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Experienced in building end-to-end web applications with modern frameworks and architectures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">Next.js</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-portfolio-highlight">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Proficient in cloud platforms and modern deployment strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">AWS</Badge>
                    <Badge variant="secondary" className="text-xs">Docker</Badge>
                    <Badge variant="secondary" className="text-xs">Kubernetes</Badge>
                    <Badge variant="secondary" className="text-xs">Terraform</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3 text-portfolio-highlight">Database & Storage</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Expertise in various database technologies and data management solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                    <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                    <Badge variant="secondary" className="text-xs">Redis</Badge>
                    <Badge variant="secondary" className="text-xs">DynamoDB</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">APIs Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;