const StepFive = ({ formData, handleInputChange }) => {
  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="height" className="my-1">
            Height*
          </label>
          <select
            id="height"
            name="height"
            className="form-select rounded-0"
            value={formData.height}
            onChange={handleInputChange}
          >
            <option value="">--- Select Your Height ---</option>
            <option value="below5ft">Below 5ft</option>
            <option value="5ft">5ft</option>
            <option value="5ft1in">5ft 1in</option>
            <option value="5ft2in">5ft 2in</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="weight" className="my-1">
            Weight*
          </label>
          <select
            id="weight"
            name="weight"
            className="form-select rounded-0"
            value={formData.weight}
            onChange={handleInputChange}
          >
            <option value="">--- Select Your Weight ---</option>
            <option value="below50kg">Below 50kg</option>
            <option value="50-60kg">50 - 60kg</option>
            <option value="61-70kg">61 - 70kg</option>
            <option value="71-80kg">71 - 80kg</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="bodyType" className="my-1">
            Body Type*
          </label>
          <select
            id="bodyType"
            name="bodyType"
            className="form-select rounded-0"
            value={formData.bodyType}
            onChange={handleInputChange}
          >
            <option value="">--- Select Body Type ---</option>
            <option value="average">Average</option>
            <option value="slim">Slim</option>
            <option value="athletic">Athletic</option>
            <option value="heavy">Heavy</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="complexion" className="my-1">
            Complexion*
          </label>
          <select
            id="complexion"
            name="complexion"
            className="form-select rounded-0"
            value={formData.complexion}
            onChange={handleInputChange}
          >
            <option value="">--- Select Complexion ---</option>
            <option value="veryFair">Very Fair</option>
            <option value="fair">Fair</option>
            <option value="wheatish">Wheatish</option>
            <option value="dark">Dark</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="bloodGroup" className="my-1">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            className="form-select rounded-0"
            value={formData.bloodGroup}
            onChange={handleInputChange}
          >
            <option value="">--- Select Blood Group ---</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="physicalAttributeDetails" className="my-1">
            Physical Attribute Details
          </label>
          <textarea
            id="physicalAttributeDetails"
            name="physicalAttributeDetails"
            placeholder="Enter physical attribute details"
            className="form-control rounded-0"
            value={formData.physicalAttributeDetails}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default StepFive;
