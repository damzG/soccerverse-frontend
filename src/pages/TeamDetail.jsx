// src/pages/TeamDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


export default function TeamDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [tRes, pRes] = await Promise.all([
          fetch("/data/teams.json"),
          fetch("/data/players.json")
        ]);
        const teams = await tRes.json();
        const allPlayers = await pRes.json();

        const found = teams.find(t => String(t.id) === String(id));
        if (!cancelled) {
          setTeam(found || null);
          setPlayers(allPlayers.filter(p => String(p.teamId) === String(id)));
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [id]);

  // Apply desired colors: bg-[#184171] and text-white to default messages
  if (loading) return <div className="p-6 bg-[#184171] text-white">Loading...</div>;
  if (!team) return (
    <div className="p-6 bg-[#184171] text-white">
      Team not found — 
      {/* Change link color for visibility against the dark background */}
      <Link to="/teams" className="text-sv-gold">Back to teams</Link> 
    </div>
  );

  return (
    // 1. Apply Background Color to the outermost container
    // 2. Apply Text Color to the outermost container (text-white)
    <div className="bg-[#184171] min-h-screen"> 
      <div className="max-w-4xl mx-auto p-6 text-white">
        
        {/* Top row: back controls + team header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            
            {/* Back button: text is white, background is translucent white */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Go back"
            >
              ← Back
            </button>

            {/* All Teams Link: Text is already black on gold, so no change needed */}
            <Link
              to="/teams"
              className="px-3 py-2 rounded-md bg-sv-gold text-black font-medium hover:brightness-95 transition"
            >
              All Teams
            </Link>
          </div>

          {/* Optional quick action: text is now white/light gray */}
          <div className="text-sm text-gray-300">Group {team.group} • {team.confederation}</div>
        </div>

        {/* Team header */}
        <div className="flex items-center gap-4 mb-6">
          <img src={team.flag || "/flags/default.png"} alt={`${team.name} flag`} className="w-16 h-16 object-cover rounded-md" />
          <div>
            {/* H1 Text: Change to white */}
            <h1 className="text-2xl font-bold text-white">{team.name}</h1>
            {/* Sub-text: Change to a light gray */}
            <div className="text-sm text-gray-300">Group {team.group} • {team.confederation}</div>
          </div>
        </div>

        {/* Players Section Header: Change to white */}
        <h2 className="text-xl font-semibold mb-3">Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {players.length ? players.map(p => (
            <div key={p.id} className="bg-white p-3 rounded shadow">
              {/* Player Name: Must be dark text on white card */}
              <div className="font-medium text-gray-900">{p.name}</div>
              {/* Player Detail: Must be dark text on white card */}
              <div className="text-sm text-gray-500">{p.position} • Goals: {p.goals}</div>
            </div>
          )) : <div className="text-gray-300">No players yet for this team.</div>} 
        </div>
      </div>
    </div>
  );
}