import { useEffect, useState } from "react";

const transformArrayToObject = (
  data,
  arr,
  key = "name",
  value = "response",
) => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item[value];
    return acc;
  }, data);
};

const useFetchData = (initialFetchMethods) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [fetchMethods] = useState(initialFetchMethods);

  const fetchData = async (methods = fetchMethods) => {
    setLoading(true);
    setErrors([]);
    try {
      const dataResponse = await Promise.all(
        methods.map(({ name, method, body, query, params }) =>
          method({ body, query, params }).then((response) => {
            return { name, response };
          }),
        ),
      );

      setData(transformArrayToObject(data, dataResponse));
    } catch (error) {
      console.error("Error:", error);
      setErrors((prev) => [...prev, error]);
    } finally {
      setLoading(false);
    }
  };

  const refetch = (newFetchMethods) => {
    if (newFetchMethods) fetchData(newFetchMethods);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { ...data, loading, errors, refetch };
};

export default useFetchData;
