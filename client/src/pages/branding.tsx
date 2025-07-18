import { useEffect, useState } from "react";
import { Download, Slash, Sparkles, Layout, MoveDiagonal, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const guidelines = [
  {
    icon: <Sparkles className="w-5 h-5 text-primary shrink-0" />,
    text: "Use the logo only to represent Arctyll — not in unrelated contexts.",
  },
  {
    icon: <Layout className="w-5 h-5 text-primary shrink-0" />,
    text: "Maintain enough clear space around the logo at all times.",
  },
  {
    icon: <MoveDiagonal className="w-5 h-5 text-primary shrink-0" />,
    text: "Do not stretch, rotate, or warp the logo.",
  },
  {
    icon: <EyeOff className="w-5 h-5 text-primary shrink-0" />,
    text: "Never apply shadows, glows, filters, or distortions.",
  },
  {
    icon: <Slash className="w-5 h-5 text-primary shrink-0" />,
    text: "Avoid placing the logo over noisy backgrounds or low-contrast colors.",
  },
  {
    icon: <Download className="w-5 h-5 text-primary shrink-0" />,
    text: "Always use the most up-to-date official assets.",
  },
];

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
            Arctyll <span className="gradient-text">Branding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download official assets and learn how to use the Arctyll logo properly.
          </p>
        </div>

        {/* Logo Section */}
        <div
          className="bg-card rounded-lg border border-border p-6 md:p-8 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4">Official Logo</h2>
          <div className="bg-black rounded-lg py-8 px-4 flex justify-center items-center">
            <img
              src="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png"
              alt="Arctyll Logo"
              className="max-h-32 object-contain"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png"
              download
            >
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download PNG
              </Button>
            </a>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-12" data-aos="fade-up">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Usage Guidelines</h2>
            <div className="space-y-5">
              {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {guideline.icon}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {guideline.text}
                </p>
              </div>
              ))}
            </div>
          </div>
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