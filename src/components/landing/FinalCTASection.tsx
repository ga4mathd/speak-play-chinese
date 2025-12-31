import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import finalCtaImage from "@/assets/images/final-cta.png";

const FinalCTASection = () => {
  return (
    <section className="py-10 lg:py-20 gradient-hero">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={finalCtaImage} 
              alt="Sản phẩm với các tính năng nổi bật" 
              className="w-full h-auto lg:rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <h2 className="font-display text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Give Your Child the Gift of Language?
            </h2>

            <p className="text-sm lg:text-base text-muted-foreground mb-5">
              Join 1 million+ families who are helping their children learn Chinese the fun way.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="text-lg text-muted-foreground line-through">$199</span>
              <span className="text-3xl lg:text-4xl font-bold text-primary font-display">$149</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="bg-success/10 text-success px-2.5 py-1 rounded text-xs font-medium">
                ✓ Free Shipping
              </span>
              <span className="bg-muted text-foreground px-2.5 py-1 rounded text-xs font-medium">
                ✓ 30-Day Guarantee
              </span>
              <span className="bg-muted text-foreground px-2.5 py-1 rounded text-xs font-medium">
                ✓ 1-Year Warranty
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order" className="block">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 h-auto rounded-xl shadow-cta hover:opacity-95 transition-opacity w-full lg:w-auto font-semibold"
              >
                Order Now — $149
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
