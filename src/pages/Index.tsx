
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DocumentsSection from "@/components/DocumentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Welcome to my portfolio!",
      description: "All documents are now downloadable. Click on any document card to download.",
      duration: 5000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
