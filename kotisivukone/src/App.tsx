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
          <div className="introduction">
            <h1>
              {" "}
              Kotisivusi,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                salamannopeasti.
              </span>{" "}
            </h1>
            <p>Kokoa sivusi valmiista palikoista ja lisää oma sisältösi.</p>
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
            <h3 style={{ fontWeight: "bold" }}>
              Kotisivusi on valmis sekunneissa! 🚀
            </h3>
          </div>
          <article>
            <section className="features">
              <p>
                Kotisivukone luo ladattavan HTML-tiedoston, jonka voit julkaista
                haluamallasi tavalla.
                <br />
                Kotisivukone ei tarjoa web-hosting palvelua.
              </p>
            </section>

            <section className="showcase">
              <h3>Tutustu Kotisivukoneella luotuihin sivuihin</h3>
            </section>
          </article>
        </div>
        <footer>
          <ul
            style={{
              listStyleType: "none",
              textAlign: "center",
              marginTop: "4rem",
            }}
          >
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
