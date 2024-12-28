import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Matches from "./pages/Matches";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* matches */}
          <Route path="/matches" element={<Matches />} />
          <Route path="/matches/archives" element={<Matches category="archives" />} />
          <Route path="/matches/recent" element={<Matches category="recent" />} />
          <Route path="/matches/live" element={<Matches category="live" />} />
          <Route path="/matches/upcoming" element={<Matches category="upcoming" />} />

          {/* players */}
          <Route path="/players" element={<Players />} />
          <Route path="/players/stats" element={<Players category="stats" />} />
          <Route path="/players/rankings" element={<Players category="rankings" />} />

          {/* teams  */}
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/men" element={<Teams category="men"/>} />
          <Route path="/teams/women" element={<Teams category="women" />} />
          <Route path="/teams/rankings" element={<Teams category="rankings" />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
