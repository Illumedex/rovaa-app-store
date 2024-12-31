import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download,  } from 'lucide-react';

const DownloadSection = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-6 h-6" />
            Download Our Application
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Get the latest version of our application for the best experience
            </p>
            <Button className="w-full md:w-auto">
              Download Now
            </Button>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-medium">Latest Release: v1.0.0</p>
            <p className="text-sm text-muted-foreground mt-2">
              - Improved performance<br />
              - Bug fixes and stability improvements<br />
              - New features added
            </p>
          </div>
        </CardContent>
      </Card>
  )
}

export default DownloadSection