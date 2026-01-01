import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Timer, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </Button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
        isScrolled
          ? "glass-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="StudyTimer Pro Logo" 
              className="w-10 h-10 rounded-xl shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300"
            />
            <span className="text-xl font-bold text-foreground">
              StudyTimer<span className="text-primary">Pro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Install Free
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu - Separate from nav for proper positioning */}
    {isMobileMenuOpen && (
      <div className="md:hidden fixed inset-0 z-[60]">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto">
          <div className="min-h-screen bg-background pt-24 px-6 pb-6">
            <div className="max-w-md mx-auto space-y-6">
              {/* Theme Toggle */}
              <div className="flex justify-start pb-4 border-b border-border">
                <ThemeToggle />
              </div>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 text-xl font-semibold py-4 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Privacy Policy Link */}
              <a
                href="/privacy-policy"
                className="block text-foreground hover:text-primary transition-colors duration-200 text-xl font-semibold py-4 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy Policy
              </a>

              {/* CTA Button */}
              <div className="pt-6">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a
                    href="https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download className="w-5 h-5" />
                    Install Free
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
