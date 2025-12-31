import { Package, RotateCcw, Shield } from "lucide-react";

const guarantees = [
  {
    icon: Package,
    title: "Free US Shipping",
    description: "14-20 business days delivery",
  },
  {
    icon: RotateCcw,
    title: "30-Day Money Back",
    description: "Full refund, no questions asked",
  },
  {
    icon: Shield,
    title: "1-Year Warranty",
    description: "We've got you covered",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            100% Risk-Free Purchase
          </h2>
          <p className="text-muted-foreground text-lg">
            We're confident you'll love it. That's why we offer these guarantees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <guarantee.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
