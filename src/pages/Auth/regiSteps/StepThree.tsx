import { useEffect } from 'react';
import { StepThreeProps } from '../../../types';

const StepThree = ({ formData, handleInputChange }: StepThreeProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <form className="row mx-auto">
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="highestQualification" className="my-1">
            Highest Qualification <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="highestQualification"
            name="highestQualification"
            className="form-select "
            value={formData.highestQualification}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Qualification ---
            </option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="collegeName" className="my-1">
            Education Details
          </label>
          <input
            id="collegeName"
            name="collegeName"
            placeholder="  College/university name"
            className="form-control "
            value={formData.collegeName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="workingSector" className="my-1">
            Working Sector <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="workingSector"
            name="workingSector"
            className="form-select "
            value={formData.workingSector}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Please Select ---
            </option>
            <option value="private">Private Sector</option>
            <option value="public">Public Sector</option>
            <option value="selfEmployed">Self Employed</option>
            <option value="freelancer">Freelancer</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="profession" className="my-1">
            Profession <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="profession"
            name="profession"
            className="form-select "
            value={formData.profession}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Occupation ---
            </option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="teacher">Teacher</option>
            <option value="manager">Manager</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="professionDetails" className="my-1">
            Profession Details
          </label>
          <textarea
            id="professionDetails"
            name="professionDetails"
            placeholder="Enter your profession details"
            className="form-control "
            value={formData.professionDetails}
            onChange={handleInputChange} // This should work now
          ></textarea>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="monthlyIncome" className="my-1">
            Monthly Income
          </label>
          <select
            id="monthlyIncome"
            name="monthlyIncome"
            className="form-select "
            value={formData.monthlyIncome}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Your Monthly Income ---
            </option>
            <option value="private">Keep it private</option>
            <option value="0-5000">0 - 5000</option>
            <option value="5001-10000">5001 - 10000</option>
            <option value="10001-20000">10001 - 20000</option>
            <option value="20001-50000">20001 - 50000</option>
            <option value="50001+">5001+</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
