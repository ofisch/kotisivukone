import React, { useEffect, useState } from "react";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const TextBlock = ({
  section,
  pageSections,
  setPageSections,
}: {
  section: Section;
  pageSections: Section[];
  setPageSections: React.Dispatch<React.SetStateAction<Section[]>>;
}) => {
  // bannerin sisältö
  const [header, setHeader] = useState("Otsikko");
  const [textContent, setTextContent] = useState("Teksti");

  console.log("TextBlock props:", section);
  console.log("TextBlock pageSections:", pageSections);

  // bannerin HTML
  const [textHtml, setTextHtml] = useState(`
        <section className="text-element">
            <h2>${header}</h2>
            <p>${textContent}</p>
        </section>
    `);

  const style = {
    TextBlock: {
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
      width: "20em",
      padding: "10px",
      maxWidth: "100%",
      fontSize: "var(--font-large)",
      textAlign: "center" as const,
    },
    textarea: {
      border: "2px solid var(--color-secondary)",
      borderRadius: "8px",
      background: "transparent",
      width: "20em",
      padding: "10px",
      fontSize: "var(--font-regular)",
      textAlign: "center" as const,
    },
  };

  // päivitetään osion tiedot
  const updateSection = React.useCallback(() => {
    const updatedSection = {
      ...section,
      title: header,
      text: textContent,
      html: textHtml,
    };
    setPageSections((prevSections) =>
      prevSections.map((s) => (s.type === section.type ? updatedSection : s))
    );
    console.log("Updated section:", updatedSection);
  }, [section, header, textContent, textHtml, setPageSections]);

  useEffect(() => {
    const textHtml = `
        <div className="banner">
            <h1>${header}</h1>
            <p>${textContent}</p>
        </div>
        `;
    setTextHtml(textHtml);
    console.log("Banner HTML:", textHtml);

    updateSection();
  }, [header, textContent, updateSection]);

  return (
    <>
      <div className="banner-block" style={style.TextBlock}>
        <h3>Teksti</h3>
        <form style={style.form}>
          <div className="form-group">
            <input
              style={style.input}
              spellCheck="false"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              type="text"
              id="banner-title"
              placeholder="Otsikko"
            />
          </div>
          <div className="form-group">
            <textarea
              style={style.textarea}
              spellCheck="false"
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              id="banner-text"
              placeholder="Tekstisisältö"
              rows={6}
            />
          </div>
        </form>
      </div>
    </>
  );
};
