import { ClerkProvider } from "@clerk/clerk-react";
import { FunctionComponent, ReactNode } from "react";

const VITE_CLERK_PUBLISHABLE_KEY: string = import.meta.env
  .VITE_CLERK_PUBLISHABLE_KEY;

if (!VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = VITE_CLERK_PUBLISHABLE_KEY;
interface ProvidersProps {
  children?: ReactNode;
}

const AuthProvider: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={clerkPubKey} appearance={{}}>
      {children}
    </ClerkProvider>
  );
};

export default AuthProvider;
