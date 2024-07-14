import { Form, Button, DatePicker, Select, Switch, Input } from 'antd';

const { Option } = Select;

interface BasicInfoFormData {
  date_of_birth?: Date;
  marital_status?: marital_status;
  height?: number;
  blood_group?: string;
  disability?: boolean;
  country?: string;
  state?: string;
  city?: string;
}

type marital_status = 'single' | 'married' | 'divorced' | 'widowed';

const BasicInfoEdit: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: BasicInfoFormData) => {
    console.log('Received values:', values);
  };

  return (
    <div className="col-md-8 mx-auto border p-3 font-maven">
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item label="Profile created by" name="profileCreateBy">
          <Select placeholder="Profile created by">
            <Option value="Self">Self</Option>
            <Option value="Parent / Guardian">Parent / Guardian</Option>
            <Option value="Sibling">Sibling</Option>
            <Option value="Friend">Friend</Option>
            <Option value="Others">Others</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date of Birth" name="date_of_birth">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Marital Status" name="marital_status">
          <Select placeholder="Marital Status">
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
            <Option value="divorced">Divorced</Option>
            <Option value="widowed">Widowed</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Height" name="height">
          <Select>
            {[...Array(36).keys()].map(index => (
              <Option key={index} value={index + 48}>
                {`${Math.floor((index + 48) / 12)}ft ${(index + 48) % 12}in - ${
                  index + 48
                }cm`}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Blood Group" name="blood_group">
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

        {/* Replaced Input with Switch */}
        <Form.Item label="Disability" name="disability" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Birth Place" name="birthPlace">
          <Input />
        </Form.Item>

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
          </Select>
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
