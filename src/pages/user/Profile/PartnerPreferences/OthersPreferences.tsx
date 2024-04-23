import { useState } from "react";
import { Button, Modal, Select, Form, Input } from "antd";

const { Option } = Select;

const OthersPreferences = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [qualification, setQualification] = useState(["bachelor"]); // Default value for qualification
  const [workingWith, setWorkingWith] = useState(["company"]); // Default value for workingWith
  const [profession, setProfession] = useState(["engineer"]); // Default value for profession
  const [professionalDetails, setProfessionalDetails] = useState(
    "Some default professional details"
  ); // Default value for professionalDetails

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const handleFormSubmit = () => {
    console.log({
      qualification,
      workingWith,
      profession,
      professionalDetails,
    });
    handleModalToggle();
  };

  return (
    <>
      <div className="align-items-center my-1 mt-2 d-flex justify-content-between font-maven">
        <h6 className="">Education & Career</h6>
        <Button
          className="border-0 pe-0 text-primary"
          onClick={handleModalToggle}
        >
          Edit
        </Button>
      </div>
      <div className="user-d-border"></div>
      <table className="table mx-1 text-capitalize font-maven">
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Qualification</td>
            <td>{qualification.join(", ")}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Working With</td>
            <td>{workingWith.join(", ")}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Profession</td>
            <td>{profession.join(", ")}</td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Professional Details</td>
            <td>{professionalDetails}</td> {/* Display professional details */}
          </tr>
        </tbody>
      </table>

      {/* Modal form for editing */}
      <Modal
        title="Edit Education & Career"
        visible={modalVisible}
        onCancel={handleModalToggle}
        onOk={handleFormSubmit}
      >
        <Form onFinish={handleFormSubmit}>
          <Form.Item label="Highest Qualification">
            <Select
              mode="tags"
              placeholder="Select Highest Qualification"
              onChange={setQualification}
              value={qualification}
            >
              <Option value="bachelor">Bachelor's Degree</Option>
              <Option value="master">Master's Degree</Option>
              <Option value="phd">PhD</Option>
              <Option value="diploma">Diploma</Option>
              <Option value="certificate">Certificate</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Working With">
            <Select
              mode="tags"
              placeholder="Select Working With"
              onChange={setWorkingWith}
              value={workingWith}
            >
              <Option value="company">Company</Option>
              <Option value="organization">Organization</Option>
              <Option value="startup">Startup</Option>
              <Option value="government">Government</Option>
              <Option value="selfEmployed">Self Employed</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Profession">
            <Select
              mode="tags"
              placeholder="Select Profession"
              onChange={setProfession}
              value={profession}
            >
              <Option value="engineer">Engineer</Option>
              <Option value="doctor">Doctor</Option>
              <Option value="teacher">Teacher</Option>
              <Option value="artist">Artist</Option>
              <Option value="manager">Manager</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Professional Details">
            <Input.TextArea
              placeholder="Enter Professional Details"
              onChange={(e) => setProfessionalDetails(e.target.value)}
              value={professionalDetails}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default OthersPreferences;
