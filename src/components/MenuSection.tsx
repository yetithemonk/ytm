import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Flame, Droplets, ChefHat, UtensilsCrossed, Sparkles, Leaf, Beef, Fish, Wheat, Star, Soup, Salad, Sandwich, CircleDot, ChevronLeft, ChevronRight } from "lucide-react";
import mayoImg from "../assets/mayo.png";

type MenuCategory = "steamed" | "fried" | "tandoori" | "platters" | "myom" | "soups" | "thukpa" | "crispers" | "rolls" | "wok-on-rice" | "noodles" | "dessert";
type SpiceLevel = "mild" | "medium" | "hot" | "extra-hot";

const categories: { key: MenuCategory; label: string; icon: React.ElementType }[] = [
  { key: "steamed", label: "Steamed", icon: Droplets },
  { key: "fried", label: "Fried", icon: Flame },
  { key: "tandoori", label: "Tandoori", icon: ChefHat },
  { key: "platters", label: "Platters", icon: UtensilsCrossed },
  { key: "myom", label: "MYOM", icon: Sparkles },
  { key: "soups", label: "Soups", icon: Soup },
  { key: "thukpa", label: "Thukpa", icon: Salad },
  { key: "crispers", label: "Crispers", icon: CircleDot },
  { key: "rolls", label: "Rolls", icon: Sandwich },
  { key: "wok-on-rice", label: "Wok on Rice", icon: Wheat },
  { key: "noodles", label: "Noodles", icon: UtensilsCrossed },
  { key: "dessert", label: "Dessert", icon: Star },
];

const headers = ["Type", "Veg", "Paneer", "Mushroom", "Chicken", "Mutton", "Prawn"];

const spiceEmojis: Record<SpiceLevel, string> = {
  mild: "🌿",
  medium: "🌶️",
  hot: "🔥",
  "extra-hot": "💥",
};

const spiceColors: Record<SpiceLevel, string> = {
  mild: "text-emerald-400 bg-emerald-400/10",
  medium: "text-yellow-400 bg-yellow-400/10",
  hot: "text-orange-400 bg-orange-400/10",
  "extra-hot": "text-red-400 bg-red-400/10",
};

