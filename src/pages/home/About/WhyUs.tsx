import { useEffect, useState } from "react";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const [scrollMode, setScrollMode] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  useEffect(() => {
    const scrollContainer: HTMLElement | null =
      document.querySelector(".scroll-container");

    const handleWheel = (evt: WheelEvent) => {
      evt.preventDefault();
      if (scrollContainer) {
        if (scrollMode === "horizontal") {
          scrollContainer.scrollLeft += evt.deltaY;
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth
          ) {
            setScrollMode("vertical");
          }
        } else {
          window.scrollBy(0, evt.deltaY);
          if (window.scrollY === 0) {
            setScrollMode("horizontal");
          }
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [scrollMode]);

  const data = [
    {
      title: "Personalized Matching",
      description:
        "At E-Bibaho, we understand that finding the right partner is about unique compatibility. Our platform uses advanced algorithms and personalized questionnaires to match you with individuals who share your values, interests, and life goals, ensuring a higher chance of meaningful connections.",
    },
    {
      title: "Verified Profiles",
      description:
        "We prioritize your safety and trust. Each profile on E-Bibaho undergoes a stringent verification process, including ID checks and personal interviews, to ensure that all members are genuine and serious about marriage.",
    },
    {
      title: "Privacy and Security",
      description:
        "Your privacy is paramount. E-Bibaho employs state-of-the-art security measures to protect your personal information and communication. Our privacy options allow you to control who sees your information and how they interact with you, giving you peace of mind.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Whether you're tech-savvy or not, our platform is designed for ease of use. The intuitive design and straightforward navigation of E-Bibaho make your search for a life partner a hassle-free experience, accessible on both desktop and mobile devices.",
    },
    {
      title: "Diverse Member Base",
      description:
        "Diversity is our strength. E-Bibaho hosts a wide array of profiles from different cultural, religious, and professional backgrounds, enriching your options and increasing the likelihood of finding someone who truly suits your personal preferences.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our commitment to your journey doesn’t stop at technology. E-Bibaho's dedicated customer service team is available to assist you with any questions or issues, providing timely and empathetic support to ensure a satisfying and successful matchmaking experience.",
    },
  ];

  return (
    <div className="">
      <h1 className=" text-center mb-3 ">
        Why <span className="fw-medium text-info-emphasis "> Us?</span>
      </h1>
      <main className="scroll-container">
        {data.map((d) => (
          <WhyUsCard data={d} />
        ))}
      </main>
    </div>
  );
};

export default WhyUs;
