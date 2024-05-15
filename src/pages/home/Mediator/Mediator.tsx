import Slider from "react-slick";
import useIsMobile from "../../../hooks/useIsMobile";
import { Link } from "react-router-dom";

const Mediator = () => {
  const data = [
    {
      name: "Name One",
      image: "https://picsum.photos/100/100",
      slug: "name-one",
    },
  ];
  for (let i = 1; i < 55; i++) {
    const newDataEntry = {
      name: `Name ${i + 1}`,
      image: "https://picsum.photos/100/100",
      slug: `name-${i + 1}`,
    };
    data.push(newDataEntry);
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const isMobile = useIsMobile();
  return (
    <div className="my-5 " data-aos="fade-up" data-aos-duration="2000">
      <br />
      <br />
      <h1 className="text-center mb-3 ">
        Our
        <span className="fw-medium text-info-emphasis "> Ecosystem</span>
      </h1>
      <div
        className="mx-auto bg-grad py-5"
        style={{ width: isMobile ? "90%" : "100%" }}
      >
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="mediator-item">
              <Link to=/* {item.slug} */ "/" className="text-center d-block">
                <img
                  className="border border-2 mx-auto rounded-circle "
                  src={item.image}
                  alt={item.name}
                />
                <p className="font-maven fs-4 mb-0 ">{item.name}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Mediator;
