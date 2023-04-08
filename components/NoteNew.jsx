import React from "react";
import styles from "../assets/NoteItem.module.scss";
import classNames from "classnames/bind";
import { useState, useRef } from "react";
let cx = classNames.bind(styles);
const NoteNew = ({ addNote }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const limitCharacterNote = 200;
  const handleSetNote = (e) => {
    if (limitCharacterNote - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };

  const handlAddNote = () => {
    if (!text.trim()) return;
    addNote(text);
    setText("");
    inputRef.current.focus();
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.selectionStart = 0; // set the cursor position to the beginning of the textarea
      e.target.selectionEnd = 0;
      handlAddNote();
    }
  };

  return (
    <div className={cx("note", "new")}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleSetNote}
        value={text}
        ref={inputRef}
        onKeyDown={handleEnterPress}
      ></textarea>
      <div className={cx("note-footer")}>
        <small>{limitCharacterNote - text.length} Remaining</small>
        <button onClick={handlAddNote}>Save</button>
      </div>
    </div>
  );
};

export default NoteNew;
