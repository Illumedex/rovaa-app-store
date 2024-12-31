
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from '@/components/home/heroSection';
import { FeatureShowcase } from '@/components/home/featureSection';
import { Footer } from '@/components/home/footer';
import Navigation from '@/components/home/navigation';

interface HomePageProps {
  theme: string;
  toggleTheme: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ theme, toggleTheme }) => {
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