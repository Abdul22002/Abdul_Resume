
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-accent-gradient animate-gradient-shift leading-tight">
            Abdullrahman Alghanim
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
            Information Security Professional
            <span className="mx-3 inline-block">•</span>
            <span className="text-primary">University of South Florida</span>
          </h2>
          
          <div className="space-y-6 mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in cybersecurity with expertise in system hardening, 
              malware analysis, forensics, and defensive security practices.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-accent-gradient animate-gradient-shift">
              <a href="/documents/Abdul_jobresume_CyberSecurity_NEW.pdf" target="_blank" rel="noopener noreferrer" download>
                <FileText className="mr-2" size={18} />
                View Resume
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href="#documents">
                View Documents
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#documents" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
