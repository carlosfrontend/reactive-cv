import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";

export default function EducationalInfoDropdown({ title }) {
  const [isActive, setIsActive] = useState(false);

  function handleNavChange() {
    setIsActive(!isActive);
  }
  return (
    <section className="educational-container">
      <nav onClick={handleNavChange} className="navbar">
        <div className="menu">
          {!isActive ? "Show" : "Hide"} {title}
        </div>
        <img
          className="dropdown-logo"
          src={!isActive ? arrowUpLogo : arrowDownLogo}
          alt={!isActive ? "arrow up logo" : "arrow down logo"}
        />
      </nav>
      {isActive && (
        <form>
          <div className="form-group">
            <label htmlFor="school">
              School: <abbr title="required">*</abbr>
            </label>
            <input type="text" name="school" id="school" placeholder="School name here"/>
          </div>
          <div className="form-group">
            <label htmlFor="study-title">
              Title: <abbr title="required">*</abbr>
            </label>
            <input type="text" name="study-title" id="study-title" placeholder="Title of study here"/>
          </div>
          <div className="form-group">
          <label htmlFor="date">
            Date: <abbr title="required">*</abbr>
          </label>
          <input type="date" name="date" id="date"/>
          </div>
        </form>
      )}
    </section>
  );
}
