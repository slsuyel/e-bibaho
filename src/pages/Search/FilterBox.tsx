import { useState } from 'react';
import { Card, Checkbox, Collapse, List } from 'antd';
import useCountries from '../../hooks/useCountries';
import { TCountry } from '../../types';
import { Spinner } from 'react-bootstrap';

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

const initialFilters = {
  ages: [],
  maritalStatus: [],
  religions: [],
  countries: [],
};

const FilterComponent = () => {
  const { countries, loading } = useCountries();
  const [filters, setFilters] = useState(initialFilters);

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
    const { ages, maritalStatus, religions, countries } = filters;

    const queryParams = new URLSearchParams();
    queryParams.append('ages', ages.join(','));
    queryParams.append('maritalStatus', maritalStatus.join(','));
    queryParams.append('religions', religions.join(','));
    queryParams.append('countries', countries.join(','));

    console.log(filters);
    console.log(queryParams.toString());
  };

  return (
    <Card title="Filter" className="filter_sidebar">
      <Collapse defaultActiveKey={['0', '1', '2', '3', '4']}>
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
                      'maritalStatus',
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
          <List
            style={{ height: '200px', overflow: 'auto' }}
            dataSource={countryList}
            renderItem={(item: TCountry) => (
              <List.Item>
                <Checkbox
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
      </Collapse>

      <div style={{ marginTop: '10px' }}>
        <button className="btn btn-primary" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </Card>
  );
};

export default FilterComponent;
