import { useLocation } from "react-router-dom";
import BasicInfoEdit from "./BasicInfoEdit";
import BackBtn from "../../../../components/reusable/BackBtn";
import ReligiousEdit from "./ReligiousEdit";
import FamilyEdit from "./FamilyEdit";

const EditProfileInfo = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get("sec");

  return (
    <div className="container mt-4">
      <BackBtn />
      {section === "basic" ? (
        <BasicInfoEdit />
      ) : section == "religious" ? (
        <ReligiousEdit />
      ) : section == "family" ? (
        <FamilyEdit />
      ) : (
        "Others"
      )}
    </div>
  );
};

export default EditProfileInfo;
