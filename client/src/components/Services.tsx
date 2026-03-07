import { motion } from "framer-motion";
import { Cctv, Network, Wrench, Fingerprint, HardDrive, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Cctv className="w-8 h-8 text-primary" />,
      title: "Video Surveillance Installation",
      description: "Expert installation of high-definition video monitoring and surveillance systems for homes and businesses in Cagayan de Oro."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: "Access Control System Installation",
      description: "Professional installation of access control systems for secure entry management in offices and buildings."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: "Data and Voice Cabling",
      description: "Structured cabling solutions for reliable data and voice communication infrastructure."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: "Telephone/PABX System Installation",
      description: "Installation and configuration of telephone and PABX systems for seamless business communication."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      title: "Specialization: DAHUA Cameras",
      description: "Installation and support for DAHUA Full Color IR Bullet Cameras, providing advanced security and night vision."
    },
    {
      icon: <Wrench className="w-8 h-8 text-indigo-500" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, repairs, and support for all installed surveillance and computer systems."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-teal-500" />,
      title: "Storage Solutions",
      description: "Secure storage solutions for surveillance footage, including NVR/DVR setup and cloud integration."
    },
    {
      icon: <Shield className="w-8 h-8 text-sky-500" />,
      title: "Consultation & Quotation",
      description: "Free consultation and customized quotations for surveillance and computer service needs."
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Solutions</h3>
          </div>
          <p className="text-slate-600 max-w-md text-lg">
            From initial consultation to final deployment, we provide end-to-end telecommunication and security services.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200/60 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
