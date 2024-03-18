import { logout } from '../../redux/auth/actions/auth';
import { Role } from '../../redux/auth/slices/authSlice';

export const validPermission = (role: Role) => {
  return role === Role.Administrador || role === Role.Editor || role === Role.Visualizador;
};

export const validPermissionAdmin = (role: Role) => {
  return role === Role.Administrador;
};

export const validPermissionVisualizador = (role: Role) => {
  return role === Role.Visualizador;
};

export const validPermissionEditor = (role: Role) => {
  return role === Role.Editor;
};

export const goToErrorPage = (router: any) => {
  router.push('/error');
};

export const removePermission = (router: any, typeError: any, dispatch: any) => {
  dispatch(logout());
  typeError === '401' ? router.push('/error/sessionexpire') : router.push('/error');
};
