import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutFIFASection from "./components/AboutFIFASection";
import TeamDetail from "./pages/TeamDetail";
import Rankings from "./pages/Rankings/Rankings";
import TopScorers from "./pages/Rankings/TopScorers";
import TopAssists from "./pages/Rankings/TopAssists";
import CleanSheets from "./pages/Rankings/CleanSheets";
import GalleryHighlights from "./pages/GalleryHighlights";
import Fixtures from "./pages/Fixtures";
import Extras from "./components/Extras";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutFIFASection />
                <Extras />
                {/* <Home /> */}
              </>
            }
          />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetail />} />

          {/* Rankings routes */}
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/rankings/top-scorers" element={<TopScorers />} />
          <Route path="/rankings/top-assists" element={<TopAssists />} />
          <Route path="/rankings/clean-sheets" element={<CleanSheets />} />

          {/* Gallery & Highlights */}
          <Route path="/gallery" element={<GalleryHighlights />} /> 

            {/* Fixture List */}
          <Route path="/fixtures" element={<Fixtures />} />

          {/* Contact Form */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
