import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { updatePageMeta } from "@/lib/meta";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author?: string;
  date: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
  gradient?: string;
  type: "blog" | "announcement";
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/config/blog-posts.json").then((res) => res.json()),
      fetch("/config/announcements.json").then((res) => res.json()),
    ])
      .then(([blogData, announcementData]) => {
        const blogPosts = blogData.posts.map((p: any) => ({
          ...p,
          type: "blog",
          gradient: "from-green-500 to-teal-500",
        }));

        const announcements = announcementData.announcements.map((a: any) => ({
          id: a.id,
          title: a.title,
          excerpt: a.content,
          content: a.content,
          date: new Date(a.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: a.readTime,
          type: "announcement",
          gradient: "from-green-500 to-teal-500",
        }));

        const allPosts: Post[] = [...blogPosts, ...announcements];
        const foundPost = allPosts.find((p) => p.id === slug);
        setPost(foundPost || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog post:", err);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (post) {
      updatePageMeta({
        title: `${post.title} - Arctyll`,
        description: post.excerpt || post.title,
        url: `https://arctyll.com/blog/${post.id}`,
        image:
          "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
      });
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <Card>
          <div className={`h-64 bg-gradient-to-r ${post.gradient}`} />
          <CardContent className="p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                {post.type}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>

              {post.type === "blog" ? (
                <div className="mt-8 space-y-6">
                  <p>
                    This is a sample blog post content. In a real application, you would store the
                    full content in your configuration and display it here.
                  </p>
                  <p>
                    You can add more detailed content, code examples, images, and other rich media
                    to make your blog posts more engaging.
                  </p>
                </div>
              ) : (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Full Announcement</h3>
                  <p>{post.content}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}