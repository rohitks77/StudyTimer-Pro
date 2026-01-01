import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, FileKey, Users, CheckCircle, XCircle } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Privacy Policy - StudyTimer Pro";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Privacy Policy for StudyTimer Pro Chrome Extension. Learn how we protect your data with 100% local storage and zero tracking.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Privacy Policy for StudyTimer Pro Chrome Extension. Learn how we protect your data with 100% local storage and zero tracking.";
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://studytimer.rohitks.com.np/privacy-policy");
    }

    // Cleanup on unmount
    return () => {
      document.title = "StudyTimer Pro - Smart Study Time Tracker Chrome Extension";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Track your study time, build habits, and achieve academic excellence with StudyTimer Pro. Free Chrome extension with progress tracking, achievements, and 100% privacy.");
      }
      if (canonicalLink) {
        canonicalLink.setAttribute("href", "https://studytimer.rohitks.com.np/");
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-3xl rounded-full" />
        
        <div className="container-padding max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy First</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is our priority. Here's how we protect it.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last Updated: December 31, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20">
        <div className="container-padding max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* Introduction Card */}
            <div className="glass-card rounded-2xl p-8 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    StudyTimer Pro ("we", "our", or "the extension") is committed to protecting your privacy. 
                    This Privacy Policy explains how we handle your information when you use our Chrome extension.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Collection Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Data Collection and Storage</h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">What Data We Collect</h3>
                  <p className="text-muted-foreground mb-4">
                    StudyTimer Pro collects and stores the following data <span className="text-primary font-semibold">locally on your device only</span>:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Study Session Data",
                      "Subject Information",
                      "User Notes",
                      "Bookmarks",
                      "Achievement Progress",
                      "Settings & Preferences",
                      "Study History"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-secondary/50">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">How Data is Stored</h3>
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                    <p className="text-foreground font-semibold mb-4">
                      All data is stored locally using Chrome's Local Storage API.
                    </p>
                    <div className="grid gap-3">
                      {[
                        "Data stays on your device only",
                        "No data sent to external servers",
                        "No internet transmission",
                        "No analytics or tracking",
                        "No third-party access"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-success" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Usage Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Data Usage</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground font-semibold mb-3">We use data to:</p>
                  <div className="space-y-2">
                    {[
                      "Track study time and progress",
                      "Display statistics",
                      "Remember preferences",
                      "Provide planner features",
                      "Show historical data"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground font-semibold mb-3">We do NOT:</p>
                  <div className="space-y-2">
                    {[
                      "Collect personal info",
                      "Send data to servers",
                      "Share with third parties",
                      "Use tracking tools",
                      "Display advertisements",
                      "Sell your data"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Permissions Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileKey className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Permissions Explained</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "storage", desc: "Save your data locally" },
                  { title: "notifications", desc: "Send study reminders" },
                  { title: "alarms", desc: "Schedule daily resets" },
                  { title: "tabs", desc: "Open study websites" }
                ].map((perm, index) => (
                  <div key={index} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <p className="font-mono font-semibold text-primary mb-1">{perm.title}</p>
                    <p className="text-sm text-muted-foreground">{perm.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <p className="text-foreground text-sm">
                  <strong>Note:</strong> We do not access, read, or collect data from websites you visit.
                </p>
              </div>
            </div>

            {/* Data Control Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Your Rights & Control</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: "Export all your data as JSON" },
                  { icon: CheckCircle, text: "Import previously exported data" },
                  { icon: CheckCircle, text: "Delete all data anytime" },
                  { icon: CheckCircle, text: "Uninstall and remove everything" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Card */}
            <div className="glass-card rounded-2xl p-8 border-l-4 border-success">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Data Security</h2>
                  <p className="text-muted-foreground mb-4">Since all data is stored locally on your device:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      Protected by your device's security measures
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      No risk of data interception
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      No server-side breaches possible
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Contact Information</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have questions or concerns about this Privacy Policy:
                  </p>
                  <div className="space-y-2">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Website:</span>{" "}
                      <a href="https://rohitks.com.np" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                        rohitks.com.np
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Extension:</span> StudyTimer Pro v1.0.0
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Privacy-First Extension</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  All your study data stays on your device. We don't collect, transmit, or share any of your information with anyone.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-success/10 border border-success/20">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-success font-semibold">100% Private & Secure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
