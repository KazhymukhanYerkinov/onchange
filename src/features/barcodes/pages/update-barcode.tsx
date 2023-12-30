'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useGetBarcodeQuery, useUpdateBarcodeMutation } from '../redux/api';

// ui
import { ContentWrapper, GoBackForm } from '@/components';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, useToast } from '@chakra-ui/react';

// types
import { type IUpdateBarcodeForm } from '../redux/types';

interface UpdateBarcodeProps {
  barcodeId: string
}
const UpdateBarcode: React.FC<UpdateBarcodeProps> = (props) => {
  const { barcodeId } = props;

  const toast = useToast();
  const router = useRouter();
  const { data, isLoading } = useGetBarcodeQuery(barcodeId);
  const [updateBarcode, { isLoading: isSubittingLoading }] = useUpdateBarcodeMutation();
  const { handleSubmit, register, setValue, formState: { errors } } = useForm<IUpdateBarcodeForm>();

  const onSubmit: SubmitHandler<IUpdateBarcodeForm> = async (form) => {
    try {
      await updateBarcode({ id: barcodeId, data: { ...form, id: Number(barcodeId) } });
      toast({ status: 'success', isClosable: true });
      router.push(routes.barcodes);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  React.useEffect(() => {
    if (data) {
      setValue('code', data.code);
      setValue('description', data.description);
    }
  }, [data, setValue]);

  if (isLoading) return <div />;

  return (
    <>
      <GoBackForm> Update barcode </GoBackForm>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="16px">

            <FormControl isInvalid={Boolean(errors.code)}>
              <FormLabel htmlFor="code">
                Код
              </FormLabel>
              <Input
                id="code"
                placeholder="Введите код..."
                {...register('code', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.code) && (
              <FormErrorMessage>
                {errors.code?.message}
              </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.description)}>
              <FormLabel htmlFor="description">
                Описание
              </FormLabel>
              <Input
                id="description"
                placeholder="Введите описание..."
                {...register('description', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.description) && (
              <FormErrorMessage>
                {errors.description?.message}
              </FormErrorMessage>
              )}
            </FormControl>

          </Flex>

          <Button
            mt="16px"
            type="submit"
            colorScheme="green"
            isDisabled={isSubittingLoading}
            isLoading={isSubittingLoading}
          >
            Обновить
          </Button>
        </form>
      </ContentWrapper>
    </>
  );
};

export default UpdateBarcode;
