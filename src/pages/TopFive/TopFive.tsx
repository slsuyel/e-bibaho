import { useRef, useEffect } from "react";
import TopFiveCard from "./TopFiveCard";

const data = [
  {
    name: "Emma",
    photo: "https://example.com/emma.jpg",
    age: "32 Years",
    height: "5ft 3in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Married",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Moderate",
  },
  {
    name: "Olivia",
    photo: "https://example.com/olivia.jpg",
    age: "28 Years",
    height: "5ft 2in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "BDS",
    occupation: "Dentist",
    religious_practice: "Occasional",
  },
  {
    name: "Ava",
    photo: "https://example.com/ava.jpg",
    age: "30 Years",
    height: "5ft 1in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Occasional",
  },
  {
    name: "Sophia",
    photo: "https://example.com/sophia.jpg",
    age: "29 Years",
    height: "5ft 5in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Married",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Frequent",
  },
  {
    name: "Isabella",
    photo: "https://example.com/isabella.jpg",
    age: "31 Years",
    height: "5ft 4in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Frequent",
  },
];

const TopFive = () => {
  const containRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const contain = containRef.current;
      if (contain) {
        const containRect = contain.getBoundingClientRect();
        const cards = contain.querySelectorAll(".result-card");
        cards.forEach((card: Element) => {
          const cardRect = card.getBoundingClientRect();
          const isVisible =
            (cardRect.top >= containRect.top &&
              cardRect.top <= containRect.bottom) ||
            (cardRect.bottom >= containRect.top &&
              cardRect.bottom <= containRect.bottom);
          if (isVisible) {
            (card as HTMLElement).classList.add("visible");
          } else {
            (card as HTMLElement).classList.remove("visible");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contain " ref={containRef} data-aos="fade-up">
      {data.map((people) => (
        <div className="result-card visible">
          <TopFiveCard people={people} />
        </div>
      ))}
    </div>
  );
};

export default TopFive;
