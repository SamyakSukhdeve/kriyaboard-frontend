import { Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";

const Protected = ({ children }) => {
  const { user } = useAuthStore();
  return user ? children : <Navigate to="/signup" />;
};

export default Protected;
