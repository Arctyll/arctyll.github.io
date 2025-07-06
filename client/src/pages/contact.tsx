import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailjs";
import { updatePageMeta } from "@/lib/meta";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageSquare,
  Github,
  Send,
  Code,
  Download,
  Users,
} from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    updatePageMeta({
      title: "Contact Us - Arctyll",
      description:
        "Get in touch with the Arctyll team. We're here to help with questions, support, and collaboration opportunities.",
      url: "https://arctyll.com/contact",
    });
  }, []);

  const onSubmit = async (data: any) => {
    try {
      setSending(true);
      await sendEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card data-aos="fade-up" data-aos-delay="100">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={6}
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={sending}>
                  {sending ? (
                    <span className="animate-pulse">Sending your message...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Direct Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <a
                    href="mailto:arctyllofficial@gmail.com"
                    className="text-primary hover:underline"
                  >
                    arctyllofficial@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Response Time</h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond within 24–48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* GitHub & Docs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  Community & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">GitHub</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Report bugs, request features, or contribute to our projects
                  </p>
                  <a
                    href="https://github.com/Arctyll"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Arctyll
                  </a>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Documentation</h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    Find guides, tutorials, and API documentation
                  </p>
                  <span className="text-secondary">Currently Unavailable</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>
                  Explore different sections of our website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/projects"
                    className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <Code className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        View Projects
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Explore our mods and tools
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/downloads"
                    className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <Download className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        Downloads
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Get the latest releases
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/team"
                    className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <Users className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        Our Team
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Meet the developers
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <MessageSquare className="h-4 w-4 text-primary mr-3" />
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        Blog
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Latest news and updates
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}