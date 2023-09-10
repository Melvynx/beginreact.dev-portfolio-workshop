import { useContext } from 'react';
import { ThemeProvider, DarkModeContexte } from "../src/context/ThemeProvider";
import "../src/styles/globals.css";
import "../src/styles/theme.css";

const MyApp = ({ Component, pageProps }) => {
  const { mode } = useContext(DarkModeContexte);

  return (
    <div id="app" className={mode}>
      <div className="px-4 m-auto max-w-7xl h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MyApp Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default App;
