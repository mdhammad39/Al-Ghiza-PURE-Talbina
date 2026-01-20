import { Truck, Shield, CreditCard, Leaf, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Pure barley with no chemicals or preservatives",
  },
  {
    icon: Award,
    title: "Sunnah Recipe",
    description: "Made following authentic Prophetic traditions",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast shipping across Pakistan",
  },
  {
    icon: CreditCard,
    title: "COD Available",
    description: "Cash on delivery for your convenience",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction or money back",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "24/7 WhatsApp support",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-wheat/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Why Shop With Al GHIZA?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;