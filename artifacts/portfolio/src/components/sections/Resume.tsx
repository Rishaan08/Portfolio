import { motion } from "framer-motion";
import { FileText, GraduationCap, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            A snapshot of my academic background, technical skills, and key experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 relative"
        >
          <div className="flex justify-center mb-8">
            <Button size="lg" className="px-8 shadow-primary/20" asChild>
              <a 
                href="https://drive.google.com/file/d/1eMjtvc0sPg9HVm33_f2jVMF1mojZlsUZ/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 w-5 h-5" />
                View
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="pl-4 border-l-2 border-border relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h4 className="font-bold text-white text-lg">B.Tech Computer Science</h4>
                <p className="text-primary font-medium text-sm mb-2">SRM Institute of Science and Technology</p>
                <p className="text-muted-foreground text-sm mb-1">2022 – 2026</p>
                <p className="text-white font-medium">CGPA: 9.51/10</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Top Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Deep Learning", "NLP", "AWS", "Power BI"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                  <p className="font-medium text-white">Microsoft Power BI Data Analyst Associate</p>
                  <p className="text-sm text-muted-foreground mt-1">PL-300</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
