const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 pb-5">
          <form className="cstmsocialStyle form-inline fs-3 justify-content-center text-center">
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Call to Skype"
              >
                <i className="fab fa-skype fa-lg"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Call to WhatsApp"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Our Instagram Page"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Find to Our Road Map"
              >
                <i className="fab fa-viber fa-lg"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Find to Our Road Map"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </span>
            </a>
            <a href="#" target="_blank">
              <span
                className="px-2"
                data-toggle="tooltip"
                title="Find to Our Road Map"
              >
                <i className="fab fa-google fa-lg"></i>
              </span>
            </a>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3 text-muted">
          <div className="card border-0">
            <div className="card-header">
              <h4 className="mb-0 text-center font-weight-bold">
                OFFICE LOCATION
              </h4>
            </div>
            <div className="card-body pb-2 text-center">
              <p>
                74-09 37TH Avenue, Suite 203B, <br /> Jackson Heights, NY 11372
              </p>
              <p className="mb-0">
                <strong>Tel: </strong> 888 887 5027
              </p>
              <p className="mb-0">
                <strong>Email: </strong>contact@ebibah.com
              </p>
            </div>
            {/*  */}
            <div className="pb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.581838562709!2d-73.89399708770785!3d40.7492259352154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f07065ea7db%3A0xde4985f19cd0bf2f!2s74-09%2037th%20Ave%20%23203b%2C%20Flushing%2C%20NY%2011372%2C%20USA!5e0!3m2!1sen!2snl!4v1721199987513!5m2!1sen!2snl"
                width="600"
                height="200"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 text-muted order-1 order-md-2">
          <div className="card border-0">
            <div className="card-header">
              <h4 className="mb-0 text-center font-weight-bold">
                SEND A MESSAGE
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group my-2">
                  <input
                    type="name"
                    className="form-control"
                    id="inputfrom"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group my-2 ">
                  <div className="form-row ">
                    <div className="col mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group my-2">
                  <div className="form-row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your subject here.."
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <div className="form-group my-2">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Type your Message here"
                    rows={5}
                    defaultValue={''}
                  />
                </div>
                <div className="text-right pb-2">
                  <button
                    type="button"
                    className="btn btn-success btn-block"
                    style={{ marginTop: '8px' }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
