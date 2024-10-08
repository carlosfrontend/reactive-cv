import { useState } from "react";
import "../styles/Generator.css";
import PersonalInfoDropDown from "./PersonalInfoDropdown";
import Resume from "./Resume";
import EducationalInfoDropdown from "./EducationalInfoDropdown";
import PracticalExperienceDropDown from "./PracticalExperienceDropDown";
import defaultImg from "../assets/Portrait_Placeholder.png";
import Header from "./Header";
import Footer from "./Footer";

export default function Generator() {
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [profileImgUrl, setProfileImgUrl] = useState(null);
  const [personalData, setPersonalData] = useState({
    imageUrl: profileImgUrl,
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
  const [defaultPracticalData, setDefaultPracticalData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [educationalData, setEducationalData] = useState({
    id: 0,
    school: "",
    studyTitle: "",
    date: "",
  });

  const [practicalData, setPracticalData] = useState({
    id: 0,
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [educationalForms, setEducationalForms] = useState([]);

  const [practicalForms, setPracticalForms] = useState([]);

  const [isSentPersonalInfo, setIsSentPersonalInfo] = useState(false);

  const [isSentDefaultEducationalInfo, setIsSentDefaultEducationalInfo] =
    useState(false);
  const [isSentDefaultPracticalData, setIsSentDefaultPracticalData] =
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

  function handleAddPracticalForms() {
    setPracticalData((prev) => ({
      ...prev,
      id: prev.id + 1,
    }));

    setPracticalForms([
      ...practicalForms,
      {
        id: practicalData.id,
        companyName: practicalData.companyName,
        positionTitle: practicalData.positionTitle,
        mainResponsibilities: practicalData.mainResponsibilities,
        startDate: practicalData.startDate,
        endDate: practicalData.endDate,
        isSent: false,
      },
    ]);
  }

  function handleChangeProfileImage(e) {
    const selectedImg = e.target.files[0];
    if (e.target.files.length) {
      let imgCopyUrl = profileImgUrl;
      imgCopyUrl = selectedImg;
      setIsImageChanged(true);
      const blob = URL.createObjectURL(imgCopyUrl);
      setProfileImgUrl(blob);
      setPersonalData({ ...personalData, imageUrl: imgCopyUrl });
    } else {
      let imgCopyUrl = profileImgUrl;
      console.log(imgCopyUrl);
      setIsImageChanged(false);
      const blob = defaultImg.src;
      console.log(blob);
      setProfileImgUrl(blob);
      setPersonalData({ ...personalData, imageUrl: imgCopyUrl });
      console.log(imgCopyUrl === profileImgUrl);
      console.log(profileImgUrl, imgCopyUrl);
    }
  }

  function handlePersonalDataChanges(e) {
    const { name, value } = e.target;
    const personalDataCopy = {
      ...personalData,
      [name]: value,
    };

    setPersonalData(personalDataCopy);
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

  function handleDefaultPracticalChanges(e) {
    const { name, value } = e.target;
    setDefaultPracticalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmitDefaultEducationalInfo(e) {
    e.preventDefault();
    setIsSentDefaultEducationalInfo(true);
  }

  function handleSubmitDefaultPracticalData(e) {
    e.preventDefault();
    setIsSentDefaultPracticalData(true);
  }

  function handleEditDefaultEducationalInfo(e) {
    e.preventDefault();
    setIsSentDefaultEducationalInfo(false);
  }

  function handleEditDefaultPracticalData(e) {
    e.preventDefault();
    setIsSentDefaultPracticalData(false);
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

  function handleChangePracticalForms(e, index) {
    let newArray = practicalForms.slice();
    const obj = newArray[index];
    if (e.target.name === "companyName") {
      obj.companyName = e.target.value;
    } else if (e.target.name === "positionTitle") {
      obj.positionTitle = e.target.value;
    } else if (e.target.name === "mainResponsibilities") {
      obj.mainResponsibilities = e.target.value;
    } else if (e.target.name === "startDate") {
      obj.startDate = e.target.value;
    } else {
      obj.endDate = e.target.value;
    }
    setPracticalForms([...practicalForms], newArray[index]);
  }

  function handleSubmitEducationalForms(e, index) {
    e.preventDefault();
    const educationalFormsCopy = educationalForms.slice();
    educationalFormsCopy[index].isSent = true;
    educationalFormsCopy[index] = [...educationalFormsCopy][index];
    setEducationalForms(educationalFormsCopy);
  }

  function handleSubmitPracticalForms(e, index) {
    e.preventDefault();
    const practicalFormsCopy = practicalForms.slice();
    practicalFormsCopy[index].isSent = true;
    practicalFormsCopy[index] = [...practicalFormsCopy][index];
    setEducationalForms(practicalFormsCopy);
  }

  function handleEditEducationalForms(e, index) {
    e.preventDefault();
    const educationalFormsCopy = educationalForms.slice();
    educationalFormsCopy[index].isSent = false;
    educationalFormsCopy[index] = [...educationalFormsCopy][index];
    setEducationalForms(educationalFormsCopy);
  }

  function handleEditPracticalForms(e, index) {
    e.preventDefault();
    const practicalFormsCopy = practicalForms.slice();
    practicalFormsCopy[index].isSent = false;
    practicalFormsCopy[index] = [...practicalFormsCopy][index];
    setPracticalForms(practicalFormsCopy);
  }

  return (
    <>
      <div className="generator-container">
        <Header></Header>
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
          handleSubmitDefaultEducationalInfo={
            handleSubmitDefaultEducationalInfo
          }
          handleEditDefaultEducationalInfo={handleEditDefaultEducationalInfo}
          isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
          educationalData={educationalData}
          educationalForms={educationalForms}
          handleAddEducationalForms={handleAddEducationalForms}
          handleChangeEducationalForms={handleChangeEducationalForms}
          handleSubmitEducationalForms={handleSubmitEducationalForms}
          handleEditEducationalForms={handleEditEducationalForms}
        />
        <PracticalExperienceDropDown
          text="Practical Data"
          defaultPracticalData={defaultPracticalData}
          onChange={handleDefaultPracticalChanges}
          handleSubmitDefaultPracticalData={handleSubmitDefaultPracticalData}
          handleEditDefaultPracticalData={handleEditDefaultPracticalData}
          isSentDefaultPracticalData={isSentDefaultPracticalData}
          practicalForms={practicalForms}
          handleAddPracticalForms={handleAddPracticalForms}
          handleChangePracticalForms={handleChangePracticalForms}
          handleSubmitPracticalForms={handleSubmitPracticalForms}
          handleEditPracticalForms={handleEditPracticalForms}
        />

        <Resume
          profileImgUrl={profileImgUrl}
          personalData={personalData}
          defaultEducationalData={defaultEducationalData}
          isSentPersonalInfo={isSentPersonalInfo}
          isSentDefaultEducationalInfo={isSentDefaultEducationalInfo}
          isSentDefaultPracticalData={isSentDefaultPracticalData}
          isImageChanged={isImageChanged}
          educationalForms={educationalForms}
          practicalForms={practicalForms}
          defaultPracticalData={defaultPracticalData}
        />
      </div>
      <Footer />
    </>
  );
}
