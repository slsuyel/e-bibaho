import { Form, Input, Button } from "antd";

interface ContactInfo {
  mobile?: string;
  email?: string;
  whatsapp?: string;
}

const ContactEdit = () => {
  const onFinish = (values: ContactInfo) => {
    console.log("Received values:", values);
  };

  return (
    <div className="border col-md-8 mx-auto p-3">
      <h5 className="text-center "> Edit your contact information</h5>
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        initialValues={{
          email: "slesuyel@gmail.com",
        }}
      >
        <Form.Item
          label="Mobile"
          name="mobile"
          rules={[
            { required: true, message: "Please input your mobile number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="WhatsApp"
          name="whatsapp"
          rules={[
            { required: true, message: "Please input your WhatsApp number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactEdit;
