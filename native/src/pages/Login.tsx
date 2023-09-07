import { FunctionComponent } from "react";
import { View } from "react-native";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import Headers from "./components/Headers";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <Headers />
      <LoginForm />
    </View>
  );
};

export default Login;
