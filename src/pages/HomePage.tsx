
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Smartphone, Shield, Zap } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Download Your Next Favorite App
            </h1>
            <p className="text-xl text-gray-600">
              Experience the next generation of mobile applications. 
              Simple, secure, and designed for you.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <span className="text-gray-600">4.9 Rating</span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/api/placeholder/300/600"
              alt="App Screenshot"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our App?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Smartphone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Modern Design</h3>
                  <p className="text-gray-600">
                    Sleek, intuitive interface designed for the best user experience
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure Platform</h3>
                  <p className="text-gray-600">
                    Your data is protected with industry-leading security measures
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Optimized performance for a smooth and responsive experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users and download our app today.
            Experience the difference yourself.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;