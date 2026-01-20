import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const Button = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-wheat to-honey text-brown-dark hover:from-honey hover:to-wheat shadow-gold hover:shadow-xl transform hover:scale-105",
    secondary: "bg-secondary text-secondary-foreground hover:bg-brown-light transform hover:scale-105",
    outline: "border-2 border-wheat text-wheat hover:bg-wheat hover:text-brown-dark backdrop-blur-sm bg-white/10 transform hover:scale-105",
    ghost: "text-foreground hover:bg-muted transform hover:scale-105",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-md hover:shadow-lg transform hover:scale-105",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;