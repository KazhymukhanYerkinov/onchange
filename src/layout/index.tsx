'use client';

import React from 'react';

// ui
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Box } from '@chakra-ui/react';

// constants
import { SIDEBAR_WIDTH } from './constants';

interface LayoutProps {
  children: React.ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box bg="#EEF5F5" minH="100vh">
    <Header />
    <Sidebar />
    <Box ml={SIDEBAR_WIDTH} mt="12px" mr="12px">
      <Box>
        { children }
      </Box>
    </Box>
  </Box>
);
