import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { responseStatus } from 'util/util';

interface PostTagsProps {
  options: any;
  closeModalNewTag: any;
  setLoading: any;
  setError: any;
  access: any;
}

export const postTags = async ({ options, closeModalNewTag, setLoading, setError, access }: PostTagsProps) => {
  setLoading(true);
  try {
    const response = await fetch(getApiUrl('/tags'), options);
    if (response.status === 201) {
      closeModalNewTag();
      Swal.fire('Etiqueta Nueva', 'La etiqueta se a creado exitosamente', 'success').then(() => window.location.reload());
    }
    if (response.status === 409) {
      setLoading(false);
      setError('Ya existe una etiqueta con este nombre');
    }

    responseStatus(response, access.router, access.dispatch);
  } catch (err) {
    setLoading(false);
    Swal.fire('Error', 'Ha ocurrido un problema inesperado', 'error');
  }
};
