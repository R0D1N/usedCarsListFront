import { useEffect, useState } from "react";

const transformArrayToObject = (arr, key = "name", value = "response") => {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item[value];
    return acc;
  }, {});
};

const useFetchData = (fetchMethods) => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dataEffect = () => {
    (async () => {
      try {
        const dataResponse = await Promise.all(
          fetchMethods.map(({ name, method, body, queryParams }) =>
            method({ body, queryParams }).then((response) => {
              return { name, response };
            }),
          ),
        );

        setData(transformArrayToObject(dataResponse));
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setErrors((prev) => [...prev, error]);
        setLoading(false);
      }
    })();
  };

  useEffect(dataEffect, []);

  return { ...data, loading, errors };
};

export default useFetchData;
