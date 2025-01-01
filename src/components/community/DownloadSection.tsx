import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Download, Github, Smartphone, Info, Shield, 
  Wifi, Database, MapPin, Star, Clock, CheckCircle 
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import phoneWallpaper from '/assets/phoneWallpaper.png';

interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
  created_at: string;
  download_count: number;
}

interface GitHubRelease {
  tag_name: string;
  body: string;
  assets: GitHubAsset[];
  published_at: string;
  prerelease: boolean;
  name: string;
}

const owner = import.meta.env.VITE_GITHUB_OWNER;
const repo = import.meta.env.VITE_GITHUB_REPO;
const token = import.meta.env.VITE_GITHUB_TOKEN;


const APP_FEATURES = [
  {
    icon: Shield,
    title: "Secure Auth",
    description: "Firebase Authentication"
  },
  {
    icon: Database,
    title: "Real-time Data",
    description: "Cloud Firestore"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Geolocation Support"
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Work without internet"
  }
];

const DownloadSection = () => {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [downloadStarted, setDownloadStarted] = useState<boolean>(false);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      if (!owner || !repo || !token) {
        setError('GitHub configuration is missing');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        if (!response.ok) throw new Error('Failed to fetch release data');
        const data: GitHubRelease = await response.json();
        setRelease(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  const getApkAsset = (): GitHubAsset | null => {
    if (!release?.assets) return null;
    return release.assets.find(asset => asset.name.endsWith('.apk')) ?? null;
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setDownloadStarted(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Card className="w-full max-w-6xl mx-auto">
        <CardContent className="p-6">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-12 bg-gray-200 rounded w-48"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  const apkAsset = getApkAsset();

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Hero Section with Side-by-Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
        <Card className="relative overflow-hidden bg-gradient-to-br border-0">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="relative h-[500px] flex justify-center items-center p-8">
            <div className="relative w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800  hover:rotate-12 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
              <img
                src={phoneWallpaper}
                alt="App preview"
                className="w-full h-full object-cover rounded-[2.25rem]"
              />
            </div>
          </div>
        </Card>

        {/* Right Side - Download Info */}
        <Card className="relative">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6" />
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Download Now
                </CardTitle>
              </div>
              {release?.prerelease && <Badge variant="secondary">Beta</Badge>}
            </div>
            <CardDescription className="text-lg">
              Latest version with Firebase integration
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-xl">
                  Version {release?.tag_name || '0.0.0'}
                </h3>
              </div>

              {release && (
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatDate(release.published_at)}
                  </div>
                  {apkAsset && (
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {apkAsset.download_count.toLocaleString()} downloads
                    </div>
                  )}
                </div>
              )}

              {apkAsset && (
                <div className="flex flex-col gap-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => handleDownload(apkAsset.browser_download_url)}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Button>
                  <span className="text-sm text-center text-gray-500">
                    Size: {Math.round(apkAsset.size / 1024 / 1024 * 10) / 10}MB
                  </span>
                </div>
              )}
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              {APP_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-gray-50">
                  <feature.icon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details Section Below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Info className="h-5 w-5" />
              Release Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              <div dangerouslySetInnerHTML={{ __html: release?.body || 'No release notes available.' }} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-gray-600">Device</h4>
                <ul className="space-y-2">
                  {['Android 8.0+', '100MB storage', '2GB RAM', 'ARM64'].map((req, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-gray-600">Firebase</h4>
                <ul className="space-y-2">
                  {[
                    'Play Services 20.0+',
                    'Google Account',
                    'Internet connection',
                    'Location (optional)'
                  ].map((req, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {downloadStarted && (
        <Alert className="bg-green-50 border-green-200">
          <Star className="h-4 w-4 text-green-600" />
          <AlertTitle>Download Started!</AlertTitle>
          <AlertDescription>
            Thank you for downloading. If it didn't start,
            <Button 
              variant="link" 
              className="p-0 h-auto font-normal"
              onClick={() => apkAsset && handleDownload(apkAsset.browser_download_url)}
            >
              click here
            </Button>.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DownloadSection;