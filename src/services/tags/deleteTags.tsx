import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { responseStatus } from 'util/util';

interface DeleteTagsProps {
  editTag: any;
  tags: any;
  setTags: any;
  closeModalEditTag: any;
  setLoadingEdit: any;
  setErrorEdit: any;
  access: any;
}

export const deleteTags = async ({ editTag, tags, setTags, closeModalEditTag, setLoadingEdit, setErrorEdit, access }: DeleteTagsProps) => {
  setLoadingEdit(true);
  const options: RequestInit = { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, credentials: 'include' };

  try {
    const response = await fetch(getApiUrl('/tags/' + editTag.corr_etiq), options);
    if (response.status === 200) {
      closeModalEditTag();
      const current: any = tags;
      setTags(current.filter((item: any) => item.corr_etiq !== editTag.corr_etiq));
      Swal.fire('Etiqueta Eliminada', 'La etiqueta se elimino exitosamente', 'success');
    }
    if (response.status === 404) {
      setLoadingEdit(false);
      setErrorEdit('No se encontro la etiqueta');
    }

    responseStatus(response, access.router, access.dispatch);
  } catch (errorCatch) {
    setLoadingEdit(false);
    Swal.fire('Error', 'Ha ocurrido un problema inesperado', 'error');
  }
};
