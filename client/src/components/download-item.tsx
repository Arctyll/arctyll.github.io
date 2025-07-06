import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, History } from "lucide-react";
import ChangelogModal from "@/components/changelog-modal";

interface DownloadData {
  name: string;
  version: string;
  description: string;
  status: "alpha" | "beta" | "stable";
  mcVersion: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  changelogUrl: string;
}

interface DownloadItemProps {
  download: DownloadData;
  index: number;
}

export default function DownloadItem({ download, index }: DownloadItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "alpha":
        return "status-alpha";
      case "beta":
        return "status-beta";
      case "stable":
        return "status-stable";
      default:
        return "status-alpha";
    }
  };

  return (
    <Card 
      className="card-hover bg-card border-border" 
      data-aos="fade-up" 
      data-aos-delay={index * 100 + 200}
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0">
              <h3 className="text-lg sm:text-xl font-bold">{download.name} {download.version}</h3>
              <Badge className={`${getStatusColor(download.status)} px-3 py-1 text-sm font-medium`}>
                {download.status.charAt(0).toUpperCase() + download.status.slice(1)}
              </Badge>
              <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1 text-sm">
                {download.mcVersion}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4">{download.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="block text-foreground">File Size</span>
                <span className="font-medium">{download.fileSize}</span>
              </div>
              <div>
                <span className="block text-foreground">Released</span>
                <span className="font-medium">{download.releaseDate}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-0 lg:ml-6">
            <Button asChild>
              <a href={download.downloadUrl}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
            <ChangelogModal modId={download.id} modName={download.name}>
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
