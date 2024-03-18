import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus } from 'util/util';

interface PutUserListProps {
  path: string;
  newName: string;
  setEditMode: any;
  setError: any;
  setLoading: any;
  setNewName: any;
  access: any;
}

export const putUserList = async ({ path, newName, setError, setLoading, setEditMode, setNewName, access }: PutUserListProps) => {
  if (!validPermission(access.role)) return swalErrorAccess();

  setLoading(true);
  const options: RequestInit = { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, credentials: 'include' };
  const response = await fetch(getApiUrl(path), options).finally(() => setLoading(false));
  if (response.status === 200) {
    setNewName(newName);
    setError('');
    Swal.fire('Nombre editado', 'El nombre de la lista se ha actualizado correctamente', 'success').then(() => window.location.reload());
    setEditMode(false);
  }
  if (response.status === 404) setError('No se encontró la lista');
  if (response.status === 400) setError('Error en los datos');
  responseStatus(response, access.router, access.dispatch);
};
