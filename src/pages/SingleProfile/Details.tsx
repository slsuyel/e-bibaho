const Details = () => {
  return (
    <div>
      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fa-address-card fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">About Rabeamoti S</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            obcaecati hic, suscipit odio magni voluptate modi doloremque non
            quas harum nam, laboriosam commodi accusantium repellendus. Dolor
            voluptatem pariatur vel eveniet.
          </p>
        </div>
      </div>

      {/* Contact */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fas fa-phone-alt fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">Contact Details</h5>
          <ul className="list-unstyled">
            <li>
              <strong>
                <i className="me-2 fa-regular fa-envelope"></i>
              </strong>{' '}
              example@example.com
            </li>
            <li>
              <strong>
                <i className="me-2 fa-brands fa-whatsapp"></i>
              </strong>{' '}
              +1234567890
            </li>
            <li>
              <strong>
                <i className="me-2 fa-solid fa-phone-volume"></i>
              </strong>{' '}
              +1234567890
            </li>
            <li>
              <strong>
                <i className="me-2 fa-solid fa-location-dot"></i>
              </strong>{' '}
              123 Main St, City, Country
            </li>
          </ul>
        </div>
      </div>

      {/* Lifestyle */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fa-bed-pulse fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">Lifestyle</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            obcaecati hic, suscipit odio magni voluptate modi doloremque non
            quas harum nam, laboriosam commodi accusantium repellendus. Dolor
            voluptatem pariatur vel eveniet.
          </p>
        </div>
      </div>

      {/* Background */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className=" fa-mosque fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">Background</h5>

          <ul className="list-unstyled">
            <li>
              Muslim, Bengali Sunni Fasts on ramadan, doesn't practise Zakat
              Lives in Jackson Heights, USA (Permanent Resident)
            </li>
            <li>
              Muslim, Bengali Sunni Fasts on ramadan, Lives in Jackson Heights,
              Bangladesh (Permanent Resident)
            </li>
            <li> doesn't practise Zakat</li>

            <li> doesn't practise Zakat</li>
          </ul>
        </div>
      </div>

      {/* Family Details
       */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fa-house-chimney-window fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">Family Details</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            obcaecati hic, suscipit odio magni voluptate modi doloremque non
            quas harum nam, laboriosam commodi accusantium repellendus. Dolor
            voluptatem pariatur vel eveniet.
          </p>
        </div>
      </div>

      {/* Education & Career
       */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fa-book-open fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">Education & Career</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            obcaecati hic, suscipit odio magni voluptate modi doloremque non
            quas harum nam, laboriosam commodi accusantium repellendus. Dolor
            voluptatem pariatur vel eveniet.
          </p>
        </div>
      </div>

      {/* What She Is Looking For
       */}

      <div className="row mx-auto mb-2">
        <div className="align-items-center col-md-2 d-flex flex-column gap-2 my-1">
          <div className="bg-body-secondary border p-2 rounded-circle">
            <i className="fa-clipboard fa-solid fs-2 p-2 text-body-tertiary"></i>
          </div>
          <div className="vl"></div>
        </div>
        <div className="col-md-10 my-1">
          <h5 className="font-maven text-info-emphasis">
            What She Is Looking For
          </h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            obcaecati hic, suscipit odio magni voluptate modi doloremque non
            quas harum nam, laboriosam commodi accusantium repellendus. Dolor
            voluptatem pariatur vel eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
