import { Package, Gift, Star, Percent, ShoppingBag } from "lucide-react";

const categories = [
  {
    name: "Talbina",
    icon: Package,
    description: "Pure barley powder",
  },
  {
    name: "Talbina Packs",
    icon: ShoppingBag,
    description: "Family & value packs",
  },
  {
    name: "Special Offers",
    icon: Percent,
    description: "Limited time deals",
  },
  {
    name: "Combo Deals",
    icon: Gift,
    description: "Bundle & save more",
  },
  {
    name: "Best Sellers",
    icon: Star,
    description: "Customer favorites",
  },
];

const CategoriesSection = () => {
  return (
    <section className="relative section-padding bg-[#FBF7F2] overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,168,75,0.18)_0%,_rgba(251,247,242,0.95)_65%,_transparent_100%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#D4A84B] font-semibold text-xs tracking-widest uppercase">
            Shop by Category
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2A1A0F] mt-3">
            Explore Our Collection
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-[#5A4636] text-sm lg:text-base">
            Carefully crafted Talbina products made with purity, tradition,
            and export-quality standards.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-[#E8DDCB]
                         hover:border-[#D4A84B] hover:shadow-[0_20px_40px_rgba(212,168,75,0.15)]
                         transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center
                              bg-[#FBF3E6] group-hover:bg-[#D4A84B]/20 transition-colors">
                <category.icon className="w-7 h-7 text-[#D4A84B]" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-semibold text-[#2A1A0F] text-center">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B5645] text-center mt-2 leading-relaxed">
                {category.description}
              </p>

              {/* Hover underline */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#D4A84B] 
                               group-hover:w-12 transition-all duration-500 rounded-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
