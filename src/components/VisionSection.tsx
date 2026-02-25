import AnimatedSection from "./AnimatedSection";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 sm:py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <AnimatedSection>
          <p className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-4">Our Vision</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            From Odisha to Pan India
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="gold-line mb-10" />
        </AnimatedSection>

        {/* Vision Box */}
        <AnimatedSection delay={400}>
          <div className="relative border border-border rounded-3xl p-8 md:p-10 shadow-lg bg-background/50 mb-8">
            <span className="absolute -top-3 -left-3 text-4xl">🎯</span>
            <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
              Born in the busy streets of Bhubaneswar, our dream began with a simple belief — that even in the rush of city life, people deserve a taste of the mountains. We envisioned bringing authentic pahadi vibes and true Tibetan flavors to Odisha, without compromise, without shortcuts.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground">
              From a humble beginning to a growing movement, our vision is to take this Odisha-born Tibetan brand across Pan India — spreading warmth, authenticity, and opportunity in every city we enter. More than just food, we aim to build a community that celebrates culture, entrepreneurship, and self-reliance.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <p className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-4">Our Mission</p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="gold-line mb-10" />
        </AnimatedSection>

        {/* Mission Box */}
        <AnimatedSection delay={700}>
          <div className="relative border border-border rounded-3xl p-8 md:p-10 shadow-lg bg-background/50">
            <span className="absolute -top-3 -right-3 text-4xl">🎯</span>
            <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
              Our mission is rooted in authenticity. Every momo we serve carries tradition, every recipe reflects real Tibetan, Pan-Asian, and Chinese flavors — strictly without mayonnaise, because we believe true taste needs no shortcuts.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground mb-4">
              We are committed to hygiene, fast service, and consistency — ensuring that every customer experiences the same quality and warmth, every single time.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground">
              Beyond food, our mission is to create opportunities. Through our franchise-driven model, we strive to promote entrepreneurship and self-employment, empowering individuals to grow with us. What started as a street-born dream in Odisha is now a mission to build a nationwide brand powered by passion, purpose, and people.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { number: "80+", label: "Momo Varieties" },
              { number: "2+", label: "Years of Legacy" },
              { number: "100%", label: "Authentic Recipes" },
            ].map((stat, i) => (
              <div key={i} className="border border-border p-8 hover:border-primary/50 transition-colors duration-500 rounded-2xl">
                <p className="font-display text-4xl text-primary mb-2">{stat.number}</p>
                <p className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VisionSection;
