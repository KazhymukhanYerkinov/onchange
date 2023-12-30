'use client';

import React from 'react';
import configureStore from '@/store';

// providers
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { Provider as ReduxProvider } from 'react-redux';

// custom styles
import theme from '@/styles';

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <ReduxProvider store={configureStore()}>
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  </ReduxProvider>
);

export default Providers;
