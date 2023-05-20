import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] ">
        <progress className="progress w-56 progress-info"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivateRoute;
