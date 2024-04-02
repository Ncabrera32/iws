// pages/_app.js
import '../styles/globals.css'; // Adjust the path based on where your globals.css file is located

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;