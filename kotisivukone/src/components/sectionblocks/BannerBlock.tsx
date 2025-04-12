import React, { useEffect, useState } from "react";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const BannerBlock = ({
  section,
  pageSections,
  setPageSections,
}: {
  section: Section;
  pageSections: Section[];
  setPageSections: React.Dispatch<React.SetStateAction<Section[]>>;
}) => {
  // bannerin sisältö
  const [bannerTitle, setBannerTitle] = useState("Otsikko");
  const [bannerText, setBannerText] = useState("Lyhyt esittelyteksti");

  console.log("BannerBlock props:", section);
  console.log("BannerBlock pageSections:", pageSections);

  // bannerin HTML
  const [bannerHtml, setBannerHtml] = useState(`
        <div className="banner">
            <h1>${bannerTitle}</h1>
            <p>${bannerText}</p>
        </div>
    `);

  const style = {
    bannerBlock: {
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
      title: bannerTitle,
      text: bannerText,
      html: bannerHtml,
    };
    setPageSections((prevSections) =>
      prevSections.map((s) => (s.type === section.type ? updatedSection : s))
    );
    console.log("Updated section:", updatedSection);
  }, [section, bannerTitle, bannerText, bannerHtml, setPageSections]);

  useEffect(() => {
    const bannerHtml = `
        <div className="banner">
            <h1>${bannerTitle}</h1>
            <p>${bannerText}</p>
        </div>
        `;
    setBannerHtml(bannerHtml);
    console.log("Banner HTML:", bannerHtml);

    updateSection();
  }, [bannerTitle, bannerText, updateSection]);

  return (
    <>
      <div className="banner-block" style={style.bannerBlock}>
        <h3>Banneri</h3>
        <form style={style.form}>
          <div className="form-group">
            <input
              style={style.input}
              spellCheck="false"
              value={bannerTitle}
              onChange={(e) => setBannerTitle(e.target.value)}
              type="text"
              id="banner-title"
              placeholder="Otsikko"
            />
          </div>
          <div className="form-group">
            <textarea
              style={style.textarea}
              spellCheck="false"
              value={bannerText}
              onChange={(e) => setBannerText(e.target.value)}
              id="banner-text"
              placeholder="Lyhyt esittelyteksti"
              rows={3}
            />
          </div>
        </form>
      </div>
    </>
  );
};
