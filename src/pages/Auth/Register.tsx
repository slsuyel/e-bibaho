import { ChangeEvent, FormEvent, useState } from "react";
import "../../styles/MultySteps.css";
import Multistep from "react-multistep";
import StepOne from "./regiSteps/StepOne";
import StepTwo from "./regiSteps/StepTwo";
import StepThree from "./regiSteps/StepThree";
import StepFour from "./regiSteps/StepFour";
import StepFive from "./regiSteps/StepFive";

const Register = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    password: "",
    profileCreatedBy: "self",
    gender: "",
    candidateName: "",
    parentName: "",
    day: "",
    month: "",
    year: "",
    maritalStatus: "",
    religion: "",
    nationality: "",
    highestQualification: "",
    educationDetails: "",
    workingSector: "",
    profession: "",
    professionDetails: "",
    monthlyIncome: "",
    fatherStatus: "",
    fatherOccupation: "",
    motherStatus: "",
    motherOccupation: "",
    siblingsNotMarried: 0,
    siblingsMarried: 0,
    homeDivision: "",
    currentlyLivingIn: "",
    cityLivingIn: "",
    familyDetails: "",
    height: "",
    weight: "",
    bodyType: "",
    complexion: "",
    bloodGroup: "",
    physicalAttributeDetails: "",
  });

  const [last, setLast] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const steps = [
    {
      name: "StepOne",
      component: (
        <StepOne formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      name: "StepTwo",
      component: (
        <StepTwo formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      name: "StepThree",
      component: (
        <StepThree formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      name: "StepFour",
      component: (
        <StepFour formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      name: "StepFive",
      component: (
        <StepFive
          setLast={setLast}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      ),
    },
  ];

  return (
    <div className="row mx-auto font-maven">
      <div className="card col-md-8 mx-auto my-5 shadow-lg text-info-emphasis">
        <div className="p-3 w-100 mx-auto">
          <form onSubmit={handleSubmit} className="multistep-form">
            <Multistep steps={steps} />
            <div className="d-flex justify-content-end my-3">
              {last && (
                <button className="btn-primary btn rounded-0" type="submit">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
