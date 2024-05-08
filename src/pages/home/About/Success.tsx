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
    <div className=" my-5 bg-cng p-3 py-5 success-page">
      <div className="row mx-auto ">
        {data.map((item, index) => (
          <>
            {/* <div class="col-md-6 my-5"><div class="content"><h1>Rakib &amp; Mimi</h1><div class="d-flex fs-5 justify-content-between mb-3 px-1"><p class="my-1"><i class="fa-regular fa-calendar-days" aria-hidden="true"></i> Dhaka,Bangladesh</p><p class="my-1"><i class="fa-regular fa-calendar-days" aria-hidden="true"></i> 05 May 2024</p></div><p style="font-size: 19px; line-height: 31px;"> */}

            <div className="col-md-6 my-5" key={index}>
              <div className="">
                <h1>{item.title}</h1>
                <div className="d-flex fs-5 justify-content-between mb-3 px-1">
                  <p className="my-1">
                    <i className="fa-regular fa-calendar-days"></i>{" "}
                    Dhaka,Bangladesh
                  </p>

                  <p className="my-1">
                    <i className="fa-regular fa-calendar-days"></i> {item.date}
                  </p>
                </div>
                <p style={{ fontSize: "19px", lineHeight: "31px" }}>
                  {item.content}
                </p>
              </div>
            </div>
            <div className="col-md-6" key={index}>
              <div className="sticky-image-container">
                <img
                  className="img-fluid mt-5 sticky-image "
                  src={item.imageSrc}
                  alt=""
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Success;
