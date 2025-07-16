import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Github, Info, Lightbulb } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  return (
    <section className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center py-24 hero-gradient text-center">
        <div className="container px-4 sm:px-6 z-10" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Arctyll</span> —{" "}
            <br className="hidden sm:block" />
            <span>Changing the World!</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto px-4">
            Empowering Minecraft Modding Through Open Source.
            <br className="hidden sm:block" />
            <span className="block sm:inline">
              Crafting intelligent tools, shaping Minecraft’s future, pixel by pixel.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="https://github.com/Arctyll">
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

      {/* Info Sections */}
      <div className="hero-gradient border-t border-border py-20 space-y-24">
        {/* Who We Are — Always Left Aligned */}
        <div className="container mx-auto px-6" data-aos="fade-right">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl font-bold mb-3">Who We Are</h2>
            <p className="text-muted-foreground text-base mb-6 max-w-2xl">
              We’re a passionate team of open-source Minecraft modders shaping the game's future with powerful tools and ideas.
            </p>
            <Link href="/about">
              <Button size="lg">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Our Commitment — Always Right Aligned */}
        <div className="container mx-auto px-6" data-aos="fade-left">
          <div className="flex flex-col items-end text-right">
            <h2 className="text-3xl font-bold mb-3">Our Commitment</h2>
            <p className="text-muted-foreground text-base mb-6 max-w-2xl">
              We believe open-source is the future of modding — built for the community, by the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/commitment">
                <Button variant="outline" size="lg">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Why Open Source?
                </Button>
              </Link>
              <Link href="https://github.com/Arctyll">
                <Button variant="secondary" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}