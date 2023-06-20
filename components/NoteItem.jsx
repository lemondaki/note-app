import React from "react";
import { useRef } from "react";
import { MdDelete } from "react-icons/md";
import styles from "../assets/NoteItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const NoteItem = ({ forwardedRef, note, deleteNote, setText, onSelectItemEdit }) => {
  function handleClickEditNote() {
    onSelectItemEdit(note);
    setText(note.text);
    forwardedRef.current.focus();
  }

  return (
    <div className={cx("note")}>
      <span>{note.text}</span>
      <div className={cx("note-footer")}>
        <span>{note.date}</span>
        <div className="wrap-btn">
          <MdDelete className={cx("delete-icon")} onClick={() => deleteNote(note.id)} />
          <button onClick={handleClickEditNote}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
