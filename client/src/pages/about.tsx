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
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Arctyll</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a better modding future — together.
          </p>
        </div>

        {/* Body Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <p>
            <strong>Arctyll</strong> is an independent organization focused on
            empowering Minecraft developers through modern tooling, clean design
            systems, and open collaboration.
          </p>

          <p>
            We specialize in creating advanced, user-friendly modding platforms —
            starting with the iconic <code>Minecraft 1.8.9</code> version where much
            of the competitive and community-driven gameplay thrives today.
          </p>

          <p>
            At Arctyll, we believe modding should be powerful and polished.
            Whether you're building tools, utilities, clients, or UI frameworks —
            our ecosystem is made for creators who care about performance,
            usability, and aesthetics.
          </p>

          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            To modernize the Minecraft modding experience by developing intuitive,
            customizable systems that help developers focus on what matters:
            creativity, performance, and user experience.
          </p>

          <h2 className="text-2xl font-bold">What We Stand For</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Developer-first mindset</strong> — no bloat, no nonsense.</li>
            <li><strong>Modern UI/UX</strong> — powerful doesn’t mean ugly.</li>
            <li><strong>Open collaboration</strong> — your feedback shapes our future.</li>
            <li><strong>Community support</strong> — we grow by lifting others.</li>
          </ul>

          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>
            Arctyll is made up of talented modders, open-source contributors,
            server staff, and designers from across the community. We come from
            different backgrounds, but share a vision: to push Minecraft
            development into a more refined, maintainable, and collaborative era.
          </p>

          <p>
            We're not a team of employees — we're a group of like-minded
            contributors. Everything we build is driven by passion, purpose, and
            pride in our craft.
          </p>

          <h2 className="text-2xl font-bold">Get Involved</h2>
          <p>
            Whether you're a developer, content creator, or just passionate about
            Minecraft modding — there's a place for you at Arctyll. Contribute to
            our tools, build your own with our libraries, or just follow our work.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Join the Arctyll Ecosystem</h3>
            <p className="text-muted-foreground mb-6">
              Interested in working with us or contributing to the future of
              Minecraft modding?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/Arctyll"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore Our GitHub
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

        {/* Back to Home */}
        <div className="text-center mt-10">
          <Link href="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}