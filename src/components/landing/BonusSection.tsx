const BonusSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bonus: Life Skills & More
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond language learning — teach essential life skills, manners, and time concepts.
          </p>
        </div>

        {/* Two Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card p-4 lg:p-6 animate-fade-in">
            <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-muted-foreground text-center p-8">
                [Life Skills Page Image]<br />
                Ảnh #2 - bc2a6d5f
              </span>
            </div>
            <h3 className="text-center font-display text-xl font-bold text-foreground mb-2">
              Life Skills
            </h3>
            <p className="text-center text-muted-foreground">
              Hand washing, safety awareness, daily routines — all in 3 languages.
            </p>
          </div>
          <div className="bg-card rounded-3xl shadow-card p-4 lg:p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-muted-foreground text-center p-8">
                [Manners & Time Page Image]<br />
                Ảnh #4 - 22bc6cfa
              </span>
            </div>
            <h3 className="text-center font-display text-xl font-bold text-foreground mb-2">
              Manners & Time
            </h3>
            <p className="text-center text-muted-foreground">
              Learn to tell time and proper etiquette — essential skills for growing up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
