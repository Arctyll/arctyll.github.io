import { useEffect, useState } from "react";
import { updatePageMeta } from "@/lib/meta";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Code, Check, Github } from "lucide-react";

export default function Commitment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
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

  const principles = [
    {
      icon: Heart,
      title: "Community-Driven",
      description: "We believe in the power of community collaboration and transparent development.",
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Inclusive Innovation",
      description: "Everyone should have access to powerful tools regardless of their background.",
      color: "bg-blue-500"
    },
    {
      icon: Code,
      title: "Knowledge Sharing",
      description: "Open source enables learning, teaching, and continuous improvement.",
      color: "bg-green-500"
    }
  ];

  const guidelines = [
    "Follow our code of conduct",
    "Submit detailed pull requests",
    "Participate in community discussions",
    "Help others learn and grow"
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Commitment</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg px-4">
              Why Arctyll embraces open source development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6">Open Source Philosophy</h2>
              <div className="space-y-6">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 ${principle.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                      <principle.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Contribution Guidelines</h3>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    {guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <a href="https://github.com/Arctyll" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}