import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`, // Adjust base URL for your app
  // timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const data = JSON.parse(localStorage.getItem("auth-storage") || "[]");
  const token = data?.state?.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`; // Attach token if available
  }
  return config;
});

// Response Interceptor to handle errors
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
