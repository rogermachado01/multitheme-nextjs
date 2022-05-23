import { createTheme } from "@mui/material";

const defaultTheme = {
  neutralPrimaryColor: "#000",
  lightPrimaryColor: "#000",
  darkPrimaryColor: "#000",
  neutralSecundaryColor: "#000",
  lightSecundaryColor: "#000",
  darkSecundaryColor: "#000",

  fontSizeLarge: "18px",
  fontSizeMedium: "14px",
  fontSizeSmall: "12px",
};
const polarTheme = createTheme({
  neutralPrimaryColor: "#6385DB",
  lightPrimaryColor: "#61DAF2",
  darkPrimaryColor: "#895FF5",
  neutralSecundaryColor: "#6F11DB",
  lightSecundaryColor: "#3F07F2",
  darkSecundaryColor: "#5905F5",

  fontSizeLarge: "18px",
  fontSizeMedium: "14px",
  fontSizeSmall: "12px",
} as any);

const summerTheme = createTheme({
  neutralPrimaryColor: "",
  lightPrimaryColor: "",
  darkPrimaryColor: "",
  neutralSecundaryColor: "",
  lightSecundaryColor: "",
  darkSecundaryColor: "",

  fontSizeLarge: "18px",
  fontSizeMedium: "14px",
  fontSizeSmall: "12px",
} as any);

export { defaultTheme, polarTheme, summerTheme };