const menuData: Record<MenuCategory, { headers: string[]; rows: (string | SpiceLevel)[][] } | { special: true; content: React.ReactNode }> = {
  steamed: {
    headers,
    rows: [
      ["Steam", "₹70", "₹80", "₹80", "₹80", "₹130", "₹130", "mild"],
      ["Jhol", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "medium"],
      ["Soupy", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "mild"],
      ["Maska", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "mild"],
      ["Thecha", "₹140", "₹150", "₹150", "₹150", "₹200", "₹200", "extra-hot"],
    ],
  },
  fried: {
    headers: [...headers, "Spice"],
    rows: [
      ["Fried", "₹80", "₹90", "₹90", "₹90", "₹140", "₹140", "mild"],
      ["Kurkure", "₹90", "₹100", "₹100", "₹100", "₹150", "₹150", "medium"],
      ["Pan Fried", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "medium"],
      ["Butter Garlic", "₹140", "₹150", "₹150", "₹150", "₹200", "₹200", "mild"],
      ["Sadekho", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "hot"],
      ["Afghani Malai", "₹140", "₹150", "₹150", "₹150", "₹200", "₹200", "mild"],
      ["Cheese Pull", "₹150", "₹160", "₹160", "₹160", "₹200", "₹200", "mild"],
    ],
  },
  tandoori: {
    headers: [...headers, "Spice"],
    rows: [
      ["Hot Tandoori", "₹110", "₹120", "₹120", "₹120", "₹160", "₹160", "hot"],
      ["Aslam Creamy", "₹160", "₹170", "₹170", "₹170", "₹200", "₹200", "medium"],
      ["Gorkha", "₹160", "₹170", "₹170", "₹170", "₹200", "₹200", "extra-hot"],
      ["Cheese Burst", "₹170", "₹180", "₹180", "₹180", "₹220", "₹220", "medium"],
    ],
  },
  platters: {
    headers: ["Type", "Steamed", "Fried", "Tandoori"],
    rows: [
      ["Steamed Platters", "₹130", "₹160", "₹180"],
      ["Fried Platters", "₹150", "₹160", "₹180"],
      ["Tandoori Platters", "₹150", "₹200", "₹220"],
      ["", "", "", ""],
      ["Veg", "Steamed", "Fried", "Tandoori"],
      ["Veg Price", "₹130", "₹150", "₹150"],
      ["Non-Veg Price", "₹160", "₹170", "₹180"],
    ],
  },
  myom: {
    special: true,
    content: (
      <div className="text-center py-12 space-y-8">
        <h3 className="font-display text-3xl text-primary">Make Your Own Momo</h3>
        <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
          Choose 3 pieces from any two types of momos — create your perfect combination!
        </p>
        <div className="flex justify-center gap-4 sm:gap-12 flex-wrap">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="border-2 border-primary/40 p-4 sm:p-8 min-w-[140px] sm:min-w-[180px] bg-card/50 cursor-pointer"
          >
            <p className="font-display text-2xl sm:text-4xl text-primary mb-2">₹200</p>
            <p className="font-heading text-sm tracking-[0.15em] uppercase text-foreground">Monk Veg Mania</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="border-2 border-primary/40 p-4 sm:p-8 min-w-[140px] sm:min-w-[180px] bg-card/50 cursor-pointer"
          >
            <p className="font-display text-2xl sm:text-4xl text-primary mb-2">₹240</p>
            <p className="font-heading text-sm tracking-[0.15em] uppercase text-foreground">Monk Nonveg Mania</p>
          </motion.div>
        </div>
      </div>
    ),
  },
  soups: {
    headers: ["Item", "Price"],
    rows: [
      ["Veg Pahadi Soup", "₹50"],
      ["Chicken Pahadi Soup", "₹50"],
      ["Mutton Pahadi Soup", "₹100"],
    ],
  },
  thukpa: {
    headers: ["Item", "Price"],
    rows: [
      ["Veg Thukpa", "₹100"],
      ["Chicken Thukpa", "₹110"],
      ["Mutton Thukpa", "₹180"],
    ],
  },
  crispers: {
    headers: ["Item", "Price"],
    rows: [
      ["Veg Cigar Roll", "₹150"],
      ["Chicken Pakoda", "₹80"],
      ["Fish Finger", "₹150"],
    ],
  },
  rolls: {
    headers: ["Item", "Price", "Spice"],
    rows: [
      ["Veggie Roll", "₹70", "mild"],
      ["Exotic Veggies Roll", "₹90", "mild"],
      ["Garlic (Paneer/Mushroom/Babycorn) Roll", "₹120", "mild"],
      ["Dragon (Paneer/Mushroom/Babycorn) Roll", "₹100", "medium"],
      ["Veg Mix Chilly Roll", "₹120", "medium"],
      ["Loaded Mix-Veg Roll", "₹130", "mild"],
      ["Butter Garlic Mushroom Roll", "₹130", "mild"],
      ["Butter Garlic Veg-mix Roll", "₹140", "mild"],
      ["Gorkha Barbeque Veg-mix Roll", "₹140", "hot"],
      ["Double Egg Roll", "₹60", "mild"],
      ["Single Egg Chicken Roll", "₹70", "mild"],
      ["Double Egg Chicken Roll", "₹80", "mild"],
      ["Chilly Chicken Roll", "₹110", "hot"],
      ["Garlic Chicken Roll", "₹120", "mild"],
      ["Dragon Chicken Roll", "₹120", "hot"],
      ["Loaded Chicken Roll", "₹120", "mild"],
      ["Gorkha Barbeque Chicken Roll", "₹150", "hot"],
      ["Butter Garlic Chicken Roll", "₹150", "mild"],
      ["Mutton Keema Roll", "₹150", "medium"],
    ],
  },
  "wok-on-rice": {
    headers: ["Item", "Price", "Spice"],
    rows: [
      ["Veg Fried Rice", "₹70", "mild"],
      ["Exotic Veg Fried Rice", "₹100", "mild"],
      ["Paneer/Mushroom Fried Rice", "₹80", "mild"],
      ["Special Mix Veg Fried Rice", "₹100", "mild"],
      ["Schezwan Mix Veg Fried Rice", "₹120", "hot"],
      ["Burnt Garlic Mix-Veg Fried Rice", "₹120", "medium"],
      ["Dragon Mix-Veg Fried Rice", "₹150", "hot"],
      ["Double Egg Fried Rice", "₹70", "mild"],
      ["Egg Chicken Fried Rice", "₹80", "mild"],
      ["Schezwan Non-veg Fried Rice", "₹120", "hot"],
      ["Burnt Garlic Non-Veg Fried Rice", "₹120", "medium"],
      ["Loaded Chicken Fried Rice", "₹150", "mild"],
      ["Dragon Chicken Fried Rice", "₹150", "hot"],
      ["Exotic Non Veg Fried Rice", "₹150", "mild"],
    ],
  },
  noodles: {
    headers: ["Item", "Price", "Spice"],
    rows: [
      ["Veg Noodles", "₹70", "mild"],
      ["Exotic Veg Noodles", "₹100", "mild"],
      ["Mix Veg Noodles", "₹80", "mild"],
      ["Loaded Mix-Veg Noodles", "₹120", "mild"],
      ["Chilly Garlic Veg Noodles", "₹120", "hot"],
      ["Schezwan Veg Noodles", "₹120", "hot"],
      ["Mix Veg Efu Noodles", "₹150", "mild"],
      ["Special Dragon Mix-Veg Noodles", "₹150", "hot"],
      ["Double Egg Noodles", "₹60", "mild"],
      ["Egg Chicken Noodles", "₹70", "mild"],
      ["Exotic Nonveg Noodles", "₹150", "mild"],
      ["Chilly Garlic Non-Veg Noodles", "₹120", "hot"],
      ["Schezwan Non-Veg Noodles", "₹120", "hot"],
      ["Non-Veg Efu Noodles", "₹120", "mild"],
      ["Loaded Non-Veg Noodles", "₹130", "mild"],
      ["Special Dragon Chicken Noodles", "₹150", "hot"],
      ["Hot Gorkha Chicken Noodles", "₹180", "extra-hot"],
      ["Mutton Keema Noodles", "₹180", "medium"],
    ],
  },
  dessert: {
    headers: ["Item", "Price"],
    rows: [
      ["Baked Blueberry Cheesecake", "₹180"],
      ["Vanilla Almond Tresleches", "₹150"],
      ["Brownie Mud Tub", "₹150"],
      ["Arabian Pulpy Grape Juice", "₹70"],
      ["Packaged Mineral Water", "₹20"],
    ],
  },
};

