"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Register } from "@/services/auth";
import { Input, Button, Spinner } from "@/components/global";
import useAuthStore from "@/store/AuthStore";

const RegisterForm: React.FC = () => {
  const router = useRouter();
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
    Register(credentials)
      .then((res) => {
        toast.success(res.message);
        loginStore(res.user, res.access_token);
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
