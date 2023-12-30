'use client';

import React from 'react';
import { Progress } from '@chakra-ui/react';

export const Loading: React.FC = () => (
  <Progress
    position="fixed"
    top={0}
    left={0}
    w="100%"
    h="5px"
    colorScheme="green"
    isIndeterminate
  />
);
