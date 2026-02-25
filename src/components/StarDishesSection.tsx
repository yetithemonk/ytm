import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, Sparkles, ChefHat } from "lucide-react";
import starDish1 from "@/assets/star-dish-1.jpg";
import starDish2 from "@/assets/star-dish-2.jpg";
import starDish3 from "@/assets/star-dish-3.jpg";
import starDish4 from "@/assets/star-dish-4.jpg";

const dishes = [
  {
    image: starDish1,
    name: "Classic Steamed Momos",
    desc: "Delicate hand-folded dumplings with aromatic fillings, steamed to perfection in traditional bamboo baskets.",
    tag: "Signature",
    icon: Star,
    color: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400",
  },
  {
    image: starDish2,
    name: "Golden Fried Momos",
    desc: "Crispy on the outside, succulent within — served with our signature fiery red chutney.",
    tag: "Crispy",
    icon: Sparkles,
    color: "from-yellow-500/20 to-amber-500/20",
    accent: "text-yellow-400",
  },
  {
    image: starDish3,
    name: "Tandoori Momos",
    desc: "Clay-oven roasted with a symphony of spices, charred to smoky perfection with a hint of heat.",
    tag: "Spicy",
    icon: Flame,
    color: "from-red-500/20 to-orange-500/20",
    accent: "text-red-400",
  },
  {
    image: starDish4,
    name: "Afghani Malai Momos",
    desc: "Luxuriously creamy, bathed in a velvety cashew and cream sauce with delicate herbs.",
    tag: "Creamy",
    icon: ChefHat,
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
];

const StarDishesSection = () => {
  return (
    <section id="star-dishes" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.03)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--crimson)/0.05)_0%,_transparent_50%)]" />

      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <ChefHat className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading tracking-wider uppercase text-primary">
                Chef's Picks
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Star <span className="text-primary">Dishes</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most beloved creations, each crafted with passion and perfected over generations
            </p>
          </div>
        </AnimatedSection>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {dishes.map((dish, i) => {
            const IconComponent = dish.icon;
            return (
              <AnimatedSection key={i} animation="scale-in" delay={i * 150}>
                <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dish.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm border-primary/20 text-foreground font-heading text-xs tracking-wider"
                      >
                        <IconComponent className={`w-3 h-3 mr-1 ${dish.accent}`} />
                        {dish.tag}
                      </Badge>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="relative p-6">
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {dish.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </CardContent>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/10 to-transparent" />
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <p className="font-body text-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Each dish tells a story of tradition, craftsmanship, and culinary excellence
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StarDishesSection;
