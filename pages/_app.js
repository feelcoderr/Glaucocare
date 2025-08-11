import "../styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Add any global analytics or tracking here
    console.log("GlauCare Landing Page Loaded");
  }, []);

  return <Component {...pageProps} />;
}
