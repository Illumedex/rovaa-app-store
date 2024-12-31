import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NoRoutePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <div className="p-8 text-center space-y-8">
          {/* Error Code and Message */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            <p className="text-xl text-muted-foreground">
              Oops! The page you're looking for seems to have wandered off.
            </p>
          </div>

          {/* Illustration */}
          <div className="py-8">
            <div className="w-48 h-48 mx-auto relative">
              <Search 
                className="w-full h-full text-muted-foreground/20 animate-pulse" 
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent bottom-0 h-1/3" />
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>
            
            {/* Additional Help Text */}
            <p className="text-sm text-muted-foreground mt-8">
              If you believe this is a mistake, please contact our support team
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NoRoutePage;