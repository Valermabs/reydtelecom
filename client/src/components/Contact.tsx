import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useCreateContact } from "@/hooks/use-contacts";
import { Button } from "@/components/ui/button";

// Recreate schema locally for form if we don't have direct export from schema (or we can assume it matches)
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const createContact = useCreateContact();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    createContact.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden text-slate-200">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Secure Your Future</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              For inquiries and quotations on high-definition video monitoring and DAHUA Full Color IR Bullet Cameras, contact Engr. Reynald. Serving Cagayan de Oro and nearby areas.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center flex-shrink-0 border-slate-700/50">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:09265358893" className="text-primary hover:text-cyan-400 transition-colors font-medium mt-1 inline-block">0926-535-8893</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center flex-shrink-0 border-slate-700/50">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">Our friendly team is here to help.</p>
                  <a href="mailto:reydtelecom@gmail.com" className="text-primary hover:text-cyan-400 transition-colors font-medium mt-1 inline-block">reydtelecom@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center flex-shrink-0 border-slate-700/50">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Visit Us</h4>
                  <p className="text-slate-400">Cagayan de Oro, Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 lg:pl-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative"
            >
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      {...form.register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${form.formState.errors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all duration-200`}
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      {...form.register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${form.formState.errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all duration-200`}
                      placeholder="john@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${form.formState.errors.phone ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all duration-200`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                  <textarea 
                    {...form.register("message")}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${form.formState.errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all duration-200 resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={createContact.isPending}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {createContact.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
