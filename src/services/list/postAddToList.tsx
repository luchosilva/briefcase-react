import { getApiUrl } from 'config';
import { responseStatus } from 'util/util';

interface PostAddToList {
  rut: string;
  listId: any;
  id: any;
  setError: any;
  access: any;
}

export const postAddToList = async ({ rut, listId, id, setError, access }: PostAddToList) => {
  const options: RequestInit = { method: 'POST', credentials: 'include', body: JSON.stringify({ id }), headers: { 'Content-Type': 'application/json' } };
  const response = await fetch(getApiUrl(`/users/${rut}/agreement-lists/${listId}`), options);
  if (response.status === 201) return setError('Agregado con éxito');
  if (response.status === 500) return setError('Error en el servidor');
  if (response.status === 422) return setError('El convenio ya se encuentra agregado a la lista');
  if (response.status === 404) return setError('No se encontró el convenio');
  responseStatus(response, access.router, access.dispatch);
  setError('Error de conexión');
};
