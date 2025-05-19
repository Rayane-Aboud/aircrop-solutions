import React from 'react';
import {  Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
//<Drone className="w-6 h-6" />
const Footer = () => {
  return (
    <footer className="bg-[#0a1613] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              
              <span className="text-white text-xl font-semibold">AIRCROP</span>
            </div>
            
            <p className="text-white text-lg max-w-md">
              Harness the power of drones and AI like never before.
            </p>

            <div className="space-y-2">
              <p>contact@aircrop.com</p>
              <p>+213 05 12 34 56 78</p>
              <p>Random street, random zone, Algiers, Algeria</p>
            </div>
          </div>

          {/* Right side - Awards */}
          <div className="flex justify-end gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center">
                <div className="text-emerald-500">🏆</div>
                <div className="text-white ml-2">AgriTech</div>
              </div>
              <p className="text-sm mt-2">1st prize winners<br />in agritech 2024</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center">
                <div className="text-emerald-500">🚀</div>
                <div className="text-white ml-2">ALGERIA</div>
              </div>
              <p className="text-sm mt-2">2nd prize winners<br />in the ASC 2024</p>
            </div>

           
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a href="/privacy" className="text-emerald-500 hover:text-emerald-400">
                Privacy policy
              </a>
              <a href="/terms" className="text-emerald-500 hover:text-emerald-400">
                Terms of use
              </a>
            </div>

            <p className="text-gray-500">
              © 2024 Aircrop. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#twitter" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#linkedin" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#instagram" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;