import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import BlogCard from "@/components/blog-card";
import { updatePageMeta } from "@/lib/meta";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  gradient: string;
}

interface BlogData {
  posts: BlogPost[];
}

export default function Blog() {
  const [match, params] = useRoute("/blog/:slug");
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [announcements, setAnnouncements] = useState<any>(null);

  useEffect(() => {
    updatePageMeta({
      title: "Blog & Announcements - Arctyll",
      description:
        "Stay updated with the latest news, tutorials, and insights from the Arctyll development team and community.",
      url: "https://arctyll.com/blog",
    });

    Promise.all([
      fetch("/config/blog-posts.json").then((res) => res.json()),
      fetch("/config/announcements.json").then((res) => res.json()),
    ])
      .then(([blogData, announcementData]) => {
        setBlogData(blogData);
        setAnnouncements(announcementData);
      })
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  if (!blogData || !announcements) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  const blogPosts = blogData.posts.map((post) => ({
    ...post,
    slug: post.id,
    type: "blog",
    rawDate: post.date,
    gradient: "from-green-500 to-teal-500",
  }));

  const announcementPosts = announcements.announcements.map(
    (announcement: any) => ({
      title: announcement.title,
      excerpt: announcement.content,
      date: new Date(announcement.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      rawDate: announcement.date,
      readTime: announcement.readTime,
      slug: announcement.id,
      gradient: "from-green-500 to-teal-500",
      type: "announcement",
    })
  );

  const allPosts = [...blogPosts, ...announcementPosts].sort((a, b) => {
    return new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime();
  });

  if (match && params?.slug) {
    const post = allPosts.find((p) => p.slug === params.slug);

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
                {post.type && (
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {post.type}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                {post.type === "blog" ? (
                  <div className="mt-8 space-y-6">
                    <p>
                      This is a sample blog post content. In a real
                      application, you would store the full content in your
                      configuration and display it here.
                    </p>
                    <p>
                      You can add more detailed content, code examples, images,
                      and other rich media to make your blog posts more
                      engaging.
                    </p>
                  </div>
                ) : (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Full Announcement
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog & Announcements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, tutorials, and insights from the
            Arctyll development team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6">
              Want to be the first to know about new releases, updates, and
              community events?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/Arctyll"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Follow on GitHub
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}