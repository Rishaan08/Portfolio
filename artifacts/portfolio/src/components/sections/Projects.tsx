import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";

const PROJECTS = [
  {
    title: "CERAS: Cognitive Efficiency Reasoning Alignment System",
    tags: ["Machine Learning", "Behavioral Modeling", "React"],
    duration: "Dec 2025 – Present",
    description: "A machine learning pipeline that estimates Cognitive Efficiency from behavioral interaction data. Built a React dashboard to visualize learner behavior metrics and model predictions, supporting personalized learning guidance.",
    github: "https://github.com/Rishaan08"
  },
  {
    title: "SecureGuard AI",
    tags: ["LangChain", "LLMs", "RAG", "Vector Retrieval"],
    duration: "Oct 2025",
    description: "A Retrieval-Augmented Generation (RAG) system for grounded Q&A over domain-specific documents. Implemented document ingestion, embedding generation, and vector retrieval with prompt optimization to reduce hallucinations.",
    github: "https://github.com/Rishaan08"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Code2 size={24} />
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-primary mb-4 font-mono">{project.duration}</p>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-medium px-2.5 py-1 bg-secondary/50 text-muted-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* GitHub CTA Card */}
          <motion.a
            href="https://github.com/Rishaan08"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-center items-center text-center p-8 border-dashed border-2 border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center mb-6 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
              <Github size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">More Projects</h3>
            <p className="text-muted-foreground">
              Explore all my projects, contributions, and open-source work on GitHub.
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
