
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;