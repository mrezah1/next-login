import axios from "axios";
// @ts-ignore

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`, // Adjust base URL for your app
  // timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add the Authorization header
// axiosInstance.interceptors.request.use((config) => {
//   const token = Cookies.get("token");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`; // Attach token if available
//   }
//   return config;
// });

// Response Interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data;
      console.log("error data", data);
      return Promise.reject(
        data?.message || data?.errors || "An error occurred"
      ); // Reject with custom error message
    }
    return Promise.reject(error); // Forward unexpected errors
  }
);

export default axiosInstance;
