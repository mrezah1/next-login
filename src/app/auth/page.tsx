"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoginForm from "@/components/Auth/Login";
import RegisterForm from "@/components/Auth/Register";

const tabs = [
  { id: "login", content: LoginForm },
  { id: "register", content: RegisterForm },
];

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login"); // State to track the active tab

  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
      {/* Tab Header */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("login")}
          className={`w-1/2 py-2 text-center ${
            activeTab === "login"
              ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("register")}
          className={`w-1/2 py-2 text-center ${
            activeTab === "register"
              ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          Register
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {<tab.content />}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
