import { HelpCircle } from "lucide-react";
import quizImage from "@/assets/images/quiz.jpeg";

const QuizSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-background">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={quizImage} 
              alt="Chế độ Quiz tìm Panda trong sách" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6">
              <HelpCircle className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-semibold text-sm lg:text-base">Built-In Quiz Mode</span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              "熊猫在哪里?"
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6">
              <em>Where's the panda?</em>
            </p>

            <p className="text-muted-foreground text-sm lg:text-base mb-6 lg:mb-8">
              The book asks questions, and your child finds the answer by touching the correct picture. 
              Gamified learning that actually works — and keeps kids engaged for hours.
            </p>

            <div className="bg-success/10 text-success px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl inline-block">
              <span className="font-bold text-sm lg:text-base">✓ Learning through play = Better retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
