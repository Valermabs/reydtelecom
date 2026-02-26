import { motion } from "framer-motion";
import { Cctv, Network, Wrench, Fingerprint, HardDrive, Shield } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Cctv className="w-8 h-8 text-primary" />,
      title: "CCTV Installation",
      description: "Professional design and installation of high-definition security camera systems tailored to your property layout."
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-500" />,
      title: "Network Infrastructure",
      description: "Robust structured cabling, Wi-Fi deployment, and enterprise-grade networking solutions for seamless connectivity."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      title: "Access Control",
      description: "Biometric and card-based entry systems to restrict and monitor physical access to your sensitive areas."
    },
    {
      icon: <Wrench className="w-8 h-8 text-indigo-500" />,
      title: "Maintenance & Support",
      description: "Comprehensive troubleshooting, repairs, and preventative maintenance to keep your systems online 24/7."
    },
    {
      icon: <HardDrive className="w-8 h-8 text-teal-500" />,
      title: "Storage Solutions",
      description: "Secure NVR/DVR setups and cloud integration ensuring your surveillance footage is safely retained and accessible."
    },
    {
      icon: <Shield className="w-8 h-8 text-sky-500" />,
      title: "Security Audits",
      description: "Comprehensive vulnerability assessments of your current telecommunication and physical security posture."
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
