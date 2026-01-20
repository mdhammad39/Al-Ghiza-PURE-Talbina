import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How often can Talbina be consumed?",
    answer: "Talbina can be consumed daily as part of a healthy diet. Most people take it once a day, preferably in the morning for breakfast or before bed. It's gentle on the stomach and suitable for regular consumption.",
  },
  {
    question: "Is Talbina safe for children?",
    answer: "Yes, Talbina is completely safe for children above 1 year of age. It's actually an excellent nutritious food for growing children due to its rich vitamin and mineral content. Start with smaller portions for younger children.",
  },
  {
    question: "Can I consume Talbina during pregnancy?",
    answer: "Yes, Talbina is generally safe during pregnancy and can provide essential nutrients. However, we always recommend consulting with your healthcare provider before adding any new food to your diet during pregnancy.",
  },
  {
    question: "What are the delivery options and time?",
    answer: "We offer nationwide delivery across Pakistan. Standard delivery takes 3-5 business days, while express delivery (available in major cities) takes 1-2 business days. Cash on Delivery (COD) is available for all orders.",
  },
  {
    question: "How should I store Talbina powder?",
    answer: "Store Talbina powder in a cool, dry place away from direct sunlight. Once opened, keep it in an airtight container and use within 3 months for best quality. Our resealable packaging helps maintain freshness.",
  },
  {
    question: "What is your return and refund policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your purchase, contact us within 7 days of delivery for a full refund or replacement. Products must be unused and in original packaging.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">FAQ</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Find answers to common questions about Talbina and Al GHIZA products
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;