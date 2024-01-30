import { ThemeProvider } from "next-themes";
import StoreProvider from "./StoreProvider";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StoreProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </StoreProvider>

    </ThemeProvider >
  );
}

export default MyApp;