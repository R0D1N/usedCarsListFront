const getFetchOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer b_191d9149527181c97a609c663452dfdf",
  },
};

const postFetchOptions = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-key": "3qcxIHvz6tHWeF5lHOPCaJ0xn10iyTfy",
  },
  method: "POST",
};

const DEFAULT_ERROR = "Unknown error";

const get =
  (options) =>
  async ({ url, query, errorMessage = DEFAULT_ERROR }) => {
    try {
      const params = new URLSearchParams(query);
      const urlWithParams = `${url}?${params.toString()}`;
      const response = await fetch(urlWithParams, options);
      if (!response.ok) {
        throw new Error(`Error: ${errorMessage}`);
      }
      return response.json();
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  };

const post =
  (options) =>
  async ({ url, body, queryParams, errorMessage = DEFAULT_ERROR }) => {
    const params = new URLSearchParams(queryParams);
    const urlWithParams = `${url}?${params.toString()}`;
    const headers = {
      ...options,
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(urlWithParams, headers);
      if (!response.ok) {
        throw new Error(`Error: ${errorMessage}`);
      }
      return response.json();
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  };

const getData = get(getFetchOptions);
const postData = post(postFetchOptions);

export { getData, postData };
