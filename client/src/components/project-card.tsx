import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, Book, FileText } from "lucide-react";
import ChangelogModal from "@/components/changelog-modal";

interface Project {
  name: string;
  description: string;
  status: "alpha" | "beta" | "stable";
  githubUrl: string;
  downloadUrl?: string;
  docsUrl?: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Helper function to convert project name to ID format
const getModId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable":
        return "bg-green-500 hover:bg-green-600";
      case "beta":
        return "bg-blue-500 hover:bg-blue-600";
      case "alpha":
        return "bg-orange-500 hover:bg-orange-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const modId = getModId(project.name);

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg group" data-aos="fade-up" data-aos-delay={index * 100}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>
          </div>
          <Badge className={`${getStatusColor(project.status)} text-white ml-2 flex-shrink-0`}>
            {project.status}
          </Badge>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Source
              </a>
            </Button>
            
            {project.downloadUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            )}
            
            {project.docsUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                  <Book className="h-4 w-4 mr-2" />
                  Docs
                </a>
              </Button>
            )}

            {/* Only show changelog for mods */}
            {project.category === "mods" && (
              <ChangelogModal modId={modId} modName={project.name}>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Changelog
                </Button>
              </ChangelogModal>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}