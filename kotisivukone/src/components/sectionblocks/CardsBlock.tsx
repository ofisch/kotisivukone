import React, { useEffect, useState } from "react";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const CardsBlock = ({
  section,
  pageSections,
  setPageSections,
}: {
  section: Section;
  pageSections: Section[];
  setPageSections: React.Dispatch<React.SetStateAction<Section[]>>;
}) => {
  // bannerin sisältö

  const [cardTitles, setCardTitles] = useState([
    "Kortti 1",
    "Kortti 2",
    "Kortti 3",
  ]);

  const [cardTexts, setCardTexts] = useState([
    "Tämä on ensimmäinen kortti.",
    "Tämä on toinen kortti.",
    "Tämä on kolmas kortti.",
  ]);

  console.log("CardsBlock props:", section);
  console.log("CardsBlock pageSections:", pageSections);

  // bannerin HTML
  const [cardsHtml, setcardsHtml] = useState(`
        <section className="cards">
            <div className="card">
                <h4>${cardTitles[0]}</h4>
                <p>${cardTexts[0]}</p>
            </div>
            <div className="card">
                <h4>${cardTitles[1]}</h4>
                <p>${cardTexts[1]}</p>
            </div>
            <div className="card">
                <h4>${cardTitles[2]}</h4>
                <p>${cardTexts[2]}</p>
            </div>
        </section>
    `);

  const style = {
    cardsBlock: {
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
      title: cardTitles.join(", "),
      text: cardTexts.join(", "),
      html: cardsHtml,
    };
    setPageSections((prevSections) =>
      prevSections.map((s) => (s.type === section.type ? updatedSection : s))
    );
    console.log("Updated section:", updatedSection);
  }, [section, cardTitles, cardTexts, cardsHtml, setPageSections]);

  useEffect(() => {
    const cardsHtml = `
        <section className="cards">
            <div className="card">
                <h4>${cardTitles[0]}</h4>
                <p>${cardTexts[0]}</p>
            </div>
            <div className="card">
                <h4>${cardTitles[1]}</h4>
                <p>${cardTexts[1]}</p>
            </div>
            <div className="card">
                <h4>${cardTitles[2]}</h4>
                <p>${cardTexts[2]}</p>
            </div>
        </section>
        `;
    setcardsHtml(cardsHtml);
    console.log("Banner HTML:", cardsHtml);

    updateSection();
  }, [cardTitles, cardTexts, updateSection]);

  return (
    <>
      <div className="cards-block" style={style.cardsBlock}>
        <h3>Kortit</h3>
        <div className="cards">
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={cardTitles[0]}
              onChange={(e) => {
                const newTitles = [...cardTitles];
                newTitles[0] = e.target.value;
                setCardTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={cardTexts[0]}
                onChange={(e) => {
                  const newTexts = [...cardTexts];
                  newTexts[0] = e.target.value;
                  setCardTexts(newTexts);
                }}
              />
            </textarea>
          </div>
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={cardTitles[1]}
              onChange={(e) => {
                const newTitles = [...cardTitles];
                newTitles[1] = e.target.value;
                setCardTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={cardTexts[1]}
                onChange={(e) => {
                  const newTexts = [...cardTexts];
                  newTexts[1] = e.target.value;
                  setCardTexts(newTexts);
                }}
              />
            </textarea>
          </div>
          <div className="card">
            <input
              type="text"
              style={style.input}
              spellCheck="false"
              value={cardTitles[2]}
              onChange={(e) => {
                const newTitles = [...cardTitles];
                newTitles[2] = e.target.value;
                setCardTitles(newTitles);
              }}
            />
            <textarea>
              <input
                type="text"
                style={style.textarea}
                spellCheck="false"
                value={cardTexts[2]}
                onChange={(e) => {
                  const newTexts = [...cardTexts];
                  newTexts[2] = e.target.value;
                  setCardTexts(newTexts);
                }}
              />
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
};
