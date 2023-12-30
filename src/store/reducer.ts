import { combineReducers } from '@reduxjs/toolkit';
import { usersApi } from '@/features/users/redux/api';
import { storesApi } from '@/features/stores/redux/api';
import { barcodesApi } from '@/features/barcodes/redux/api';
import { cashboxesApi } from '@/features/cashboxes/redux/api';

export default () => combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [storesApi.reducerPath]: storesApi.reducer,
  [barcodesApi.reducerPath]: barcodesApi.reducer,
  [cashboxesApi.reducerPath]: cashboxesApi.reducer
});
