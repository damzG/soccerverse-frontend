import React, { useState, useEffect } from "react";

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/data/fixtures.json")
      .then((res) => res.json())
      .then((data) => setFixtures(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredFixtures =
    filter === "All"
      ? fixtures
      : fixtures.filter((match) => match.stage === filter);

  return (
    <div className="bg-[#184171] min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Fixtures & Results</h1>
        <p className="text-gray-300 mb-6">
          Stay updated on FIFA 2026 World Cup matches — from the group stage to
          the final.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["All", "Group Stage", "Knockout"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === type
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Fixture List */}
        <div className="grid gap-4">
          {filteredFixtures.map((match) => (
            <div
              key={match.id}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={match.flag}
                  alt="flag"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">{match.matchday}</p>
                  <p className="text-sm text-gray-300">{match.date}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold">{match.homeTeam} vs {match.awayTeam}</p>
                <p className="text-gray-300">
                  {match.homeScore !== null && match.awayScore !== null
                    ? `${match.homeScore} - ${match.awayScore}`
                    : "TBD"}
                </p>
              </div>
              <p className="text-sm text-gray-400">{match.stage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
