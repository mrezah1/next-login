"use client";
import React from "react";
import useAuthStore from "@/store/AuthStore";
import withAuth from "@/HOC/withAuth";

interface User {
  name: string;
  family: string;
  phone: string;
  email: string;
}

interface UserInfoProps {
  user: User;
}

const propKeys = ["first_name", "last_name", "email", "mobile", "created_at"];
const UserInfo: React.FC<UserInfoProps> = () => {
  const { user } = useAuthStore();
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">
        User Information
      </h2>
      <div className="space-y-1">
        {propKeys.map((i, idx) => (
          <div
            className={`${
              idx % 2 === 0 ? "bg-gray-50" : "bg-white"
            } flex justify-between px-4 py-2 rounded`}
          >
            <span className="font-bold text-gray-600">{i}:</span>
            <span className="text-gray-800">{user[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuth(UserInfo);
