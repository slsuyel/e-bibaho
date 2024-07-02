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
                <strong>Tel: </strong> +1 (888) 887 5027
              </p>
              <p className="mb-0">
                <strong>Email: </strong>sales@zsi.ai
              </p>
            </div>
            <div className="pb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.924778338747!2d90.43906715106817!3d23.75696321981835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x719ecee143bb3c9a!2sBdSoft.Ltd!5e0!3m2!1sen!2sbd!4v1630442421752!5m2!1sen!2sbd"
                width="100%"
                height={235}
                frameBorder={0}
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              />
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
