import { useState } from "react";
import { Button } from "antd";
import ResultCard from "../Search/ResultCard";

const TodayMatches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const resultCards = [
    // Define your ResultCard data here, for example:
    <ResultCard />,
    <ResultCard />,
    <ResultCard />,
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? resultCards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === resultCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container font-maven card mt-5">
      <h5 className="text-center mt-4">
        Here are Today's top Matches for you. Connect with them now!
      </h5>
      <div className="align-items-center d-flex gap-3 justify-content-end mt-4 text-end">
        <h6 className="mb-0">Time left to Connect11h:45m:23s</h6>

        <div>
          <Button onClick={goToPrevious}>Previous</Button>
          <Button onClick={goToNext}>Next</Button>
        </div>
      </div>

      <div>{resultCards.length > 0 && <ResultCard key={currentIndex} />}</div>
    </div>
  );
};

export default TodayMatches;
