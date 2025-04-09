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
            <h2>Kotisivukone</h2>
            <p>
              Kotisivukone on työkalu, jolla voit luoda kotisivun helposti ja
              nopeasti. Voit lisätä sivulle haluamasi osiot ja valita sille
              sopivan ulkoasun. Kotisivukone generoi sinulle valmiin
              HTML-koodin, jonka voit ladata ja julkaista omalla
              verkkosivustollasi.
            </p>
          </div>
          <div>
            <p>
              Voit käyttä kotisivukonetta helpon ja kätevän kotisivun luomiseen,
              tai inspiraation lähteenä, jota voit jatkokehittää ja muokata
              haluamallasi tavalla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
