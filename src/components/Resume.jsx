import "../styles/Resume.css";
import cellLogo from "../assets/cellphone.svg";
import emailLogo from "../assets/email-outline.svg";
import profilePlaceholder from "../assets/Portrait_Placeholder.png";

export default function Resume({
  profileImgUrl,
  personalData,
  isSentPersonalInfo,
  defaultEducationalData,
  isSentDefaultEducationalInfo,
  isImageChanged,
  educationalForms,
  practicalForms,
  defaultPracticalData,
  isSentDefaultPracticalData,
}) {
  const allDataAreTrue = (current) => current.isSent === true;
  if (
    isSentPersonalInfo &&
    isSentDefaultEducationalInfo &&
    isSentDefaultPracticalData &&
    educationalForms.every(allDataAreTrue) &&
    practicalForms.every(allDataAreTrue)
  ) {
    return (
      <div className="resume-container">
        <div className="personal-data-container">
          <div className="img-container">
            <img
              className="profile-img"
              src={isImageChanged ? profileImgUrl : profilePlaceholder}
            />
          </div>
          <div className="personal-info">
            <h1>{personalData.firstName + " " + personalData.lastName}</h1>
            <h2>{"(" + personalData.profession + ")"}</h2>
            <div className="email-container">
              <img src={emailLogo} alt="email logo" />
              <h3>{personalData.email}</h3>
            </div>
            <div className="phone-container">
              <img src={cellLogo} alt="cellphone logo" />
              <h3>{personalData.phone}</h3>
            </div>
          </div>
        </div>
        <div className="default-ed-info">
          <h2>Educational Experience</h2>

          <div className="default-ed-data">
            <h3>Date: {defaultEducationalData.date}</h3>
            <h3>School: {defaultEducationalData.school}</h3>
            <h3>Title: {defaultEducationalData.studyTitle}</h3>
          </div>
          {educationalForms.map((el, index) => (
            <div key={index} className="ed-forms-data">
              <h3>Date: {el.date}</h3>
              <h3>School: {el.school}</h3>
              <h3>Title: {el.studyTitle}</h3>
            </div>
          ))}
        </div>
        <div className="default-pr-info">
          <h2>Practical Experience</h2>

          <div className="default-pr-data">
            <h3>Start Date: {defaultPracticalData.startDate}</h3>
            <h3>End Date: {defaultPracticalData.endDate}</h3>
            <h3>Position Title: {defaultPracticalData.positionTitle}</h3>
            <h3>Company Name: {defaultPracticalData.companyName}</h3>
            <h3>Main responsibilities:</h3>
            <p>{defaultPracticalData.mainResponsibilities}</p>
          </div>
          {practicalForms.map((el, index) => (
            <div key={index} className="pr-forms-data">
              <h3>Start Date: {el.startDate}</h3>
              <h3>End Date: {el.endDate}</h3>
              <h3>Position Title: {el.positionTitle}</h3>
              <h3>Company Name: {el.companyName}</h3>
              <h3>Main responsibilities:</h3>
              <p>{el.mainResponsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="resume-container">
        <small>There is no information yet.*</small>
      </div>
    );
  }
}
