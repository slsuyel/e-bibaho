import { useState } from "react";
import { Button, Modal } from "antd";
import "./Pricing.css";

const SpecialPrice = () => {
  const [showAllFeatures] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const pricingPackages = [
    {
      name: "Signature Package",
      price: 5000,
      duration: "1 Year",
      features: [
        {
          title: "Dedicated Relationship Manager",
          description:
            "A professional assigned to handle and oversee the client's profile and interactions.",
        },
        {
          title: "Includes All Platinum Features",
          description:
            "This package encompasses every benefit and service offered in the Platinum package, ensuring comprehensive access to all our premium services.",
        },
        {
          title: "Physical Verification of Details",
          description:
            "Ensuring the authenticity of the information provided by both parties through physical checks.",
        },
        {
          title: "Tailored Matchmaking",
          description:
            "Handpicking potential matches based on the client’s preferences and requirements.",
        },
        {
          title: "Personalized Communication",
          description:
            "The relationship manager will facilitate all communications between parties, setting up meetings and handling correspondence.",
        },
        {
          title: "Arrangement of Meetings",
          description:
            "Organizing and scheduling meetings in suitable and agreeable venues.",
        },
        {
          title: "Ongoing Support and Consultation",
          description:
            "Providing continuous support and advice throughout the membership, helping to navigate discussions and potential relationship developments.",
        },
        {
          title: "Privacy and Discretion",
          description:
            "Ensuring the highest level of confidentiality and discretion in handling the client's personal information and communication.",
        },
      ],
    },
  ];

  const openModal = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="row mx-auto my-4 ">
      {pricingPackages.map((item) => (
        <div
          className="col-md-8 rounded mx-auto bg-white row shadow-lg "
          key={item.name}
        >
          <div className="my-3 mt-4  position-relative py-2 text-center">
            <p className="m-0 position-absolute special-package-p">
              Join with our special package
            </p>
            <h1 className="font-maven d-inline rounded fw-medium text-info-emphasis">
              {item.name}
            </h1>
          </div>

          <div className="col-md-6 my-1 special-card-1 text-center pt-4">
            <h6 className="mb-0">🔥 FLAT 20% DISCOUNT 🔥</h6>
            <h6>Duration: {item.duration}</h6>
            <h1>$ {item.price}</h1>
            <div>
              <button className="mt-5 package-btn w-100">Buy Now</button>
            </div>
          </div>
          <div className="col-md-6 my-1 special-card-2">
            <ul className="list-unstyled text-dark ">
              {showAllFeatures
                ? item.features.map((feature) => (
                    <li key={feature.title}>
                      <h6>
                        <i className="fa-regular fa-square-check text-success fs-5 my-auto"></i>{" "}
                        {feature.title}:
                      </h6>
                      <p>{feature.description}</p>
                    </li>
                  ))
                : item.features.slice(0, 3).map((feature) => (
                    <li key={feature.title}>
                      <h6>
                        <i className="fa-regular fa-square-check text-success fs-5 my-auto"></i>{" "}
                        {feature.title}
                      </h6>
                      <p>{feature.description}</p>
                    </li>
                  ))}
            </ul>
            {!showAllFeatures && (
              <Button onClick={openModal} className="border-danger">
                See more exciting features 🎉📣
              </Button>
            )}
          </div>
        </div>
      ))}

      <Modal
        title="More Features"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="close" onClick={handleModalCancel}>
            Close
          </Button>,
        ]}
      >
        <ul className="list-unstyled p-2 text-dark ">
          {pricingPackages[0].features.map((feature) => (
            <li key={feature.title}>
              <h6>
                <i className="fa-regular fa-square-check text-success fs-5 my-auto"></i>{" "}
                {feature.title}
              </h6>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
        <div>
          <button className="package-btn">Buy Now</button>
        </div>
      </Modal>
    </div>
  );
};

export default SpecialPrice;
