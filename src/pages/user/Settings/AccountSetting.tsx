import { useState } from "react";
import { Form, Input, Slider, Collapse, Button } from "antd";

const { Panel } = Collapse;

const AccountSetting = () => {
  const [ageValue, setAgeValue] = useState([20, 50]);
  const [heightValue, setHeightValue] = useState([54, 84]); // Initial height range values

  const onAgeChange = (value: number[]) => {
    setAgeValue(value);
  };

  const onHeightChange = (value: number[]) => {
    setHeightValue(value);
  };

  const handleEmailSubmit = (values: string) => {
    // Handle email submission logic here
    console.log("Email submitted:", values);
  };

  const handleAgeSubmit = (values: number[]) => {
    // Handle age submission logic here
    console.log("Age submitted:", values);
  };

  const handleHeightSubmit = (values: number[]) => {
    // Handle height submission logic here
    console.log("Height submitted:", values);
  };

  return (
    <div className="container mt-3" style={{ height: "100vh" }}>
      <h5>Setting</h5>

      <div className="col-md-8 mx-auto">
        <Collapse accordion>
          <Panel header="Account Setting" key="1">
            <Form name="emailForm" onFinish={handleEmailSubmit}>
              <Form.Item
                label="Update Email Id"
                name="email"
                rules={[
                  { required: true, message: "Please input your new email!" },
                ]}
              >
                <Input defaultValue={"slsuyel@gmail.com"} />
              </Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form>
          </Panel>

          <Panel header="Contact Filters" key="2">
            <h6>{`${ageValue[0]} to ${ageValue[1]} yrs`}</h6>{" "}
            <Form className="d-flex " name="ageForm" onFinish={handleAgeSubmit}>
              <Form.Item className="w-100" label="Age" name="age">
                <Slider
                  range
                  defaultValue={[20, 50]}
                  min={20}
                  onChange={onAgeChange}
                />
              </Form.Item>
              <Button className="" htmlType="submit">
                Submit
              </Button>
            </Form>
            <hr />
            <h6>{`${heightValue[0] / 12}' ${heightValue[0] % 12}'' to ${
              heightValue[1] / 12
            }' ${heightValue[1] % 12}'' (ft/inch)`}</h6>
            <Form
              className="d-flex "
              name="heightForm"
              onFinish={handleHeightSubmit}
            >
              <Form.Item className="w-100" label="Height range" name="height">
                <Slider
                  range
                  min={50}
                  defaultValue={[54, 84]}
                  onChange={onHeightChange}
                />
              </Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form>
            <hr />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default AccountSetting;
