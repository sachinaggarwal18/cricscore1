import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  // If authenticated, render the children; otherwise, redirect to login
  return isAuthenticated ? children : <Navigate to="/user/login" replace />;
};

export default PrivateRoutes;
