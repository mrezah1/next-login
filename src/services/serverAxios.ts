import axios from "axios";
import { cookies } from "next/headers";

export default async function axiosInstance() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`, // Adjust base URL for your app
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
