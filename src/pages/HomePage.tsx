
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from '@/hooks/useTheme';
import Navigation from '@/components/custom/navigation';
import { HeroSection } from '@/components/custom/heroSection';
import { FeatureShowcase } from '@/components/custom/featureSection';
import { Footer } from '@/components/custom/footer';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-background">
    <Navigation theme={theme} toggleTheme={toggleTheme} />
     <HeroSection />
     <FeatureShowcase /> 
     <Footer />
    </div>
  );
};

export default HomePage;