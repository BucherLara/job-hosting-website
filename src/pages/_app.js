import Header from "../../components/Header";
import GlobalStyle from "@/styles/globalStyle";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
