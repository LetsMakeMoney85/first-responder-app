import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import incidentsReducer from './slices/incidentsSlice';
import respondersReducer from './slices/respondersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    incidents: incidentsReducer,
    responders: respondersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;