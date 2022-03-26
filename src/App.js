import './App.css';
//import { useEffect, useCase } from React;


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
    <h2>The Weather in Orem, Utah</h2>
    <h3>Currently: 55°F</h3>
    <h4>7-day Forecast</h4>
        <h5>Sunday: 69°F</h5>
        <h5>Monday: 72°F</h5>
        <h5>Tuesday: 72°F</h5>
        <h5>Wednesday: 56°F</h5>
        <h5>Thursday: 53°F</h5>
        <h5>Friday: 50°F</h5>
        <h5>Saturday: 50°F</h5>
  </main>
  <footer>
    Page created by Richard Stacey
  </footer>
  </>
  );
}

export default App;