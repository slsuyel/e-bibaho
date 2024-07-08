import { useEffect } from 'react';
import { StepFourProps } from '../../../types';

const StepFour: React.FC<StepFourProps> = ({ formData, handleInputChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    'USA',
    'Canada',
    'UK',
    'Australia',
    'Italy',
    'Saudi Arabia',
    'United Arab Emirates',
    'Qatar',
    'Singapore',
    'Malaysia',
    'Kuwait',
    'Oman',
    'Bahrain',
    'Japan',
    'South Korea',
    'India',
    'Pakistan',
  ];

  return (
    <div>
      <form className="row mx-auto">
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="fatherStatus" className="my-1">
            Father Status <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="fatherStatus"
            name="fatherStatus"
            className="form-select "
            value={formData.fatherStatus}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Please Select ---
            </option>
            <option value="employed">Employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="fatherOccupation" className="my-1">
            Father Occupation
          </label>
          <input
            id="fatherOccupation"
            name="fatherOccupation"
            placeholder="Father Occupation"
            type="text"
            className="form-control "
            value={formData.fatherOccupation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="motherStatus" className="my-1">
            Mother Status <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="motherStatus"
            name="motherStatus"
            className="form-select "
            value={formData.motherStatus}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Please Select ---
            </option>
            <option value="housewife">Housewife</option>
            <option value="employed">Employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="motherOccupation" className="my-1">
            Mother Occupation
          </label>
          <input
            id="motherOccupation"
            name="motherOccupation"
            placeholder="Mother Occupation"
            type="text"
            className="form-control "
            value={formData.motherOccupation}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-md-6 mb-2">
          <label htmlFor="livingCountry" className="my-1">
            Living Country <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="livingCountry"
            name="livingCountry"
            className="form-select "
            value={formData.livingCountry}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Living Country ---
            </option>
            {countries.map(division => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="currentlyLivingIn" className="my-1">
            Currently Living In
          </label>
          <input
            id="currentlyLivingIn"
            name="currentlyLivingIn"
            placeholder="Currently Living In"
            type="text"
            className="form-control "
            value={formData.currentlyLivingIn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="cityLivingIn" className="my-1">
            City Living In
          </label>
          <input
            id="cityLivingIn"
            name="cityLivingIn"
            placeholder="City Living In"
            type="text"
            className="form-control "
            value={formData.cityLivingIn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="familyDetails" className="my-1">
            Family Details
          </label>
          <textarea
            id="familyDetails"
            name="familyDetails"
            placeholder="Please enter your family details"
            className="form-control "
            value={formData.familyDetails}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
