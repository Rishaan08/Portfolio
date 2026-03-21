import { motion } from "framer-motion";
import { User, Calendar, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function About() {
  const [imgError, setImgError] = useState(false);

  const personalInfo = [
    { icon: <Calendar className="w-5 h-5" />, label: "Birthday", value: "18 August 2003" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 8527113865" },
    { icon: <MapPin className="w-5 h-5" />, label: "City", value: "New Delhi, India" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "yadav.rishaan08@gmail.com" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              {!imgError ? (
                <img 
                  src="/assets/img/Profile.jpeg" 
                  alt="Rishaan Yadav" 
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50 text-muted-foreground">
                  <User size={80} strokeWidth={1} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I'm a Computer Science Engineering graduate from SRM Institute of Science and Technology, Chennai, with a strong passion for technology and innovation. My academic journey has given me a solid foundation in computing, and I've built expertise in Machine Learning through hands-on projects and research — graduating with a CGPA of 9.51/10.
              </p>
              <p>
                I completed my schooling at St. Lawrence Convent, New Delhi, where I've always been driven to improve both personally and professionally. Beyond tech, I find balance in music, personal development books, and immersing myself in new places and perspectives through travel.
              </p>
              <p>
                In my downtime, I enjoy movies, series, and meaningful conversations. I believe in bringing dedication and a growth mindset to everything I do — whether it's a research project or a personal goal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {personalInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl glass-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-white break-all">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
