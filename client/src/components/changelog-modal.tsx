import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays, GitBranch, FileText } from "lucide-react";

interface Change {
  added?: string[];
  changed?: string[];
  fixed?: string[];
  removed?: string[];
}

interface Version {
  version: string;
  releaseDate: string;
  mcVersion: string;
  type: string;
  changes: Change;
}

interface Mod {
  name: string;
  description: string;
  versions: Version[];
}

interface ChangelogData {
  mods: { [key: string]: Mod };
}

interface ChangelogModalProps {
  modId: string;
  modName: string;
  children: React.ReactNode;
}

export default function ChangelogModal({ modId, modName, children }: ChangelogModalProps) {
  const [changelogData, setChangelogData] = useState<ChangelogData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && !changelogData) {
      fetch('/config/changelogs.json')
        .then(res => res.json())
        .then((data: ChangelogData) => setChangelogData(data))
        .catch(err => console.error('Failed to load changelogs:', err));
    }
  }, [isOpen, changelogData]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major': return 'bg-blue-500';
      case 'minor': return 'bg-green-500';
      case 'patch': return 'bg-yellow-500';
      case 'beta': return 'bg-purple-500';
      case 'alpha': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const renderChangeSection = (title: string, changes: string[] | undefined, icon: string) => {
    if (!changes || changes.length === 0) return null;

    return (
      <div className="mb-4">
        <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-2 flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </h4>
        <ul className="space-y-1">
          {changes.map((change, index) => (
            <li key={index} className="text-sm text-foreground/90 pl-4 border-l-2 border-muted">
              {change}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const mod = changelogData?.mods[modId];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Changelog - {modName}</span>
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          {!changelogData ? (
            <div className="text-center py-8">
              <div className="animate-pulse">Loading changelog...</div>
            </div>
          ) : !mod ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No changelog available for this mod.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Mod Info */}
              <div className="pb-4 border-b border-border">
                <h3 className="text-lg font-semibold mb-2">{mod.name}</h3>
                <p className="text-muted-foreground">{mod.description}</p>
              </div>

              {/* Versions */}
              <div className="space-y-6">
                {mod.versions.map((version, index) => (
                  <div key={version.version} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <GitBranch className="h-4 w-4" />
                        <span className="font-medium">Version {version.version}</span>
                        <Badge className={`${getTypeColor(version.type)} text-white`}>
                          {version.type}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {new Date(version.releaseDate).toLocaleDateString()}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Compatible with Minecraft {version.mcVersion}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        {renderChangeSection("✨ Added", version.changes.added, "+")}
                        {renderChangeSection("🔧 Changed", version.changes.changed, "~")}
                      </div>
                      <div>
                        {renderChangeSection("🐛 Fixed", version.changes.fixed, "✓")}
                        {renderChangeSection("🗑️ Removed", version.changes.removed, "-")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}