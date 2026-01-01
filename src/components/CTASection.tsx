import { Button } from "@/components/ui/button";
import { Download, Chrome, Zap, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10K+", label: "Active Users" },
  { icon: Clock, value: "500K+", label: "Hours Tracked" },
  { icon: Zap, value: "14+", label: "Achievements" },
];

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
      <div className="absolute inset-0 bg-glow-gradient opacity-30" />

      <div className="container-padding max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
              <Chrome className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Available on Chrome Web Store</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform
              <br />
              <span className="gradient-text">Your Study Habits?</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students who have already improved their productivity.
              No account required, completely free, 100% private.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 h-12 sm:h-14" asChild>
              <a
                href="https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Add to Chrome — It's Free
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              No credit card required · No account needed · Works offline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
