import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center"
          >
            <div
              style={{
                background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(14,165,233,0.04))",
                border: "1px solid rgba(14,165,233,0.25)",
                borderRadius: "10px",
                padding: "3px 10px 3px 6px",
                display: "inline-flex",
                alignItems: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              <img
                src="/assets/img/logo-ry.png"
                alt="Ry"
                style={{
                  height: "38px",
                  width: "auto",
                  filter: "brightness(1.8) contrast(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                }}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all relative group",
                  activeSection === link.href.substring(1)
                    ? "text-white"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    activeSection === link.href.substring(1)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:bg-secondary hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
