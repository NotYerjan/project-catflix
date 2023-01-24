import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../store/storeUsers";

export default function ProfileLayout() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const currentUser = useUserStore((state) => state.currentUser);
  const location = useLocation();

  if (!isLoggedIn && location.pathname === "/profile") {
    return <Navigate to="/login" replace={true} />;
  }
  if (location.pathname === "/profile") {
    return <Navigate to={`/profile/${currentUser.id}`} replace={true} />;
  }
  return <Outlet />;
}
