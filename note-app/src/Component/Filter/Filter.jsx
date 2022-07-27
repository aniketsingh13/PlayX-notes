import React, { useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import "./Filter.css";

const Filter = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const { filterState, filterDispatch } = useFilter();
  const { priorities, sortByDate, tags } = filterState;
  return (
    <div>
      <button
        className="filter_Heading f-m font-l mt-l"
        onClick={() => setFilterToggle((prev) => !prev)}
      >
        Sort By
      </button>
      {filterToggle && (
        <div className="filterContainer flex">
          <div className="p-xss f-s font-s">Sort by priority</div>
          <div className="priority_container flex">
            <label>
              <input
                value="High"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITIES",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={priorities.includes("High")}
              />{" "}
              High
            </label>
            <label>
              <input
                value="Medium"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITIES",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={priorities.includes("Medium")}
              />{" "}
              Medium
            </label>
            <label>
              <input
                value="Low"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_PRIORITIES",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={priorities.includes("Low")}
              />{" "}
              Low
            </label>
          </div>
          <div className="f-s font-s">Sort By tag</div>
          <div className="tag_container flex">
            <label>
              <input
                value="Work"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={tags.includes("Work")}
              />{" "}
              Work
            </label>
            <label>
              <input
                value="Important"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={tags.includes("Important")}
              />{" "}
              Important
            </label>
            <label>
              <input
                value="Secondary"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={tags.includes("Secondary")}
              />{" "}
              Secondary
            </label>
            <label>
              <input
                value="Chores"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={tags.includes("Chores")}
              />{" "}
              Chores
            </label>
            <label>
              <input
                value="College"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_TAGS",
                    payload: e.target.value,
                  })
                }
                type="checkbox"
                checked={tags.includes("College")}
              />{" "}
              College
            </label>
          </div>
          <div className="f-s font-s">Sort by Date</div>
          <div className="Date_container flex">
            <label>
              <input
                value="old-to-new"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: e.target.value,
                  })
                }
                type="radio"
                checked={sortByDate === "old-to-new"}
              />{" "}
              old to new
            </label>
            <label>
              <input
                value="new-to-old"
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: e.target.value,
                  })
                }
                type="radio"
                checked={sortByDate === "new-to-old"}
              />{" "}
              new to old
            </label>
          </div>
          <button
            className="filter-btn p-xss"
            onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
