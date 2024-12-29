"use server";

import { cookies } from "next/headers";

import serverAxios from "../serverAxios";
import { Login, loginParams, Register, registerParams } from ".";

export async function LoginAction(params: loginParams) {
  const response = await Login(params);
  const { access_token } = response;

  // Set the token in an HttpOnly cookie
  const cookieStore = await cookies();
  cookieStore.set("token", access_token, {
    httpOnly: true,
    secure: true,
    path: "/",
    //   sameSite: "strict",
  });

  return response;
}

export async function RegisterAction(params: registerParams) {
  const response = await Register(params);
  const { access_token } = response;

  // Set the token in an HttpOnly cookie
  const cookieStore = await cookies();
  cookieStore.set("token", access_token, {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return response;
}

export const checkUserAction = async () => {
  const req = await serverAxios();
  const response = await req.get("/user/current");
  return response.data;
};

export const logoutAction = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
};
