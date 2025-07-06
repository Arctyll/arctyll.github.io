import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  
  useEffect(() => {
    updatePageMeta({
      title: "Projects - Arctyll",
      description: "Explore Arctyll's innovative Minecraft mods, clients, and development tools. All projects are open-source and community-driven.",
      url: "https://arctyll.com/projects"
    });
    
    fetch('/config/projects.json')
      .then(res => res.json())
      .then((data: ProjectData) => setProjectData(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-pulse">Loading projects...</div>
          </div>
        </div>
      </div>
    );
  }

  const projects = projectData.projects;
  const categories = ["all", "mods", "clients", "apis"];
  
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative tools and mods that enhance the Minecraft experience for players and developers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
              <Badge variant="secondary" className="ml-2">
                {category === "all" ? projects.length : getProjectsByCategory(category).length}
              </Badge>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-muted-foreground text-lg">
              No projects found in the {selectedCategory} category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented developers to join our open-source community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://github.com/arctyll" 
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