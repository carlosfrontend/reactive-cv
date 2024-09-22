import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Personal.css";
import editLogo from "../assets/invoice-text-edit-outline.svg";
import saveLogo from "../assets/content-save-outline.svg";

export default function PersonalInfoDropDown({
  text,
  personalData,
  onChange,
  handleChangeProfileImage,
  handleSubmitPersonalInfo,
  isSentPersonalInfo,
  handleEditPersonalInfo
}) {
  const [isActive, setIsActive] = useState(false);

  function handleNavChange() {
    setIsActive(!isActive);
  }

  return (
    <section className="personal-container">
      <nav onClick={handleNavChange} className="navbar">
        <div className="menu">
          {!isActive ? "Show" + " " + text : "Hide" + " " + text}
        </div>
        <img
          className="dropdown-logo"
          src={!isActive ? arrowUpLogo : arrowDownLogo}
          alt={!isActive ? "arrow up logo" : "arrow down logo"}
        />
      </nav>
      {isActive && (
        <form onSubmit={handleSubmitPersonalInfo}>
          <div className="form-group">
            <label htmlFor="profileImgUrl">Choose you personal image</label>
            <input
              type="file"
              id="profileImgUrl"
              name="profileImgUrl"
              accept=".jpg, .jpeg, .png"
              onChange={handleChangeProfileImage}
              disabled={isSentPersonalInfo}
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
              value={personalData.firstName}
              onChange={onChange}
              disabled={isSentPersonalInfo}
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
              value={personalData.lastName}
              onChange={onChange}
              disabled={isSentPersonalInfo}
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
              value={personalData.email}
              onChange={onChange}
              disabled={isSentPersonalInfo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number: <abbr title="required">*</abbr>
            </label>
            <small> Format: 123-456-789</small>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="on"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="Your phone number here"
              value={personalData.phone}
              onChange={onChange}
              disabled={isSentPersonalInfo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">
              Profession: <abbr title="required">*</abbr>
              <input
                type="text"
                name="profession"
                id="profession"
                required
                autoComplete="on"
                placeholder="Your profession here"
                value={personalData.profession}
                onChange={onChange}
                disabled={isSentPersonalInfo}
              />
            </label>
          </div>

          <div className="button-group">
            <button onClick={handleEditPersonalInfo} className="edit">
              <img src={editLogo} alt="edit logo" />
              Edit
            </button>
            <button onSubmit={handleSubmitPersonalInfo} className="save">
              <img src={saveLogo} alt="save logo" />
              Save
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
