import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LoginLayout from "./src/layouts/LoginLayout";
import Login from "./src/pages/Login";
import Providers from "./src/Providers";

export default function App() {
  return (
    <Providers>
      <View
        style={{
          marginTop: 40,
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginLayout>
          <Login />
        </LoginLayout>
      </View>
    </Providers>
  );
}
