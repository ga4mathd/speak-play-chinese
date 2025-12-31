import { Music, Moon } from "lucide-react";
import songsImage from "@/assets/images/songs.webp";

const SongsSection = () => {
  return (
    <section className="py-8 lg:py-24 bg-muted">
      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-12">
          {/* Image - Full width on mobile */}
          <div className="w-full lg:flex-1 animate-fade-in">
            <img 
              src={songsImage} 
              alt="Bộ sưu tập 100+ bài hát thiếu nhi 热榜儿歌" 
              className="w-full h-auto lg:rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6">
              <Music className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-semibold text-sm lg:text-base">100+ Songs Included</span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 lg:mb-6">
              热榜儿歌大合集
            </h2>

            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Chinese nursery rhymes, English classics, and Cantonese folk songs — 
              all included. One-touch play makes it perfect for sing-along time or bedtime.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-4">
              <div className="flex items-center gap-2 bg-card px-3 py-2 lg:px-4 lg:py-3 rounded-xl shadow-soft">
                <span className="text-xl lg:text-2xl">🎵</span>
                <span className="font-semibold text-foreground text-sm lg:text-base">Chinese Classics</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-3 py-2 lg:px-4 lg:py-3 rounded-xl shadow-soft">
                <span className="text-xl lg:text-2xl">🎶</span>
                <span className="font-semibold text-foreground text-sm lg:text-base">English Favorites</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-3 py-2 lg:px-4 lg:py-3 rounded-xl shadow-soft">
                <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                <span className="font-semibold text-foreground text-sm lg:text-base">Lullabies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongsSection;
