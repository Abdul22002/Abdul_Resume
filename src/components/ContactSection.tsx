
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities or if you have any questions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">Contact Information</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and full-time positions 
                    in information security and cybersecurity roles.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:contact@example.com" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span>contact@example.com</span>
                    </a>
                    
                    <a 
                      href="https://github.com/Abdul22002" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <span>github.com/Abdul22002</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/abdul-alghanim/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <span>linkedin.com/in/abdul-alghanim</span>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-medium">Let's Connect</h3>
                  <p className="text-muted-foreground">
                    Interested in my work or have a project in mind? 
                    Don't hesitate to reach out.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button asChild size="lg" className="bg-accent-gradient animate-gradient-shift w-full">
                      <a href="mailto:contact@example.com">
                        <Mail className="mr-2" size={18} />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
