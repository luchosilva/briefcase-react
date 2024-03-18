import {
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAIL,
  GET_RUT_SUCCESS,
  GET_RUT_FAIL,
  GET_PERSONAL_INFORMATION_SUCCESS,
  GET_PERSONAL_INFORMATION_FAIL,
} from '../../utils/types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store/store';
import { PersonalInformation } from 'services/auth/GetPersonalInformation';

export enum Role {
  Visualizador = 1,
  Editor = 2,
  Administrador = 3,
}
export type UserState = {
  isAuthenticated: boolean;
  loading: boolean;
  role: Role | null | any;
  rut: string;
  user: PersonalInformation;
};

const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  role: null,
  rut: '',
  user: {
    cod_ficha: 0,
    foto: '',
    nombre: '',
    cta_email: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth(state, { payload }: PayloadAction<{ type: string; data: any }>) {
      switch (payload.type) {
        case SET_AUTH_LOADING:
          return {
            ...state,
            loading: true,
          };
        case REMOVE_AUTH_LOADING:
          return {
            ...state,
            loading: false,
          };
        case AUTHENTICATED_SUCCESS:
          return {
            ...state,
            isAuthenticated: true,
          };
        case GET_PERSONAL_INFORMATION_SUCCESS:
          return {
            ...state,
            user: payload.data,
          };
        case GET_ROLE_SUCCESS:
          return {
            ...state,
            role: payload.data,
          };
        case GET_RUT_SUCCESS:
          return {
            ...state,
            rut: payload.data,
          };
        case GET_RUT_FAIL:
        case AUTHENTICATED_FAIL:
        case GET_ROLE_FAIL:
        case GET_PERSONAL_INFORMATION_FAIL:
        case LOGOUT:
          return {
            ...state,
            isAuthenticated: false,
            isValidated: false,
            loading: false,
            role: null,
            user: {
              cod_ficha: 0,
              foto: '',
              nombre: '',
              cta_email: '',
            },
          };
        default:
          return state;
      }
    },
  },
});

export const { auth } = authSlice.actions;

export const selectAuth = (state: RootState) => state[authSlice.name];
