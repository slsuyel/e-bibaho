import { useState, useEffect } from 'react';

import { callApi } from '../utils/functions';
import { TTools } from '../types';

const useAllHooks = () => {
  const [data, setData] = useState<TTools>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCountryData = async () => {
      try {
        const response = await callApi('get', '/tools');
        if (response.code == 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  return { data, loading };
};

export default useAllHooks;
