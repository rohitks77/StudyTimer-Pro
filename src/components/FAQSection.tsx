import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is StudyTimer Pro really free?",
    answer:
      "Yes! StudyTimer Pro is 100% free to use. There are no hidden fees, premium tiers, or in-app purchases. We believe every student should have access to powerful productivity tools.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required. StudyTimer Pro works completely offline and stores all your data locally on your device. Just install the extension and start studying!",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely! All your study data is stored locally in your browser. We don't collect any personal information, track your browsing, or store anything on external servers. Your data stays yours.",
  },
  {
    question: "Can I export my study data?",
    answer:
      "Yes! You can export all your study data as a JSON file anytime. This includes your subjects, sessions, progress, and achievements. You can also import this data to restore your history or transfer to another device.",
  },
  {
    question: "Does it work in background?",
    answer:
      "Yes! Once you start a study session, the timer continues running even if you close the extension popup. You can see your progress at any time by clicking the extension icon.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "StudyTimer Pro is currently available for Google Chrome and other Chromium-based browsers like Brave, Edge, and Opera. We're working on support for Firefox.",
  },
  {
    question: "How do achievements work?",
    answer:
      "Achievements are earned by reaching milestones in your study journey. Complete study sessions, build streaks, reach time goals, and more to unlock 14+ unique achievements. They're designed to keep you motivated!",
  },
  {
    question: "Can I track multiple subjects?",
    answer:
      "Yes! You can create unlimited subjects with custom names, colors, and study goals. Track your progress for each subject separately and see detailed statistics for your entire academic workload.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div className="container-padding max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for,
            feel free to reach out.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-2xl px-6 border-none data-[state=open]:glow-effect transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
