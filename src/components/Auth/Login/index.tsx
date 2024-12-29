"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

import { LoginAction } from "@/services/auth/actions";
import { Input, Button, Spinner } from "@/components/global";
import useAuthStore from "@/store/AuthStore";

const LoginPage: React.FC = () => {
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirectTo") || "/";

  const router = useRouter();
  const { login: loginStore } = useAuthStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    LoginAction(credentials)
      .then((res) => {
        toast.success(res.message);
        loginStore(res.user);
        router.replace("/");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Enter email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            placeholder="Enter password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="flex gap-2 justify-center"
        >
          Login
          {loading && <Spinner />}
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
