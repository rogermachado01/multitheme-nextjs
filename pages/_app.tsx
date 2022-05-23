import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "../styles/theme";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
