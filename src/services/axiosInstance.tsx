import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api", // Adjust base URL for your app
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "An error occurred";
      console.error("Intercepted Error:", message);
      return Promise.reject(message); // Reject with custom error message
    }
    return Promise.reject(error); // Forward unexpected errors
  }
);
export default axiosInstance;
