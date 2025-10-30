import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [confFilter, setConfFilter] = useState("All");

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/data/teams.json");
        if (!res.ok) throw new Error("Failed to load teams.json");
        const data = await res.json();
        if (!cancelled) setTeams(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  // Compute filter options from data
  const confOptions = ["All", ...Array.from(new Set(teams.map(t => t.confederation))).sort()];

  // Filtered list
  const filtered = confFilter === "All" ? teams : teams.filter(t => t.confederation === confFilter);

  // Apply desired colors: bg-[#184171] and text-[#FFFFFF] (text-white)
  
  // NOTE: You must define custom colors (like sv-dark) in your tailwind.config.js 
  // or use the arbitrary value notation `text-[#FFFFFF]` and `bg-[#184171]`.
  // For simplicity and adherence to the request, we'll use arbitrary values 
  // and the standard `text-white`.

  if (loading) return <div className="p-6 text-white bg-[#184171]">Loading teams…</div>;
  if (error) return <div className="p-6 text-red-400 bg-[#184171]">Error: {error}</div>;


  return (
    // 1. Apply Background Color to the outermost container
    // 2. Apply Text Color to the outermost container (text-white)
    <div className="bg-[#184171] min-h-screen">
        <div className="max-w-6xl mx-auto p-6 text-white">
        
        {/* Update H1 to use text-white instead of a dark color class */}
        <h1 className="text-3xl font-bold mb-4">Qualified Teams</h1> 

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
                {/* Update Label text to use text-white */}
                <label className="text-sm font-medium">Filter:</label> 
                
                {/* Select element should retain default background for visibility */}
                <select
                    value={confFilter}
                    onChange={(e) => setConfFilter(e.target.value)}
                    // Kept bg-white but added text-gray-900 to ensure text is visible 
                    // within the white select box, as the parent is now white text.
                    className="px-3 py-2 border rounded-md bg-white text-gray-900" 
                >
                    {confOptions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
            
            {/* Update helper text to use text-white or a light shade */}
            <div className="text-sm text-gray-300">{filtered.length} teams shown</div> 
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((team) => (
            <Link
                key={team.id}
                to={`/teams/${team.id}`}
                // Keep the card background white for contrast and better flag visibility
                className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
                <img
                    src={team.flag}
                    alt={team.name}
                    className="w-16 h-12 object-cover rounded mb-3 mx-auto"
                />
                
                {/* Update card text to a dark color to be readable on the white card background */}
                <h2 className="text-lg font-semibold text-center text-gray-900">{team.name}</h2>
                <p className="text-sm text-gray-500 text-center">{team.confederation}</p>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}