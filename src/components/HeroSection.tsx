import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 gradient-hero opacity-60" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-[2px] bg-primary mx-auto mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Authentic Tibetan Cuisine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] text-foreground mb-4 text-shadow-warm"
        >
          Yeti The Monk™
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-[1px] bg-primary/50 mx-auto mb-6 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-body text-lg md:text-xl italic text-white mb-2 max-w-lg mx-auto drop-shadow-lg"
        >
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-body text-lg md:text-xl font-semibold text-primary mb-6 max-w-lg mx-auto drop-shadow-lg"
        >
          Bringing you the true taste of the Himalayas, now in the heart of ଓଡ଼ିଶା.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-heading text-xs tracking-[0.2em] uppercase text-foreground mb-6"
        >
          We Serve Pan India
        </motion.p>

        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
          >
            Explore Menu
          </a>
          <a
            href="#franchise"
            className="font-heading text-xs tracking-[0.2em] uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
          >
            Franchise
          </a>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="w-16 h-[2px] bg-primary mx-auto mt-10 origin-center"
        />
      </div>

      {/* Cloud divider at bottom */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-10 px-8"
      >
        <svg viewBox="0 0 400 40" className="w-full max-w-md h-10 mx-auto" fill="none">
          <path
            d="M0 20 Q20 8 40 20 Q60 8 80 20 Q100 8 120 20 Q140 8 160 20 Q180 8 200 20 Q220 8 240 20 Q260 8 280 20 Q300 8 320 20 Q340 8 360 20 Q380 8 400 20"
            stroke="hsl(36 72% 52%)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M40 20 Q60 32 80 20 Q100 32 120 20 Q140 32 160 20 Q180 32 200 20 Q220 32 240 20 Q260 32 280 20 Q300 32 320 20 Q340 32 360 20"
            stroke="hsl(36 72% 52%)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.35"
          />
          <circle cx="200" cy="20" r="4" fill="hsl(36 72% 52%)" opacity="0.5" />
          <circle cx="200" cy="20" r="7" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
