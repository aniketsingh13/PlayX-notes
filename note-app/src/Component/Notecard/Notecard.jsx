import "./Notecard.css";
import { MdDelete } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { Edit } from "../Index";
import axios from "axios";
import { useAuth } from "../../Context/AuthContex";
import { useNote } from "../../Context/NoteContext";

const Notecard = ({ notes }) => {
  const { _id, title, text, noteColor, tags, priority, CreatedAt } = notes;
  const [isEdit, setIsEdit] = useState(false);
  const { encodedToken } = useAuth();
  const { noteDispatch } = useNote();
  const archieveHandler = async () => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        { note: notes },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        noteDispatch({ type: "ARCHIEV_NOTE", payload: notes });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const deleteHandler = async () => {
    try {
      const response = await axios.delete(`/api/notes/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 200) {
        noteDispatch({ type: "DELETE_NOTE", payload: notes });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className=" mt-l flex flex-center flex-row ">
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
              onClick={() => setIsEdit((prev) => !prev)}
            >
              <BiEdit />
            </button>
            <button
              className="notecard-btn f-m pr-s"
              style={{ backgroundColor: noteColor }}
              onClick={archieveHandler}
            >
              <BsArchiveFill />
            </button>
            <button
              className="notecard-btn f-m pr-s"
              style={{ backgroundColor: noteColor }}
              onClick={deleteHandler}
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
      {isEdit && <Edit notes={notes} setIsEdit={setIsEdit} />}
    </div>
  );
};

export default Notecard;
