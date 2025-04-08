import { useState } from "react";
import "../style/SectionModal.css";
import { BannerForm } from "./sectionforms/BannerForm";

interface Section {
  title: string;
  text: string;
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

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <>
      <div className="section-modal-background" onClick={handleSectionModal}>
        <div className="section-modal" onClick={(e) => e.stopPropagation()}>
          {selectedSection === null ? (
            <div>
              <h1>Valitse osio</h1>
              <div className="sections">
                <div
                  onClick={() => handleSectionClick("banner")}
                  className="banner-preview"
                >
                  <h2>Banneri</h2>
                  <p>
                    Banneri, jossa on suuri otsikko ja lyhyt esittelyteksti.
                  </p>
                </div>
                <div
                  onClick={() => handleSectionClick("text")}
                  className="text-preview"
                >
                  <h2>Tekstiosio</h2>
                  <p>
                    Tekstiosio, jossa voit kertoa lisää esimerkiksi
                    yrityksestäsi tai palveluistasi.
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
          ) : selectedSection === "banner" ? (
            <BannerForm
              handleSectionModal={handleSectionModal}
              handleAddSection={handleAddSection}
            />
          ) : (
            <div className="selected-section">
              <h1>Valittu osio: {selectedSection}</h1>
              <button onClick={() => setSelectedSection(null)}>
                Takaisin valintaan
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
