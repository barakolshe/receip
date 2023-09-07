import { FunctionComponent } from "react";
import { View } from "react-native";
import Input from "../../components/common/Input";

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "blue",
        justifyContent: "flex-end",
        flexGrow: 0,
      }}
    >
      <Input variant="primary" placeholder="dsadsa"></Input>
      <Input variant="primary" placeholder="vcvxcv"></Input>
    </View>
  );
};

export default LoginForm;
