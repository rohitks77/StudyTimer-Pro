import { Timer, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    resources: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Support", href: "#support" },
    ],
    social: [
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="StudyTimer Pro Logo" 
                className="w-10 h-10 rounded-xl shadow-glow-sm"
              />
              <span className="text-xl font-bold text-foreground">
                StudyTimer<span className="text-primary">Pro</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              The intelligent Chrome extension that helps students track their study time,
              build habits, and achieve academic success.
            </p>
            <div className="flex gap-4">
              {links.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} StudyTimer Pro. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for students everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
