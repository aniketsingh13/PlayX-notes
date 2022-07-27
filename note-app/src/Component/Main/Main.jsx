import React, { useReducer } from "react";
import "./Main.css";
import { IoMdColorPalette } from "react-icons/io";
import { MdOutlineNewLabel } from "react-icons/md";
import setnoteReducer from "../../Reducer/setnoteReducer";
import { useNote } from "../../Context/NoteContext";
import { useAuth } from "../../Context/AuthContex";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { BsFillPinFill } from "react-icons/bs";
import { BsPin } from "react-icons/bs";
import { useToast } from "../../Hooks/useToast";

const colorpalletColors = [
  { id: uuid(), color: "" },
  { id: uuid(), color: "pink" },
  { id: uuid(), color: "yellow" },
  { id: uuid(), color: "green" },
  { id: uuid(), color: "skyBlue" },
  { id: uuid(), color: "purple" },
];

const tagPallets = [
  { id: uuid(), tag: "" },
  { id: uuid(), tag: "Work" },
  { id: uuid(), tag: "Important" },
  { id: uuid(), tag: "Secondary" },
  { id: uuid(), tag: "Chores" },
  { id: uuid(), tag: "College" },
];
const Main = ({ editNotes, setIsEdit }) => {

  const [state, dispatch] = useReducer(setnoteReducer, {
    title: editNotes?.title || "",
    text: editNotes?.text || "",
    noteColor: editNotes?.noteColor || "",
    colorPalletVisible: false,
    tags: editNotes?.tags || "",
    tagPalletVisible: false,
    priority: editNotes?.priority || "High",
    pinned: editNotes?.pinned || false,
  });
  const {
    title,
    text,
    colorPalletVisible,
    noteColor,
    tags,
    tagPalletVisible,
    priority,
    pinned,
  } = state;
  const { noteDispatch } = useNote();
  const { encodedToken } = useAuth();
  const {showToast}= useToast()

  const saveNoteHandler = async (e) => {
    e.preventDefault();
    const newNote = {
      _id: uuid(),
      title,
      text,
      noteColor,
      tags,
      priority,
      CreatedAt: new Date().toLocaleString(),
      pinned,
    };
    try {
      const response = await axios.post(
        "/api/notes",
        { note: newNote },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        noteDispatch({ type: "ADD_NOTE", payload: newNote });
        dispatch({ type: "RESET" });
        showToast("success", "note added successfully")
      }
    } catch (error) {
      showToast("something went wrong")
    }
  };

  const updateNoteHandler = async (updateNotes) => {
    try {
      const response = await axios.post(
        `api/notes/${updateNotes._id}`,
        { note: updateNotes },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        noteDispatch({ type: "EDIT_NOTES", payload: updateNotes });
        showToast("success","note edited successfully")
      }
    } catch (error) {
      showToast("error","something went wrong")
    }
  };

  const editHandler = async (e) => {
    e.preventDefault();
    const updateNotes = {
      _id: editNotes._id,
      title,
      text,
      noteColor,
      tags,
      priority,
      pinned,
      CreatedAt: new Date().toLocaleString(),
    };
    updateNoteHandler(updateNotes);
    setIsEdit(false);
  };

  return (
    <div className="mt-l flex flex-center">
      <form
        className={`note-edittor note-color-${noteColor} flex flex-column mt-s `}
        onSubmit={editNotes ? editHandler : saveNoteHandler}
      >
        <div className="flex">
          <input
            type="text"
            placeholder="Title"
            className={`noteEditor-input mt-s p-s f-s  note-color-${noteColor}`}
            name="Title"
            value={title}
            onChange={(e) =>
              dispatch({ type: "TITLE", payload: e.target.value })
            }
            required
          />
          <div
            className={`note-color-${noteColor} f-m toggle-btn`}
            onClick={() => dispatch({ type: "PINTOGGLE" })}
          >
            {pinned ? (
              <BsFillPinFill className="pin-note mt-l" />
            ) : (
              <BsPin className="pin-note mt-l" />
            )}
          </div>
        </div>
        <textarea
          type="text"
          placeholder="Take a note"
          className={`noteEditor-textarea  f-s p-s note-color-${noteColor}`}
          cols="18"
          rows="3"
          value={text}
          onChange={(e) => dispatch({ type: "TEXT", payload: e.target.value })}
        ></textarea>
        <div className="flex editorbtn-container mb-s">
          <div className="flex">
            <div
              className="editorIcon-btn f-m ml-s"
              onClick={() => dispatch({ type: "COLORPALLET" })}
            >
              <IoMdColorPalette />
            </div>
            {colorPalletVisible && (
              <div className="notePallet-container flex ">
                {colorpalletColors.map(({ id, color }) => (
                  <div
                    key={id}
                    className={`note-color note-color-${color}`}
                    onClick={() =>
                      dispatch({ type: "SETNOTE_COLOR", payload: color })
                    }
                  ></div>
                ))}
              </div>
            )}
            <div
              className="editorIcon-btn f-m ml-s"
              onClick={() => dispatch({ type: "TAGPALLET" })}
            >
              <MdOutlineNewLabel />
            </div>
            {tagPalletVisible && (
              <div className="tagPallet-container flex">
                {tagPallets.map(({ id, tag }) => (
                  <div
                    key={id}
                    className="tagCont f-s font-l"
                    onClick={() => dispatch({ type: "SET_TAG", payload: tag })}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <select
              className="priorityTag ml-s font-m f-s "
              value={priority}
              onChange={(e) =>
                dispatch({ type: "PRIORTY", payload: e.target.value })
              }
            >
              <option onClick={() => dispatch({ type: "TAGS_HIGH" })}>
                High
              </option>
              <option onClick={() => dispatch({ type: "TAGS_LOW" })}>
                Low
              </option>
              <option onClick={() => dispatch({ type: "TAG_MEDIUM" })}>
                Medium
              </option>
            </select>
            {tags !== "" && (
              <div className="displayTags mt-s ml-s f-s font-l p-xs">
                {tags}
              </div>
            )}
          </div>
          <div>
            <button className="editorNormal-btn  mr-s" type="submit">
              {editNotes ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Main;
