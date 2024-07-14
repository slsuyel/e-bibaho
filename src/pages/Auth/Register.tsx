// import { ChangeEvent, FormEvent, useState } from 'react';
// import StepOne from './regiSteps/StepOne';
// import StepTwo from './regiSteps/StepTwo';
// import StepThree from './regiSteps/StepThree';
// import StepFour from './regiSteps/StepFour';
// import StepFive from './regiSteps/StepFive';
// import { TRegiForm } from '../../types';
// import { Modal } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const NewRegi = () => {
//   const [modal, setModal] = useState(true);
//   const navigate = useNavigate();
//   const handleModal = () => {
//     navigate('/');
//     setModal(false);
//   };

//   const [formData, setFormData] = useState<TRegiForm>({
//     profile_for: '',
//     mobile_number: '',
//     email: '',
//     password: '',
//     date_of_birth: '',
//     gender: '',
//     first_name: '',
//     last_name: '',
//     father_name: '',
//     mother_name: '',
//     marital_status: '',
//     religion: '',
//     nationality: '',
//     highest_qualification: '',
//     college_name: '',
//     working_sector: '',
//     profession: '',
//     profession_details: '',
//     monthly_income: '',
//     father_occupation: '',

//     mother_occupation: '',
//     living_country: '',
//     currently_living_in: '',
//     city_living_in: '',
//     family_details: '',
//     height: '',
//     weight: '',
//     bodyType: '',
//     race: '',
//     blood_group: '',
//   });

//   const [step, setStep] = useState(1);

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name as keyof TRegiForm]: value,
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const steps = [
//     {
//       component: (
//         <StepOne formData={formData} handleInputChange={handleInputChange} />
//       ),
//     },
//     {
//       component: (
//         <StepTwo formData={formData} handleInputChange={handleInputChange} />
//       ),
//     },
//     {
//       component: (
//         <StepThree formData={formData} handleInputChange={handleInputChange} />
//       ),
//     },
//     {
//       component: (
//         <StepFour formData={formData} handleInputChange={handleInputChange} />
//       ),
//     },
//     {
//       component: (
//         <StepFive formData={formData} handleInputChange={handleInputChange} />
//       ),
//     },
//   ];

//   return (
//     <div className="row mx-auto font-maven regi-page m_form_container">
//       <Modal open={modal} onCancel={handleModal} footer={null}>
//         <div className=" text-info-emphasis">
//           <div className="p-3 w-100 mx-auto">
//             <div className="d-flex justify-content-between my-3">
//               {step !== 1 && (
//                 <button
//                   className="btn btn-default btn-primary rounded-1"
//                   onClick={handleBack}
//                 >
//                   <i className="fa-solid fa-arrow-left"></i>
//                 </button>
//               )}
//             </div>
//             <form onSubmit={handleSubmit} className="multistep-form ">
//               {steps[step - 1].component}
//               <div className="my-4 text-center">
//                 {step !== steps.length && (
//                   <button
//                     className="btn btn-default btn-primary rounded-1"
//                     type="button"
//                     onClick={handleNext}
//                   >
//                     Continue
//                   </button>
//                 )}
//                 {step === steps.length && (
//                   <button
//                     className="btn btn-default btn-primary rounded-1"
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default NewRegi;
import { ChangeEvent, FormEvent, useState } from 'react';
import StepOne from './regiSteps/StepOne';
import StepTwo from './regiSteps/StepTwo';
import StepThree from './regiSteps/StepThree';
import StepFour from './regiSteps/StepFour';
import StepFive from './regiSteps/StepFive';
import { TRegiForm } from '../../types';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const NewRegi = () => {
  const [modal, setModal] = useState(true);
  const navigate = useNavigate();
  const handleModal = () => {
    navigate('/');
    setModal(false);
  };

  const [formData, setFormData] = useState<TRegiForm>({
    profile_for: '',
    mobile_number: '',
    email: '',
    password: '',
    date_of_birth: '',
    gender: '',
    first_name: '',
    last_name: '',
    father_name: '',
    mother_name: '',
    marital_status: '',
    religion: '',
    nationality: '',
    highest_qualification: '',
    college_name: '',
    working_sector: '',
    profession: '',
    profession_details: '',
    monthly_income: '',
    father_occupation: '',
    mother_occupation: '',
    living_country: '',
    currently_living_in: '',
    city_living_in: '',
    family_details: '',
    height: '',
    weight: '',
    bodyType: '',
    race: '',
    blood_group: '',
  });

  const [step, setStep] = useState(1);

  const requiredFields: { [key: number]: string[] } = {
    1: ['profile_for', 'mobile_number', 'email'],
    2: ['date_of_birth', 'gender', 'first_name', 'last_name'],
  };

  const isValidStep = (step: number) => {
    const currentStepRequiredFields = requiredFields[step];
    return currentStepRequiredFields.every(
      (field: string | number) => !!formData[field]
    );
  };

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
    // Perform form submission logic here
  };

  const handleNext = () => {
    if (isValidStep(step)) {
      setStep(step + 1);
    } else {
      console.log('Please fill in all required fields.');
      // Optionally, show an error message to the user
    }
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
    <div className="row mx-auto font-maven regi-page m_form_container">
      <Modal
        open={modal}
        onCancel={handleModal}
        footer={null}
        className="m_form_modal"
      >
        <div className=" text-info-emphasis">
          <div className="p-3 w-100 mx-auto">
            <div className="d-flex justify-content-between my-3">
              {step !== 1 && (
                <button
                  className="btn btn-default btn-primary rounded-1"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-arrow-left"></i> Back
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="multistep-form ">
              {steps[step - 1].component}
              <div className="my-4 text-center">
                {step !== steps.length && (
                  <button
                    className="btn btn-default btn-primary rounded-1"
                    type="button"
                    onClick={handleNext}
                    disabled={!isValidStep(step)}
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
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewRegi;
