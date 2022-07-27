import React from "react";
import "./Home.css";
import { Aside, Filter, Main, Notecard } from "../../Component/Index";
import NavbarComp from "../../Component/NavbarComp/NavbarComp";

import { useNote } from "../../Context/NoteContext";
import { Priority } from "../../Utils/Priority";
import { useFilter } from "../../Context/FilterContext";
import { Tags } from "../../Utils/Tags";
import { SortByDate } from "../../Utils/SortByDate";
import { useDocumentTitle } from "../../Hooks/useDocumetTitle";

const Home = () => {
  const { noteState } = useNote();
  const { notes } = noteState;
  const { filterState } = useFilter();
  const { priorities, sortByDate, tags } = filterState;
  let pinnedNotes = notes.filter((note) => note.pinned);
  pinnedNotes = Priority(pinnedNotes, priorities);
  pinnedNotes = Tags(pinnedNotes, tags);
  pinnedNotes = SortByDate(pinnedNotes, sortByDate);
  let unPinnedNotes = notes.filter((note) => !note.pinned);
  unPinnedNotes = Priority(unPinnedNotes, priorities);
  unPinnedNotes = Tags(unPinnedNotes, tags);
  unPinnedNotes = SortByDate(unPinnedNotes, sortByDate);
  useDocumentTitle("Home")

  return (
    <div>
      <main className="main-container">
        <NavbarComp />
        <div className="flex">
          <div className="aside-container">
            <Aside />
          </div>
          <div className="center-container">
            <Main />
          </div>
          <div className="mr-l">
            {" "}
            <Filter />
          </div>
        </div>
        <div className=" mt-l ">
          {pinnedNotes.length > 0 && (
            <>
              <h3 className="pinned-notes f-l font-xl ml-l ">Pinned </h3>
              <div className="note-card flex flex-wrap">
                {pinnedNotes.map((note) => (
                  <Notecard key={note._id} notes={note} />
                ))}
              </div>
            </>
          )}
          {unPinnedNotes.length > 0 && (
            <>
              <h3 className="unpinned-note f-l font-xl mt-s ml-l">Other </h3>
              <div className="note-card flex flex-wrap ">
                {unPinnedNotes.map((note) => (
                  <Notecard key={note._id} notes={note} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="flex flex-center ">
          {!notes.length && (
            <div className="emptyNotemessage font-xl f-l">
              your notes appear here 😀
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
