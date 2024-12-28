import Scorecard from "../components/Scorecard";
import Layout from "./Layout";
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-4xl">
           
          {/* Background */}
          <div className="-mt-2 bg-cover bg-center bg-no-repeat h-80 rounded-lg shadow-lg relative" style={{ backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/564/701/desktop-wallpaper-wonderful-cricket-ground-stadium.jpg')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl">

              <Typewriter
                words={[
                  "Welcome to CricScore",
                  "Real-time Scorecards",
                  "Stay Updated with News",
                  "Players Stats",
                  "Stay Tuned for More...",
                ]}
                loop
                typeSpeed={110}
                deleteSpeed={30}
                delaySpeed={1000}
                shoesCursor={true}
              />
             
            </div>
          </div>

          {/* Scorecard Section */}
          <div className="mt-4">
            <Scorecard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

