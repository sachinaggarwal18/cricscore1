import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropDown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  }

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (

    <div className="h-[70px] bg-gradient-to-r from-green-500 via-teal-500 to-green-400 shadow-md fixed top-0 left-0 w-full z-10">

      <div className="flex justify-between items-center h-full px-4">
        <Link to="/" className="text-xl font-bold text-white">CricScore</Link>

        {/* M, P, T div */}
        <div className="flex gap-3 font-semibold text-md">
          {/* matches */}
          <div className="relative dropdown-container">
              <button 
                className="text-white" 
                onClick={() => toggleDropDown("matches")}>
                Matches
              </button>
              {
                openDropdown ==="matches" && (
                  <div className="absolute bg-white rounded-md shadow-md mt-1">
                    <Link to="/matches/archives" className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100">Archives</Link>
                    <Link to="/matches/recent" className=" border-b-2 border-gray-100  m-2  block px-4 py-2 text-green-600 hover:bg-green-100">Recent</Link>
                    <Link to="/matches/live" className="border-b-2 border-gray-100  m-2  block px-4 py-2 text-green-600 hover:bg-green-100">Live</Link>
                    <Link to="/matches/upcoming" className=" m-2  block px-4 py-2 text-green-600 hover:bg-green-100">Upcoming</Link>
                  </div>
                )
              }
          </div>

          {/* players */}
          <div className="relative dropdown-container">
              <button 
                className="text-white" 
                onClick={() => toggleDropDown("players")}>
                Players
              </button>
              {
                openDropdown === "players" && (
                  <div className="absolute bg-white rounded-md shadow-md mt-2 right-1">
                    <Link to="/players/stats" className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100">Stats</Link>
                    <Link to="/players/rankings" className="m-2 block px-4 py-2 text-green-600 hover:bg-green-100">Rankings</Link>
                  </div>
                )
              }
          </div>

          {/* teams */}
          <div className="relative dropdown-container">
              <button 
                className="text-white" 
                onClick={() => toggleDropDown("teams")}>
                Teams
              </button>
              {
                openDropdown === "teams" && (
                  <div className="absolute bg-white rounded-md shadow-md mt-1 right-[0.05rem]">
                    <Link to="/teams/men" className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100">Men</Link>
                    <Link to="/teams/women" className="block border-b-2 border-gray-100 m-2 px-4 py-2 text-green-600 hover:bg-green-100">Women</Link>
                    <Link to="/teams/rankings" className="m-2 block px-4 py-2 text-green-600 hover:bg-green-100">Rankings</Link>
                  </div>
                )
              }
          </div>

            </div>
        </div>
    </div>
  );
};

export default Navbar;
