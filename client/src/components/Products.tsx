import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Products() {
  const products = [
    {
      brand: "Dahua Technology",
      tagline: "Smarter Security Solutions",
      description: "Experience ultra-high-definition surveillance with AI-powered analytics. Dahua provides world-class security cameras perfect for complex commercial and residential needs.",
      features: ["AI Perimeter Protection", "Full-color Night Vision", "Active Deterrence", "4K Ultra HD Resolution"],
      color: "from-blue-600/20 to-indigo-900/20",
      borderColor: "border-blue-500/30",
      badgeColor: "bg-blue-500/10 text-blue-500",
    },
    {
      brand: "Hikvision",
      tagline: "Vision Meets Intelligence",
      description: "The global leader in innovative video surveillance products. Hikvision delivers robust, weather-proof cameras with exceptional clarity and smart tracking capabilities.",
      features: ["AcuSense Technology", "DarkFighter Low-light", "Motorized Pan/Tilt/Zoom", "Cloud Storage Integration"],
      color: "from-cyan-600/20 to-slate-900/20",
      borderColor: "border-cyan-500/30",
      badgeColor: "bg-cyan-500/10 text-cyan-600",
    }
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Premium Hardware</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Partnering with the Best</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We exclusively install industry-leading equipment to ensure your security system operates flawlessly when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 lg:p-10 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
            >
              {/* Decorative Background Gradient */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${product.color} rounded-full blur-[80px] -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700`} />
              
              <div className="relative z-10">
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${product.badgeColor}`}>
                  Featured Partner
                </div>
                
                <h4 className="text-3xl font-bold text-slate-900 mb-2">{product.brand}</h4>
                <p className="text-lg font-medium text-slate-700 mb-4">{product.tagline}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
