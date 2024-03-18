import { getApiUrl } from 'config';
import { swalErrorAccess } from 'util/agreements/services';
import { validPermission } from 'util/auth/auth';
import { responseStatus, validateFilter } from 'util/util';

interface GetListFilter {
  page: number;
  body: any;
  setTotalPages: any;
  setListAgreement: any;
  setLoadingBar: any;
  setPage: any;
  access: any;
}

export const getListFilter = async ({ page, body, setTotalPages, setListAgreement, setLoadingBar, setPage, access }: GetListFilter) => {
  try {
    setLoadingBar(true);
    setPage(page);
    let urlDefault = `/users/${body.rut}/agreement-lists/${body.activeList}/agreements?page=${page}`;
    urlDefault = validateFilter(urlDefault, body);

    if (!validPermission(access.role)) return swalErrorAccess();

    const response = await fetch(getApiUrl(urlDefault), { credentials: 'include' });
    if (response.status === 200) {
      const json = await response.json();
      if (typeof json.agreements !== 'undefined') {
        setListAgreement(json.agreements);
        setTotalPages(json.tot_convs);
      } else {
        setListAgreement([]);
        setTotalPages(0);
      }
    }
    responseStatus(response, access.router, access.dispatch)
  } catch (err) {
    setListAgreement([]);
  } finally {
    setLoadingBar(false);
  }
};
