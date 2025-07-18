import { useEffect, useState } from "react";
import { Github, Sparkle } from "lucide-react";
import TeamCard from "@/components/team-card";
import AOS from "aos";
import "aos/dist/aos.css";
import { Badge } from "@/components/ui/badge";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiVite,
  SiVisualstudiocode,
} from "react-icons/si";

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

const skillIcons: Record < string, any > = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  TailwindCSS: SiTailwindcss,
  Figma: SiFigma,
  Python: SiPython,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  NodeJS: SiNodedotjs,
  HTML: SiHtml5,
  CSS: SiCss3,
  Docker: SiDocker,
  Git: SiGit,
  NextJS: SiNextdotjs,
  Vite: SiVite,
  VSCode: SiVisualstudiocode,
  "Full Stack": Sparkle,
};

const skillColors: Record < string, string > = {
  JavaScript: "bg-yellow-400 text-black",
  TypeScript: "bg-blue-500 text-white",
  React: "bg-cyan-500 text-white",
  TailwindCSS: "bg-teal-400 text-white",
  Figma: "bg-pink-500 text-white",
  Python: "bg-yellow-300 text-black",
  MongoDB: "bg-green-600 text-white",
  PostgreSQL: "bg-blue-800 text-white",
  MySQL: "bg-blue-400 text-white",
  NodeJS: "bg-green-700 text-white",
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-600 text-white",
  Docker: "bg-blue-500 text-white",
  Git: "bg-orange-600 text-white",
  NextJS: "bg-gray-900 text-white",
  Vite: "bg-purple-500 text-white",
  VSCode: "bg-blue-700 text-white",
  "Fullstack Developer": "bg-zinc-600 text-white",
};

export default function Team({ params }: { params ? : { id ? : string } }) {
  const [teamData, setTeamData] = useState < TeamData | null > (null);
  const [loading, setLoading] = useState(true);
  const id = params?.id;
  
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
  
  if (id) {
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
              <div className="flex flex-col gap-2">
                {member.skills.map((skill, i) => {
                  const Icon = skillIcons[skill] || Sparkle;
                  const color = skillColors[skill] || "bg-muted text-foreground";
                  return (
                    <Badge
                      key={skill}
                      className={`flex items-center gap-2 text-sm font-medium w-fit ${color}`}
                      data-aos="fade-up"
                      data-aos-delay={i * 60}
                    >
                      <Icon className="w-4 h-4" />
                      {skill}
                    </Badge>
                  );
                })}
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