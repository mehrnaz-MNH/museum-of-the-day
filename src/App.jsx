import { useState, useEffect } from "react";
import { Body, Footer, SideBar } from "./components/index";
import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

function App() {
  const [showSide, setShowSide] = useState(false);
  const [dailyData, setDailyData] = useState(null);

  // const getDailyInfo = async () => {
  //   await axios.get(url).then((response) => {
  //     setDailyData(response.data);
  //   });
  // };

  async function getFromAPI() {
    const today = new Date().toDateString();
    const localKey = `NASA-${today}`;
    if (localStorage.getItem(localKey)) {
      setDailyData(JSON.parse(localStorage.getItem(localKey)));
      return;
    }

    localStorage.clear();

    try {
      const response = await fetch(url);
      const dataFromAPI = await response.json();
      localStorage.setItem(localKey, JSON.stringify(dataFromAPI));
      setDailyData(dataFromAPI);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getFromAPI();
  }, []);

  function handleModelClick() {
    setShowSide((prevSide) => !prevSide);
  }

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
