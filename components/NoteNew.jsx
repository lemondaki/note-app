import React from "react";
import styles from "../assets/NoteItem.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);
const NoteNew = ({ forwardedRef, addNote, editNote, text, setText, selectItemEdit, onSelectItemEdit }) => {
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
    forwardedRef.current.focus();
  };

  const handleEditNote = (id, text) => {
    editNote(id, text);
    setText("");
    onSelectItemEdit("");
  };

  return (
    <div className={cx("note", "new")}>
      <textarea
        className={selectItemEdit ? "on-edit" : ""}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleSetNote}
        value={text}
        ref={forwardedRef}
      ></textarea>
      <div className={cx("note-footer")}>
        <small>{limitCharacterNote - text.length} Remaining</small>
        {selectItemEdit ? (
          <button onClick={() => handleEditNote(selectItemEdit.id, text)}>Save Edit</button>
        ) : (
          <button onClick={handlAddNote}>Save</button>
        )}
      </div>
    </div>
  );
};

export default NoteNew;
