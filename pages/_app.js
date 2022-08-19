import "../src/styles/globals.css";
import "../src/styles/theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="dark">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
