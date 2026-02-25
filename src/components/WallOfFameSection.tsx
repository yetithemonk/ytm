import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Crown, Star } from "lucide-react";
import w1 from "@/assets/w1.jpeg";
import w2 from "@/assets/w2.jpeg";
import w3 from "@/assets/w3.jpeg";
import w4 from "@/assets/w4.jpeg";
import w5 from "@/assets/w5.jpeg";
import w6 from "@/assets/w6.jpeg";
import w7 from "@/assets/w7.jpeg";
import w8 from "@/assets/w8.jpeg";
import w9 from "@/assets/w9.jpeg";
import w10 from "@/assets/w10.jpeg";
import w11 from "@/assets/w11.jpeg";
import w12 from "@/assets/w12.jpeg";
import w13 from "@/assets/w13.jpeg";
import w14 from "@/assets/w14.jpeg";
import w15 from "@/assets/w15.jpeg";
import basu from "@/assets/spot4.jpeg";
import cmg from "@/assets/cmg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WallOfFameSection = () => {
  const carouselApiRef = useRef<any>(null);
  const [carouselReady, setCarouselReady] = useState(false);

  // Auto-swipe for gallery carousel - starts after carousel is ready
  useEffect(() => {
    if (!carouselReady || !carouselApiRef.current) return;
    
    // Start auto-swipe after a short delay to ensure carousel is ready
    const startTimeout = setTimeout(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 100);

    const swipeInterval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 4000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(swipeInterval);
    };
  }, [carouselReady]);

  // Gallery images for auto-swiping carousel
  const galleryImages = [
    { id: 1, image: w1 },
    { id: 2, image: w2 },
    { id: 3, image: w3 },
    { id: 4, image: w4 },
    { id: 5, image: w5 },
    { id: 6, image: w6 },
    { id: 7, image: w7 },
    { id: 8, image: w8 },
    { id: 9, image: w9 },
    { id: 10, image: w10 },
    { id: 11, image: w11 },
    { id: 12, image: w12 },
    { id: 13, image: w13 },
    { id: 14, image: w14 },
    { id: 15, image: w15 },
  ];

  // Winner data
  const winnerData = {
    image: cmg,
    name: "To be announced soon",
    title: "To be announced soon",
    achievement: "To be announced soon",
    description: "To be announced soon",
  };

  return (
    <section id="wall-of-fame" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--crimson)/0.05)_0%,_transparent_50%)]" />

      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading tracking-wider uppercase text-primary">
                Our Fame
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              Wall of <span className="text-yellow-400">Fame</span>
            </h2>
            <p className="font-body text-white text-xl md:text-2xl font-medium mb-6">
              The momo-ents that made us here!
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50" />
            </div>
          </div>
        </AnimatedSection>

        {/* Winner Section */}
        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              {/* Winner Card */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-500/20 via-amber-500/10 to-orange-500/20 border-yellow-400/30 backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />
                
                {/* Crown Icon */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Winner Image */}
                    <div className="relative flex-shrink-0">
                      <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                        <img
                          src={winnerData.image}
                          alt={winnerData.name}
                          className="w-full h-full object-cover object-top scale-125"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
                        <Trophy className="w-6 h-6 text-black" />
                      </div>
                    </div>

                    {/* Winner Info */}
                    <div className="text-center md:text-left flex-1">
                      <div className="inline-block px-3 py-1 bg-yellow-400/20 rounded-full mb-3">
                        <span className="text-yellow-400 font-heading text-sm tracking-wider uppercase">
                          🏆 Winner
                        </span>
                      </div>
                      <h3 className="font-display text-3xl text-white mb-1">
                        {winnerData.name}
                      </h3>
                      <p className="font-heading text-sm tracking-wider uppercase text-yellow-400 mb-2">
                        {winnerData.title}
                      </p>
                      <p className="font-display text-xl text-amber-300 mb-4">
                        {winnerData.achievement}
                      </p>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {winnerData.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Auto-Swiping Gallery */}
        <AnimatedSection delay={400}>
          <div className="mb-16">
            <h3 className="font-display text-2xl md:text-3xl text-white text-center mb-8">
              Moments <span className="text-yellow-400">Gallery</span>
            </h3>
            
            <Carousel
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={(api) => {
                carouselApiRef.current = api;
                setCarouselReady(true);
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((item, index) => (
                  <CarouselItem key={item.id} className="pl-2 md:pl-4">
                    <div className="relative group">
                      <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-black/20">
                        <img
                          src={item.image}
                          alt={`Gallery ${item.id}`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="font-heading text-sm text-white tracking-wider uppercase">
                          Moment {item.id}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
              <CarouselNext className="-right-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WallOfFameSection;
