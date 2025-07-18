import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  color: string;
  mcIgn: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const [followers, setFollowers] = useState < number | null > (null);
  
  const username = member.githubUrl.split("https://github.com/")[1];
  
  useEffect(() => {
    async function fetchFollowers() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          setFollowers(data.followers);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub followers:", error);
      }
    }
    
    fetchFollowers();
  }, [username]);
  
  return (
    <Card
      className="card-hover bg-card border-border text-center"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <CardContent className="p-6">
        {/* Avatar */}
        <div
          className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 bg-gradient-to-br from-purple-500 to-blue-500 overflow-hidden`}
        >
          <img
            src={`https://mc-heads.net/avatar/${member.mcIgn}`}
            alt={`${member.mcIgn}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-primary text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm mb-4">{member.description}</p>

        {/* GitHub button */}
        <Button variant="ghost" size="sm" asChild>
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>

        {/* Followers count */}
        {followers !== null && (
          <p className="text-muted-foreground text-sm mt-3">
            <span className="font-medium">{followers}</span> follower{followers !== 1 && "s"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}