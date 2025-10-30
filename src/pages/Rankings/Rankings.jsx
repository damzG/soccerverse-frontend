// src/pages/Rankings/Rankings.jsx
import React, { useEffect, useState } from "react";
import RankingsNav from "./RankingsNav.jsx";

export default function Rankings() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/data/rankings.json")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#184171] min-h-screen">
      <div className="max-w-5xl mx-auto p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Men’s World Rankings</h1>
        <p className="text-gray-300 mb-6">
          FIFA world rankings for all 210 football countries.
        </p>

        {/* Navigation between ranking subpages */}
        <RankingsNav />

        <div className="overflow-x-auto bg-white/10 rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/20 text-sm uppercase">
              <tr>
                <th className="p-3">Rank</th>
                <th className="p-3">Country</th>
                <th className="p-3">Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-white/10 hover:bg-white/10"
                >
                  <td className="p-3 font-semibold">{t.rank}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={t.flag}
                      alt={t.country}
                      className="w-6 h-4 rounded-sm"
                    />
                    {t.country}
                  </td>
                  <td className="p-3">{t.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
