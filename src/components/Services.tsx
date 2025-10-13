import { Cloud, Shield, BarChart, Network, Cpu, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Cloud Consulting",
    description: "Migration, deployment, and optimization across AWS, Azure, and Google Cloud.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Protect your infrastructure and ensure compliance with industry standards.",
    icon: Shield,
  },
  {
    title: "Data Analytics & Insights",
    description: "Leverage data to drive smarter business decisions with custom dashboards.",
    icon: BarChart,
  },
  {
    title: "Network Optimization",
    description: "Improve reliability and performance of your business networks.",
    icon: Network,
  },
  {
    title: "IT Infrastructure Planning",
    description: "Scalable architecture solutions for long-term business growth.",
    icon: Cpu,
  },
  {
    title: "Managed IT Support",
    description: "Ongoing support and maintenance from certified professionals.",
    icon: Headphones,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-strong transition-all duration-300 bg-gradient-card border-border/50 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
