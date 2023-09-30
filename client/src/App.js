import {useEffect} from "react"
import './App.css';


function App() {
  useEffect(() => {
    fetch("/movies")
      .then((response) => response.json())
      .then((movies) => console.log(movies))
  }, [])

  return (
    <div className="App">
      <h1>Check the console for a list of movies</h1>
    </div>
  );
}

export default App;
