import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import RouteMeta from "@/components/routemeta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Particles from "@/components/particles";
import Router from "./router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
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
                <RouteMeta />
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