import React, { useState, useEffect } from "react";
import video from "../assets/FifaWorldCupBanner.mp4";

export default function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-08T00:00:00");
    
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Countdown Box Component
  function CountdownBox({ value, label }) {
    return (
      <div className="flex flex-col items-center bg-black/60 px-3 sm:px-4 py-1 sm:py-2 rounded-lg mx-1 shadow-lg">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{value}</span>
        <span className="text-xs sm:text-sm md:text-base text-gray-300">{label}</span>
      </div>
    );
  }

  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div
        className="relative z-10 max-w-2xl px-4 animate-fade-in"
        style={{
          animation: "fadeIn 1s ease-out"
        }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Countdown to FIFA World Cup 2026
        </h1>

        {/* Scoreboard-style Countdown */}
        <div className="flex flex-wrap justify-center items-center mb-6 gap-2 max-w-xs sm:max-w-md md:max-w-full mx-auto">
          <CountdownBox value={countdown.days} label="Days" />
          <CountdownBox value={countdown.hours} label="Hours" />
          <CountdownBox value={countdown.minutes} label="Minutes" />
          <CountdownBox value={countdown.seconds} label="Seconds" />
        </div>

        <p className="text-white text-lg md:text-xl font-light mb-6">
          Experience the thrill. Follow every moment.
        </p>
        <a
          href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sv-gold text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition"
        >
          Explore Now
        </a>
      </div>

    </section>
  );
}