import Slider from "react-slick";
import img1 from "../../../assets/sliders/2.png";
import img3 from "../../../assets/sliders/3.png";
import img5 from "../../../assets/sliders/5.png";
import img6 from "../../../assets/sliders/6.png";
import img9 from "../../../assets/sliders/8.png";
import img10 from "../../../assets/sliders/10.png";
import { useState } from "react";

import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: img1,
      title: "Looking for a Compatible Life Partner?",
      description:
        "If you're searching for a compatible life partner who will ensure stability and privacy in your domain, then you've come to the right place. Here, you'll find a list of professionally vetted individuals suitable for you.",
      buttonText: "About Us",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img3,
      title: "Searching for a Life Partner?",
      description:
        "This is the place to find a companion for your life journey. If you prefer not to search for your life partner on typical matching sites, here you can display your preferred profiles.",
      buttonText: "Successful Matches",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img5,
      title: "Find a Life Partner While Keeping Privacy Intact",
      description:
        "Here, you'll find an advanced privacy-oriented life partner search site. You can advertise your preferred privacy settings and profiles without any concerns, keeping your profile discreet.",
      buttonText: "Find a Partner!",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img6,
      title: "Privacy-Centric Partner Search",
      description:
        "You've come to a platform that prioritizes privacy and diversity for finding your life partner in a sensitive and ideal manner.",
      buttonText: "Create Profile",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img9,
      title: "Privacy-Oriented Platform for Finding a Life Partner",
      description:
        "Here, you've arrived at a privacy-oriented platform where you can receive both formal and personal provisions for your partner.",
      buttonText: "Successful Matches",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img10,
      title: "Find a Life Partner While Preserving Privacy",
      description:
        "Here, you'll find a secure and privacy-based life partner search site that safeguards your sensitive information and ensures your profile remains particularly private.",
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
    <div className="bg-grad">
      <div
        className="mx-auto py-2 "
        style={{ width: isMobile ? "85%" : "90%" }}
      >
        <Slider {...settings} beforeChange={handleBeforeChange}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="row mx-auto font-bn">
                <div className="col-md-6 my-auto d-none d-md-block">
                  <h4
                    className={`fs-1 text-center border  ${
                      index === currentSlide
                        ? "animate-top "
                        : "animate-zoom text-white"
                    }`}
                  >
                    {slide.title}
                  </h4>
                  <p
                    className={`fs-5 text-center ${
                      index === currentSlide ? "animate-right" : "animate-zoom"
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div className="text-center">
                    <Link
                      to={slide.btnSlug}
                      className={`font-bn fs-5 border rounded p-2 text-white  ${
                        index === currentSlide
                          ? "animate-bottom"
                          : "animate-zoom"
                      }`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>

                <div className="smartphone col-md-6 d-flex justify-content-end ">
                  <div className="content text-center mx-auto">
                    <img
                      className={`img-fluid ${
                        index === currentSlide
                          ? "animate-right"
                          : "animate-zoom"
                      }`}
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
    </div>
  );
};

export default BannerSlider;
