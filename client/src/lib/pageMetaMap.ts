// client/src/lib/pageMetaMap.ts
export interface PageMetaData {
  url: string; // output HTML file name
  bundleEntryPoint: string; // entry point file (relative to root)
  title: string;
  description: string;
  image?: string;
}

const sharedImage =
  "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png";

export const pageMetaMap: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Arctyll - Minecraft Mod Developers",
    description:
      "Building the future of Minecraft modding with open-source innovation and community collaboration. Discover our mods, tools, and APIs.",
    image: sharedImage,
  },
  {
    url: "about.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "About Us - Arctyll",
    description:
      "Learn more about Arctyll – the organization empowering Minecraft developers and creating modern tools for the community.",
    image: sharedImage,
  },
  {
    url: "contact.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Contact Us - Arctyll",
    description:
      "Get in touch with the Arctyll team. We're here to help with questions, support, and collaboration opportunities.",
    image: sharedImage,
  },
  {
    url: "commitment.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Our Commitment - Arctyll",
    description:
      "Learn about Arctyll's commitment to open-source development, community collaboration, and transparency in Minecraft modding.",
    image: sharedImage,
  },
  {
    url: "blog.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Blog & Announcements - Arctyll",
    description:
      "Stay updated with the latest news, tutorials, and insights from the Arctyll development team and community.",
    image: sharedImage,
  },
  {
    url: "birthday.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Happy Birthday 🎉",
    description: "Wishing a fantastic birthday from the Arctyll team!",
    image: sharedImage,
  },
  {
    url: "projects.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Projects - Arctyll",
    description:
      "Explore Arctyll's innovative Minecraft mods, clients, and development tools. All projects are open-source and community-driven.",
    image: sharedImage,
  },
  {
    url: "team.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Our Team - Arctyll",
    description:
      "Meet the talented developers and contributors behind Arctyll's innovative Minecraft modding projects.",
    image: sharedImage,
  },
  {
    url: "privacy.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Privacy Policy - Arctyll",
    description:
      "Understand how Arctyll handles your data, privacy, and security when you use our services and tools.",
    image: sharedImage,
  },
  {
    url: "terms.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Terms of Service - Arctyll",
    description:
      "Review the terms and conditions that govern your use of Arctyll's services, tools, and open-source projects.",
    image: sharedImage,
  },
];