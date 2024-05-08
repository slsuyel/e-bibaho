import { useRef, useEffect } from "react";
import TopFiveCard from "./TopFiveCard";

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
          if (
            cardRect.top >= containRect.top &&
            cardRect.bottom <= containRect.bottom
          ) {
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
    <div className="contain" ref={containRef}>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
      <div className="result-card visible">
        <TopFiveCard />
      </div>
    </div>
  );
};

export default TopFive;
