import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <Card className="bg-gradient-to-br from-secondary/30 via-secondary/20 to-background border-none overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Text Section */}
            <div className="p-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h2 className="text-5xl font-extrabold  bg-clip-text mb-6">
                Join Our Community
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                Be part of Tribhuvan University's growing digital community. Connect, share, and learn together.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.location.href = '/community'}
              >
                Explore Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Image Section */}
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 hover:scale-110 transition-transform"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)',
                }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunitySection;
