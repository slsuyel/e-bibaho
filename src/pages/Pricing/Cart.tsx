import { Card } from "antd";
import { useState } from "react";

const Cart = () => {
  const [showPaypal, setShowPaypal] = useState(false);

  return (
    <div>
      <h1 className="bg-success fs-4 p-3 text-center text-white">
        You are saving BDT 850 on your selected plan!
      </h1>

      <div className="row mx-auto col-md-8">
        <div className="col-md-6 ">
          <div className="card mt-4">
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {/* Credit card form tabs */}
                <ul
                  role="tablist"
                  className="nav bg-light nav-pills rounded nav-fill mb-3"
                >
                  <li className="nav-item">
                    <button
                      className={`nav-link ${!showPaypal ? "active" : ""}`}
                      onClick={() => setShowPaypal(false)}
                    >
                      <i className="fas fa-credit-card mr-2" /> Credit Card
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${showPaypal ? "active" : ""}`}
                      onClick={() => setShowPaypal(true)}
                    >
                      <i className="fab fa-paypal mr-2" /> Paypal
                    </button>
                  </li>
                </ul>
              </div>{" "}
              {/* End */}
              {/* Credit card form content */}
              <div className="tab-content">
                {/* credit card info*/}
                <div
                  id="credit-card"
                  className={`tab-pane fade ${
                    !showPaypal ? "show active" : ""
                  } pt-3`}
                >
                  <form role="form">
                    <div className="form-group">
                      {/* Credit card input fields */}
                      <label htmlFor="username">
                        <h6>Card Owner</h6>
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Card Owner Name"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardNumber">
                        <h6>Card number</h6>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Valid card number"
                          className="form-control"
                        />
                        <div className="border border-1 d-flex input-group-append">
                          <span className="input-group-text text-muted border-0">
                            <i className="fab fa-cc-visa mx-1" />
                            <i className="fab fa-cc-mastercard mx-1" />
                            <i className="fab fa-cc-amex mx-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-group">
                          <label>
                            <span className="hidden-xs">
                              <h6>Expiration Date</h6>
                            </span>
                          </label>
                          <div className="input-group">
                            <input
                              type="number"
                              placeholder="MM"
                              name=""
                              className="form-control"
                            />
                            <input
                              type="number"
                              placeholder="YY"
                              name=""
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group mb-4">
                          <label
                            data-toggle="tooltip"
                            title="Three digit CV code on the back of your card"
                          >
                            <h6>
                              CVV{" "}
                              <i className="fa fa-question-circle d-inline" />
                            </h6>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button
                        type="button"
                        className="subscribe btn btn-primary btn-block shadow-sm"
                      >
                        Confirm Payment
                      </button>
                    </div>
                  </form>
                </div>{" "}
                {/* End */}
                {/* Paypal info */}
                <div
                  id="paypal"
                  className={`tab-pane fade ${
                    showPaypal ? "show active" : ""
                  } pt-3`}
                >
                  <h6 className="pb-2">Select your paypal account type</h6>
                  <div className="form-group ">
                    {/* Paypal input fields */}
                    <label className="radio-inline">
                      <input type="radio" name="optradio" /> Domestic
                    </label>
                    <label className="radio-inline ml-3">
                      <input type="radio" name="optradio" /> International
                    </label>
                  </div>
                  <p>
                    <button type="button" className="btn btn-primary">
                      <i className="fab fa-paypal mr-2" /> Log into my Paypal
                    </button>
                  </p>
                  <p className="text-muted">
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment. After completing the payment
                    process, you will be redirected back to the website to view
                    details of your order.
                  </p>
                </div>{" "}
                {/* End */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 ">
          <Card>
            <div className="package package_free">
              <h2>Gold</h2>
              <div className="price">
                $<div className="big">19</div>/mo
              </div>
              <p>Includes everything in our Silver package plus:</p>
              <ul>
                <li>Send unlimited Messages</li>
                <li>View up to 600 Contact Numbers</li>
                <li>12 Shaadi Live passes worth BDT6600</li>
                <li>Stand out from other Profiles</li>
                <li>Let Matches contact you directly</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
