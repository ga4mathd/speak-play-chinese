import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import finalCtaImage from "@/assets/images/final-cta.png";

const FinalCTASection = () => {
  return (
    <section className="py-8 lg:py-24 gradient-hero">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={finalCtaImage} 
              alt="Sản phẩm với các tính năng nổi bật" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Ready to Give Your Child the Gift of Language?
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Join 1 million+ families who are helping their children learn Chinese the fun way.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
              <span className="text-xl lg:text-2xl text-muted-foreground line-through">$199</span>
              <span className="text-4xl lg:text-5xl font-bold text-accent font-display">$149</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4 mb-6 lg:mb-8">
              <span className="bg-success text-success-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold text-xs lg:text-base">
                ✓ Free Shipping
              </span>
              <span className="bg-card text-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold shadow-soft text-xs lg:text-base">
                ✓ 30-Day Guarantee
              </span>
              <span className="bg-card text-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold shadow-soft text-xs lg:text-base">
                ✓ 1-Year Warranty
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order" className="block">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-lg lg:text-xl px-8 lg:px-12 py-5 lg:py-6 h-auto rounded-2xl shadow-cta hover:scale-105 transition-transform animate-pulse-glow w-full lg:w-auto"
              >
                ORDER NOW — $149
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
