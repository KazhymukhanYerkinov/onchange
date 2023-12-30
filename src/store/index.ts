import { configureStore } from '@reduxjs/toolkit';

// api
import { usersApi } from '@/features/users/redux/api';
import { storesApi } from '@/features/stores/redux/api';
import { barcodesApi } from '@/features/barcodes/redux/api';

import createRootReducer from './reducer';
import { cashboxesApi } from '@/features/cashboxes/redux/api';

const middleware = [
  usersApi.middleware,
  storesApi.middleware,
  barcodesApi.middleware,
  cashboxesApi.middleware
];

export default (initialState?: Record<string, unknown>) => {
  const store = configureStore({
    reducer: createRootReducer(),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: true
  });

  return store;
};
