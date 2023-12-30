import React from 'react';
import { routes } from '@/shared/routes';
import { useRemoveBarcodeMutation, useGetBarcodesQuery } from '../redux/api';

// ui
import { Tbody, Th, Tr, useToast } from '@chakra-ui/react';
import { TableControlButton, TableHeader, TableWrapper } from '@/components';

const barcodeTHead = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Code' },
  { id: 3, name: 'Description' },
  { id: 4, name: '' }
];

export const TableBarcode: React.FC = () => {
  const toast = useToast();
  const { data, isLoading } = useGetBarcodesQuery({ });
  const [removeBarcode, { isLoading: isSubmitting }] = useRemoveBarcodeMutation();

  const onRemove = React.useCallback(async (barcodeId: number) => {
    await removeBarcode(barcodeId).unwrap()
      .then(() => {
        toast({ status: 'success', isClosable: true });
      }).catch(() => {
        toast({ status: 'error', isClosable: true });
      });
  }, [removeBarcode, toast]);

  return (
    <TableWrapper>

      <TableHeader isLoading={isLoading} items={barcodeTHead} />

      <Tbody>
        {data?.map((barcode) => (
          <Tr key={barcode.id} cursor="pointer">
            <Th>
              {barcode.id}
            </Th>
            <Th>
              {barcode.code}
            </Th>
            <Th>
              {barcode.description}
            </Th>
            <Th>
              <TableControlButton
                id={barcode.id}
                onRemove={onRemove}
                isLoading={isSubmitting}
                updateHref={`${routes.update_barcode}/${barcode.id}`}
              />
            </Th>
          </Tr>
        ))}
      </Tbody>

    </TableWrapper>
  );
};
