import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Menu, Moon, Sun, Sparkles } from "lucide-react";
import arctyllLogo from "@assets/arctyll.png";

export default function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/commitment", label: "Commitment" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  
  const isActive = (path: string) =>
    location === path ||
    location.startsWith(path + "/") ||
    location.startsWith(path + "?");
  
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group cursor-pointer">
          <img
            src={arctyllLogo}
            alt="Arctyll"
            className="w-6 h-6 object-contain group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
          />
          <span className="ml-2 text-lg font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-300">
            Arctyll
          </span>
          <Sparkles className="h-4 w-4 mt-[1px] text-primary/70 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300 ml-1" />
        </Link>

        {/* Center Navigation */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span
                  className={`relative cursor-pointer group font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Theme toggle + Mobile menu */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open mobile menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="group relative cursor-pointer text-lg font-medium transition-all duration-300">
                      <span
                        className={`${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                          isActive(item.href)
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>
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