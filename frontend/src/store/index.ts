import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import incidentReducer from './slices/incidentSlice';
import responderReducer from './slices/responderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    incidents: incidentReducer,
    responders: responderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
