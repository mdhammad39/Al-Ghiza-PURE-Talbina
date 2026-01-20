import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import Button from "@/assets/components/Shared/Button";

const ContactSection = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "✅ Thank You for Your Order!",
        description: "We've received your message and will get back to you shortly. Our team will contact you within 24 hours.",
        duration: 5000,
        className: "bg-gradient-to-r from-wheat/90 to-honey/90 text-brown-dark border-wheat",
      });

      // Clear form
      (e.target as HTMLFormElement).reset();

      // Clear cart if there were items
      if (cart.length > 0) {
        clearCart();
      }

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">Get In Touch</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-wheat-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+92 300 1234567</p>
                  <p className="text-muted-foreground">+92 321 7654321</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-wheat-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@alghiza.pk</p>
                  <p className="text-muted-foreground">support@alghiza.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-wheat-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">Al GHIZA Foods</p>
                  <p className="text-muted-foreground">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-wheat/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-wheat-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923170270575"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-3 w-full p-4 bg-[#25D366] text-white rounded-2xl font-medium hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-card transition-shadow">
            {/* Cart Summary */}
            {cart.length > 0 && (
              <div className="mb-6 p-4 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-xl border border-wheat/20">
                <h4 className="font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                  🛒 Your Order Summary
                </h4>
                <div className="space-y-2 mb-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-wheat/20 flex justify-between font-bold">
                  <span>Total:</span>
                  <span className="text-primary">Rs. {getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            )}

            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              {cart.length > 0 ? 'Complete Your Order' : 'Send us a Message'}
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : cart.length > 0 ? "Place Order" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;