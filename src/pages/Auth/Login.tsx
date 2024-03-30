import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("defaultUsername");
  const [password, setPassword] = useState("defaultPassword");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Log values after submission
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields
    setUsername("");
    setPassword("");
  };

  return (
    <div className="row mx-auto font-maven regi-page">
      <div className="col-md-4 mx-auto my-5">
        <div className="p-3 w-100 mx-auto border-0 card  shadow-lg text-info-emphasis">
          <div className="text-center">
            <img
              style={{ height: 80 }}
              src="https://cdn.pixabay.com/photo/2018/08/20/17/04/wedding-3619423_1280.png"
              alt="Logo"
            />
            <h3 className="control-label mt-3">Member Login</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginUsername">
                Mobile Or Email
              </label>
              <input
                id="loginUsername"
                placeholder="Enter Mobile Or Email"
                style={{ height: 45 }}
                type="text"
                className="form-control"
                value={username} // Bind value to state
                onChange={(e) => setUsername(e.target.value)} // Update state on change
              />
            </div>
            <div className="form-group mb-2">
              <label className="my-1" htmlFor="loginPassword">
                Password
              </label>
              <input
                id="loginPassword"
                placeholder="Enter Password"
                style={{ height: 45 }}
                type="password"
                className="form-control"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="form-group">
                <div className="form-check">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label className=" form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>
              <div>
                <Link to={"reset"}> Reset password</Link>
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn-new justify-content-center w-100"
              >
                {" "}
                Login{" "}
              </button>
            </div>
          </form>
          <hr />
          <div className="text-center">
            New to E-bibaho? <Link to="/register">Sign Up Free </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
