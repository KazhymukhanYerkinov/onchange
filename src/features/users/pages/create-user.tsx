'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useCreateUserMutation } from '../redux/api';

// ui
import { FormControl, FormErrorMessage, FormLabel, Input, useToast, Flex, Button } from '@chakra-ui/react';

// types
import { type ICreateUserBody } from '../redux/types';
import { ContentWrapper, GoBackForm } from '@/components';

const CreateUser: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<ICreateUserBody>();

  const onSubmit: SubmitHandler<ICreateUserBody> = async (form) => {
    try {
      await createUser({ ...form, otp: Number(form.otp) });
      toast({ status: 'success', isClosable: true });
      router.push(routes.users);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  return (
    <>
      <GoBackForm> Create user </GoBackForm>
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="16px">

            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel htmlFor="name">
                Имя
              </FormLabel>
              <Input
                id="name"
                placeholder="Введите имя..."
                {...register('name', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.name) && (
              <FormErrorMessage>
                {errors.name?.message}
              </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.surname)}>
              <FormLabel htmlFor="surname">
                Фамилия
              </FormLabel>
              <Input
                id="surname"
                placeholder="Введите фамилия..."
                {...register('surname', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.surname) && (
              <FormErrorMessage>
                {errors.surname?.message}
              </FormErrorMessage>
              )}
            </FormControl>
          </Flex>

          <Flex my="16px" gap="16px">
            <FormControl isInvalid={Boolean(errors.patronymic)}>
              <FormLabel htmlFor="patronymic">
                Отчество
              </FormLabel>
              <Input
                id="patronymic"
                placeholder="Введите отчество..."
                {...register('patronymic', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.patronymic) && (
              <FormErrorMessage>
                {errors.patronymic?.message}
              </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={Boolean(errors.phone)}>
              <FormLabel htmlFor="phone">
                Телефон
              </FormLabel>
              <Input
                id="phone"
                placeholder="Введите телефон..."
                {...register('phone', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.phone) && (
              <FormErrorMessage>
                {errors.phone?.message}
              </FormErrorMessage>
              )}
            </FormControl>
          </Flex>

          <Flex width="calc(50% - 8px)">
            <FormControl isInvalid={Boolean(errors.otp)}>
              <FormLabel htmlFor="otp">
                OTP
              </FormLabel>
              <Input
                id="otp"
                type="number"
                placeholder="Введите OTP..."
                {...register('otp', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.otp) && (
              <FormErrorMessage>
                {errors.otp?.message}
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

export default CreateUser;
