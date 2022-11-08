import '../styles/globals.css';
import { store } from '../store/store';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
