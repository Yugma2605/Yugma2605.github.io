import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "Go", "Rust", "C#"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["React", "Node.js", "Spring Boot", "Next.js", "Django", "Flask", "Express.js", "Vue.js"],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB", "AWS S3", "Elasticsearch", "Snowflake"],
      gradient: "from-primary/20 to-secondary/10"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GCP", "Grafana", "Ansible"],
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

        {/* Skill Categories */}
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-sm py-2 px-4 border-blue-500/50 text-blue-600 bg-blue-50 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-400/50"
                    >
                      {skill}
                    </Badge>
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
                  variant="outline"
                  className="text-sm py-2 px-4 border-green-500/50 text-green-600 bg-green-50 dark:bg-green-950/20 dark:text-green-400 dark:border-green-400/50"
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
