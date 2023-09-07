import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const fontFamily = "Roboto";

const theme = {
  ...DefaultTheme,
  colors: {
    primary: "#DE8C73",
    onPrimary: "#FFFFFF",
    primaryContainer: "#FE8660",
    background: "#FFFFFF",
    header: "#4A4543",
    subText: "#808080",
  },
  fonts: {
    displayLarge: {
      fontFamily: fontFamily,
      fontSize: 61,
    },
    displayMedium: {
      fontFamily: fontFamily,
      fontSize: 49,
    },
    displaySmall: {
      fontFamily: fontFamily,
      fontSize: 39,
    },
    headlineLarge: {
      fontFamily: fontFamily,
      fontSize: 32,
    },
    headlineMedium: {
      fontFamily: fontFamily,
      fontSize: 25,
    },
    headlineSmall: {
      fontFamily: fontFamily,
      fontSize: 20,
    },
    titleLarge: {
      fontFamily: fontFamily,
      fontSize: 16,
    },
    titleMedium: {
      fontFamily: fontFamily,
      fontSize: 13,
    },
    titleSmall: {
      fontFamily: fontFamily,
      fontSize: 10,
    },
  },
};

export default theme;
