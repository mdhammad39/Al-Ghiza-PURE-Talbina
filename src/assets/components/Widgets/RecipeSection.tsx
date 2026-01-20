import { Clock, ChefHat, Flame } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Add Talbina Powder",
    description: "Take 2 tablespoons of Al GHIZA Talbina powder and add to a saucepan.",
    tip: "Use 2 tbsp per serving",
  },
  {
    number: "02",
    title: "Mix with Milk",
    description: "Add 1 cup of fresh milk (or water) and mix well to avoid lumps.",
    tip: "Full cream milk works best",
  },
  {
    number: "03",
    title: "Cook on Low Heat",
    description: "Simmer on low heat for 5-7 minutes, stirring continuously until thick.",
    tip: "Don't let it boil over",
  },
  {
    number: "04",
    title: "Sweeten & Serve",
    description: "Remove from heat, add honey to taste, and enjoy warm!",
    tip: "Best for breakfast or recovery",
  },
];

const RecipeSection = () => {
  return (
    <section id="recipe" className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">How to Prepare</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Easy Talbina Recipe
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Prepare delicious Talbina in just 10 minutes with these simple steps
          </p>
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">10 Minutes</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <Flame className="w-5 h-5 text-primary" />
            <span className="font-medium">Low Heat</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border">
            <ChefHat className="w-5 h-5 text-primary" />
            <span className="font-medium">1 Serving</span>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <span className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-wheat to-honey text-brown-dark font-bold text-sm rounded-full shadow-md">
                Step {step.number}
              </span>

              <div className="mt-4">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary bg-wheat/10 px-3 py-2 rounded-lg">
                  <span>💡</span>
                  <span>{step.tip}</span>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="mt-12 p-8 bg-secondary rounded-2xl text-center">
          <p className="text-secondary-foreground/70 mb-2">📹 Watch our step-by-step video guide</p>
          <h3 className="font-serif text-xl font-semibold text-cream">Coming Soon!</h3>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;