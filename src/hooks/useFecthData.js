import { useEffect, useState } from "react";

const transformArrayToObject = (arr, key = "name", value = "response") => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item[value];
    return acc;
  }, {});
};

const useFetchData = (initialFetchMethods) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fetchMethods] = useState(initialFetchMethods);

  const fetchData = async (methods = fetchMethods) => {
    setLoading(true);
    setErrors([]);
    try {
      const dataResponse = await Promise.all(
        methods.map(({ name, method, body, query }) =>
          method({ body, query }).then((response) => {
            return { name, response };
          }),
        ),
      );

      setData(transformArrayToObject(dataResponse));
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
