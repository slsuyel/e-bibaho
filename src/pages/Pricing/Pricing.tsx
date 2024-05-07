/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Pricing.css";
import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import SpecialPrice from "./SpecialPrice";

const Pricing = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [packages] = useState([
    {
      id: 1,
      name: "Bronze",
      price: 123,
      duration: "4 month",
      discount: 20,
      featuresAllow: [
        "View up to 180 Contact Details",
        "Unlimited Private Chatting",
        "Basic customer support",
      ],
      featuresNotAllow: [
        "Priority Listing",
        "Advance Search Option",
        "Full Profile access",
        "Premium member badge",
        "Matches Suggestions",
        "Send your interest",
        "Trusted badge access",
        "Translation option",
      ],
    },
    {
      id: 2,
      name: "Gold",
      price: 231,
      duration: "6 month",
      discount: 40,
      featuresAllow: [
        "View up to 350 Contact Details",
        "Unlimited Private Chatting",
        "Enhanced customer support",
        "Priority Listing",
        "Advance Search Option",
        "Full Profile access",
      ],
      featuresNotAllow: [
        "Premium member badge",
        "Matches Suggestions",
        "Send your interest",
        "Trusted badge access",
        "Translation option",
      ],
    },
    {
      id: 3,
      name: "Platinum",
      price: 437,
      duration: "1 year",
      discount: 60,
      featuresAllow: [
        "View up to 700 Contact Details",
        "Unlimited Private Chatting",
        "Enhanced customer support",
        "Priority Listing",
        "Advance Search Option",
        "Full Profile access",
        "Premium member badge",
        "Matches Suggestions",
        "Send your interest",
        "Trusted badge access",
        "Translation option",
      ],
      featuresNotAllow: [],
    },
  ]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: isMobile ? true : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="pricing-container py-5">
      <div
        className="mx-auto pricing-slick container"
        style={{ width: isMobile ? "80%" : "99%" }}
      >
        <Slider {...settings}>
          {packages.map((pack, index) => (
            <div key={index} className="px-3">
              <div className="package package_free">
                {index === 1 && <div className="banner">Most Popular</div>}
                <h2>
                  {pack.name} <span className="fs-6"> {pack.duration}</span>{" "}
                </h2>

                <div className="price position-relative ">
                  <span className="discount m-0 position-absolute">
                    Discount: {pack.discount}%
                  </span>
                  ${pack.price - (pack.price * pack.discount) / 100}{" "}
                  <span className="fs-6">only</span>
                </div>
                <button
                  className="package-btn"
                  onClick={() => navigate(`/user/cart/${pack.id}`)}
                >
                  Continue
                </button>
                <ul>
                  {pack.featuresAllow.map((feature, index) => (
                    <li
                      key={index}
                      className="fs-6 ms-2 d-flex align-align-items-center gap-2"
                    >
                      <i className="fa-regular fa-square-check text-success fs-5 my-auto"></i>{" "}
                      <span> {feature}</span>
                    </li>
                  ))}

                  {pack.featuresNotAllow.map((feature, index) => (
                    <li
                      key={index}
                      className="fs-6 ms-2 d-flex align-align-items-center gap-2"
                    >
                      <i className="fa-solid fa-square-xmark text-danger fs-5 my-auto"></i>{" "}
                      <span> {feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <SpecialPrice />
    </div>
  );
};

export default Pricing;
