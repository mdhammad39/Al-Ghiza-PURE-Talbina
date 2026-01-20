import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

const initialArticles = [
  {
    id: 1,
    title: "Talbina & Mental Health: A Natural Remedy for Anxiety",
    category: "Health",
    readTime: "5 min read",
    excerpt:
      "Discover how this Prophetic food can help reduce stress, anxiety, and depression naturally...",
    fullText:
      "Talbina is a Sunnah food made from barley. It is known to comfort the heart, reduce anxiety, and promote mental peace according to authentic Hadith.",
  },
  {
    id: 2,
    title: "Sunnah Foods for Immunity: Your Guide to Natural Wellness",
    category: "Wellness",
    readTime: "4 min read",
    excerpt:
      "Explore the powerful foods recommended in the Sunnah that boost your immune system...",
    fullText:
      "Sunnah foods like honey, dates, olive oil, and talbina strengthen immunity and provide natural healing for the body.",
  },
  {
    id: 3,
    title: "Healthy Ramadan Meals: Incorporating Talbina in Suhoor",
    category: "Recipes",
    readTime: "3 min read",
    excerpt:
      "The perfect way to start your fasting day with sustained energy and blessings...",
    fullText:
      "Talbina in Suhoor keeps you full for longer, improves digestion, and provides steady energy throughout the fasting day.",
  },
];

const extraArticles = [
  {
    id: 4,
    title: "Talbina for Kids: Nutrition with Sunnah",
    category: "Health",
    readTime: "3 min read",
    excerpt: "A gentle and nutritious meal for growing children...",
    fullText:
      "Talbina is easy to digest and provides essential nutrients for children’s growth and brain health.",
  },
  {
    id: 5,
    title: "Healing Power of Barley in Islam",
    category: "Islamic",
    readTime: "4 min read",
    excerpt: "Why barley holds a special place in Islamic nutrition...",
    fullText:
      "Barley was loved by the Prophet ﷺ and is known for its healing and comforting properties.",
  },
  {
    id: 6,
    title: "Daily Sunnah Diet for a Healthy Life",
    category: "Wellness",
    readTime: "5 min read",
    excerpt: "Simple Sunnah-based eating habits for everyday life...",
    fullText:
      "Following a Sunnah diet brings balance, health, and barakah into daily life.",
  },
];

const BlogSection = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const displayedArticles = showMore
    ? [...initialArticles, ...extraArticles]
    : initialArticles;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase">
              From Our Blog
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2">
              Health Articles
            </h2>
          </div>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
            <article
              key={article.id}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all"
            >
              <span className="inline-block px-3 py-1 bg-wheat/10 text-primary text-xs rounded-full mb-4">
                {article.category}
              </span>

              <h3 className="font-serif text-lg font-semibold mb-3">
                {article.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {article.excerpt}
              </p>

              {expandedId === article.id && (
                <p className="text-sm text-foreground mb-4">
                  {article.fullText}
                </p>
              )}

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>

                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === article.id ? null : article.id
                    )
                  }
                  className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {expandedId === article.id ? "Show Less" : "Read More"}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
