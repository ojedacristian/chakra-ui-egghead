import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Component } from 'react';
import theme from './theme';
import './theme/styles.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={ theme }>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App