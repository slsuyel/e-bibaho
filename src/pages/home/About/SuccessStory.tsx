import { Card } from "antd";

import Slider from "react-slick";

const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const SuccessStory = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: "#F5F5F5" }}>
      <div className="row mx-auto container py-5 ">
        <div className="col-md-4 font-maven fw-medium ">
          <h2>
            Success{" "}
            <span className="fw-medium text-info-emphasis">Stories</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            error quisquam amet consequuntur voluptates aut asperiores totam
            minus ipsam, a quis. Quam molestias minus facere unde, velit
            reiciendis cumque eaque.
          </p>
          <ul className="text-primary-emphasis">
            <li>Register for Free!</li>
            <li>100% human verified profiles</li>
            <li>Chat, Voice & Video calling</li>
            <li>Private, personalized, and highly confidential service</li>
            <li>Halal, safe and secured Matrimony site in Bangladesh</li>
          </ul>

          <div className="d-flex justify-content-center">
            <button className="btn-new">Register Now</button>
          </div>
        </div>

        <div className="col-md-8 mx-auto">
          <div className="slider-container">
            <Slider {...settings}>
              {arr.map(() => (
                <div className="d-flex justify-content-center p-3">
                  <Card
                    hoverable
                    style={{ width: 340 }}
                    cover={
                      <img
                        height={250}
                        //   width={250}
                        alt="example"
                        src="https://www.bdmarriage.com/images/successstory/bdmarriage-success-story-1.jpg"
                      />
                    }
                  >
                    <h6 className="text-info-emphasis">Vashishtha & Namrata</h6>
                    <p>
                      I am met from shaadi.com tq shaadi.com for ur support and
                      ur servicse is so much better. tq heartly to ur team and
                      ur app.
                    </p>

                    <div>
                      <h6>Dhaka,Bangladesh</h6>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
