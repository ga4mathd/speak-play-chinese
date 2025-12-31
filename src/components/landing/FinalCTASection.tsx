import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Product Features Image]<br />
                  Ảnh #13 - 7ca6a9a8
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Give Your Child the Gift of Language?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Join 1 million+ families who are helping their children learn Chinese the fun way.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-2xl text-muted-foreground line-through">$199</span>
              <span className="text-5xl font-bold text-accent font-display">$149</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="bg-success text-success-foreground px-4 py-2 rounded-full font-semibold">
                ✓ Free US Shipping
              </span>
              <span className="bg-card text-foreground px-4 py-2 rounded-full font-semibold shadow-soft">
                ✓ 30-Day Guarantee
              </span>
              <span className="bg-card text-foreground px-4 py-2 rounded-full font-semibold shadow-soft">
                ✓ 1-Year Warranty
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-xl px-12 py-6 h-auto rounded-2xl shadow-cta hover:scale-105 transition-transform animate-pulse-glow w-full sm:w-auto"
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
