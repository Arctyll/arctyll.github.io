import { useEffect, useState } from "react";
import { updatePageMeta } from "@/lib/meta";
import {
  Code2,
  Paintbrush2,
  FileText,
  Bug,
  Users,
  Github,
  Mail,
  Lightbulb,
  Star,
  Sparkles,
} from "lucide-react";

export default function JoinUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updatePageMeta({
      title: "Join Us - Arctyll",
      description:
        "Join the Arctyll community – contribute to open-source Minecraft tools, get involved in dev, and collaborate with like-minded creators.",
      url: "https://arctyll.com/join",
    });

    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground text-lg animate-pulse">
            Loading join page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-16">
        {/* Header */}
        <section className="text-center space-y-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold">
            Join <span className="gradient-text">Arctyll</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Shape the future of Minecraft modding with us. Whether you're a developer, designer, or enthusiast — we’d love to have you onboard.
          </p>
        </section>

        {/* Ways to Contribute */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Ways to Contribute</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-muted-foreground">
            <div className="flex gap-3">
              <Code2 className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Development</strong><br />Improve our open-source tooling for Minecraft modding.</p>
            </div>
            <div className="flex gap-3">
              <Paintbrush2 className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Design</strong><br />Help create intuitive and elegant UI/UX across projects.</p>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Documentation</strong><br />Write helpful guides, tutorials, and project docs.</p>
            </div>
            <div className="flex gap-3">
              <Bug className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Testing</strong><br />Report bugs and provide structured feedback.</p>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <Users className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Community</strong><br />Support users, share tools, and spread the word.</p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold">How to Get Started</h2>
          </div>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Visit our <a href="https://github.com/Arctyll" className="text-primary font-medium underline">GitHub organization</a>.</li>
            <li>Pick a repository that interests you.</li>
            <li>Check for <code className="bg-muted px-2 py-0.5 rounded text-sm">good first issue</code> labels.</li>
            <li>Fork it, make your changes, and open a pull request.</li>
            <li>Talk to us or ask for guidance – we're here to help!</li>
          </ol>
        </section>

        {/* What We Look For */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">What We Look For</h2>
          </div>
          <p className="text-muted-foreground">
            You don’t need to be an expert. We care more about curiosity, communication, and clean contributions. Everyone brings something valuable — even if it’s just asking great questions.
          </p>
        </section>

        {/* Perks */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Why Join?</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Early access to unreleased tools and prototypes.</li>
            <li>Be credited publicly in projects and releases.</li>
            <li>Direct feedback and mentorship from core devs.</li>
            <li>Priority feature requests and voting access.</li>
            <li>Fun, open, and friendly creative environment.</li>
          </ul>
        </section>

        {/* Idea Submission */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <h2 className="text-2xl font-bold">Have an Idea?</h2>
          </div>
          <p className="text-muted-foreground">
            If you have a tool or mod idea that aligns with our mission — pitch it! We're always open to cool concepts and potential collaborators.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center mt-20" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border space-y-6">
            <h3 className="text-2xl font-bold">Start Contributing</h3>
            <p className="text-muted-foreground">
              Explore the code. Open a PR. Or just say hi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Arctyll"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}