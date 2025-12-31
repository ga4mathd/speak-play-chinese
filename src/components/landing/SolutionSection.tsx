import { Wifi, Smartphone, CreditCard } from "lucide-react";
import solutionImage from "@/assets/images/solution.webp";

const SolutionSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-background">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={solutionImage} 
              alt="Bé gái cầm sách học tiếng Hoa tương tác" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              Touch Any Picture,{" "}
              <span className="text-gradient">Hear It In 3 Languages</span>
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Your child simply touches any picture in the book, and instantly hears the word in{" "}
              <strong className="text-foreground">Mandarin</strong>,{" "}
              <strong className="text-foreground">English</strong>, or{" "}
              <strong className="text-foreground">Cantonese</strong>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4 mb-6 lg:mb-8">
              <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm">
                <Wifi className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-semibold">No WiFi</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm">
                <Smartphone className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-semibold">No Apps</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm">
                <CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="font-semibold">No Subs</span>
              </div>
            </div>

            <p className="text-muted-foreground italic text-sm lg:text-base">
              Just pure, interactive learning that kids love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
