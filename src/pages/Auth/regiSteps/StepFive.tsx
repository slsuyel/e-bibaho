import { useEffect } from 'react';
import { StepFiveProps } from '../../../types';

const StepFive = ({ formData, handleInputChange }: StepFiveProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <form className="row mx-auto">
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="height" className="my-1">
            Height <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="height"
            name="height"
            className="form-select "
            value={formData.height}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Your Height ---
            </option>
            <option value="below5ft">Below 5ft</option>
            <option value="5ft">5ft</option>
            <option value="5ft1in">5ft 1in</option>
            <option value="5ft2in">5ft 2in</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="weight" className="my-1">
            Weight <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="weight"
            name="weight"
            className="form-select "
            value={formData.weight}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Your Weight ---
            </option>
            <option value="below50kg">Below 50kg</option>
            <option value="50-60kg">50 - 60kg</option>
            <option value="61-70kg">61 - 70kg</option>
            <option value="71-80kg">71 - 80kg</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="bodyType" className="my-1">
            Body Type <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="bodyType"
            name="bodyType"
            className="form-select "
            value={formData.bodyType}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Body Type ---
            </option>
            <option value="average">Average</option>
            <option value="slim">Slim</option>
            <option value="athletic">Athletic</option>
            <option value="heavy">Heavy</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="race" className="my-1">
            race <span className="text-danger fs-5">*</span>
          </label>
          <select
            id="race"
            name="race"
            className="form-select "
            value={formData.race}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select race ---
            </option>
            <option value="veryFair">Very Fair</option>
            <option value="fair">Fair</option>
            <option value="wheatish">Wheatish</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="form-group col-md-6 mb-2">
          <label htmlFor="blood_group" className="my-1">
            Blood Group
          </label>
          <select
            id="blood_group"
            name="blood_group"
            className="form-select "
            value={formData.blood_group}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --- Select Blood Group ---
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default StepFive;
