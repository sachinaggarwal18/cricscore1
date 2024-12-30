import { useState } from "react";
import Layout from "./Layout";
import cricketPlayers from "../data/playersStats";
import { cricketRankings } from "../data/rankingsData";

const countryCodes = {
  India: "in",
  Australia: "au",
  Bangladesh: "bd",
  Zimbabwe: "zw",
  Pakistan: "pk",
  Afghanistan: "af",
  England: "gb",
  "New Zealand": "nz",
  "South Africa": "za",
};

const Players = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");

  // Display players based on the category for "rankings"
  const [gender, setGender] = useState("men");
  const [format, setFormat] = useState("t20");
  const [role, setRole] = useState("batsman");


  // Handle search when the icon is clicked
  const handleSearch = () => {
    setQuery(searchQuery.trim());
  };

  // Filter players based on the search query
  const filteredPlayers = cricketPlayers.filter((player) => {
    if (!player.name) return false; // Ensure player has a name
    return player.name.toLowerCase().includes(query.toLowerCase());
  });

   // Clear search bar if no players are found
   const handleClearSearch = () => {
    setSearchQuery("");
    setQuery("");
  };

  const rankings = cricketRankings[gender]?.[format]?.[role];
  

  return (
    <Layout>
      {category === "stats" && (
        <>

          {/* Search input */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-3/4 mt-5">
              <input
                className="shadow-lg border-2 border-gray-300 rounded-lg p-4 text-xl text-center mb-4 w-full pr-12"
                type="text"
                placeholder="Search player"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Clear icon */}
              {searchQuery && (
                <i
                  className="ri-close-line absolute right-4 top-8 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-xl cursor-pointer"
                  onClick={handleClearSearch}
                ></i>
              )}
            </div>
            {/* Search icon */}
            <div className="p-4 rounded-lg cursor-pointer" onClick={handleSearch}>
              <i className="ri-search-line text-3xl text-teal-500"></i>
            </div>
          </div>


          {/* Display players */}
          {query && (
            <div>
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div key={player.id} className="border-2 border-gray-200 shadow-lg rounded-md p-5 m-3">
                    {/* Player name and flag */}
                    <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{countryFlags[player.country]}</span>
                      <h3 className="text-teal-400 text-2xl font-semibold">{player.name}
                        <span className="text-xl font-semibold">({player.team})</span> 
                      </h3>
                    </div>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Matches: <span className="text-gray-400">{player.stats.matches}</span>
                    </h3>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Runs: <span className="text-gray-400">{player.stats.runs}</span>
                    </h3>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Centuries: <span className="text-gray-400">{player.stats.centuries}</span>
                    </h3>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Wickets: <span className="text-gray-400">{player.stats.wickets}</span>
                    </h3>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Average: <span className="text-gray-400">{player.stats.average}</span>
                    </h3>
                    <h3 className="text-teal-400 text-xl font-semibold">
                      Strike Rate: <span className="text-gray-400">{player.stats.strikeRate}</span>
                    </h3>
                  </div>
                ))
              ) : (
                  <p className="text-xl p-3 text-red-500">No players found...</p>
              )}
            </div>
          )}
        </>
      )}

      {/* Rankings  */}
      {
        category === "rankings" && (
          <>
            <div className="mb-5">
              <h1 className="w-full bg-gray-100 text-3xl font-bold p-3 text-center">Rankings</h1>
            </div>

            {/* filters  */}
            <div className=" mb-10 m-4 p-2 items-center flex gap-7">
              {/* gender */}
              <select 
                className="shadow-lg border-2 border-blue-300 p-2 border-gray-300 rounded-lg p-2"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
               {/* format */}
              <select 
                className="shadow-lg border-2 border-blue-300 p-2 border-gray-300 rounded-lg p-2"
                value={format}
                onChange={(e) => setFormat(e.target.value)}>
                <option value="t20">T20</option>
                <option value="odi">Odi</option>
                <option value="test">Test</option>
              </select>
               {/* role */}
               <select 
                className="shadow-lg border-2 border-blue-300 p-2 border-gray-300 rounded-lg p-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}>
                <option value="batsman">Batsman</option>
                <option value="bowler">Bowler</option>
                <option value="allRounder">All Rounder</option>
              </select>
            </div>

            {/* rankings table  */}
            <div className="leaderboard">
              {rankings.map((player, index) => (
                <div
                  key={index}
                  className={` p-4 m-2 border-2 rounded-md shadow-lg ${index < 3 ? 'bg-teal-100' : ''}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-teal-500">{index + 1}</span>
                    <img
                    className="w-8 h-6 rounded"
                    src={`https://flagcdn.com/w320/${countryCodes[player.country]}.png`}
                    alt={`${player.country} flag`}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  </div>

                  {/* country,rating,flag  */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-500">Country: {player.country}</p>
                      <p className="text-gray-500">Rating: {player.rating}</p>
                    </div>
                    <div className="p-1">
                  <h3 className="text-blue-500 text-xl font-semibold">{player.name}</h3>
                    </div>
                  </div>
                  
                </div>
              ))}
          </div>

          </>
      )}

    </Layout>
  );
};

export default Players;
