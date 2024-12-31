
// import { Mail, Github } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Alert, AlertDescription } from '@/components/ui/alert';
import DownloadSection from '@/components/community/DownloadSection';
import FAQSection from '@/components/community/FAQAndContact';



  

const FeedbackPage = () => {

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 space-y-8">
      {/* Download Section */}

      <DownloadSection />
      <FAQSection />
     

      {/* Email Subscription */}
      {/* <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent>
          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          ) : (
            <Alert>
              <AlertDescription>
                Thanks for subscribing! You'll receive updates about new features and changes.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card> */}

      {/* Submit Issue Section */}
      {/* <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-6 h-6" />
            Submit an Issue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleIssueSubmit} className="space-y-4">
            <Textarea
              placeholder="Describe the issue..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
              className="min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button type="submit">Submit Issue</Button>
            </div>
          </form>
        </CardContent>
      </Card> */}

      {/* Contact Section */}
      {/* <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => window.location.href = 'mailto:your-email@example.com'}
            >
              Send Email
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://github.com/your-repo', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
        </CardContent>
      </Card> */}

      {/* Issues List */}
      {/* <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Recent Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {issues.map((issue) => (
              <div key={issue.id} className="py-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{issue.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Submitted on {issue.date}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    issue.status === 'open' 
                      ? 'bg-destructive/10 text-destructive' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {issue.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default FeedbackPage;