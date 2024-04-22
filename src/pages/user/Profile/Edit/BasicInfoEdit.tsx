import { Form, Input, Button, DatePicker, Select } from "antd";

const { Option } = Select;

interface BasicInfoFormData {
  dateOfBirth?: Date;
  maritalStatus: MaritalStatus;
  religion: string;
  height: number;
  grewUpIn: string;
  diet: string;
  location: string;
  motherTongue: string;
  personalValues: string;
  sunSign: string;
  bloodGroup: string;
  healthInfo: string;
  disability: string;
}

type MaritalStatus = "single" | "married" | "divorced" | "widowed";

const BasicInfoEdit: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: BasicInfoFormData) => {
    console.log("Received values:", values);
  };

  return (
    <div className="col-md-8 mx-auto border p-3">
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item label="Date of Birth" name="dateOfBirth">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Marital Status" name="maritalStatus">
          <Select placeholder="Marital Status">
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
            <Option value="divorced">Divorced</Option>
            <Option value="widowed">Widowed</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Religion / Community" name="religion">
          <Select placeholder="Religion / Community">
            <Option value="islam">Islam</Option>
            <Option value="christianity">Christianity</Option>
            <Option value="hinduism">Hinduism</Option>
            <Option value="buddhism">Buddhism</Option>
            <Option value="judaism">Judaism</Option>
            <Option value="sikhism">Sikhism</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Height" name="height">
          <Select>
            {[...Array(36).keys()].map((index) => (
              <Option key={index} value={index + 48}>
                {`${Math.floor((index + 48) / 12)}ft ${(index + 48) % 12}in - ${
                  index + 48
                }cm`}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Grew up in" name="grewUpIn">
          <Input />
        </Form.Item>
        <Form.Item label="Diet" name="diet">
          <Input />
        </Form.Item>
        <Form.Item label="Location" name="location">
          <Input />
        </Form.Item>
        <Form.Item label="Mother Tongue" name="motherTongue">
          <Input />
        </Form.Item>
        <Form.Item label="Personal Values" name="personalValues">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Sun Sign" name="sunSign">
          <Input />
        </Form.Item>
        <Form.Item label="Blood Group" name="bloodGroup">
          <Select placeholder="Select Blood Group">
            <Option value="A+">A+</Option>
            <Option value="A-">A-</Option>
            <Option value="B+">B+</Option>
            <Option value="B-">B-</Option>
            <Option value="AB+">AB+</Option>
            <Option value="AB-">AB-</Option>
            <Option value="O+">O+</Option>
            <Option value="O-">O-</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Health Information" name="healthInfo">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Disability" name="disability">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BasicInfoEdit;
