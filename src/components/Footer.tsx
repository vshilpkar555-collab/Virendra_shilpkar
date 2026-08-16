import Link from "next/link";
import { Linkedin, Mail, Instagram, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-100 dark:border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
              <span className="font-black text-2xl uppercase tracking-tighter">
                Virendra<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-secondary dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
              Senior Flutter Developer specializing in building thoughtful, scalable and production-ready mobile experiences for Android and iOS.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/virendra-shilpkar-b389a620b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-dark-card flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/virendra_shilpkar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-dark-card flex items-center justify-center text-secondary hover:bg-red-500 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:vshilpkar55@gmail.com"
                className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-dark-card flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-[0.2em] text-secondary">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Experience", "Projects", "Services"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary font-medium transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-[0.2em] text-secondary">Expertise</h4>
            <ul className="space-y-4">
              <li className="text-secondary dark:text-gray-400 font-medium">Flutter Development</li>
              <li className="text-secondary dark:text-gray-400 font-medium">Native Android (Java/Kotlin)</li>
              <li className="text-secondary dark:text-gray-400 font-medium">iOS Production Builds</li>
              <li className="text-secondary dark:text-gray-400 font-medium">Firebase Architecture</li>
              <li className="text-secondary dark:text-gray-400 font-medium">Advanced State Management</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary dark:text-gray-500">
          <p className="font-medium">© {currentYear} Virendra Shilpkar. All rights reserved.</p>
          <div className="flex gap-6 items-center">
             <div className="flex items-center gap-2">
               <Phone size={14} className="text-primary" />
               <a href="https://wa.me/918349156371" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold tracking-tight">+91 8349156371</a>
             </div>
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <a href="mailto:vshilpkar55@gmail.com" className="hover:text-primary transition-colors font-bold tracking-tight">vshilpkar55@gmail.com</a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
