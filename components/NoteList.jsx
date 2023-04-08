import React from "react";
import styles from "../assets/NoteList.module.scss";
import classNames from "classnames/bind";
import NoteItem from "./NoteItem";
import NoteNew from "./NoteNew";
let cx = classNames.bind(styles);
const NoteList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className={cx("notes-list")}>
      {notes.map((note) => {
        return <NoteItem deleteNote={deleteNote} key={note.id} {...note} />;
      })}
      <NoteNew addNote={addNote} />
    </div>
  );
};

export default NoteList;
