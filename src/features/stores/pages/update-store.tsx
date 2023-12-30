'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { useGetStoreQuery, useUpdateStoreMutation } from '../redux/api';
import { type SubmitHandler, useForm } from 'react-hook-form';

// ui
import { ContentWrapper, GoBackForm } from '@/components';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, useToast } from '@chakra-ui/react';

// types
import { type IUpdateStoreForm } from '../redux/types';

interface UpdateStoreProps {
  storeId: string
}

const UpdateStore: React.FC<UpdateStoreProps> = (props) => {
  const { storeId } = props;

  const toast = useToast();
  const router = useRouter();
  const { data, isLoading } = useGetStoreQuery(storeId);

  const [updateStore, { isLoading: isSubmittingLoading }] = useUpdateStoreMutation();
  const { handleSubmit, register, setValue, formState: { errors } } = useForm<IUpdateStoreForm>();

  const onSubmit: SubmitHandler<IUpdateStoreForm> = async (form) => {
    try {
      await updateStore({ id: storeId, data: form });
      toast({ status: 'success', isClosable: true });
      router.push(routes.stores);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  React.useEffect(() => {
    if (data) {
      setValue('name', data.name);
    }
  }, [data, setValue]);

  if (isLoading) return <div />;

  return (
    <>
      <GoBackForm> Update store </GoBackForm>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel htmlFor="name">
                Название
              </FormLabel>
              <Input
                id="name"
                placeholder="Введите название..."
                {...register('name', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.name) && (
              <FormErrorMessage>
                {errors.name?.message}
              </FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <Button
            mt="16px"
            type="submit"
            colorScheme="green"
            isDisabled={isSubmittingLoading}
            isLoading={isSubmittingLoading}
          >
            Обновить
          </Button>
        </form>
      </ContentWrapper>
    </>
  );
};

export default UpdateStore;
