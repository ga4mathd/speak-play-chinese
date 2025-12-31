import { BookOpen, Music, Gamepad2, Piano, FileText, Sparkles } from "lucide-react";

const features = [
  { icon: BookOpen, label: "80 Topics" },
  { icon: FileText, label: "44+ Pages" },
  { icon: Sparkles, label: "ABC to Tang Poetry" },
  { icon: Music, label: "100+ Songs" },
  { icon: Gamepad2, label: "Quiz Mode" },
  { icon: Piano, label: "Piano Keyboard" },
];

const WhatsInsideSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Inside This Amazing Book?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything your child needs to start speaking Chinese — packed into one interactive book.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-card text-center animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <span className="font-semibold text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Topics Table Image */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
            <div className="aspect-[16/9] bg-secondary/30 rounded-2xl flex items-center justify-center">
              <span className="text-muted-foreground text-center p-8">
                [80 Topics Table Image]<br />
                Ảnh #8 - 6f842c37
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
