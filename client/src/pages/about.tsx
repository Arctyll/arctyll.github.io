import { useEffect, useState } from "react";
import { updatePageMeta } from "@/lib/meta";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updatePageMeta({
      title: "About Us - Arctyll",
      description:
        "Learn more about Arctyll – the organization empowering Minecraft developers and creating modern tools for the community.",
      url: "https://arctyll.com/about",
    });

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Arctyll</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn who we are, what we stand for, and why Arctyll exists.
          </p>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-center md:text-left"
          data-aos="fade-up"
        >
          <p>
            <strong>Arctyll</strong> is an independent organization dedicated to
            improving the Minecraft modding experience. We focus on making
            development tools and systems more modern, efficient, and enjoyable to use.
          </p>

          <p>
            We believe that modding should be accessible and powerful. Our goal is
            to provide clean, well-designed foundations that help developers build
            better mods, faster — with a focus on quality and user experience.
          </p>

          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            To improve Minecraft modding through modern tooling, clean design
            principles, and an open, community-driven approach.
          </p>

          <h2 className="text-2xl font-bold">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-left">
            <li><strong>Clarity</strong> – Simple, focused, and purposeful systems.</li>
            <li><strong>Collaboration</strong> – Built by and for the community.</li>
            <li><strong>Consistency</strong> – Good code and good design, always.</li>
            <li><strong>Transparency</strong> – Everything out in the open.</li>
          </ul>

          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>
            Arctyll is made up of developers, contributors, and community members
            who are passionate about Minecraft. We come together to build tools that
            are clean, intuitive, and enjoyable to use — for ourselves and for
            others.
          </p>

          <h2 className="text-2xl font-bold">Get Involved</h2>
          <p>
            We welcome contributors, feedback, and ideas from anyone interested in
            the future of Minecraft development. Whether you want to help out or just
            follow along, you’re always welcome.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Get Involved with Arctyll</h3>
            <p className="text-muted-foreground mb-6">
              Interested in contributing or staying in the loop?
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
      </div>
    </div>
  );
}