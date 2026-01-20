import Header from "@/assets/components/Layout/Header";
import Footer from "@/assets/components/Layout/Footer";
import ScrollToTop from "@/assets/components/Shared/ScrollToTop";
import HeroSection from "@/assets/components/Widgets/HeroSection";
import CategoriesSection from "@/assets/components/Widgets/CategoriesSection";
import ProductsSection from "@/assets/components/Widgets/ProductsSection";
import BenefitsSection from "@/assets/components/Widgets/BenefitsSection";
import AboutSection from "@/assets/components/Widgets/AboutSection";
import RecipeSection from "@/assets/components/Widgets/RecipeSection";
import TestimonialsSection from "@/assets/components/Widgets/TestimonialsSection";
import WhyUsSection from "@/assets/components/Widgets/WhyUsSection";
import SubscriptionSection from "@/assets/components/Widgets/SubscriptionSection";
import BlogSection from "@/assets/components/Widgets/BlogSection";
import FAQSection from "@/assets/components/Widgets/FAQSection";
import ContactSection from "@/assets/components/Widgets/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <BenefitsSection />
        <AboutSection />
        <RecipeSection />
        <TestimonialsSection />
        <WhyUsSection />
        <SubscriptionSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;