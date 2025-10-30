import React from "react";
import mobileSvg from "../assets/AboutFIFA.svg";
import desktopSvg from "../assets/AboutFIFA.svg";

/* Flag imports (recommended) */
import flagUS from "../assets/USAFlag.svg";
import flagCA from "../assets/CanadaFlag 1.svg";
import flagMX from "../assets/MexicoFlag 1.svg";

export default function AboutFIFASection({
  heading = "What is FIFA?",
  body =
    "Founded in 1904, the Federation Internationale Football Association (FIFA) governs global football tournaments, FIFA 26 World Cup - the biggest sporting event.",
  // primaryCta = "Get started",
  secondaryCta = "Learn more",
  className = "",
}) {
  return (
    <section className={`max-w-6xl mx-auto px-4 py-10 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT: text */}
        <div className="order-1 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{heading}</h2>
          <p className="text-gray-700 mb-6">{body}</p>

          {/* Hosts row: placed above the CTA buttons */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-600 mb-3">
              2026 World Cup Hosts
            </h3>

            <div className="flex items-center gap-4">
              {/* Each flag is a small rounded square with label */}
              <figure className="flex items-center gap-3">
                <img
                  src={flagUS}
                  alt="United States flag"
                  className="w-10 h-10 rounded-sm shadow-sm"
                  draggable="false"
                />
                {/* <figcaption className="text-sm">USA</figcaption> */}
              </figure>

              <figure className="flex items-center gap-3">
                <img
                  src={flagCA}
                  alt="Canada flag"
                  className="w-10 h-10 rounded-sm shadow-sm"
                  draggable="false"
                />
                {/* <figcaption className="text-sm">Canada</figcaption> */}
              </figure>

              <figure className="flex items-center gap-3">
                <img
                  src={flagMX}
                  alt="Mexico flag"
                  className="w-10 h-10 rounded-sm shadow-sm"
                  draggable="false"
                />
                {/* <figcaption className="text-sm">Mexico</figcaption> */}
              </figure>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* <button
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition"
              type="button"
            >
              {primaryCta}
            </button> */}

            <button
              className="bg-sv-gold text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
              type="button"
            >
              {secondaryCta}
            </button>
          </div>
        </div>

        {/* RIGHT: responsive image using <picture> */}
        <div className="order-2 md:order-2 flex justify-center">
          <picture>
            <source srcSet={desktopSvg} media="(min-width: 768px)" />
            <img
              src={mobileSvg}
              alt={heading}
              className="w-4/5 md:w-3/4 lg:w-2/3 h-auto mx-auto"
              loading="lazy"
              draggable="false"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
