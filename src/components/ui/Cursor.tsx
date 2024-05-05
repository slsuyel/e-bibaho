import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className="shadow"
        style={{ left: position.x - 10, top: position.y - 10 }}
      ></div>
    </>
  );
};

export default Cursor;
