import { AppProps } from "next/app";
import "../styles/index.css";
import "../styles/ant_theme.less";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component pageProps={pageProps} />;
}

export default MyApp;
