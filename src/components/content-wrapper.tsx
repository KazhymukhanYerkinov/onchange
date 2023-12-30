import React from 'react';

// ui
import { Box, type BoxProps } from '@chakra-ui/react';

interface ContentWrapperProps extends BoxProps {
  children: React.ReactNode
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <Box bg="white" p="32px" borderRadius="8px" boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)">
    {children}
  </Box>
);
