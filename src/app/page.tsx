"use client";
import Link from "next/link";

import useAuthStore from "@/store/AuthStore";
import { Button } from "@/components/global";

export default function Home() {
  const { isAuth, username, logout } = useAuthStore();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-xl text-gray-400">NextJs Login</h2>
        {isAuth ? (
          <>
            <h2 className="text-lg text-slate-700">Wellcome {username}</h2>
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </main>
    </div>
  );
}
