import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";
import footerLogo from "../assets/WorldCupLogoNav.svg";
import cocaColaLogo from "../assets/CocaColaLogo.svg";
import googlePlayBadge from "../assets/GooglePlayStore Icon.svg";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-[#193366] flex flex-col items-center text-center">
      {/* Top bar */}
      <div className="w-full h-8 md:h-12 bg-[#000033]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl w-full px-6 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">
          
          {/* ===== LOGO SECTION ===== */}
          <div className="flex flex-col items-center md:items-start gap-3 md:w-1/3">
            <img
              src={footerLogo}
              alt="Logo"
              className="h-14 md:h-16 object-contain"
            />
            <div>
              <p className="text-base font-medium text-[#E6EEF8]">SoccerVerse</p>
              <p className="text-sm text-[#BFD6F0]">Enjoy football at its best ⚽</p>
            </div>
          </div>

          {/* ===== CONTACT INFO ===== */}
          <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3">
            <h3 className="text-base font-semibold text-[#E6EEF8]">Contact</h3>
            <address className="not-italic text-sm text-[#BFD6F0] space-y-1">
              <div>123 Example Street</div>
              <div>City, State, ZIP</div>
              <div>
                Phone:{" "}
                <a href="tel:+1234567890" className="underline">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                Email:{" "}
                <a href="mailto:hello@example.com" className="underline">
                  hello@example.com
                </a>
              </div>
            </address>
          </div>

          {/* ===== SOCIAL + COPYRIGHT ===== */}
          <div className="flex flex-col items-center md:items-start gap-3 md:w-1/3">
            <h3 className="text-base font-semibold text-[#E6EEF8]">
              Follow us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-white/10"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ===== FIFA PARTNERS SECTION ===== */}
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-base md:text-lg font-semibold text-[#E6EEF8] mb-3">
            FIFA Partners
          </h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <img
              src={cocaColaLogo}
              alt="Coca-Cola"
              className="h-10 md:h-12 object-contain"
            />
            {/* Add more partner logos here later */}
          </div>
        </div>

        {/* ===== GOOGLE PLAY BUTTON ===== */}
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-12 md:h-14 object-contain hover:scale-105 transition-transform"
            />
          </a>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="mt-8 text-xs md:text-sm text-[#BFD6F0] text-center">
          <p>© {new Date().getFullYear()} SoccerVerse. All rights reserved.</p>
          <p className="mt-1">Made with ♥ for the love of football.</p>
        </div>
      </div>
    </footer>
  );
}
