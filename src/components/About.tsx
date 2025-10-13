import aboutImage from "@/assets/about-it.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 10 years of experience in IT infrastructure and business technology, we help companies streamline operations, enhance security, and adopt innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make technology work <span className="text-primary font-semibold italic">for</span> you, not against you.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-lg"></div>
            <img 
              src={aboutImage} 
              alt="IT consulting team collaborating" 
              className="relative rounded-lg shadow-strong w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
