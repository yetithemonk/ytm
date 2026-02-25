import AnimatedSection from "./AnimatedSection";
import owner from "@/assets/owner.jpeg";
import coowner from "@/assets/coowner.jpeg";
import fin from "@/assets/finance.jpeg";
import ops from "@/assets/opshead.jpeg";
import marketing from "@/assets/marketing.jpeg";

const team = [
  {
    name: "Dibya Omm Mohanty",
    role: "Founder and MD",
    desc: "The driving force behind the brand, passionately building and scaling it across Pan India with vision & determination.",
    image: owner,
    instagram: "https://www.instagram.com/foodncate?igsh=MXVzd200eXd3OTkzdQ%3D%3D&utm_source=qr",
  },
  {
    name: "Subhasmita Nayak",
    role: "Co-Founder",
    desc: "The visionary leader shaping the brand's mission, turning ideas into meaningful impact and lasting growth.",
    image: coowner,
    instagram: "https://www.instagram.com/subhasmita_nayak96?igsh=dDF1bng1cWE2NjB3",
  },
  {
    name: "Ompurnam Mohanty",
    role: "Operations Head",
    desc: "The backbone of daily operations, ensuring seamless execution and delivering the experience that keeps you smiling.",
    image: ops,
    instagram: "https://www.instagram.com/omm._______?igsh=dG5ieG5qcXc0bmN0",
  },
    {
    name: "Debasmita Nayak",
    role: "Chief Finance",
    desc: "A CA Finalist with hands-on expertise, steering the brand toward financial strength and scalable growth.",
    image: fin,
    instagram: "https://www.instagram.com/debasmita_nayak_13?igsh=MTJqdTgyZWNoM3k4Yg==",
  },
  {
    name: "Ankita Das",
    role: "Chief Marketing",
    desc: "The creative heartbeat of the brand, transforming passion into powerful stories you see and connect with.",
    image: marketing,
    instagram: "https://www.instagram.com/ankita_das_03j?igsh=MXd2MTI0dXc5OG92NA==",
  },

];

const ManagementSection = () => {
  return (
    <section id="management" className="py-16 sm:py-24 md:py-32 bg-card relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#2a0a0a]/40 via-[#1a0505]/20 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-4">
              The People Behind
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              Our Team
            </h2>
            <div className="gold-line" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
              <div className="relative h-[340px] sm:h-[380px] md:h-[420px] perspective-1000 group">
                {/* Flip Card Container */}
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                  
                  {/* Front Side - Beautiful card design */}
                  <div className="absolute inset-0 backface-hidden rounded-[2rem] overflow-hidden
                    bg-gradient-to-b from-[#1a0808] via-[#2a0f0f] to-[#1a0505]
                    border border-[#c9a227]/15
                    shadow-[0_0_40px_-10px_rgba(201,162,39,0.08),inset_0_1px_0_rgba(255,255,255,0.03)]
                    transition-all duration-500
                    hover:shadow-[0_0_60px_-15px_rgba(201,162,39,0.2),inset_0_1px_0_rgba(255,255,255,0.05)]
                    hover:border-[#c9a227]/30
                  ">
                    {/* Ambient bottom glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-[#c9a227]/10 to-transparent blur-xl" />
                    
                    {/* Image container with vignette overlay */}
                    <div className="relative w-full h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay from bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505]/95 via-[#1a0505]/40 to-transparent" />
                      
                      {/* Radial vignette for edges */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#1a0505_cc_100%)]" />
                      
                      {/* Top decorative accent */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
                      
                      {/* Content at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        {/* Name in uppercase */}
                        <h3 className="font-display text-lg text-[#f5f0e8] mb-2 drop-shadow-lg">
                          {member.name.toUpperCase()}
                        </h3>
                        
                        {/* Gold divider line */}
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent mb-2" />

                        {/* Role badge */}
                        <div className="mt-2">
                          <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#c9a227]/80">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Corner decorations */}
                      <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#c9a227]/30 rounded-tr-lg" />
                    </div>
                  </div>

                  {/* Back Side - Text content with flip */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] overflow-hidden
                    bg-gradient-to-b from-[#1a0808] via-[#2a0f0f] to-[#1a0505]
                    border border-[#c9a227]/15
                    shadow-[0_0_40px_-10px_rgba(201,162,39,0.08)]
                  ">
                    {/* Blurred image background */}
                    <div className="absolute inset-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover blur-md scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505]/95 via-[#1a0505]/90 to-[#1a0505]" />
                    </div>

                    {/* Content overlay */}
                    <div className="relative h-full flex flex-col justify-center items-center p-6 text-center">
                      {/* Name */}
                      <h3 className="font-display text-lg text-[#f5f0e8] mb-3">
                        {member.name.toUpperCase()}
                      </h3>
                      
                      {/* Gold divider */}
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent mb-4" />
                      
                      {/* Role */}
                      <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-[#c9a227]/80 mb-4">
                        {member.role}
                      </p>
                      
                      {/* Description */}
                      <p className="font-body text-sm text-[#a89f94] leading-relaxed mb-6">
                        {member.desc}
                      </p>

                      {/* Social media buttons */}
                      <div className="flex gap-4">
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full border border-[#c9a227]/40 flex items-center justify-center text-[#c9a227]/70 hover:bg-[#c9a227] hover:text-[#1a0505] hover:border-[#c9a227] transition-all duration-300"
                          title="Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Hover hint below all cards */}
        <p className="text-center mt-8 font-body text-sm text-muted-foreground/70 italic">
          Hover over cards to learn more
        </p>
      </div>
    </section>
  );
};

export default ManagementSection;
