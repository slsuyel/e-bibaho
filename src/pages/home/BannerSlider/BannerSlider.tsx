import Slider from "react-slick";
import img1 from "../../../assets/sliders/2.png";
import img3 from "../../../assets/sliders/3.png";
import img5 from "../../../assets/sliders/5.png";
import img6 from "../../../assets/sliders/6.png";
import img9 from "../../../assets/sliders/8.png";
import img10 from "../../../assets/sliders/10.png";
import { useState } from "react";

import { Link } from "react-router-dom";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: img1,
      title: "যোগ্য জীবনসঙ্গী খুঁজছেন?",
      description:
        "আপনি যদি কোনো যোগ্য জীবনসঙ্গী খুঁজছেন যা আপনার ক্ষেত্রে স্থিতিশীলতা ও গোপনীয়তা সুরক্ষিত করবে, তাহলে আপনি ঠিক ঠাক স্থানে এসেছেন। এখানে আপনি পাবেন আপনার সাথে মেলানোর যোগ্য প্রাতিষ্ঠানিক ব্যক্তিদের তালিকা।",
      buttonText: "আমাদের সম্পর্কে",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img3,
      title: "জীবনসঙ্গী খুঁজছেন?",
      description:
        "এখানে আপনি পাবেন আপনার জীবনের সাথীকে খুঁজতে একটি অবস্থান। আপনি যদি আপনার জীবনের সাথীকে সাধারণ ম্যাচিং সাইটগুলির মত না খুঁজতে চান, আপনি আপনার পছন্দসই প্রোফাইলগুলি প্রদর্শন করতে এখানে চলে এসেছেন।",
      buttonText: "সফল জুটি গুলো",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img5,
      title: "গোপনীয়তা সুরক্ষিত রেখে জীবনসঙ্গী খুঁজতে",
      description:
        "এখানে আপনি পাবেন একটি উন্নত জন্য গোপনীয়তা এবং জীবনসঙ্গী সার্চ সাইট। এখানে আপনি আপনার স্থানীয় এলাকা এবং পছন্দসই গোপনীয়তা বিজ্ঞাপন করতে পারেন, আপনার আশঙ্কা না করে এবং আপনার প্রোফাইল গোপনীয় রাখুন।",
      buttonText: "জীবনসঙ্গী খুঁজতে!",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img6,
      title: "জীবনসঙ্গী খুঁজতে গোপনীয়তা",
      description:
        "এখানে আপনি আপনার জীবনসঙ্গীর জন্য একটি গোপনীয়তামূলক এবং অভিন্নতা সংরক্ষণ করতে একটি অনুভূতিগত ও আদর্শ প্ল্যাটফর্মে এসেছেন।",
      buttonText: "প্রোফাইল করুন",

      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img9,
      title: "জীবনসঙ্গী খুঁজতে গোপনীয়তা",
      description:
        "এখানে আপনি আপনার জীবনসঙ্গীর জন্য একটি গোপনীয়তামূলক প্ল্যাটফর্মে এসেছেন, যেখানে আপনি আপনার সাথীর জন্য প্রতিষ্ঠানিক এবং ব্যক্তিগত প্রদান পেতে পারেন।",
      buttonText: "সফল জুটি ",
      btnSlug: "/",
      btnCss: "",
    },
    {
      img: img10,
      title: "জীবনসঙ্গী খুঁজতে গোপনীয়তা সুরক্ষিত রেখে",
      description:
        "এখানে আপনি পাবেন একটি সুরক্ষিত ও গোপনীয়তা ভিত্তিক জীবনসঙ্গী সার্চ সাইট, যা আপনার সুরক্ষিত তথ্য রক্ষা করে এবং আপনার প্রোফাইল বিশেষভাবে গোপন থাকবে।",
      buttonText: "সকল জুটি একসাথে",
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

  return (
    <div className="bg-grad">
      <div className="mx-auto" style={{ width: "90%" }}>
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
                <div className="col-md-6 d-flex  justify-content-center">
                  <img
                    className={`img-fluid ${
                      index === currentSlide ? "animate-right" : "animate-zoom"
                    }`}
                    style={{ height: "400px", width: "auto" }}
                    src={slide.img}
                    alt=""
                  />
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
