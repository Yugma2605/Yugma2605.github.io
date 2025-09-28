import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Users, Zap, Server, Brain, Mail, TrendingUp, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const projects = [
    {
      title: "MailMind.AI",
      description: "Agentic AI workflow using LangGraph and Gemini Pro to autonomously classify and organize Gmail messages into user-defined categories.",
      period: "May 2025 - August 2025",
      category: "Agentic AI",
      technologies: ["TypeScript", "Git", "Redis", "Upstash", "Supabase", "Gmail Webhook", "Pub/Sub", "LangGraph"],
      highlights: [
        "Achieved 90% classification accuracy and reduced manual triage time by 70%",
        "Processed 10k+ concurrent email events daily with mutex-based concurrency control",
        "Maintained <2s latency and 100% data completeness with resilient backend architecture"
      ],
      metrics: [
        { label: "Accuracy", value: "90%" },
        { label: "Time Saved", value: "70%" },
        { label: "Daily Events", value: "10K+" }
      ],
      icon: <Mail className="w-6 h-6" />,
      gradient: "from-primary/10 to-secondary/10",
      githubUrl: "https://github.com/Yugma2605/MailMind-AI"
    },
    {
      title: "Microservices-Based Chat Platform",
      description: "Scalable real-time messaging platform designed to support over 10,000 concurrent users with secure authentication and media handling capabilities.",
      period: "May 2024 - August 2024",
      category: "Backend",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "Kafka", "GCP SQL", "WebSocket", "JWT"],
      highlights: [
        "Designed 4 core microservices for Authentication, Messaging, Upload, and Notification",
        "Achieved 20% latency reduction through Kafka message queuing",
        "Implemented CI/CD pipelines resulting in 30% faster deployments"
      ],
      metrics: [
        { label: "Concurrent Users", value: "10K+" },
        { label: "Latency Reduction", value: "20%" },
        { label: "Deployment Speed", value: "+30%" }
      ],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-primary/10 to-secondary/10",
      githubUrl: "https://github.com/Yugma2605/Microservices-Chat-Platform"
    },
    {
      title: "Codify.AI",
      description: "Git assistant using MCP Server, TypeScript, Supabase, and RAG to analyze PRs and provide automated code review with intelligent feedback.",
      period: "May 2025 - August 2025",
      category: "Agentic AI",
      technologies: ["TypeScript", "Git", "MCP Server", "Supabase", "RAG"],
      highlights: [
        "Increased defect detection coverage by 35% across code smells, security flaws, and performance issues",
        "Reduced review time by 40% through automated review comments, style fixes, and dependency scans",
        "Stored past reviews in Supabase as vectors for context-aware AI feedback ensuring consistent coding standards"
      ],
      metrics: [
        { label: "Defect Detection", value: "+35%" },
        { label: "Review Time", value: "-40%" },
        { label: "Coverage", value: "Full" }
      ],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-secondary/10 to-primary/10"
    },
    {
      title: "gRPCrypto: Real-Time Cryptocurrency Price Streaming Platform",
      description: "Real-time data streaming application for scalable market insights system providing accurate and low-latency cryptocurrency price updates.",
      period: "August 2025",
      category: "Backend",
      technologies: ["Node.js", "Playwright", "Next.js", "gRPC", "Protocol Buffers"],
      highlights: [
        "Engineered backend using Node.js and Playwright to automate TradingView tabs and scrape live price data",
        "Integrated gRPC with Protocol Buffers for strongly typed, low-latency communication between services",
        "Optimized resource usage by reusing browser tabs across clients, reducing CPU load and improving scalability"
      ],
      metrics: [
        { label: "Latency", value: "Real-time" },
        { label: "Scalability", value: "High" },
        { label: "Efficiency", value: "Optimized" }
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-secondary/10 to-primary/10",
      githubUrl: "https://github.com/Yugma2605/gRPCrypto/tree/main"
    },
    {
      title: "JobSuccess.AI Platform",
      description: "Full-stack job application platform connecting candidates with recruiters, featuring AI-powered resume analysis and automated matching.",
      period: "March 2024 - May 2024",
      category: ["Agentic AI", "Fullstack"],
      technologies: ["TypeScript", "React", "Node.js", "Express", "Firebase", "AWS S3", "Jenkins", "LLM APIs"],
      highlights: [
        "Served 1,000+ candidates and 100+ recruiters with seamless job matching",
        "Integrated LLM APIs for intelligent resume analysis and insights",
        "Implemented CI/CD with Jenkins reducing deployment time by 40%"
      ],
      metrics: [
        { label: "Active Users", value: "1K+" },
        { label: "Recruiters", value: "100+" },
        { label: "Resumes Processed", value: "2K+" }
      ],
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-secondary/10 to-primary/10",
      githubUrl: "https://github.com/Yugma2605/JobSuccess-Platform"
    },
    {
      title: "Real-Time File Converter",
      description: "Serverless file processing workflow using AWS services, enabling users to upload and convert files through a modern React interface.",
      period: "January 2024 - March 2024",
      category: "Fullstack",
      technologies: ["Python", "AWS CDK", "S3", "DynamoDB", "Lambda", "React", "EC2"],
      highlights: [
        "Built automated file processing workflow with serverless architecture",
        "Integrated Lambda functions with DynamoDB for efficient data logging",
        "Enhanced performance by 32.5% through optimized EC2 instance management"
      ],
      metrics: [
        { label: "Performance Gain", value: "32.5%" },
        { label: "Processing Time", value: "Real-time" },
        { label: "Uptime", value: "99.9%" }
      ],
      icon: <Server className="w-6 h-6" />,
      gradient: "from-primary/10 to-secondary/10"
    }
  ];

  const categories = ["All", "Agentic AI", "Backend", "Fullstack"];
  
  const filteredProjects = projects.filter(project => {
    if (selectedCategory === "All") return true;
    if (Array.isArray(project.category)) {
      return project.category.includes(selectedCategory);
    }
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 bg-portfolio-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Projects</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-text bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 w-full justify-center">
            <Filter className="w-4 h-4" />
            <span>Filter by category:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-smooth ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className={`bg-gradient-card border-border/50 hover:border-primary/50 transition-smooth group overflow-hidden ${
              (Array.isArray(project.category) ? project.category.includes("Agentic AI") : project.category === "Agentic AI")
                ? "ring-2 ring-primary/20 shadow-lg shadow-primary/10" 
                : ""
            }`}>
              <div className={`h-2 bg-gradient-to-r ${
                (Array.isArray(project.category) ? project.category.includes("Agentic AI") : project.category === "Agentic AI")
                  ? "from-primary/30 to-secondary/30" 
                  : project.gradient
              }`} />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="flex flex-wrap gap-1">
                            {Array.isArray(project.category) ? (
                              project.category.map((cat, i) => (
                                <Badge 
                                  key={i}
                                  variant="outline" 
                                  className={`text-xs ${
                                    cat === "Agentic AI" 
                                      ? "border-primary text-primary bg-primary/10 font-semibold" 
                                      : "border-primary/50 text-primary"
                                  }`}
                                >
                                  {cat}
                                </Badge>
                              ))
                            ) : (
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${
                                  project.category === "Agentic AI" 
                                    ? "border-primary text-primary bg-primary/10 font-semibold" 
                                    : "border-primary/50 text-primary"
                                }`}
                              >
                                {project.category}
                              </Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs w-fit">
                            {project.period}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Highlights */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg border border-border/50">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-portfolio-skill-tag bg-portfolio-skill-tag/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;