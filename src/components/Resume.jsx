import "../styles/Resume.css";
import cellLogo from "../assets/cellphone.svg";
import emailLogo from "../assets/email-outline.svg";
export default function Resume({
  profileImgUrl,
  personalData,
  isSentPersonalInfo,
}) {

  if (isSentPersonalInfo) {

    return (
      <div className="resume-container">
        <div className="personal-data-container">
          <div className="img-container">
            <img className="profile-img" src={profileImgUrl} />
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
      </div>
    );
  } else {
    return <small>There is no personal information yet.*</small>;
  }
}
