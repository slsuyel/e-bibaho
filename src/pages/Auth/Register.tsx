import React, { useState } from "react";
import StepOne from "./regiSteps/StepOne";
import StepTwo from "./regiSteps/StepTwo";
import StepThree from "./regiSteps/StepThree";
import StepFour from "./regiSteps/StepFour";
import StepFive from "./regiSteps/StepFive";

const Register = () => {
  // State variables to manage form inputs
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    password: "",
    profileCreatedBy: "self",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="row mx-auto font-maven">
      <div className="card col-md-4 mx-auto my-5 shadow-lg text-info-emphasis">
        <div className="p-3 w-100 mx-auto">
          <StepOne formData={formData} handleInputChange={handleInputChange} />
          <StepTwo formData={formData} handleInputChange={handleInputChange} />
          <StepThree
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <StepFour formData={formData} handleInputChange={handleInputChange} />
          <StepFive formData={formData} handleInputChange={handleInputChange} />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
