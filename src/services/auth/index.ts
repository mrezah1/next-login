import axios from "@/services/axiosInstance";

export interface loginParams {
  email: string;
  password: string;
}

export interface registerParams {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
export const Login = async (params: loginParams) => {
  const response = await axios.post("/auth/login", params);
  return response.data;
};

export const Register = async (params: registerParams) => {
  const response = await axios.post("/auth/register", params);
  return response.data;
};

export const checkUser = async () => {
  const response = await axios.get("/user/current");
  return response.data;
};
