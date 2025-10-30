// src/pages/Rankings/CleanSheets.jsx
import React, { useEffect, useState } from "react";
import RankingsNav from "./RankingsNav.jsx";

export default function CleanSheets() {
  const [keepers, setKeepers] = useState([]);

  useEffect(() => {
    fetch("/data/cleanSheets.json")
      .then((res) => res.json())
      .then((data) => setKeepers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#184171] min-h-screen">
      <div className="max-w-5xl mx-auto p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Most Clean Sheets</h1>
        <p className="text-gray-300 mb-6">
          Goalkeepers ranked by total clean sheets in FIFA World Cup 2026.
        </p>

        <RankingsNav />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keepers.map((p) => (
            <div
              key={p.id}
              className="bg-white/10 p-4 rounded-md hover:bg-white/20 transition"
            >
              <div className="flex items-center gap-3">
                <img src={p.flag} alt={p.country} className="w-8 h-5 rounded-sm" />
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-300">{p.country}</div>
                </div>
              </div>
              <div className="text-sv-gold mt-2 font-bold">Clean Sheets: {p.cleanSheets}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

