export interface MetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const metaMap: Record<string, MetaData> = {
  "/": {
    title: "Arctyll - Minecraft Mod Developers",
    description:
      "Building the future of Minecraft modding with open-source innovation and community collaboration. Discover our mods, tools, and APIs.",
    url: "https://arctyll.com/",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/about": {
    title: "About Us - Arctyll",
    description:
      "Learn more about Arctyll – the organization empowering Minecraft developers and creating modern tools for the community.",
    url: "https://arctyll.com/about",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/contact": {
    title: "Contact Us - Arctyll",
    description:
      "Get in touch with the Arctyll team. We're here to help with questions, support, and collaboration opportunities.",
    url: "https://arctyll.com/contact",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/commitment": {
    title: "Our Commitment - Arctyll",
    description:
      "Learn about Arctyll's commitment to open-source development, community collaboration, and transparency in Minecraft modding.",
    url: "https://arctyll.com/commitment",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/blog": {
    title: "Blog & Announcements - Arctyll",
    description:
      "Stay updated with the latest news, tutorials, and insights from the Arctyll development team and community.",
    url: "https://arctyll.com/blog",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/birthday": {
    title: "Happy Birthday 🎉",
    description: "Wishing a fantastic birthday from the Arctyll team!",
    url: "https://arctyll.com/birthday",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/projects": {
    title: "Projects - Arctyll",
    description:
      "Explore Arctyll's innovative Minecraft mods, clients, and development tools. All projects are open-source and community-driven.",
    url: "https://arctyll.com/projects",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/team": {
    title: "Our Team - Arctyll",
    description:
      "Meet the talented developers and contributors behind Arctyll's innovative Minecraft modding projects.",
    url: "https://arctyll.com/team",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/privacy": {
    title: "Privacy Policy - Arctyll",
    description:
      "Understand how Arctyll handles your data, privacy, and security when you use our services and tools.",
    url: "https://arctyll.com/privacy",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
  "/terms": {
    title: "Terms of Service - Arctyll",
    description:
      "Review the terms and conditions that govern your use of Arctyll's services, tools, and open-source projects.",
    url: "https://arctyll.com/terms",
    image: "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png",
  },
};