import { useEffect } from 'react';
import { StepOneProps } from '../../../types';

const StepOne: React.FC<StepOneProps> = ({ formData, handleInputChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            className="form-control "
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
            className="form-control "
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
            className="form-control "
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="profileCreatedBy" className="my-1">
            Profile Created By
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
      </form>
    </div>
  );
};

export default StepOne;
