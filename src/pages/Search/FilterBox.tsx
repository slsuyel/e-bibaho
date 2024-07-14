import { useState } from 'react';
import { Card, Checkbox, Collapse, Input, List } from 'antd';
import useCountries from '../../hooks/useCountries';
import { TCountry } from '../../types';
import { Spinner } from 'react-bootstrap';
import { SearchOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const ages = ['18-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50'];
const marital = ['Divorced', 'Single', 'Married', 'Widowed'];
const religions = [
  'Christianity',
  'Islam',
  'Hinduism',
  'Buddhism',
  'Judaism',
  'Sikhism',
  'Baháʼí Faith',
];
const educations = [
  { label: 'High School Diploma', value: 'high_school_diploma' },
  { label: 'Associate Degree', value: 'associate_degree' },
  { label: "Bachelor's Degree", value: 'bachelors_degree' },
  { label: "Master's Degree", value: 'masters_degree' },
  { label: 'Doctorate', value: 'doctorate' },
  { label: 'Other', value: 'other' },
];

const initialFilters = {
  ages: [],
  marital_status: [],
  religions: [],
  education: [],
  countries: [],
};

const FilterComponent = () => {
  const { countries, loading } = useCountries();
  const [filters, setFilters] = useState(initialFilters);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  if (loading) {
    return <Spinner animation="border" />;
  }
  const countryList = countries || [];

  const handleCheckboxChange = (
    category: keyof typeof initialFilters,
    value: string,
    checked: boolean
  ) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: checked
        ? [...prevFilters[category], value]
        : prevFilters[category].filter((item: string) => item !== value),
    }));
  };

  const applyFilters = () => {
    const { ages, marital_status, religions, education, countries } = filters;

    const queryParams = new URLSearchParams();
    queryParams.append('ages', ages.join(','));
    queryParams.append('marital_status', marital_status.join(','));
    queryParams.append('religions', religions.join(','));
    queryParams.append('education', education.join(','));
    queryParams.append('countries', countries.join(','));

    console.log(filters);
    console.log(queryParams.toString());
  };

  const filteredCountries = countryList.filter((item: TCountry) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Card title="Filter" className="filter_sidebar">
      <Collapse
        className="fil_ter"
        defaultActiveKey={['0', '1', '2', '3', '4']}
      >
        <Panel header="Age" key="0">
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={ages}
            renderItem={item => (
              <List.Item>
                <Checkbox
                  onChange={e =>
                    handleCheckboxChange('ages', item, e.target.checked)
                  }
                >
                  {item}
                </Checkbox>
              </List.Item>
            )}
          />
        </Panel>

        <Panel header="Marital Status" key="1">
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={marital}
            renderItem={item => (
              <List.Item>
                <Checkbox
                  onChange={e =>
                    handleCheckboxChange(
                      'marital_status',
                      item,
                      e.target.checked
                    )
                  }
                >
                  {item}
                </Checkbox>
              </List.Item>
            )}
          />
        </Panel>

        <Panel header="Religions" key="2">
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={religions}
            renderItem={item => (
              <List.Item>
                <Checkbox
                  onChange={e =>
                    handleCheckboxChange('religions', item, e.target.checked)
                  }
                >
                  {item}
                </Checkbox>
              </List.Item>
            )}
          />
        </Panel>

        <Panel header="Living Country" key="3">
          <Input
            placeholder="Search countries"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
            style={{ marginBottom: '1rem' }}
          />
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={filteredCountries}
            renderItem={(item: TCountry) => (
              <List.Item>
                <Checkbox
                  className="align-items-center"
                  onChange={e =>
                    handleCheckboxChange(
                      'countries',
                      item.name,
                      e.target.checked
                    )
                  }
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item.image} alt="" width={20} />
                    <span className="ms-1">{item.name}</span>
                  </div>
                </Checkbox>
              </List.Item>
            )}
          />
        </Panel>
        <Panel header="Education" key="4">
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={educations}
            renderItem={item => (
              <List.Item>
                <Checkbox
                  onChange={e =>
                    handleCheckboxChange(
                      'education',
                      item.value,
                      e.target.checked
                    )
                  }
                >
                  {item.label}
                </Checkbox>
              </List.Item>
            )}
          />
        </Panel>

        <div className="bg-white border-bottom mb-2 py-2 rounded-bottom text-center">
          <button className=" btn-default" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </Collapse>
    </Card>
  );
};

export default FilterComponent;
