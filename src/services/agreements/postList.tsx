import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { responseStatus } from 'util/util';

interface PostListProps {
  rut: string;
  body: any;
  setLoading: any;
  setError: any;
  closeModal: any;
  access: any;
}

export const postList = async ({ rut, body, setLoading, setError, closeModal, access }: PostListProps) => {
  setLoading(true);
  const options: RequestInit = { method: 'POST', body, headers: { 'Content-Type': 'application/json' }, credentials: 'include' };
  try {
    const response = await fetch(getApiUrl('/users/' + rut), options);
    if (response.status === 201) {
      closeModal();
      Swal.fire('Lista Nueva', 'La lista se a creado exitosamente', 'success').then(() => window.location.reload());
    }
    if (response.status === 409) {
      setLoading(false);
      setError(response.statusText);
    }
    responseStatus(response, access.router, access.dispatch);
  } catch (err) {
    setLoading(false);
    Swal.fire('Error', 'Ha ocurrido un problema inesperado', 'error');
  }
};
