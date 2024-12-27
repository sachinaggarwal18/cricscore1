import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [openDragDown, setOpenDragDown] = useState(false);

  return (

    <div className="h-[70px] bg-gradient-to-r from-green-500 via-teal-500 to-green-400 shadow-md fixed top-0 left-0 w-full z-10">

      {/* Container for Navbar */}
      <div className="flex justify-between items-center h-full px-4">

        {/* Logo Section */}    
        <Link to="/" className="text-2xl font-bold text-white">
          CricScore
        </Link>
        
        {/* Links Section */}
        <div className="flex gap-4">
          <Link
            className="text-sm font-medium text-white hover:text-teal-200 transition"
            to="/matches"
          >
            Matches
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-teal-200 transition"
            to="/players"
          >
            Players
          </Link>
          <Link
            className="text-sm font-medium text-white hover:text-teal-200 transition"
            to="/teams"
          >
            Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
