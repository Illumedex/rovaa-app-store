import {  Moon, Sun, Github, Home,  Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Avatar , AvatarImage , AvatarFallback} from "@/components/ui/avatar";
import shadanda from "@/assets/shadanda.png";

const Navigation = ({ 
  theme, 
  toggleTheme, 
  activeSection 
}: { 
  theme: string; 
  toggleTheme: () => void;
  activeSection: string;
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Avatar className= "h-8 w-8 ring-2 ring-primary/20 ring-offset-2" > 
            <AvatarImage src={shadanda} alt="Shadanda logo" />
            <AvatarFallback>Shadanda</AvatarFallback>
            </Avatar>
            <span className="ml-2 text-xl font-bold">Shadanda</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'features', icon: Star, label: 'Features' },
              // { id: 'community', icon: Users, label: 'Community' },
              { id: 'footer', icon: Info, label: 'About' }
            ].map(({ id, icon: Icon, label }) => (
              <Button
                key={id}
                variant="ghost"
                className={`flex items-center gap-2 ${
                  activeSection === id ? 'text-primary' : 'text-foreground/80'
                }`}
                onClick={() => scrollToSection(id)}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/DeepeshKalura" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navigation;