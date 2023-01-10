import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);

  async function fetchData() {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, error, data};
}
