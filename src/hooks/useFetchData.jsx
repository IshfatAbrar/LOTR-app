import { useState, useEffect } from "react";

function useFetchData(selection) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading state to true
  const [error, setError] = useState(null);

  const apiURL = "https://the-one-api.dev/v2";
  const APITOKEN = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading state to true when fetching starts
      if (!selection) {
        return;
      }
      const url = apiURL + "/" + selection;
      try {
        const res = await fetch(url, {
          headers: {
            method: "GET",
            Authorization: `Bearer ${APITOKEN}`,
          },
        });
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Set loading state to false when fetching completes
      }
    }

    fetchData();
  }, [selection]);

  return [data, loading, error];
}

export default useFetchData;
