"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

import { RegisterAction } from "@/services/auth/actions";
import { Input, Button, Spinner } from "@/components/global";
import useAuthStore from "@/store/AuthStore";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const { login: loginStore } = useAuthStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
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
    RegisterAction(credentials)
      .then((res) => {
        toast.success(res.message);
        loginStore(res.user);
        router.replace(redirectPath);
      })
      .catch((err) => toast.error("An error occurred"))
      .finally(() => setLoading(false));
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="username"
            value={credentials.username}
            placeholder="Enter username"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="first_name"
            placeholder="Enter firstname"
            value={credentials.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            name="last_name"
            placeholder="Enter lastname"
            value={credentials.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Enter password"
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="flex gap-2 justify-center"
        >
          Register
          {loading && <Spinner />}
        </Button>
      </form>
    </section>
  );
};

export default RegisterForm;
