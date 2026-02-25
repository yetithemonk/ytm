const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.15em] text-foreground mb-4">Yeti the monk™</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Authentic Tibetan cuisine crafted with love, tradition, and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Vision", "Menu", "Star Dishes", "Testimonials", "Team", "Contact Us", "Franchise"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-heading text-xs tracking-[0.2em] uppercase text-primary mb-4">Visit Us</h4>
            <div className="space-y-2 font-body text-sm text-muted-foreground">
              <p>Head Office : 
              Plot No. -1828/2012, NEAR INDUSIND BANK, BANEIKALA
              MARKET, PO/PS-JODA, DIST-KEONJHAR, ODISHA-758034</p>
              <p>City Office : 
              Plot no: 386, Nuasahi, Nayapalli, Bhubaneswar, Odisha - 751012</p>
              <p className="mt-4">+91-9556632888</p>
              <p>yetithemonk.co.in</p>
            </div>
          </div>
        </div>

        <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />

        <div className="text-center">
          <p className="font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground">
            © 2024 Yeti the monk. All rights reserved. Crafted with ❤️ and tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
