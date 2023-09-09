import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { auth } from "@/configs/firebase.config";
import { User } from "firebase/auth";

export const AuthContext = React.createContext<User | "initial" | null>(null);

interface AuthProviderProps {
  children?: ReactNode;
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | "initial" | null>(
    "initial"
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("updating", user);
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
