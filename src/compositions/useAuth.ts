import ROUTE from "@/constants/route";
import { fireAuth } from "@/lib/firebase";
import { useRouter } from "vue-router";

const useAuth = () => {
  const { currentUser } = fireAuth;
  const router = useRouter();

  if (!currentUser) {
    router.push({ path: ROUTE.LOGIN });
  }

  return { auth: currentUser };
};

export default useAuth;
