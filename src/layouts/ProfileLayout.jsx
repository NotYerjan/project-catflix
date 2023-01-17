import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store/storeUsers";

export default function ProfileLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Outlet />;
}
