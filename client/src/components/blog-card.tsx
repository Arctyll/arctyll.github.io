import { useMemo } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  gradient: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const imageImports = import.meta.glob('@assets/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export default function BlogCard({ post, index }: BlogCardProps) {
  const imageSrc = useMemo(() => {
    if (!post.image) return null;
    const match = Object.entries(imageImports).find(([path]) =>
      path.endsWith(`assets/${post.image}`)
    );
    return match?.[1] ?? null;
  }, [post.image]);

  return (
    <Card
      className="card-hover bg-card border-border overflow-hidden flex flex-col"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={post.title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className={`h-48 bg-gradient-to-r ${post.gradient}`} />
      )}

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>

        <div className="mt-auto">
          <Link href={`/blog/${post.slug}`}>
            <Button
              variant="ghost"
              className="p-0 h-auto font-medium text-primary hover:text-primary/80"
            >
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}