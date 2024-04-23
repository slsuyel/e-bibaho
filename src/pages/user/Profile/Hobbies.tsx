import { useState } from "react";
import { Modal, Select, Button } from "antd"; // Import Button from antd

const { Option } = Select;

interface Hobby {
  label: string;
  icon: string;
}

const hobbies: Hobby[] = [
  { label: "Blogging", icon: "fas fa-blog" },
  { label: "Content creation", icon: "fas fa-pen" },
  { label: "Social media", icon: "fab fa-facebook" },
  { label: "Running", icon: "fas fa-running" },
  { label: "Cycling", icon: "fas fa-bicycle" },
  { label: "Photography", icon: "fas fa-camera" },
  // { label: "Drawing", icon: "fas fa-paint-brush" },
  // { label: "Reading", icon: "fas fa-book" },
  // { label: "Gardening", icon: "fas fa-seedling" },
  // { label: "Cooking", icon: "fas fa-utensils" },
];

const initialSelectedHobbies = hobbies.map((hobby) => hobby.icon);

const Hobbies = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(
    initialSelectedHobbies
  );

  const handleEditClick = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleHobbiesChange = (selectedHobbies: string[]) => {
    setSelectedHobbies(selectedHobbies);
  };

  // Assuming you have a function to save hobbies to the database
  const handleSaveToDB = () => {
    // Write your code here to save selectedHobbies to the database
    console.log("Selected hobbies:", selectedHobbies);
    // Example of saving data to the database:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ hobbies: selectedHobbies }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Data saved to database:', data);
    // })
    // .catch(error => {
    //   console.error('Error saving data:', error);
    // });
  };

  return (
    <>
      <div className="align-items-center my-1 mt-2 d-flex justify-content-between font-maven">
        <h6 className="">Hobbies and Interests</h6>
        <button className="border-0 text-primary" onClick={handleEditClick}>
          Edit
        </button>
      </div>
      <div className="user-d-border"></div>

      <div className="align-items-center d-flex flex-wrap fw-medium justify-content-around my-2">
        {selectedHobbies.map((hobby, index) => (
          <div
            key={index}
            className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border font-maven"
          >
            <i className={hobby}></i>{" "}
            {hobbies.find((item) => item.icon === hobby)?.label}
          </div>
        ))}
      </div>

      <Modal
        title="Edit Hobbies"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="save" type="primary" onClick={handleSaveToDB}>
            Save
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select hobbies"
          onChange={handleHobbiesChange}
          value={selectedHobbies}
        >
          {hobbies.map((hobby, index) => (
            <Option key={index} value={hobby.icon}>
              <i className={hobby.icon}></i> {hobby.label}
            </Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

export default Hobbies;
