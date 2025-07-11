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
  Info,
  BookOpenCheck,
  MessageSquare,
  ShieldCheck,
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
              <p><strong>Development</strong><br />Help build modern libraries and tools for Minecraft modding.</p>
            </div>
            <div className="flex gap-3">
              <Paintbrush2 className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Design</strong><br />Craft intuitive UIs and mockups. Improve user experience across our platforms.</p>
            </div>
            <div className="flex gap-3">
              <FileText className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Documentation</strong><br />Write setup guides, developer docs, and usage tutorials to help others.</p>
            </div>
            <div className="flex gap-3">
              <Bug className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Testing</strong><br />Test mods, report bugs, suggest fixes, and improve overall stability.</p>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <Users className="w-5 h-5 mt-1 text-foreground" />
              <p><strong>Community</strong><br />Support others, help in discussions, and spread awareness about our projects.</p>
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
            <li>Visit the <a href="https://github.com/Arctyll" className="text-primary font-medium underline">Arctyll GitHub</a> and browse available repositories.</li>
            <li>Look for issues tagged <code className="bg-muted px-2 py-0.5 rounded text-sm">good first issue</code> or <code className="bg-muted px-2 py-0.5 rounded text-sm">help wanted</code>.</li>
            <li>Read the README, CONTRIBUTING, and CODEOWNERS files.</li>
            <li>Fork the repository, commit your changes, and open a PR.</li>
            <li>Check out the <a href="/handbook" className="underline text-primary">Contributor Handbook</a> for detailed guidelines.</li>
          </ol>
        </section>

        {/* Contributor Roles */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold">Contributor Roles</h2>
          </div>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>Core Maintainers</strong> – Lead and review active development.</li>
            <li><strong>Module Developers</strong> – Build and maintain features/modules.</li>
            <li><strong>Writers & Editors</strong> – Improve docs, release notes, changelogs.</li>
            <li><strong>Designers</strong> – Contribute branding, UI, and UX improvements.</li>
            <li><strong>Testers</strong> – Identify bugs and provide quality feedback.</li>
          </ul>
        </section>

        {/* Tools We Use */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-sky-400" />
            <h2 className="text-2xl font-bold">Tools We Use</h2>
          </div>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>GitHub</strong> – Code, Issues, Pull Requests, Discussions.</li>
            <li><strong>IntellIJ IDEA</strong> – Our primary code editor.</li>
            <li><strong>Figma</strong> – UI/UX and design collaboration.</li>
            <li><strong>Discord</strong> (coming soon) – Community chats & support.</li>
          </ul>
        </section>

        {/* Code of Conduct */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold">Code of Conduct</h2>
          </div>
          <p className="text-muted-foreground">
            We follow a strict zero-tolerance policy against harassment, hate speech, or toxic behavior.
            Arctyll is a welcoming space for everyone — respect and kindness are non-negotiable.{" "}
            <a
              href="/conduct"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition"
            >
              Read our full Code of Conduct
            </a>
            .
          </p>
        </section>

        {/* Have an Idea */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <h2 className="text-2xl font-bold">Have an Idea?</h2>
          </div>
          <p className="text-muted-foreground">
            We're always open to new concepts. Submit your ideas via GitHub Discussions or email, and if it fits Arctyll’s mission, we may turn it into a full project with you.
          </p>
        </section>

        {/* FAQs */}
        <section className="space-y-6" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold">FAQs</h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <strong>Do I need prior experience?</strong>
              <p>No! We welcome everyone — beginners, learners, and pros alike.</p>
            </div>
            <div>
              <strong>Are contributions paid?</strong>
              <p>No, Arctyll is a passion project. However, top contributors may be featured or rewarded in the future.</p>
            </div>
            <div>
              <strong>Is this for Minecraft 1.8.9 only?</strong>
              <p>Currently, yes. Our tools are tailored for Minecraft Forge 1.8.9 modding. Support for newer versions may come later.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-20" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border space-y-6">
            <h3 className="text-2xl font-bold">Start Contributing Today</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our open-source projects, read the{" "}
              <a href="/handbook" className="underline text-primary">
                Contributor Handbook
              </a>
              , and make your first pull request.
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
                Contact the Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}