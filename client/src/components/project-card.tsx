import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, Book, History } from "lucide-react";
import ChangelogModal from "@/components/changelog-modal";

interface Project {
  name: string;
  description: string;
  status: "alpha" | "beta" | "stable" | "not released";
  githubUrl: string;
  downloadUrl ? : string;
  docsUrl ? : string;
  category ? : string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const getModId = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "stable":
      return "bg-green-500 text-white";
    case "beta":
      return "bg-yellow-500 text-white";
    case "alpha":
      return "bg-orange-500 text-white";
    case "not released":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const modId = getModId(project.name);
  
  return (
    <Card
      className="card-hover bg-card border-border"
      data-aos="fade-up"
      data-aos-delay={index * 100 + 200}
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{project.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                className={`${getStatusColor(
                  project.status
                )} whitespace-nowrap inline-flex items-center px-3 py-1 text-sm font-medium capitalize`}
              >
                {project.status}
              </Badge>
              {project.category && (
                <Badge
                  variant="outline"
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1 text-sm capitalize"
                >
                  {project.category}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
          </div>

          {/* Buttons (stacked vertically always) */}
          <div className="flex flex-col gap-2 mt-6 lg:mt-0">
            {project.downloadUrl && (
              <Button asChild>
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            )}
            {project.docsUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Book className="mr-2 h-4 w-4" />
                  Docs
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
            <ChangelogModal modId={modId} modName={project.name}>
              <Button variant="outline">
                <History className="mr-2 h-4 w-4" />
                Changelog
              </Button>
            </ChangelogModal>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}