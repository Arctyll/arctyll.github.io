import { useEffect, useState } from "react";
import TeamCard from "@/components/team-card";
import { updatePageMeta } from "@/lib/meta";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  githubUrl: string;
  mcIgn: string;
  avatar: string;
  color: string;
  skills: string[];
  contributions: string[];
}

interface TeamData {
  members: TeamMember[];
}

export default function Team() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  useEffect(() => {
    updatePageMeta({
      title: "Our Team - Arctyll",
      description: "Meet the talented developers and contributors behind Arctyll's innovative Minecraft modding projects.",
      url: "https://arctyll.com/team"
    });
    
    fetch('/config/team.json')
      .then(res => res.json())
      .then((data: TeamData) => setTeamData(data))
      .catch(err => console.error('Failed to load team data:', err));
  }, []);

  if (!teamData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  const teamMembers = teamData.members.map(member => ({
    name: member.name,
    role: member.role,
    description: member.description,
    mcIgn: member.mcIgn,
    githubUrl: member.githubUrl,
    color: member.color
  }));

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate developers and contributors driving Arctyll's mission to revolutionize Minecraft modding
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join Us Section */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to Join Us?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our open-source community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://github.com/Arctyll" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Our Projects
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}