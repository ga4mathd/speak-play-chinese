import languagesImage from "@/assets/images/languages.jpeg";

const LanguagesSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-background">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0 order-2 lg:order-1">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              3 Languages, 1 Book
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Switch between languages with a single touch. Perfect for multi-generational families.
            </p>

            {/* Language Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4 mb-6 lg:mb-8">
              <div className="bg-accent text-accent-foreground px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-bold text-sm lg:text-lg">
                普通话 Mandarin
              </div>
              <div className="bg-primary text-primary-foreground px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-bold text-sm lg:text-lg">
                English
              </div>
              <div className="bg-secondary text-secondary-foreground px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-bold text-sm lg:text-lg">
                粤语 Cantonese
              </div>
            </div>

            <p className="text-muted-foreground text-sm lg:text-base">
              Mom speaks Mandarin. Dad speaks English. Grandma speaks Cantonese.{" "}
              <strong className="text-foreground">This book speaks them all.</strong>
            </p>
          </div>

          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in order-1 lg:order-2">
            <img 
              src={languagesImage} 
              alt="Trang ABC sách học 3 ngôn ngữ" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
