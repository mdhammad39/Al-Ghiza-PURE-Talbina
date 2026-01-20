import { Zap, Heart, Leaf, Brain, Sparkles, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Boosts Energy",
    titleUrdu: "توانائی میں اضافہ",
    description: "Natural complex carbohydrates provide sustained energy throughout the day without crashes.",
  },
  {
    icon: Heart,
    title: "Helps Digestion",
    titleUrdu: "ہاضمے میں مددگار",
    description: "High fiber content promotes healthy gut function and regular digestion.",
  },
  {
    icon: Leaf,
    title: "Sunnah Recommended",
    titleUrdu: "سنت غذا",
    description: "Mentioned in Hadith as a blessed food that brings comfort to the heart.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    titleUrdu: "ذہنی سکون",
    description: "Known to reduce anxiety and depression, bringing peace to the mind.",
  },
  {
    icon: Sparkles,
    title: "Natural & Organic",
    titleUrdu: "قدرتی و نامیاتی",
    description: "100% pure barley with no additives, preservatives, or artificial ingredients.",
  },
  {
    icon: Shield,
    title: "Immunity Support",
    titleUrdu: "قوت مدافعت",
    description: "Rich in vitamins and minerals that strengthen the immune system.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-wheat font-medium text-sm tracking-wide uppercase">Why Talbina?</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2">
            Benefits of Talbina
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-secondary-foreground/80">
            A blessed superfood packed with incredible health benefits for body, mind, and soul
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 bg-wheat/5 rounded-2xl border border-wheat/10 hover:border-wheat/30 hover:bg-wheat/10 transition-all duration-300 animate-fade-in transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-wheat/20 flex items-center justify-center mb-4 group-hover:bg-wheat/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-wheat" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream mb-1">{benefit.title}</h3>
              <p className="text-sm text-wheat mb-3">{benefit.titleUrdu}</p>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;