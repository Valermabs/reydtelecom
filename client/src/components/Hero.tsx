import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[40%] -left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[100px]" />
        
        {/* Tech Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjRoLTR6bS0zMCAwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDRWNGgtNHpNMCAzNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptNi0zMHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHpNMCA2MHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark mb-6">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-slate-200">Trusted Security & Telecom Experts</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] text-balance">
              Securing Your World with <span className="text-gradient-dark">Advanced Tech</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance leading-relaxed">
              REYD Telecommunication Services is a Cagayan de Oro-based company providing computer and surveillance services, including high-definition video monitoring installations. Specializing in DAHUA Full Color IR Bullet Cameras for reliable security.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto h-14 px-8 rounded-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all bg-transparent"
              >
                View Our Products
              </Button>
            </div>
          </motion.div>

          {/* Visual/Image Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full border border-slate-800/60 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-slate-700/50 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Center Tech Graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full glass-panel-dark flex items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.15)] relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-cyan-500/20 blur-xl" />
                  <Video className="w-24 h-24 text-cyan-400 relative z-10" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-4 glass-panel-dark px-6 py-4 rounded-2xl flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <span className="font-semibold text-white">24/7 Monitoring</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -left-4 glass-panel-dark px-6 py-4 rounded-2xl flex items-center gap-4"
              >
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="font-semibold text-white">High Security</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
