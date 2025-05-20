
import { useState } from "react";
import { motion } from "framer-motion";
import DocumentCard from "./DocumentCard";

const documents = [
  {
    id: 1,
    title: "Windows System Hardening",
    fileName: "/documents/LAB 9 Windows System Hardening.docx",
    category: "hardening",
  },
  {
    id: 2,
    title: "Linux System Hardening",
    fileName: "/documents/LAB 10 - Linux System Hardening.docx",
    category: "hardening",
  },
  {
    id: 3,
    title: "Malware Analysis",
    fileName: "/documents/LAB 10 - Malware Analysis.docx",
    category: "analysis",
  },
  {
    id: 4,
    title: "Windows Forensics & Logging",
    fileName: "/documents/LAB 11 - Windows Forensics & Logging.docx",
    category: "forensics",
  },
  {
    id: 5,
    title: "Linux Forensics & Logging",
    fileName: "/documents/LAB 12 - Linux Forensics & Logging.docx",
    category: "forensics",
  },
  {
    id: 6,
    title: "Social Engineering",
    fileName: "/documents/LAB 12 - Social Engineering.docx",
    category: "security",
  },
  {
    id: 7,
    title: "Hacking Linux",
    fileName: "/documents/Lab 6 hacking linux.docx",
    category: "security",
  },
  {
    id: 8,
    title: "Database Hacking",
    fileName: "/documents/Lab 8 database hacking.docx",
    category: "security",
  },
  {
    id: 9,
    title: "Module 6 Lab 4",
    fileName: "/documents/Module 6 lab 4.docx",
    category: "security",
  },
  {
    id: 10,
    title: "Module 8 Lab 6",
    fileName: "/documents/Module 8 lab 6.docx",
    category: "security",
  },
  {
    id: 11,
    title: "Proxmox Server Configuration",
    fileName: "/documents/Configuration of proxmox Server.docx",
    category: "hardening",
  },
];

const categories = [
  { id: "all", name: "All Documents" },
  { id: "hardening", name: "System Hardening" },
  { id: "analysis", name: "Analysis" },
  { id: "forensics", name: "Forensics & Logging" },
  { id: "security", name: "Security" },
];

const DocumentsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDocuments = 
    activeCategory === "all" 
      ? documents 
      : documents.filter(doc => doc.category === activeCategory);

  return (
    <section id="documents" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Documents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my collection of technical documents showcasing my expertise in various cybersecurity domains
          </p>
        </div>
        
        <div className="mb-8 flex items-center justify-center flex-wrap gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted/20 text-muted-foreground hover:bg-muted/40"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <DocumentCard 
                title={doc.title} 
                fileName={doc.fileName} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
