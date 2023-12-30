'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { useCreateBarcodeMutation } from '../redux/api';
import { type SubmitHandler, useForm } from 'react-hook-form';

// ui
import { ContentWrapper, GoBackForm } from '@/components';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, useToast } from '@chakra-ui/react';

// types
import { type ICreateBarcodeBody } from '../redux/types';

const CreateBarcode: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [createBarcode, { isLoading }] = useCreateBarcodeMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateBarcodeBody>();

  const onSubmit: SubmitHandler<ICreateBarcodeBody> = async (form) => {
    try {
      await createBarcode(form);
      toast({ status: 'success', isClosable: true });
      router.push(routes.barcodes);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  return (
    <>
      <GoBackForm> Create barcode </GoBackForm>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="16px">

            <FormControl isInvalid={Boolean(errors.code)}>
              <FormLabel color="gray.600" htmlFor="code">
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
              <FormLabel color="gray.600" htmlFor="description">
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
            isDisabled={isLoading}
            isLoading={isLoading}
            colorScheme="green"
          >
            Создать
          </Button>

        </form>
      </ContentWrapper>
    </>
  );
};

export default CreateBarcode;
