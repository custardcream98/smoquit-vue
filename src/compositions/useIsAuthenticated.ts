import { useAuth } from "@/stores/auth";

const useIsAuthenticated = () => {
  const { user } = useAuth();

  if (user) {
    return { isAuthenticated: true }
  }

  return { isAuthenticated: false };
};

export default useIsAuthenticated;
