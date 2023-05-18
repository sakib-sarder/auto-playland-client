import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // Sign In With Google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // AuthInfo
  const authInfo = {
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
