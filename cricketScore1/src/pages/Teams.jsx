import { useEffect, useState } from "react";
import Layout from "./Layout"


const Teams = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [gender, setGender] = useState("men");
  const [format, setFormat] = useState("test");


  const API_URLS = {
    men:{
      test: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/1",
      odi: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/2",
      t20: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/3",
    },
    women: {
      test: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/4",
      odi: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/5",
      t20: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/iccstanding/team/matchtype/6",
    },
  }

  const API_OPTIONS = {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "e700f79c3emsh0e5f013b052424fp1cdb75jsn619fb63c6c1d",
      "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
    }
  };

  const fetchData  = async () => {
    try{
      setLoading(true);
      setError(null);

      const url = API_URLS[gender][format];
      if(!url){
        throw new Error("Invalid API URL");
      }

    const response = await fetch(url, API_OPTIONS);
    if(!response.ok){
      throw new Error("Failed to fetch data");
    }

        const data = await response.json();
        console.log(data);
        setData(data.values || []);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchData();
  },[gender, format]);


    return (
      <Layout>

          <div className="p-4">
            <h1 className="text-2xl text-center font-bold mb-5">ICC Team Rankings </h1>

            {/* Select options for Gender and Format */}
            <div className="flex justify-center gap-5">
              <div>
                <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-2 rounded-md border-2" >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </select>
              </div>

              <div>
              <select
              value={format}
              onChange={(e) => setFormat(e.target.value)} 
              className="p-2 rounded-md border-2" >
                <option value="test">Test</option>
                <option value="odi">ODI</option>
                <option value="t20">T20</option>
                </select>
              </div>
            </div>

            {loading ? (
              <p className="mt-5 text-blue-400 text-center text-xl">Loading data...</p>
            ): error ? (
              <p className="mt-5 text-2xl text-center text-red-500">{error}</p>
            ): 
            (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {
                data.map((team, index) => (
                <div key = {index}                            className = {`flex items-center gap-4 p-4 border-2 rounded-md shadow-lg ${index < 3 ? 'bg-teal-100' : 'bg-gray-50'}`}
                >
                    <img src={team.value[1] ? `https://www.cricbuzz.com/a/img/v1/50x50/i1/c${team.value[1]}.png` : '/fallback-image.png'}
                    alt={`${team.value[2] || 'Unknown'} flag`}
                    className="w-12 h-12 rounded-full"
                    />
                      <div className="p-1">
                        <h2 className="text-xl font-bold">{team.value[2]}</h2>
                        <p className="text-gray-600">Rank: {team.value[0]}</p>
                        <p className="text-gray-600">PCT: {team.value[3]}</p>
                      </div>
                    </div>
                    
                ))}
            </div>

            )}

          </div>
          
      </Layout>
    )
  }
  
  export default Teams
  