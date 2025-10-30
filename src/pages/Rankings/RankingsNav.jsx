// RankingsNav.jsx
/*
We use NavLink instead of Link because it gives us an active state automatically.
The isActive prop helps apply different styles to the current page.
aria-current="page" improves accessibility, telling screen readers which link is active.
 */


// src/pages/Rankings/RankingsNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function RankingsNav() {
  const linkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-md transition ${
      isActive
        ? "bg-sv-gold text-black font-semibold"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <nav className="flex gap-2 mb-6 bg-white/10 p-2 rounded-md">
      <NavLink to="/rankings" className={linkStyle}>World Rankings</NavLink>
      <NavLink to="/rankings/top-scorers" className={linkStyle}>Top Scorers</NavLink>
      <NavLink to="/rankings/top-assists" className={linkStyle}>Top Assists</NavLink>
      <NavLink to="/rankings/clean-sheets" className={linkStyle}>Clean Sheets</NavLink>
    </nav>
  );
}
