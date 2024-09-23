import { useState } from "react";
import "../styles/Generator.css";
import PersonalInfoDropDown from "./PersonalInfoDropdown";
import Resume from "./Resume";
import EducationalInfoDropdown from "./EducationalInfoDropdown";

export default function Generator() {
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [profileImgUrl, setProfileImgUrl] = useState();
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

  const [educationalData, setEducationalData] = useState({
    id: 0,
    school: "",
    studyTitle: "",
    date: "",
  });

  const [educationalForms, setEducationalForms] = useState([]);

  const [isSentPersonalInfo, setIsSentPersonalInfo] = useState(false);

  const [isSentDefaultEducationalInfo, setIsSentDefaultEducationalInfo] =
    useState(false);

  function handleAddEducationalForms() {
    setEducationalData((prev) => ({
      ...prev,
      id: prev.id + 1,
    }));

    setEducationalForms([
      ...educationalForms,
      {
        id: educationalData.id,
        school: educationalData.school,
        studyTitle: educationalData.studyTitle,
        date: educationalData.date,
        isSent: false,
      },
    ]);
  }

  function handleChangeProfileImage(e) {
    setProfileImgUrl(URL.createObjectURL(e.target.files[0]));
    setIsImageChanged(true);
  }

  function handlePersonalDataChanges(e) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
      id: crypto.randomUUID(),
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

  function handleChangeEducationalForms(e, index) {
    let newArray = educationalForms.slice();
    const obj = newArray[index];
    if (e.target.name === "school") {
      obj.school = e.target.value;
    } else if (e.target.name === "studyTitle") {
      obj.studyTitle = e.target.value;
    } else {
      obj.date = e.target.value;
    }
    setEducationalForms([...educationalForms], newArray[index]);
  }

  function handleSubmitEducationalForms(e) {
    e.preventDefault();
    const educationalFormsCopy = educationalForms.slice();
    educationalFormsCopy.map((el) => (el.isSent = true));
    setEducationalForms([...educationalForms], educationalFormsCopy);
  }

  function handleEditEducationalForms(e,index) {
    e.preventDefault();
    const educationalFormsCopy = educationalForms.slice();
    educationalFormsCopy[index]["isSent"] = false;
    setEducationalForms([...educationalForms], educationalFormsCopy);
  }

  return (
    <div className="generator-container">
      <PersonalInfoDropDown
        onChange={handlePersonalDataChanges}
        handleChangeProfileImage={handleChangeProfileImage}
        personalData={personalData}
        text="Personal Data"
        handleSubmitPersonalInfo={handleSubmitPersonalInfo}
        isSentPersonalInfo={isSentPersonalInfo}
        handleEditPersonalInfo={handleEditPersonalInfo}
      />
      <EducationalInfoDropdown
        defaultEducationalData={defaultEducationalData}
        text="Educational Data"
        onChange={handleDefaultEducationalChanges}
        handleSubmitDefaultEducationalInfo={handleSubmitDefaultEducationalInfo}
        handleEditDefaultEducationalInfo={handleEditDefaultEducationalInfo}
        isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
        educationalData={educationalData}
        educationalForms={educationalForms}
        handleAddEducationalForms={handleAddEducationalForms}
        handleChangeEducationalForms={handleChangeEducationalForms}
        handleSubmitEducationalForms={handleSubmitEducationalForms}
        handleEditEducationalForms={handleEditEducationalForms}
      />
      <Resume
        profileImgUrl={profileImgUrl}
        personalData={personalData}
        defaultEducationalData={defaultEducationalData}
        isSentPersonalInfo={isSentPersonalInfo}
        isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
        isImageChanged={isImageChanged}
        educationalForms={educationalForms}
      />
    </div>
  );
}
