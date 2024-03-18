import { getApiUrl } from 'config';
import { responseStatus } from 'util/util';

interface DeleteItemListProps {
  rut: string;
  activeList: any;
  agreementId: any;
  access: any;
}

export const deleteItemList = async ({ rut, activeList, agreementId, access }: DeleteItemListProps) => {
  const options: RequestInit = { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, credentials: 'include' };
  try {
    const response = await fetch(getApiUrl(`/users/${rut}/agreement-lists/${activeList}/agreements/${agreementId}`), options);
    if (response.status === 200) return 'Convenio eliminado correctamente';
    if (response.status === 500) return 'Error en el servidor';
    if (response.status === 422) return 'El convenio ya se encuentra Eliminado de una lista';
    if (response.status === 404) return 'No se encontró el convenio';
    if (response.status === 400) return 'Error en los datos';
    responseStatus(response, access.router, access.dispatch);
    return 'Error en la Conexión';
  } catch (error) {
    return 'Error en la Conexión';
  }
};
