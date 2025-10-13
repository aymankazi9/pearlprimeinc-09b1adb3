import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "TechConsultPro completely transformed our network infrastructure — faster, more secure, and more reliable.",
    author: "Michael R., Operations Director",
  },
  {
    quote: "The cybersecurity audit saved us from potential breaches. Their team knows what they're doing.",
    author: "Sarah P., IT Manager",
  },
  {
    quote: "Excellent experience! Our migration to the cloud was seamless and on budget.",
    author: "James K., CEO",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-12 shadow-strong">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <p className="text-2xl text-foreground mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="text-lg text-primary font-semibold">
                — {testimonials[currentIndex].author}
              </p>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={previousTestimonial}
                className="hover:bg-primary/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="hover:bg-primary/10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
