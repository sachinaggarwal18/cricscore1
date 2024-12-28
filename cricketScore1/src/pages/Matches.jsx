import { useEffect, useState } from "react";
import Layout from "./Layout"
import { archivedMatches, liveMatches, recentMatches, upcomingMatches
 } from '../data/matchesData'
import { Link } from "react-router-dom";

const Matches = ({category}) => {

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMatches = () => {
        let matchesData = [];

        if(category === 'recent') {
            matchesData = recentMatches;
        }else if(category === 'archives') {
            matchesData = archivedMatches;
        }else if(category === 'live') {
            matchesData = liveMatches;
        }
        else if(category === 'upcoming') {
            matchesData = upcomingMatches;
        }
        setMatches(matchesData);
        setLoading(false);
    }
      fetchMatches();
    
  },[category]);

    return (

      <Layout>
         <div className="h-screen p-4">
          <h1 className="p-3 text-3xl font-bold mb-3">{category.charAt(0).toUpperCase() + category.slice(1)} Matches</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="p-4 bg-white rounded-md">
              {matches.map((match) => (
                <div className="mb-3 shadow-md rounded-md p-4" key={match.id}>
                  <Link className="text-xl text-teal-600 font-semibold ">{match.team1.toUpperCase()} vs {match.team2.toUpperCase()}</Link>
                  <p className="text-md text-gray-400">
                    Date: {match.date} | Time: {match.time}
                  </p>
                  <div className="text-md text-gray-500 mb-3">{match.result}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    )
  }
  
  export default Matches
  