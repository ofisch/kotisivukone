import React, { useState } from "react";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const TextForm: React.FC<{
  handleSectionModal: () => void;
  handleAddSection: (section: Section) => void;
}> = ({ handleSectionModal, handleAddSection }) => {
  const [textTitle, setTextTitle] = useState("");
  const [textContent, setTextContent] = useState("");

  const handleSubmit = () => {
    // generoidaan HTML-koodi
    const textHtml = `
    <article className="text">
        <h2>${textTitle}</h2>
        <p>${textContent}</p>
    </article>
    `;

    // luodaan olio, jossa osion tiedot
    const textSection = {
      type: "text",
      title: textTitle,
      text: textContent,
      html: textHtml,
    };

    // lisätään osio sivulle
    handleAddSection(textSection);

    // suljetaan ikkuna ja tyhjennetään kentät
    handleSectionModal();
    setTextTitle("");
    setTextContent("");
  };

  return (
    <>
      <h1>Teksti</h1>
      <p>Tekstielementissä voit kertoa tarkemmin sivustasi.</p>

      <form action="">
        <div className="form-group">
          <label htmlFor="text-title">Otsikko</label>
          <input
            spellCheck="false"
            value={textTitle}
            onChange={(e) => setTextTitle(e.target.value)}
            type="text"
            id="text-title"
            placeholder="Otsikko"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text-content">Teksti</label>
          <textarea
            spellCheck="false"
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            id="text-content"
            placeholder="Kirjoita teksti tähän"
            rows={4}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="button" onClick={handleSectionModal}>
            Peruuta
          </button>
          <button type="button" onClick={handleSubmit}>
            Tallenna
          </button>
        </div>
      </form>
    </>
  );
};
