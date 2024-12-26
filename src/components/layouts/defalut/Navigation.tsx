"use client";
import Link from "next/link";
import useAuthStore from "@/store/AuthStore";

const Navigation = () => {
  const { isAuthenticated, clearAuth, user } = useAuthStore();
  return (
    <nav className="w-4/5 px-10 bg-gray-100 my-3 shadow-md mx-auto py-2 rounded-lg">
      <ul className="flex gap-10">
        <li>
          <Link className="text-slate-500" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-slate-500" href="/about">
            About
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <Link className="text-slate-500" href="/user/dashboard">
              {user.username}
            </Link>
          ) : (
            <Link className="text-slate-500" href="/auth">
              SignUp
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
