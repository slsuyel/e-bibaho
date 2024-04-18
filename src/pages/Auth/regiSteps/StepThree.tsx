import { useEffect } from "react";
import { StepThreeProps } from "../../../types";

const StepThree = ({ formData, handleInputChange }: StepThreeProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="highestQualification" className="my-1">
            Highest Qualification <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="highestQualification"
            name="highestQualification"
            className="form-select rounded-0"
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
        <div className="form-group mb-2">
          <label htmlFor="educationDetails" className="my-1">
            Education Details
          </label>
          <textarea
            id="educationDetails"
            name="educationDetails"
            placeholder="Please enter education details"
            className="form-control rounded-0"
            value={formData.educationDetails}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="workingSector" className="my-1">
            Working Sector <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="workingSector"
            name="workingSector"
            className="form-select rounded-0"
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
        <div className="form-group mb-2">
          <label htmlFor="profession" className="my-1">
            Profession <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="profession"
            name="profession"
            className="form-select rounded-0"
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
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="professionDetails" className="my-1">
            Profession Details
          </label>
          <textarea
            id="professionDetails"
            name="professionDetails"
            placeholder="Enter your profession details"
            className="form-control rounded-0"
            value={formData.professionDetails}
            onChange={handleInputChange} // This should work now
          ></textarea>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="monthlyIncome" className="my-1">
            Monthly Income
          </label>
          <select
            id="monthlyIncome"
            name="monthlyIncome"
            className="form-select rounded-0"
            value={formData.monthlyIncome}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Your Monthly Income ---
            </option>
            <option value="private">Keep it private</option>
            <option value="0-500">0 - 500</option>
            <option value="501-1000">501 - 1000</option>
            <option value="1001-2000">1001 - 2000</option>
            <option value="2001-5000">2001 - 5000</option>
            <option value="5001+">5001+</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
