import './App.css';
import Forecast from './Forecast';
// import { useEffect, useState } from 'react';

// let city = "";

function App() {

  // const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   async function getWeather(){
  //     const resp2 = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=40.296898&lon=-111.694649&appid=2e71c8fc353c994493d1f4bd9575e4b1');
  //     const data2 = await resp2.json()

  //     console.log(data2)

  //     setWeather(data2)
  //   } 

  //   getWeather()

  // }, [])

  return (
    <div>
      <Forecast />
    </div>
    
  );
}

export default App;