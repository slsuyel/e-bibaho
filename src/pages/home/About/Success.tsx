import { useState, useEffect } from "react";

interface SuccessData {
  title: string;
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
    <div className="container my-5">
      <div className="row">
        {data.map((item, index) => (
          <>
            <div className="col-md-6" key={index}>
              <div className="content">
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            </div>
            <div className="col-md-6" key={index}>
              <div className="sticky-image-container">
                <img
                  className="img-fluid mt-5 sticky-image"
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
