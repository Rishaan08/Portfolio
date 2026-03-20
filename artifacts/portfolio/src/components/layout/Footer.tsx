import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Rishaan Yadav. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/rishaanyadav/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/Rishaan08" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="mailto:yadav.rishaan08@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
