import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion"; // Animation library
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Decorative Glow - Animating background pulses */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wheat/40 to-transparent" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-72 h-72 bg-wheat/10 blur-3xl rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-honey/10 blur-3xl rounded-full" 
      />

      <div className="relative container-custom section-padding py-20 pb-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          
          {/* Brand Section */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-4 mb-5">
              <motion.img
                whileHover={{ rotate: 5, scale: 1.1 }}
                src={logo}
                alt="Al Ghiza"
                className="h-14 w-20 object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wide text-wheat">
                  Al <span className="text-cream">GHIZA</span>
                </h3>
                <p className="text-xs uppercase tracking-widest text-secondary-foreground/60">
                  Pure Nutrition
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-secondary-foreground/75 mb-6">
              Premium Talbina crafted the Prophetic way. 100% organic barley-based
              Sunnah food for healing, balance & vitality.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative p-3 rounded-full bg-wheat/15 hover:bg-wheat/30 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 group-hover:text-wheat transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-lg font-semibold text-wheat mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Shop All", "About Talbina", "Health Benefits", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 8 }}
                    className="group inline-flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-wheat transition-all duration-300"
                  >
                    <span className="w-0 h-px bg-wheat group-hover:w-4 transition-all duration-300" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-lg font-semibold text-wheat mb-5">Policies</h4>
            <ul className="space-y-3">
              {["Shipping Policy", "Return Policy", "Privacy Policy", "Terms & Conditions"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 8 }}
                    className="text-sm text-secondary-foreground/70 hover:text-wheat transition-all duration-300 inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-serif text-lg font-semibold text-wheat mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 group">
                <Phone className="w-4 h-4 mt-1 text-wheat group-hover:animate-bounce" />
                <div className="text-sm text-secondary-foreground/70">
                  <p>+92 300 1234567</p>
                  <p>+92 321 7654321</p>
                </div>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-4 h-4 mt-1 text-wheat group-hover:scale-110 transition-transform" />
                <p className="text-sm text-secondary-foreground/70">info@alghiza.pk</p>
              </li>
              <li className="flex gap-3 group">
                <MapPin className="w-4 h-4 mt-1 text-wheat group-hover:animate-pulse" />
                <p className="text-sm text-secondary-foreground/70">Lahore, Punjab, Pakistan</p>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Trust Badges - Animated on view */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 pt-8 border-t border-wheat/20"
        >
          <div className="flex flex-wrap justify-center gap-5 mb-8">
            {[
              ["🌿", "100% Organic"],
              ["☪️", "Halal Certified"],
              ["✓", "Quality Tested"],
              ["🚚", "Nationwide Delivery"],
            ].map(([icon, text], index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(245, 222, 179, 0.2)" }}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-wheat/10 transition-all duration-300 cursor-default"
              >
                <span className="text-lg">{icon}</span>
                <span className="text-sm font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-secondary-foreground/60">
            © 2026 Al GHIZA. All Rights Reserved.
          </p>

          <p className="text-center text-xs text-secondary-foreground/50 mt-2">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/muzammil-ahmed-0902612a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-wheat hover:text-honey transition-colors hover:underline"
            >
              Muzammil Ahmed
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;