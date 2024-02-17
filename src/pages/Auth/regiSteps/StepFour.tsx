import React from "react";

interface FormData {
  fatherStatus: string;
  fatherOccupation: string;
  motherStatus: string;
  motherOccupation: string;
  siblingsNotMarried: number;
  siblingsMarried: number;
  homeDivision: string;
  currentlyLivingIn: string;
  cityLivingIn: string;
  familyDetails: string;
}

interface StepFourProps {
  formData: FormData;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

const StepFour: React.FC<StepFourProps> = ({ formData, handleInputChange }) => {
  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="fatherStatus" className="my-1">
            Father Status*
          </label>
          <select
            id="fatherStatus"
            name="fatherStatus"
            className="form-select rounded-0"
            value={formData.fatherStatus}
            onChange={handleInputChange}
          >
            <option value="">--- Please Select ---</option>
            <option value="employed">Employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="fatherOccupation" className="my-1">
            Father Occupation
          </label>
          <input
            id="fatherOccupation"
            name="fatherOccupation"
            placeholder="Father Occupation"
            type="text"
            className="form-control rounded-0"
            value={formData.fatherOccupation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="motherStatus" className="my-1">
            Mother Status*
          </label>
          <select
            id="motherStatus"
            name="motherStatus"
            className="form-select rounded-0"
            value={formData.motherStatus}
            onChange={handleInputChange}
          >
            <option value="">--- Please Select ---</option>
            <option value="employed">Employed</option>
            <option value="business">Business</option>
            <option value="retired">Retired</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="motherOccupation" className="my-1">
            Mother Occupation
          </label>
          <input
            id="motherOccupation"
            name="motherOccupation"
            placeholder="Mother Occupation"
            type="text"
            className="form-control rounded-0"
            value={formData.motherOccupation}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="siblings" className="my-1">
            Your Siblings
          </label>
          <div className="row">
            <div className="col">
              <label htmlFor="notMarried">Not Married</label>
              <input
                id="notMarried"
                name="notMarried"
                type="number"
                min="0"
                className="form-control rounded-0"
                value={formData.siblingsNotMarried}
                onChange={handleInputChange}
              />
            </div>
            <div className="col">
              <label htmlFor="married">Married</label>
              <input
                id="married"
                name="married"
                type="number"
                min="0"
                className="form-control rounded-0"
                value={formData.siblingsMarried}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="homeDivision" className="my-1">
            Home Division*
          </label>
          <select
            id="homeDivision"
            name="homeDivision"
            className="form-select rounded-0"
            value={formData.homeDivision}
            onChange={handleInputChange}
          >
            <option value="">--- Select Home Division ---</option>
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="currentlyLivingIn" className="my-1">
            Currently Living In
          </label>
          <input
            id="currentlyLivingIn"
            name="currentlyLivingIn"
            placeholder="Currently Living In"
            type="text"
            className="form-control rounded-0"
            value={formData.currentlyLivingIn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="cityLivingIn" className="my-1">
            City Living In
          </label>
          <input
            id="cityLivingIn"
            name="cityLivingIn"
            placeholder="City Living In"
            type="text"
            className="form-control rounded-0"
            value={formData.cityLivingIn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="familyDetails" className="my-1">
            Family Details
          </label>
          <textarea
            id="familyDetails"
            name="familyDetails"
            placeholder="Please enter your family details"
            className="form-control rounded-0"
            value={formData.familyDetails}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
