import "../styles/globals.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/projects.css";
import "../styles/canvas.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
