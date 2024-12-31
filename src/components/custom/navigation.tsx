import  { useEffect, useState } from 'react';
import { BookOpen, Moon, Sun, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-background'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold">Shadanda</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Home
            </Button>
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Resources
            </Button>
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Community
            </Button>
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              About
            </Button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/80 hover:text-foreground"
              asChild
            >
              <a 
                href="https://github.com/DeepeshKalura" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground/80 hover:text-foreground"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;