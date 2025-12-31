import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michelle L.",
    location: "San Francisco, CA",
    text: "My 3-year-old asks for this every day! She's already saying words in Mandarin that I didn't teach her. The touch-and-hear feature is genius.",
    rating: 5,
  },
  {
    name: "Kevin W.",
    location: "Los Angeles, CA",
    text: "Finally my mom can communicate with the grandkids! She speaks Cantonese and this book has been a bridge between generations. Worth every penny.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    location: "New York, NY",
    text: "We tried Chinese school, apps, everything. This is the only thing that got my son excited about learning Chinese. He thinks it's a game!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-muted-foreground">4.9/5 from 2,000+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
