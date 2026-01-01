import { Button } from "@/components/ui/button";
import { Download, Zap, Shield, Star } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const HeroSection = () => {
  const { theme } = useTheme();

  const extensionImage = theme === "dark" 
    ? "/studytimer-pro-for-dark-mode.png" 
    : "/studytimer-pro-for-white-mode.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background light:from-foreground/90 light:via-foreground/70 light:to-foreground/50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow-gradient opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl animate-float delay-300" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Free & Private</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-foreground dark:text-foreground light:text-white">
              Master Your
              <br />
              <span className="gradient-text">Study Time</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground dark:text-muted-foreground light:text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 text-balance">
              The intelligent Chrome extension that tracks your study sessions, 
              builds powerful habits, and helps you achieve academic excellence.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                <span className="text-foreground dark:text-foreground light:text-white font-semibold">4.9</span>
                <span className="text-muted-foreground dark:text-muted-foreground light:text-white/80">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-foreground dark:text-foreground light:text-white font-semibold">100%</span>
                <span className="text-muted-foreground dark:text-muted-foreground light:text-white/80">Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-foreground dark:text-foreground light:text-white font-semibold">14+</span>
                <span className="text-muted-foreground dark:text-muted-foreground light:text-white/80">Achievements</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Add to Chrome — It's Free
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Extension Screenshot */}
          <div className="relative animate-slide-up delay-200">
            <div className="relative mx-auto max-w-md">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse-glow" />
              
              {/* Extension Screenshot */}
              <img 
                src={extensionImage}
                alt="StudyTimer Pro Extension Interface"
                className="relative rounded-2xl shadow-elevated hover-lift transition-all duration-500 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
