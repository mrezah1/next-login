import { ToastContainer } from "react-toastify";

import AuthProvider from "@/components/providers/AuthProvider";
import Navigation from "./Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Navigation />
      <main className="flex justify-center items-center">
        {children}
        <ToastContainer theme="colored" />
      </main>
    </AuthProvider>
  );
}
