import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { authSlice } from '../auth/slices/authSlice';

export const rootReducers = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
