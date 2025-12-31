import { Wifi, Smartphone, CreditCard } from "lucide-react";
import solutionImage from "@/assets/images/solution.webp";

const SolutionSection = () => {
  return (
    <section className="py-10 lg:py-20 bg-background">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={solutionImage} 
              alt="Bé gái cầm sách học tiếng Hoa tương tác" 
              className="w-full h-auto lg:rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">How It Works</p>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Touch Any Picture,{" "}
              <span className="text-primary">Hear It In 3 Languages</span>
            </h2>

            <p className="text-sm lg:text-base text-muted-foreground mb-5">
              Your child simply touches any picture in the book, and instantly hears the word in{" "}
              <strong className="text-foreground">Mandarin</strong>,{" "}
              <strong className="text-foreground">English</strong>, or{" "}
              <strong className="text-foreground">Cantonese</strong>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-muted text-foreground px-3 py-1.5 rounded-lg text-xs font-medium">
                <Wifi className="w-3.5 h-3.5 text-success" />
                <span>No WiFi</span>
              </div>
              <div className="flex items-center gap-1.5 bg-muted text-foreground px-3 py-1.5 rounded-lg text-xs font-medium">
                <Smartphone className="w-3.5 h-3.5 text-success" />
                <span>No Apps</span>
              </div>
              <div className="flex items-center gap-1.5 bg-muted text-foreground px-3 py-1.5 rounded-lg text-xs font-medium">
                <CreditCard className="w-3.5 h-3.5 text-success" />
                <span>No Subscriptions</span>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm">
              Just pure, interactive learning that kids love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
