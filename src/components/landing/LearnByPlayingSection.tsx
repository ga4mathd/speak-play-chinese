import { Volume2 } from "lucide-react";

const LearnByPlayingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kids Learn By Playing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Touch any picture and hear the word — plus real sounds that bring learning to life!
          </p>
        </div>

        {/* Example */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-6 shadow-card flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xl">
              <Volume2 className="w-6 h-6 text-primary" />
              <span className="font-display font-bold">Dog →</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold">"狗..."</span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold">"Dog..."</span>
              <span className="bg-secondary px-4 py-2 rounded-lg font-bold text-secondary-foreground">汪汪汪! 🐕</span>
            </div>
          </div>
        </div>

        {/* Two Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card p-4 lg:p-6 animate-fade-in">
            <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-muted-foreground text-center p-8">
                [Ocean World Page Image]<br />
                Ảnh #5 - b609f818
              </span>
            </div>
            <p className="text-center font-semibold text-foreground">海洋世界 - Ocean World</p>
          </div>
          <div className="bg-card rounded-3xl shadow-card p-4 lg:p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-muted-foreground text-center p-8">
                [Animals & Sounds Page Image]<br />
                Ảnh #7 - be916961
              </span>
            </div>
            <p className="text-center font-semibold text-foreground">Animals & Real Sounds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnByPlayingSection;
