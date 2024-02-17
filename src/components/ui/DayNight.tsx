import "../../styles/DayNight.css";
const DayNight = () => {
  return (
    <div className="">
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DayNight;
