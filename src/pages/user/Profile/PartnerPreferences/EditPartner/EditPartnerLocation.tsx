import { Form, Select, Button } from "antd";

const { Option } = Select;

type PartnerLocation = {
  country: string;
  state: string;
  city: string;
};

const EditPartnerLocation = () => {
  const onFinish = (values: PartnerLocation) => {
    console.log("Received values:", values);
  };

  return (
    <div className="col-md-8 mx-auto border p-3">
      <h5 className="text-center "> Edit Partner Location </h5>
      <Form
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item label="Country" name="country">
          <Select placeholder="Country">
            <Option value="Bangladesh">Bangladesh</Option>
            {/* Add more countries here */}
          </Select>
        </Form.Item>
        <Form.Item label="State" name="state">
          <Select placeholder="State">
            <Option value="Doesn't Matter">Doesn't Matter</Option>
            {/* Add more states here */}
          </Select>
        </Form.Item>
        <Form.Item label="City/District" name="city">
          <Select placeholder="City/District">
            <Option value="Doesn't Matter">Doesn't Matter</Option>
            {/* Add more cities/districts here */}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPartnerLocation;
