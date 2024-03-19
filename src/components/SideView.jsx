import React, { useState } from "react";
import "./Main.css";
import { useRecoilState, useRecoilValue } from "recoil";
import DataFromLocal from "../Storage/DataFromLocal";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import processed from "../Storage/Processing";
export default function SideView() {
  let [data, SetData] = useRecoilState(DataFromLocal);
  let objects = useRecoilValue(processed);
  let [search, SetSearch] = useState("");
  let [id, setId] = useSearchParams();
  console.log(id.get("id"));
  const handleDelete = (id) => {
    // Remove item from localStorage
    localStorage.removeItem(id);

    // Update Recoil state to remove the deleted item
    SetData((prevData) => ({
      ...prevData,
      data: prevData.data.filter((key) => key !== id),
    }));
  };

  let filteresData = objects.filter((dataIn) => {
    const title = dataIn.Title;
    if (title) {
      return title.toLowerCase().includes(search.toLowerCase());
    }
    return false;
  });
  let NotesList = filteresData.map((dataIn) => (
    <div key={dataIn.id}>
      <NavLink
        to={`/ShowSaved?id=${dataIn.id}`}
        className={id.get("id") === dataIn.id ? "activeNavLink" : "ShowedList"}
      >
        <div
          className={
            id.get("id") === dataIn.id ? "Active_List_Title" : "List_Title"
          }
        >
          {dataIn.Title}
          <br />
          <span
            className={
              id.get("id") === dataIn.id ? "Active_metaData" : "metaData"
            }
          >
            Date : {dataIn.Date} | Time : {dataIn.Time}
          </span>
        </div>
        <div >
          <button
            className="sidePanel_btn"
            onClick={() => handleDelete(dataIn.id)}
          >
            <i className="fa-solid fa-trash-can" /> Delete
          </button>
        </div>
      </NavLink>
    </div>
  ));
  return (
    <div className="SidePanel">
      <div className="search_Box_Container">
        <input
          type="text"
          placeholder="Search"
          id="search_box"
          onChange={(e) => {
            SetSearch(
              e.target.value === null || e.target.value === ""
                ? ""
                : e.target.value
            );
          }}
        />
        <i className="fa-solid fa-magnifying-glass" id="search_icon" />
      </div>
      <div className="notesList">{NotesList}</div>
    </div>
  );
}
