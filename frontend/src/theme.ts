import { SimplePaletteColorOptions, createTheme } from "@mui/material";

//Custom colors
interface CustomPalette {
  input: SimplePaletteColorOptions;
  google: SimplePaletteColorOptions;
  link: SimplePaletteColorOptions;
  logoBackground: SimplePaletteColorOptions;
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides
    extends Record<keyof CustomPalette, true> {}
}

const defaultColors = {
  primary: {
    main: "#FE8660",
  },
  text: {
    primary: "#4A4543",
    secondary: "#808080",
  },
  // default error colors
  error: {
    light: "ef5350",
    main: "#d32f2f",
    dark: "#c62828",
  },
  input: {
    main: "placeholder",
  },
  google: {
    main: "placeholder",
  },
  link: {
    main: "placeholder",
  },
  logoBackground: {
    main: "placeholder",
  },
};

let customColors = {
  logoBackground: {
    main: "#F8F2F0",
  },
  link: {
    main: "#DE8C73",
  },
  input: {
    main: "#2D2D2D",
  },
  google: {
    main: "#FFFFFF",
  },
};

const typography = {
  fontFamily: ["Roboto", "Halvetica", "Arial", "sans-serif"].join(","),
  fontWeightRegular: "400",
  h1: {
    fontSize: "3.812rem",
    fontWeight: "400",
  },
  h2: {
    fontSize: "3.062rem",
    fontWeight: "400",
  },
  h3: {
    fontSize: "2.625rem",
    fontWeight: "400",
  },
  h4: {
    fontSize: "2rem",
    fontWeight: "400",
  },
  h5: {
    fontSize: "1.562rem",
    fontWeight: "400",
  },
  h6: {
    fontSize: "1.250rem",
    fontWeight: "400",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "400",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "400",
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: "400",
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: "400",
  },
};

let theme = createTheme({
  typography: typography,
  palette: defaultColors,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#root": {
          margin: "0 auto",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
      // For making the input label invisible line disappear
      styleOverrides: {
        root: {
          legend: {
            span: {
              display: "none",
            },
          },
          input: {
            color: customColors.input.main,
          },
          ".MuiInputBase-root.Mui-focused > fieldset": {
            borderColor: defaultColors.text.primary,
          },
          ".MuiInputBase-root.Mui-focused.Mui-error > fieldset": {
            borderColor: defaultColors.error.main,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "unset",
          transform: "unset",
          marginBottom: "2px",
          textAlign: "left",
          color: defaultColors.text.primary,
          fontWeight: 500,
          fontSize: typography.body2.fontSize,
          "&.Mui-focused": {
            color: defaultColors.text.primary,
          },
          "&.Mui-focused.Mui-error": {
            color: "error",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  palette: {
    logoBackground: theme.palette.augmentColor({
      color: {
        main: customColors.logoBackground.main,
      },
      name: "logoBackground",
    }),
    link: theme.palette.augmentColor({
      color: {
        main: customColors.link.main,
      },
      name: "link",
    }),
    input: theme.palette.augmentColor({
      color: {
        main: customColors.input.main,
      },
      name: "input",
    }),
    google: theme.palette.augmentColor({
      color: {
        main: customColors.google.main,
      },
      name: "google",
    }),
  },
});

export default theme;
