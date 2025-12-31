import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 gradient-badge text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="text-secondary">⭐⭐⭐⭐⭐</span>
              <span>#1 Bestseller in China | 1 Million+ Sold</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Your Child Learns Chinese{" "}
              <span className="text-gradient">Just By Touching</span>{" "}
              The Pages
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              The interactive trilingual book that makes learning Mandarin, English, and Cantonese fun and effortless.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="text-2xl text-muted-foreground line-through">$199</span>
              <span className="text-5xl font-bold text-accent font-display">$149</span>
              <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Free US Shipping
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-xl px-12 py-6 h-auto rounded-2xl shadow-cta hover:scale-105 transition-transform animate-pulse-glow"
              >
                ORDER NOW
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
                {/* Placeholder for hero image */}
                <div className="aspect-square bg-secondary/30 rounded-2xl flex items-center justify-center">
                  <span className="text-muted-foreground text-center p-8">
                    [Hero Product Image]<br />
                    Ảnh #10 - aab67db9
                  </span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
