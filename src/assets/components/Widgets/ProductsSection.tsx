import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import Button from "@/assets/components/Shared/Button";

// 🔹 LOCAL IMAGES (manual folder – unchanged)
import product1 from "@/assets/product1 (1).webp";
import product2 from "@/assets/product1 (2).webp";
import product3 from "@/assets/product1 (3).webp";
import product4 from "@/assets/product1 (4).webp";

// 🔹 ONLINE IMAGES (sirf View All ke liye)
const onlineImages = [
  "https://image.lexica.art/full_webp/cdafb79e-eb81-4e5e-be4e-62776c809139",
  "https://image.lexica.art/full_webp/76e429a6-8be4-4613-a208-74c3c1478220",
  "https://image.lexica.art/full_webp/3a550814-20ed-463f-b48c-5fe886a9a795",
  "https://image.lexica.art/full_webp/0e8a5661-ad5d-4470-93b6-8a135340f68b",
];

// 🔹 TOP 4 PRODUCTS (LOCAL IMAGES)
const baseProducts = [
  {
    id: 1,
    name: "Pure Talbina Powder",
    nameUrdu: "خالص تلبینہ پاؤڈر",
    price: 850,
    originalPrice: 999,
    rating: 4.9,
    reviews: 234,
    badge: "Best Seller",
    image: product1,
  },
  {
    id: 2,
    name: "Talbina Family Pack",
    nameUrdu: "فیملی پیک تلبینہ",
    price: 2200,
    originalPrice: 2800,
    rating: 4.8,
    reviews: 156,
    badge: "Save 21%",
    image: product2,
  },
  {
    id: 3,
    name: "Talbina Starter Kit",
    nameUrdu: "اسٹارٹر کٹ",
    price: 1499,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 89,
    badge: "New",
    image: product3,
  },
  {
    id: 4,
    name: "Premium Talbina",
    nameUrdu: "پریمیم تلبینہ",
    price: 1299,
    originalPrice: 1599,
    rating: 5.0,
    reviews: 67,
    badge: "Premium",
    image: product4,
  },
];

// 🔹 EXTRA 4 PRODUCTS (ONLINE IMAGES – View All)
const extraProducts = [
  {
    id: 5,
    name: "Organic Barley Talbina",
    nameUrdu: "آرگینک جو تلبینہ",
    price: 999,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 54,
    badge: "Organic",
    image: onlineImages[0],
  },
  {
    id: 6,
    name: "Talbina Wellness Pack",
    nameUrdu: "ویلنیس پیک",
    price: 1999,
    originalPrice: 2399,
    rating: 4.9,
    reviews: 72,
    badge: "Popular",
    image: onlineImages[1],
  },
  {
    id: 7,
    name: "Talbina Kids Special",
    nameUrdu: "بچوں کے لیے خاص",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 38,
    badge: "Kids",
    image: onlineImages[2],
  },
  {
    id: 8,
    name: "Premium Sunnah Talbina",
    nameUrdu: "سنت تلبینہ",
    price: 1499,
    originalPrice: 1799,
    rating: 5.0,
    reviews: 61,
    badge: "Sunnah",
    image: onlineImages[3],
  },
];

const ProductsSection = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [showMore, setShowMore] = useState(false);

  const displayedProducts = showMore
    ? [...baseProducts, ...extraProducts]
    : baseProducts;

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      nameUrdu: product.nameUrdu,
      price: product.price,
      image: product.image,
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <section id="products" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase">
            Featured Products
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2">
            Our Best Sellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-wheat to-honey text-xs font-bold rounded-full">
                  {product.badge}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-honey text-honey" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <h3 className="font-serif font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.nameUrdu}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <span className="font-bold text-primary">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm line-through text-muted-foreground">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showMore && (
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" onClick={() => setShowMore(true)}>
              View All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
