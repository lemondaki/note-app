import React from "react";
import { MdDelete } from "react-icons/md";
import styles from "../assets/NoteItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const NoteItem = ({ id, text, date, deleteNote }) => {
  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className={cx("note")}>
      <span>{text}</span>
      <div className={cx("note-footer")}>
        <span>{date}</span>
        <span>
          <MdDelete className={cx("delete-icon")} onClick={() => handleDeleteNote(id)} />
        </span>
      </div>
    </div>
  );
};

export default NoteItem;
