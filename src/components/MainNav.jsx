import React from "react";
import "./Main.css";
import { useRecoilState } from "recoil";
import DataFromLocal from "../Storage/DataFromLocal";
import { Link, useSearchParams } from "react-router-dom";

export default function MainNav() {
  let [state, setState] = useRecoilState(DataFromLocal);
  let [search,SetSearch] = useSearchParams();
  return (
    <div className="Nav_Parent">
      <h1 className="Nav_Heading">Glyph Notes</h1>
      <div className="All_Nav_btns">
        {(state.state === "home" || state.state === "read") && (
          <Link to="/editor?id=newNote">
            <button className="Nav_btn">
              <i className="fa-solid fa-file-circle-plus " /> New Note
            </button>
          </Link>
        )}
        {state.state === "edit" && (
          <button className="Nav_btn">
            <i className="fa-solid fa-trash-can" /> Delete
          </button>
        )}
        {state.state === "read" && (
          <Link to={`/editor?id=${search.get('id')}`}>
            <button
              className="Nav_btn"
              onClick={() => setState((prev) => ({ ...prev, state: "edit" }))}
            >
              <i className="fa-solid fa-file-pen" /> edit
            </button>
          </Link>
        )}
        {state.state === "edit" && (
          <Link to="">
            <button
              className="Nav_btn"
              onClick={() => setState((prev) => ({ ...prev, state: "read" }))}
            >
              <i className="fa-solid fa-floppy-disk" /> Save
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
