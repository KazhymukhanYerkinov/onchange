import React from 'react';

// ui
import { ContentWrapper } from './content-wrapper';
import { Table, TableContainer } from '@chakra-ui/react';

interface TableWrapperProps {
  children: React.ReactNode
}

export const TableWrapper: React.FC<TableWrapperProps> = ({ children }) => (
  <ContentWrapper>
    <TableContainer>
      <Table size="md">
        {children}
      </Table>
    </TableContainer>
  </ContentWrapper>
);