const ITEMS_PER_PAGE = 10;

const MenuSection = () => {
  const [active, setActive] = useState<MenuCategory>("steamed");
  const [currentPage, setCurrentPage] = useState(1);
  const currentMenu = menuData[active];

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [active]);

  // Get paginated rows for the current menu
  const getPaginatedRows = () => {
    if ("special" in currentMenu) return { rows: [], totalPages: 0 };
    const totalPages = Math.ceil(currentMenu.rows.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      rows: currentMenu.rows.slice(startIndex, endIndex),
      totalPages,
    };
  };

  const { rows: paginatedRows, totalPages } = getPaginatedRows();

  return (
    <section id="menu" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.05)_0%,_transparent_50%)]" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <UtensilsCrossed className="w-4 h-4 text-primary" />
              <span className="text-sm font-heading tracking-wider uppercase text-primary">
                Our Menu
              </span>
            </motion.div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              The <span className="text-primary">Menu</span>
            </h2>

            {/* Decorative Divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
            </motion.div>

            {/* Spice Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              {(["mild", "medium", "hot", "extra-hot"] as SpiceLevel[]).map((level) => (
                <motion.div
                  key={level}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 text-sm font-body px-3 py-2 rounded-lg bg-card/80 shadow-sm"
                >
                  <span className={`px-2 py-1 rounded-full ${spiceColors[level]} text-base`}>
                    {spiceEmojis[level]}
                  </span>
                  <span className="text-foreground font-medium capitalize">{level}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* No Mayo Policy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-md mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 shadow-lg shadow-amber-500/10"
              >
                {/* Animated background effect */}
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-500/5 bg-[length:200%_100%]"
                />
                
                {/* Content */}
                <div className="relative z-10 p-4 text-center">
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: [ -10, 10, -10 ] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block mb-1"
                  >
                    <img src={mayoImg} alt="Mayo" className="w-8 h-8 object-contain" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-lg text-amber-400 mb-1"
                  >
                    No Mayo Policy
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="font-body text-sm text-muted-foreground"
                  >
                    All our momos are served <span className="text-foreground font-semibold">with authentic chutneys</span>.
                  </motion.p>
                  
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex justify-center gap-2 mt-2"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-amber-500 text-xs"
                    >
                      ✦
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      className="text-yellow-500 text-xs"
                    >
                      ✦
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      className="text-amber-400 text-xs"
                    >
                      ✦
                    </motion.span>
                  </motion.div>
                </div>
                
                {/* Corner decorations */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-500/40 rounded-tl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1 right-1 w-2 h-2 border-t border-r border-amber-500/40 rounded-tr"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-amber-500/40 rounded-bl"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-500/40 rounded-br"
                />
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={200}>
          <div className="flex justify-center gap-3 mb-12 flex-wrap px-2">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-1 sm:gap-2 font-heading text-xs tracking-[0.15em] uppercase px-3 sm:px-6 py-2 sm:py-3 border transition-all duration-300 ${
                    active === cat.key
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-border/50 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  {active === cat.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Menu Content */}
        <AnimatedSection delay={300}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              {"special" in currentMenu ? (
                currentMenu.content
              ) : (
                <motion.div 
                  className="overflow-x-auto rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm -mx-4 px-4 sm:mx-0 sm:px-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-gradient-to-r from-primary/5 via-muted/30 to-primary/5">
                        {currentMenu.headers.map((h, i) => (
                          <th
                            key={i}
                            className="font-heading text-xs tracking-[0.2em] uppercase text-primary px-6 py-5 text-center first:text-left"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedRows.map((row, ri) => {
                        if (row.every((c) => c === "")) {
                          return <tr key={ri} className="h-8" />;
                        }
                        const isSubheader = row[0] && !row[0].startsWith("₹") && row.slice(1).some(c => c && !c.startsWith("₹") && c !== "");
                        return (
                          <motion.tr
                            key={ri}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: ri * 0.05 }}
                            className={`border-b border-border/30 transition-all duration-300 hover:bg-muted/30 ${
                              isSubheader ? "bg-muted/40" : ""
                            }`}
                          >
                            {row.map((cell, ci) => {
                              const isSpiceCell = typeof cell === "string" && ["mild", "medium", "hot", "extra-hot"].includes(cell);
                              const spiceLevel = isSpiceCell ? cell as SpiceLevel : null;
                              
                              return (
                                <td
                                  key={ci}
                                  className={`px-2 sm:px-4 py-3 sm:py-4 text-center ${
                                    ci === 0
                                      ? `font-body text-sm sm:text-base text-left ${isSubheader ? "text-primary font-semibold" : "text-foreground"}`
                                      : "font-body text-sm sm:text-base text-foreground"
                                  }`}
                                >
                                  {spiceLevel ? (
                                    <motion.span 
                                      whileHover={{ scale: 1.3 }}
                                      className={`inline-block px-2 py-1 rounded-full ${spiceColors[spiceLevel]}`}
                                      title={spiceLevel}
                                    >
                                      {spiceEmojis[spiceLevel]}
                                    </motion.span>
                                  ) : (
                                    cell
                                  )}
                                </td>
                              );
                            })}
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </motion.div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center gap-4 mt-8"
                >
                  <motion.button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
                    className={`flex items-center gap-2 font-heading text-sm tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                      currentPage === 1
                        ? "border-border/30 text-muted-foreground cursor-not-allowed opacity-50"
                        : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </motion.button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <motion.button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 font-heading text-sm tracking-wider transition-all duration-300 ${
                          currentPage === page
                            ? "bg-primary text-primary-foreground border border-primary"
                            : "border border-border/50 text-muted-foreground hover:border-primary hover:text-primary"
                        }`}
                      >
                        {page}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
                    whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
                    className={`flex items-center gap-2 font-heading text-sm tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 ${
                      currentPage === totalPages
                        ? "border-border/30 text-muted-foreground cursor-not-allowed opacity-50"
                        : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;
