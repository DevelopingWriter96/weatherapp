import './App.css';
// import { useEffect, useState } from 'react';

// let city = "";

function Forecast(city, current, sunday, monday, tuesday, wednesday, thursday, friday, saturday){
  return (
  <>
    <header>
      <h1>What is the weather like in Utah?</h1>
    </header>
    <main>
    <form>
      <input type="text" placeholder="What city do you want?" className="location"/>
      <button>Get Weather!</button>
    </form>
    <h2>The Weather in, Orem Utah</h2>
    <h3>Currently: 77°F</h3>
    <h4>7-day Forecast</h4>
        <h5>Sunday: 63°F</h5>
        <h5>Monday: 63°F</h5>
        <h5>Tuesday: 53°F</h5>
        <h5>Wednesday: 58°F</h5>
        <h5>Thursday: 51°F</h5>
        <h5>Friday: 54°F</h5>
        <h5>Saturday: 61°F</h5>
  </main>
  <footer>
    Page created by Richard Stacey
  </footer>
  </>
  )
}

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