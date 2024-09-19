import { useState } from "react";
import "../styles/Generator.css";
import PersonalInfoDropDown from "./PersonalInfoDropdown";
import Resume from "./Resume";
import profilePlaceholder from '../assets/profile_placeholder.svg';
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
  const [isSentPersonalInfo, setIsSentPersonalInfo] = useState(false);

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

  function handleEditPersonalInfo(e){
    e.preventDefault();
    setIsSentPersonalInfo(false)
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
      <EducationalInfoDropdown  title="Educational Data"/>
      <Resume profileImgUrl={profileImgUrl} personalData={personalData} isSentPersonalInfo={isSentPersonalInfo} />
    </div>
  );
}
