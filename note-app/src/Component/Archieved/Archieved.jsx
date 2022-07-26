import React from "react";
import { BsArchiveFill } from "react-icons/bs";
import axios from "axios";
import { useAuth } from "../../Context/AuthContex";
import { useNote } from "../../Context/NoteContext";
import { useToast } from "../../Hooks/useToast";


const Archieved = ({ archives }) => {
  const { _id, title, text, noteColor, tags, priority, CreatedAt } = archives;
  const { encodedToken } = useAuth();
  const { noteDispatch } = useNote();
  const {showToast} = useToast()

  const unArchieveHandler = async () => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${_id}`,
        { note: archives },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 200) {
        noteDispatch({ type: "UNARCHIEVED_NOTE", payload: archives });
        showToast("success","note unarchieve successfully")
      }
    } catch (error) {
      showToast("error","something went wrong")
    }
  };

  return (
    <div className=" ml-l mt-l ">
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
              onClick={unArchieveHandler}
              title="unArchieved Note"
            >
              <BsArchiveFill />
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

export default Archieved;
