import { BookOpen, Music, Gamepad2, Piano, FileText, Sparkles } from "lucide-react";
import topicsImage from "@/assets/images/topics.jpeg";

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
    <section className="py-8 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
            What's Inside This Amazing Book?
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg max-w-2xl mx-auto">
            Everything your child needs to start speaking Chinese — packed into one interactive book.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 mb-8 lg:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-3 lg:p-6 rounded-xl lg:rounded-2xl shadow-card text-center animate-fade-in hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <feature.icon className="w-6 h-6 lg:w-10 lg:h-10 text-primary mx-auto mb-2 lg:mb-3" />
              <span className="font-semibold text-foreground text-xs lg:text-base">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Topics Table Image - Full width on mobile */}
        <div className="-mx-4 lg:mx-auto lg:max-w-4xl">
          <img 
            src={topicsImage} 
            alt="Bảng 80 chủ đề học tiếng Hoa trong sách" 
            className="w-full h-auto lg:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
