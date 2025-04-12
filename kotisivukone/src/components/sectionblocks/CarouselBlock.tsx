import React, { useEffect, useState } from "react";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const CarouselBlock = ({
  section,
  pageSections,
  setPageSections,
}: {
  section: Section;
  pageSections: Section[];
  setPageSections: React.Dispatch<React.SetStateAction<Section[]>>;
}) => {
  // bannerin sisältö

  const [carouselTitles, setCarouselTitles] = useState([
    "Karuselli 1",
    "Kortti 2",
    "Kortti 3",
  ]);

  const [carouselTexts, setCarouselTexts] = useState([
    "Tämä on ensimmäinen kortti.",
    "Tämä on toinen kortti.",
    "Tämä on kolmas kortti.",
  ]);

  console.log("carouselBlock props:", section);
  console.log("carouselBlock pageSections:", pageSections);

  // bannerin HTML
  const [cardsHtml, setcardsHtml] = useState(`
        <section className="cards">
            <div className="card">
                <h4>${carouselTitles[0]}</h4>
                <p>${carouselTexts[0]}</p>
            </div>
            <div className="card">
                <h4>${carouselTitles[1]}</h4>
                <p>${carouselTexts[1]}</p>
            </div>
            <div className="card">
                <h4>${carouselTitles[2]}</h4>
                <p>${carouselTexts[2]}</p>
            </div>
        </section>
    `);

  const style = {
    carouselBlock: {
      background: "var(--color-primary)",
      color: "var(--color-secondary)",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center" as const,
      fontFamily: "Arial, sans-serif",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "2em",
    },
    input: {
      border: "none",
      borderBottom: "2px solid var(--color-secondary)",
      background: "transparent",
      padding: "10px",
      maxWidth: "100%",
      fontSize: "var(--font-large)",
      textAlign: "center" as const,
    },
    textarea: {
      border: "2px solid var(--color-secondary)",
      borderRadius: "8px",
      background: "transparent",
      padding: "10px",
      fontSize: "var(--font-regular)",
      textAlign: "center" as const,
    },
  };

  // päivitetään osion tiedot
  const updateSection = React.useCallback(() => {
    const updatedSection = {
      ...section,
      title: carouselTitles.join(", "),
      text: carouselTexts.join(", "),
      html: cardsHtml,
    };
    setPageSections((prevSections) =>
      prevSections.map((s) => (s.type === section.type ? updatedSection : s))
    );
    console.log("Updated section:", updatedSection);
  }, [section, carouselTitles, carouselTexts, cardsHtml, setPageSections]);

  useEffect(() => {
    const cardsHtml = `
        <section className="cards">
            <div className="card">
                <h4>${carouselTitles[0]}</h4>
                <p>${carouselTexts[0]}</p>
            </div>
            <div className="card">
                <h4>${carouselTitles[1]}</h4>
                <p>${carouselTexts[1]}</p>
            </div>
            <div className="card">
                <h4>${carouselTitles[2]}</h4>
                <p>${carouselTexts[2]}</p>
            </div>
        </section>
        `;
    setcardsHtml(cardsHtml);
    console.log("Banner HTML:", cardsHtml);

    updateSection();
  }, [carouselTitles, carouselTexts, updateSection]);

  return (
    <>
      <div className="cards-block" style={style.carouselBlock}>
        <h3>Karuselli</h3>
        <div className="cards">
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={carouselTitles[0]}
              onChange={(e) => {
                const newTitles = [...carouselTitles];
                newTitles[0] = e.target.value;
                setCarouselTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={carouselTexts[0]}
                onChange={(e) => {
                  const newTexts = [...carouselTexts];
                  newTexts[0] = e.target.value;
                  setCarouselTexts(newTexts);
                }}
              />
            </textarea>
          </div>
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={carouselTitles[1]}
              onChange={(e) => {
                const newTitles = [...carouselTitles];
                newTitles[1] = e.target.value;
                setCarouselTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={carouselTexts[1]}
                onChange={(e) => {
                  const newTexts = [...carouselTexts];
                  newTexts[1] = e.target.value;
                  setCarouselTexts(newTexts);
                }}
              />
            </textarea>
          </div>
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={carouselTitles[2]}
              onChange={(e) => {
                const newTitles = [...carouselTitles];
                newTitles[2] = e.target.value;
                setCarouselTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={carouselTexts[2]}
                onChange={(e) => {
                  const newTexts = [...carouselTexts];
                  newTexts[2] = e.target.value;
                  setCarouselTexts(newTexts);
                }}
              />
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};
