import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Products", id: "products" },
    { name: "Services", id: "services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <img src="/reyd-logo.jfif" alt="REYD Telecommunication Services Logo" className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-primary/30 transition-all duration-300 bg-white object-contain" />
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight ${isScrolled ? "text-slate-900" : "text-white"} transition-colors duration-300`}>
                REYD Telecommunication Services
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollTo("contact")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel border-t mt-2 p-4 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-left px-4 py-3 rounded-lg hover:bg-slate-100 text-slate-800 font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollTo("contact")}
              className="w-full bg-primary text-white mt-2"
            >
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
