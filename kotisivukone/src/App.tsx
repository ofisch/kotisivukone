import "./App.css";
import { Generator } from "./components/Generator";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Kotisivukone</h1>
          <h2>
            Luo kotisivu{" "}
            <span
              style={{
                background:
                  "-webkit-linear-gradient(0deg, #FC466B 0%, #3F5EFB 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              helposti ja nopeasti
            </span>{" "}
          </h2>
          <p>Aloita lisäämällä uusi osio sivulle.</p>
        </header>
        <Generator />
      </div>
    </>
  );
}

export default App;
