import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, Users2, Lightbulb } from "lucide-react";
import shadanda from "@/assets/shadanda.png";

export const AboutSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-b from-background to-secondary/10">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24 ring-2 ring-primary/20 ring-offset-2">
                <AvatarImage src={shadanda} alt="Creator" />
                <AvatarFallback>DK</AvatarFallback>
              </Avatar>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Shadanda
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              A vision to transform education at Tribhuvan University through digital innovation
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center space-y-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">Digital Resources</h3>
                <p className="text-sm text-muted-foreground">Centralized access to study materials and notes</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Users2 className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">Student Community</h3>
                <p className="text-sm text-muted-foreground">Connect and collaborate with fellow learners</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">Modern approach to traditional education</p>
              </div>
            </div>
            
            <div className="space-y-6 max-w-2xl pt-4">
              <p className="text-muted-foreground leading-relaxed">
                Our platform aims to revolutionize how students access and share educational resources, 
                making quality education more accessible for every TU student through collaboration and 
                community-driven learning.
              </p>
              
              <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                Created with ❤️ by Deepesh Kalura
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;