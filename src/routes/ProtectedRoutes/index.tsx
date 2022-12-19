import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const { userData, products, globalLoading, stateLoading } = useContext(UserContext);

  if (globalLoading || stateLoading) {
    return null;
  }

  return (userData || products) ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
