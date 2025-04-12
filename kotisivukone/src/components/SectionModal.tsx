import { useState } from "react";
import "../style/SectionModal.css";
import { BannerForm } from "./sectionforms/BannerForm";
import { TextForm } from "./sectionforms/TextForm";
import { CardsForm } from "./sectionforms/CardsForm";

interface Section {
  type: string;
  title: string;
  text: string;
  html: string;
}

interface SectionModalProps {
  handleSectionModal: () => void;
  handleAddSection: (section: Section) => void;
}

export const SectionModal: React.FC<SectionModalProps> = ({
  handleSectionModal,
  handleAddSection,
}) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionType: string) => {
    setSelectedSection(sectionType);
    const newSection: Section = {
      type: sectionType,
      title: "",
      text: "",
      html: "",
    };
    handleAddSection(newSection);
    handleSectionModal();
  };

  return (
    <>
      <div className="section-modal-background" onClick={handleSectionModal}>
        <div className="section-modal" onClick={(e) => e.stopPropagation()}>
          <div>
            <h1>Valitse osio</h1>
            <div className="sections">
              <div
                onClick={() => handleSectionClick("banner")}
                className="banner-preview"
              >
                <h2>Banneri</h2>
                <p>Banneri, jossa on suuri otsikko ja lyhyt esittelyteksti.</p>
              </div>
              <div
                onClick={() => handleSectionClick("text")}
                className="text-preview"
              >
                <h2>Teksti</h2>
                <p>
                  Teksti, jossa voit kertoa lisää esimerkiksi yrityksestäsi tai
                  palveluistasi.
                </p>
              </div>
              <div
                onClick={() => handleSectionClick("cards")}
                className="cards-preview"
              >
                <h2>Kortit</h2>
                <p>Kortit, joissa voidaan esitellä esimerkiksi palveluita.</p>
              </div>
              <div
                onClick={() => handleSectionClick("carousel")}
                className="carousel-preview"
              >
                <h2>Karuselli</h2>
                <p>
                  Karuselli koostuu useista elementeistä, joissa voidaan
                  esitellä esimerkiksi asiakaspalautteet.
                </p>
              </div>
              <div
                onClick={() => handleSectionClick("contact")}
                className="contact-preview"
              >
                <h2>Yhteydenottolomake</h2>
                <p>
                  Yhteydenottolomake, jonka avulla asiakkaat voivat ottaa
                  yhteyttä.
                </p>
              </div>
              <div
                onClick={() => handleSectionClick("footer")}
                className="footer-preview"
              >
                <h2>Footer</h2>
                <p>
                  Footer, jossa on yhteystiedot ja sosiaalisen median linkit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
