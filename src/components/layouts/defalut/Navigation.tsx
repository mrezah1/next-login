"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthStore from "@/store/AuthStore";

const Navigation = () => {
  const pathname = usePathname();
  const { isAuthenticated, clearAuth, user } = useAuthStore();
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    isAuthenticated
      ? { label: user.username || "User", href: "/user/dashboard" }
      : { label: "SignUp", href: "/auth" },
  ];

  return (
    <nav className="w-4/5 px-10 bg-gray-100 my-3 shadow-md mx-auto py-2 rounded-lg">
      <ul className="flex gap-10">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              className={`transition-all ${
                link.href === pathname
                  ? "text-blue-500"
                  : "text-slate-500 "
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
