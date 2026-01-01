// ============================================
// APPLICATION CONFIGURATION
// ============================================
// This file contains all configurable settings for the app
// Edit values here to update content across the entire application

export const APP_CONFIG = {
  // ============================================
  // GENERAL SETTINGS
  // ============================================
  appName: "StudyTimer Pro",
  appVersion: "1.0.0",
  appDescription: "The intelligent Chrome extension that tracks your study sessions, builds powerful habits, and helps you achieve academic excellence.",
  
  // ============================================
  // URLS & LINKS
  // ============================================
  urls: {
    chromeWebStore: "https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea",
    website: "https://studytimer.rohitks.com.np/",
    contactWebsite: "https://rohitks.com.np",
    github: "#",
    twitter: "#",
    email: "#",
    privacyPolicy: "/privacy-policy",
    termsOfService: "#terms",
    support: "#support",
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    badge: "100% Free & Private",
    title: "Master Your",
    titleGradient: "Study Time",
    description: "The intelligent Chrome extension that tracks your study sessions, builds powerful habits, and helps you achieve academic excellence.",
    stats: [
      { icon: "Star", value: "4.9", label: "Rating" },
      { icon: "Shield", value: "100%", label: "Private" },
      { icon: "Zap", value: "14+", label: "Achievements" },
    ],
    ctaButton: {
      text: "Add to Chrome — It's Free",
      url: "https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea",
    },
    secondaryButton: {
      text: "Learn More",
      url: "#features",
    },
  },

  // ============================================
  // NAVIGATION LINKS
  // ============================================
  navigation: [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ],

  // ============================================
  // FOOTER LINKS
  // ============================================
  footer: {
    description: "The intelligent Chrome extension that helps students track their study time, build habits, and achieve academic success.",
    productLinks: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    resourceLinks: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Support", href: "#support" },
    ],
    socialLinks: [
      { icon: "Github", href: "#", label: "GitHub" },
      { icon: "Twitter", href: "#", label: "Twitter" },
      { icon: "Mail", href: "#", label: "Email" },
    ],
  },

  // ============================================
  // CTA SECTION
  // ============================================
  cta: {
    badge: "Available on Chrome Web Store",
    title: "Ready to Transform",
    titleGradient: "Your Study Habits?",
    description: "Join thousands of students who have already improved their productivity. No account required, completely free, 100% private.",
    stats: [
      { icon: "Users", value: "10K+", label: "Active Users" },
      { icon: "Clock", value: "500K+", label: "Hours Tracked" },
      { icon: "Zap", value: "14+", label: "Achievements" },
    ],
    ctaButton: {
      text: "Add to Chrome — It's Free",
      url: "https://chromewebstore.google.com/detail/studytimer-pro/gfncbiglcahdcimbfkndkfdcopkmahea",
    },
    disclaimer: "No credit card required · No account needed · Works offline",
  },

  // ============================================
  // PRIVACY POLICY CONTENT
  // ============================================
  privacyPolicy: {
    lastUpdated: "December 31, 2025",
    title: "Privacy Policy",
    subtitle: "Your privacy is our priority. Here's how we protect it.",
    
    introduction: {
      text: 'StudyTimer Pro ("we", "our", or "the extension") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our Chrome extension.',
    },

    dataCollection: {
      title: "Data Collection and Storage",
      whatWeCollect: [
        "Study Session Data",
        "Subject Information",
        "User Notes",
        "Bookmarks",
        "Achievement Progress",
        "Settings & Preferences",
        "Study History",
      ],
      howStored: [
        "Data stays on your device only",
        "No data sent to external servers",
        "No internet transmission",
        "No analytics or tracking",
        "No third-party access",
      ],
      storageNote: "All data is stored locally using Chrome's Local Storage API.",
    },

    dataUsage: {
      title: "Data Usage",
      weUseTo: [
        "Track study time and progress",
        "Display statistics",
        "Remember preferences",
        "Provide planner features",
        "Show historical data",
      ],
      weDoNot: [
        "Collect personal info",
        "Send data to servers",
        "Share with third parties",
        "Use tracking tools",
        "Display advertisements",
        "Sell your data",
      ],
    },

    permissions: {
      title: "Permissions Explained",
      list: [
        { name: "storage", description: "Save your data locally" },
        { name: "notifications", description: "Send study reminders" },
        { name: "alarms", description: "Schedule daily resets" },
        { name: "tabs", description: "Open study websites" },
      ],
      note: "We do not access, read, or collect data from websites you visit.",
    },

    dataControl: {
      title: "Your Rights & Control",
      rights: [
        "Export all your data as JSON",
        "Import previously exported data",
        "Delete all data anytime",
        "Uninstall and remove everything",
      ],
    },

    security: {
      title: "Data Security",
      points: [
        "Protected by your device's security measures",
        "No risk of data interception",
        "No server-side breaches possible",
      ],
    },

    contact: {
      title: "Contact Information",
      description: "If you have questions or concerns about this Privacy Policy:",
      website: "rohitks.com.np",
      websiteUrl: "https://rohitks.com.np",
      extensionName: "StudyTimer Pro",
      version: "1.0.0",
    },

    summary: {
      title: "Privacy-First Extension",
      description: "All your study data stays on your device. We don't collect, transmit, or share any of your information with anyone.",
      badge: "100% Private & Secure",
    },
  },

  // ============================================
  // SOCIAL MEDIA (for meta tags)
  // ============================================
  social: {
    twitterHandle: "@StudyTimerPro",
    ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  },

  // ============================================
  // SEO SETTINGS
  // ============================================
  seo: {
    title: "StudyTimer Pro - Smart Study Time Tracker Chrome Extension",
    description: "Track your study time, build habits, and achieve academic excellence with StudyTimer Pro. Free Chrome extension with progress tracking, achievements, and 100% privacy.",
    keywords: "study timer, productivity, chrome extension, time tracker, student, study habits, pomodoro",
    canonicalUrl: "https://studytimer.rohitks.com.np/",
  },
};

export default APP_CONFIG;
