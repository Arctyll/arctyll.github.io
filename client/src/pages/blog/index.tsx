import { useEffect, useState } from "react";
import BlogCard from "@/components/blog-card";
import { updatePageMeta } from "@/lib/meta";

export default function BlogPage() {
  const [blogData, setBlogData] = useState<any | null>(null);
  const [announcements, setAnnouncements] = useState<any | null>(null);

  useEffect(() => {
    Promise.all([
      fetch("/config/blog-posts.json").then((res) => res.json()),
      fetch("/config/announcements.json").then((res) => res.json()),
    ])
      .then(([blog, anns]) => {
        setBlogData(blog);
        setAnnouncements(anns);
      })
      .catch((err) => console.error("Failed to load blog data:", err));
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

  const blogPosts = blogData.posts.map((post: any) => ({
    ...post,
    slug: post.id,
    type: "blog",
    rawDate: post.date,
    gradient: "from-green-500 to-teal-500",
  }));

  const announcementPosts = announcements.announcements.map((announcement: any) => ({
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
  }));

  const allPosts = [...blogPosts, ...announcementPosts].sort((a, b) => {
    return new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime();
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog & Announcements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, tutorials, and insights from the Arctyll development
            team
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post: any, index: number) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6">
              Want to be the first to know about new releases, updates, and community events?
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