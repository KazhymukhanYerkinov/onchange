import React from 'react';
import { routes } from '@/shared/routes';
import { useRemoveUserMutation, useGetUsersQuery } from '../redux/api';

// ui
import { Tr, Th, Tbody, useToast } from '@chakra-ui/react';
import { TableControlButton, TableHeader, TableWrapper } from '@/components';

const userTHead = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Name' },
  { id: 3, name: 'Surname' },
  { id: 4, name: 'Phone' },
  { id: 5, name: '' }
];

export const TableUser: React.FC = () => {
  const toast = useToast();
  const { data, isLoading } = useGetUsersQuery({});
  const [removeUser, { isLoading: isSubmitting }] = useRemoveUserMutation();

  const onRemove = React.useCallback(async (userId: number) => {
    await removeUser(userId).unwrap()
      .then(() => {
        toast({ status: 'success', isClosable: true });
      }).catch(() => {
        toast({ status: 'error', isClosable: true });
      });
  }, [removeUser, toast]);

  return (
    <TableWrapper>

      <TableHeader items={userTHead} isLoading={isLoading} />

      <Tbody>
        {data?.map((user) => (
          <Tr key={user.id} cursor="pointer">
            <Th>
              {user.id}
            </Th>
            <Th>
              {user.name}
            </Th>
            <Th>
              {user.surname}
            </Th>
            <Th>
              {user.phone}
            </Th>
            <Th>
              <TableControlButton
                id={user.id}
                onRemove={onRemove}
                isLoading={isSubmitting}
                updateHref={`${routes.update_user}/${user.id}`}
              />
            </Th>
          </Tr>
        ))}
      </Tbody>

    </TableWrapper>
  );
};
