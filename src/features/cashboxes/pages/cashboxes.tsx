'use client';

import React from 'react';
import { routes } from '@/shared/routes';

// ui
import { Box } from '@chakra-ui/react';
import { TableCashbox } from '../components';
import { CreateButton } from '@/components';

const Cashboxes: React.FC = () => (
  <Box m="24px">
    <CreateButton href={routes.create_cashbox}> CREATE CUSHBOX </CreateButton>
    <TableCashbox />
  </Box>
);

export default Cashboxes;
