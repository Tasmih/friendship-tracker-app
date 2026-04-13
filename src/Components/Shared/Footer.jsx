import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F3A2F] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Dashed Box - Exact Figma Style */}
        <div className="border border-dashed border-[#4A9C8E] rounded-3xl px-10 py-10 text-center">
          
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            KeenKeeper
          </h2>

          <p className="text-[#A1D4C8] text-base max-w-md mx-auto mb-10 leading-relaxed">
            Your personal shelf of meaningful connections. 
            Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <div>
            <p className="text-[#A1D4C8] text-xs tracking-[2px] mb-5">SOCIAL LINKS</p>
            
            <div className="flex justify-center gap-7">
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1A5C4F] hover:bg-[#267A6A] rounded-2xl flex items-center justify-center text-2xl transition-all"
              >
                📷
              </a>

              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1A5C4F] hover:bg-[#267A6A] rounded-2xl flex items-center justify-center text-3xl font-bold transition-all"
              >
                f
              </a>

              {/* X / Twitter */}
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1A5C4F] hover:bg-[#267A6A] rounded-2xl flex items-center justify-center text-2xl transition-all"
              >
                𝕏
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#A1D4C8]">
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;