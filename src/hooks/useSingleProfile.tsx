/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { callApi } from '../utils/functions';
import { TUserProfile } from '../types';

const useSingleProfile = (id: unknown) => {
  const [profile, setProfile] = useState<TUserProfile>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await callApi('get', `/profiles?profile_id=${id}`);

        if (res.code == 200) {
          setProfile(res.data[0]);
        }
      } catch (err) {
        setError(err as any);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  return { profile, loading, error };
};

export default useSingleProfile;
