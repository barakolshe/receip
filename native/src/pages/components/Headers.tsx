import { FunctionComponent } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

interface HeadersProps {}

const Headers: FunctionComponent<HeadersProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        flexGrow: 0,
        backgroundColor: "red",
        justifyContent: "flex-end",
      }}
    >
      <Text variant="headlineLarge" style={{ textAlign: "center" }}>
        Welcome
      </Text>
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        Log in or sign up please
      </Text>
    </View>
  );
};

export default Headers;
