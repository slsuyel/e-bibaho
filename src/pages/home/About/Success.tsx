import { useState, useEffect } from "react";

interface SuccessData {
  title: string;
  date: string;
  content: string;
  imageSrc: string;
}

const Success = () => {
  const [data, setData] = useState<SuccessData[]>([]);

  useEffect(() => {
    fetch("./success.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="my-5">
      <div className="container-fluid  my-5 mx-auto px-2 stack">
        {data.map((item, index) => (
          <div key={index} className="row mx-2 stack__card my-2 ">
            <div className="col-md-6 p- mb-5 text-white ">
              <div className="p-3">
                <h2 className="">{item.title}</h2>
                <div className="d-flex fs-5 justify-content-between mb-3 px-1 ">
                  <p className="my-1">
                    <i className="fa-regular fa-calendar-days"></i>{" "}
                    Dhaka,Bangladesh
                  </p>

                  <p className="my-1">
                    <i className="fa-regular fa-calendar-days"></i> {item.date}
                  </p>
                </div>
                <br />
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: "26px",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
            <div className="col-md-6 p-0 mb-5" key={index}>
              <img className="img-fluid " src={item.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
