import { Download, MousePointerClick, Timer, Trophy } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Install Extension",
    description:
      "Add StudyTimer Pro to Chrome in one click. No account required, completely free.",
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Set Up Subjects",
    description:
      "Create subjects for your courses and set study goals. Customize colors and targets.",
  },
  {
    icon: Timer,
    number: "03",
    title: "Start Studying",
    description:
      "Click to start timing your sessions. The extension tracks everything automatically.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Track Progress",
    description:
      "Watch your stats grow, unlock achievements, and celebrate your consistency.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <span className="text-sm font-medium text-success">Simple Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Started in
            <br />
            <span className="gradient-text">4 Easy Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No registration, no complicated setup. Install and start tracking your study time immediately.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className="glass-card rounded-3xl p-8 text-center hover-lift h-full">
                    {/* Number */}
                    <div className="text-6xl font-bold text-muted/30 mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative w-16 h-16 mx-auto mb-6">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative w-full h-full rounded-2xl bg-primary-gradient flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Arrow (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-muted-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
