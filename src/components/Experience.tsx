import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ArrowRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "XpertDox LLC",
      location: "Arizona, USA",
      period: "January 2025 - August 2025",
      type: "Full-time",
      achievements: [
        "Built dashboards and ticketing system using AWS, MongoDB, TypeScript and Next.js, improving task tracking efficiency by 35%",
        "Led migration of file storage system from Dropbox APIs to Google Cloud Filestore, reducing latency by 40%",
        "Designed Redis-backed job queue system with priority-based routing, reducing job latency by 40%"
      ],
      technologies: ["AWS", "MongoDB", "TypeScript", "Next.js", "Google Cloud", "Redis"]
    },
    {
      title: "Software Developer",
      company: "School of Earth and Space Exploration - Arizona State University",
      location: "Arizona, USA", 
      period: "December 2023 - December 2024",
      achievements: [
        "Collaborated with NASA scientists to build interactive Mars data visualization tool using Python, Dash, and Flask",
        "Developed Mars map using TiTiler and Dash Leaflet, optimizing 1+ TB of data handling",
        "Deployed visualization tool using Docker, Terraform and Kubernetes with 99.9% uptime"
      ],
      technologies: ["Python", "Dash", "Flask", "Docker", "Terraform", "Kubernetes", "TiTiler"]
    },
    {
      title: "Software Development Intern",
      company: "Silver Touch Technologies Limited",
      location: "Gujarat, India",
      period: "January 2023 - July 2023", 
      type: "Internship",
      achievements: [
        "Developed 30+ RESTful APIs for Spikizi using Python, Django, and PostgreSQL",
        "Integrated Stripe for payments, Google Cloud SDK for uploads, and Google OAuth for authentication",
        "Designed backend of Crypto Wallet application using Node.js and Docker with Angular frontend"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Node.js", "Docker", "Angular", "Stripe"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-text bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building impactful solutions across diverse industries, from NASA research tools to enterprise applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-portfolio-experience-accent/50 transition-smooth group">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-portfolio-experience-accent/10 border border-portfolio-experience-accent/20 mt-1">
                        <Building className="w-5 h-5 text-portfolio-experience-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-portfolio-experience-accent font-medium mb-2">{exp.company}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          {exp.type && (
                            <Badge variant="secondary" className="text-xs mt-2">
                              {exp.type}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Achievements */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-smooth" />
                          <p className="text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-portfolio-skill-tag bg-portfolio-skill-tag/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;