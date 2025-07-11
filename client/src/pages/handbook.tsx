import { useEffect } from "react";
import { updatePageMeta } from "@/lib/meta";
import { BookOpenCheck, GitBranch, GitPullRequest, Code2, MessageSquare } from "lucide-react";

export default function Handbook() {
  useEffect(() => {
    updatePageMeta({
      title: "Contributor Handbook - Arctyll",
      description:
        "Detailed guide on how to contribute to Arctyll’s open-source projects. Learn the workflow, coding standards, and community guidelines.",
      url: "https://arctyll.com/handbook",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-3xl space-y-10 prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contributor <span className="gradient-text">Handbook</span>
          </h1>

        {/* Introduction */}
        <section>
          <p>
            Welcome to the Arctyll Contributor Handbook! This guide will help you get started contributing to our projects with ease and confidence.
          </p>
          <p>
            Whether you're a first-time contributor or an experienced developer, you'll find valuable info about our process, expectations, and tools here.
          </p>
        </section>

        {/* Getting Started */}
        <section>
          <h2 className="flex items-center gap-2">
            <BookOpenCheck className="w-6 h-6 text-green-600" />
            Getting Started
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Fork the repository on GitHub.</li>
            <li>
              Clone your fork locally:
              <code style="white-space: wrap; word-break: break-word;">
                git clone https://github.com/Arctyll/repo.git
              </code>
            </li>
            <li>Create a new branch for your feature or fix: <code>git checkout -b feature-name</code></li>
            <li>Make your changes and commit with clear messages.</li>
            <li>Push your branch: <code>git push origin feature-name</code></li>
            <li>Open a Pull Request (PR) on the main Arctyll repo.</li>
          </ol>
        </section>

        {/* Branching & Pull Requests */}
        <section>
          <h2 className="flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-blue-600" />
            Branching & Pull Requests
          </h2>
          <p>
            Use descriptive branch names like <code>fix/chat-bug</code> or <code>feat/config-ui</code>.
          </p>
          <p>
            PRs should be clear and focused. Reference related issues, describe your changes well, and request reviews.
          </p>
          <p>
            Maintain code quality and test your changes before submitting.
          </p>
        </section>

        {/* Coding Standards */}
        <section>
          <h2 className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-600" />
            Coding Standards
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Write clear, readable code with meaningful variable and method names.</li>
            <li>Follow existing project styles and patterns.</li>
            <li>Include comments where necessary to explain complex logic.</li>
            <li>Run tests and ensure nothing breaks with your changes.</li>
          </ul>
        </section>

        {/* Communication */}
        <section>
          <h2 className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-teal-600" />
            Communication & Support
          </h2>
          <p>
            Join our <a href="https://github.com/Arctyll" className="text-primary underline">community channels</a> to discuss ideas, ask questions, and get help.
          </p>
          <p>
            Be respectful and constructive when giving and receiving feedback.
          </p>
        </section>

        {/* Thanks! */}
        <section>
          <p>
            Thank you for helping make Arctyll better! Your contributions drive our mission to empower Minecraft developers worldwide.
          </p>
        </section>
      </div>
    </div>
  );
}