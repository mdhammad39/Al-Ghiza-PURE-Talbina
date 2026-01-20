import logo from "@/assets/logo.jpeg";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "header" | "footer" | "hero";
  showText?: boolean;
  className?: string;
}

const Logo = ({ variant = "header", showText = true, className }: LogoProps) => {
  const sizes = {
    header: "h-10 lg:h-12 w-18 lg:w-24 object-contain",
    footer: "h-14 w-20 object-contain", 
    hero: "h-16 lg:h-20 w-22 lg:w-28 object-contain",
  };

  const textSizes = {
    header: "text-xl lg:text-2xl",
    footer: "text-2xl",
    hero: "text-3xl lg:text-4xl",
  };

  const textColors = {
    header: "text-brown-dark",
    footer: "text-wheat",
    hero: "text-white",
  };

  const subtextColors = {
    header: "text-muted-foreground",
    footer: "text-secondary-foreground/60",
    hero: "text-white/80",
  };

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className="relative">
        <img 
          src={logo} 
          alt="Al Ghiza - Pure Talbina" 
          className={cn(
            "transition-transform duration-300 group-hover:scale-105",
            sizes[variant]
          )}
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-wheat/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
      
      {showText && (
        <div className={variant === "header" ? "hidden sm:block" : ""}>
          <h1 className={cn(
            "font-serif font-bold",
            textSizes[variant],
            textColors[variant]
          )}>
            Al <span className={variant === "footer" ? "text-cream" : "text-gradient"}>GHIZA</span>
          </h1>
          <p className={cn(
            "text-xs -mt-1",
            subtextColors[variant]
          )}>
            Pure Nutrition
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;