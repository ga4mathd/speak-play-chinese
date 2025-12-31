import { Music, Moon } from "lucide-react";

const SongsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="bg-card rounded-3xl shadow-card p-4 lg:p-8">
              <div className="aspect-[4/3] bg-secondary/30 rounded-2xl flex items-center justify-center">
                <span className="text-muted-foreground text-center p-8">
                  [Songs Collection Image]<br />
                  Ảnh #12 - fa8b1e2c
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Music className="w-5 h-5" />
              <span className="font-semibold">100+ Songs Included</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              热榜儿歌大合集
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Chinese nursery rhymes, English classics, and Cantonese folk songs — 
              all included. One-touch play makes it perfect for sing-along time or bedtime.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-xl shadow-soft">
                <span className="text-2xl">🎵</span>
                <span className="font-semibold text-foreground">Chinese Classics</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-xl shadow-soft">
                <span className="text-2xl">🎶</span>
                <span className="font-semibold text-foreground">English Favorites</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-xl shadow-soft">
                <Moon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Bedtime Lullabies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongsSection;
