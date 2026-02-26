import AnimatedSection from "./AnimatedSection";
import spot1 from "@/assets/spot1.jpeg";
import spot2 from "@/assets/spot2.jpeg";
import spot3 from "@/assets/spot3.jpeg";
import spot4 from "@/assets/spot4.jpeg";
import spot5 from "@/assets/spot5.jpeg";
import spot6 from "@/assets/team2.png";
import { Sparkles } from "lucide-react";

const galleryImages = [
  {
    image: spot1,
    title: "Visit by Ex-MLA of Odisha",
    subtitle: "Mr. Sura Routray sir",
    year: "2024",
  },
  {
    image: spot6,
    title: "The Magicians",
    subtitle: "Yeti The Monk Family",
    year: "Team 2025-26",
  },
  {
    image: spot4,
    title: "The man & the myth.",
    subtitle: "The OG Basudev Vlogs",
    year: "Thank you",
    thanks: "@Basudev Vlogs",
    youtubeUrl: "https://www.instagram.com/reel/DLjoLk0RTBq/?igsh=ZTV4b3FpMzVhZ2g1",
  },
  {
    image: spot5,
    title: "Creativity & serenity",
    subtitle: "The Legend Pepperpots",
    year: "Thank you",
    thanks: "@Pepperpots",
    youtubeUrl: "https://www.instagram.com/reel/DCa9qSYPz50/?igsh=bnd0aDFoam9jNzBn",
  },
  {
    image: spot3,
    title: "Empty plates",
    subtitle: "when you finish every dish!",
    year: "2024",
  },
  {
    image: spot6,
    title: "Celebrating a year full of hustle",
    subtitle: "& memories with the team",
    year: "2024",
  },
];

const InTheSpotlightSection = () => {
  return (
    <section id="in-the-spotlight" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.05)_0%,_transparent_70%)]" />
      
      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading tracking-wider uppercase text-primary">
                Celebrating Moments
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              In The <span className="text-primary">Spotlight</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Celebrating moments with dignitaries, celebrities, and food enthusiasts
            </p>
          </div>
        </AnimatedSection>

        {/* Gallery Grid - 3x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-24">
          {galleryImages.map((item, i) => (
            <AnimatedSection key={i} animation="scale-in" delay={i * 100}>
              <div className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70 group-hover:backdrop-blur-md">
                  <p className="font-heading text-xs tracking-wider uppercase text-primary mb-1">{item.subtitle}</p>
                  <h3 className="font-display text-lg text-white">{item.title}</h3>
                  <p className="font-body text-xs text-white/70">{item.year}</p>
                  {item.thanks && (
                    item.youtubeUrl ? (
                      <a 
                        href={item.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-body text-sm text-primary mt-1 hover:underline cursor-pointer"
                      >
                        {item.thanks}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-primary mt-1">{item.thanks}</p>
                    )
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheSpotlightSection;
