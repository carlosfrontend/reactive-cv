import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Educational.css";
import plusLogo from "../assets/plus-circle.svg";
import editLogo from "../assets/invoice-text-edit-outline.svg";
import saveLogo from "../assets/content-save-outline.svg";

export default function EducationalInfoDropdown({
  title,
  defaultEducationalData,
  onChange,
  handleSubmitDefaultEducationalInfo,
  handleEditDefaultEducationalInfo,
  isSentDefaultEducationalInfo,
  educationalForms,
  handleAddEducationalForms,
  handleEducationalFormsChanges
}) {
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
        <>
          <div className="button-container">
            <button className="add-btn" onClick={handleAddEducationalForms}>
              <img src={plusLogo} />
            </button>
          </div>
          <form onSubmit={handleSubmitDefaultEducationalInfo}>
            <div className="form-group">
              <label htmlFor="school">
                School: <abbr title="required">*</abbr>
              </label>
              <input
                type="text"
                name="school"
                id="school"
                placeholder="School name here"
                value={defaultEducationalData.school}
                onChange={onChange}
                disabled={isSentDefaultEducationalInfo}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studyTitle">
                Title: <abbr title="required">*</abbr>
              </label>
              <input
                type="text"
                name="studyTitle"
                id="studyTitle"
                placeholder="Title of study here"
                value={defaultEducationalData.studyTitle}
                onChange={onChange}
                disabled={isSentDefaultEducationalInfo}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">
                Date: <abbr title="required">*</abbr>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={defaultEducationalData.date}
                onChange={onChange}
                disabled={isSentDefaultEducationalInfo}
                required
              />
            </div>
            <div className="button-group">
              <button
                onClick={handleEditDefaultEducationalInfo}
                className="edit"
              >
                <img src={editLogo} alt="edit logo" />
                Edit
              </button>
              <button
                onSubmit={handleSubmitDefaultEducationalInfo}
                className="save"
              >
                <img src={saveLogo} alt="save logo" />
                Save
              </button>
            </div>
          </form>
          {educationalForms?.map((form) => (
            <form key={form.id}>
              <div className="form-group">
                <label htmlFor="school">
                  School: <abbr title="required">*</abbr>
                </label>
                <input
                  type="text"
                  name="school"
                  id="school"
                  placeholder="School name here"
                  value={form.school}
                  required
                  onChange={handleEducationalFormsChanges}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studyTitle">
                  Title: <abbr title="required">*</abbr>
                </label>
                <input
                  type="text"
                  name="studyTitle"
                  id="studyTitle"
                  placeholder="Title of study here"
                  value={form.studyTitle}
                  required
                  onChange={handleEducationalFormsChanges}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">
                  Date: <abbr title="required">*</abbr>
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={form.date}
                  required
                  onChange={handleEducationalFormsChanges}
                />
              </div>
              <div className="button-group">
                <button className="edit">
                  <img src={editLogo} alt="edit logo" />
                  Edit
                </button>
                <button className="save">
                  <img src={saveLogo} alt="save logo" />
                  Save
                </button>
              </div>
            </form>
          ))}
        </>
      )}
    </section>
  );
}
