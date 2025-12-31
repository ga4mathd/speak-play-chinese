import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-8 lg:py-20">
      <div className="container mx-auto px-4 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Hero Image - Mobile First */}
          <div className="w-full lg:flex-1 -mx-4 lg:mx-0 order-first lg:order-last animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={heroImage} 
              alt="Sách học tiếng Hoa tương tác 3 ngôn ngữ cho trẻ em" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in px-4 lg:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 gradient-badge text-primary-foreground px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold mb-4 lg:mb-6">
              <span className="text-secondary">⭐⭐⭐⭐⭐</span>
              <span>#1 Bestseller | 1M+ Sold</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-4 lg:mb-6">
              Your Child Learns Chinese{" "}
              <span className="text-gradient">Just By Touching</span>{" "}
              The Pages
            </h1>

            {/* Subheadline */}
            <p className="text-base lg:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
              The interactive trilingual book that makes learning Mandarin, English, and Cantonese fun and effortless.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-6 lg:mb-8">
              <span className="text-xl lg:text-2xl text-muted-foreground line-through">$199</span>
              <span className="text-4xl lg:text-5xl font-bold text-accent font-display">$149</span>
              <span className="bg-success text-success-foreground px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-semibold">
                Free Shipping
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order" className="block">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-lg lg:text-xl px-8 lg:px-12 py-5 lg:py-6 h-auto rounded-2xl shadow-cta hover:scale-105 transition-transform animate-pulse-glow w-full lg:w-auto"
              >
                ORDER NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
