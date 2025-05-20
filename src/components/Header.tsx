
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-foreground">
          <span className="text-primary">A</span>bdullrahman
        </h1>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            About
          </a>
          <a href="#documents" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Documents
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Abdul22002" target="_blank" rel="noopener noreferrer" 
             className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abdul-alghanim/" target="_blank" rel="noopener noreferrer"
             className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <Button asChild variant="outline" size="sm" className="hidden md:flex">
            <a href="/documents/Abdul_jobresume_CyberSecurity_NEW.pdf" target="_blank" rel="noopener noreferrer" download>
              <FileText size={16} className="mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
