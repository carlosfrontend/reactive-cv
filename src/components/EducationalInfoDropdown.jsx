import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Educational.css";
import plusLogo from "../assets/plus-circle.svg";
import editLogo from "../assets/invoice-text-edit-outline.svg";
import saveLogo from "../assets/content-save-outline.svg";

export default function EducationalInfoDropdown({
  text,
  defaultEducationalData,
  onChange,
  handleSubmitDefaultEducationalInfo,
  handleEditDefaultEducationalInfo,
  isSentDefaultEducationalInfo,
  educationalForms,
  setEducationalForms,
  handleAddEducationalForms,
  fragmentKey,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleNavChange() {
    setIsActive(!isActive);
  }

  return (
    <section className="educational-container">
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
        <>
          <div className="button-container">
            <button className="add-btn" onClick={handleAddEducationalForms}>
              <img src={plusLogo} />
            </button>
            {fragmentKey}
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
          {educationalForms.map((form) => (
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
                  onChange={(e) => {
                    let newEducationalFormsCopy = [];
                    newEducationalFormsCopy = [form];
                    const obj = newEducationalFormsCopy.find(
                      (el) => el.id === form.id
                    );
                    obj.school = e.target.value;
                    obj.studyTitle = "";
                    obj.date = "";
                    newEducationalFormsCopy[form.id] = obj;
                    console.log(obj);
                    setEducationalForms(
                      [...educationalForms],
                      newEducationalFormsCopy
                    );
                  }}
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
                  onChange={(e) => {
                    let newEducationalFormsCopy = [];
                    newEducationalFormsCopy = [form];
                    const obj = newEducationalFormsCopy.find(
                      (el) => el.id === form.id
                    );
                    obj.school = form.school;
                    obj.studyTitle = e.target.value;
                    obj.date = "";
                    newEducationalFormsCopy[form.id] = obj;
                    console.log(obj);
                    setEducationalForms(
                      [...educationalForms],
                      newEducationalFormsCopy
                    );
                  }}
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
                  onChange={(e) => {
                    let newEducationalFormsCopy = [];
                    newEducationalFormsCopy = [form];
                    const obj = newEducationalFormsCopy.find(
                      (el) => el.id === form.id
                    );
                    obj.school = form.school;
                    obj.studyTitle = form.studyTitle;
                    obj.date = e.target.value;
                    newEducationalFormsCopy[form.id] = obj;
                    console.log(obj);
                    setEducationalForms(
                      [...educationalForms],
                      newEducationalFormsCopy
                    );
                  }}
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
