import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What ages is this book suitable for?",
    answer: "This book is designed for children ages 0-6, but kids up to 8 years old still love using it. The content ranges from simple vocabulary to more advanced topics like Tang poetry, so it grows with your child.",
  },
  {
    question: "Does it need WiFi or an internet connection?",
    answer: "No! The book works completely offline. All audio is stored directly in the book — no apps, no WiFi, no downloads needed.",
  },
  {
    question: "How long does the battery last?",
    answer: "A full charge lasts 2-3 weeks with daily use (about 30 minutes per day). The book uses USB-C charging, so you can use any standard phone charger.",
  },
  {
    question: "How is the audio quality?",
    answer: "The audio is recorded by professional native speakers. Volume is adjustable, and the speaker is designed to be clear but not too loud for young ears.",
  },
  {
    question: "Is the book durable for toddlers?",
    answer: "Absolutely! The pages are thick, water-resistant, and all corners are rounded for safety. This book is built to handle toddler love.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied for any reason, simply return the book for a full refund — no questions asked.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We offer FREE shipping to the US (14-20 business days). International shipping is available to most countries for an additional fee.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-none shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
