import { BookOpen, Users, MessageSquare, BookMarked, Download, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Choose Shadanda?</h2>
          <p className="text-muted-foreground text-lg">
            Your comprehensive study companion for Tribhuvan University, combining extensive educational resources
            with a vibrant student community.
          </p>
        </div>

        {/* Current Features */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Current Features</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Extensive Digital Library</h4>
                    <p className="text-muted-foreground">
                      Access a vast collection of PDF books from Anna Archive and Rovaa Library, 
                      carefully curated for your courses at Tribhuvan University.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">University Community</h4>
                    <p className="text-muted-foreground">
                      Connect with fellow students, share experiences, and build meaningful 
                      relationships within the university network.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Interactive Chat</h4>
                    <p className="text-muted-foreground">
                      Engage in discussions with your peers, exchange ideas, and collaborate 
                      on academic projects through our integrated chat system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Future Vision</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <BookMarked className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Enhanced Study Tools</h4>
                    <p className="text-muted-foreground">
                      We're developing advanced study tools including note-taking features, 
                      flashcards, and collaborative study groups.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Download className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">Offline Access</h4>
                    <p className="text-muted-foreground">
                      Soon, you'll be able to download and access your study materials offline, 
                      ensuring uninterrupted learning anywhere.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Sparkles className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">AI-Powered Learning</h4>
                    <p className="text-muted-foreground">
                      Future updates will include AI-assisted learning features to help you 
                      better understand complex topics and improve study efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-secondary/50 border-none">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Join the Growing Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of Tribhuvan University's digital transformation. Access comprehensive 
              study materials, connect with peers, and enhance your academic journey with Shadanda.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureShowcase;