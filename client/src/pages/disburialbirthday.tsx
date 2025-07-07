import { useEffect } from "react";
import { updatePageMeta } from "@/lib/meta";
import { useTheme } from "@/components/theme-provider";
import { Gift, PartyPopper } from "lucide-react";

export default function HappyBirthday() {
  const { theme } = useTheme();
  const name = "Disburial";
  const ign = "Disburial";
  const avatarUrl = `https://mc-heads.net/avatar/${ign}/160`;
  
  useEffect(() => {
    updatePageMeta({
      title: `Happy Birthday ${name}! 🎉`,
      description: `Wishing ${name} a fantastic birthday from the Arctyll team!`,
      url: "https://arctyll.com/birthday",
    });
  }, []);
  
  const backgroundClass =
    theme === "dark" ?
    "bg-gradient-to-br from-[#1e1e2f] via-[#2c2c3d] to-[#12121b]" :
    "bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#e2e2e2]";
  
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-6 ${backgroundClass} transition-colors duration-500`}
    >
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

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span className="text-primary">Happy Birthday, {name}! 🎉</span>
        </h1>

        <p className="text-muted-foreground text-lg sm:text-xl">
          Today we celebrate our amazing teammate, <strong>{ign}</strong>.
          <br />
          Wishing you another year of success, creativity, and fun!
        </p>

        <div className="flex justify-center gap-4">
          <Gift className="w-8 h-8 text-pink-500 animate-bounce" />
          <PartyPopper className="w-8 h-8 text-yellow-500 animate-spin-slow" />
        </div>
      </div>

      {/* Optional confetti blob or particle effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('/confetti.svg')] bg-cover bg-center"></div>
      </div>
    </section>
  );
}