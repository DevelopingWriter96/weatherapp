import './App.css';
import { useEffect, useCase } from 'react';

function App() {

  return (
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
    <h2>The Weather in , Utah</h2>
    <h3>Currently: </h3>
    <h4>7-day Forecast</h4>
        <h5>Sunday: </h5>
        <h5>Monday: </h5>
        <h5>Tuesday: </h5>
        <h5>Wednesday: </h5>
        <h5>Thursday: </h5>
        <h5>Friday: </h5>
        <h5>Saturday: </h5>
  </main>
  <footer>
    Page created by Richard Stacey
  </footer>
  </>
  );
}

export default App;