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
          <label htmlFor="first_name" className="my-1">
            First Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="first_name"
            name="first_name"
            placeholder="First Name"
            type="text"
            className="form-control "
            value={formData.first_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="last_name" className="my-1">
            Last Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            type="text"
            className="form-control "
            value={formData.last_name}
            onChange={handleInputChange}
          />
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
          <label htmlFor="father_name" className="my-1">
            Father Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="father_name"
            name="father_name"
            placeholder="Father Name"
            type="text"
            className="form-control "
            value={formData.father_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="mother_name" className="my-1">
            Mother Name <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="mother_name"
            name="mother_name"
            placeholder=" Mother Name"
            type="text"
            className="form-control "
            value={formData.mother_name}
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
