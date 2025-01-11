import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [username, setUsername] = useState(null); // Track username state

  const toggleDropDown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

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

  // Simulate checking user login (fetch from localStorage or API)
  useEffect(() => {
    const token = localStorage.getItem("token"); // Check if the user is logged in
    if (token) {
        const storedUsername = localStorage.getItem("username"); // Replace with your logic to fetch username
        console.log("Stored username:", storedUsername); // Debug the stored value
        setUsername(storedUsername || "User"); 
    }
}, []);


  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <div className="h-[70px] bg-gradient-to-r from-green-500 via-teal-500 to-green-400 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center h-full px-4">
        <Link to="/" className="text-xl font-bold text-white">
          <img className="h-12 w-full rounded-xl" src="../logo.png" alt="Logo" />
        </Link>

        {/* M, P, T div */}
        <div className="flex gap-3 font-semibold text-md">
          {/* Matches */}
          <div className="relative dropdown-container">
            <button className="text-white" onClick={() => toggleDropDown("matches")}>
              Matches
            </button>
            {openDropdown === "matches" && (
              <div className="absolute bg-white rounded-md shadow-md mt-1">
                <Link
                  to="/matches/archives"
                  className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Archives
                </Link>
                <Link
                  to="/matches/recent"
                  className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Recent
                </Link>
                <Link
                  to="/matches/live"
                  className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Live
                </Link>
                <Link
                  to="/matches/upcoming"
                  className="m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Upcoming
                </Link>
              </div>
            )}
          </div>

          {/* Players */}
          <div className="relative dropdown-container">
            <button className="text-white" onClick={() => toggleDropDown("players")}>
              Players
            </button>
            {openDropdown === "players" && (
              <div className="absolute bg-white rounded-md shadow-md mt-2 right-1">
                <Link
                  to="/players/stats"
                  className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Stats
                </Link>
                <Link
                  to="/players/rankings"
                  className="m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Rankings
                </Link>
              </div>
            )}
          </div>

          {/* Teams */}
          <div className="relative dropdown-container">
            <button className="text-white" onClick={() => toggleDropDown("teams")}>
              Teams
            </button>
            {openDropdown === "teams" && (
              <div className="absolute bg-white rounded-md shadow-md mt-1 right-[0.05rem]">
                <Link
                  to="/teams/men"
                  className="border-b-2 border-gray-100 m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Men
                </Link>
                <Link
                  to="/teams/women"
                  className="block border-b-2 border-gray-100 m-2 px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Women
                </Link>
                <Link
                  to="/teams/rankings"
                  className="m-2 block px-4 py-2 text-green-600 hover:bg-green-100"
                >
                  Rankings
                </Link>
              </div>
            )}
          </div>

          {/* Profile Section */}
          <div className="relative dropdown-container">
            {username ? (
              <button
                className="text-white bg-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold"
                onClick={() => toggleDropDown("profile")}
              >
                {username[0].toUpperCase()}
              </button>
            ) : (
              <Link
                to="/user/login"
                className="text-white bg-green-700 px-4 py-2 rounded-md hover:bg-green-600"
              >
                Login
              </Link>
            )}
            {openDropdown === "profile" && (
              <div className="absolute bg-white rounded-md shadow-md mt-2 right-0">
                <button
                  onClick={logoutHandler}
                  className="m-2 block px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
