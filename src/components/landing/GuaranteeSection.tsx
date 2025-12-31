import { Package, RotateCcw, Shield } from "lucide-react";

const guarantees = [
  {
    icon: Package,
    title: "Free US Shipping",
    description: "14-20 business days",
  },
  {
    icon: RotateCcw,
    title: "30-Day Money Back",
    description: "Full refund, no questions",
  },
  {
    icon: Shield,
    title: "1-Year Warranty",
    description: "We've got you covered",
  },
];

const GuaranteeSection = () => {
  return (
    <section className="py-10 lg:py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-1">Our Promise</p>
            <h2 className="font-display text-lg lg:text-xl font-semibold text-primary-foreground">
              100% Risk-Free
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <guarantee.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary-foreground">
                    {guarantee.title}
                  </p>
                  <p className="text-primary-foreground/60 text-xs">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
