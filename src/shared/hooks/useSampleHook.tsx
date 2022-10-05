import {useState, useEffect} from 'react';

export default function useSampleHook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
//...
  }, [])
  return {data, loading, error};
}
