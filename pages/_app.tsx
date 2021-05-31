import Head from "../components/Head";
import { ColorProvider } from "../hooks/ColorContext";
import "../styles/fonts.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ColorProvider>
      <Head />
      <Component {...pageProps} />
    </ColorProvider>
  );
}
export default MyApp;
