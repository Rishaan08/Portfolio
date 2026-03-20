import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      // Initialize is not strictly required if passing public key in sendForm
      // But adding it here as per PRD preference
      emailjs.init('Le_Jirihn-0aO6x2J');

      await emailjs.sendForm(
        'service_2g4l25m', 
        'template_joj0lig', 
        formRef.current,
        'Le_Jirihn-0aO6x2J'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent. Thank you!",
        variant: "default",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below or through my contact info.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:yadav.rishaan08@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    yadav.rishaan08@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-lg font-medium">+91 8527113865</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/rishaanyadav/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Rishaan08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <Github className="text-muted-foreground group-hover:text-white transition-colors" size={20} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-3xl relative">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="from_name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                  <input 
                    type="text" 
                    id="from_name" 
                    name="from_name" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="from_email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                  <input 
                    type="email" 
                    id="from_email" 
                    name="from_email" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Hello Rishaan, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-6 text-base mt-2 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
