import { Award, Clock, TrendingUp, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our consultants are AWS, Cisco, and CompTIA certified.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for mission-critical systems.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Clients report up to 40% improvement in efficiency.",
  },
  {
    icon: Target,
    title: "Tailored Strategies",
    description: "Solutions customized to your specific business goals.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
