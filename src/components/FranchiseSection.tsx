import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import chefTenzin from "@/assets/chef-tenzin.jpg";
import patia from "@/assets/patiaowner.jpeg";
import unit8 from "@/assets/unit8.jpeg";
import keon from "@/assets/Keonjhar.jpeg";
import nila from "@/assets/nila.jpeg";
import soon from "@/assets/soon.png";
import { TrendingUp, Users, Store, Award, Shield, Clock, Quote, Instagram, Twitter, Youtube, Loader2 } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Best ROI",
    desc: "High profit margins with proven business model ensuring maximum returns on your investment within 18-24 months.",
  },
  {
    icon: Users,
    title: "Proven Brand",
    desc: "Established brand recognition with loyal customer base and strong market presence in the Himalayan cuisine segment.",
  },
  {
    icon: Store,
    title: "Complete Support",
    desc: "End-to-end assistance from location selection, store setup, staff training to marketing strategies.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Access to authentic recipes, premium ingredients, and standardized cooking processes ensuring consistency.",
  },
  {
    icon: Shield,
    title: "Secure Investment",
    desc: "Low risk business model with comprehensive operational guidelines and quality control measures.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    desc: "Streamlined onboarding process with quick store setup, typically operational within 60-90 days.",
  },
];

const stats = [
  { number: "18-24", label: "Months ROI" },
  { number: "50+", label: "Franchises" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

// Celebrity/Influencer testimonials
const testimonials = [
  {
    image: chefTenzin,
    name: "Tenzin Palmo",
    role: "Food Influencer",
    location: "Delhi",
    quote: "These momos are absolutely divine! The perfect balance of spice and authentic Himalayan flavors.",
    rating: 5,
    platform: "YouTube",
    platformIcon: Youtube,
    gradient: "from-red-500/20 to-pink-500/20",
    accent: "text-red-400",
  },
  {
    image: nila,
    name: "Lobsang Norbu",
    role: "Travel Blogger",
    location: "Bangalore",
    quote: "Best decision was stopping here! The Thukpa warmed my soul and the ambiance is incredible.",
    rating: 5,
    platform: "Twitter",
    platformIcon: Twitter,
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
  },
  {
    image: nila,
    name: "Sarah Chen",
    role: "Food Critic",
    location: "Chennai",
    quote: "Yeti The Monk has perfected the art of Tibetan street food. A must-visit for food lovers!",
    rating: 5,
    platform: "Instagram",
    platformIcon: Instagram,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
];

const franchiseOwners = [
  {
    name: "Unit - 8 ",
    owner: "Omm & Sneha",
    role: "Yeti The Monk",
    desc: "Our first and only directly operated franchise outlet, proudly serving in the heart of Bhubaneswar.",
    image: unit8,
    instagram: "https://www.instagram.com/ommdibya?igsh=Z29lYngxNWpicXN5",
  },
{
    name: "Patia",
    owner: "Mr. Sagar Sahoo",
    role: "Yeti The Monk",
    desc: "Partnered since 2025, strategically located amidst the vibrant student hub of Bhubaneswar.",
    image: patia,
    instagram: "https://www.instagram.com/chikusagarsahoo?igsh=MTZyejlpNHJxZ2NocQ==",
  },
{
    name: "Niladrivihar",
    owner: "Mr. Swaraj & Pooja",
    role: "Yeti The Monk on Wheels",
    desc: "Partnered since 2026, home to our first-of-its-kind Tibetan food truck — bringing your favorites faster, fresh, and on wheels.",
    image: nila,
    instagram: "https://www.instagram.com/swarajdas143?igsh=Mmwzbms4eG9yM253",
  },
  
  {
    name: "Keonjhar",
    owner: "Mr. Debraj Saha",
    role: "Yeti The Monk on Wheels",
    desc: "Our first franchise beyond the capital city and the first-ever Tibetan food truck in Keonjhar, serving authentic flavors at the heart of the town.",
    image: keon,
    instagram: "https://www.instagram.com/d__e__v__.21?igsh=MWJyYmZ2dzBzczB2bg==",
  },
  { name: "Rourkela", owner: "Coming soon", role: "Yeti The Monk", desc: "Coming soon", image: soon, instagram: undefined },
  
];

const FranchiseSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    try {
      // EmailJS configuration
      const serviceId = "service_ep5o7rj";
      const templateId = "template_0l16jes";
      const publicKey = "TAdOB0BpA96E0rlcJ";

      // Get form data
      const formData = new FormData(formRef.current);

      // Customer email (the person who filled the form)
      const customerEmail = formData.get("to_email") as string;

      // Send confirmation email to customer
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.get("from_name") as string || "",
          to_email: customerEmail || "",
          phone_number: formData.get("phone_number") as string || "",
          preferred_location: formData.get("preferred_location") as string || "",
          investment_range: formData.get("investment_range") as string || "",
          franchise_model: formData.get("franchise_model") as string || "",
          message: formData.get("message") as string || "",
        },
        publicKey
      );
      setSubmitted(true);
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      // Show more detailed error for debugging
      if (error && typeof error === 'object' && 'status' in error) {
        const emailError = error as { status: number; text: string };
        alert(`Error: ${emailError.status} - ${emailError.text}. Please check your EmailJS template variables.`);
      } else {
        setSubmitted(true); // Still show success for demo
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="franchise" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Header */}
        <div className="text-center mb-20">
          <motion.p 
            className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Partner With Us
          </motion.p>
          <motion.h2 
            className="font-display text-4xl md:text-6xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Why Choose <span className="text-primary">Yeti The Monk</span>
          </motion.h2>
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-primary/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/30" />
          </motion.div>
          <motion.p 
            className="font-body text-muted-foreground text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join a thriving business with unparalleled support, proven success, and exceptional growth potential
          </motion.p>
        </div>

        {/* Benefits Grid - Minimal 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {benefits.map((benefit, i) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <motion.div 
                  className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 bg-card/30 hover:bg-card/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats - Minimal Row */}
        <motion.div 
          className="mb-24 py-12 border-y border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl text-primary mb-1">{stat.number}</p>
                <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Simple */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-8">
            Join our growing family of franchise partners and bring the authentic taste of the Himalayas to your city
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('start-your-journey')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Section Break */}
        <div className="flex items-center justify-center mb-24">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Our Current Franchisees */}
        <AnimatedSection>
          <div id="our-franchisees" className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Our Franchisees</h2>
            <div className="gold-line mb-6" />
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Meet our successful franchise partners across different locations
            </p>
          </div>
        </AnimatedSection>

        {/* Franchisee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto mb-24">
          {franchiseOwners.map((owner, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
              <div className="group relative overflow-hidden bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full rounded-2xl">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      owner.name === 'Niladrivihar' ? 'object-top' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  

                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-lg text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {owner.name}
                  </h3>
                  <p className="font-heading text-[10px] tracking-wider uppercase text-primary mb-1">
                    {owner.role}
                  </p>
                  <p className="font-body text-sm text-foreground/80 mb-2">
                    {owner.owner}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {owner.desc}
                  </p>
                  {owner.instagram && (
                    <a
                      href={owner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span className="font-heading tracking-wider">Follow on Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full max-w-xl" />
        </div>

        {/* Franchise Form */}
        <AnimatedSection>
          <div id="start-your-journey" className="max-w-xl mx-auto scroll-mt-48">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Start Your Journey</h2>
              <div className="gold-line mb-6" />
              <p className="font-body text-muted-foreground">
                Take the first step towards owning a successful Himalayan cuisine franchise
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground text-sm">
                  We have received your inquiry. Our team will contact you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-heading text-xs tracking-wider uppercase text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-heading text-xs tracking-wider uppercase text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="to_email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="font-heading text-xs tracking-wider uppercase text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone_number"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="location" className="font-heading text-xs tracking-wider uppercase text-foreground">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="preferred_location"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                      placeholder="City Name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="investment" className="font-heading text-xs tracking-wider uppercase text-foreground">
                    Investment Range
                  </label>
                  <select
                    id="investment"
                    name="investment_range"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  >
                    <option value="">Select Investment Range</option>
                    <option value="5-10">Below ₹5 Lakhs</option>
                    <option value="10-20">₹5 - 7 Lakhs</option>
                    <option value="20-30">₹10+ Lakhs</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="franchiseModel" className="font-heading text-xs tracking-wider uppercase text-foreground">
                    Which franchise model are u interested into
                  </label>
                  <select
                    id="franchiseModel"
                    name="franchise_model"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  >
                    <option value="">Select Franchise Model</option>
                    <option value="qsr">QSR</option>
                    <option value="food-on-wheels">Food on wheels</option>
                    <option value="yeti-express-cafe">Yeti Express Cafe</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-heading text-xs tracking-wider uppercase text-foreground">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg bg-card/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your query..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FranchiseSection;
