import { useEffect, useState } from "react";
import "../style/Generator.css";
import { SectionModal } from "./SectionModal";
import { AddNewSection } from "./AddNewSection";
import { BannerBlock } from "./sectionblocks/BannerBlock";
import { TextBlock } from "./sectionblocks/TextBlock";
import { CardsBlock } from "./sectionblocks/CardsBlock";
import { CarouselBlock } from "./sectionblocks/CarouselBlock";

interface Section {
  type: string;
  // type: "banner" | "text" | "cards" | "carousel";
  title: string;
  text: string;
  html: string;
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

  const [pageHtml, setPageHtml] = useState("");

  const generatePage = () => {
    // generoidaan koko sivun HTML
    const generatedHtml = `
      <html>
        <head>
          <title>Kotisivukone</title>
        </head>
        <body>
          ${pageSections.map((section) => section.html).join("")}
        </body>
      </html>
    `;
    setPageHtml(generatedHtml);
    console.log(pageHtml);
  };

  return (
    <>
      <div id="ball-top-right" />
      <div id="ball-bottom-left" />

      <div className="generator">
        {pageSections.map((section, index) =>
          section.type === "banner" ? (
            <BannerBlock
              key={index}
              section={section}
              pageSections={pageSections}
              setPageSections={setPageSections}
            />
          ) : section.type === "text" ? (
            <TextBlock
              key={index}
              section={section}
              pageSections={pageSections}
              setPageSections={setPageSections}
            />
          ) : section.type === "cards" ? (
            <CardsBlock
              key={index}
              section={section}
              pageSections={pageSections}
              setPageSections={setPageSections}
            />
          ) : section.type === "carousel" ? (
            <CarouselBlock
              key={index}
              section={section}
              pageSections={pageSections}
              setPageSections={setPageSections}
            />
          ) : (
            <div key={index} className="section-placeholder">
              <h2>{section.type}</h2>
              <p>{section.text}</p>
              <p>{section.html}</p>
            </div>
          )
        )}

        <AddNewSection handleSectionModal={handleSectionModal} />
      </div>
      <button className="generate-page-button" onClick={generatePage}>
        <span
          style={{
            background:
              "-webkit-linear-gradient(0deg, #FC466B 0%, #3F5EFB 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          {" "}
          Luo
        </span>{" "}
      </button>

      {pageHtml !== "" && (
        <div className="preview">
          <h2>Esikatselu</h2>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: pageHtml }}
          ></div>
          <button
            className="close-preview-button"
            onClick={() => setPageHtml("")}
          >
            Sulje esikatselu
          </button>
        </div>
      )}

      {toggleSectionModal && (
        <SectionModal
          handleSectionModal={handleSectionModal}
          handleAddSection={handleAddSection}
        />
      )}
    </>
  );
};
