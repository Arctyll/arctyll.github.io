import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Sparkles,
  Layout,
  MoveDiagonal,
  EyeOff,
  Slash,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Branding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin" />
      </div>
    );
  }

  const guidelines = [
    {
      icon: Sparkles,
      title: "Use Appropriately",
      description:
        "Only use the logo to represent Arctyll — never in unrelated projects or forks.",
      color: "bg-primary",
    },
    {
      icon: Layout,
      title: "Respect Spacing",
      description:
        "Maintain enough clear space around the logo to preserve its visual integrity.",
      color: "bg-blue-500",
    },
    {
      icon: MoveDiagonal,
      title: "Do Not Distort",
      description:
        "Avoid stretching, warping, rotating, or skewing the logo.",
      color: "bg-red-500",
    },
    {
      icon: EyeOff,
      title: "No Effects",
      description:
        "Do not apply shadows, glows, overlays, or other visual filters to the logo.",
      color: "bg-gray-600",
    },
    {
      icon: Slash,
      title: "Avoid Bad Backgrounds",
      description:
        "Place the logo on solid, high-contrast backgrounds only — not busy or low-contrast ones.",
      color: "bg-yellow-500",
    },
    {
      icon: Download,
      title: "Use Official Assets",
      description:
        "Only use logos provided by the Arctyll team to ensure quality and consistency.",
      color: "bg-green-600",
    },
  ];

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

        {/* Usage Guidelines */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-center">Usage Guidelines</h2>
            <div className="space-y-6">
              {guidelines.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}
                  >
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div
          className="mt-16 border-t pt-6 text-sm text-muted-foreground text-center"
          data-aos="fade-up"
        >
          <p>
            All rights to the Arctyll name and logo are © {new Date().getFullYear()} Arctyll.
            Use is permitted under the above guidelines. Not affiliated with Mojang or Microsoft.
          </p>
        </div>
      </div>
    </div>
  );
}