import { useState } from "react";
import "../styles/Generator.css";
import PersonalInfoDropDown from "./PersonalInfoDropdown";
import Resume from "./Resume";
import profilePlaceholder from "../assets/profile_placeholder.svg";
import EducationalInfoDropdown from "./EducationalInfoDropdown";

export default function Generator() {
  const [profileImgUrl, setProfileImgUrl] = useState(profilePlaceholder);
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
  });

  const [defaultEducationalData, setDefaultEducationalData] = useState({
    school: "",
    studyTitle: "",
    date: "",
  });

  const [isSentPersonalInfo, setIsSentPersonalInfo] = useState(false);
  const [isSentDefaultEducationalInfo, setIsSentDefaultEducationalInfo] =
    useState(false);

  function handleChangeProfileImage(e) {
    setProfileImgUrl(URL.createObjectURL(e.target.files[0]));
  }

  function handlePersonalDataChanges(e) {
    const { name, value } = e.target;

    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmitPersonalInfo(e) {
    e.preventDefault();
    setIsSentPersonalInfo(true);
  }

  function handleEditPersonalInfo(e) {
    e.preventDefault();
    setIsSentPersonalInfo(false);
  }

  function handleDefaultEducationalChanges(e) {
    const { name, value } = e.target;
    setDefaultEducationalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmitDefaultEducationalInfo(e) {
    e.preventDefault();
    setIsSentDefaultEducationalInfo(true);
  }

  function handleEditDefaultEducationalInfo(e) {
    e.preventDefault();
    setIsSentDefaultEducationalInfo(false);
  }

  return (
    <div className="generator-container">
      <PersonalInfoDropDown
        onChange={handlePersonalDataChanges}
        handleChangeProfileImage={handleChangeProfileImage}
        personalData={personalData}
        title="Personal Data"
        handleSubmitPersonalInfo={handleSubmitPersonalInfo}
        isSentPersonalInfo={isSentPersonalInfo}
        handleEditPersonalInfo={handleEditPersonalInfo}
      />
      <EducationalInfoDropdown
        defaultEducationalData={defaultEducationalData}
        title="Educational Data"
        onChange={handleDefaultEducationalChanges}
        handleSubmitDefaultEducationalInfo={handleSubmitDefaultEducationalInfo}
        handleEditDefaultEducationalInfo={handleEditDefaultEducationalInfo}
        isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
      />
      <Resume
        profileImgUrl={profileImgUrl}
        personalData={personalData}
        defaultEducationalData={defaultEducationalData}
        isSentPersonalInfo={isSentPersonalInfo}
        isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
      />
    </div>
  );
}
