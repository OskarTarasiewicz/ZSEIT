import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/navbar';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp