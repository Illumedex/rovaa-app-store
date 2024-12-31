import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, ChevronUp, Mail } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const faqs = [
    {
      question: "How do I access the e-library system?",
      answer: "You can access the e-library system by downloading our mobile app. After installation, log in using your Tribhuvan University credentials. The system is available 24/7 for all registered students and faculty members."
    },
    {
      question: "What features are available in the mobile app?",
      answer: "The app includes real-time database access, offline reading mode, secure authentication via Firebase, and location-based services for campus library integration. You can browse, search, and bookmark resources even without an internet connection."
    },
    {
      question: "Are there any specific device requirements?",
      answer: "Yes, your device needs Android 8.0 or higher, 2GB RAM, and 100MB of free storage. You'll also need Google Play Services 20.0+ and an active Google account for Firebase authentication."
    },
    {
      question: "How does the offline mode work?",
      answer: "Once you've accessed a resource while online, it becomes available offline automatically. You can access your downloaded content anytime, even without an internet connection. The app will sync any changes when you're back online."
    },
    {
      question: "Is my data secure in the app?",
      answer: "Yes, we use Firebase Authentication to ensure secure access. All your data is encrypted and stored securely in Cloud Firestore. Your personal information and reading history are protected according to university privacy guidelines."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:deepeshkalurs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-4 py-3 flex justify-between items-center bg-card hover:bg-muted transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-left text-card-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-muted">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            Still Have Questions?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your question or concern"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[100px]"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQSection;
