'use client';

import React from 'react';
import { routes } from '@/shared/routes';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useGetStoresQuery } from '@/features/stores/redux/api';
import { useGetCashboxQuery, useUpdateCashboxMutation } from '../redux/api';

// ui
import { ContentWrapper, GoBackForm } from '@/components';
import { Flex, FormControl, FormLabel, Input, FormErrorMessage, Button, Select, useToast } from '@chakra-ui/react';

// types
import { type ICreateCashboxForm } from '../redux/types';

interface UpdateCashboxProps {
  cashboxId: string
}
const UpdateCashbox: React.FC<UpdateCashboxProps> = (props) => {
  const { cashboxId } = props;

  const toast = useToast();
  const router = useRouter();
  const { data } = useGetStoresQuery({});
  const { data: cashbox, isLoading } = useGetCashboxQuery(cashboxId);
  const [updateCashbox, { isLoading: isSubmittingLoading }] = useUpdateCashboxMutation();

  const { register, formState: { errors }, handleSubmit, setValue } = useForm<ICreateCashboxForm>();

  const onSubmit: SubmitHandler<ICreateCashboxForm> = async (form) => {
    try {
      const store = data?.find((item) => item.id === Number(form.store.id));
      if (store) {
        await updateCashbox({ id: cashboxId, data: { ...form, store } });
        toast({ status: 'success', isClosable: true });
        router.push(routes.cashboxes);
      }
    } catch (e) {
      toast({ status: 'error', isClosable: true });
    }
  };

  React.useEffect(() => {
    if (cashbox && data) {
      setValue('name', cashbox.name);
      setValue('currency', cashbox.currency);
      setValue('store.id', cashbox.store.id);
    }
  }, [cashbox, setValue, data]);

  if (isLoading) return <div />;

  return (
    <>
      <GoBackForm> Update cashbox </GoBackForm>
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

            <FormControl isInvalid={Boolean(errors.currency)}>
              <FormLabel htmlFor="currency">
                Валюта
              </FormLabel>
              <Input
                id="currency"
                placeholder="Введите валюты..."
                {...register('currency', { required: { value: true, message: 'Пожалуйста, заполните это поле' } })}
              />
              {Boolean(errors.currency) && (
              <FormErrorMessage>
                {errors.currency?.message}
              </FormErrorMessage>
              )}
            </FormControl>

          </Flex>

          <Flex my="18px" width="calc(50% - 8px)">
            <FormControl isInvalid={Boolean(errors.store)}>
              <FormLabel htmlFor="store">
                Магазин
              </FormLabel>
              <Select
                id="store"
                {...register('store.id', { required: { value: true, message: 'Пожалуйста, выберите это поле' } })}
              >
                <option value="" />
                {data?.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.name}
                  </option>
                ))}
              </Select>
              {Boolean(errors.store) && (
              <FormErrorMessage>
                {errors.store?.id?.message}
              </FormErrorMessage>
              )}
            </FormControl>
          </Flex>

          <Button
            type="submit"
            colorScheme="green"
            isLoading={isSubmittingLoading}
            isDisabled={isSubmittingLoading}
          >
            Обновить
          </Button>

        </form>
      </ContentWrapper>
    </>
  );
};
export default UpdateCashbox;
