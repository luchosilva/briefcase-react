import { getApiUrl } from 'config';
import Swal from 'sweetalert2';

interface Props {
  id: string;
}

export const getFile = async ({ id }: Props) => {
  try {
    const url = getApiUrl(`/agreements/${id}/resolution`);
    const response = await fetch(url);
    if (response.status === 200) return window.open(url, '_blank');
    return Swal.fire({ title: 'Error', text: 'El convenio no tiene resolucion', icon: 'error' });
  } catch (err) {}
};
