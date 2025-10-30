import React from "react";
import extrasBg1 from "../assets/awardsBanner.svg";
import extrasBg2 from "../assets/FIFASound.svg";

export default function Extras() {
  return (
    <section
      className="px-4 py-10 md:px-10 lg:px-20 rounded-1xl shadow-lg"
      style={{ backgroundColor: "#184171" }}
    >
      <div className="max-w-6xl mx-auto space-y-6 md:flex md:space-y-0 md:gap-8">
        {/* Card 1 - FIFA Awards & Ceremonies */}
        <article
          className="relative flex-1 rounded-3xl overflow-hidden min-h-[260px] md:min-h-[300px] flex items-end
                     transition-all duration-500 transform hover:scale-[1.05]
                     border-2 border-transparent hover:border-[#C59A00] hover:shadow-[0_0_20px_#C59A00]/70"
          style={{
            backgroundImage: `url(${extrasBg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="fifa-awards-title"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          <div className="relative z-10 w-full p-6 md:p-8">
            <h3
              id="fifa-awards-title"
              className="text-xl md:text-2xl font-semibold text-white drop-shadow-md"
            >
              FIFA Awards & Ceremonies
            </h3>
            <p className="mt-2 text-base text-white/90">
              View the best moments of celebration.
            </p>

            <div className="mt-5">
              <a
                href="https://www.fifa.com/en/the-best-fifa-football-awards/2024" // <-- your external link
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="inline-block px-5 py-2.5 rounded-md font-medium text-white bg-[#C59A00]
                             shadow-md hover:brightness-95 hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C59A00]/50
                             transition-all duration-300"
                >
                  Explore Now
                </button>
              </a>
            </div>
          </div>
        </article>

        {/* Card 2 - FIFA Sound */}
        <article
          className="relative flex-1 rounded-3xl overflow-hidden min-h-[260px] md:min-h-[300px] flex items-end
                     transition-all duration-500 transform hover:scale-[1.05]
                     border-2 border-transparent hover:border-[#C59A00] hover:shadow-[0_0_20px_#C59A00]/70"
          style={{
            backgroundImage: `url(${extrasBg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-labelledby="fifa-sound-title"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          <div className="relative z-10 w-full p-6 md:p-8">
            <h3
              id="fifa-sound-title"
              className="text-xl md:text-2xl font-semibold drop-shadow-md"
              style={{ color: "#C59A00" }}
            >
              FIFA Sound
            </h3>
            <p className="mt-2 text-base text-white/90">
              Listen to the best beats from the loudest event.
            </p>

            <div className="mt-5">
              <a
                href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/fifa-sound" // <-- your external link
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="inline-block px-5 py-2.5 rounded-md font-medium text-white bg-[#C59A00]
                             shadow-md hover:brightness-95 hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C59A00]/50
                             transition-all duration-300"
                >
                  Listen Now
                </button>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
