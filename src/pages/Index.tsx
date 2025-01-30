import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-ayurveda-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-ayurveda-cream to-ayurveda-earth">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-ayurveda-green mb-6 animate-fade-in">
            Discover Ancient Wisdom
          </h1>
          <p className="text-xl md:text-2xl text-ayurveda-brown mb-8 max-w-2xl mx-auto animate-fade-in">
            Experience the transformative power of Ayurveda through personalized wellness solutions
          </p>
          <Button 
            className="bg-ayurveda-green hover:bg-ayurveda-sage text-white px-8 py-6 text-lg animate-fade-in"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-ayurveda-green text-center mb-12">
            Our Holistic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-ayurveda-cream hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-ayurveda-green mb-4">
                  {feature.title}
                </h3>
                <p className="text-ayurveda-brown">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

const features = [
  {
    title: "Personalized Consultation",
    description: "Get tailored Ayurvedic advice based on your unique constitution and needs."
  },
  {
    title: "Natural Remedies",
    description: "Discover traditional herbs and treatments that promote balance and wellness."
  },
  {
    title: "Lifestyle Guidance",
    description: "Learn daily practices and routines that align with Ayurvedic principles."
  }
];

export default Index;