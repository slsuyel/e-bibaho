import { useState, useEffect } from 'react';
import { TCountry } from '../types';

const useCountries = (): { countries: TCountry[] | null; loading: boolean } => {
  const [countries, setCountries] = useState<TCountry[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch('/countries.json');
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data: TCountry[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  return { countries, loading };
};

export default useCountries;
