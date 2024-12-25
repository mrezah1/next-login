"use client";
import { ReactNode } from "react";
import { Spinner } from "../global";
import useCheckAuth from "@/hooks/useCheckAuth";

interface AuthProviderType {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const { loading } = useCheckAuth();
  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner className="text-transparent w-9 h-9" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
