
import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DocumentCardProps {
  title: string;
  fileName: string;
}

const DocumentCard = ({ title, fileName }: DocumentCardProps) => {
  return (
    <a 
      href={fileName} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block group"
    >
      <Card className="h-full bg-card-gradient card-hover overflow-hidden border border-border/50 p-5 flex flex-col">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-lg bg-muted/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <FileText className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
          </div>
          <div className="hidden sm:flex px-3 py-1 bg-muted/30 rounded-full text-xs text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
            .docx
          </div>
        </div>
        
        <div className="mt-4 flex-1">
          <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">View Document</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-muted-foreground group-hover:text-accent group-hover:transform group-hover:translate-x-1 transition-all"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </Card>
    </a>
  );
};

export default DocumentCard;
