import "../../public/fonts/Gotham_Narrow_Book.otf";
import "../styles/styles.global.scss"; // Global styles

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Layout } from "src/layout";
import theme from "../theme";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      ,
    </ChakraProvider>
  );
}

export default MyApp;
