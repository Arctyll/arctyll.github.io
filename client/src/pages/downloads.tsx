import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Search } from "lucide-react";
import DownloadItem from "@/components/download-item";
import { updatePageMeta } from "@/lib/meta";

interface DownloadData {
  id: string;
  name: string;
  version: string;
  description: string;
  status: "alpha" | "beta" | "stable";
  mcVersion: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  changelogUrl: string;
  category: string;
  featured: boolean;
}

interface DownloadsConfig {
  downloads: DownloadData[];
}

export default function Downloads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [downloadsData, setDownloadsData] = useState<DownloadsConfig | null>(null);
  
  useEffect(() => {
    updatePageMeta({
      title: "Downloads - Arctyll",
      description: "Download the latest Arctyll mods, clients, and tools for Minecraft. All projects are open-source and free.",
      url: "https://arctyll.org/downloads"
    });

    fetch('/config/downloads.json')
      .then(res => res.json())
      .then((data: DownloadsConfig) => setDownloadsData(data))
      .catch(err => console.error('Failed to load downloads:', err));
  }, []);

  if (!downloadsData) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-pulse">Loading downloads...</div>
          </div>
        </div>
      </div>
    );
  }

  const downloads = downloadsData.downloads;
  const categories = ["all", ...new Set(downloads.map(d => d.category))];
  
  const filteredDownloads = downloads.filter(download => {
    const matchesSearch = download.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         download.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || download.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Downloads</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the latest versions of our mods, clients, and development tools - all free and open-source
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search downloads..."
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
                  {category === "all" ? downloads.length : downloads.filter(d => d.category === category).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDownloads.map((download, index) => (
            <DownloadItem key={download.id} download={download} index={index} />
          ))}
        </div>

        {/* No results message */}
        {filteredDownloads.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-muted-foreground text-lg">
              No downloads found matching your criteria.
            </p>
          </div>
        )}

        {/* Installation Guide */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Installation Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">For Mods:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Download and install Minecraft Forge or Fabric</li>
                  <li>Download the mod file (.jar)</li>
                  <li>Place the file in your mods folder</li>
                  <li>Launch Minecraft with the mod loader profile</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">For Clients:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Download the client installer</li>
                  <li>Run the installer as administrator</li>
                  <li>Follow the installation wizard</li>
                  <li>Launch from the new shortcut</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}