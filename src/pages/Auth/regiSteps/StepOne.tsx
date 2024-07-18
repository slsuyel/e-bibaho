import { useEffect } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { StepOneProps } from '../../../types';

const StepOne = ({ formData, handleInputChange }: StepOneProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <form className="row mx-auto">
        <div className="form-group mb-2  col-md-6">
          <label htmlFor="profile_for" className="my-1">
            This Profile is for <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="profile_for"
            name="profile_for"
            className="form-select "
            value={formData.profile_for}
            onChange={handleInputChange}
          >
            <option value="self">My Self</option>
            <option value="son">My Son</option>
            <option value="daughter">My Daughter</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="relative">Relative</option>
          </select>
        </div>
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

        <div className="form-group mb-2 col-md-6">
          <label htmlFor="mobile_number" className="my-1">
            Mobile Number <span className="text-danger fs-5">*</span>
          </label>
          <input
            id="mobile_number"
            name="mobile_number"
            placeholder="Mobile Number"
            type="number"
            required
            className="form-control"
            value={formData.mobile_number}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
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
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="password" className="my-1">
            Password <span className="text-danger fs-5">*</span>
          </label>
          <input
            required
            id="password"
            name="password"
            placeholder=" Password"
            type="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2 col-md-6">
          <label htmlFor="re_password" className="my-1">
            Retype Password <span className="text-danger fs-5">*</span>
          </label>
          <input
            type="password"
            required
            id="re_password"
            name="re_password"
            placeholder="Retype Password"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default StepOne;
