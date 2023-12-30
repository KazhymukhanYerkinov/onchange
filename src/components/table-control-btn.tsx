import React from 'react';

// ui
import NextLink from 'next/link';
import { Flex, IconButton, Link } from '@chakra-ui/react';

// assets
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';

interface TableControlButtonProps {
  id: number
  updateHref: string
  isLoading: boolean
  onRemove: (id: number) => Promise<void>
}
export const TableControlButton: React.FC<TableControlButtonProps> = (props) => {
  const { id, updateHref, isLoading, onRemove } = props;

  return (
    <Flex align="center" justify="center" gap="8px">
      <IconButton
        size="sm"
        colorScheme="red"
        aria-label="Delete item"
        isLoading={isLoading}
        isDisabled={isLoading}
        icon={<DeleteOutlined />}
        onClick={async () => { await onRemove(id); }}
      />
      <Link as={NextLink} href={updateHref}>
        <IconButton
          size="sm"
          color="white"
          colorScheme="yellow"
          aria-label="Update item"
          isLoading={isLoading}
          isDisabled={isLoading}
          icon={<EditOutlined />}
        />
      </Link>
    </Flex>
  );
};
