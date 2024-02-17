interface StepOneProps {
  formData: {
    mobileNumber: string;
    email: string;
    password: string;
    profileCreatedBy: string;
  };
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
const StepOne = ({ formData, handleInputChange }: StepOneProps) => {
  return (
    <div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="mobileNumber" className="my-1">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile Number"
            type="tel"
            className="form-control rounded-0"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email" className="my-1">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Your Email"
            type="email"
            className="form-control rounded-0"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="password" className="my-1">
            Create Password
          </label>
          <input
            id="password"
            name="password"
            placeholder="Create Password"
            type="password"
            className="form-control rounded-0"
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
      </form>
    </div>
  );
};

export default StepOne;
