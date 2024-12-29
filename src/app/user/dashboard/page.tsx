"use client";
import { useRouter } from "next/navigation";
import React from "react";

import useAuthStore from "@/store/AuthStore";
import { Button } from "@/components/global";
import { logoutAction } from "@/services/auth/actions";

const propKeys = ["first_name", "last_name", "email", "mobile", "created_at"];

const UserInfo = () => {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();
  const logout = async () => {
    logoutAction().then(() => {
      router.replace("/");
      clearAuth();
    });
  };

  if (!user) return router.replace("/");
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">
        User Information
      </h2>
      <div className="space-y-1">
        {propKeys.map((i, idx) => (
          <div
            key={i}
            className={`${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } flex justify-between px-4 py-2 rounded`}
          >
            <span className="font-bold text-gray-600">{i}:</span>
            <span className="text-gray-800">{user[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button className="inline w-auto" variant="danger" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
