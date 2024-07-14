import { ChangeEvent, FormEvent, useState } from 'react';
import StepOne from './regiSteps/StepOne';
import StepTwo from './regiSteps/StepTwo';
import StepThree from './regiSteps/StepThree';
import StepFour from './regiSteps/StepFour';
import StepFive from './regiSteps/StepFive';
import { TRegiForm } from '../../types';

const NewRegi = () => {
  // const [modal,setModal] = useState(true)

  const [formData, setFormData] = useState<TRegiForm>({
    profile_for: '',
    mobileNumber: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    first_name: '',
    last_name: '',
    father_name: '',
    mother_name: '',

    maritalStatus: '',
    religion: '',
    nationality: '',
    highestQualification: '',
    collegeName: '',
    workingSector: '',
    profession: '',
    professionDetails: '',
    monthlyIncome: '',
    fatherStatus: '',
    fatherOccupation: '',
    motherStatus: '',
    motherOccupation: '',
    siblingsNotMarried: 0,
    siblingsMarried: 0,
    livingCountry: '',
    currentlyLivingIn: '',
    cityLivingIn: '',
    familyDetails: '',
    height: '',
    weight: '',
    bodyType: '',
    complexion: '',
    bloodGroup: '',
    physicalAttributeDetails: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name as keyof TRegiForm]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const steps = [
    {
      component: (
        <StepOne formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      component: (
        <StepTwo formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      component: (
        <StepThree formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      component: (
        <StepFour formData={formData} handleInputChange={handleInputChange} />
      ),
    },
    {
      component: (
        <StepFive formData={formData} handleInputChange={handleInputChange} />
      ),
    },
  ];

  return (
    <div className="row mx-auto font-maven regi-page">
      <div className="col-md-6 mx-auto">
        <div className="card my-5 shadow-lg text-info-emphasis">
          <div className="p-3 w-100 mx-auto">
            <div className="d-flex justify-content-between my-3">
              {step !== 1 && (
                <button
                  className="btn btn-default btn-primary rounded-1"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
              )}
            </div>
            <form
              onSubmit={handleSubmit}
              className="multistep-form m_form_container"
            >
              {steps[step - 1].component}
            </form>
            <div className="my-4 text-center">
              {step !== steps.length && (
                <button
                  className="btn btn-default btn-primary rounded-1"
                  type="button"
                  onClick={handleNext}
                >
                  Continue
                </button>
              )}
              {step === steps.length && (
                <button
                  className="btn btn-default btn-primary rounded-1"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRegi;
