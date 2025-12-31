const LanguagesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              3 Languages, 1 Book
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Switch between languages with a single touch. Perfect for multi-generational families.
            </p>

            {/* Language Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-lg">
                普通话 Mandarin
              </div>
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-lg">
                English
              </div>
              <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-bold text-lg">
                粤语 Cantonese
              </div>
            </div>

            <p className="text-muted-foreground">
              Mom speaks Mandarin. Dad speaks English. Grandma speaks Cantonese.{" "}
              <strong className="text-foreground">This book speaks them all.</strong>
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [ABC Languages Page Image]<br />
                  Ảnh #3 - 76a42e67
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
