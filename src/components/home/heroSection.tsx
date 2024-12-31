import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-[80vh] bg-background flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-6xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-semibold">Powered by Rovaa</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Shadanda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                A Community Platform for Tribhuvan University
              </p>
            </div>
            
            <p className="text-base md:text-lg text-foreground">
              Join our community-driven platform designed specifically for TU students. 
              Share resources, get updates, and collaborate with fellow students.
            </p>

            <div>
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.location.href = '/community'}
              >
                Explore Community
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-full min-h-[300px] md:min-h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1635960068333-7d38c1133bf3)',
                backgroundPosition: 'center'
              }}
            >
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeroSection;