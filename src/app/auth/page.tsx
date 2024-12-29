"use client";

import { useState, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LoginForm from "@/components/Auth/Login";
import RegisterForm from "@/components/Auth/Register";

const tabs: {
  id: "login" | "register";
  label: string;
  content: JSX.Element;
}[] = [
  { id: "login", label: "Login", content: <LoginForm /> },
  { id: "register", label: "Register", content: <RegisterForm /> },
];

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
      {/* Tab Header */}
      <div className="relative">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-1/2 py-2 transition-all text-center relative z-10 ${
                activeTab === tab.id ? "text-blue-500" : "text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Animated Underline */}
        <motion.div
          layout
          className="absolute bottom-0 w-1/2 h-0.5 bg-blue-500"
          initial={false}
          animate={{ x: `${activeIndex * 100}%` }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
