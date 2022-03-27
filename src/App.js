import './App.css';
import { useEffect, useState } from 'react';

function Forecast(city, current, sunday, monday, tuesday, wednesday, thursday, friday, saturday){
  <>
    <header>
      <h1>What is the weather like in Utah?</h1>
    </header>
    <main>
    <form>
      <input type="text" placeholder="What city do you want?" />
      <button>Get Weather!</button>
      <button>Change Temperature unit</button>
    </form>
    <h2>The Weather in, {city} Utah</h2>
    <h3>Currently: {current}</h3>
    <h4>7-day Forecast</h4>
        <h5>Sunday: {sunday}</h5>
        <h5>Monday: {monday}</h5>
        <h5>Tuesday: {tuesday}</h5>
        <h5>Wednesday: {wednesday}</h5>
        <h5>Thursday: {thursday}</h5>
        <h5>Friday: {friday}</h5>
        <h5>Saturday: {saturday}</h5>
  </main>
  <footer>
    Page created by Richard Stacey
  </footer>
  </>

}

function City() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    async function getCoordinates(){
      const resp = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Tokyo&appid=2e71c8fc353c994493d1f4bd9575e4b1');
      const data = await resp.json()

      console.log(data)

      setCoordinates(data)
    }

    getCoordinates()

  }, [])
}

function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function getWeather(){
      const resp2 = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=35.652832&lon=139.839478&appid=2e71c8fc353c994493d1f4bd9575e4b1');
      const data2 = await resp2.json()

      console.log(data2)

      setWeather(data2)
    } 

    getWeather()

  }, [])
}

function App() {

  City()

  Weather()

  return (
  
  );
}

export default App;