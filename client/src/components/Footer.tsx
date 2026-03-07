import { ShieldAlert, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">REYD</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Cagayan de Oro-based provider of computer and surveillance services. Specializing in high-definition video monitoring and DAHUA Full Color IR Bullet Cameras.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-400 hover:text-primary transition-colors text-sm">Home</button></li>
              <li><button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-400 hover:text-primary transition-colors text-sm">Products</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-400 hover:text-primary transition-colors text-sm">Services</button></li>
              <li><button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-slate-400 hover:text-primary transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-400 text-sm">CCTV Installation</span></li>
              <li><span className="text-slate-400 text-sm">Network Infrastructure</span></li>
              <li><span className="text-slate-400 text-sm">Access Control Systems</span></li>
              <li><span className="text-slate-400 text-sm">Maintenance & Support</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} REYD Telecommunication Services, Cagayan de Oro. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Authorized Partner of <span className="text-slate-300 font-medium">Dahua</span> & <span className="text-slate-300 font-medium">Hikvision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
