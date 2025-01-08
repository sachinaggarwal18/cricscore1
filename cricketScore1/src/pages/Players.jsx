import { useEffect, useRef, useState } from "react";
import Layout from "./Layout";
import cricketPlayers from "../data/playersStats";
import { cricketRankings } from "../data/rankingsData";
import gsap from "gsap";

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
  const [gender, setGender] = useState("men");
  const [format, setFormat] = useState("t20");
  const [role, setRole] = useState("batsman");

  const statsRef = useRef();
  const rankingRef = useRef();


  // useEffect(() => {
  //   if(category === "rankings"){ 
  //     gsap.to(rankingRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //       ease: "power3.out",
  //     });
  //   }
  // },[category])

  const handleSearch = () => {
    setQuery(searchQuery.trim());
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setQuery("");
  };

  const filteredPlayers = cricketPlayers.filter((player) => {
    if (!player.name) return false;
    return player.name.toLowerCase().includes(query.toLowerCase());
  });

  const rankings = cricketRankings[gender]?.[format]?.[role];

  return (
    <Layout>
      {/* stats  */}
      {category === "stats" && (
        <>
          <div className="w-full flex justify-center items-center">
            <div className="relative w-3/4 mt-5">
              <input
                className="shadow-lg border-2 border-gray-300 rounded-lg p-4 text-xl text-center mb-4 w-full pr-12 "
                type="text"
                placeholder="Search a player..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              {searchQuery && (
                <i
                  className="ri-close-line absolute right-4 top-8 transform -translate-y-1/2 text-gray-500 hover:text-red-500 text-xl cursor-pointer"
                  onClick={handleClearSearch}
                ></i>
              )}
            </div>
            <div className="p-4 rounded-lg cursor-pointer hover:bg-teal-100" onClick={handleSearch}>
              <i className="ri-search-line text-3xl text-teal-500"></i>
            </div>
          </div>

          {query && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className=" m-2 bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-700 shadow-lg rounded-lg p-5 "
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-teal-400 text-2xl font-bold flex items-center gap-2">
                          {player.name}
                          <img
                            className="h-6 w-6 rounded-full"
                            src={`https://flagcdn.com/w40/${countryCodes[player.team.toLowerCase()]}.png`}
                            alt=""
                          />
                        </h3>
                        <p className="text-lg text-gray-400 font-semibold">{player.team}</p>
                      </div>
                      <img
                        className="h-16 w-16 p-1 border-2 border-indigo-600 rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgeSwn9nUQR1scS4X9gjbMmlVUEKtOqVVJA_zAizSS5SCmT2p5KoWGKjuGwqc0V8K-X8&usqp=CAU"
                        alt="Player"
                      />
                    </div>
                    <div>
                      <p className="text-teal-400 text-lg">
                        Matches: <span className="text-gray-300">{player.stats.matches}</span>
                      </p>
                      <p className="text-teal-400 text-lg">
                        Runs: <span className="text-gray-300">{player.stats.runs}</span>
                      </p>
                      <p className="text-teal-400 text-lg">
                        Centuries: <span className="text-gray-300">{player.stats.centuries}</span>
                      </p>
                      <p className="text-teal-400 text-lg">
                        Wickets: <span className="text-gray-300">{player.stats.wickets}</span>
                      </p>
                      <p className="text-teal-400 text-lg">
                        Average: <span className="text-gray-300">{player.stats.average}</span>
                      </p>
                      <p className="text-teal-400 text-lg">
                        Strike Rate: <span className = "text-gray-300">{player.stats.strikeRate}</span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className = "text-xl p-3 text-red-500 text-center">No players found...</p>
              )}
            </div>
          )}
        </>
      )}

      {/* rankings  */}
      {category === "rankings" && (
        <div ref={rankingRef}>
          <div className="mb-10">
            <h1 className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-3xl font-bold p-3 text-center shadow-lg">
              Rankings
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <select
              className="shadow-lg border-2 border-blue-300 p-2 rounded-lg focus:ring-4 focus:ring-blue-300"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            <select
              className="shadow-lg border-2 border-blue-300 p-2 rounded-lg focus:ring-4 focus:ring-blue-300"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="t20">T20</option>
              <option value="odi">ODI</option>
              <option value="test">Test</option>
            </select>
            <select
              className="shadow-lg border-2 border-blue-300 p-2 rounded-lg focus:ring-4 focus:ring-blue-300"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="batsman">Batsman</option>
              <option value="bowler">Bowler</option>
              <option value="allRounder">All-Rounder</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rankings.map((player, index) => (
              <div
                key = {index}
                className={`p-4 m-2 border-2 rounded-lg shadow-lg ${
                  index < 3 ? "bg-gradient-to-r from-teal-200 to-green-300" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">#{index + 1}</span>
                  <img
                    className="w-10 h-6 rounded"
                    src={`https://flagcdn.com/w320/${countryCodes[player.country]}.png`}
                    alt="flag"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-xl font-bold text-blue-700">{player.name}</h3>
                  <p className="text-gray-600">Country: {player.country}</p>
                  <p className="text-gray-600">Rating: {player.rating}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
      )}
    </Layout>
  );
};

export default Players;
