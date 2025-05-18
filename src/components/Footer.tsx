
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="font-bold text-xl">
              <span className="text-primary">A</span>bdullrahman <span className="text-primary">A</span>lghanim
            </h3>
            <p className="text-muted-foreground mt-2">Information Security Professional</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Abdul22002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdul-alghanim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdullrahman Alghanim. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#documents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documents
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
