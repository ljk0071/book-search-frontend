import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  // headers: {
  //   "Content-Type": "application/json;charset=UTF-8",
  // },
  timeout: 30000,
  withCredentials: true,
});

const axiosHandler = async (method, url, params, config = []) => {
  let response = null;

  try {
    switch (method) {
      case 'get':
        response = await axiosInstance.get(url, { params }, config);
        break;
      case 'post':
        response = await axiosInstance.post(url, params, config);
        break;
      case 'put':
        response = await axiosInstance.put(url, params, config);
        break;
      case 'delete':
        response = await axiosInstance.delete(url, config);
        break;
      default:
        break;
    }
  } catch (error) {
    if (!response) {
      console.log(error);
    }
  }

  return response;
}

export default axiosHandler