'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { useCreateStoreMutation } from '../redux/api';
import { type SubmitHandler, useForm } from 'react-hook-form';

// ui
import { ContentWrapper, GoBackForm } from '@/components';
import { FormControl, FormLabel, Input, Flex, Button, useToast, FormErrorMessage } from '@chakra-ui/react';

// types
import { type ICreateStoreBody } from '../redux/types';

const CreateStore: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [createStore, { isLoading }] = useCreateStoreMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateStoreBody>();

  const onSubmit: SubmitHandler<ICreateStoreBody> = async (form) => {
    try {
      await createStore(form);
      toast({ status: 'success', isClosable: true });
      router.push(routes.stores);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  return (
    <>
      <GoBackForm> Create store </GoBackForm>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="16px">

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

            <FormControl isInvalid={Boolean(errors.address)}>
              <FormLabel htmlFor="address">
                Адрес
              </FormLabel>
              <Input
                id="address"
                placeholder="Введите адрес..."
                {...register('address', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.address) && (
              <FormErrorMessage>
                {errors.address?.message}
              </FormErrorMessage>
              )}
            </FormControl>

          </Flex>

          <Button
            mt="16px"
            type="submit"
            colorScheme="green"
            isDisabled={isLoading}
            isLoading={isLoading}
          >
            Создать
          </Button>

        </form>
      </ContentWrapper>
    </>
  );
};

export default CreateStore;
