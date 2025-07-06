import { useEffect, useState } from "react";
import { updatePageMeta } from "@/lib/meta";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Code } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    updatePageMeta({
      title: "Arctyll - Minecraft Mod Developers",
      description: "Building the future of Minecraft modding with open-source innovation and community collaboration. Discover our mods, tools, and APIs.",
      url: "https://arctyll.com/"
    });
  
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Arctyll</span> —{" "}
            <br className="hidden sm:block" />
            <span>Changing the World!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Empowering Minecraft Modding Through Open Source.
            <br className="hidden sm:block" />
            <span className="block sm:inline">Crafting intelligent tools, shaping Minecraft's future, pixel by pixel.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/team">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90">
                <Rocket className="mr-2 h-5 w-5" />
                Join Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}