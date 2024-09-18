import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Educational.css";

export default function EducationalDropDown({ title }) {
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
          <label htmlFor="firstName">
            First Name: <abbr title="required">*</abbr>
          </label>
          <input type="text" name="firstName" id="firstName" required />
          <label htmlFor="lastName">
            Last Name <abbr title="required">*</abbr>
          </label>
          <input type="text" name="lastName" id="lastName" required />
        </form>
      )}
    </section>
  );
}
