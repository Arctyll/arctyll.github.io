import { useEffect } from "react";
import { updatePageMeta } from "@/lib/meta";
import { ShieldCheck, Heart, Users } from "lucide-react";

export default function Conduct() {
  useEffect(() => {
    updatePageMeta({
      title: "Code of Conduct - Arctyll",
      description:
        "Our community Code of Conduct outlines the expected behavior to maintain a safe, welcoming, and respectful environment.",
      url: "https://arctyll.com/conduct",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-10 prose prose-lg dark:prose-invert">
        <h1 className="text-center text-4xl font-bold gradient-text mb-8">
          Code of Conduct
        </h1>

        <section className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold">Our Commitment</h2>
        </section>
        <p>
          Arctyll is dedicated to providing a harassment-free experience for everyone. We do not tolerate harassment, discrimination, or exclusionary behavior in any form.
        </p>

        <section className="flex items-center gap-3">
          <Users className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold">Expected Behavior</h2>
        </section>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be respectful, inclusive, and welcoming to all.</li>
          <li>Use welcoming and inclusive language.</li>
          <li>Be considerate of different viewpoints and experiences.</li>
          <li>Gracefully accept constructive criticism.</li>
          <li>Focus on what is best for the community.</li>
        </ul>

        <section className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-pink-500" />
          <h2 className="text-2xl font-bold">Unacceptable Behavior</h2>
        </section>
        <ul className="list-disc pl-6 space-y-2">
          <li>Harassment, bullying, or intimidation of any kind.</li>
          <li>Discriminatory or derogatory comments related to gender, race, religion, etc.</li>
          <li>Threats of violence or harm.</li>
          <li>Sexual language and imagery.</li>
          <li>Other conduct which could reasonably offend or harm others.</li>
        </ul>

        <section className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-red-600" />
          <h2 className="text-2xl font-bold">Enforcement</h2>
        </section>
        <p>
          Violations of this Code of Conduct may result in warnings, temporary bans, or permanent removal from the community. We reserve the right to take action at our discretion to maintain a safe environment.
        </p>

        <section className="flex items-center gap-3">
          <Users className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold">Reporting</h2>
        </section>
        <p>
          If you experience or witness any behavior that violates this Code of Conduct, please report it to <a href="/contact" className="text-primary underline">the Arctyll team</a> immediately.
        </p>

        <section className="text-center mt-12">
          <p className="text-lg italic">
            Together, let's make Arctyll a welcoming, supportive, and inclusive community for all.
          </p>
        </section>
      </div>
    </div>
  );
}