import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { updatePageMeta } from "@/lib/meta";

interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "alpha" | "beta" | "stable" | "not released";
  githubUrl: string;
  downloadUrl?: string;
  docsUrl?: string;
  featured: boolean;
  tags: string[];
  mcVersions: string[];
  modLoader: string[];
}

interface ProjectData {
  projects: Project[];
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetch("/config/projects.json")
      .then((res) => res.json())
      .then((data: ProjectData) => setProjectData(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  const projects = projectData.projects;
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore Arctyll's community-driven Minecraft mods and tools.
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className="flex flex-col md:flex-row gap-4 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "All" : category}
                <Badge variant="secondary" className="ml-2">
                  {category === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-muted-foreground text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}

        {/* Contribute CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented developers to join our open-source community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/Arctyll"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}