import React, { useState } from "react";
import "../../style/CardForm.css";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const CardsForm: React.FC<{
  handleSectionModal: () => void;
  handleAddSection: (section: Section) => void;
}> = ({ handleSectionModal, handleAddSection }) => {
  const [sectionTitle, setSectionTitle] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardText, setCardText] = useState("");

  const [cards, setCards] = useState<{ title: string; text: string }[]>([]);

  const addCard = (title: string, text: string) => {
    const newCards = [...cards, { title, text }];
    setCards(newCards);
    console.log("new cards: ", newCards);
    setCardTitle("");
    setCardText("");
  };

  const handleSubmit = () => {
    // generoidan HTML
    const cardsHtml = `
    <div className="cards">
        <h2>${sectionTitle}</h2>
        <div className="cards-container">
            ${cards
              .map(
                (card) => `
            <div className="card">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
            `
              )
              .join("")}
        </div>
    </div>
    `;

    // luodaan olio, jossa osion tiedot
    const cardsContent = {
      type: "cards",
      title: sectionTitle,
      text: "",
      html: cardsHtml,
    };

    // lisätään osio sivulle
    handleAddSection(cardsContent);

    // suljetaan ikkuna ja tyhjennetään kentät
    handleSectionModal();
    setSectionTitle("");
    setCards([]);
    setCardTitle("");
    setCardText("");
  };

  return (
    <>
      <h1>Kortit</h1>
      <p>Kortit ovat hyvä tapa kertoa esimerkiksi tarjoamistasi palveluista.</p>

      <div className="form-group">
        <label>Korttiosion otsikko</label>
        <input
          spellCheck="false"
          value={sectionTitle}
          onChange={(e) => setSectionTitle(e.target.value)}
          type="text"
          placeholder="esim. Palvelut"
        />
      </div>

      <div className="card-form">
        <div className="card">
          <div className="form-group">
            <input
              spellCheck="false"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
              type="text"
              placeholder="Kortin otsikko"
            />
          </div>
          <div className="form-group">
            <textarea
              spellCheck="false"
              value={cardText}
              onChange={(e) => setCardText(e.target.value)}
              placeholder="Kirjoita teksti tähän"
              rows={4}
            ></textarea>
          </div>
        </div>

        <button
          className="add-card-button"
          type="button"
          onClick={() => addCard(cardTitle, cardText)}
        >
          Lisää kortti
        </button>
      </div>

      {cards.length > 0 && (
        <div className="cards-to-add">
          <h3>Lisättävät kortit</h3>
          {cards.map((card, index) => (
            <div key={index} className="card-to-add">
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="cards-form-buttons">
        <button type="button" onClick={handleSectionModal}>
          Peruuta
        </button>
        <button type="button" onClick={handleSubmit}>
          Tallenna
        </button>
      </div>
    </>
  );
};
