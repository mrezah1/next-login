import axios from "@/services/axiosInstance";

interface loginParams {
  username: string;
  password: string;
}
const Login = async (params: loginParams) => {
  const response = await axios.post("/auth/login", params);
  return response.data;
};
export default Login;
