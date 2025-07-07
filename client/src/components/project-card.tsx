import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Download, Book, FileText, ArrowLeft } from "lucide-react";
import ChangelogModal from "@/components/changelog-modal";
import { updatePageMeta } from "@/lib/meta";

interface Project {
  name: string;
  description: string;
  status: "alpha" | "beta" | "stable" | "not released";
  githubUrl: string;
  downloadUrl?: string;
  docsUrl?: string;
  category?: string;
  logo?: string;
  features?: string[];
  slug: string;
}

export default function ProjectPage() {
  const [match, params] = useRoute("/project/:slug");
  const [projectData, setProjectData] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/config/projects.json")
      .then(res => res.json())
      .then(data => {
        const found = data.projects.find((p: Project) => p.slug === params?.slug);
        setProjectData(found || null);

        if (found) {
          updatePageMeta({
            title: `${found.name} - Arctyll Project`,
            description: found.description,
            url: `https://arctyll.com/project/${found.slug}`,
          });
        }
      });
  }, [params?.slug]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "stable": return "bg-green-500 text-white";
      case "beta": return "bg-blue-500 text-white";
      case "alpha": return "bg-orange-500 text-white";
      case "not released": return "bg-red-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  if (!projectData) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="text-center">
          <p className="text-muted-foreground">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <Card>
          {projectData.logo && (
            <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${projectData.logo})` }}>
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}

          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">{projectData.name}</h1>
              <Badge className={`${getStatusColor(projectData.status)} capitalize`}>
                {projectData.status}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6">{projectData.description}</p>

            {projectData.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {projectData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </a>
              </Button>

              {projectData.downloadUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={projectData.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              )}

              {projectData.docsUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={projectData.docsUrl} target="_blank" rel="noopener noreferrer">
                    <Book className="h-4 w-4 mr-2" />
                    Docs
                  </a>
                </Button>
              )}
              
              <Button variant="outline" size="sm" asChild>
                <a href={projectData.docsUrl} target="_blank" rel="noopener noreferrer">
                  <Book className="h-4 w-4 mr-2" />
                    More Info
                </a>
              </Button>

              {projectData.category === "mods" && (
                <ChangelogModal modId={projectData.slug} modName={projectData.name}>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Changelog
                  </Button>
                </ChangelogModal>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}