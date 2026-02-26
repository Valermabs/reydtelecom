import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 text-white p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-8 border border-red-500/30">
          <ShieldAlert className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-6xl font-bold font-display mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back to securing what matters.
        </p>
        <Link href="/">
          <button className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
