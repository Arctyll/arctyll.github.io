import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Menu, Moon, Sun, Sparkles } from "lucide-react";
import arctyllLogo from "@assets/arctyll_logo_1751777151160.png";

export default function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/commitment", label: "Commitment" },
    { href: "/downloads", label: "Downloads" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  
  const isActive = (path: string) => {
    return location === path || (path !== "/" && location.startsWith(path));
  };
  
  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <img
                src={arctyllLogo}
                alt="Arctyll"
                className="w-6 h-6 object-contain group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-300">
                Arctyll
              </span>
              <Sparkles className="h-4 w-4 mt-[1px] text-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180" />
            </div>
          </Link>
        </div>

        {/* Center: Nav Items */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`relative cursor-pointer transition-all duration-300 group font-medium ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 group-hover:w-full ${
                      isActive(item.href) ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Theme + Mobile Menu */}
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
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${
                        isActive(item.href)
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}