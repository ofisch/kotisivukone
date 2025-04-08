import React, { useState } from "react";
import "../../style/BannerForm.css";

interface Section {
  title: string;
  text: string;
}

export const BannerForm: React.FC<{
  handleSectionModal: () => void;
  handleAddSection: (section: Section) => void;
}> = ({ handleSectionModal, handleAddSection }) => {
  const [bannerTitle, setBannerTitle] = useState("");
  const [bannerText, setBannerText] = useState("");

  const handleSubmit = () => {
    const bannerContent = {
      title: bannerTitle,
      text: bannerText,
    };

    console.log("bannerContent, ", bannerContent);

    handleAddSection(bannerContent);
    alert(`section added ${bannerContent}`);
  };

  return (
    <>
      <h2>Kirjoita sisältö Banneriin</h2>
      <p>Bannerissa on suuri otsikko ja lyhyt esittelyteksti. </p>

      <form onSubmit={handleSubmit}>
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
          <button type="submit">Tallenna</button>
        </div>
      </form>
    </>
  );
};
