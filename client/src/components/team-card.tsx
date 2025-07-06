import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  color: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <Card 
      className="card-hover bg-card border-border text-center" 
      data-aos="fade-up" 
      data-aos-delay={index * 100}
    >
      <CardContent className="p-6">
        <div className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
          <User className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-primary text-sm mb-3">{member.role}</p>
        <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
        <Button variant="ghost" size="sm" asChild>
          <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
