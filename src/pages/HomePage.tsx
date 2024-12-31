
import React from 'react';
import { HeroSection } from '@/components/home/heroSection';
import { FeatureShowcase } from '@/components/home/featureSection';
import { Footer } from '@/components/home/footer';
import Navigation from '@/components/home/navigation';
// import CommunitySection from '@/components/home/CommunitySection';
import AboutSection from '@/components/home/AboutSection';


interface HomePageProps {
  theme: string;
  toggleTheme: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home',  'features', 'about'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background">
      <Navigation theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <section id="home" className="min-h-screen">
        <HeroSection />
      <section id="features" className="min-h-screen">
        <FeatureShowcase />
      </section>
      </section>
      {/* <section id="community" className="min-h-screen">
        <CommunitySection />
      </section> */}
      <section id="footer" className="min-h-screen">
      <AboutSection />
      </section>
        <Footer />
    </div>
  );
};

export default HomePage;
