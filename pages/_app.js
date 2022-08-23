import "../src/styles/globals.css";
import "../src/styles/theme.css";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import clsx from "clsx";

const AppWithTheme = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <div
      id="app"
      className={clsx({
        ["dark"]: isDark,
      })}
    >
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AppWithTheme>
        <div className="h-full max-w-7xl px-4 m-auto">
          <Component {...pageProps} />
        </div>
      </AppWithTheme>
    </ThemeProvider>
  );
}

export default MyApp;
