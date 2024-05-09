import { useEffect, useState } from "react";

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

  const data = [1, 1, 1, 1, 11];

  return (
    <div className="bg-grad" data-aos="fade-up">
      <h1 className="position-relative py-4 text-center text-white text-wrap">
        Why Us ?
      </h1>

      <main className="scroll-container my-2 ">
        {data.map(() => (
          <section className="align-items-baseline hr-content justify-content-between row mx-auto px-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="imgContainer">
                <img
                  width={400}
                  height={400}
                  className="myImg"
                  src="https://bibahabd.net/wp-content/uploads/2021/11/Marriage-1.jpg"
                  alt="Heart-shaped image"
                />
              </div>
            </div>

            <div className="content-wrapper col-md-6 text-end position-relative ">
              <img
                width={400}
                height={400}
                src="https://i.pinimg.com/originals/98/fc/40/98fc4058a79909e9298fb94c227adade.png"
                alt=""
                className="img-fluid "
              />
              <div className="content-txt">
                <h2>Your Title</h2>
                <p>
                  Your paragraph Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur numquam nihil minima at possimus,
                  dolorum, vel ratione harum dolores aut, corporis optio
                  blanditiis nostrum deserunt ipsum libero omnis delectus
                  mollitia?
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default WhyUs;
