import { Usb, Shield, Battery, Piano } from "lucide-react";

const features = [
  {
    icon: Usb,
    title: "USB-C Rechargeable",
    description: "No batteries needed. Full charge lasts 2-3 weeks of daily use.",
  },
  {
    icon: Shield,
    title: "Rounded Corners",
    description: "Safe for little hands. No sharp edges anywhere.",
  },
  {
    icon: Battery,
    title: "Thick Durable Pages",
    description: "Built to withstand toddler handling. Water-resistant coating.",
  },
  {
    icon: Piano,
    title: "Built-In Piano",
    description: "Real piano keyboard for musical exploration.",
  },
];

const SafetySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Safe, Durable & Rechargeable
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed with parents and kids in mind. Built to last for years.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Features Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Safety Features Image]<br />
                  Ảnh #1 - 4c284900
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
