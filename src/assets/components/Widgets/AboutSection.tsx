import heroImage from "@/assets/hero-talbina.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-3xl overflow-hidden shadow-card transform hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Traditional Talbina preparation"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wheat/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-honey/20 rounded-full blur-2xl animate-pulse-slow" />
            
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-brown-dark">☪️ Sunnah Food</span>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">About Talbina</span>

            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">
              What is <span className="text-gradient">Talbina</span>?
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-foreground">Talbina (تلبینہ)</strong> is a
                blessed Prophetic food made from barley, milk and honey. Its
                creamy texture comes from the Arabic word <em>“laban”</em>.
              </p>

              <p>
                Prophet Muhammad ﷺ recommended Talbina as a comfort for the
                heart, especially during illness and sadness.
              </p>

              {/* Hadith Card */}
              <div className="bg-gradient-to-r from-wheat/10 to-honey/10 p-6 rounded-2xl border-l-4 border-wheat shadow-soft my-6">
                <p className="italic font-serif text-lg text-foreground">
                  “Talbina gives comfort to the heart of the sick and removes
                  grief.”
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  — Sahih Bukhari
                </p>
              </div>

              {/* Ingredients */}
              <h3 className="font-serif text-xl font-semibold mt-6">
                Key Ingredients
              </h3>

              <ul className="grid grid-cols-3 gap-4">
                {[
                  { icon: "🌾", name: "Barley", ur: "جَو" },
                  { icon: "🥛", name: "Milk", ur: "دودھ" },
                  { icon: "🍯", name: "Honey", ur: "شہد" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-wheat/10 to-honey/10 hover:shadow-md transition"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-medium mt-1">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.ur}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Benefits */}
              <h3 className="font-serif text-xl font-semibold mt-6">
                Health Benefits
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Boosts Immunity",
                  "Aids Digestion",
                  "Improves Mood",
                  "Heart Health",
                  "Healthy Skin",
                  "Natural Energy",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
