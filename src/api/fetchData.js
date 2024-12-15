export { getData, postData };

const getFetchOptions = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-key": "3qcxIHvz6tHWeF5lHOPCaJ0xn10iyTfy", // TODO: hardcode
  },
};

const postFetchOptions = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-key": "3qcxIHvz6tHWeF5lHOPCaJ0xn10iyTfy", // TODO: hardcode
  },
  method: "POST",
};

const DEFAULT_ERROR = "Unknown error";

const get =
  (options) =>
  async ({ url, errorMessage = DEFAULT_ERROR }) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${errorMessage}`);
      }
      return response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.error("Fetch Error:", error);
      throw error;
    }
  };

const getData = get(getFetchOptions);
const postData = post(postFetchOptions);
