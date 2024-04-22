import React, { useState } from "react";
import { Card, Form, Input, Select, Button } from "antd";

const { Option } = Select;
type ReligionsInfo = {
  religion?: string;
  community?: string;
  subCommunity?: string;
  motherTongue?: string;
};

const ReligiousEdit: React.FC = () => {
  const [selectedReligion, setSelectedReligion] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const religionsData = [
    {
      religion: "Islam",
      communities: [
        "Sunni Hanafi",
        "Sunni Shafi'i",
        "Sunni Maliki",
        "Sunni Hanbali",
        "Shia Twelver",
        "Shia Ismaili",
        "Shia Zaidi",
        "Sufism",
      ],
    },
    {
      religion: "Christianity",
      communities: [
        "Catholicism",
        "Protestantism",
        "Eastern Orthodoxy",
        "Oriental Orthodoxy",
      ],
    },
    {
      religion: "Hinduism",
      communities: ["Vaishnavism", "Shaivism", "Shaktism", "Smartism"],
    },
    {
      religion: "Buddhism",
      communities: ["Theravada", "Mahayana", "Vajrayana"],
    },
    {
      religion: "Judaism",
      communities: [
        "Orthodox Judaism",
        "Conservative Judaism",
        "Reform Judaism",
      ],
    },
    {
      religion: "Sikhism",
      communities: ["Sikhism"],
    },
  ];

  const handleReligionChange = (value: string) => {
    setSelectedReligion(value);
    setSelectedCommunity(
      religionsData.find((data) => data.religion === value)?.communities[0] ||
        ""
    );
  };

  const handleFormSubmit = (values: ReligionsInfo) => {
    console.log("Form values:", values);
  };

  return (
    <div className="col-md-8 mx-auto">
      <Card className="border">
        <h5 className="text-center">Edit Your Religious </h5>
        <Form onFinish={handleFormSubmit}>
          <Form.Item label="Religion" name="religion" labelCol={{ span: 8 }}>
            <Select placeholder="Religion" onChange={handleReligionChange}>
              {religionsData.map((data) => (
                <Option key={data.religion} value={data.religion}>
                  {data.religion}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Community" name="community" labelCol={{ span: 8 }}>
            <Select
              placeholder="Community"
              value={selectedCommunity}
              onChange={setSelectedCommunity}
            >
              {religionsData
                .find((data) => data.religion === selectedReligion)
                ?.communities.map((community) => (
                  <Option key={community} value={community}>
                    {community}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Sub Community"
            name="subCommunity"
            labelCol={{ span: 8 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mother Tongue"
            name="motherTongue"
            labelCol={{ span: 8 }}
          >
            <Select placeholder="Mother Tongue">
              <Option value="Bengali">Bengali</Option>
              <Option value="English">English</Option>
              <Option value="Hindi">Hindi</Option>
            </Select>
          </Form.Item>
          <Form.Item labelCol={{ span: 8, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ReligiousEdit;
