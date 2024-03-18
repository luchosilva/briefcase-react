import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { responseStatus } from 'util/util';

interface PutTagsProps {
  body: any;
  editTag: any;
  tags: any;
  setTags: any;
  closeModalEditTag: any;
  setLoadingEdit: any;
  setErrorEdit: any;
  access: any;
}

export const putTags = async ({ body, editTag, tags, setTags, closeModalEditTag, setLoadingEdit, setErrorEdit, access }: PutTagsProps) => {
  setLoadingEdit(true);
  const options: RequestInit = { method: 'PUT', body, headers: { 'Content-Type': 'application/json' }, credentials: 'include' };
  try {
    const response = await fetch(getApiUrl('/tags/' + editTag.corr_etiq), options);
    if (response.status === 200) {
      closeModalEditTag();
      const current: any = tags;
      setTags(current?.map((item: any) => (item.corr_etiq == editTag.corr_etiq ? editTag : item)));
      Swal.fire('Etiqueta Editada', 'La etiqueta se a editado exitosamente', 'success');
    }
    if (response.status === 404) {
      setLoadingEdit(false);
      setErrorEdit('No se encontro la etiqueta');
    }
    if (response.status === 409) {
      setLoadingEdit(false);
      setErrorEdit('Ya existe una etiqueta con este nombre');
    }
    responseStatus(response, access.router, access.dispatch);
  } catch (errorCatch) {
    setLoadingEdit(false);
    Swal.fire('Error', 'Ha ocurrido un problema inesperado', 'error');
  }
};
