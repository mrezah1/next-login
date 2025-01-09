import { useEffect, useState } from "react";
import useAuthStore from "@/store/AuthStore";
import { checkUserAction, logoutAction } from "@/services/auth/actions";

const useCheckAuth = () => {
  const { login, clearAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth-storage") || "{}");
    const checkAuth = async () => {
      if (!data?.state?.isAuthenticated) {
        logoutAction();
        clearAuth();
        setLoading(false);
        return;
      }

      checkUserAction()
        .then(({ data }) => {
          login(data);
        })
        .catch((error) => {
          // console.error("Authentication failed:", error);
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
