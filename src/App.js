import "./App.css";
import Kalkulator from "./Components/Kalkulator.js";
import logo from "./logo.jpg";

function App() {
  return (
    <div className="App">
    <a href="https://github.com/sanelp">
       <img className="logo" src={logo} alt="logo" />
    </a>
       <Kalkulator />
       <p className="trykk">Click the logo</p>
       <p className="Sanel">Kalkulator</p>
       <p className="Sanel">By SanelP</p>
       
      <div>
      </div>
    </div>
  );
}

export default App;
