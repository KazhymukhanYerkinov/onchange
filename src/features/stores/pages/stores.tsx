'use client';

import React from 'react';
import { routes } from '@/shared/routes';

// ui
import { Box } from '@chakra-ui/react';
import { TableStore } from '../components';
import { CreateButton } from '@/components';

const Stores: React.FC = () => (
  <Box m="24px">
    <CreateButton href={routes.create_store}> CREATE STORE </CreateButton>
    <TableStore />
  </Box>
);

export default Stores;
