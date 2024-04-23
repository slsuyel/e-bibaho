import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

interface EduCrDetails {
  highestQualification?: string;
  collegeUniversity?: string;
  workingSector?: string;
  profession?: string;
  monthlyIncome?: string;
}

const EducationEdit = () => {
  const onFinish = (values: EduCrDetails) => {
    console.log("Received values:", values);
  };

  return (
    <div className="col-md-8 mx-auto p-3 border ">
      <h5>Edit Your Education and Career Details</h5>

      <Form
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Highest Qualification"
          name="highestQualification"
          rules={[
            {
              required: true,
              message: "Please select your highest qualification!",
            },
          ]}
        >
          <Select placeholder="Select Highest Qualification">
            <Option value="bachelor">Bachelor's Degree</Option>
            <Option value="master">Master's Degree</Option>
            <Option value="phd">PhD</Option>
            <Option value="diploma">Diploma</Option>
            <Option value="certificate">Certificate</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="College(s) / University"
          name="collegeUniversity"
          rules={[
            {
              required: true,
              message: "Please input your college(s) / university!",
            },
          ]}
        >
          <Input placeholder="Enter College(s) / University" />
        </Form.Item>

        <Form.Item
          label="Working Sector"
          name="workingSector"
          rules={[
            { required: true, message: "Please select your working sector!" },
          ]}
        >
          <Select placeholder="Select Working Sector">
            <Option value="private">Private Sector</Option>
            <Option value="public">Public Sector</Option>
            <Option value="selfEmployed">Self Employed</Option>
            <Option value="freelancer">Freelancer</Option>
            <Option value="unemployed">Unemployed</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Profession"
          name="profession"
          rules={[{ required: true, message: "Please input your profession!" }]}
        >
          <Input placeholder="Enter Profession" />
        </Form.Item>

        <Form.Item
          label="Monthly Income"
          name="monthlyIncome"
          rules={[
            { required: true, message: "Please select your monthly income!" },
          ]}
        >
          <Select placeholder="Select Monthly Income">
            <Option value="private">Keep it private</Option>
            <Option value="0-5000">0 - 5000</Option>
            <Option value="5001-10000">5001 - 10000</Option>
            <Option value="10001-20000">10001 - 20000</Option>
            <Option value="20001-50000">20001 - 50000</Option>
            <Option value="50001+">50001+</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EducationEdit;
