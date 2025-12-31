import { Volume2 } from "lucide-react";
import oceanImage from "@/assets/images/ocean.jpeg";
import animalsImage from "@/assets/images/animals.jpeg";

const LearnByPlayingSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
            Kids Learn By Playing
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg max-w-2xl mx-auto">
            Touch any picture and hear the word — plus real sounds that bring learning to life!
          </p>
        </div>

        {/* Example */}
        <div className="max-w-3xl mx-auto mb-6 lg:mb-12">
          <div className="bg-card rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card flex items-center justify-center gap-2 lg:gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-base lg:text-xl">
              <Volume2 className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="font-display font-bold">Dog →</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="bg-accent/10 text-accent px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-bold text-sm lg:text-base">"狗..."</span>
              <span className="bg-primary/10 text-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-bold text-sm lg:text-base">"Dog..."</span>
              <span className="bg-secondary px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg font-bold text-secondary-foreground text-sm lg:text-base">汪汪! 🐕</span>
            </div>
          </div>
        </div>

        {/* Two Images - Full width on mobile */}
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 -mx-4 lg:mx-auto lg:max-w-5xl">
          <div className="animate-fade-in">
            <img 
              src={oceanImage} 
              alt="Trang học về thế giới đại dương" 
              className="w-full h-auto lg:rounded-3xl"
            />
            <p className="text-center font-semibold text-foreground mt-2 lg:mt-4 px-4 lg:px-0">海洋世界 - Ocean World</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={animalsImage} 
              alt="Trang học về động vật và âm thanh thật" 
              className="w-full h-auto lg:rounded-3xl"
            />
            <p className="text-center font-semibold text-foreground mt-2 lg:mt-4 px-4 lg:px-0">Animals & Real Sounds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnByPlayingSection;
