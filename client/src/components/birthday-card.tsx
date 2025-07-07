import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface Message {
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  color: string;
  mcIgn: string;
}

interface BirthdayCardProps {
  message: Message;
  index: number;
}

export default function BirthdayCard({ message, index }: BirthdayCardProps) {
  const aosDirections = ["fade-right", "fade-up", "fade-left"];
  const direction = aosDirections[index % aosDirections.length];
  
  return (
    <Card
      className="card-hover bg-card border-border text-center"
      data-aos={direction}
      data-aos-delay={index * 100}
    >
      <CardContent className="p-6">
        <div
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4"
          style={{
            background: `linear-gradient(135deg, ${message.color}, #3b82f6)`
          }}
        >
          <img
            src={`https://mc-heads.net/avatar/${message.mcIgn}`}
            alt={`${message.mcIgn}'s avatar`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{message.name}</h3>
        <p className="text-primary text-sm mb-3">{message.role}</p>
        <p className="text-muted-foreground text-sm mb-4">{message.description}</p>
        <Button variant="ghost" size="sm" asChild>
          <a href={message.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}