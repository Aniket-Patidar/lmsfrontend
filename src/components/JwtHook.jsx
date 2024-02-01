import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router"; // Assuming you're using Next.js
import { getUserJwt } from "@/redux/action/userAction";

function useUserAuthentication() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserJwt());
    if (!user) {
      router.push("/");

    }
  }, [user]);

  return {};
}

export default useUserAuthentication;
