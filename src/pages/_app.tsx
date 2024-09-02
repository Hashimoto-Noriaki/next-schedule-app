import "../styles/destyle.css";
import "../styles/index.css";
import "../styles/output.css";
import NotLoginLayout from "../components/templates/NotLoginLayout";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotLoginLayout>
      <Component {...pageProps} />
    </NotLoginLayout>
  );
}

export default MyApp;
