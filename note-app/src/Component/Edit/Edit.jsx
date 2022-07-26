import React from "react";
import { Main } from "../Index";
import "./Edit.css";

const Edit = ({ notes, setIsEdit }) => {
  const closeModal = () => {
    setIsEdit(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
        <Main editNotes={notes} setIsEdit={setIsEdit} />
      </div>
    </div>
  );
};

export default Edit;
