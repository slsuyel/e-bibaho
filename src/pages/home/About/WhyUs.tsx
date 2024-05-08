import React, { useEffect, useState } from "react";

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

  return (
    <div>
      <h1 className="my-5 text-center ">This is Why Us page</h1>

      <main className="scroll-container my-2 ">
        <section className="hr-content">
          <h1 className="hr-heading">Beep</h1>
        </section>
        <section className="hr-content">
          <h1 className="hr-heading">Boop</h1>
        </section>

        <section className="hr-content">
          <h1 className="hr-heading">Booosfom</h1>
        </section>

        <section className="hr-content">
          <h1 className="hr-heading">The End</h1>
        </section>
      </main>
    </div>
  );
};

export default WhyUs;
