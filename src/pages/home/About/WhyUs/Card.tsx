import { DataWhyUS } from "../../../../types/types";

const Card = ({ data }: { data: DataWhyUS }) => {
  return (
    <section className="hr-content justify-content-between d-flex align-items-center why-contents">
      <div className=" row mx-auto">
        <div className="col-md-6 position-relative ">
          <div className="pt-5">
            <h2 className="my-3 px-1 fw-bold">{data.title}</h2>
            <p style={{ fontSize: "20px" }}>{data.description}</p>
          </div>
        </div>

        <div className="col-md-6 p-0">
          <div className="imgContainer">
            <img
              className="myImg w-100"
              src="https://cdn0.weddingwire.in/vendor/1593/3_2/960/jpg/dsc-3039-1_15_241593-159300703999970.jpeg"
              alt="Heart-shaped image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
