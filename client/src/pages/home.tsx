import { useEffect, useState } from "react";
import { updatePageMeta } from "@/lib/meta";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Github, Info } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col hero-gradient">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center py-24">
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
              <span className="block sm:inline">
                Crafting intelligent tools, shaping Minecraft's future, pixel by pixel.
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
      </div>

      {/* Info Sections */}
      <div className="w-full bg-background border-t border-border py-16 space-y-16">
        {/* Who We Are: text left */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Arctyll is a passionate team of open-source developers building tools,
              mods, and systems to revolutionize Minecraft modding. We believe in
              collaborative growth, innovation, and transparency.
            </p>
            <Link href="/about">
              <Button size="lg">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2" />
        </div>

        {/* Our Commitment: text right */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 hidden md:block" />
          <div className="md:w-1/2 text-left md:text-right">
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We are committed to open-source development because we believe in
              transparency, learning, and the power of community-driven innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/why-open-source">
                <Button variant="outline" size="lg">
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