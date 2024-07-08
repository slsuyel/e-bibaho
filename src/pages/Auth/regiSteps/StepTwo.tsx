import { useEffect, useState } from 'react';
import { StepTwoProps } from '../../../types';
import DatePicker from 'react-datepicker';
const StepTwo = ({ formData, handleInputChange }: StepTwoProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setDateOfBirth(date);

    if (date) {
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      handleInputChange({
        target: { name: 'dateOfBirth', value: formattedDate },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      handleInputChange({
        target: { name: 'dateOfBirth', value: null },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div>
      <form className="row mx-auto">
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="gender" className="my-1">
            Gender <span className="text-danger fs-5">*</span>
          </label>
          <div>
            <input
              id="male"
              name="gender"
              type="radio"
              value="male"
              checked={formData.gender === 'male'}
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
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            <label htmlFor="female" className="mx-1">
              Female
            </label>
          </div>
        </div>

        <div className="form-group mb-2 col-md-6 date_of_birth">
          <label htmlFor="dateOfBirth" className="my-1">
            Date of Birth <span className="text-danger fs-5">*</span>
          </label>
          <br />
          <DatePicker
            id="dateOfBirth"
            selected={dateOfBirth}
            onChange={handleDateChange}
            className="form-control "
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={45}
            placeholderText="Select Date of Birth"
            required
          />
        </div>

        <div className="form-group mb-2 col-md-6">
          <label htmlFor="candidateName" className="my-1">
            Candidate Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="candidateName"
            name="candidateName"
            placeholder="Candidate Name"
            type="text"
            className="form-control "
            value={formData.candidateName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2  col-md-6">
          <label htmlFor="profileCreatedBy" className="my-1">
            Profile Created By <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="profileCreatedBy"
            name="profileCreatedBy"
            className="form-select "
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
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="parentName" className="my-1">
            Father / Mother Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="parentName"
            name="parentName"
            placeholder="Father / Mother Name"
            type="text"
            className="form-control "
            value={formData.parentName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-2 col-md-6">
          <label htmlFor="maritalStatus" className="my-1">
            Marital Status <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="maritalStatus"
            name="maritalStatus"
            className="form-select "
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
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="religion" className="my-1">
            Religion <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="religion"
            name="religion"
            className="form-select "
            value={formData.religion}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Please Select ---
            </option>
            <option value="islam">Islam</option>
            <option value="christianity">Christianity</option>
            <option value="hinduism">Hinduism</option>
            <option value="buddhism">Buddhism</option>
            <option value="judaism">Judaism</option>
            <option value="sikhism">Sikhism</option>
          </select>
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="nationality" className="my-1">
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            type="text"
            className="form-control "
            value={formData.nationality}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
