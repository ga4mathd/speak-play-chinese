import { DollarSign, MessageCircle, Users } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Chinese School Costs $200+/month",
    description: "And most kids still can't hold a conversation after years of classes.",
  },
  {
    icon: MessageCircle,
    title: "Your Child Understands But Won't Speak",
    description: "They hear Chinese at home but respond in English every time.",
  },
  {
    icon: Users,
    title: "Grandparents Can't Communicate",
    description: "Cantonese-speaking grandparents feel disconnected from grandchildren.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">The Challenge</p>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            Sound Familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background p-5 lg:p-6 rounded-xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-display text-sm lg:text-base font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-10">
          <p className="text-base lg:text-lg font-display font-semibold text-primary">
            There's a better way →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
