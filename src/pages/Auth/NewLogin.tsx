import { Link } from "react-router-dom";

const NewLogin = () => {
  return (
    <div className="row mx-auto regi-page pt-5" data-aos="fade-up">
      <div className="col-md-9 mx-auto row  ">
        <div className="bg-white col-md-6 p-2 py-5   shadow text-center rounded-start">
          <h1 className="">Sign in</h1>
          <div className="social-container my-3">
            <button className="btn social mr-2">
              <i className="fab fa-google" />
            </button>
            <button className="btn social mr-2">
              <i className="fab fa-apple" />
            </button>
            <button className="btn social mr-2">
              <i className="fas fa-phone" />
            </button>
          </div>
          <form>
            <span style={{ fontSize: 14 }}>or use your account</span>
            <div className="mx-5">
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Password"
              />
            </div>
            <div className="align-items-center d-flex gap-4 my-3 justify-content-center">
              <button className="btn btn-primary btn-default">Sign In</button>
              <Link to={""} className="mb-2 d-block">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        <div className="overly_sign_up col-md-6 p-2 py-5  shadow text-center con-cen-my rounded-end">
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
