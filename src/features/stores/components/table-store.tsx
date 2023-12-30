import React from 'react';
import { routes } from '@/shared/routes';
import { useRemoveStoreMutation, useGetStoresQuery } from '../redux/api';

// ui
import { Tr, Th, Tbody, useToast } from '@chakra-ui/react';
import { TableControlButton, TableHeader, TableWrapper } from '@/components';

const storeTHead = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Address' },
  { id: 4, name: '' }
];

export const TableStore: React.FC = () => {
  const toast = useToast();
  const { data, isLoading } = useGetStoresQuery({});
  const [removeStore, { isLoading: isSubmitting }] = useRemoveStoreMutation();

  const onRemove = React.useCallback(async (storeId: number) => {
    await removeStore(storeId).unwrap()
      .then(() => {
        toast({ status: 'success', isClosable: true });
      }).catch(() => {
        toast({ status: 'error', isClosable: true });
      });
  }, [removeStore, toast]);

  return (
    <TableWrapper>
      <TableHeader isLoading={isLoading} items={storeTHead} />

      <Tbody>
        {data?.map((store) => (
          <Tr key={store.id} cursor="pointer">
            <Th>
              {store.id}
            </Th>
            <Th>
              {store.name}
            </Th>
            <Th>
              {store.address}
            </Th>
            <Th>
              <TableControlButton
                id={store.id}
                onRemove={onRemove}
                isLoading={isSubmitting}
                updateHref={`${routes.update_store}/${store.id}`}
              />
            </Th>

          </Tr>
        ))}
      </Tbody>
    </TableWrapper>
  );
};
