'use client';

import React from 'react';

// ui
import { Box } from '@chakra-ui/react';
import { TableBarcode } from '../components';
import { CreateButton } from '@/components';

const Barcodes: React.FC = () => (
  <Box m="24px">
    <CreateButton href="/barcodes/create"> CREATE BARCODE </CreateButton>
    <TableBarcode />
  </Box>
);

export default Barcodes;
