import "../src/styles/globals.css";
import "../src/styles/theme.css";

const MyApp = ({ Component, pageProps }) => (
  <div id="app" className="dark" /* Dark Mode - Exercise */>
    <div className="h-full max-w-7xl px-4 m-auto">
      <Component {...pageProps} />
    </div>
  </div>
);

export default MyApp;
