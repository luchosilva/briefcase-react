import { getApiUrl } from 'config';
import Swal from 'sweetalert2';
import { bodyToken, swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus } from 'util/util';

interface GetAccess {
  path: string;
  access: any;
}

interface GetDataAndLoading extends GetAccess {
  setData: any;
  setLoading: any;
}

export const getWithAccess = async ({ path, access }: GetAccess) => {
  try {
    const response = await fetch(getApiUrl(path), bodyToken('GET'));
    if (response.status === 200) return await response.json();
    responseStatus(response, access.router, access.dispatch);
    return [];
  } catch (err) {
    return [];
  }
};

export const getWithAccessData = async ({ path, setData, setLoading, access }: GetDataAndLoading) => {
  try {
    setLoading(true);

    if (validPermission(access.role)) {
      const response = await fetch(getApiUrl(path), bodyToken('GET'));
      const { status } = response;
      if (status === 200) {
        const json = await response.json();
        setLoading(false);

        if (typeof json !== 'undefined') {
          setData(json);
        } else {
          setData([]);
        }
      }
      responseStatus(response, access.router, access.dispatch);
    } else {
      swalErrorAccess();
    }
  } catch (err) {
    Swal.fire({ title: 'Error', text: 'Error del servidor', icon: 'error' });
  } finally {
    setLoading(false);
  }
};
