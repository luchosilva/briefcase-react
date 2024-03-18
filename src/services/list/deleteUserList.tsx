import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus } from 'util/util';

interface DeleteUserListProps {
  path: string;
  setEditMode: any;
  setError?: any;
  setLoading: any;
  access: any;
}

export const deleteUserList = async ({ path, setError, setLoading, setEditMode, access }: DeleteUserListProps) => {
  if (!validPermission(access.role)) return swalErrorAccess();

  setLoading(true);
  const options: RequestInit = { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, credentials: 'include' };
  const response = await fetch(getApiUrl(path), options).finally(() => setLoading(false));
  if (response.status === 200) {
    setError('');
    Swal.fire('Lista eliminada', 'La lista se ha eliminado exitosamente', 'success').then(() => window.location.reload());
    setEditMode(false);
  }
  if (response.status === 404) setError('No se encontró la lista');
  if (response.status === 400) setError('Error en los datos');
  responseStatus(response, access.router, access.dispatch);
};
