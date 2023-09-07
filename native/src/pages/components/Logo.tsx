import { FunctionComponent } from "react";
import { Image } from "react-native";

interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Image
      source={require("../../assets/logo.png")}
      style={{
        marginTop: 50,
        justifyContent: "center",
        alignSelf: "center",
      }}
      height={40}
      width={40}
    />
  );
};

export default Logo;
