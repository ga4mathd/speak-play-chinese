import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Hero Image - Mobile First */}
          <div className="w-full lg:flex-1 -mx-4 lg:mx-0 order-first lg:order-last animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img 
              src={heroImage} 
              alt="Sách học tiếng Hoa tương tác 3 ngôn ngữ cho trẻ em" 
              className="w-full h-auto lg:rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in px-2 lg:px-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 text-foreground px-3 py-1.5 rounded-full text-xs font-medium mb-4">
              <span className="text-secondary">★★★★★</span>
              <span>#1 Bestseller · 1M+ Sold</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Your Child Learns Chinese{" "}
              <span className="text-primary">Just By Touching</span>{" "}
              The Pages
            </h1>

            {/* Subheadline */}
            <p className="text-sm lg:text-base text-muted-foreground mb-5 max-w-md mx-auto lg:mx-0">
              The interactive trilingual book that makes learning Mandarin, English, and Cantonese fun and effortless.
            </p>

            {/* Price */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="text-lg text-muted-foreground line-through">$199</span>
              <span className="text-3xl lg:text-4xl font-bold text-primary font-display">$149</span>
              <span className="bg-success/10 text-success px-2 py-0.5 rounded text-xs font-medium">
                Free Shipping
              </span>
            </div>

            {/* CTA Button */}
            <Link to="/order" className="block">
              <Button 
                size="lg" 
                className="gradient-cta text-primary-foreground text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-5 h-auto rounded-xl shadow-cta hover:opacity-95 transition-opacity w-full lg:w-auto font-semibold"
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
