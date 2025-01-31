import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const useAxios = (
  url,
  method,
  payload = null,
  loadOnMount = true,
  rejectError = true,
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const controllerRef = useRef(new AbortController());

  // Function to cancel the request
  const cancel = () => {
    controllerRef.current.abort();
  };

  // Fetch function to make the HTTP request
  const fetch = useCallback(
    async (url, method, payload) =>
      new Promise(async (resolve, reject) => {
        try {
          setLoaded(false);
          const response = await axios.request({
            data: payload,
            signal: controllerRef.current.signal,
            method,
            url,
          });

          setData(response.data);
          resolve(response);
        } catch (error) {
          setError(error);
          if (rejectError) reject(error);
        } finally {
          setLoaded(true);
        }
      }),
    [rejectError],
  );

  // Fetch data on mount if loadOnMount is true
  useEffect(() => {
    if (loadOnMount) {
      (async () => {
        fetch(url, method, payload);
      })();
    }
  }, [fetch, loadOnMount, method, payload, url]);

  // Return the state and functions
  return { cancel, data, error, loaded, fetch };
};

export default useAxios;
