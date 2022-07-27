import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineRestoreFromTrash } from "react-icons/md";
import { useNote } from "../../Context/NoteContext";
import { useToast } from "../../Hooks/useToast";

const Trashcard = ({ trash }) => {
  const { _id, title, text, noteColor, tags, priority, CreatedAt } = trash;
  const { noteDispatch } = useNote();
  const {showToast} = useToast()

  return (
    <div className="mt-l ml-l">
      <section
        className="notecard-Container"
        style={{ backgroundColor: noteColor }}
      >
        <div className="notecard-header flex p-s">
          <h2 className="f-m font-m">{title}</h2>
        </div>
        <div className="notecard-body pl-m">
          <p className=" font-m f-s  mb-l">{text}</p>
        </div>
        <div className=" mb-s flex notecard-footer">
          <small className="   p-xss">
            Created At:{" "}
            {`${new Date(CreatedAt).toLocaleDateString()} ${new Date(
              CreatedAt
            ).toLocaleString("en-Us", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}`}
          </small>
          <div>
            <button
              className="notecard-btn f-m pr-s"
              style={{ backgroundColor: noteColor }}
              onClick={() =>
                noteDispatch({ type: "RESTOR_TRASHNOTE", payload: trash },showToast("success","note restore successfully"))
              }
              title="Restore trash"
            >
              <MdOutlineRestoreFromTrash />
            </button>
            <button
              className="notecard-btn f-m pr-s"
              style={{ backgroundColor: noteColor }}
              title="delete forever"
              onClick={() =>
                noteDispatch({ type: "DELETE_FOREVER", payload: _id },showToast("success","note deleted"))
              }
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="priority-Tag ml-s  f-s font-l p-xss">{priority}</div>
          <div className="ml-s">
            {tags.length > 0 && (
              <div className="noteCard-tag f-s font-l p-xss"> {tags}</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trashcard;
