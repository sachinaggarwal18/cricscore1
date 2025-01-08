import React, { useEffect, useState } from 'react'

const NewsUpdates = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const url = "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e700f79c3emsh0e5f013b052424fp1cdb75jsn619fb63c6c1d",
      "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  useEffect(() => {

    async function fetchNews() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();

        const stories = data.storyList
          .filter((item) => item.story)
          .map((item) => item.story);

        setNews(stories);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  },[])
  console.log(news);

  if (loading) {
    return <p className="text-center mt-10">Loading news...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Error fetching news: {error}
      </p>
    );
  }

  return (      
    <div className="text-center mt-10">

      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold relative mb-12">
          News Updates
          <svg
            className="absolute left-1/2 -translate-x-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="20"
            viewBox="0 0 200 20"
            fill="none"
          >
            <path
              d="M10 15 Q100 0 190 15"
              stroke="#FFD700"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </h1>
      </div>

      {/* News cards*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            news.map((article, index) => (
              <div key={index}
              className="bg-white border-2 border-gray-400 rounded-lg shadow-lg p-4 m-5">

                {/* image  */}
                <div className='h-40 w-full'>
                <img
                    src={article.coverImage?.source || "https://via.placeholder.com/150"}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback for broken images.
                    alt={article.coverImage?.caption || "News Image"}
                    className="shadow-lg w-full h-full object-cover rounded-lg"
                />


                </div>

                {/* news content  */}
                <div className='mt-4'>
                  <h1>{article.hline || "no title"}</h1>
                  <p className="text-md text-gray-600">
                    {article.intro || "No Description"}
                  </p>

                  <a
                    href={article.url || "#"} // Adjusted property for the article link.
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-2 text-blue-500"
                    >
                        Tap to read more
                </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default NewsUpdates
