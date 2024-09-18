import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Personal.css";

export default function PersonalInfoDropDown({ title }) {
  const [isActive, setIsActive] = useState(false);

  function handleNavChange() {
    setIsActive(!isActive);
  }

  return (
    <section className="personal-container">
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
            <label htmlFor="profile_pic">Choose you personal image</label>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">
              First Name: <abbr title="required">*</abbr>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              autoComplete="given-name"
              placeholder="Your name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name: <abbr title="required">*</abbr>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              autoComplete="family-name"
              placeholder="Your last name here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email: <abbr title="required">*</abbr>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="on"
              placeholder="Your email here"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number: <abbr title="required">*</abbr>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="on"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="Your phone number here"
            />
          </div>

          <div className="button-group">
            <button className="edit">Edit</button>
            <button className="save">Save</button>
          </div>
        </form>
      )}
    </section>
  );
}
