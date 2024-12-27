import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Scorecard = () => {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const scorecardData = [
    {
      id: 1,
      team1: "India",
      score1: "386/6 (50 overs)",
      team2: "Australia",
      score2: "300/10 (48.5 overs)",
      result: "India win by 86 runs",
    },
    {
      id: 2,
      team1: "Bangladesh",
      score1: "178/6 (20 overs)",
      team2: "Zimbabwe",
      score2: "123/10 (20 overs)",
      result: "Bangladesh win by 45 runs",
    },
    {
      id: 3,
      team1: "Pakistan",
      score1: "287/9 (50 overs)",
      team2: "Afghanistan",
      score2: "288/4 (48 overs)",
      result: "Afghanistan win by 6 wickets",
    },
    {
      id: 4,
      team1: "England",
      score1: "298/7 (50 overs)",
      team2: "South Africa",
      score2: "299/6 (49.2 overs)",
      result: "South Africa win by 4 wickets",
    },
  ];

  return (
    <div className="mt-15 ">
      <h2 className="text-3xl font-bold text-center mb-6">Live Scores</h2>
      <div className="m-8 p-6 bg-green-300 bg-opacity-80 border rounded-lg shadow-lg">
        <Slider {...settings}>
          {scorecardData.map((match) => (
            <div key={match.id} className="p-4">
              <h3 className="text-xl font-bold mb-4">
                {match.team1} vs {match.team2}
              </h3>
              <div className="mb-2 p-1 flex items-center gap-2">
                <div>
                  <img
                    className="w-6 h-4 rounded"
                    src={`https://countryflagsapi.com/png/${match.team1.toLowerCase()}`}
                    alt={`${match.team1} flag`}
                  />
                </div>
                <div className="font-semibold">
                  <span className="font-semibold">{match.team1}:</span>{" "}
                  {match.score1}
                </div>
              </div>
              <div className="mb-2 p-1 flex items-center gap-2">
                <div>
                  <img
                    className="w-6 h-4 rounded"
                    src={`https://countryflagsapi.com/png/${match.team2.toLowerCase()}`}
                    alt={`${match.team2} flag`}
                  />
                </div>
                <div className="font-semibold">
                  <span className="font-semibold">{match.team2}:</span>{" "}
                  {match.score2}
                </div>
              </div>
              <p className="font-bold">
                Result: <span className="font-semibold">{match.result}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Scorecard;
