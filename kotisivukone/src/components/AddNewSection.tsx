import React from "react";

export const AddNewSection: React.FC<{ handleSectionModal: () => void }> = ({
  handleSectionModal,
}) => {
  return (
    <>
      <div className="add-new-section">
        <span onClick={handleSectionModal} id="plus">
          +
        </span>
      </div>
    </>
  );
};
