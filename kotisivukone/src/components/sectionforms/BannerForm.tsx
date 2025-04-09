import React, { useState } from "react";
import "../../style/BannerForm.css";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

export const BannerForm: React.FC<{
  handleSectionModal: () => void;
  handleAddSection: (section: Section) => void;
}> = ({ handleSectionModal, handleAddSection }) => {
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerText, setBannerText] = useState("");

  const handleSubmit = () => {
    const bannerHtml = `
    <div className="banner">
        <h1>${bannerTitle}</h1>
        <p>${bannerText}</p>
    </div>
    `;

    const bannerContent = {
      type: "banner",
      title: bannerTitle,
      text: bannerText,
      html: bannerHtml,
    };

    handleAddSection(bannerContent);

    handleSectionModal();
    setBannerTitle("");
    setBannerText("");
  };

  return (
    <>
      <h1>Banneri</h1>
      <p>Bannerissa on suuri otsikko ja lyhyt esittelyteksti. </p>

      <form>
        <div className="form-group">
          <label htmlFor="banner-title">Otsikko</label>
          <input
            spellCheck="false"
            value={bannerTitle}
            onChange={(e) => setBannerTitle(e.target.value)}
            type="text"
            id="banner-title"
            placeholder="Otsikko"
          />
        </div>
        <div className="form-group">
          <label htmlFor="banner-text">Teksti</label>
          <textarea
            spellCheck="false"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            id="banner-text"
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
