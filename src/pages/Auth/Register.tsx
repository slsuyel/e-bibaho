import { ChangeEvent, FormEvent, useState } from 'react';
import StepOne from './regiSteps/StepOne';
import StepTwo from './regiSteps/StepTwo';
import StepThree from './regiSteps/StepThree';
import StepFour from './regiSteps/StepFour';
import StepFive from './regiSteps/StepFive';
import { TRegiForm } from '../../types';

const NewRegi = () => {
  const [formData, setFormData] = useState<TRegiForm>({
    mobileNumber: '',
    email: '',
    password: '',
    dateOfBirth: '',
    profileCreatedBy: 'self',
    gender: '',
    candidateName: '',
    parentName: '',
    day: '',
    month: '',
    year: '',
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
    homeDivision: '',
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
            <form onSubmit={handleSubmit} className="multistep-form">
              {steps[step - 1].component}
              <div className="d-flex justify-content-between my-3">
                {step !== 1 && (
                  <button
                    className="btn btn-default btn-primary rounded-1"
                    onClick={handleBack}
                  >
                    Previous
                  </button>
                )}
                {step !== steps.length && (
                  <button
                    className="btn btn-default btn-primary rounded-1"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRegi;
