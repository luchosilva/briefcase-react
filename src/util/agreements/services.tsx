import Swal from 'sweetalert2';

export const bodyToken = (type: string): RequestInit => {
  return {
    method: type,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
};

export const swalErrorAccess = () => {
  Swal.fire({ icon: 'error', title: 'Oops...', text: 'No tienes permisos para realizar esta acción' });
};
