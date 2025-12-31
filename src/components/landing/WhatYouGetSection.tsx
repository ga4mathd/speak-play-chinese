import { Check } from "lucide-react";

const items = [
  "Interactive Trilingual Book (80 topics, 44+ pages)",
  "USB-C Charging Cable",
  "User Guide & Quick Start Instructions",
];

const WhatYouGetSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              What You'll Receive
            </h2>

            <ul className="space-y-4 mb-8">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-success-foreground" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted p-6 rounded-2xl">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Everything included.</strong> No hidden costs, 
                no batteries needed, no subscriptions required.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Open Book Full View Image]<br />
                  Ảnh #9 - dd09e58b
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
