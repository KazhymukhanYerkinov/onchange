'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useGetUserQuery, useUpdateUserMutation } from '../redux/api';

// ui
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, useToast } from '@chakra-ui/react';

// types
import { type IUpdateUserForm } from '../redux/types';
import { ContentWrapper, GoBackForm } from '@/components';

interface UpdateUserProps {
  userId: string
}

const UpdateUser: React.FC<UpdateUserProps> = (props) => {
  const { userId } = props;

  const toast = useToast();
  const router = useRouter();

  const { data, isLoading } = useGetUserQuery(userId);
  const [updateUser, { isLoading: isSubmittingLoading }] = useUpdateUserMutation();
  const { handleSubmit, register, setValue, formState: { errors } } = useForm<IUpdateUserForm>();

  const onSubmit: SubmitHandler<IUpdateUserForm> = async (form) => {
    try {
      await updateUser({ id: userId, data: form });
      toast({ status: 'success', isClosable: true });
      router.push(routes.users);
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  React.useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('surname', data.surname);
      setValue('patronymic', data.patronymic);
      setValue('phone', data.phone);
      setValue('otp', data.otp);
    }
  }, [data, setValue]);

  if (isLoading) return <div />;

  return (
    <>
      <GoBackForm> Update user </GoBackForm>
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

export default UpdateUser;
