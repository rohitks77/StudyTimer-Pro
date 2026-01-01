import { useState } from "react";
import {
  Timer,
  BookOpen,
  Bookmark,
  TrendingUp,
  Trophy,
  BarChart3,
  Settings,
  Palette,
  Shield,
  Download,
  Upload,
  Zap,
} from "lucide-react";

const features = [
  {
    id: "timer",
    icon: Timer,
    title: "Smart Study Timer",
    description:
      "Track your study sessions with precision. Our intelligent timer adapts to your workflow and keeps you focused.",
    details: [
      "One-click session start/pause",
      "Automatic session logging",
      "Background tracking support",
      "Session history & analytics",
    ],
  },
  {
    id: "subjects",
    icon: BookOpen,
    title: "Subject Management",
    description:
      "Organize your studies by subjects with custom goals. Set targets and watch your progress grow.",
    details: [
      "Unlimited subjects",
      "Custom study goals",
      "Progress tracking per subject",
      "Color coding & organization",
    ],
  },
  {
    id: "bookmarks",
    icon: Bookmark,
    title: "Quick Bookmarks",
    description:
      "Save your favorite study resources for instant access. No more searching for that important link.",
    details: [
      "One-click bookmarking",
      "Organize by categories",
      "Quick access sidebar",
      "Sync with subjects",
    ],
  },
  {
    id: "progress",
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Visualize your study patterns and improvements over time with detailed progress charts.",
    details: [
      "Daily/weekly/monthly views",
      "Study pattern analysis",
      "Goal completion tracking",
      "Performance insights",
    ],
  },
  {
    id: "achievements",
    icon: Trophy,
    title: "Achievement System",
    description:
      "Stay motivated with 14+ achievements to unlock. Celebrate your milestones and build momentum.",
    details: [
      "14+ unique achievements",
      "Progressive unlocking",
      "Milestone celebrations",
      "Streak rewards",
    ],
  },
  {
    id: "stats",
    icon: BarChart3,
    title: "Detailed Statistics",
    description:
      "Comprehensive analytics dashboard to understand your study habits and optimize your learning.",
    details: [
      "Total study time tracking",
      "Subject distribution",
      "Productivity patterns",
      "Custom date ranges",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Palette,
    title: "Dark Mode & Themes",
    description: "Customize your experience with beautiful themes",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "All data stored locally on your device",
  },
  {
    icon: Download,
    title: "Data Export",
    description: "Export your data as JSON anytime",
  },
  {
    icon: Upload,
    title: "Data Import",
    description: "Easily import your study history",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Personalize every aspect of the app",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description: "Fast and efficient, no performance impact",
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <br />
            <span className="gradient-text">Excel in Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit designed specifically for students who want to maximize
            their productivity and achieve their academic goals.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Feature Tabs */}
          <div className="space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature.id === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? "glass-card glow-effect"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-primary-gradient shadow-glow-sm"
                          : "bg-secondary group-hover:bg-primary/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Details */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 hover-lift">
            <div
              className={`w-16 h-16 rounded-2xl bg-primary-gradient flex items-center justify-center mb-6 shadow-glow-sm`}
            >
              <activeFeature.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {activeFeature.title}
            </h3>
            <p className="text-muted-foreground mb-8">{activeFeature.description}</p>
            <ul className="space-y-4">
              {activeFeature.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-success"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-5 text-center hover-lift animated-border"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
