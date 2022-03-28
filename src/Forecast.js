

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

  export default Forecast;