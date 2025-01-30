import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your Ayurvedic assistant. How can I help you today?", isUser: false }
  ]);
  const { toast } = useToast();

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our Ayurvedic expert will respond shortly. In the meantime, feel free to explore our website.",
        isUser: false
      }]);
      toast({
        title: "Message sent",
        description: "We'll get back to you soon!",
      });
    }, 1000);

    setMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 bg-ayurveda-green hover:bg-ayurveda-sage"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col animate-fade-in">
          <div className="bg-ayurveda-green text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Ayurvedic Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-ayurveda-sage">
              <X className="w-4 h-4 text-white" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.isUser
                      ? 'bg-ayurveda-green text-white'
                      : 'bg-ayurveda-cream text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" className="bg-ayurveda-green hover:bg-ayurveda-sage">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;