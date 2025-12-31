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
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg">
            These are the struggles every bilingual family faces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <problem.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-display font-bold text-primary">
            There's a better way. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
