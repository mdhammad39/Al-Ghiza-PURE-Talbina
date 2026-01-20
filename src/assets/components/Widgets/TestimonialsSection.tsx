import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fatima Ahmed",
    location: "Lahore",
    rating: 5,
    text: "Al GHIZA Talbina has become a staple in our home. My children love it for breakfast, and I feel good knowing they're eating something so healthy and blessed.",
    verified: true,
  },
  {
    id: 2,
    name: "Muhammad Ali",
    location: "Karachi",
    rating: 5,
    text: "I've been consuming Talbina for 3 months now. My digestion has improved significantly, and I feel more energetic throughout the day. Highly recommended!",
    verified: true,
  },
  {
    id: 3,
    name: "Ayesha Khan",
    location: "Islamabad",
    rating: 5,
    text: "As someone who follows the Sunnah, I was looking for authentic Talbina. Al GHIZA delivers exactly what they promise - pure, organic, and delicious.",
    verified: true,
  },
  {
    id: 4,
    name: "Hassan Sheikh",
    location: "Multan",
    rating: 5,
    text: "My mother has been taking Talbina for heart health. The quality is excellent, and customer service is responsive. Will continue ordering!",
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">Testimonials</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Join thousands of happy customers who trust Al GHIZA for their daily Talbina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${testimonial.id * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-wheat/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-honey text-honey" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <span className="flex items-center gap-1 text-xs text-primary bg-wheat/10 px-3 py-1 rounded-full">
                    ✓ Verified Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "50,000+", label: "Orders Delivered" },
            { value: "100%", label: "Organic & Pure" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-wheat/10 to-honey/10 rounded-2xl hover:shadow-md transition-shadow">
              <p className="font-serif text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;