import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming & Data",
    skills: ["Python", "SQL", "Microsoft Excel", "Power BI"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Feature Engineering", "Model Evaluation"]
  },
  {
    title: "GenAI & LLM",
    skills: ["Transformers", "RAG", "Prompt Engineering"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Flask"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, EBS, RDS)", "Docker", "Terraform", "Linux"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code", "Kaggle", "Google Colab"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mt-auto"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={itemVariants}
                    className="px-4 py-2 bg-secondary text-sm text-muted-foreground rounded-lg border border-border/50 hover:bg-primary hover:text-white hover:border-primary cursor-default transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
