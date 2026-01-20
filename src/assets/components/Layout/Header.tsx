import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Phone, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/assets/components/Shared/CartDrawer";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();

  // Scroll effect for premium feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Benefits", href: "#benefits" },
    { name: "Recipes", href: "#recipe" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-lg border-b border-gold/10"
          : "py-4 bg-[#F5F1E8]/95 backdrop-blur-md"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">

            {/* --- LOGO SECTION --- */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Al Ghiza"
                  className={`transition-all duration-500 rounded-full border border-gold/20 ${isScrolled ? "h-12 w-12" : "h-16 w-16"
                    } object-cover group-hover:rotate-6`}
                />
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#8B6914] to-transparent rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight text-[#3d2b1f]">
                  AL <span className="text-[#8B6914]">GHIZA</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B6914]/70 font-medium">
                  Pure Talbina
                </span>
              </div>
            </a>

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden lg:flex items-center bg-white/40 px-6 py-2 rounded-full border border-white/50 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1 text-sm font-semibold text-[#4A3728] hover:text-[#8B6914] transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#8B6914] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </nav>

            {/* --- ACTION BUTTONS --- */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="group relative p-3 rounded-full hover:bg-[#8B6914]/5 transition-colors"
              >
                <ShoppingBag className="w-6 h-6 text-[#4A3728] group-hover:text-[#8B6914] transition-colors" />
                {getTotalItems() > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-[#8B6914] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white animate-bounce">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* WhatsApp Button - Premium Look */}
              <a
                href="https://wa.me/923170270575"
                className="hidden md:flex items-center gap-2 bg-[#1B4332] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl hover:bg-[#2d5a46] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>ORDER NOW</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-[#4A3728]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* --- MOBILE NAVIGATION --- */}
          <div className={`
            lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-2xl border-b border-[#8B6914]/10 transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          `}>
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-lg font-medium text-[#4A3728] border-b border-gray-100 pb-2 hover:text-[#8B6914]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <a
                href="https://wa.me/923001234567"
                className="flex items-center justify-center gap-3 bg-[#8B6914] text-white py-4 rounded-xl font-bold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacing for fixed header */}
      <div className={isScrolled ? "h-16" : "h-24"} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;