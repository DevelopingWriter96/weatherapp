import React, { useState, useEffect } from 'react';
import './App.css';

function Weather({city, temperature}) {


  return (
    <div>
      <input type="text" id="city" placeholder="Put City here"></input>
      <table class="dataTable">
        <tr>
          <tr>
            <th>{city}</th>
          </tr>
          <td>Sunday</td>
          <td>Monday</td>
          <td>Tuesday</td>
          <td>Wednesday</td>
          <td>Thursday</td>
          <td>Friday</td>
          <td>Saturday</td>
        </tr>
        <tr>
          <td></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
          <td><p>{temperature}</p></td>
        </tr>
      </table>
    </div>
  )
}



function App() {

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

  return (
    <div className="App">
    {weather = (weather => (
      <Weather city='Tokyo' temperature={weather.daily.temp.day} />
      ))}
    </div>    
  );
}

export default App;