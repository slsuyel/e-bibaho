import { useState, useEffect } from "react";

const FooterTop = () => {
  const words = [
    "Hearts",
    "Souls",
    "Couples",
    "Lives",
    "Families",
    "Partners",
    "Friends",
    "Traditions",
    "Dreams",
    "Moments",
    "celebrating",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    typeWriter();
  }, [currentWordIndex]);

  const speed = 50;

  const typeWriter = () => {
    const span = document.getElementById("demo");
    if (span) {
      span.innerHTML = "";
      const word = words[currentWordIndex];
      let j = 0;
      const wordInterval = setInterval(() => {
        if (j < word.length) {
          span.innerHTML += word.charAt(j);
          j++;
        } else {
          clearInterval(wordInterval);
        }
      }, speed);
    }
  };

  return (
    <div className="animation-bg somoy-shaow">
      <h4 className=" text-center text-white mb-0 py-3">
        Uniting{" "}
        <span id="demo" className="change-word">
          {" "}
        </span>{" "}
        Shaping Futures, Celebrating Every Love Story.
      </h4>
    </div>
  );
};

export default FooterTop;
