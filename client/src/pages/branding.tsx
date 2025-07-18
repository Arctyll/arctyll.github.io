import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Branding() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Branding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download official assets and learn how to use the Arctyll logo properly.
          </p>
        </div>

        {/* Logo Section */}
        <div className="bg-card rounded-lg border border-border p-6 md:p-8 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Official Logo</h2>
          <div className="bg-black rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png"
              alt="Arctyll Logo"
              className="max-h-32 object-contain"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png" download>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
            </a>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-center">Usage Guidelines</h2>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground max-w-2xl mx-auto text-left">
            <li>Do not alter the logo colors or proportions.</li>
            <li>Only use the logo to represent Arctyll, not in unrelated projects.</li>
            <li>Keep clear space around the logo — don’t crowd it with text or images.</li>
            <li>Don’t apply effects (e.g. shadows, glows, distortions) to the logo.</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="mt-12 border-t pt-6 text-sm text-muted-foreground text-center">
          <p>
            All rights to the Arctyll name and logo are © {new Date().getFullYear()} Arctyll.  
            Use is permitted under the above guidelines. Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
    </div>
  );
}