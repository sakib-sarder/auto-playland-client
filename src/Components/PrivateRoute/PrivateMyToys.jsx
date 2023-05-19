import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateMyToys = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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

  return <Navigate to="/login" />;
};

export default PrivateMyToys;
