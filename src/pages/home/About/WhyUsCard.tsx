import { DataWhyUS } from "../../../types/types";

const WhyUsCard = ({ data }: { data: DataWhyUS }) => {
  return (
    <section className=" hr-content justify-content-between row mx-auto px-4  ">
      <div className="col-md-6 position-relative p-5 why-contents">
        <h2 className="my-3 px-1 fw-bold ">{data.title}</h2>
        <p style={{ fontSize: "20px" }}>{data.description}</p>
      </div>

      <div className="col-md-6 d-flex justify-content-center p-0">
        <div className="imgContainer">
          <img
            className="myImg w-100 "
            src="https://img.mensxp.com/media/content/2021/Jul/Bollywood-Actresses-Who-Found-Love-and-Married-Their-Movie-Director-1200x900_60df12a72e4f6.jpeg"
            alt="Heart-shaped image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsCard;
