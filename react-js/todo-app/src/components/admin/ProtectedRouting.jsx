import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouting() {
  let isLogin = true;
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRouting;
