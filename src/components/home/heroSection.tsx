import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80vh] bg-background flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-6xl mx-auto shadow-xl bg-background/95 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors border-primary/20 bg-primary/10 text-primary">
                  Powered by Rovaa
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Shadanda
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  A Community Platform for Tribhuvan University
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our community-driven platform designed specifically for TU students. 
                Share resources, get updates, and collaborate with fellow students.
              </p>

              <div className="flex gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => {
                    navigate("/community");
                  }}
                >
                  Explore Community
                </Button>
                
              </div>
            </div>

            <div className="relative h-full min-h-[400px] md:min-h-full overflow-hidden rounded-r-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform hover:scale-105 duration-700"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1635960068333-7d38c1133bf3')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/50 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection;