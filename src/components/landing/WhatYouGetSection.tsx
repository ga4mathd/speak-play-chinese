import { Check } from "lucide-react";
import whatyougetImage from "@/assets/images/whatyouget.jpeg";

const items = [
  "Interactive Trilingual Book (80 topics, 44+ pages)",
  "USB-C Charging Cable",
  "User Guide & Quick Start Instructions",
];

const WhatYouGetSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-background">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0 order-2 lg:order-1">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 lg:mb-8">
              What You'll Receive
            </h2>

            <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 lg:w-5 lg:h-5 text-success-foreground" />
                  </div>
                  <span className="text-base lg:text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-muted p-4 lg:p-6 rounded-xl lg:rounded-2xl">
              <p className="text-muted-foreground text-sm lg:text-base">
                <strong className="text-foreground">Everything included.</strong> No hidden costs, 
                no batteries needed, no subscriptions required.
              </p>
            </div>
          </div>

          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in order-1 lg:order-2">
            <img 
              src={whatyougetImage} 
              alt="Sách mở ra đầy đủ với tất cả nội dung" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
