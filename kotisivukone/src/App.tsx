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
        <div className="info">
          <div className="">
            <h2>Mikä ihmeen kotisivukone?</h2>
            <p>
              Kotisivukone on työkalu, jolla voit luoda kotisivun helposti ja
              nopeasti. <br />
              <h4>Rakenna kotisivusi</h4>
              <ul>
                <li>kokoamalla se palikoista</li>
                <li>lisäämällä sisältösi</li>
              </ul>
              <span style={{ fontWeight: "bold" }}>
                Kun sivusi rakenne on valmis,{" "}
              </span>
              valitse sille vielä
              <ul>
                <li> ulkoasu</li>
                <li>väriteema</li>
                <li>
                  ja paina{" "}
                  <span
                    style={{
                      background:
                        "-webkit-linear-gradient(0deg, #FC466B 0%, #3F5EFB 100%)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "bold",
                    }}
                  >
                    Luo
                  </span>
                  -painiketta.{" "}
                </li>
              </ul>
              <span style={{ fontWeight: "bold" }}>
                Kotisivusi on valmis sekunneissa! 🚀
              </span>
            </p>
          </div>
        </div>
        <footer>
          <ul style={{ listStyleType: "none", textAlign: "center" }}>
            <li>tehty 🩵:lla Suomessa</li>
            <li>
              <a
                style={{
                  background: "var(--color-primary-darker)",
                }}
                href="https://onni.pro"
              >
                onni.pro
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
