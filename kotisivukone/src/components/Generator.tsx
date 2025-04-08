import { useEffect, useState } from "react";
import "../style/Generator.css";
import { SectionModal } from "./SectionModal";

interface Section {
  type: string;
  // type: "banner" | "text" | "cards" | "carousel";
  title: string;
  text: string;
}

export const Generator = () => {
  // section-modal, josta valitaan sivulle lisättävä osio
  const [toggleSectionModal, setToggleSectionModal] = useState(false);

  const handleSectionModal = () => {
    setToggleSectionModal(!toggleSectionModal);
  };

  const [pageSections, setPageSections] = useState<Section[]>([]);

  const handleAddSection = (section: Section) => {
    setPageSections([...pageSections, section]);
  };

  useEffect(() => {
    console.log("Updated pageSections:", pageSections);
  }, [pageSections]);

  return (
    <>
      <img id="ball-top-right" src="../src/assets/grainGradient.jpg" alt="" />
      <img
        id="ball-bottom-left"
        src="../src/assets/grainGradient2.jpg"
        alt=""
      />
      <div className="generator">
        {pageSections.map((section, index) => {
          return (
            <div key={index} className="section">
              <h2>{section.type}</h2>
              <p>{section.title}</p>
              <p>{section.text}</p>
            </div>
          );
        })}
        <div className="add-new-section">
          <span onClick={handleSectionModal} id="plus">
            +
          </span>
        </div>
      </div>
      <button className="generate-page-button">Luo</button>
      {toggleSectionModal && (
        <SectionModal
          handleSectionModal={handleSectionModal}
          handleAddSection={handleAddSection}
        />
      )}
    </>
  );
};
