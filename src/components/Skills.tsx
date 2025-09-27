import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Go", level: 75 },
        { name: "Rust", level: 70 },
        { name: "C#", level: 75 }
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "React", level: 92 },
        { name: "Node.js", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 82 },
        { name: "Express.js", level: 87 },
        { name: "Vue.js", level: 78 }
      ],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "DynamoDB", level: 82 },
        { name: "AWS S3", level: 85 },
        { name: "Elasticsearch", level: 75 },
        { name: "Snowflake", level: 70 }
      ],
      gradient: "from-primary/20 to-secondary/10"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 88 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 80 },
        { name: "Jenkins", level: 82 },
        { name: "GCP", level: 78 },
        { name: "Grafana", level: 75 },
        { name: "Ansible", level: 70 }
      ],
      gradient: "from-secondary/20 to-primary/10"
    }
  ];

  const additionalSkills = [
    "GraphQL", "REST API", "SOAP", "gRPC", "Microservices", "WebSocket", 
    "JWT", "OAuth", "TDD", "Agile", "Scrum", "Git", "Linux", "SDLC", 
    "ETL Pipelines", "MVC", "Redux", "Cypress", "Selenium", "Postman"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Skills</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-text bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning modern development technologies, cloud platforms, and software engineering best practices
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} border border-border/50`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {additionalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-portfolio-skill-tag border border-border/50 hover:border-primary/50 transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Continuously learning and adapting to emerging technologies while maintaining expertise in 
            proven solutions that deliver real business value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;