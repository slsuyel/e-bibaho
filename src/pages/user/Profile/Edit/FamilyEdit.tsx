import React from "react";
import { Card, Form, Input, Select, Button } from "antd";

const { Option } = Select;

interface familyInfo {
  fatherStatus?: string;
  mothersStatus?: string;
  familyLocation?: string;
  nativePlace?: string;
  numberOfSiblings?: number;
  notMarried?: number;
  married?: number;
  familyType?: string;
  familyValues?: string[];
  familyAffluence?: string;
}

const FamilyEdit: React.FC = () => {
  const labelColSpan = 8;

  const handleFormSubmit = (values: familyInfo) => {
    console.log("Form values:", values);
  };

  return (
    <div className="col-md-8 mx-auto">
      <Card className="border">
        <h5>Edit Family Info</h5>

        <Form onFinish={handleFormSubmit}>
          <Form.Item
            label="Father's Status"
            name="fatherStatus"
            labelCol={{ span: labelColSpan }}
          >
            <Select placeholder="Select Father's Status">
              <Option value="Not Employed">Not Employed</Option>
              <Option value="Business">Business</Option>
              <Option value="Retired">Retired</Option>
              <Option value="Employed">Employed</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Mother's Status"
            name="mothersStatus"
            labelCol={{ span: labelColSpan }}
          >
            <Select placeholder="Select Mother's Status">
              <Option value="Homemaker">Homemaker</Option>
              <Option value="Business">Business</Option>
              <Option value="Retired">Retired</Option>
              <Option value="Employed">Employed</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Family Location"
            name="familyLocation"
            labelCol={{ span: labelColSpan }}
          >
            <Input placeholder="Enter Family Location" />
          </Form.Item>
          <Form.Item
            label="Native Place"
            name="nativePlace"
            labelCol={{ span: labelColSpan }}
          >
            <Input placeholder="Enter native place" />
          </Form.Item>
          <Form.Item
            label="No. of Siblings"
            name="numberOfSiblings"
            labelCol={{ span: labelColSpan }}
          >
            <Input type="number" placeholder="Enter number of siblings" />
          </Form.Item>
          <Form.Item
            label="Not married"
            name="notMarried"
            labelCol={{ span: labelColSpan }}
          >
            <Input type="number" placeholder="Enter number not married" />
          </Form.Item>
          <Form.Item
            label="Married"
            name="married"
            labelCol={{ span: labelColSpan }}
          >
            <Input type="number" placeholder="Enter number married" />
          </Form.Item>
          <Form.Item
            label="Family Type"
            name="familyType"
            labelCol={{ span: labelColSpan }}
          >
            <Select placeholder="Select Family Type">
              <Option value="Joint">Joint</Option>
              <Option value="Nuclear">Nuclear</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Family values"
            name="familyValues"
            labelCol={{ span: labelColSpan }}
          >
            <Select mode="multiple" placeholder="Select Family Values">
              <Option value="Traditional">Traditional</Option>
              <Option value="Moderate">Moderate</Option>
              <Option value="Liberal">Liberal</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item
            label="Family Affluence"
            name="familyAffluence"
            labelCol={{ span: labelColSpan }}
          >
            <Input placeholder="Enter Family Affluence" />
          </Form.Item>
          <Form.Item labelCol={{ span: labelColSpan, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FamilyEdit;
