import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app'

import { FC } from 'react';
import { wrapper } from 'stores';
import createEmotionCache from 'lib/createEmotionCache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { WithGraphQL } from 'lib/api';
import theme from 'styles/theme';
import "styles/global.scss"
import { globalVariables } from 'styles/var';
import Header from 'layout/Header';

import {IBM_Plex_Sans} from 'next/font/google'
import Footer from 'layout/Footer';
import { Provider } from 'react-redux';

const IBMPlex = IBM_Plex_Sans({
  weight: ['400', '500'],
  preload: true
})

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return <div className={IBMPlex.className}>
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={{ ...theme, ...globalVariables }}>
          <CssBaseline />
          <WithGraphQL>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </WithGraphQL>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </div>
}

export default MyApp;
