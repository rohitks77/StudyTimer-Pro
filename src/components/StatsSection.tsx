import { BarChart3, TrendingUp, Calendar, Target } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powerful Analytics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Understand Your
              <br />
              <span className="gradient-text">Study Patterns</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Get detailed insights into your study habits. Track time spent on each subject,
              identify your most productive hours, and optimize your learning schedule.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Progress Charts</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualize your study time with beautiful charts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Daily Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    See your study activity by day, week, or month
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Goal Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Set and achieve custom study goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Subject Stats</h4>
                  <p className="text-sm text-muted-foreground">
                    Compare time spent across subjects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Preview */}
          <div className="relative animate-slide-up delay-200">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75" />

            <div className="relative glass-card rounded-3xl p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Weekly Overview</h3>
                <span className="text-sm text-muted-foreground">This Week</span>
              </div>

              {/* Chart Bars */}
              <div className="flex items-end justify-between gap-2 h-40 mb-6">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                  const heights = [60, 80, 45, 90, 70, 40, 55];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-primary-gradient rounded-t-lg transition-all duration-500 hover:opacity-80"
                        style={{
                          height: `${heights[index]}%`,
                          animationDelay: `${index * 100}ms`,
                        }}
                      />
                      <span className="text-xs text-muted-foreground">{day}</span>
                    </div>
                  );
                })}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-foreground">24.5h</div>
                  <div className="text-xs text-muted-foreground">Total Time</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary">7</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
                <div className="text-center p-3 bg-secondary/50 rounded-xl">
                  <div className="text-2xl font-bold text-success">+15%</div>
                  <div className="text-xs text-muted-foreground">vs Last Week</div>
                </div>
              </div>

              {/* Subject Breakdown */}
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-medium text-foreground">By Subject</h4>
                {[
                  { name: "Mathematics", percent: 35, color: "bg-primary" },
                  { name: "Physics", percent: 25, color: "bg-success" },
                  { name: "Chemistry", percent: 20, color: "bg-warning" },
                  { name: "English", percent: 20, color: "bg-destructive" },
                ].map((subject, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{subject.name}</span>
                      <span className="text-foreground font-medium">{subject.percent}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${subject.color} rounded-full transition-all duration-700`}
                        style={{ width: `${subject.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
