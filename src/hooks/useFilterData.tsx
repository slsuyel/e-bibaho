import { useState, useEffect } from 'react';
import { callApi } from '../utils/functions';
import { TUserProfile } from '../types';

const useFilterData = (
  lookingFor: string = '2',
  religion: string = '',
  marital_status: string = '',
  age_from: string = '',
  age_to: string = ''
) => {
  const [data, setData] = useState<TUserProfile[]>();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await callApi(
          'get',
          `/profiles?gender=${lookingFor}&religion=${religion}&marital_status=${marital_status}&age_from=${age_from}&age_to=${age_to}`
        );

        if (res.code == 200) {
          setData(res.data);
        } else if (res.code == 140) {
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [lookingFor, religion, marital_status, age_from, age_to]);

  return { data, loader };
};

export default useFilterData;
