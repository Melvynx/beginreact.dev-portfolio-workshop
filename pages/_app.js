import "../src/styles/globals.css";
import "../src/styles/theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="dark">
      <div className="h-full max-w-7xl py-4 m-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
