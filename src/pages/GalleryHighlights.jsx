import React, { useState, useEffect } from "react";

export default function GalleryHighlights() {
  const [media, setMedia] = useState([]);
  const [filter, setFilter] = useState("all"); // 👈 track selected filter (all | photos | videos)

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setMedia(data))
      .catch((err) => console.error(err));
  }, []);

  // Group by stage (Matchdays, Knockouts, etc.)
  const groupedMedia = media.reduce((acc, item) => {
    if (!acc[item.stage]) acc[item.stage] = [];
    acc[item.stage].push(item);
    return acc;
  }, {});

  // 🧠 Filter logic — only show what's selected
  const applyFilter = (items) => {
    if (filter === "photos") return items.filter((m) => m.type === "image");
    if (filter === "videos") return items.filter((m) => m.type === "video");
    return items; // "all"
  };

  return (
    <div className="bg-[#184171] min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Gallery & Highlights</h1>
            <p className="text-gray-300">
              Explore photos and video highlights from the FIFA 2026 tournament.
            </p>
          </div>

          {/* Watch on YouTube */}
          <a
            href="https://www.youtube.com/fifa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            🎥 Watch on YouTube
          </a>
        </div>

        {/* 🟨 Filter Buttons */}
        <div className="flex gap-3 mb-8">
          {[
            { label: "All", value: "all" },
            { label: "Photos", value: "photos" },
            { label: "Videos", value: "videos" },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-md font-medium transition
                ${
                  filter === value
                    ? "bg-sv-gold text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 🏆 Stage Sections */}
        {Object.entries(groupedMedia).map(([stage, items]) => {
          const filtered = applyFilter(items);
          if (!filtered.length) return null; // skip if empty after filtering

          return (
            <section key={stage} className="mb-12">
              <h2 className="text-xl font-semibold mb-4 text-sv-gold">{stage}</h2>

              <div
                className="
                  grid gap-4
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-3 
                  lg:grid-cols-4
                "
              >
                {filtered.map((m) => (
                  <div
                    key={m.id}
                    className="relative bg-white/10 rounded-xl overflow-hidden group hover:bg-white/20 transition"
                  >
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt={m.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <iframe
                        src={m.src}
                        title={m.title}
                        className="w-full h-48"
                        allowFullScreen
                      ></iframe>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-sm p-2 text-center">
                      {m.title}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
