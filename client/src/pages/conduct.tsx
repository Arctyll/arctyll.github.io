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

        {/* Our Commitment */}
        <section className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-red-600 shrink-0" />
          <h2 className="text-3xl font-bold">Our Commitment</h2>
        </section>
        <p>
          Arctyll is dedicated to providing a harassment-free experience for everyone. We do not tolerate harassment, discrimination, or exclusionary behavior in any form.
        </p>

        {/* Expected Behavior */}
        <section className="flex items-center gap-4">
          <Users className="w-10 h-10 text-indigo-600 shrink-0" />
          <h2 className="text-3xl font-bold">Expected Behavior</h2>
        </section>
        <ul className="list-disc pl-6 space-y-2">
          <li>Be respectful, inclusive, and welcoming to all.</li>
          <li>Use welcoming and inclusive language.</li>
          <li>Be considerate of different viewpoints and experiences.</li>
          <li>Gracefully accept constructive criticism.</li>
          <li>Focus on what is best for the community.</li>
        </ul>

        {/* Unacceptable Behavior */}
        <section className="flex items-center gap-4">
          <Heart className="w-10 h-10 text-pink-500 shrink-0" />
          <h2 className="text-3xl font-bold">Unacceptable Behavior</h2>
        </section>
        <ul className="list-disc pl-6 space-y-2">
          <li>Harassment, bullying, or intimidation of any kind.</li>
          <li>Discriminatory or derogatory comments related to gender, race, religion, etc.</li>
          <li>Threats of violence or harm.</li>
          <li>Sexual language and imagery.</li>
          <li>Other conduct which could reasonably offend or harm others.</li>
        </ul>

        {/* Enforcement */}
        <section className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-red-600 shrink-0" />
          <h2 className="text-3xl font-bold">Enforcement</h2>
        </section>
        <p>
          Violations of this Code of Conduct may result in warnings, temporary bans, or permanent removal from the community. We reserve the right to take action at our discretion to maintain a safe environment.
        </p>

        {/* Reporting */}
        <section className="flex items-center gap-4">
          <Users className="w-10 h-10 text-indigo-600 shrink-0" />
          <h2 className="text-3xl font-bold">Reporting</h2>
        </section>
        <p>
          If you experience or witness any behavior that violates this Code of Conduct, please report it to <a href="/contact" className="text-primary underline">the Arctyll team</a> immediately.
        </p>

        {/* Closing */}
        <section className="text-center mt-12">
          <p className="text-lg italic">
            Together, let's make Arctyll a welcoming, supportive, and inclusive community for all.
          </p>
        </section>
      </div>
    </div>
  );
}