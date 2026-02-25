import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import chefImg from "@/assets/chef.png";
import swiggy from "@/assets/swig.png";
import zomato from "@/assets/zom.png";

const testimonials = [
  {
    name: "Sipra Pradhan",
    text: "The process of making the dish is very hygenic and the price is more affected by customers and students, the service is good and you will love it. Please do visit!",
    rating: 5,
  },
  {
    name: "Sambit Behera",
    text: "Must try the thukpa, pahadi soup,mutton jhol momo and don't forget to have a bite of the best taste of cheesecake it's more than delicious and am delightful to have all the dishes near my house ,I enjoy it often with a healthy serving by Omm.",
    rating: 5,
  },
  {
    name: "Sanjeet Pattnaik",
    text: "If you're looking for a momo experience like no other, this is the place to be. The menu offers a delightful fusion of traditional and innovative flavors. From the classic steamed to the crispy fried, each momo is a burst of flavor. The unique sauces complement the momos perfectly. A definite must-visit for food enthusiasts!",
    rating: 5,
  },
  {
    name: "Sunil Das",
    text: "Though I rarely go for momos, but coming to Yeti The Monk and when had their delicious momos with huge variety, made me visit them quiet frequently and the service also remarkable.. One of the best in momos category.. Do visit.",
    rating: 5,
  },
  {
    name: "Sourav Mallick",
    text: "TWe went to Yeti- The Monk and it's easily the best momo spot in the entire city. The Mushroom Maska Momo is unbelievable, soft, flavorful, and melts in your mouth. The Chicken Jhol Momo and Chicken Wonton Thukpa were also amazing. All momos are freshly made, and for fitness lovers, they even have healthier atta momos. The place is very cozy and perfect for hanging out with friends. Friendly staff, great atmosphere, a must-visit in Bhubaneswar.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-4">
              What People Say
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              Testimonials
            </h2>
            <div className="gold-line" />
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Chef Image */}
          <AnimatedSection
            animation="slide-in-left"
            className="lg:w-2/5 flex-shrink-0"
          >
            <div className="relative">
              <img
                src={chefImg}
                alt="Our Head Chef"
                className="w-full max-w-sm mx-auto rounded-sm shadow-2xl"
              />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-sm translate-x-4 translate-y-4 -z-10" />
            </div>
          </AnimatedSection>

          {/* Carousel */}
          <AnimatedSection animation="slide-in-right" className="lg:w-3/5">
            <div className="relative flex flex-col gap-6">
              {/* Zomato & Swiggy Rating Card */}
              <div className="border border-white/10 p-6 bg-white/5 backdrop-blur-md rounded-2xl">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                  {/* Zomato */}
                  <div className="flex items-center gap-3">
                    {/* Zomato Icon - Replace src with your own icon */}
                    <img
                      src={zomato}
                      alt="Zomato"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Zomato
                      </span>
                      <p className="font-body italic text-foreground">
                        <span className="font-semibold text-primary">4.8</span>
                        <span className="text-muted-foreground ml-1">
                          (6.5k reviews)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-border" />

                  {/* Swiggy */}
                  <div className="flex items-center gap-3">
                    {/* Swiggy Icon - Replace src with your own icon */}
                    <img
                      src={swiggy}
                      alt="Swiggy"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground">
                        Swiggy
                      </span>
                      <p className="font-body italic text-foreground">
                        <span className="font-semibold text-primary">4.9</span>
                        <span className="text-muted-foreground ml-1">
                          (4.8k reviews)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Carousel */}
              <div className="border border-border p-8 md:p-12 bg-card min-h-[280px] flex flex-col justify-center rounded-2xl">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-primary text-primary"
                      />
                    ),
                  )}
                </div>

                <p className="font-testimonial text-lg md:text-xl italic text-foreground leading-relaxed mb-8">
                  "{testimonials[current].text}"
                </p>

                <p className="font-heading text-sm tracking-[0.2em] uppercase text-primary">
                  — {testimonials[current].name}
                </p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
