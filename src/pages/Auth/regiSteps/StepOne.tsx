import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StepOneProps } from '../../../types';

const StepOne: React.FC<StepOneProps> = ({ formData, handleInputChange }) => {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <form>
        <div className="form-group mb-2">
          <label htmlFor="mobileNumber" className="my-1">
            Mobile Number <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            type="tel"
            required
            className="form-control"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email" className="my-1">
            Your Email <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="email"
            name="email"
            placeholder="Your Email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="my-1">
            Create Password <span className="text-danger fs-5">*</span>
          </label>
          <input
            required
            id="password"
            name="password"
            placeholder="Create Password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="dateOfBirth" className="my-1">
            Date of Birth <span className="text-danger fs-5">*</span>
          </label>
          <br />
          <DatePicker
            id="dateOfBirth"
            selected={dateOfBirth}
            onChange={handleDateChange}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
            placeholderText="Select Date of Birth"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default StepOne;
