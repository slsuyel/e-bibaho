/* eslint-disable @typescript-eslint/no-unused-vars */
import "./Pricing.css";
import Slider from "react-slick";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

const Pricing = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Bronze",
      price: 123,
      duration: 4,
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
      duration: 6,
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
      duration: 12,
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
          slidesToScroll: 2,
          initialSlide: 2,
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
                <h2>{pack.name}</h2>
                <div className="price">
                  <span>Discount: {pack.discount}%</span>$
                  {pack.price - (pack.price * pack.discount) / 100}/mo
                </div>

                <div className="duration">Duration: {pack.duration} months</div>

                <ul>
                  {pack.featuresAllow.map((feature, index) => (
                    <li key={index}>
                      <i className="fa-regular fa-square-check"></i> {feature}
                    </li>
                  ))}
                  {pack.featuresNotAllow.map((feature, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-square-xmark"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate(`/user/cart/${pack.id}`)}>
                  Continue
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Pricing;
