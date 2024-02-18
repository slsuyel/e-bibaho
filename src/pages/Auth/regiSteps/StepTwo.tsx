import { StepTwoProps } from "../../../types";

const StepTwo = ({ formData, handleInputChange }: StepTwoProps) => {
  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="gender" className="my-1">
            Gender <span className="text-danger fs-5">*</span>
          </label>
          <div>
            <input
              id="male"
              name="gender"
              type="radio"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            <label htmlFor="male" className="mx-1">
              Male
            </label>
            <input
              id="female"
              name="gender"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            <label htmlFor="female" className="mx-1">
              Female
            </label>
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="candidateName" className="my-1">
            Candidate Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="candidateName"
            name="candidateName"
            placeholder="Candidate Name"
            type="text"
            className="form-control rounded-0"
            value={formData.candidateName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="profileCreatedBy" className="my-1">
            Profile Created By <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="profileCreatedBy"
            name="profileCreatedBy"
            className="form-select rounded-0"
            value={formData.profileCreatedBy}
            onChange={handleInputChange}
          >
            <option value="self">Self</option>
            <option value="parents">Parents</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="relative">Relative</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="parentName" className="my-1">
            Father / Mother Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="parentName"
            name="parentName"
            placeholder="Father / Mother Name"
            type="text"
            className="form-control rounded-0"
            value={formData.parentName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="dateOfBirth" className="my-1">
            Candidate Date of Birth <span className="text-danger fs-5">*</span>
          </label>
          <div className="row">
            <div className="col">
              <select
                id="day"
                name="day"
                className="form-select rounded-0"
                value={formData.day}
                onChange={handleInputChange}
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <select
                id="month"
                name="month"
                className="form-select rounded-0"
                value={formData.month}
                onChange={handleInputChange}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <select
                id="year"
                name="year"
                className="form-select rounded-0"
                value={formData.year}
                onChange={handleInputChange}
              >
                {Array.from({ length: 26 }, (_, i) => 2005 - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <small>Your date of birth will not be disclosed to others.</small>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="maritalStatus" className="my-1">
            Marital Status <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="form-select rounded-0"
            value={formData.maritalStatus}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Please Select ---
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="religion" className="my-1">
            Religion <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="religion"
            name="religion"
            className="form-select rounded-0"
            value={formData.religion}
            onChange={handleInputChange}
          >
            <option value="">--- Please Select ---</option>
            <option value="islam">Islam</option>
            <option value="christianity">Christianity</option>
            <option value="hinduism">Hinduism</option>
            <option value="buddhism">Buddhism</option>
            <option value="judaism">Judaism</option>
            <option value="sikhism">Sikhism</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="nationality" className="my-1">
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            type="text"
            className="form-control rounded-0"
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
