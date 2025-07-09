import { useEffect } from "react";
import { updatePageMeta } from "@/lib/meta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  useEffect(() => {
    updatePageMeta({
      title: "About - Arctyll",
      description:
        "Learn more about Arctyll – the organization empowering Minecraft developers and creating modern tools for the community.",
      url: "https://arctyll.com/about",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Arctyll</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn who we are, what we stand for, and why Arctyll exists.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-center md:text-left" data-aos="fade-up">
          <p>
            <strong>Arctyll</strong> is an independent organization focused on empowering Minecraft developers through modern tooling, clean UI systems, and collaborative development practices.
          </p>

          <p>
            We’re building an ecosystem for modders, creators, and community staff who still love and support Minecraft <code>1.8.9</code> — combining cutting-edge design with stability and performance.
          </p>

          <p>
            From the ground up, everything at Arctyll is designed to help developers create better mods, faster — with less boilerplate and more polish.
          </p>

          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            To reshape the Minecraft modding experience by providing intuitive,
            customizable, and performance-oriented systems — with a design-first mindset.
          </p>

          <h2 className="text-2xl font-bold">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li><strong>Open collaboration</strong> – Anyone can contribute, suggest, or build.</li>
            <li><strong>Polished design</strong> – Modern UI/UX is our foundation.</li>
            <li><strong>Efficiency</strong> – No bloat, just clean performant code.</li>
            <li><strong>Community-driven</strong> – Your feedback shapes our direction.</li>
          </ul>

          <h2 className="text-2xl font-bold">Who’s Behind Arctyll?</h2>
          <p>
            Arctyll is made up of modders, developers, designers, and community staff with a shared passion for Minecraft. Whether it’s Forge development, HUD customization, or chat UX — we build with care and purpose.
          </p>

          <h2 className="text-2xl font-bold">What We're Working On</h2>
          <p>
            We’re currently focused on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li><strong>Veyzen Client</strong> – A modular modding base for 1.8.9</li>
            <li><strong>Configura</strong> – A OneConfig-style configuration system</li>
            <li><strong>Modern UI frameworks</strong> for HUDs, chat, and utilities</li>
          </ul>

          <h2 className="text-2xl font-bold">Join the Movement</h2>
          <p>
            Whether you're a new developer or a seasoned modder, Arctyll is a home for innovation and creativity in the Minecraft modding world.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Get Involved with Arctyll</h3>
            <p className="text-muted-foreground mb-6">
              Want to build with us or just follow our progress?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/Arctyll"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Our GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <Link href="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}