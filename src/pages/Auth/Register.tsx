import { ChangeEvent, FormEvent, useState } from "react";
import "../../styles/MultySteps.css";
import Multistep from "react-multistep";
import StepOne from "./regiSteps/StepOne";
import StepTwo from "./regiSteps/StepTwo";
import StepThree from "./regiSteps/StepThree";
import StepFour from "./regiSteps/StepFour";
import StepFive from "./regiSteps/StepFive";
import { TRegiForm } from "../../types";
/* react-stepzilla */
const Register = () => {
  const [formData, setFormData] = useState<TRegiForm>({
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
      [name as keyof TRegiForm]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields = ["mobileNumber", "email", "password"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      alert(`Please fill out all required fields: ${missingFields.join(", ")}`);
      return;
    }
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
    <div className="row mx-auto font-maven regi-page">
      <div className="col-md-9 mx-auto">
        <div className="card  my-5 shadow-lg text-info-emphasis">
          <div className="p-3 w-100 mx-auto">
            <form onSubmit={handleSubmit} className="multistep-form">
              <Multistep steps={steps} />
              <div className="d-flex justify-content-end my-3">
                {last && (
                  <button
                    className=" btn-default btn-primary  rounded-1"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
