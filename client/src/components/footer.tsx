import { Github, Mail, Heart, Code, Users, Book } from "lucide-react";
import { Link } from "wouter";
import arctyllLogo from "@assets/arctyll_logo_1751777151160.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4 group cursor-pointer">
                <img 
                  src={arctyllLogo} 
                  alt="Arctyll" 
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-lg font-bold group-hover:text-primary transition-colors duration-300">Arctyll</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Building the future of Minecraft modding with open-source innovation and community collaboration.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Arctyll" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:arctyllofficial@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Code className="h-4 w-4 mr-2" />
              Projects
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/projects#mods" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Mods
                </Link>
              </li>
              <li>
                <Link href="/projects#clients" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Community
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Our Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/commitment" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center">
              <Book className="h-4 w-4 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Arctyll" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Source Code
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Arctyll" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Arctyll/.github/blob/main/CONTRIBUTING.md" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>
              &copy; 2025{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Arctyll
              </span>
              . All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>by the open source community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}