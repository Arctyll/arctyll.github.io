import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Menu, Moon, Sun, ChevronDown, Sparkles } from "lucide-react";
import arctyllLogo from "@assets/arctyll_logo_1751777151160.png";

export default function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/commitment", label: "Commitment" },
    { href: "/downloads", label: "Downloads" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const projectItems = [
    { href: "/projects#mods", label: "Mods" },
    { href: "/projects#clients", label: "Clients" },
    { href: "/projects#apis", label: "APIs" },
  ];

  const isActive = (path: string) => {
    return location === path || (path !== "/" && location.startsWith(path));
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <img 
                src={arctyllLogo} 
                alt="Arctyll" 
                className="w-8 h-8 object-contain group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out"
              />
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Arctyll
              </span>
              <Sparkles className="h-4 w-4 text-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180" />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`relative cursor-pointer transition-all duration-300 group ${
                  isActive(item.href) 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
                }`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? 'w-full' : ''
                  }`}></span>
                </span>
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-all duration-300 group">
                <span className="relative">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                {projectItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="transition-colors duration-200 hover:bg-primary/10">
                    <Link href={item.href} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-6">
                  <Link href="/">
                    <span className="text-lg font-medium cursor-pointer">Home</span>
                  </Link>
                  <Link href="/projects">
                    <span className="text-lg font-medium cursor-pointer">Projects</span>
                  </Link>
                  <Link href="/team">
                    <span className="text-lg font-medium cursor-pointer">Team</span>
                  </Link>
                  <Link href="/commitment">
                    <span className="text-lg font-medium cursor-pointer">Our Commitment</span>
                  </Link>
                  <Link href="/downloads">
                    <span className="text-lg font-medium cursor-pointer">Downloads</span>
                  </Link>
                  <Link href="/blog">
                    <span className="text-lg font-medium cursor-pointer">Blog</span>
                  </Link>
                  <Link href="/contact">
                    <span className="text-lg font-medium cursor-pointer">Contact</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
