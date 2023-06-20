import React from "react";
import styles from "../assets/NoteList.module.scss";
import { useState, useRef } from "react";
import classNames from "classnames/bind";
import NoteItem from "./NoteItem";
import NoteNew from "./NoteNew";
let cx = classNames.bind(styles);
const NoteList = ({ notes, addNote, deleteNote, editNote }) => {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [selectItemEdit, setSelectItemEdit] = useState("");
  return (
    <div className={cx("notes-list")}>
      {notes.map((note) => {
        return (
          <NoteItem
            deleteNote={deleteNote}
            key={note.id}
            note={note}
            setText={setText}
            onSelectItemEdit={setSelectItemEdit}
            forwardedRef={inputRef}
          />
        );
      })}
      <NoteNew
        addNote={addNote}
        editNote={editNote}
        text={text}
        setText={setText}
        selectItemEdit={selectItemEdit}
        onSelectItemEdit={setSelectItemEdit}
        forwardedRef={inputRef}
      />
    </div>
  );
};

export default NoteList;
