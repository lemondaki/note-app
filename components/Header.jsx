import React from "react";
import styles from "../assets/Header.module.scss";
import classNames from "classnames/bind";
import Search from "./Search";
let cx = classNames.bind(styles);

const Header = ({ setSearchInput, setToggleMode }) => {
  const handleToggleMode = () => {
    setToggleMode((toggleMode) => !toggleMode)
  }
  
  return (
    <>
      <div className={cx("header")}>
        <h1>Notes</h1>
        <button className={cx("save")}>
          <span onClick={handleToggleMode}>Toggle Mode</span>
        </button>
      </div>
      <Search setSearchInput={setSearchInput} />
    </>
  );
};

export default Header;
