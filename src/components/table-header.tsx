import React from 'react';
import { Progress, Th, Thead, Tr } from '@chakra-ui/react';

interface IHead {
  id: number
  name: string
}

interface TableHeaderProps {
  items: IHead[]
  isLoading: boolean
}

export const TableHeader: React.FC<TableHeaderProps> = (props) => {
  const { items, isLoading } = props;

  return (
    <Thead>
      <Tr>
        {items.map((item) => (
          <Th key={item.id}>
            {item.name}
          </Th>
        ))}
      </Tr>
      {isLoading && (
        <Tr>
          <Th colSpan={items.length} p="0">
            <Progress h="2px" colorScheme="green" isIndeterminate />
          </Th>
        </Tr>
      )}
    </Thead>
  );
};
