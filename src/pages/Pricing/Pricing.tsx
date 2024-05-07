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
      name: "Free",

      price: 0,
      features: [
        "Send unlimited Messages",
        "View up to 600 Contact Numbers",
        "12 Shaadi Live passes worth BDT6600",
      ],
    },
    {
      id: 2,
      name: "Bronze",

      price: 5,
      features: [
        "Send unlimited Messages",
        "View up to 600 Contact Numbers",
        "12 Shaadi Live passes worth BDT6600",
        "Stand out from other Profiles",
        "Let Matches contact you directly",
      ],
    },
    {
      id: 3,
      name: "Silver",

      price: 10,
      features: [
        "Send unlimited Messages",
        "View up to 600 Contact Numbers",
        "12 Shaadi Live passes worth BDT6600",
        "Stand out from other Profiles",
        "Let Matches contact you directly",
      ],
    },
    {
      id: 4,
      name: "Gold",

      price: 19,
      features: [
        "Send unlimited Messages",
        "View up to 600 Contact Numbers",
        "12 Shaadi Live passes worth BDT6600",
        "Stand out from other Profiles",
        "Let Matches contact you directly",
      ],
    },
  ]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  console.log(setPackages);
  return (
    <div className="pricing-container py-5">
      <div className="mx-auto" style={{ width: isMobile ? "80%" : "99%" }}>
        <Slider {...settings}>
          {packages.map((pack, index) => (
            <div key={index} className="px-3">
              <div className="package package_free">
                {pack.name === "Bronze" && (
                  <div className="banner">Most Popular</div>
                )}
                <h2>{pack.name}</h2>
                <div className="price">${pack.price}/mo</div>
                <p>
                  Includes everything in our{" "}
                  {packages[index - 1]?.name || "Free"} package plus:
                </p>
                <ul>
                  {pack.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
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
