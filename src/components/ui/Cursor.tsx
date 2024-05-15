/* import { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Render cursor only if not on mobile
  if (isMobile) {
    return null; // Don't render anything for mobile
  }

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
 */
import { useState, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className="cursor_circle"
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className="cursor_shadow"
        style={{ left: position.x - 10, top: position.y - 10 }}
      ></div>
    </>
  );
};

export default Cursor;
