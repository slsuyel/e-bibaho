import Slider from "react-slick";
import img1 from "../../../assets/sliders/1.png";
import img3 from "../../../assets/sliders/2.png";
import img5 from "../../../assets/sliders/3.png";
import img6 from "../../../assets/sliders/4.png";
import img9 from "../../../assets/sliders/5.png";
import img10 from "../../../assets/sliders/7.png";
import { useState } from "react";

// import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: img1,
      title: "Compatible Life Partner?",
      description: "If you're searching for a compatible life partner ",
      buttonText: "About Us",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img3,
      title: "Trusted worldwide matrimony and matchmaking service",
      description:
        "This is the place to find a companion for your life journey. If you prefer not to search for ",
      buttonText: "Successful Matches",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img5,
      title: "World’s Number 1 for reliability and Fairness",
      description: "Advanced privacy-oriented ",
      buttonText: "Find a Partner!",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img6,
      title: "Journey Together Towards a Shared Future-Connect here",
      description: "You've come to a platform that prioritizes privacy",
      buttonText: "Create Profile",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img9,
      title: "Connecting Souls,Creating Future       ",
      description: "Here, you've arrived at a privacy-oriented platform ",
      buttonText: "Successful Matches",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img10,
      title: "Discover your perfect Match",
      description:
        "Here, you'll find a secure and privacy-based life partner search site that safeguards your sensitive ",
      buttonText: "All Matches Together",
      btnSlug: "/",
      btnCss: "",
    },
  ];

  const settings = {
    // dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
  };

  const handleBeforeChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };
  const isMobile = useIsMobile();
  return (
    <div
      className="position-relative "
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="mx-auto" style={{ width: isMobile ? "83%" : "90%" }}>
        <Slider {...settings} beforeChange={handleBeforeChange}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="row mx-auto p">
                <div className="col-md-6 my-auto d-none d-md-block">
                  <h4
                    className={`fs-2 text-center  text-white ${
                      index === currentSlide
                        ? "animate-top "
                        : "animate-zoom text-white"
                    }`}
                  >
                    {slide.title}
                  </h4>
                  <p
                    className={`fs-6 text-center text-white ${
                      index === currentSlide ? "animate-right" : "animate-zoom"
                    }`}
                  >
                    {/* {slide.description} */}
                  </p>

                  {/* <div className="text-center">
                    <Link
                      to={slide.btnSlug}
                      className={`font-bn fs-6 p-1 px-2 border rounded  text-white  ${
                        index === currentSlide
                          ? "animate-bottom"
                          : "animate-zoom"
                      }`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div> */}
                </div>

                <div className="col-md-6 d-flex justify-content-center ">
                  <div className="text-center mx-auto ">
                    <img
                      loading="lazy"
                      className={`img-fluid banner_slide_img ${
                        index === currentSlide
                          ? "animate-right"
                          : "animate-zoom"
                      }`}
                      width={320}
                      src={slide.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default BannerSlider;
