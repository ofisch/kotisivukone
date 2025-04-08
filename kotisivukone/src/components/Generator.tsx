import { useState } from "react";
import "../style/Generator.css";
import { SectionModal } from "./SectionModal";

interface Section {
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
    console.log("section to be added:  ", section);
    setPageSections([...pageSections, section]);
    console.log(pageSections);
  };

  return (
    <>
      <img id="ball-top-right" src="../src/assets/grainGradient.jpg" alt="" />
      <img
        id="ball-bottom-left"
        src="../src/assets/grainGradient2.jpg"
        alt=""
      />
      <div className="generator">
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
