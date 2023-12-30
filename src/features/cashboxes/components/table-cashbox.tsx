import React from 'react';
import { routes } from '@/shared/routes';
import { useRemoveCashboxMutation, useGetCashboxesQuery } from '../redux/api';

// ui
import { Tbody, Th, Tr, useToast } from '@chakra-ui/react';
import { TableControlButton, TableHeader, TableWrapper } from '@/components';

const cashboxTHead = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Currency' },
  { id: 4, name: 'Store' },
  { id: 5, name: '' }
];

export const TableCashbox: React.FC = () => {
  const toast = useToast();
  const { data, isLoading } = useGetCashboxesQuery({ });
  const [removeCashbox, { isLoading: isSubmitting }] = useRemoveCashboxMutation();

  const onRemove = React.useCallback(async (cashboxId: number) => {
    await removeCashbox(cashboxId).unwrap()
      .then(() => {
        toast({ status: 'success', isClosable: true });
      }).catch(() => {
        toast({ status: 'error', isClosable: true });
      });
  }, [removeCashbox, toast]);

  return (
    <TableWrapper>

      <TableHeader isLoading={isLoading} items={cashboxTHead} />

      <Tbody>
        {data?.map((cashbox) => (
          <Tr key={cashbox.id}>
            <Th>
              {cashbox.id}
            </Th>
            <Th>
              {cashbox.name}
            </Th>
            <Th>
              {cashbox.currency}
            </Th>
            <Th>
              {cashbox.store.name}
            </Th>
            <Th>
              <TableControlButton
                id={cashbox.id}
                onRemove={onRemove}
                isLoading={isSubmitting}
                updateHref={`${routes.update_cashbox}/${cashbox.id}`}
              />
            </Th>
          </Tr>
        ))}
      </Tbody>

    </TableWrapper>
  );
};
