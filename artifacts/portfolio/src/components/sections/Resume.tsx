import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My resume highlights my academic achievements, skills, and experience in the field of technology.
            It showcases my dedication to continuous learning and my commitment to contributing to innovative projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Button size="lg" className="px-8" asChild>
            <a
              href="https://drive.google.com/file/d/1eMjtvc0sPg9HVm33_f2jVMF1mojZlsUZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 w-5 h-5" />
              View
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT COLUMN */}
            <div className="space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Summary</h3>
                <div className="pl-4 border-l-2 border-primary/50 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[7px] top-1" />
                  <p className="font-semibold text-white mb-2">RISHAAN YADAV</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Innovative and dedicated individual with expertise in Machine Learning and a
                    strong commitment to developing user-centered solutions. With a passion for
                    technology and continuous improvement, I combine technical skills, creativity,
                    and a strong work ethic to consistently deliver high-quality and impactful results.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• (+91) 8527113865</li>
                    <li>• yadav.rishaan08@gmail.com</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Education</h3>
                <div className="space-y-6">
                  <div className="pl-4 border-l-2 border-primary/50 relative">
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[7px] top-1" />
                    <p className="font-semibold text-white text-sm uppercase tracking-wide">
                      Bachelor of Technology in Computer Science
                    </p>
                    <p className="text-primary text-sm font-medium mt-0.5">2022 – 2026</p>
                    <p className="text-muted-foreground text-sm italic mt-0.5">
                      S.R.M Institute of Science &amp; Technology, Kattankulathur, India
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      Maintained a CGPA of 9.51, reflecting dedication to academics.
                      Equipped with valuable knowledge and skills across various areas of technology.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/50 relative">
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[7px] top-1" />
                    <p className="font-semibold text-white text-sm uppercase tracking-wide">
                      10th &amp; 12th
                    </p>
                    <p className="text-primary text-sm font-medium mt-0.5">2018 – 2021</p>
                    <p className="text-muted-foreground text-sm italic mt-0.5">
                      St. Lawrence Convent, Delhi, India
                    </p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      Achieved 87% in 10th class and 80% in 12th class, reflecting commitment
                      to excellence and a solid academic foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Achievements</h3>
                <div className="pl-4 border-l-2 border-primary/50 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[7px] top-1" />
                  <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <li>
                      Achieved <span className="text-white font-medium">2nd place</span> in the prestigious
                      IIT BHU Varanasi Codefest, Vista, ML Hackathon 2024, showcasing proficiency in
                      machine learning and coding skills.
                    </li>
                    <li>
                      Ranked <span className="text-white font-medium">77th</span> in the highly competitive
                      ICPC Coding Competition in Tehran, demonstrating capability to tackle complex
                      algorithmic challenges on an international stage.
                    </li>
                    <li>
                      Secured <span className="text-white font-medium">27th place</span> in the Zindi African
                      Air Quality Prediction competition, highlighting analytical skills and commitment
                      to addressing real-world environmental issues.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Certifications</h3>
                <div className="pl-4 border-l-2 border-primary/50 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[7px] top-1" />
                  <p className="text-white font-medium text-sm">Microsoft Power BI Data Analyst Associate</p>
                  <p className="text-muted-foreground text-sm mt-0.5">PL-300</p>
                </div>
              </div>

              {/* Top Skills */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary pb-2">Top Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Deep Learning", "NLP", "AWS", "Power BI"].map((s) => (
                    <span key={s} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
