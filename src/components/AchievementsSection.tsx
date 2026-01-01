import { Trophy, Flame, Star, Clock, Target, Award, Zap, Calendar } from "lucide-react";

const achievements = [
  {
    icon: Flame,
    title: "First Flame",
    description: "Complete your first study session",
    color: "from-orange-500 to-red-500",
    unlocked: true,
  },
  {
    icon: Clock,
    title: "Hour Champion",
    description: "Study for 1 hour in a single session",
    color: "from-blue-500 to-cyan-500",
    unlocked: true,
  },
  {
    icon: Calendar,
    title: "Week Warrior",
    description: "Maintain a 7-day study streak",
    color: "from-green-500 to-emerald-500",
    unlocked: true,
  },
  {
    icon: Target,
    title: "Goal Getter",
    description: "Complete all goals for a subject",
    color: "from-purple-500 to-pink-500",
    unlocked: false,
  },
  {
    icon: Star,
    title: "Centurion",
    description: "Reach 100 hours of total study time",
    color: "from-yellow-500 to-orange-500",
    unlocked: false,
  },
  {
    icon: Award,
    title: "Master Scholar",
    description: "Unlock all achievements",
    color: "from-indigo-500 to-purple-500",
    unlocked: false,
  },
];

const AchievementsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-warning/5 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Achievements Preview */}
          <div className="order-2 lg:order-1 relative animate-slide-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`glass-card rounded-2xl p-5 text-center hover-lift transition-all duration-300 ${
                      !achievement.unlocked ? "opacity-50" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-3 shadow-lg ${
                        achievement.unlocked ? "animate-pulse-glow" : "grayscale"
                      }`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {achievement.description}
                    </p>
                    {achievement.unlocked && (
                      <div className="mt-2 inline-flex items-center gap-1 text-xs text-success">
                        <Zap className="w-3 h-3" />
                        Unlocked
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-slide-up delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
              <Trophy className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-warning">Gamified Learning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unlock Achievements
              <br />
              <span className="gradient-text">Stay Motivated</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Earn badges and achievements as you progress through your study journey.
              Our gamification system keeps you motivated and celebrates your milestones.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">14+ Unique Achievements</h4>
                  <p className="text-sm text-muted-foreground">
                    From beginner milestones to master-level challenges
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Streak Rewards</h4>
                  <p className="text-sm text-muted-foreground">
                    Build consistency with daily streak tracking and bonuses
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Progress Celebrations</h4>
                  <p className="text-sm text-muted-foreground">
                    Celebrate every milestone with satisfying animations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
