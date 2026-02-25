import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  variant?: "default" | "cloud" | "knot";
}

const OrnamentalDivider = ({ variant = "default" }: OrnamentalDividerProps) => {
  const svgVariants = {
    cloud: (
      // Chinese cloud motif
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
        {/* Center ornament */}
        <circle cx="200" cy="20" r="4" fill="hsl(36 72% 52%)" opacity="0.5" />
        <circle cx="200" cy="20" r="7" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    knot: (
      // Chinese endless knot inspired
      <svg viewBox="0 0 400 50" className="w-full max-w-sm h-12 mx-auto" fill="none">
        {/* Left decorative line */}
        <line x1="0" y1="25" x2="130" y2="25" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.3" />
        {/* Center knot pattern */}
        <g transform="translate(200, 25)" opacity="0.55">
          <rect x="-18" y="-18" width="36" height="36" rx="2" stroke="hsl(36 72% 52%)" strokeWidth="1.5" fill="none" transform="rotate(45)" />
          <rect x="-10" y="-10" width="20" height="20" rx="1" stroke="hsl(36 72% 52%)" strokeWidth="1" fill="none" transform="rotate(45)" />
          <circle r="3" fill="hsl(36 72% 52%)" opacity="0.7" />
        </g>
        {/* Right decorative line */}
        <line x1="270" y1="25" x2="400" y2="25" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    default: (
      // Simple elegant Chinese-style divider
      <svg viewBox="0 0 400 30" className="w-full max-w-xs h-8 mx-auto" fill="none">
        <line x1="0" y1="15" x2="160" y2="15" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.25" />
        <g transform="translate(200, 15)" opacity="0.5">
          <path d="M-12 0 L0 -10 L12 0 L0 10 Z" stroke="hsl(36 72% 52%)" strokeWidth="1.2" fill="none" />
          <circle r="2.5" fill="hsl(36 72% 52%)" />
        </g>
        <line x1="240" y1="15" x2="400" y2="15" stroke="hsl(36 72% 52%)" strokeWidth="1" opacity="0.25" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-4 px-8"
    >
      {svgVariants[variant]}
    </motion.div>
  );
};

export default OrnamentalDivider;
