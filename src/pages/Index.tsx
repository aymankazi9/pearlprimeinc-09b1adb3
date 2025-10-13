import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import PaymentForm from "@/components/PaymentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <PaymentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
