import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Team from "@/pages/team";
import Commitment from "@/pages/commitment";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import HappyBirthday from "@/pages/birthday";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles";
import { useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/commitment" component={Commitment} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

declare global {
  interface Window {
    AOS: any;
  }
}

function App() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="arctyll-ui-theme">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Particles />
            <Navbar />
            <main>
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
