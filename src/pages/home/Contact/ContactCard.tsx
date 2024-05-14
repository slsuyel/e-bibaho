const ContactCard = () => {
  return (
    <div
      className="container border  my-5 py-2 py-5 "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="row mx-auto align-items-center">
        <div className="col-lg-4 my-1 text-center">
          <img
            width={300}
            src="https://www.creativefabrica.com/wp-content/uploads/2022/01/27/couple-love-with-valentine-tree-svg-Graphics-24195614-1.jpg"
            alt=""
          />
        </div>

        <div className="col-lg-8 my-1">
          <h5 className="fs-4 fw-semibold text-info-emphasis">
            Find Your Special Person
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            maiores dignissimos error similique suscipit a dolorem placeat
            tenetur commodi incidunt, enim quod id aliquam eius optio? Error
            quis ab dignissimos.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <button className="btn-new">Register Now</button>
            <button className="btn btn-outline-danger font-maven fw-semibold">
              <i className="fa fa-phone"></i> +88 09613821331
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
