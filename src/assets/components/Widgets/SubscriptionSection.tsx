import { Bell, Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Button from "@/assets/components/Shared/Button";

const SubscriptionSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "🎉 Successfully Subscribed!",
        description: "Welcome to Al GHIZA family! You'll receive 15% off on your first order. Check your email for details.",
        duration: 5000,
        className: "bg-gradient-to-r from-wheat/90 to-honey/90 text-brown-dark border-wheat",
      });

      (e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-wheat/20 rounded-full mb-6">
            <Bell className="w-4 h-4 text-wheat" />
            <span className="text-sm text-wheat font-medium">Subscribe & Save</span>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-cream mb-4">
            Monthly Talbina Subscription
          </h2>
          
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Never run out of your daily Talbina. Subscribe now and get 15% off every month, plus early access to new products and exclusive offers.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-wheat/10 rounded-xl">
              <Gift className="w-6 h-6 text-wheat mx-auto mb-2" />
              <p className="text-sm font-medium text-cream">15% Monthly Discount</p>
            </div>
            <div className="p-4 bg-wheat/10 rounded-xl">
              <span className="text-2xl block mb-2">🚚</span>
              <p className="text-sm font-medium text-cream">Free Delivery</p>
            </div>
            <div className="p-4 bg-wheat/10 rounded-xl">
              <span className="text-2xl block mb-2">⏰</span>
              <p className="text-sm font-medium text-cream">Cancel Anytime</p>
            </div>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-full bg-wheat/10 border border-wheat/20 text-cream placeholder:text-secondary-foreground/50 focus:outline-none focus:border-wheat"
            />
            <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-xs text-secondary-foreground/50 mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;