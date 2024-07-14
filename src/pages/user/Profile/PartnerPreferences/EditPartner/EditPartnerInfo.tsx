import { Form, Input, Select, Button } from 'antd';
import { SetStateAction, useState } from 'react';

const { Option } = Select;
interface PartnerInfo {
  age?: string;
  marital_status?: string;
  religion?: string;
  community?: string;
  motherTongue?: string;
}

const EditPartnerInfo = () => {
  const [selectedReligion, setSelectedReligion] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('');

  const religionsData = [
    {
      religion: 'Islam',
      communities: [
        'Sunni Hanafi',
        "Sunni Shafi'i",
        'Sunni Maliki',
        'Sunni Hanbali',
        'Shia Twelver',
        'Shia Ismaili',
        'Shia Zaidi',
        'Sufism',
      ],
    },
    {
      religion: 'Christianity',
      communities: [
        'Catholicism',
        'Protestantism',
        'Eastern Orthodoxy',
        'Oriental Orthodoxy',
      ],
    },
    {
      religion: 'Hinduism',
      communities: ['Vaishnavism', 'Shaivism', 'Shaktism', 'Smartism'],
    },
    {
      religion: 'Buddhism',
      communities: ['Theravada', 'Mahayana', 'Vajrayana'],
    },
    {
      religion: 'Judaism',
      communities: [
        'Orthodox Judaism',
        'Conservative Judaism',
        'Reform Judaism',
      ],
    },
    {
      religion: 'Sikhism',
      communities: ['Sikhism'],
    },
  ];

  const handleReligionChange = (value: SetStateAction<string>) => {
    setSelectedReligion(value);
    setSelectedCommunity(
      religionsData.find(data => data.religion === value)?.communities[0] || ''
    );
  };

  const onFinish = (values: PartnerInfo) => {
    console.log('Received values:', values);
  };

  return (
    <div className="col-md-8 mx-auto border p-3">
      <Form
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item label="Age" name="age">
          <Input />
        </Form.Item>

        <Form.Item label="Marital Status" name="marital_status">
          <Select placeholder="Marital Status">
            <Option value="single">Single</Option>
            <Option value="married">Married</Option>
            <Option value="divorced">Divorced</Option>
            <Option value="widowed">Widowed</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Religion" name="religion" labelCol={{ span: 8 }}>
          <Select
            placeholder="Religion"
            onChange={handleReligionChange}
            value={selectedReligion}
          >
            {religionsData.map(data => (
              <Option key={data.religion} value={data.religion}>
                {data.religion}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Community" name="community" labelCol={{ span: 8 }}>
          <Select placeholder="Community" value={selectedCommunity}>
            {selectedReligion &&
              religionsData
                .find(data => data.religion === selectedReligion)
                ?.communities.map(community => (
                  <Option key={community} value={community}>
                    {community}
                  </Option>
                ))}
          </Select>
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

        <Form.Item className="text-end">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditPartnerInfo;
