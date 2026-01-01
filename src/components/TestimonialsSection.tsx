import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Medical Student",
    avatar: "SC",
    rating: 5,
    text: "StudyTimer Pro completely transformed my study habits. The streak feature keeps me motivated, and I love seeing my progress over time. A must-have for any serious student!",
  },
  {
    name: "James Rodriguez",
    role: "Computer Science Major",
    avatar: "JR",
    rating: 5,
    text: "Finally, a study tracker that respects my privacy! No accounts, no cloud storage - just pure focus tracking. The achievement system is surprisingly addictive.",
  },
  {
    name: "Emily Watson",
    role: "Law Student",
    avatar: "EW",
    rating: 5,
    text: "The subject management feature is brilliant. I can track time spent on each course separately and adjust my study schedule accordingly. Highly recommend!",
  },
  {
    name: "Alex Kim",
    role: "Engineering Student",
    avatar: "AK",
    rating: 5,
    text: "Clean interface, powerful features, and completely free. I've tried many productivity apps, but this one actually sticks. The statistics help me optimize my study sessions.",
  },
  {
    name: "Maria Santos",
    role: "PhD Researcher",
    avatar: "MS",
    rating: 5,
    text: "As a researcher, I need to track hours spent on different projects. StudyTimer Pro makes this effortless. The export feature is perfect for my monthly reports.",
  },
  {
    name: "David Park",
    role: "MBA Student",
    avatar: "DP",
    rating: 5,
    text: "Love the dark mode and the minimal design. It doesn't distract from my work but still provides all the tracking I need. The bookmarks feature saves me so much time!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-padding max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/20 mb-6">
            <Star className="w-4 h-4 text-warning fill-warning" />
            <span className="text-sm font-medium text-warning">Loved by Students</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Students
            <br />
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have improved their study habits with StudyTimer Pro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift animated-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-warning fill-warning" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
