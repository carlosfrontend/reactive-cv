import { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-drop-circle.svg";
import arrowUpLogo from "../assets/arrow-up-drop-circle-outline.svg";
import "../styles/Practical.css";
import plusLogo from "../assets/plus-circle.svg";
import editLogo from "../assets/invoice-text-edit-outline.svg";
import saveLogo from "../assets/content-save-outline.svg";

export default function PracticalExperienceDropDown({
  text,
  defaultPracticalData,
  onChange,
  handleSubmitDefaultPracticalData,
  handleEditDefaultPracticalData,
  isSentDefaultPracticalData,
  practicalForms,
  handleAddPracticalForms,
  handleChangePracticalForms,
  handleSubmitPracticalForms,
  handleEditPracticalForms,
}) {
  const [isActive, setIsActive] = useState(false);

  function handleNavChange() {
    setIsActive(!isActive);
  }

  return (
    <section className="practical-container">
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
            <button className="add-btn" onClick={handleAddPracticalForms}>
              <img src={plusLogo} />
            </button>
          </div>
          <form onSubmit={handleSubmitDefaultPracticalData}>
            <div className="form-group">
              <label htmlFor="companyName">
                Company Name: <abbr title="required">*</abbr>
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Company name here"
                value={defaultPracticalData.companyName}
                onChange={onChange}
                disabled={isSentDefaultPracticalData}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="positionTitle">
                Position Title: <abbr title="required">*</abbr>
              </label>
              <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                placeholder="Position title here"
                value={defaultPracticalData.positionTitle}
                onChange={onChange}
                disabled={isSentDefaultPracticalData}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mainResponsibilities">
                Main Responsibilities: <abbr title="required">*</abbr>{" "}
              </label>
              <small>Maximum of 160 characters</small>
              <textarea
                name="mainResponsibilities"
                rows={10}
                cols={50}
                id="mainResponsibilities"
                placeholder="Main responsibilities of your jobs here"
                required
                maxLength={160}
                value={defaultPracticalData.mainResponsibilities}
                onChange={onChange}
                disabled={isSentDefaultPracticalData}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="startDate">
                Start Date: <abbr title="required">*</abbr>
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={defaultPracticalData.startDate}
                onChange={onChange}
                disabled={isSentDefaultPracticalData}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">
                End Date: <abbr title="required">*</abbr>
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={defaultPracticalData.endDate}
                onChange={onChange}
                disabled={isSentDefaultPracticalData}
                required
              />
            </div>
            <div className="button-group">
              <button onClick={handleEditDefaultPracticalData} className="edit">
                <img src={editLogo} alt="edit logo" />
                Edit
              </button>
              <button
                onSubmit={handleSubmitDefaultPracticalData}
                className="save"
              >
                <img src={saveLogo} alt="save logo" />
                Save
              </button>
            </div>
          </form>
          {practicalForms.map((form) => (
            <form
              onSubmit={(e) => handleSubmitPracticalForms(e, form.id)}
              key={form.id}
            >
              <div className="form-group">
                <label htmlFor="companyName">
                  Company Name: <abbr title="required">*</abbr>
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="Company name here"
                  value={form.companyName}
                  required
                  onChange={(e) => handleChangePracticalForms(e, form.id)}
                  disabled={practicalForms.find((el) => {
                    if (el.id === form.id) {
                      return el.isSent;
                    }
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="positionTitle">
                  Position Title: <abbr title="required">*</abbr>
                </label>
                <input
                  type="text"
                  name="positionTitle"
                  id="positionTitle"
                  placeholder="Position title here"
                  value={form.positionTitle}
                  required
                  onChange={(e) => handleChangePracticalForms(e, form.id)}
                  disabled={practicalForms.find((el) => {
                    if (el.id === form.id) {
                      return el.isSent;
                    }
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mainResponsibilities">
                  Main Responsibilities: <abbr title="required">*</abbr>{" "}
                </label>
                <small>Maximum of 160 characters</small>
                <textarea
                  name="mainResponsibilities"
                  id="mainResponsibilities"
                  rows={10}
                  cols={50}
                  placeholder="Main responsibilities of your jobs here"
                  required
                  maxLength={160}
                  value={form.mainResponsibilities}
                  onChange={(e) => handleChangePracticalForms(e, form.id)}
                  disabled={practicalForms.find((el) => {
                    if (el.id === form.id) {
                      return el.isSent;
                    }
                  })}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="startDate">
                  Start Date: <abbr title="required">*</abbr>
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={form.startDate}
                  onChange={(e) => handleChangePracticalForms(e, form.id)}
                  disabled={practicalForms.find((el) => {
                    if (el.id === form.id) {
                      return el.isSent;
                    }
                  })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">
                  End Date: <abbr title="required">*</abbr>
                </label>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={form.endDate}
                  onChange={(e) => handleChangePracticalForms(e, form.id)}
                  disabled={practicalForms.find((el) => {
                    if (el.id === form.id) {
                      return el.isSent;
                    }
                  })}
                  required
                />
              </div>
              <div className="button-group">
                <button
                  onClick={(e) => handleEditPracticalForms(e, form.id)}
                  className="edit"
                >
                  <img src={editLogo} alt="edit logo" />
                  Edit
                </button>
                <button
                  onSubmit={(e) => handleSubmitPracticalForms(e, form.id)}
                  className="save"
                >
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
