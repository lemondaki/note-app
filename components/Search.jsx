import React, { useState, useEffect } from "react";
import style from "../assets/Search.module.scss";
import { MdSearch } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "../assets/Search.module.scss";
let cx = classNames.bind(styles);
const Search = ({ setSearchInput }) => {
  const handleSetSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className={cx("search")}>
      <MdSearch className={cx("search-icon")} />
      <input type="text" placeholder="type to search..." onChange={handleSetSearchInput} />
    </div>
  );
};

export default Search;
