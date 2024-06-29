import { useState, useEffect } from "react";
import { Body, Footer, SideBar } from "./components/index";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

function App() {
  const [showSide, setShowSide] = useState(false);
  const [dailyData, setDailyData] = useState([]);

  const getDailyInfo = async () => {
    await axios.get(url).then((response) => {
      setDailyData(response.data);
    });
  };

  useEffect(() => {
    getDailyInfo();
  }, []);

  function handleModelClick() {
    setShowSide(!showSide);
  }

  console.log(dailyData.title);
  console.log(dailyData.explanation);

  return (
    <div id="root">
      {dailyData ? (
        <>
          <Body imgUrl={dailyData?.url} altTitle={dailyData?.title} />
          {showSide && (
            <SideBar
              title={dailyData?.title}
              desc={dailyData?.explanation}
              onClickHandle={handleModelClick}
            />
          )}
          <Footer
            title={dailyData?.title}
            onInfoClickHandle={handleModelClick}
          />
        </>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-arrows-rotate"></i>
        </div>
      )}
    </div>
  );
}

export default App;
