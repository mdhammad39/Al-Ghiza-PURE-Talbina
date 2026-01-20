import { ShoppingBag, ArrowRight, Heart } from "lucide-react";
import Button from "@/assets/components/Shared/Button";
import heroImage from "@/assets/hero-talbina.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* --- BACKGROUND PATTERN (Subtle & Elegant) --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L100 0H0L50 50z' fill='%23D4A84B'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container-custom section-padding pt-32 lg:pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT CONTENT: TEXT & HADITH --- */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Sunnah Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-[#8B6914]/20 to-transparent border-l-4 border-[#8B6914] backdrop-blur-md animate-fade-in">
              <span className="text-[#D4A84B] text-sm font-bold tracking-[0.2em] uppercase">
                Prophetic Nutrition
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
                Al Ghiza <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-wheat via-honey to-wheat">
                  Pure Talbina
                </span>
              </h1>
              <p className="font-serif text-3xl text-wheat/90 italic tracking-wide">
                خالص تلبینہ - سکونِ قلب
              </p>
            </div>

            {/* --- HADITH SECTION (The Soul of the Design) --- */}
            <div className="relative group max-w-xl mx-auto lg:mx-0">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#8B6914] to-transparent" />
              <div className="pl-6 italic text-white/80 space-y-3">
                <p className="text-lg leading-relaxed">
                  "تلبینہ مریض کے دل کو سکون دیتا ہے اور غم کو دور کرتا ہے۔"
                </p>
                <p className="text-sm text-wheat/70 font-light tracking-wide uppercase">
                  — Sahih Bukhari: 5689 | Hazrat Muhammad (ﷺ)
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <Button 
                className="bg-gradient-to-r from-wheat to-honey text-brown-dark font-bold px-10 py-4 rounded-none shadow-[0_10px_30px_rgba(212,168,75,0.3)] hover:shadow-honey/40 transition-all hover:-translate-y-1"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                SHOP NOW
              </Button>
              <button 
                className="flex items-center gap-2 text-white border-b border-wheat/30 pb-1 hover:border-wheat transition-all tracking-widest text-sm font-bold"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                OUR STORY <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">100%</span>
                  <span className="text-[10px] text-wheat uppercase tracking-tighter">Organic Barley</span>
               </div>
               <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Zero</span>
                  <span className="text-[10px] text-wheat uppercase tracking-tighter">Preservatives</span>
               </div>
               <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Sunnah</span>
                  <span className="text-[10px] text-wheat uppercase tracking-tighter">Authentic Recipe</span>
               </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT: IMAGE DESIGN --- */}
          <div className="relative group">
            {/* Floating Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[120%] h-[120%] border border-wheat/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[105%] h-[105%] border border-wheat/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Main Image with Glass Effect Frame */}
            <div className="relative z-10 p-4 lg:p-8">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={heroImage} 
                  alt="Pure Talbina" 
                  className="w-full h-auto object-cover transform transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating "Benefits" Card */}
              <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="bg-wheat/20 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-wheat fill-wheat" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Heart Health</p>
                    <p className="text-wheat/70 text-xs">Prophetic Healing</p>
                  </div>
                </div>
              </div>
              
              {/* Premium Stamp */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-wheat/90 backdrop-blur-md rounded-full flex items-center justify-center p-2 shadow-2xl rotate-12">
                <div className="w-full h-full border-2 border-dashed border-brown-dark/20 rounded-full flex items-center justify-center text-center">
                  <span className="text-[10px] font-black text-brown-dark leading-none uppercase">
                    Premium <br /> Quality <br /> Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-honey/20 blur-[120px] rounded-full -z-10" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;