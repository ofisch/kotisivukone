import "./App.css";
import { Generator } from "./components/Generator";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Kotisivukone</h1>
          <h2>Luo kotisivu helposti ja nopeasti</h2>
          <p>Aloita lisäämällä uusi osio sivulle.</p>
        </header>
        <Generator />
      </div>
    </>
  );
}

export default App;
