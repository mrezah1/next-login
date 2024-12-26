import { useEffect, useState } from "react";

import { checkUser } from "@/services/auth";
import useAuthStore from "@/store/AuthStore";

const useCheckAuth = () => {
  const { setUser, setToken, login, clearAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth-storage") || "{}");
    const checkAuth = async () => {
      if (!data?.state?.token) {
        clearAuth();
        setLoading(false);
        return;
      }

      checkUser()
        .then(({ data }) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Authentication failed:", error);
          clearAuth();
        })
        .finally(() => {
          setLoading(false);
        });
    };

    checkAuth();
  }, []);
  return { loading };
};

export default useCheckAuth;
