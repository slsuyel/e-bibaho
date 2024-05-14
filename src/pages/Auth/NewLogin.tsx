import { useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
  phone?: string;
  email?: string;
  password?: string;
}

const NewLogin = () => {
  const [phone, setPhone] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneLogin = () => {
    setPhone(!phone);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phone) {
      console.log(formData.phone);
    } else console.log(formData.email, formData.password);
  };

  return (
    <div className="row mx-auto regi-page pt-5" data-aos="fade-up">
      <div className="col-md-9 mx-auto row  overly_sign_up p-0 rounded">
        <div className="bg-white col-md-6 p-2 py-5   shadow text-center rounded-start">
          <h1 className="">Sign in</h1>
          <div className="social-container my-3">
            <button className="btn social mr-2">
              <i className="fab fa-google" />
            </button>
            <button className="btn social mr-2">
              <i className="fab fa-apple" />
            </button>
            <button onClick={handlePhoneLogin} className="btn social mr-2">
              <i className={phone ? "fa fa-envelope" : "fas fa-phone "} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <span style={{ fontSize: 14 }}>or use your account</span>
            <div className="mx-5 ">
              {phone && (
                <label className="fs-5 my-1 text-center ">
                  Enter Mobile No
                </label>
              )}
              <input
                required
                type={phone ? "number" : "email"}
                className="form-control mb-2"
                placeholder={`Enter Your ${
                  phone ? "Phone Number" : "Email Address"
                }`}
                name={phone ? "phone" : "email"}
                value={phone ? formData.phone : formData.email}
                onChange={handleChange}
              />
              {!phone ? (
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              ) : (
                ""
              )}
            </div>
            <div className="align-items-center d-flex gap-4 my-3 justify-content-center">
              <button type="submit" className="btn btn-primary btn-default">
                {phone ? "Send OTP" : "  Sign In"}
              </button>
              {!phone ? (
                <Link to={""} className="mb-2 d-block">
                  Forgot your password?
                </Link>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>

        <div className=" col-md-6 p-2 py-5  shadow text-center con-cen-my rounded-end">
          <div className="text-white ">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <Link
              to="/register"
              className="btn btn-outline-light fw-semibold rounded-1"
            >
              Sign Up Free{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
