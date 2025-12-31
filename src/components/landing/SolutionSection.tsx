import { Wifi, Smartphone, CreditCard } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              {/* Placeholder for solution image */}
              <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Girl Holding Book Image]<br />
                  Ảnh #11 - 789f0853
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Touch Any Picture,{" "}
              <span className="text-gradient">Hear It In 3 Languages</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Your child simply touches any picture in the book, and instantly hears the word in{" "}
              <strong className="text-foreground">Mandarin</strong>,{" "}
              <strong className="text-foreground">English</strong>, or{" "}
              <strong className="text-foreground">Cantonese</strong>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <Wifi className="w-5 h-5" />
                <span className="font-semibold">No WiFi Needed</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <Smartphone className="w-5 h-5" />
                <span className="font-semibold">No Apps</span>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5" />
                <span className="font-semibold">No Subscriptions</span>
              </div>
            </div>

            <p className="text-muted-foreground italic">
              Just pure, interactive learning that kids love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
