import { motion } from "framer-motion";
import { Trophy, Medal, Award, Globe, LineChart } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Medal className="w-6 h-6" />,
    title: "Runner-Up — Vista Codefest ML Hackathon",
    subtitle: "Indian Institute of Technology, BHU Varanasi · April 2024",
    description: "Secured 2nd place in the IIT BHU ML Hackathon, showcasing machine learning and coding proficiency."
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    title: "1st Place — Genesis",
    subtitle: "IMI Bhubaneswar · 2025",
    description: "Achieved first place at Genesis, demonstrating strong analytical and problem-solving skills."
  },
  {
    icon: <Medal className="w-6 h-6" />,
    title: "Runner-Up — Data Samurai",
    subtitle: "CINTEL Student Association, SRMIST · February 2025",
    description: "Secured runner-up position in the Data Samurai competition at SRMIST."
  },
  {
    icon: <Medal className="w-6 h-6" />,
    title: "Runner-Up — Yukta 2024",
    subtitle: "T.A. Pai Management Institute, Manipal · February 2025",
    description: "Placed second at Yukta 2024, a prestigious inter-college competition."
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Ranked 77th — ICPC",
    subtitle: "International Collegiate Programming Contest · Tehran",
    description: "Ranked 77th in the highly competitive ICPC, demonstrating capability in complex algorithmic challenges at an international level."
  },
  {
    icon: <LineChart className="w-6 h-6 text-green-400" />,
    title: "Ranked 27th — Zindi African Air Quality Prediction",
    subtitle: "Zindi Platform",
    description: "Secured 27th place in this global data science competition, highlighting analytical skills applied to real-world environmental challenges."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-secondary/30 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 leading-tight">{item.title}</h3>
                  <p className="text-xs text-primary mb-3 font-medium">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
