import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import TeamCard from "@/components/team-card";
import { Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  const [teamData, setTeamData] = useState < TeamData | null > (null);
  const [loading, setLoading] = useState(true);
  const [location] = useLocation();
  
  useEffect(() => {
    AOS.init({ duration: 600 });
    fetch("/config/team.json")
      .then((res) => res.json())
      .then((data: TeamData) => {
        setTeamData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load team data:", err);
        setLoading(false);
      });
  }, []);
  
  if (loading || !teamData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (isMemberPage) {
    const member = teamData.members.find((m) => m.id === id);
    
    if (!member) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <p className="text-muted-foreground">Team member not found.</p>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-background pt-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero */}
          <div className="text-center" data-aos="fade-up">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full border-4 border-primary shadow-lg"
            />
            <h1 className="text-4xl font-bold mt-4">{member.name}</h1>
            <p className="text-muted-foreground text-lg">{member.role}</p>
          </div>

          {/* About */}
          <section
            className="bg-card p-6 rounded-xl border border-border"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground">{member.description}</p>
          </section>

          {/* Skills */}
          {member.skills.length > 0 && (
            <section
              className="bg-card p-6 rounded-xl border border-border"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Contributions */}
          {member.contributions.length > 0 && (
            <section
              className="bg-card p-6 rounded-xl border border-border"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2 className="text-2xl font-semibold mb-4">Contributions</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {member.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Footer */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <p className="mb-2">
              Minecraft IGN:{" "}
              <span className="font-mono text-primary">{member.mcIgn}</span>
            </p>
            <a
              href={member.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition mt-4"
            >
              <Github className="mr-2" size={18} /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    );
  }

  const teamMembers = teamData.members.map((member) => ({
    id: member.id,
    name: member.name,
    role: member.role,
    description: member.description,
    mcIgn: member.mcIgn,
    githubUrl: member.githubUrl,
    color: member.color,
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
          {teamData.members.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
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