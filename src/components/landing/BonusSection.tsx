import lifeskillsImage from "@/assets/images/lifeskills.jpeg";
import mannersImage from "@/assets/images/manners.jpeg";

const BonusSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 lg:mb-4">
            Bonus: Life Skills & More
          </h2>
          <p className="text-muted-foreground text-sm lg:text-lg max-w-2xl mx-auto">
            Beyond language learning — teach essential life skills, manners, and time concepts.
          </p>
        </div>

        {/* Two Images - Full width on mobile */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 -mx-4 lg:mx-auto lg:max-w-5xl">
          <div className="animate-fade-in">
            <img 
              src={lifeskillsImage} 
              alt="Trang học kỹ năng sống - rửa tay, an toàn" 
              className="w-full h-auto lg:rounded-3xl"
            />
            <div className="px-4 lg:px-0 mt-3 lg:mt-4">
              <h3 className="text-center font-display text-lg lg:text-xl font-bold text-foreground mb-1 lg:mb-2">
                Life Skills
              </h3>
              <p className="text-center text-muted-foreground text-sm lg:text-base">
                Hand washing, safety awareness, daily routines — all in 3 languages.
              </p>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={mannersImage} 
              alt="Trang học về phép lịch sự và xem giờ" 
              className="w-full h-auto lg:rounded-3xl"
            />
            <div className="px-4 lg:px-0 mt-3 lg:mt-4">
              <h3 className="text-center font-display text-lg lg:text-xl font-bold text-foreground mb-1 lg:mb-2">
                Manners & Time
              </h3>
              <p className="text-center text-muted-foreground text-sm lg:text-base">
                Learn to tell time and proper etiquette — essential skills for growing up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
