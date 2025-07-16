export interface PageMetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const sharedImage =
  "https://raw.githubusercontent.com/Arctyll/arctyll.github.io/main/assets/arctyll.png";

export const pageMetaMap: Record<string, PageMetaData> = {
  "/": {
    title: "Arctyll - Minecraft Mod Developers",
    description:
      "Building the future of Minecraft modding with open-source innovation and community collaboration. Discover our mods, tools, and APIs.",
    url: "https://arctyll.com/",
    image: sharedImage,
  },
  "/about": {
    title: "About Us - Arctyll",
    description:
      "Learn more about Arctyll – the organization empowering Minecraft developers and creating modern tools for the community.",
    url: "https://arctyll.com/about",
    image: sharedImage,
  },
  "/contact": {
    title: "Contact Us - Arctyll",
    description:
      "Get in touch with the Arctyll team. We're here to help with questions, support, and collaboration opportunities.",
    url: "https://arctyll.com/contact",
    image: sharedImage,
  },
  "/commitment": {
    title: "Our Commitment - Arctyll",
    description:
      "Learn about Arctyll's commitment to open-source development, community collaboration, and transparency in Minecraft modding.",
    url: "https://arctyll.com/commitment",
    image: sharedImage,
  },
  "/blog": {
    title: "Blog & Announcements - Arctyll",
    description:
      "Stay updated with the latest news, tutorials, and insights from the Arctyll development team and community.",
    url: "https://arctyll.com/blog",
    image: sharedImage,
  },
  "/birthday": {
    title: "Happy Birthday 🎉",
    description: "Wishing a fantastic birthday from the Arctyll team!",
    url: "https://arctyll.com/birthday",
    image: sharedImage,
  },
  "/projects": {
    title: "Projects - Arctyll",
    description:
      "Explore Arctyll's innovative Minecraft mods, clients, and development tools. All projects are open-source and community-driven.",
    url: "https://arctyll.com/projects",
    image: sharedImage,
  },
  "/team": {
    title: "Our Team - Arctyll",
    description:
      "Meet the talented developers and contributors behind Arctyll's innovative Minecraft modding projects.",
    url: "https://arctyll.com/team",
    image: sharedImage,
  },
  "/privacy": {
    title: "Privacy Policy - Arctyll",
    description:
      "Understand how Arctyll handles your data, privacy, and security when you use our services and tools.",
    url: "https://arctyll.com/privacy",
    image: sharedImage,
  },
  "/terms": {
    title: "Terms of Service - Arctyll",
    description:
      "Review the terms and conditions that govern your use of Arctyll's services, tools, and open-source projects.",
    url: "https://arctyll.com/terms",
    image: sharedImage,
  },
};