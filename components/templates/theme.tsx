import { createTheme } from "@mui/material";

const coffe = (theme: any) =>
  createTheme({
    ...theme,
    button: {
      primay: {
        backgroundColor: "#007789",
        borderColor: "#225511",
      },
      backgroundColor: "#eee",
      borderColor: "#228855",
    },
    headerContainer: {
      backgroundColor: theme.darkSecundaryColor,
    },
  } as any);

const headerTheme = (theme: any, mode: string) => {
  switch (mode) {
    case "coffe":
      return coffe(theme);
    default:
      return theme;
  }
};

export { headerTheme };
