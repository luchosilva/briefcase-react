import {
  SET_AUTH_LOADING,
  AUTHENTICATED_FAIL,
  LOGOUT,
  AUTHENTICATED_SUCCESS,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAIL,
  GET_RUT_FAIL,
  GET_RUT_SUCCESS,
  REMOVE_AUTH_LOADING,
  GET_PERSONAL_INFORMATION_SUCCESS,
  GET_PERSONAL_INFORMATION_FAIL,
} from '../../utils/types';
import { auth } from '../slices/authSlice';
import { AppThunk } from '../../store/store';
import { ActionCreator } from '@reduxjs/toolkit';
import { getApiUrl } from '../../../config';
import { bodyToken } from 'util/agreements/services';
import getPersonalInformation, { PersonalInformation } from 'services/auth/GetPersonalInformation';

export const login: ActionCreator<AppThunk> = () => async (dispatch) => {
  dispatch(auth({ type: SET_AUTH_LOADING, data: null }));
  try {
    const res = await fetch(`${getApiUrl('/auth/decryptRut')}`, bodyToken('GET')).then((response) => {
      return response.json();
    });
    const { rut, role } = res;
    if (rut && role) {
      dispatch(auth({ type: GET_ROLE_SUCCESS, data: role }));
      dispatch(auth({ type: GET_RUT_SUCCESS, data: rut }));
    } else {
      dispatch(auth({ type: GET_RUT_FAIL, data: null }));
      dispatch(auth({ type: GET_ROLE_FAIL, data: null }));
    }
  } catch (err) {
    dispatch(auth({ type: AUTHENTICATED_FAIL, data: null }));
  }
};

export const requestPersonalInformation: ActionCreator<AppThunk> = (rut: string) => async (dispatch) => {
  try {
    const res: PersonalInformation = await getPersonalInformation(rut).then((personalInformation) => {
      if (personalInformation?.foto) {
        const url: string = 'data:image/jpg;base64,' + Buffer.from(personalInformation.foto).toString('base64');
        return { ...personalInformation, foto: url };
      } else {
        return { ...personalInformation };
      }
    });
    if (res) {
      dispatch(auth({ type: GET_PERSONAL_INFORMATION_SUCCESS, data: res }));
      dispatch(auth({ type: REMOVE_AUTH_LOADING, data: null }));
      dispatch(auth({ type: AUTHENTICATED_SUCCESS, data: null }));
    } else {
      dispatch(auth({ type: GET_PERSONAL_INFORMATION_FAIL, data: null }));
    }
  } catch (err) {
    dispatch(auth({ type: AUTHENTICATED_FAIL, data: null }));
  }
};
/*
 */

export const logout: ActionCreator<AppThunk> = () => async (dispatch) => {
  dispatch(auth({ type: LOGOUT, data: null }));
};
