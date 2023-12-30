'use client';

import React from 'react';

// ui
import { Box } from '@chakra-ui/react';
import { TableUser } from '../components';
import { CreateButton } from '@/components';

const Users: React.FC = () => (
  <Box m="24px">
    <CreateButton href="/users/create"> CREATE USER </CreateButton>
    <TableUser />
  </Box>
);

export default Users;
