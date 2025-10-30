/**
 * Summary of the complete project (Single Page Application)
 Page Components
 Home, Teams, TeamDetail, Rankings, TopScorers, TopAssists, CleanSheets, Fixtures,
 GalleryHighlights, Contact 

 Reusable UI Component
 Navbar, Hero, RakingsNav, Footer
 Stateless functional components using props and hooks

 Routing System
 react-router-dom with <BrowserRouter></BrowserRouter>, <Routes>, <Route></Route> to handle navigation

 Styling System
 Built entirely with Tailwind CSS utility classes, responsive design and dark themes

 Data-driven UI
 JSON files (fixtures.json, scorers.json) simulate backend data

 Tailwind CSS Common Classes
 Layout & Spacing
 Margins/Padding: m-4, mt-8, px-6, py-10
 Flexbox: flex, justify-center, items-center, flex-col, flex-wrap
 Grid: grid, grid-cols-1,  md:grid-cols-3, gap-4
 Width & Height: w-full, h-screen, max-w-7xl
 Positioning: relative, absolute, fixed, top-0, z-50

 Typography & Colors
 Font size: text-sm, text-base, text-2xl, text-4xl
 Font weight: font-medium, font-semibold, font-bold
 Text color: text-white, text-[#BFD6F0]
 Background: bg-[#193366], bg-blue-900, bg-gradient-to-r
 Opacity: bg-white/10, text-black/70

 Effects & Borders
 Rounded Corners: rounded-md, rounded-2xl
 Shadow: shadow-md, shadow-lg
 Hover & Transition: hover:bg-white/10, transition-all-duration-300
 Border: border, border-gray-300, border-t-2

 Responsive Design
 sm: >=640px    sm:text-lg
 md: >= 768px   md:grid-cols-2
 lg: >= 1024px   lg:px-20
 xl:  >= 1280px  xl:text-3xl

 Framer Motion
 <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="rounded-2xl shadow-lg bg-[#001F3F]"
>

Functional Components - Modern hook-based approach
Hooks - useState, useEffect = manage state and lifecycle
Props - <Card title="Matchday 1"/> - Pass data btw components
Conditional Rendering - {showScore && <p>{score}</p>} - Display Logic
Mapping JSON Data - {data.map((item) => (...))} - Render lists dynamically
Router - <Route path="/teams/:id" element={<TeamDetail />} /> - SPA navigation
Reusability - RankingsNav, Footer - Component composition
JSX Rules - Return single parent element. use {} for logic

Ln4NbqEozUH7CJ3U mongoDB password username - damola

After creating backend folder
npm install express mongoose dotenv cors nodemon
express -> handles API routes
mongoose -> connects and works with MongoDB
dotenv -> loads environment variables
cors -> allows frontend to talk to backend
nodemon -> auto restarts during 

Frontend: Netlify
Backend: Render

 */