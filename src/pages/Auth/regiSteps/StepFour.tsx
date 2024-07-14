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
          <label htmlFor="father_occupation" className="my-1">
            Father Occupation
          </label>
          <input
            id="father_occupation"
            name="father_occupation"
            placeholder="Father Occupation"
            type="text"
            className="form-control "
            value={formData.father_occupation}
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
          <label htmlFor="mother_occupation" className="my-1">
            Mother Occupation
          </label>
          <input
            id="mother_occupation"
            name="mother_occupation"
            placeholder="Mother Occupation"
            type="text"
            className="form-control "
            value={formData.mother_occupation}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-md-6 mb-2">
          <label htmlFor="living_country" className="my-1">
            Living Country <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="living_country"
            name="living_country"
            className="form-select "
            value={formData.living_country}
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
          <label htmlFor="currently_living_in" className="my-1">
            Currently Living In
          </label>
          <input
            id="currently_living_in"
            name="currently_living_in"
            placeholder="Currently Living In"
            type="text"
            className="form-control "
            value={formData.currently_living_in}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="city_living_in" className="my-1">
            City Living In
          </label>
          <input
            id="city_living_in"
            name="city_living_in"
            placeholder="City Living In"
            type="text"
            className="form-control "
            value={formData.city_living_in}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="family_details" className="my-1">
            Family Details
          </label>
          <textarea
            id="family_details"
            name="family_details"
            placeholder="Please enter your family details"
            className="form-control "
            value={formData.family_details}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
