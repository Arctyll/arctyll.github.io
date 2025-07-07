import { useEffect } from "react";
import { updatePageMeta } from "@/lib/meta";
import { useTheme } from "@/components/theme-provider";
import { Gift, PartyPopper } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import BirthdayCard from "@/components/birthday-card";
import birthdayData from "@/config/birthday.config.json";

export default function HappyBirthday() {
  const { theme } = useTheme();
  const { name, ign } = birthdayData.birthdayPerson;
  const avatarUrl = `https://mc-heads.net/avatar/${ign}/160`;
  
  useEffect(() => {
    updatePageMeta({
      title: `Happy Birthday ${name}! 🎉`,
      description: `Wishing ${name} a fantastic birthday from the Arctyll team!`,
      url: "https://arctyll.com/birthday"
    });
    
    AOS.init({ once: true, duration: 800 });
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 hero-gradient overflow-hidden">
      <div className="text-center space-y-6 z-10 max-w-2xl">
        <div className="flex justify-center">
          <div className="rounded-full border-4 border-primary shadow-lg p-1 bg-background transition-all duration-500">
            <img
              src={avatarUrl}
              alt={`${name}'s Minecraft avatar`}
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight gradient-text">
          Happy Birthday, {name}! 🎉
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl">
          Today we celebrate the birthday of our amazing teammate, <strong>{ign}</strong>.
          <br />
          Wishing you another year of success, creativity, and fun!
        </p>

        <div className="flex justify-center gap-4">
          <Gift className="w-8 h-8 text-pink-500 animate-bounce" />
          <PartyPopper className="w-8 h-8 text-yellow-500 animate-spin-slow" />
        </div>
      </div>

      {/* Messages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 z-10">
        {birthdayData.messages.map((msg, i) => (
          <BirthdayCard key={i} message={msg} index={i} />
        ))}
      </div>

      {/* Confetti Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full animate-confetti bg-[url('/confetti.svg')] bg-repeat opacity-30 mix-blend-overlay"></div>
      </div>
    </section>
  );
}