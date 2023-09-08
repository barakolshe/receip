import { createTheme } from "@mui/material";

// Custom colors
// interface CustomPalette {
//   input: PaletteColorOptions;
//   google: PaletteColorOptions;
//   link: PaletteColorOptions;
//   background: PaletteColorOptions;
// }

// declare module "@mui/material/styles" {
//   interface Palette extends CustomPalette {}
//   interface PaletteOptions extends CustomPalette {}
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides
//     extends Record<keyof CustomPalette, true> {}
// }

const defaultColors = {
  primary: {
    main: "#FE8660",
  },

  text: {
    primary: "#4A4543",
    secondary: "#808080",
  },
};

let customColors = {
  background: {
    main: "#F8F2F0",
  },
  link: {
    main: "#F8F2F0",
  },
  input: {
    main: "#F8F2F0",
  },
  google: {
    main: "#F8F2F0",
  },
};

const typography = {
  fontFamily: ["Roboto", "Halvetica", "Arial", "sans-serif"].join(","),
  h1: {
    fontSize: "3.812rem",
  },
  h2: {
    fontSize: "3.062rem",
  },
  h3: {
    fontSize: "2.625rem",
  },
  h4: {
    fontSize: "1.938rem",
  },
  h5: {
    fontSize: "1.562rem",
  },
  h6: {
    fontSize: "1.250rem",
  },
  body1: {
    fontSize: "1rem",
  },
  body2: {
    fontSize: "0.875rem",
  },
  subtitle1: {
    fontSize: "1rem",
  },
  subtitle2: {
    fontSize: "0.875rem",
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
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "unset",
          transform: "unset",
          textAlign: "left",
          color: defaultColors.text.primary,
          fontWeight: 500,
          fontSize: typography.body2.fontSize,
          "&.Mui-focused": {
            color: defaultColors.text.primary,
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  palette: {
    background: theme.palette.augmentColor({
      color: {
        main: customColors.background.main,
      },
      name: "background",
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
