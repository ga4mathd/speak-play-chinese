import { HelpCircle } from "lucide-react";

const QuizSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Quiz Panda Image]<br />
                  Ảnh #6 - 3171e523
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Built-In Quiz Mode</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              "熊猫在哪里?"
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              <em>Where's the panda?</em>
            </p>

            <p className="text-muted-foreground mb-8">
              The book asks questions, and your child finds the answer by touching the correct picture. 
              Gamified learning that actually works — and keeps kids engaged for hours.
            </p>

            <div className="bg-success/10 text-success px-6 py-4 rounded-2xl inline-block">
              <span className="font-bold">✓ Learning through play = Better retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
