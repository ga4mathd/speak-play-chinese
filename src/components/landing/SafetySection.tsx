import { Usb, Shield, Battery, Piano } from "lucide-react";
import safetyImage from "@/assets/images/safety.jpeg";

const features = [
  {
    icon: Usb,
    title: "USB-C Rechargeable",
    description: "No batteries. Full charge lasts 2-3 weeks.",
  },
  {
    icon: Shield,
    title: "Rounded Corners",
    description: "Safe for little hands. No sharp edges.",
  },
  {
    icon: Battery,
    title: "Thick Durable Pages",
    description: "Built for toddlers. Water-resistant.",
  },
  {
    icon: Piano,
    title: "Built-In Piano",
    description: "Real keyboard for musical exploration.",
  },
];

const SafetySection = () => {
  return (
    <section className="py-8 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
            Safe, Durable & Rechargeable
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg max-w-2xl mx-auto">
            Designed with parents and kids in mind. Built to last for years.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Features Grid */}
          <div className="flex-1 grid grid-cols-2 gap-3 lg:gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg lg:rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                  <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <h3 className="font-display text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs lg:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in -mx-4 lg:mx-0">
            <img 
              src={safetyImage} 
              alt="Góc bo tròn, sạc Type-C và bàn phím piano tích hợp" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
