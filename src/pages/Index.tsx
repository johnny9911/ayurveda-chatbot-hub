import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ayurveda-cream to-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-ayurveda-green mb-6 tracking-tight animate-fade-in">
            Ancient Wisdom for
            <span className="block">Modern Wellness</span>
          </h1>
          <p className="text-xl md:text-2xl text-ayurveda-brown mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">
            Discover personalized Ayurvedic solutions tailored to your unique constitution and lifestyle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200">
            <Button 
              className="bg-ayurveda-green hover:bg-ayurveda-sage text-white px-8 py-6 text-lg transition-all duration-300"
            >
              Begin Your Journey
            </Button>
            <Button 
              variant="outline"
              className="border-ayurveda-green text-ayurveda-green hover:bg-ayurveda-cream px-8 py-6 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ayurveda-green text-center mb-16">
            Our Holistic Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-ayurveda-cream hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-16 w-16 bg-ayurveda-green rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-ayurveda-green mb-4">
                  {feature.title}
                </h3>
                <p className="text-ayurveda-brown text-lg leading-relaxed">
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
    description: "Experience tailored Ayurvedic guidance based on your unique prakriti and current state of well-being.",
    icon: <span className="text-white text-2xl">🌿</span>
  },
  {
    title: "Natural Remedies",
    description: "Access traditional herbs and treatments carefully selected to restore balance and promote optimal health.",
    icon: <span className="text-white text-2xl">🌱</span>
  },
  {
    title: "Lifestyle Guidance",
    description: "Learn time-tested daily practices and routines that align with your natural rhythms and constitution.",
    icon: <span className="text-white text-2xl">☘️</span>
  }
];

export default Index;