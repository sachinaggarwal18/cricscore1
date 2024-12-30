import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scorecardData } from "../data/scorecardData";

const Scorecard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const countryCodes = {
    India: "in",
    Australia: "au",
    Bangladesh: "bd",
    Zimbabwe: "zw",
    Pakistan: "pk",
    Afghanistan: "af",
    England: "gb",
    "South Africa": "za",
  };

  return (
    <div className="relative text-center">
      {/* Section Title with Curved Stroke */}
      <h1 className="text-4xl font-bold relative mb-12">
        Ongoing Matches
        <svg
          className="absolute  left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="20"
          viewBox="0 0 200 20"
          fill="none"
        >
          <path
            d="M10 15 Q100 0 190 15"
            stroke="teal"
            strokeWidth="4"
            fill= "none"
          />
        </svg>
      </h1>

      {/* Scorecard Slider */}
      <div className="m-8 mt-6 p-6 border border-teal-500 bg-opacity-80 rounded-lg shadow-lg">
        <Slider {...settings}>
          {scorecardData.map((match) => (
            <div key={match.id} className="p-4">
              
              {/* Match Title */}
              <h3 className="p-2 text-2xl font-bold mb-4">
                {match.team1.toUpperCase()} vs {match.team2.toUpperCase()}
              </h3>

              {/* Team 1 and Team 2 Scores */}
              <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Team 1 Score */}
                <div className="flex items-center gap-2">
                  <img
                    className="w-8 h-6 rounded"
                    src={`https://flagcdn.com/w320/${countryCodes[match.team1].toLowerCase()}.png`}
                    alt={`${match.team1} flag`}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="font-semibold text-center sm:text-left">
                    <span className="p-1 text-teal-600 text-lg font-semibold">
                      {match.team1}:
                    </span>
                    {match.score1}
                  </div>
                </div>

                {/* Team 2 Score */}
                <div className="flex items-center gap-2">
                  <img
                    className="w-8 h-6 rounded"
                    src={`https://flagcdn.com/w320/${countryCodes[match.team2].toLowerCase()}.png`}
                    alt={`${match.team2} flag`}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="font-semibold text-center sm:text-left">
                    <span className="p-1 text-teal-600 text-lg font-semibold">
                      {match.team2}:
                    </span>
                    {match.score2}
                  </div>
                </div>
              </div>

              {/* Match Result */}
              <p className="font-bold">
                Result:{" "}
                <span className="text-gray-400 font-medium">{match.result}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Scorecard;
